import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { readFileSync, existsSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'fs';
import { spawn } from 'child_process';

// 自定义插件：服务 output 目录的静态文件 + API
function serveOutputPlugin() {
  const outputDir = resolve(__dirname, '../../output');
  const dataDir = resolve(__dirname, '../../data');
  
  return {
    name: 'serve-output',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        // API: 获取已生成的schema列表
        if (req.url === '/api/schemas') {
          try {
            const schemas: string[] = [];
            
            // 递归扫描所有包含index.mjs的目录
            const scanDirectory = (dir: string, baseDir: string) => {
              if (!existsSync(dir)) return;
              const items = readdirSync(dir);
              
              for (const item of items) {
                const itemPath = resolve(dir, item);
                const stat = statSync(itemPath);
                
                if (stat.isDirectory()) {
                  // 检查当前目录是否有index.mjs
                  const indexPath = resolve(itemPath, 'index.mjs');
                  if (existsSync(indexPath)) {
                    // 获取相对路径作为key
                    const relativePath = itemPath.replace(baseDir + '/', '');
                    schemas.push(relativePath);
                  }
                  // 继续递归扫描子目录
                  scanDirectory(itemPath, baseDir);
                }
              }
            };
            
            scanDirectory(outputDir, outputDir);
            
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(schemas));
            return;
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: (e as Error).message }));
            return;
          }
        }

        // API: 获取已缓存的options列表
        if (req.url === '/api/cache/options') {
          try {
            const cached: string[] = [];
            const optionsPath = resolve(dataDir, 'base/options');
            
            // 递归扫描所有.mjs文件
            const scanDirectory = (dir: string, baseDir: string) => {
              if (!existsSync(dir)) return;
              const items = readdirSync(dir);
              for (const item of items) {
                const itemPath = resolve(dir, item);
                const stat = statSync(itemPath);
                if (stat.isDirectory()) {
                  scanDirectory(itemPath, baseDir);
                } else if (item.endsWith('.mjs')) {
                  // 获取相对路径作为key（去除.mjs扩展名）
                  const relativePath = itemPath.replace(baseDir + '/', '').replace('.mjs', '');
                  cached.push(relativePath);
                }
              }
            };
            
            scanDirectory(optionsPath, optionsPath);
            
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(cached));
            return;
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: (e as Error).message }));
            return;
          }
        }

        // API: 获取翻译条目数量
        if (req.url === '/api/translations/count') {
          try {
            const zhCNPath = resolve(dataDir, 'i18n/zh-CN.json');
            if (existsSync(zhCNPath)) {
              const content = readFileSync(zhCNPath, 'utf-8');
              const data = JSON.parse(content);
              const count = Object.keys(data).length;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ count }));
              return;
            }
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Translation file not found' }));
            return;
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: (e as Error).message }));
            return;
          }
        }

        // API: 下载指定的option（简化版：创建占位文件，提示用户使用CLI）
        if (req.url?.startsWith('/api/fetch/option/')) {
          const key = req.url.replace('/api/fetch/option/', '');
          
          try {
            res.setHeader('Content-Type', 'application/json');
            
            // 返回提示信息，告诉用户需要在终端运行CLI命令
            res.end(JSON.stringify({ 
              success: false,
              needCLI: true,
              key,
              message: `请在终端运行命令下载: pnpm cli fetch -k ${key} --save-to-base`,
              command: `pnpm cli fetch -k ${key} --save-to-base`
            }));
            return;
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ 
              success: false,
              error: (e as Error).message,
              key
            }));
            return;
          }
        }

        // 服务静态文件
        if (req.url?.startsWith('/output/')) {
          const filePath = resolve(outputDir, req.url.replace('/output/', ''));
          
          if (existsSync(filePath)) {
            const content = readFileSync(filePath, 'utf-8');
            res.setHeader('Content-Type', 'application/javascript');
            res.end(content);
            return;
          }
        }
        
        // 服务 data 目录的文件
        if (req.url?.startsWith('/data/')) {
          const filePath = resolve(dataDir, req.url.replace('/data/', ''));
          
          if (existsSync(filePath)) {
            const content = readFileSync(filePath, 'utf-8');
            res.setHeader('Content-Type', 'application/javascript');
            res.end(content);
            return;
          }
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [vue(), serveOutputPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      // 允许访问项目根目录的 output 文件夹
      '/schemas': resolve(__dirname, '../../output'),
      // 允许访问项目根目录的 data 文件夹
      '@data': resolve(__dirname, '../../data')
    }
  },
  // 配置额外的静态资源目录
  publicDir: 'public',
  server: {
    port: 3001,
    host: true,
    fs: {
      // 允许访问项目根目录的 output 文件夹
      allow: ['..', '../..']
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
