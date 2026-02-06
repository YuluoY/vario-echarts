export default [
  {
    "type": "ElCollapseItem",
    "props": {
      "title": "平行坐标系",
      "name": "parallel"
    },
    "children": [
      {
        "type": "ElInput",
        "model": {
          "path": "series.parallel.type",
          "default": "parallel"
        },
        "props": {
          "placeholder": "类型"
        },
        "_raw": {
          "label": "类型"
        }
      },
      {
        "type": "ElInput",
        "model": "series.parallel.id",
        "props": {
          "placeholder": "ID"
        },
        "_raw": {
          "label": "ID",
          "desc": "<p>组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.parallel.coordinateSystem",
          "default": "parallel"
        },
        "props": {
          "placeholder": "坐标系"
        },
        "_raw": {
          "label": "坐标系",
          "desc": "<p>指定另一个坐标系组件，本 <code class=\"codespan\">series-parallel</code> 布局在那个坐标系中。</p>\n<p>可选值：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;parallel&#39;</code></p>\n<p>  布局在一个 <a href=\"#parallel\">平行坐标系</a> 中。当一个 ECharts 实例中存在多个平行坐标系时，须通过 <a href=\"#series-parallel.parallelIndex\">parallelIndex</a> 或 <a href=\"#series-parallel.parallelId\">parallelId</a> 指定所使用的平行坐标系。</p>\n</li>\n</ul>\n<p><strong>下表总结了“某系列或组件是否支持布局在某坐标系上”：</strong></p>\n<p>最左列列出了要布局的系列和组件（坐标系本身也是组件），最上行列出了所基于的坐标系。</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th>no coord sys</th>\n<th><a href=\"#grid\">grid</a> (cartesian2d)</th>\n<th><a href=\"#polar\">polar</a></th>\n<th><a href=\"#geo\">geo</a></th>\n<th><a href=\"#singleAxis\">singleAxis</a></th>\n<th><a href=\"#radar\">radar</a></th>\n<th><a href=\"#parallel\">parallel</a></th>\n<th><a href=\"#calendar\">calendar</a></th>\n<th><a href=\"#matrix\">matrix</a></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a href=\"#grid\">grid</a> (cartesian2d)</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#polar\">polar</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#geo\">geo</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#singleAxis\">singleAxis</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#calendar\">calendar</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#matrix\">matrix</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-line\">series-line</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n</tr>\n<tr>\n<td><a href=\"#series-bar\">series-bar</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n</tr>\n<tr>\n<td><a href=\"#series-pie\">series-pie</a></td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-scatter\">series-scatter</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-effectScatter\">series-effectScatter</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-radar\">series-radar</a></td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过 <a href=\"#radar\">radar</a> 坐标系)</td>\n<td>❌ (✅ 如果通过 <a href=\"#radar\">radar</a> 坐标系)</td>\n</tr>\n<tr>\n<td><a href=\"#series-tree\">series-tree</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-treemap\">series-treemap</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-sunburst\">series-sunburst</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-boxplot\">series-boxplot</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n</tr>\n<tr>\n<td><a href=\"#series-candlestick\">series-candlestick</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n</tr>\n<tr>\n<td><a href=\"#series-heatmap\">series-heatmap</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>❌</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-map\">series-map</a></td>\n<td>✅ (create a geo coord sys exclusively)</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-parallel\">series-parallel</a></td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>❌ (✅ 如果通过 <a href=\"#parallel\">parallel</a> 坐标系)</td>\n<td>❌ (✅ 如果通过 <a href=\"#parallel\">parallel</a> 坐标系)</td>\n</tr>\n<tr>\n<td><a href=\"#series-lines\">series-lines</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#geo\">geo</a>)</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#geo\">geo</a>)</td>\n</tr>\n<tr>\n<td><a href=\"#series-graph\">series-graph</a></td>\n<td>✅ (create a &quot;view&quot; coord sys exclusively)</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-sankey\">series-sankey</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-funnel\">series-funnel</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-gauge\">series-gauge</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-pictorialBar\">series-pictorialBar</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n</tr>\n<tr>\n<td><a href=\"#series-themeRiver\">series-themeRiver</a></td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#singleAxis\">singleAxis</a>)</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#singleAxis\">singleAxis</a>)</td>\n</tr>\n<tr>\n<td><a href=\"#series-chord\">series-chord</a></td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#title\">title</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#legend\">legend</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#dataZoom\">dataZoom</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#visualMap\">visualMap</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#toolbox\">toolbox</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#timeline\">timeline</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#thumbnail\">thumbnail</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n</tbody>\n</table>\n<p>也参见 <a href=\"#series-parallel.coordinateSystemUsage\">series-parallel.coordinateSystemUsage</a>。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.parallel.parallelIndex",
          "default": 0
        },
        "props": {
          "placeholder": "平行索引"
        },
        "_raw": {
          "label": "平行索引",
          "desc": "<p>布局时所基于的 <a href=\"#parallel\">平行坐标系</a> 的 index。当一个 ECharts 实例中存在多个平行坐标系时，用其指定所使用的坐标系。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": "series.parallel.name",
        "props": {
          "placeholder": "名称"
        },
        "_raw": {
          "label": "名称",
          "desc": "<p>系列名称，用于<a href=\"#tooltip\">tooltip</a>的显示，<a href=\"#legend\">legend</a> 的图例筛选，在 <code class=\"codespan\">setOption</code> 更新数据和配置项时用于指定对应的系列。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.parallel.colorBy",
          "default": "series"
        },
        "props": {
          "placeholder": "着色依据"
        },
        "_raw": {
          "label": "着色依据",
          "desc": "\n\n\n\n<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.2.0</code> 开始支持\n\n</div>\n\n\n\n<p>从调色盘 <a href=\"#color\">option.color</a> 中取色的策略，可取值为：</p>\n<ul>\n<li><code class=\"codespan\">&#39;series&#39;</code>：按照系列分配调色盘中的颜色，同一系列中的所有数据都是用相同的颜色；</li>\n<li><code class=\"codespan\">&#39;data&#39;</code>：按照数据项分配调色盘中的颜色，每个数据项都使用不同的颜色。</li>\n</ul>\n"
        }
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "线条样式",
          "name": "lineStyle"
        },
        "children": [
          {
            "type": "SmartColorInput",
            "model": {
              "path": "series.parallel.lineStyle.color",
              "default": "#000"
            },
            "props": {
              "placeholder": "颜色",
              "keywords": [
                "inherit",
                "none",
                "transparent"
              ],
              "allowInherit": true
            },
            "_raw": {
              "label": "颜色",
              "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
            }
          },
          {
            "type": "SmartSizeInput",
            "model": {
              "path": "series.parallel.lineStyle.width",
              "default": 1
            },
            "props": {
              "placeholder": "宽度",
              "allowPercentage": true,
              "keywords": [
                "auto"
              ]
            },
            "_raw": {
              "label": "宽度",
              "desc": "\n\n<p>线宽。</p>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": {
              "path": "series.parallel.lineStyle.type",
              "default": "solid"
            },
            "props": {
              "placeholder": "类型",
              "types": [
                "string",
                "number",
                "array"
              ],
              "defaultType": "string",
              "specialKeywords": [
                "solid"
              ]
            },
            "_raw": {
              "label": "类型",
              "desc": "\n\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">dashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\ntype: [5, 10],\n\ndashOffset: 5\n}\n</code></pre>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "series.parallel.lineStyle.dashOffset",
              "default": 0
            },
            "props": {
              "placeholder": "虚线偏移"
            },
            "_raw": {
              "label": "虚线偏移",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">type</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "series.parallel.lineStyle.cap",
              "default": "butt"
            },
            "props": {
              "placeholder": "线帽"
            },
            "_raw": {
              "label": "线帽",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "series.parallel.lineStyle.join",
              "default": "bevel"
            },
            "props": {
              "placeholder": "连接点"
            },
            "_raw": {
              "label": "连接点",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">miterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "series.parallel.lineStyle.miterLimit",
              "default": 10
            },
            "props": {
              "placeholder": "斜接限制"
            },
            "_raw": {
              "label": "斜接限制",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">join</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">miterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "series.parallel.lineStyle.shadowBlur",
            "props": {
              "placeholder": "阴影模糊"
            },
            "_raw": {
              "label": "阴影模糊",
              "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": "series.parallel.lineStyle.shadowColor",
            "props": {
              "placeholder": "阴影颜色",
              "keywords": [
                "inherit",
                "none",
                "transparent"
              ],
              "allowInherit": true
            },
            "_raw": {
              "label": "阴影颜色",
              "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "series.parallel.lineStyle.shadowOffsetX",
              "default": 0
            },
            "props": {
              "placeholder": "阴影X偏移"
            },
            "_raw": {
              "label": "阴影X偏移",
              "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "series.parallel.lineStyle.shadowOffsetY",
              "default": 0
            },
            "props": {
              "placeholder": "阴影Y偏移"
            },
            "_raw": {
              "label": "阴影Y偏移",
              "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n"
            }
          },
          {
            "type": "SmartOpacityInput",
            "model": {
              "path": "series.parallel.lineStyle.opacity",
              "default": 0.45
            },
            "props": {
              "placeholder": "不透明度",
              "min": 0,
              "max": 1,
              "step": 0.1,
              "keywords": [
                "inherit"
              ]
            },
            "_raw": {
              "label": "不透明度",
              "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n"
            }
          }
        ]
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "高亮",
          "name": "emphasis"
        },
        "children": [
          {
            "type": "ElSwitch",
            "model": {
              "path": "series.parallel.emphasis.disabled",
              "default": false
            },
            "props": {
              "placeholder": "禁用"
            },
            "_raw": {
              "label": "禁用",
              "desc": "\n\n\n\n<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.3.0</code> 开始支持\n\n</div>\n\n\n\n<p>是否关闭高亮状态。</p>\n<p>关闭高亮状态可以在鼠标移到图形上，tooltip 触发，或者图例联动的时候不再触发高亮效果。在图形非常多的时候可以关闭以提升交互流畅性。</p>\n"
            }
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "线条样式",
              "name": "lineStyle"
            },
            "children": [
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "series.parallel.emphasis.lineStyle.color",
                  "default": "#000"
                },
                "props": {
                  "placeholder": "颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "颜色",
                  "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
                }
              },
              {
                "type": "SmartSizeInput",
                "model": {
                  "path": "series.parallel.emphasis.lineStyle.width",
                  "default": 1
                },
                "props": {
                  "placeholder": "宽度",
                  "allowPercentage": true,
                  "keywords": [
                    "auto"
                  ]
                },
                "_raw": {
                  "label": "宽度",
                  "desc": "\n\n<p>线宽。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "series.parallel.emphasis.lineStyle.type",
                  "default": "solid"
                },
                "props": {
                  "placeholder": "类型",
                  "types": [
                    "string",
                    "number",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": [
                    "solid"
                  ]
                },
                "_raw": {
                  "label": "类型",
                  "desc": "\n\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">dashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\ntype: [5, 10],\n\ndashOffset: 5\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.parallel.emphasis.lineStyle.dashOffset",
                  "default": 0
                },
                "props": {
                  "placeholder": "虚线偏移"
                },
                "_raw": {
                  "label": "虚线偏移",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">type</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.parallel.emphasis.lineStyle.cap",
                  "default": "butt"
                },
                "props": {
                  "placeholder": "线帽"
                },
                "_raw": {
                  "label": "线帽",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.parallel.emphasis.lineStyle.join",
                  "default": "bevel"
                },
                "props": {
                  "placeholder": "连接点"
                },
                "_raw": {
                  "label": "连接点",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">miterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.parallel.emphasis.lineStyle.miterLimit",
                  "default": 10
                },
                "props": {
                  "placeholder": "斜接限制"
                },
                "_raw": {
                  "label": "斜接限制",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">join</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">miterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "series.parallel.emphasis.lineStyle.shadowBlur",
                "props": {
                  "placeholder": "阴影模糊"
                },
                "_raw": {
                  "label": "阴影模糊",
                  "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": "series.parallel.emphasis.lineStyle.shadowColor",
                "props": {
                  "placeholder": "阴影颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "阴影颜色",
                  "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.parallel.emphasis.lineStyle.shadowOffsetX",
                  "default": 0
                },
                "props": {
                  "placeholder": "阴影X偏移"
                },
                "_raw": {
                  "label": "阴影X偏移",
                  "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.parallel.emphasis.lineStyle.shadowOffsetY",
                  "default": 0
                },
                "props": {
                  "placeholder": "阴影Y偏移"
                },
                "_raw": {
                  "label": "阴影Y偏移",
                  "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n"
                }
              },
              {
                "type": "SmartOpacityInput",
                "model": {
                  "path": "series.parallel.emphasis.lineStyle.opacity",
                  "default": 0.45
                },
                "props": {
                  "placeholder": "不透明度",
                  "min": 0,
                  "max": 1,
                  "step": 0.1,
                  "keywords": [
                    "inherit"
                  ]
                },
                "_raw": {
                  "label": "不透明度",
                  "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n"
                }
              }
            ]
          }
        ]
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.parallel.inactiveOpacity",
          "default": 0.05
        },
        "props": {
          "placeholder": "非活动透明度"
        },
        "_raw": {
          "label": "非活动透明度",
          "desc": "\n\n<p>框选时，未被选中的条线会设置成这个『透明度』（从而可以达到变暗的效果）。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.parallel.activeOpacity",
          "default": 1
        },
        "props": {
          "placeholder": "活动透明度"
        },
        "_raw": {
          "label": "活动透明度",
          "desc": "\n\n<p>框选时，选中的条线会设置成这个『透明度』（从而可以达到高亮的效果）。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "series.parallel.realtime",
          "default": true
        },
        "props": {
          "placeholder": "实时更新"
        },
        "_raw": {
          "label": "实时更新",
          "desc": "\n\n<p>是否实时刷新。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "series.parallel.smooth",
          "default": false
        },
        "props": {
          "placeholder": "平滑",
          "types": [
            "boolean",
            "number"
          ],
          "defaultType": "boolean",
          "specialKeywords": []
        },
        "_raw": {
          "label": "平滑",
          "desc": "\n\n<p>是否使用平滑曲线。默认为 <code class=\"codespan\">false</code>，可以设置为 <code class=\"codespan\">true</code> 或者一个范围为 <code class=\"codespan\">0</code> 到 <code class=\"codespan\">1</code> 的小数值，指定平滑程度。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.parallel.progressive",
          "default": 500
        },
        "props": {
          "placeholder": "渐进渲染"
        },
        "_raw": {
          "label": "渐进渲染",
          "desc": "<p>渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。</p>\n<p>在图中有数千到几千万图形元素的时候，一下子把图形绘制出来，或者交互重绘的时候可能会造成界面的卡顿甚至假死。ECharts 4 开始全流程支持渐进渲染（progressive rendering），渲染的时候会把创建好的图形分到数帧中渲染，每一帧渲染只渲染指定数量的图形。</p>\n<p>该配置项就是用于配置该系列每一帧渲染的图形数，可以根据图表图形复杂度的需要适当调整这个数字使得在不影响交互流畅性的前提下达到绘制速度的最大化。比如在 lines 图或者平行坐标中线宽大于 1 的 polyline 绘制会很慢，这个数字就可以设置小一点，而线宽小于等于 1 的 polyline 绘制非常快，该配置项就可以相对调得比较大。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.parallel.progressiveThreshold",
          "default": 3000
        },
        "props": {
          "placeholder": "渐进阈值"
        },
        "_raw": {
          "label": "渐进阈值",
          "desc": "<p>启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.parallel.progressiveChunkMode",
          "default": "sequential"
        },
        "props": {
          "placeholder": "渐进分块模式"
        },
        "_raw": {
          "label": "渐进分块模式",
          "desc": "<p>分片的方式。可选值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;sequential&#39;</code>: 按照数据的顺序分片。缺点是渲染过程不自然。</li>\n<li><code class=\"codespan\">&#39;mod&#39;</code>: 取模分片，即每个片段中的点会遍布于整个数据，从而能够视觉上均匀得渲染。</li>\n</ul>\n"
        }
      },
      {
        "type": "ElInput",
        "model": "series.parallel.data",
        "props": {
          "placeholder": "数据"
        },
        "_raw": {
          "label": "数据",
          "desc": "<p>例如 <a href=\"#series-parallel.data\">series-parallel.data</a> 中有如下数据：</p>\n<pre><code class=\"lang-javascript\">[\n    [1,  55,  9,   56,  0.46,  18,  6,  &#39;良&#39;],\n    [2,  25,  11,  21,  0.65,  34,  9,  &#39;优&#39;],\n    [3,  56,  7,   63,  0.3,   14,  5,  &#39;良&#39;],\n    [4,  33,  7,   29,  0.33,  16,  6,  &#39;优&#39;],\n    { // 数据项也可以是 Object，从而里面能含有对线条的特殊设置。\n        value: [5,  42,  24,  44,  0.76,  40,  16, &#39;优&#39;]\n        lineStyle: {...},\n    }\n    ...\n]\n</code></pre>\n<p>数据中，每一行是一个『数据项』，每一列属于一个『维度』。（例如上面数据每一列的含义分别是：『日期』,『AQI指数』, 『PM2.5』, 『PM10』, 『一氧化碳值』, 『二氧化氮值』, 『二氧化硫值』）。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.parallel.zlevel",
          "default": 0
        },
        "props": {
          "placeholder": "层级"
        },
        "_raw": {
          "label": "层级",
          "desc": "<p>平行坐标所有图形的 zlevel 值。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.parallel.z",
          "default": 2
        },
        "props": {
          "placeholder": "Z"
        },
        "_raw": {
          "label": "Z",
          "desc": "<p>平行坐标组件的所有图形的<code class=\"codespan\">z</code>值。控制图形的前后顺序。<code class=\"codespan\">z</code>值小的图形会被<code class=\"codespan\">z</code>值大的图形覆盖。</p>\n<p><code class=\"codespan\">z</code>相比<code class=\"codespan\">zlevel</code>优先级更低，而且不会创建新的 Canvas。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "series.parallel.silent",
          "default": false
        },
        "props": {
          "placeholder": "静默"
        },
        "_raw": {
          "label": "静默",
          "desc": "\n\n\n\n<p>图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "series.parallel.animation",
          "default": true
        },
        "props": {
          "placeholder": "动画"
        },
        "_raw": {
          "label": "动画",
          "desc": "\n\n<p>是否开启动画。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.parallel.animationThreshold",
          "default": 2000
        },
        "props": {
          "placeholder": "动画阈值"
        },
        "_raw": {
          "label": "动画阈值",
          "desc": "<p>是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "series.parallel.animationDuration",
          "default": 1000
        },
        "props": {
          "placeholder": "动画时长",
          "types": [
            "number",
            "function"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "动画时长",
          "desc": "\n\n<p>初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果：</p>\n<pre><code class=\"lang-ts\">animationDuration: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.parallel.animationEasing",
          "default": "linear"
        },
        "props": {
          "placeholder": "动画缓动"
        },
        "_raw": {
          "label": "动画缓动",
          "desc": "\n\n<p>初始动画的缓动效果。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "series.parallel.animationDelay",
          "default": 0
        },
        "props": {
          "placeholder": "动画延迟",
          "types": [
            "number",
            "function"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "动画延迟",
          "desc": "<p>初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-ts\">animationDelay: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "series.parallel.animationDurationUpdate",
          "default": 300
        },
        "props": {
          "placeholder": "更新动画时长",
          "types": [
            "number",
            "function"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "更新动画时长",
          "desc": "\n\n<p>数据更新动画的时长。</p>\n<p>支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的更新动画效果：</p>\n<pre><code class=\"lang-ts\">animationDurationUpdate: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.parallel.animationEasingUpdate",
          "default": "cubicInOut"
        },
        "props": {
          "placeholder": "更新动画缓动"
        },
        "_raw": {
          "label": "更新动画缓动",
          "desc": "\n\n<p>数据更新动画的缓动效果。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "series.parallel.animationDelayUpdate",
          "default": 0
        },
        "props": {
          "placeholder": "更新动画延迟",
          "types": [
            "number",
            "function"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "更新动画延迟",
          "desc": "<p>数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-ts\">animationDelayUpdate: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
        }
      }
    ]
  }
];
