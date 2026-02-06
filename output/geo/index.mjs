export default [
  {
    "type": "ElCollapseItem",
    "props": {
      "title": "地理坐标系",
      "name": "geo"
    },
    "children": [
      {
        "type": "ElInput",
        "model": "geo.id",
        "props": {
          "placeholder": "ID"
        },
        "_raw": {
          "label": "ID",
          "desc": "<p>组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "geo.show",
          "default": true
        },
        "props": {
          "placeholder": "显示"
        },
        "_raw": {
          "label": "显示",
          "desc": "<p>是否显示地理坐标系组件。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": "geo.map",
        "props": {
          "placeholder": "地图"
        },
        "_raw": {
          "label": "地图",
          "desc": "<p>使用 <a href=\"api.html#echarts.registerMap\" target=\"_blank\">registerMap</a> 注册的地图名称。</p>\n<p><strong>geoJSON 引入示例</strong></p>\n<pre><code class=\"lang-ts\">$.get(&#39;map/china_geo.json&#39;, function (chinaJson) {\n    echarts.registerMap(&#39;china&#39;, {geoJSON: geoJson});\n    var chart = echarts.init(document.getElementById(&#39;main&#39;));\n    chart.setOption({\n        geo: [{\n            map: &#39;china&#39;,\n            ...\n        }]\n    });\n});\n</code></pre>\n<p>也参见示例 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-hexbin\" target=\"_blank\">geoJSON hexbin</a>。</p>\n<p>如上所示，ECharts 可以使用 <a href=\"http://geojson.org/\" target=\"_blank\">GeoJSON</a> 格式的数据作为地图的轮廓，你可以获取第三方的 <a href=\"http://geojson.org/\" target=\"_blank\">GeoJSON</a> 数据注册到 ECharts 中。例如第三方资源 <a href=\"https://github.com/echarts-maps\" target=\"_blank\">maps</a>。</p>\n<p><strong>SVG 引入示例</strong></p>\n<pre><code class=\"lang-ts\">$.get(&#39;map/topographic_map.svg&#39;, function (svg) {\n    echarts.registerMap(&#39;topo&#39;, {svg: svg});\n    var chart = echarts.init(document.getElementById(&#39;main&#39;));\n    chart.setOption({\n        geo: [{\n            map: &#39;topo&#39;,\n            ...\n        }]\n    });\n});\n</code></pre>\n<p>也参见示例 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=geo-seatmap-flight\" target=\"_blank\">Flight Seatmap</a>。</p>\n<p>如上所示，ECharts 也可以使用 SVG 格式的地图。详情参见：<a href=\"https://echarts.apache.org/handbook/zh/how-to/component-types/geo/svg-base-map\" target=\"_blank\">SVG 底图</a>。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "geo.roam",
          "default": false
        },
        "props": {
          "placeholder": "漫游",
          "types": [
            "boolean",
            "string"
          ],
          "defaultType": "boolean",
          "specialKeywords": []
        },
        "_raw": {
          "label": "漫游",
          "desc": "\n\n<p>是否开启使用鼠标或触摸进行漫游（移动和缩放）。可取值有：</p>\n<ul>\n<li><code class=\"codespan\">false</code>：关闭。</li>\n<li><code class=\"codespan\">&#39;scale&#39;</code> 或 <code class=\"codespan\">&#39;zoom&#39;</code>：只能够缩放。</li>\n<li><code class=\"codespan\">&#39;move&#39;</code> 或 <code class=\"codespan\">&#39;pan&#39;</code>：只能够平移。</li>\n<li><code class=\"codespan\">true</code>：缩放和平移均可。</li>\n</ul>\n<p>当缩放和平移时，<a href=\"#geo.center\">center</a> 和 <a href=\"#geo.zoom\">zoom</a> 的值会被相应改变。</p>\n"
        }
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "投影",
          "name": "projection"
        },
        "children": [
          {
            "type": "ElInput",
            "model": "geo.projection.project",
            "props": {
              "placeholder": "投影"
            },
            "_raw": {
              "label": "投影",
              "desc": "<pre><code class=\"lang-ts\">(coord: [number, number]) =&gt; [number, number]\n</code></pre>\n<p>将经纬度坐标投影为其它坐标。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "geo.projection.unproject",
            "props": {
              "placeholder": "反投影"
            },
            "_raw": {
              "label": "反投影",
              "desc": "<pre><code class=\"lang-ts\">(point: [number, number]) =&gt; [number, number]\n</code></pre>\n<p>根据投影后坐标计算投影前的经纬度坐标</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "geo.projection.stream",
            "props": {
              "placeholder": "流"
            },
            "_raw": {
              "label": "流",
              "desc": "<p>该属性主要用于适配 <a href=\"https://github.com/d3/d3-geo\" target=\"_blank\">d3-geo</a> 中使用的 <a href=\"https://github.com/d3/d3-geo#streams\" target=\"_blank\">stream</a> 接口。在引入 stream 后可以同时引入<a href=\"https://github.com/d3/d3-geo\" target=\"_blank\">d3-geo</a> 中实现的<a href=\"https://bl.ocks.org/mbostock/3788999\" target=\"_blank\">Antimeridian Clipping</a>以及<a href=\"https://bl.ocks.org/mbostock/3795544\" target=\"_blank\">Adaptive Sampling</a>算法。</p>\n<pre><code class=\"lang-ts\">const projection = d3.geoProjection((x, y) =&gt; ([x, y / 0.75]))\n    .rotate([-115, 0]);\n// ...\nseries: {\n    type: &#39;map&#39;,\n    projection: {\n        // project 和 unproject 依旧需要配置。\n        project: (point) =&gt; projection(point),\n        unproject: (point) =&gt; projection.invert(point),\n        // 可以直接使用 d3-geo 提供的 stream 方法。\n        stream: projection.stream\n    }\n}\n</code></pre>\n<p>该配置并非是必要的。</p>\n"
            }
          }
        ]
      },
      {
        "type": "ElInput",
        "model": "geo.center",
        "props": {
          "placeholder": "中心"
        },
        "_raw": {
          "label": "中心",
          "desc": "<p><code class=\"codespan\">center</code> 指定了把地图上的哪个点放在可视区的中心。</p>\n<p><code class=\"codespan\">center</code> 一般用于控制或获取 <a href=\"#geo.roam\">平移缩放（roam）</a> 时地图的位置。当平移缩放时，<code class=\"codespan\">center</code> 和 <a href=\"#geo.zoom\">zoom</a> 的值会被相应改变。</p>\n<p>注意：<code class=\"codespan\">center</code> 的值基于的是对象布局的原始坐标系而非画布的坐标。\n如果想使用画布坐标调整绘制对象的位置和大小，使用：<a href=\"#geo.left\">geo.left</a> / <a href=\"#geo.right\">.right</a> / <a href=\"#geo.top\">.top</a> / <a href=\"#geo.bottom\">.bottom</a> / <a href=\"#geo.width\">.width</a> / <a href=\"#geo.height\">.height</a> 或者 <a href=\"#geo.layoutCenter\">geo.layoutCenter</a> / <a href=\"#geo.layoutSize\">layoutSize</a>。</p>\n<p><code class=\"codespan\">center</code> 默认使用原始坐标（经纬度）。如果设置了 <a href=\"#geo.projection\">projection</a> 则用投影后的坐标。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">// 把地图的这个经纬度对应的点放在可视区的中心。\ncenter: [115.97, 29.71]\n</code></pre>\n<pre><code class=\"lang-ts\">projection: {\n    projection: (pt) =&gt; project(pt)\n},\ncenter: project([115.97, 29.71])\n</code></pre>\n<p>百分比（字符串）值也可被用在 <code class=\"codespan\">center</code> 中，例如 <code class=\"codespan\">&#39;30%&#39;</code>，基于包围盒（由经纬度的最大最小值决定；或者，在设置了 <a href=\"#geo.projection\">projection</a> 时，由投影后得到的最大最小坐标决定）。你可以使用 <code class=\"codespan\">&#39;0%&#39;</code> 将包围盒的顶部或左侧对齐到视口（画布）中心，或使用 <code class=\"codespan\">&#39;100%&#39;</code> 将右侧或底部对齐到视口中心，或使用 <code class=\"codespan\">&#39;50%&#39;</code> 表示把整个图放于视口中心。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">center: [115, &#39;30%&#39;]\n// 将地图的顶部放置到视口（画布）中心\ncenter: [115, &#39;0%&#39;]\n// 将地图的最左侧放置到视口（画布）中心\ncenter: [&#39;0%&#39;, 13]\n// 将地图的底部放置到视口（画布）中心\ncenter: [115, &#39;100%&#39;]\n// 将地图的最右侧放置到视口（画布）中心\ncenter: [&#39;100%&#39;, 13]\n// 将地图放置到视口（画布）中心\ncenter: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n<blockquote>\n<p>百分比字符串从 <code class=\"codespan\">v5.3.3</code> 开始引入。最初是分母是画布的宽高，但这种方式并不合理，因此从 <code class=\"codespan\">v6.0.0</code> 起改为基于包围盒。</p>\n</blockquote>\n<p><strong>参考示例</strong>来理解此概念：<a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/geo-roam-indicator&amp;edit=1&amp;reset=1\" target=\"_blank\">geo roam indicator</a>.</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "geo.aspectScale",
          "default": 0.75
        },
        "props": {
          "placeholder": "宽高比缩放"
        },
        "_raw": {
          "label": "宽高比缩放",
          "desc": "<p>这个参数用于 scale 地图的长宽比。如果设置了 <a href=\"#geo.projection\">projection</a> 则无效。</p>\n<p>地图最终计算得到的 <code class=\"codespan\">pixelWidth</code> 和 <code class=\"codespan\">pixelHeight</code> 将满足以下关系：<code class=\"codespan\">pixelWidth / pixelHeight = lngSpan / latSpan * aspectScale</code>（假设未指定 <a href=\"#geo.projection\">projection</a>，且 <a href=\"#geo.preserveAspect\">preserveAspect</a> 设为保持长宽比）。</p>\n<p>当不使用真正的投影公式（<a href=\"#geo.projection\">projection</a>）时，GeoJSON 里的经纬度会被线性映射到像素坐标。<code class=\"codespan\">aspectScale</code> 提供了一种简单方式，用于视觉上补偿这种映射所造成的形变（由于地球是球形，经度对应的物理尺寸在高纬度地区会收缩）。例如，<code class=\"codespan\">aspectScale</code> 可以通过以下公式粗略计算：<code class=\"codespan\">aspectScale = Math.cos(center_latitude * Math.PI / 180)</code>，这与正弦投影（sinusoidal projection）相似。</p>\n<p>参见 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=geo-graph&amp;edit=1&amp;reset=1\" target=\"_blank\">示例</a>。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": "geo.boundingCoords",
        "props": {
          "placeholder": "边界坐标"
        },
        "_raw": {
          "label": "边界坐标",
          "desc": "<p>二维数组，定义定位的左上角以及右下角分别所对应的经纬度。例如</p>\n<pre><code class=\"lang-ts\">// 设置为一张完整经纬度的世界地图\nmap: &#39;world&#39;,\nleft: 0, top: 0, right: 0, bottom: 0,\nboundingCoords: [\n    // 定位左上角经纬度\n    [-180, 90],\n    // 定位右下角经纬度\n    [180, -90]\n],\n</code></pre>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "geo.zoom",
          "default": 1
        },
        "props": {
          "placeholder": "缩放"
        },
        "_raw": {
          "label": "缩放",
          "desc": "<p>当前视角的缩放比例。</p>\n<p>值小于 <code class=\"codespan\">1</code> 时表示缩小，大于 <code class=\"codespan\">1</code> 时表示放大。</p>\n<p>当 <a href=\"#geo.roam\">平移缩放（roam）</a> 时，<a href=\"#geo.center\">center</a> 和 <code class=\"codespan\">zoom</code> 的值会被相应改变。</p>\n<p><strong>参考示例</strong>来理解此概念：<a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/geo-roam-indicator&amp;edit=1&amp;reset=1\" target=\"_blank\">geo roam indicator</a>.</p>\n"
        }
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "缩放限制",
          "name": "scaleLimit"
        },
        "children": [
          {
            "type": "ElInputNumber",
            "model": "geo.scaleLimit.min",
            "props": {
              "placeholder": "最小值"
            },
            "_raw": {
              "label": "最小值",
              "desc": "<p>最小的缩放值</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "geo.scaleLimit.max",
            "props": {
              "placeholder": "最大值"
            },
            "_raw": {
              "label": "最大值",
              "desc": "<p>最大的缩放值</p>\n"
            }
          }
        ]
      },
      {
        "type": "ElInput",
        "model": "geo.nameMap",
        "props": {
          "placeholder": "名称映射"
        },
        "_raw": {
          "label": "名称映射",
          "desc": "<p>自定义地区的名称映射，如：</p>\n<pre><code class=\"lang-ts\">{\n    &#39;China&#39; : &#39;中国&#39;\n}\n</code></pre>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "geo.nameProperty",
          "default": "name"
        },
        "props": {
          "placeholder": "名称属性"
        },
        "_raw": {
          "label": "名称属性",
          "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v4.8.0</code> 开始支持\n\n</div>\n\n\n\n<p>默认是 <code class=\"codespan\">&#39;name&#39;</code>，针对 GeoJSON 要素的自定义属性名称，作为主键用于关联数据点和 GeoJSON 地理要素。\n例如：</p>\n<pre><code class=\"lang-ts\">{\n    nameProperty: &#39;NAME&#39;, // 数据点中的 name：Alabama 会关联到 GeoJSON 中 NAME 属性值为 Alabama 的地理要素{&quot;type&quot;:&quot;Feature&quot;,&quot;id&quot;:&quot;01&quot;,&quot;properties&quot;:{&quot;NAME&quot;:&quot;Alabama&quot;}, &quot;geometry&quot;: { ... }}\n    data:[\n        {name: &#39;Alabama&#39;, value: 4822023},\n        {name: &#39;Alaska&#39;, value: 731449},\n    ]\n}\n</code></pre>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "geo.selectedMode",
          "default": false
        },
        "props": {
          "placeholder": "选中模式",
          "types": [
            "boolean",
            "string"
          ],
          "defaultType": "boolean",
          "specialKeywords": []
        },
        "_raw": {
          "label": "选中模式",
          "desc": "<p>选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选<code class=\"codespan\">&#39;single&#39;</code>表示单选，或者<code class=\"codespan\">&#39;multiple&#39;</code>表示多选。</p>\n"
        }
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "标签",
          "name": "label"
        },
        "children": [
          {
            "type": "ElSwitch",
            "model": {
              "path": "geo.label.show",
              "default": false
            },
            "props": {
              "placeholder": "显示"
            },
            "_raw": {
              "label": "显示",
              "desc": "\n\n<p>是否显示标签。</p>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": "geo.label.position",
            "props": {
              "placeholder": "位置",
              "types": [
                "string",
                "array"
              ],
              "defaultType": "string",
              "specialKeywords": []
            },
            "_raw": {
              "label": "位置",
              "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-ts\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-ts\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.distance",
              "default": 5
            },
            "props": {
              "placeholder": "距离"
            },
            "_raw": {
              "label": "距离",
              "desc": "\n\n<p>距离图形元素的距离。</p>\n<p>当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "geo.label.rotate",
            "props": {
              "placeholder": "旋转"
            },
            "_raw": {
              "label": "旋转",
              "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "geo.label.offset",
            "props": {
              "placeholder": "偏移"
            },
            "_raw": {
              "label": "偏移",
              "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": "geo.label.formatter",
            "props": {
              "placeholder": "格式化器",
              "types": [
                "string",
                "function"
              ],
              "defaultType": "string",
              "specialKeywords": []
            },
            "_raw": {
              "label": "格式化器",
              "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{@xxx}</code>：数据中名为 <code class=\"codespan\">&#39;xxx&#39;</code> 的维度的值，如 <code class=\"codespan\">{@product}</code> 表示名为 <code class=\"codespan\">&#39;product&#39;</code> 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}</code>：数据中维度 <code class=\"codespan\">n</code> 的值，如 <code class=\"codespan\">{@[3]}</code> 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-ts\">formatter: &#39;{b}: {@score}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-ts\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefined，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "geo.label.color",
              "default": "#fff"
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
              "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.fontStyle",
              "default": "normal"
            },
            "props": {
              "placeholder": "字体样式"
            },
            "_raw": {
              "label": "字体样式",
              "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": {
              "path": "geo.label.fontWeight",
              "default": "normal"
            },
            "props": {
              "placeholder": "字体粗细",
              "types": [
                "string",
                "number"
              ],
              "defaultType": "string",
              "specialKeywords": [
                "normal"
              ]
            },
            "_raw": {
              "label": "字体粗细",
              "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.fontFamily",
              "default": "sans-serif"
            },
            "props": {
              "placeholder": "字体"
            },
            "_raw": {
              "label": "字体",
              "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.fontSize",
              "default": 12
            },
            "props": {
              "placeholder": "字体大小"
            },
            "_raw": {
              "label": "字体大小",
              "desc": "\n\n<p>文字的字体大小。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "geo.label.align",
            "props": {
              "placeholder": "对齐"
            },
            "_raw": {
              "label": "对齐",
              "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "geo.label.verticalAlign",
            "props": {
              "placeholder": "垂直对齐"
            },
            "_raw": {
              "label": "垂直对齐",
              "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "geo.label.lineHeight",
            "props": {
              "placeholder": "行高"
            },
            "_raw": {
              "label": "行高",
              "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "geo.label.backgroundColor",
              "default": "transparent"
            },
            "props": {
              "placeholder": "背景颜色",
              "keywords": [
                "transparent",
                "inherit",
                "none"
              ],
              "allowInherit": true
            },
            "_raw": {
              "label": "背景颜色",
              "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-ts\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": "geo.label.borderColor",
            "props": {
              "placeholder": "边框颜色",
              "keywords": [
                "inherit",
                "none",
                "transparent"
              ],
              "allowInherit": true
            },
            "_raw": {
              "label": "边框颜色",
              "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.borderWidth",
              "default": 0
            },
            "props": {
              "placeholder": "边框宽度"
            },
            "_raw": {
              "label": "边框宽度",
              "desc": "\n\n<p>文字块边框宽度。</p>\n"
            }
          },
          {
            "type": "SmartStyleSelect",
            "model": {
              "path": "geo.label.borderType",
              "default": "solid"
            },
            "props": {
              "placeholder": "边框类型",
              "options": [
                {
                  "value": "solid",
                  "label": "实线",
                  "description": "连续的实线"
                },
                {
                  "value": "dashed",
                  "label": "虚线",
                  "description": "短横线组成的虚线"
                },
                {
                  "value": "dotted",
                  "label": "点线",
                  "description": "点组成的虚线"
                }
              ],
              "allowCustom": true
            },
            "_raw": {
              "label": "边框类型",
              "desc": "\n\n\n<p>文字块边框描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.borderDashOffset",
              "default": 0
            },
            "props": {
              "placeholder": "边框虚线偏移"
            },
            "_raw": {
              "label": "边框虚线偏移",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": {
              "path": "geo.label.borderRadius",
              "default": 0
            },
            "props": {
              "placeholder": "圆角半径",
              "types": [
                "number",
                "array"
              ],
              "defaultType": "number",
              "specialKeywords": []
            },
            "_raw": {
              "label": "圆角半径",
              "desc": "\n\n<p>文字块的圆角。</p>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": {
              "path": "geo.label.padding",
              "default": 0
            },
            "props": {
              "placeholder": "内边距",
              "types": [
                "number",
                "array"
              ],
              "defaultType": "number",
              "specialKeywords": []
            },
            "_raw": {
              "label": "内边距",
              "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "geo.label.shadowColor",
              "default": "transparent"
            },
            "props": {
              "placeholder": "阴影颜色",
              "keywords": [
                "transparent",
                "inherit",
                "none"
              ],
              "allowInherit": true
            },
            "_raw": {
              "label": "阴影颜色",
              "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.shadowBlur",
              "default": 0
            },
            "props": {
              "placeholder": "阴影模糊"
            },
            "_raw": {
              "label": "阴影模糊",
              "desc": "\n\n<p>文字块的背景阴影长度。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.shadowOffsetX",
              "default": 0
            },
            "props": {
              "placeholder": "阴影X偏移"
            },
            "_raw": {
              "label": "阴影X偏移",
              "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.shadowOffsetY",
              "default": 0
            },
            "props": {
              "placeholder": "阴影Y偏移"
            },
            "_raw": {
              "label": "阴影Y偏移",
              "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n"
            }
          },
          {
            "type": "SmartSizeInput",
            "model": "geo.label.width",
            "props": {
              "placeholder": "宽度",
              "allowPercentage": true,
              "keywords": [
                "auto"
              ]
            },
            "_raw": {
              "label": "宽度",
              "desc": "\n\n<p>文本显示宽度。</p>\n"
            }
          },
          {
            "type": "SmartSizeInput",
            "model": "geo.label.height",
            "props": {
              "placeholder": "高度",
              "allowPercentage": true,
              "keywords": [
                "auto"
              ]
            },
            "_raw": {
              "label": "高度",
              "desc": "\n\n<p>文本显示高度。</p>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": "geo.label.textBorderColor",
            "props": {
              "placeholder": "文本边框颜色",
              "keywords": [
                "inherit",
                "none",
                "transparent"
              ],
              "allowInherit": true
            },
            "_raw": {
              "label": "文本边框颜色",
              "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "geo.label.textBorderWidth",
            "props": {
              "placeholder": "文本边框宽度"
            },
            "_raw": {
              "label": "文本边框宽度",
              "desc": "\n\n<p>文字本身的描边宽度。</p>\n"
            }
          },
          {
            "type": "SmartStyleSelect",
            "model": {
              "path": "geo.label.textBorderType",
              "default": "solid"
            },
            "props": {
              "placeholder": "文本边框类型",
              "options": [
                {
                  "value": "solid",
                  "label": "实线",
                  "description": "连续的实线"
                },
                {
                  "value": "dashed",
                  "label": "虚线",
                  "description": "短横线组成的虚线"
                },
                {
                  "value": "dotted",
                  "label": "点线",
                  "description": "点组成的虚线"
                }
              ],
              "allowCustom": true
            },
            "_raw": {
              "label": "文本边框类型",
              "desc": "\n\n\n<p>文字本身的描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">textBorderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.textBorderDashOffset",
              "default": 0
            },
            "props": {
              "placeholder": "文本边框虚线偏移"
            },
            "_raw": {
              "label": "文本边框虚线偏移",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">textBorderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "geo.label.textShadowColor",
              "default": "transparent"
            },
            "props": {
              "placeholder": "文本阴影颜色",
              "keywords": [
                "transparent",
                "inherit",
                "none"
              ],
              "allowInherit": true
            },
            "_raw": {
              "label": "文本阴影颜色",
              "desc": "\n\n<p>文字本身的阴影颜色。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.textShadowBlur",
              "default": 0
            },
            "props": {
              "placeholder": "文本阴影模糊"
            },
            "_raw": {
              "label": "文本阴影模糊",
              "desc": "\n\n<p>文字本身的阴影长度。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.textShadowOffsetX",
              "default": 0
            },
            "props": {
              "placeholder": "文本阴影X偏移"
            },
            "_raw": {
              "label": "文本阴影X偏移",
              "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.textShadowOffsetY",
              "default": 0
            },
            "props": {
              "placeholder": "文本阴影Y偏移"
            },
            "_raw": {
              "label": "文本阴影Y偏移",
              "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.overflow",
              "default": "none"
            },
            "props": {
              "placeholder": "溢出"
            },
            "_raw": {
              "label": "溢出",
              "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.label.ellipsis",
              "default": "..."
            },
            "props": {
              "placeholder": "省略"
            },
            "_raw": {
              "label": "省略",
              "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
            }
          }
        ]
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "图元样式",
          "name": "itemStyle"
        },
        "children": [
          {
            "type": "SmartColorInput",
            "model": {
              "path": "geo.itemStyle.areaColor",
              "default": "#eee"
            },
            "props": {
              "placeholder": "区域颜色",
              "keywords": [
                "inherit",
                "none",
                "transparent"
              ],
              "allowInherit": true
            },
            "_raw": {
              "label": "区域颜色",
              "desc": "<p>地图区域的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "geo.itemStyle.color",
              "default": "自适应"
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
              "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "geo.itemStyle.borderColor",
              "default": "#000"
            },
            "props": {
              "placeholder": "边框颜色",
              "keywords": [
                "inherit",
                "none",
                "transparent"
              ],
              "allowInherit": true
            },
            "_raw": {
              "label": "边框颜色",
              "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.itemStyle.borderWidth",
              "default": 0
            },
            "props": {
              "placeholder": "边框宽度"
            },
            "_raw": {
              "label": "边框宽度",
              "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n"
            }
          },
          {
            "type": "SmartStyleSelect",
            "model": {
              "path": "geo.itemStyle.borderType",
              "default": "solid"
            },
            "props": {
              "placeholder": "边框类型",
              "options": [
                {
                  "value": "solid",
                  "label": "实线",
                  "description": "连续的实线"
                },
                {
                  "value": "dashed",
                  "label": "虚线",
                  "description": "短横线组成的虚线"
                },
                {
                  "value": "dotted",
                  "label": "点线",
                  "description": "点组成的虚线"
                }
              ],
              "allowCustom": true
            },
            "_raw": {
              "label": "边框类型",
              "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.itemStyle.borderDashOffset",
              "default": 0
            },
            "props": {
              "placeholder": "边框虚线偏移"
            },
            "_raw": {
              "label": "边框虚线偏移",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.itemStyle.borderCap",
              "default": "butt"
            },
            "props": {
              "placeholder": "边框线帽"
            },
            "_raw": {
              "label": "边框线帽",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.itemStyle.borderJoin",
              "default": "bevel"
            },
            "props": {
              "placeholder": "边框连接点"
            },
            "_raw": {
              "label": "边框连接点",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.itemStyle.borderMiterLimit",
              "default": 10
            },
            "props": {
              "placeholder": "边框斜接限制"
            },
            "_raw": {
              "label": "边框斜接限制",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "geo.itemStyle.shadowBlur",
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
            "model": "geo.itemStyle.shadowColor",
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
              "path": "geo.itemStyle.shadowOffsetX",
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
              "path": "geo.itemStyle.shadowOffsetY",
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
              "path": "geo.itemStyle.opacity",
              "default": 1
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
              "path": "geo.emphasis.disabled",
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
            "type": "ElInput",
            "model": {
              "path": "geo.emphasis.focus",
              "default": "none"
            },
            "props": {
              "placeholder": "聚焦"
            },
            "_raw": {
              "label": "聚焦",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.1.0</code> 开始支持\n\n</div>\n\n\n\n\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<p>下面代码配置了 geo 在高亮一个图形的时候，淡出所有其它的图形。</p>\n<pre><code class=\"lang-ts\">emphasis: {\n    focus: &#39;self&#39;\n}\n</code></pre>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=geo-organ&reset=1&edit=1\" width=\"600\" height=\"400\"></iframe>\n\n\n\n\n\n\n\n\n\n\n\n"
            }
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "标签",
              "name": "label"
            },
            "children": [
              {
                "type": "ElSwitch",
                "model": {
                  "path": "geo.emphasis.label.show",
                  "default": false
                },
                "props": {
                  "placeholder": "显示"
                },
                "_raw": {
                  "label": "显示",
                  "desc": "\n\n<p>是否显示标签。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "geo.emphasis.label.position",
                "props": {
                  "placeholder": "位置",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "位置",
                  "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-ts\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-ts\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.distance",
                  "default": 5
                },
                "props": {
                  "placeholder": "距离"
                },
                "_raw": {
                  "label": "距离",
                  "desc": "\n\n<p>距离图形元素的距离。</p>\n<p>当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "geo.emphasis.label.rotate",
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "geo.emphasis.label.offset",
                "props": {
                  "placeholder": "偏移"
                },
                "_raw": {
                  "label": "偏移",
                  "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "geo.emphasis.label.formatter",
                "props": {
                  "placeholder": "格式化器",
                  "types": [
                    "string",
                    "function"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "格式化器",
                  "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{@xxx}</code>：数据中名为 <code class=\"codespan\">&#39;xxx&#39;</code> 的维度的值，如 <code class=\"codespan\">{@product}</code> 表示名为 <code class=\"codespan\">&#39;product&#39;</code> 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}</code>：数据中维度 <code class=\"codespan\">n</code> 的值，如 <code class=\"codespan\">{@[3]}</code> 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-ts\">formatter: &#39;{b}: {@score}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-ts\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefined，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.emphasis.label.color",
                  "default": "#fff"
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
                  "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.fontStyle",
                  "default": "normal"
                },
                "props": {
                  "placeholder": "字体样式"
                },
                "_raw": {
                  "label": "字体样式",
                  "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "geo.emphasis.label.fontWeight",
                  "default": "normal"
                },
                "props": {
                  "placeholder": "字体粗细",
                  "types": [
                    "string",
                    "number"
                  ],
                  "defaultType": "string",
                  "specialKeywords": [
                    "normal"
                  ]
                },
                "_raw": {
                  "label": "字体粗细",
                  "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.fontFamily",
                  "default": "sans-serif"
                },
                "props": {
                  "placeholder": "字体"
                },
                "_raw": {
                  "label": "字体",
                  "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.fontSize",
                  "default": 12
                },
                "props": {
                  "placeholder": "字体大小"
                },
                "_raw": {
                  "label": "字体大小",
                  "desc": "\n\n<p>文字的字体大小。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "geo.emphasis.label.align",
                "props": {
                  "placeholder": "对齐"
                },
                "_raw": {
                  "label": "对齐",
                  "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "geo.emphasis.label.verticalAlign",
                "props": {
                  "placeholder": "垂直对齐"
                },
                "_raw": {
                  "label": "垂直对齐",
                  "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "geo.emphasis.label.lineHeight",
                "props": {
                  "placeholder": "行高"
                },
                "_raw": {
                  "label": "行高",
                  "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.emphasis.label.backgroundColor",
                  "default": "transparent"
                },
                "props": {
                  "placeholder": "背景颜色",
                  "keywords": [
                    "transparent",
                    "inherit",
                    "none"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "背景颜色",
                  "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-ts\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": "geo.emphasis.label.borderColor",
                "props": {
                  "placeholder": "边框颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "边框颜色",
                  "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.borderWidth",
                  "default": 0
                },
                "props": {
                  "placeholder": "边框宽度"
                },
                "_raw": {
                  "label": "边框宽度",
                  "desc": "\n\n<p>文字块边框宽度。</p>\n"
                }
              },
              {
                "type": "SmartStyleSelect",
                "model": {
                  "path": "geo.emphasis.label.borderType",
                  "default": "solid"
                },
                "props": {
                  "placeholder": "边框类型",
                  "options": [
                    {
                      "value": "solid",
                      "label": "实线",
                      "description": "连续的实线"
                    },
                    {
                      "value": "dashed",
                      "label": "虚线",
                      "description": "短横线组成的虚线"
                    },
                    {
                      "value": "dotted",
                      "label": "点线",
                      "description": "点组成的虚线"
                    }
                  ],
                  "allowCustom": true
                },
                "_raw": {
                  "label": "边框类型",
                  "desc": "\n\n\n<p>文字块边框描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.borderDashOffset",
                  "default": 0
                },
                "props": {
                  "placeholder": "边框虚线偏移"
                },
                "_raw": {
                  "label": "边框虚线偏移",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "geo.emphasis.label.borderRadius",
                  "default": 0
                },
                "props": {
                  "placeholder": "圆角半径",
                  "types": [
                    "number",
                    "array"
                  ],
                  "defaultType": "number",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "圆角半径",
                  "desc": "\n\n<p>文字块的圆角。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "geo.emphasis.label.padding",
                  "default": 0
                },
                "props": {
                  "placeholder": "内边距",
                  "types": [
                    "number",
                    "array"
                  ],
                  "defaultType": "number",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "内边距",
                  "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.emphasis.label.shadowColor",
                  "default": "transparent"
                },
                "props": {
                  "placeholder": "阴影颜色",
                  "keywords": [
                    "transparent",
                    "inherit",
                    "none"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "阴影颜色",
                  "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.shadowBlur",
                  "default": 0
                },
                "props": {
                  "placeholder": "阴影模糊"
                },
                "_raw": {
                  "label": "阴影模糊",
                  "desc": "\n\n<p>文字块的背景阴影长度。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.shadowOffsetX",
                  "default": 0
                },
                "props": {
                  "placeholder": "阴影X偏移"
                },
                "_raw": {
                  "label": "阴影X偏移",
                  "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.shadowOffsetY",
                  "default": 0
                },
                "props": {
                  "placeholder": "阴影Y偏移"
                },
                "_raw": {
                  "label": "阴影Y偏移",
                  "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n"
                }
              },
              {
                "type": "SmartSizeInput",
                "model": "geo.emphasis.label.width",
                "props": {
                  "placeholder": "宽度",
                  "allowPercentage": true,
                  "keywords": [
                    "auto"
                  ]
                },
                "_raw": {
                  "label": "宽度",
                  "desc": "\n\n<p>文本显示宽度。</p>\n"
                }
              },
              {
                "type": "SmartSizeInput",
                "model": "geo.emphasis.label.height",
                "props": {
                  "placeholder": "高度",
                  "allowPercentage": true,
                  "keywords": [
                    "auto"
                  ]
                },
                "_raw": {
                  "label": "高度",
                  "desc": "\n\n<p>文本显示高度。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": "geo.emphasis.label.textBorderColor",
                "props": {
                  "placeholder": "文本边框颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "文本边框颜色",
                  "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "geo.emphasis.label.textBorderWidth",
                "props": {
                  "placeholder": "文本边框宽度"
                },
                "_raw": {
                  "label": "文本边框宽度",
                  "desc": "\n\n<p>文字本身的描边宽度。</p>\n"
                }
              },
              {
                "type": "SmartStyleSelect",
                "model": {
                  "path": "geo.emphasis.label.textBorderType",
                  "default": "solid"
                },
                "props": {
                  "placeholder": "文本边框类型",
                  "options": [
                    {
                      "value": "solid",
                      "label": "实线",
                      "description": "连续的实线"
                    },
                    {
                      "value": "dashed",
                      "label": "虚线",
                      "description": "短横线组成的虚线"
                    },
                    {
                      "value": "dotted",
                      "label": "点线",
                      "description": "点组成的虚线"
                    }
                  ],
                  "allowCustom": true
                },
                "_raw": {
                  "label": "文本边框类型",
                  "desc": "\n\n\n<p>文字本身的描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">textBorderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.textBorderDashOffset",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本边框虚线偏移"
                },
                "_raw": {
                  "label": "文本边框虚线偏移",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">textBorderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.emphasis.label.textShadowColor",
                  "default": "transparent"
                },
                "props": {
                  "placeholder": "文本阴影颜色",
                  "keywords": [
                    "transparent",
                    "inherit",
                    "none"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "文本阴影颜色",
                  "desc": "\n\n<p>文字本身的阴影颜色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.textShadowBlur",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本阴影模糊"
                },
                "_raw": {
                  "label": "文本阴影模糊",
                  "desc": "\n\n<p>文字本身的阴影长度。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.textShadowOffsetX",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本阴影X偏移"
                },
                "_raw": {
                  "label": "文本阴影X偏移",
                  "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.textShadowOffsetY",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本阴影Y偏移"
                },
                "_raw": {
                  "label": "文本阴影Y偏移",
                  "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.overflow",
                  "default": "none"
                },
                "props": {
                  "placeholder": "溢出"
                },
                "_raw": {
                  "label": "溢出",
                  "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.label.ellipsis",
                  "default": "..."
                },
                "props": {
                  "placeholder": "省略"
                },
                "_raw": {
                  "label": "省略",
                  "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
                }
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "图元样式",
              "name": "itemStyle"
            },
            "children": [
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.emphasis.itemStyle.areaColor",
                  "default": "#eee"
                },
                "props": {
                  "placeholder": "区域颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "区域颜色",
                  "desc": "<p>地图区域的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.emphasis.itemStyle.color",
                  "default": "自适应"
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
                  "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.emphasis.itemStyle.borderColor",
                  "default": "#000"
                },
                "props": {
                  "placeholder": "边框颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "边框颜色",
                  "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.itemStyle.borderWidth",
                  "default": 0
                },
                "props": {
                  "placeholder": "边框宽度"
                },
                "_raw": {
                  "label": "边框宽度",
                  "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n"
                }
              },
              {
                "type": "SmartStyleSelect",
                "model": {
                  "path": "geo.emphasis.itemStyle.borderType",
                  "default": "solid"
                },
                "props": {
                  "placeholder": "边框类型",
                  "options": [
                    {
                      "value": "solid",
                      "label": "实线",
                      "description": "连续的实线"
                    },
                    {
                      "value": "dashed",
                      "label": "虚线",
                      "description": "短横线组成的虚线"
                    },
                    {
                      "value": "dotted",
                      "label": "点线",
                      "description": "点组成的虚线"
                    }
                  ],
                  "allowCustom": true
                },
                "_raw": {
                  "label": "边框类型",
                  "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.itemStyle.borderDashOffset",
                  "default": 0
                },
                "props": {
                  "placeholder": "边框虚线偏移"
                },
                "_raw": {
                  "label": "边框虚线偏移",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.itemStyle.borderCap",
                  "default": "butt"
                },
                "props": {
                  "placeholder": "边框线帽"
                },
                "_raw": {
                  "label": "边框线帽",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.itemStyle.borderJoin",
                  "default": "bevel"
                },
                "props": {
                  "placeholder": "边框连接点"
                },
                "_raw": {
                  "label": "边框连接点",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.emphasis.itemStyle.borderMiterLimit",
                  "default": 10
                },
                "props": {
                  "placeholder": "边框斜接限制"
                },
                "_raw": {
                  "label": "边框斜接限制",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "geo.emphasis.itemStyle.shadowBlur",
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
                "model": "geo.emphasis.itemStyle.shadowColor",
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
                  "path": "geo.emphasis.itemStyle.shadowOffsetX",
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
                  "path": "geo.emphasis.itemStyle.shadowOffsetY",
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
                  "path": "geo.emphasis.itemStyle.opacity",
                  "default": 1
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
        "type": "ElCollapseItem",
        "props": {
          "title": "选中",
          "name": "select"
        },
        "children": [
          {
            "type": "ElSwitch",
            "model": {
              "path": "geo.select.disabled",
              "default": false
            },
            "props": {
              "placeholder": "禁用"
            },
            "_raw": {
              "label": "禁用",
              "desc": "\n\n\n\n<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.3.0</code> 开始支持\n\n</div>\n\n\n\n<p>是否可以被选中。在开启 <code class=\"codespan\">selectedMode</code> 的时候有效，可以用于关闭部分数据。</p>\n"
            }
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "标签",
              "name": "label"
            },
            "children": [
              {
                "type": "ElSwitch",
                "model": {
                  "path": "geo.select.label.show",
                  "default": false
                },
                "props": {
                  "placeholder": "显示"
                },
                "_raw": {
                  "label": "显示",
                  "desc": "\n\n<p>是否显示标签。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "geo.select.label.position",
                "props": {
                  "placeholder": "位置",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "位置",
                  "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-ts\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-ts\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.distance",
                  "default": 5
                },
                "props": {
                  "placeholder": "距离"
                },
                "_raw": {
                  "label": "距离",
                  "desc": "\n\n<p>距离图形元素的距离。</p>\n<p>当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "geo.select.label.rotate",
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "geo.select.label.offset",
                "props": {
                  "placeholder": "偏移"
                },
                "_raw": {
                  "label": "偏移",
                  "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "geo.select.label.formatter",
                "props": {
                  "placeholder": "格式化器",
                  "types": [
                    "string",
                    "function"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "格式化器",
                  "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{@xxx}</code>：数据中名为 <code class=\"codespan\">&#39;xxx&#39;</code> 的维度的值，如 <code class=\"codespan\">{@product}</code> 表示名为 <code class=\"codespan\">&#39;product&#39;</code> 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}</code>：数据中维度 <code class=\"codespan\">n</code> 的值，如 <code class=\"codespan\">{@[3]}</code> 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-ts\">formatter: &#39;{b}: {@score}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-ts\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefined，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.select.label.color",
                  "default": "#fff"
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
                  "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.fontStyle",
                  "default": "normal"
                },
                "props": {
                  "placeholder": "字体样式"
                },
                "_raw": {
                  "label": "字体样式",
                  "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "geo.select.label.fontWeight",
                  "default": "normal"
                },
                "props": {
                  "placeholder": "字体粗细",
                  "types": [
                    "string",
                    "number"
                  ],
                  "defaultType": "string",
                  "specialKeywords": [
                    "normal"
                  ]
                },
                "_raw": {
                  "label": "字体粗细",
                  "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.fontFamily",
                  "default": "sans-serif"
                },
                "props": {
                  "placeholder": "字体"
                },
                "_raw": {
                  "label": "字体",
                  "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.fontSize",
                  "default": 12
                },
                "props": {
                  "placeholder": "字体大小"
                },
                "_raw": {
                  "label": "字体大小",
                  "desc": "\n\n<p>文字的字体大小。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "geo.select.label.align",
                "props": {
                  "placeholder": "对齐"
                },
                "_raw": {
                  "label": "对齐",
                  "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "geo.select.label.verticalAlign",
                "props": {
                  "placeholder": "垂直对齐"
                },
                "_raw": {
                  "label": "垂直对齐",
                  "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "geo.select.label.lineHeight",
                "props": {
                  "placeholder": "行高"
                },
                "_raw": {
                  "label": "行高",
                  "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.select.label.backgroundColor",
                  "default": "transparent"
                },
                "props": {
                  "placeholder": "背景颜色",
                  "keywords": [
                    "transparent",
                    "inherit",
                    "none"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "背景颜色",
                  "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-ts\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": "geo.select.label.borderColor",
                "props": {
                  "placeholder": "边框颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "边框颜色",
                  "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.borderWidth",
                  "default": 0
                },
                "props": {
                  "placeholder": "边框宽度"
                },
                "_raw": {
                  "label": "边框宽度",
                  "desc": "\n\n<p>文字块边框宽度。</p>\n"
                }
              },
              {
                "type": "SmartStyleSelect",
                "model": {
                  "path": "geo.select.label.borderType",
                  "default": "solid"
                },
                "props": {
                  "placeholder": "边框类型",
                  "options": [
                    {
                      "value": "solid",
                      "label": "实线",
                      "description": "连续的实线"
                    },
                    {
                      "value": "dashed",
                      "label": "虚线",
                      "description": "短横线组成的虚线"
                    },
                    {
                      "value": "dotted",
                      "label": "点线",
                      "description": "点组成的虚线"
                    }
                  ],
                  "allowCustom": true
                },
                "_raw": {
                  "label": "边框类型",
                  "desc": "\n\n\n<p>文字块边框描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.borderDashOffset",
                  "default": 0
                },
                "props": {
                  "placeholder": "边框虚线偏移"
                },
                "_raw": {
                  "label": "边框虚线偏移",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "geo.select.label.borderRadius",
                  "default": 0
                },
                "props": {
                  "placeholder": "圆角半径",
                  "types": [
                    "number",
                    "array"
                  ],
                  "defaultType": "number",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "圆角半径",
                  "desc": "\n\n<p>文字块的圆角。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "geo.select.label.padding",
                  "default": 0
                },
                "props": {
                  "placeholder": "内边距",
                  "types": [
                    "number",
                    "array"
                  ],
                  "defaultType": "number",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "内边距",
                  "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.select.label.shadowColor",
                  "default": "transparent"
                },
                "props": {
                  "placeholder": "阴影颜色",
                  "keywords": [
                    "transparent",
                    "inherit",
                    "none"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "阴影颜色",
                  "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.shadowBlur",
                  "default": 0
                },
                "props": {
                  "placeholder": "阴影模糊"
                },
                "_raw": {
                  "label": "阴影模糊",
                  "desc": "\n\n<p>文字块的背景阴影长度。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.shadowOffsetX",
                  "default": 0
                },
                "props": {
                  "placeholder": "阴影X偏移"
                },
                "_raw": {
                  "label": "阴影X偏移",
                  "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.shadowOffsetY",
                  "default": 0
                },
                "props": {
                  "placeholder": "阴影Y偏移"
                },
                "_raw": {
                  "label": "阴影Y偏移",
                  "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n"
                }
              },
              {
                "type": "SmartSizeInput",
                "model": "geo.select.label.width",
                "props": {
                  "placeholder": "宽度",
                  "allowPercentage": true,
                  "keywords": [
                    "auto"
                  ]
                },
                "_raw": {
                  "label": "宽度",
                  "desc": "\n\n<p>文本显示宽度。</p>\n"
                }
              },
              {
                "type": "SmartSizeInput",
                "model": "geo.select.label.height",
                "props": {
                  "placeholder": "高度",
                  "allowPercentage": true,
                  "keywords": [
                    "auto"
                  ]
                },
                "_raw": {
                  "label": "高度",
                  "desc": "\n\n<p>文本显示高度。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": "geo.select.label.textBorderColor",
                "props": {
                  "placeholder": "文本边框颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "文本边框颜色",
                  "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "geo.select.label.textBorderWidth",
                "props": {
                  "placeholder": "文本边框宽度"
                },
                "_raw": {
                  "label": "文本边框宽度",
                  "desc": "\n\n<p>文字本身的描边宽度。</p>\n"
                }
              },
              {
                "type": "SmartStyleSelect",
                "model": {
                  "path": "geo.select.label.textBorderType",
                  "default": "solid"
                },
                "props": {
                  "placeholder": "文本边框类型",
                  "options": [
                    {
                      "value": "solid",
                      "label": "实线",
                      "description": "连续的实线"
                    },
                    {
                      "value": "dashed",
                      "label": "虚线",
                      "description": "短横线组成的虚线"
                    },
                    {
                      "value": "dotted",
                      "label": "点线",
                      "description": "点组成的虚线"
                    }
                  ],
                  "allowCustom": true
                },
                "_raw": {
                  "label": "文本边框类型",
                  "desc": "\n\n\n<p>文字本身的描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">textBorderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.textBorderDashOffset",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本边框虚线偏移"
                },
                "_raw": {
                  "label": "文本边框虚线偏移",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">textBorderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.select.label.textShadowColor",
                  "default": "transparent"
                },
                "props": {
                  "placeholder": "文本阴影颜色",
                  "keywords": [
                    "transparent",
                    "inherit",
                    "none"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "文本阴影颜色",
                  "desc": "\n\n<p>文字本身的阴影颜色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.textShadowBlur",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本阴影模糊"
                },
                "_raw": {
                  "label": "文本阴影模糊",
                  "desc": "\n\n<p>文字本身的阴影长度。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.textShadowOffsetX",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本阴影X偏移"
                },
                "_raw": {
                  "label": "文本阴影X偏移",
                  "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.textShadowOffsetY",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本阴影Y偏移"
                },
                "_raw": {
                  "label": "文本阴影Y偏移",
                  "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.overflow",
                  "default": "none"
                },
                "props": {
                  "placeholder": "溢出"
                },
                "_raw": {
                  "label": "溢出",
                  "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.label.ellipsis",
                  "default": "..."
                },
                "props": {
                  "placeholder": "省略"
                },
                "_raw": {
                  "label": "省略",
                  "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
                }
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "图元样式",
              "name": "itemStyle"
            },
            "children": [
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.select.itemStyle.areaColor",
                  "default": "#eee"
                },
                "props": {
                  "placeholder": "区域颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "区域颜色",
                  "desc": "<p>地图区域的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.select.itemStyle.color",
                  "default": "自适应"
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
                  "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.select.itemStyle.borderColor",
                  "default": "#000"
                },
                "props": {
                  "placeholder": "边框颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "边框颜色",
                  "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.itemStyle.borderWidth",
                  "default": 0
                },
                "props": {
                  "placeholder": "边框宽度"
                },
                "_raw": {
                  "label": "边框宽度",
                  "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n"
                }
              },
              {
                "type": "SmartStyleSelect",
                "model": {
                  "path": "geo.select.itemStyle.borderType",
                  "default": "solid"
                },
                "props": {
                  "placeholder": "边框类型",
                  "options": [
                    {
                      "value": "solid",
                      "label": "实线",
                      "description": "连续的实线"
                    },
                    {
                      "value": "dashed",
                      "label": "虚线",
                      "description": "短横线组成的虚线"
                    },
                    {
                      "value": "dotted",
                      "label": "点线",
                      "description": "点组成的虚线"
                    }
                  ],
                  "allowCustom": true
                },
                "_raw": {
                  "label": "边框类型",
                  "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.itemStyle.borderDashOffset",
                  "default": 0
                },
                "props": {
                  "placeholder": "边框虚线偏移"
                },
                "_raw": {
                  "label": "边框虚线偏移",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.itemStyle.borderCap",
                  "default": "butt"
                },
                "props": {
                  "placeholder": "边框线帽"
                },
                "_raw": {
                  "label": "边框线帽",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.itemStyle.borderJoin",
                  "default": "bevel"
                },
                "props": {
                  "placeholder": "边框连接点"
                },
                "_raw": {
                  "label": "边框连接点",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.select.itemStyle.borderMiterLimit",
                  "default": 10
                },
                "props": {
                  "placeholder": "边框斜接限制"
                },
                "_raw": {
                  "label": "边框斜接限制",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "geo.select.itemStyle.shadowBlur",
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
                "model": "geo.select.itemStyle.shadowColor",
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
                  "path": "geo.select.itemStyle.shadowOffsetX",
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
                  "path": "geo.select.itemStyle.shadowOffsetY",
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
                  "path": "geo.select.itemStyle.opacity",
                  "default": 1
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
        "type": "ElCollapseItem",
        "props": {
          "title": "模糊",
          "name": "blur"
        },
        "children": [
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "标签",
              "name": "label"
            },
            "children": [
              {
                "type": "ElSwitch",
                "model": {
                  "path": "geo.blur.label.show",
                  "default": false
                },
                "props": {
                  "placeholder": "显示"
                },
                "_raw": {
                  "label": "显示",
                  "desc": "\n\n<p>是否显示标签。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "geo.blur.label.position",
                "props": {
                  "placeholder": "位置",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "位置",
                  "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-ts\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-ts\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.distance",
                  "default": 5
                },
                "props": {
                  "placeholder": "距离"
                },
                "_raw": {
                  "label": "距离",
                  "desc": "\n\n<p>距离图形元素的距离。</p>\n<p>当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "geo.blur.label.rotate",
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "geo.blur.label.offset",
                "props": {
                  "placeholder": "偏移"
                },
                "_raw": {
                  "label": "偏移",
                  "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "geo.blur.label.formatter",
                "props": {
                  "placeholder": "格式化器",
                  "types": [
                    "string",
                    "function"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "格式化器",
                  "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{@xxx}</code>：数据中名为 <code class=\"codespan\">&#39;xxx&#39;</code> 的维度的值，如 <code class=\"codespan\">{@product}</code> 表示名为 <code class=\"codespan\">&#39;product&#39;</code> 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}</code>：数据中维度 <code class=\"codespan\">n</code> 的值，如 <code class=\"codespan\">{@[3]}</code> 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-ts\">formatter: &#39;{b}: {@score}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-ts\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefined，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.blur.label.color",
                  "default": "#fff"
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
                  "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.fontStyle",
                  "default": "normal"
                },
                "props": {
                  "placeholder": "字体样式"
                },
                "_raw": {
                  "label": "字体样式",
                  "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "geo.blur.label.fontWeight",
                  "default": "normal"
                },
                "props": {
                  "placeholder": "字体粗细",
                  "types": [
                    "string",
                    "number"
                  ],
                  "defaultType": "string",
                  "specialKeywords": [
                    "normal"
                  ]
                },
                "_raw": {
                  "label": "字体粗细",
                  "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.fontFamily",
                  "default": "sans-serif"
                },
                "props": {
                  "placeholder": "字体"
                },
                "_raw": {
                  "label": "字体",
                  "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.fontSize",
                  "default": 12
                },
                "props": {
                  "placeholder": "字体大小"
                },
                "_raw": {
                  "label": "字体大小",
                  "desc": "\n\n<p>文字的字体大小。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "geo.blur.label.align",
                "props": {
                  "placeholder": "对齐"
                },
                "_raw": {
                  "label": "对齐",
                  "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "geo.blur.label.verticalAlign",
                "props": {
                  "placeholder": "垂直对齐"
                },
                "_raw": {
                  "label": "垂直对齐",
                  "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "geo.blur.label.lineHeight",
                "props": {
                  "placeholder": "行高"
                },
                "_raw": {
                  "label": "行高",
                  "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.blur.label.backgroundColor",
                  "default": "transparent"
                },
                "props": {
                  "placeholder": "背景颜色",
                  "keywords": [
                    "transparent",
                    "inherit",
                    "none"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "背景颜色",
                  "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-ts\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": "geo.blur.label.borderColor",
                "props": {
                  "placeholder": "边框颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "边框颜色",
                  "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.borderWidth",
                  "default": 0
                },
                "props": {
                  "placeholder": "边框宽度"
                },
                "_raw": {
                  "label": "边框宽度",
                  "desc": "\n\n<p>文字块边框宽度。</p>\n"
                }
              },
              {
                "type": "SmartStyleSelect",
                "model": {
                  "path": "geo.blur.label.borderType",
                  "default": "solid"
                },
                "props": {
                  "placeholder": "边框类型",
                  "options": [
                    {
                      "value": "solid",
                      "label": "实线",
                      "description": "连续的实线"
                    },
                    {
                      "value": "dashed",
                      "label": "虚线",
                      "description": "短横线组成的虚线"
                    },
                    {
                      "value": "dotted",
                      "label": "点线",
                      "description": "点组成的虚线"
                    }
                  ],
                  "allowCustom": true
                },
                "_raw": {
                  "label": "边框类型",
                  "desc": "\n\n\n<p>文字块边框描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.borderDashOffset",
                  "default": 0
                },
                "props": {
                  "placeholder": "边框虚线偏移"
                },
                "_raw": {
                  "label": "边框虚线偏移",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "geo.blur.label.borderRadius",
                  "default": 0
                },
                "props": {
                  "placeholder": "圆角半径",
                  "types": [
                    "number",
                    "array"
                  ],
                  "defaultType": "number",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "圆角半径",
                  "desc": "\n\n<p>文字块的圆角。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "geo.blur.label.padding",
                  "default": 0
                },
                "props": {
                  "placeholder": "内边距",
                  "types": [
                    "number",
                    "array"
                  ],
                  "defaultType": "number",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "内边距",
                  "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.blur.label.shadowColor",
                  "default": "transparent"
                },
                "props": {
                  "placeholder": "阴影颜色",
                  "keywords": [
                    "transparent",
                    "inherit",
                    "none"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "阴影颜色",
                  "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.shadowBlur",
                  "default": 0
                },
                "props": {
                  "placeholder": "阴影模糊"
                },
                "_raw": {
                  "label": "阴影模糊",
                  "desc": "\n\n<p>文字块的背景阴影长度。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.shadowOffsetX",
                  "default": 0
                },
                "props": {
                  "placeholder": "阴影X偏移"
                },
                "_raw": {
                  "label": "阴影X偏移",
                  "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.shadowOffsetY",
                  "default": 0
                },
                "props": {
                  "placeholder": "阴影Y偏移"
                },
                "_raw": {
                  "label": "阴影Y偏移",
                  "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n"
                }
              },
              {
                "type": "SmartSizeInput",
                "model": "geo.blur.label.width",
                "props": {
                  "placeholder": "宽度",
                  "allowPercentage": true,
                  "keywords": [
                    "auto"
                  ]
                },
                "_raw": {
                  "label": "宽度",
                  "desc": "\n\n<p>文本显示宽度。</p>\n"
                }
              },
              {
                "type": "SmartSizeInput",
                "model": "geo.blur.label.height",
                "props": {
                  "placeholder": "高度",
                  "allowPercentage": true,
                  "keywords": [
                    "auto"
                  ]
                },
                "_raw": {
                  "label": "高度",
                  "desc": "\n\n<p>文本显示高度。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": "geo.blur.label.textBorderColor",
                "props": {
                  "placeholder": "文本边框颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "文本边框颜色",
                  "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "geo.blur.label.textBorderWidth",
                "props": {
                  "placeholder": "文本边框宽度"
                },
                "_raw": {
                  "label": "文本边框宽度",
                  "desc": "\n\n<p>文字本身的描边宽度。</p>\n"
                }
              },
              {
                "type": "SmartStyleSelect",
                "model": {
                  "path": "geo.blur.label.textBorderType",
                  "default": "solid"
                },
                "props": {
                  "placeholder": "文本边框类型",
                  "options": [
                    {
                      "value": "solid",
                      "label": "实线",
                      "description": "连续的实线"
                    },
                    {
                      "value": "dashed",
                      "label": "虚线",
                      "description": "短横线组成的虚线"
                    },
                    {
                      "value": "dotted",
                      "label": "点线",
                      "description": "点组成的虚线"
                    }
                  ],
                  "allowCustom": true
                },
                "_raw": {
                  "label": "文本边框类型",
                  "desc": "\n\n\n<p>文字本身的描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">textBorderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.textBorderDashOffset",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本边框虚线偏移"
                },
                "_raw": {
                  "label": "文本边框虚线偏移",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">textBorderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.blur.label.textShadowColor",
                  "default": "transparent"
                },
                "props": {
                  "placeholder": "文本阴影颜色",
                  "keywords": [
                    "transparent",
                    "inherit",
                    "none"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "文本阴影颜色",
                  "desc": "\n\n<p>文字本身的阴影颜色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.textShadowBlur",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本阴影模糊"
                },
                "_raw": {
                  "label": "文本阴影模糊",
                  "desc": "\n\n<p>文字本身的阴影长度。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.textShadowOffsetX",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本阴影X偏移"
                },
                "_raw": {
                  "label": "文本阴影X偏移",
                  "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.textShadowOffsetY",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本阴影Y偏移"
                },
                "_raw": {
                  "label": "文本阴影Y偏移",
                  "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.overflow",
                  "default": "none"
                },
                "props": {
                  "placeholder": "溢出"
                },
                "_raw": {
                  "label": "溢出",
                  "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.label.ellipsis",
                  "default": "..."
                },
                "props": {
                  "placeholder": "省略"
                },
                "_raw": {
                  "label": "省略",
                  "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
                }
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "图元样式",
              "name": "itemStyle"
            },
            "children": [
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.blur.itemStyle.areaColor",
                  "default": "#eee"
                },
                "props": {
                  "placeholder": "区域颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "区域颜色",
                  "desc": "<p>地图区域的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.blur.itemStyle.color",
                  "default": "自适应"
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
                  "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.blur.itemStyle.borderColor",
                  "default": "#000"
                },
                "props": {
                  "placeholder": "边框颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "边框颜色",
                  "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.itemStyle.borderWidth",
                  "default": 0
                },
                "props": {
                  "placeholder": "边框宽度"
                },
                "_raw": {
                  "label": "边框宽度",
                  "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n"
                }
              },
              {
                "type": "SmartStyleSelect",
                "model": {
                  "path": "geo.blur.itemStyle.borderType",
                  "default": "solid"
                },
                "props": {
                  "placeholder": "边框类型",
                  "options": [
                    {
                      "value": "solid",
                      "label": "实线",
                      "description": "连续的实线"
                    },
                    {
                      "value": "dashed",
                      "label": "虚线",
                      "description": "短横线组成的虚线"
                    },
                    {
                      "value": "dotted",
                      "label": "点线",
                      "description": "点组成的虚线"
                    }
                  ],
                  "allowCustom": true
                },
                "_raw": {
                  "label": "边框类型",
                  "desc": "\n\n\n<p>描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.itemStyle.borderDashOffset",
                  "default": 0
                },
                "props": {
                  "placeholder": "边框虚线偏移"
                },
                "_raw": {
                  "label": "边框虚线偏移",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">borderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.itemStyle.borderCap",
                  "default": "butt"
                },
                "props": {
                  "placeholder": "边框线帽"
                },
                "_raw": {
                  "label": "边框线帽",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.itemStyle.borderJoin",
                  "default": "bevel"
                },
                "props": {
                  "placeholder": "边框连接点"
                },
                "_raw": {
                  "label": "边框连接点",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">borderMiterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.blur.itemStyle.borderMiterLimit",
                  "default": 10
                },
                "props": {
                  "placeholder": "边框斜接限制"
                },
                "_raw": {
                  "label": "边框斜接限制",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">borderJoin</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">borderMiterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "geo.blur.itemStyle.shadowBlur",
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
                "model": "geo.blur.itemStyle.shadowColor",
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
                  "path": "geo.blur.itemStyle.shadowOffsetX",
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
                  "path": "geo.blur.itemStyle.shadowOffsetY",
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
                  "path": "geo.blur.itemStyle.opacity",
                  "default": 1
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
          "path": "geo.zlevel",
          "default": 0
        },
        "props": {
          "placeholder": "层级"
        },
        "_raw": {
          "label": "层级",
          "desc": "<p>所有图形的 zlevel 值。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "geo.z",
          "default": 2
        },
        "props": {
          "placeholder": "Z"
        },
        "_raw": {
          "label": "Z",
          "desc": "<p>组件的所有图形的<code class=\"codespan\">z</code>值。控制图形的前后顺序。<code class=\"codespan\">z</code>值小的图形会被<code class=\"codespan\">z</code>值大的图形覆盖。</p>\n<p><code class=\"codespan\">z</code>相比<code class=\"codespan\">zlevel</code>优先级更低，而且不会创建新的 Canvas。</p>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "geo.left",
          "default": "auto"
        },
        "props": {
          "placeholder": "左",
          "keywords": [
            "left",
            "right",
            "center",
            "top",
            "bottom",
            "middle",
            "auto"
          ],
          "allowPercentage": true
        },
        "_raw": {
          "label": "左",
          "desc": "\n\n\n\n<p>geo 组件离容器左侧的距离。</p>\n<p><code class=\"codespan\">left</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器宽度的百分比，也可以是 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">left</code> 的值为 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>，组件会根据相应的位置自动对齐。</p>\n<blockquote>\n<p>注：如果发现图形被拉伸了不符合预期，参见 <a href=\"#geo.preserveAspect\">preserveAspect</a>。</p>\n</blockquote>\n<blockquote>\n<p>注：geo 有两种盒布局方式。你可以使用任一种：</p>\n<ul>\n<li><a href=\"#geo.left\">geo.left</a> / <a href=\"#geo.right\">.right</a> / <a href=\"#geo.top\">.top</a> / <a href=\"#geo.bottom\">.bottom</a> / <a href=\"#geo.width\">.width</a> / <a href=\"#geo.height\">.height</a></li>\n<li><a href=\"#geo.layoutCenter\">geo.layoutCenter</a> / <a href=\"#geo.layoutSize\">.layoutSize</a></li>\n</ul>\n</blockquote>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "geo.top",
          "default": "auto"
        },
        "props": {
          "placeholder": "上",
          "keywords": [
            "left",
            "right",
            "center",
            "top",
            "bottom",
            "middle",
            "auto"
          ],
          "allowPercentage": true
        },
        "_raw": {
          "label": "上",
          "desc": "\n\n\n\n<p>geo 组件离容器上侧的距离。</p>\n<p><code class=\"codespan\">top</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高度的百分比，也可以是 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">top</code> 的值为 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>，组件会根据相应的位置自动对齐。</p>\n<blockquote>\n<p>注：如果发现图形被拉伸了不符合预期，参见 <a href=\"#geo.preserveAspect\">preserveAspect</a>。</p>\n</blockquote>\n<blockquote>\n<p>注：geo 有两种盒布局方式。你可以使用任一种：</p>\n<ul>\n<li><a href=\"#geo.left\">geo.left</a> / <a href=\"#geo.right\">.right</a> / <a href=\"#geo.top\">.top</a> / <a href=\"#geo.bottom\">.bottom</a> / <a href=\"#geo.width\">.width</a> / <a href=\"#geo.height\">.height</a></li>\n<li><a href=\"#geo.layoutCenter\">geo.layoutCenter</a> / <a href=\"#geo.layoutSize\">.layoutSize</a></li>\n</ul>\n</blockquote>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "geo.right",
          "default": "auto"
        },
        "props": {
          "placeholder": "右",
          "keywords": [
            "left",
            "right",
            "center",
            "top",
            "bottom",
            "middle",
            "auto"
          ],
          "allowPercentage": true
        },
        "_raw": {
          "label": "右",
          "desc": "\n\n\n\n<p>geo 组件离容器右侧的距离。</p>\n<p><code class=\"codespan\">right</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器宽度的百分比。</p>\n<p>默认自适应。</p>\n<blockquote>\n<p>注：如果发现图形被拉伸了不符合预期，参见 <a href=\"#geo.preserveAspect\">preserveAspect</a>。</p>\n</blockquote>\n<blockquote>\n<p>注：geo 有两种盒布局方式。你可以使用任一种：</p>\n<ul>\n<li><a href=\"#geo.left\">geo.left</a> / <a href=\"#geo.right\">.right</a> / <a href=\"#geo.top\">.top</a> / <a href=\"#geo.bottom\">.bottom</a> / <a href=\"#geo.width\">.width</a> / <a href=\"#geo.height\">.height</a></li>\n<li><a href=\"#geo.layoutCenter\">geo.layoutCenter</a> / <a href=\"#geo.layoutSize\">.layoutSize</a></li>\n</ul>\n</blockquote>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "geo.bottom",
          "default": "auto"
        },
        "props": {
          "placeholder": "下",
          "keywords": [
            "left",
            "right",
            "center",
            "top",
            "bottom",
            "middle",
            "auto"
          ],
          "allowPercentage": true
        },
        "_raw": {
          "label": "下",
          "desc": "\n\n\n\n<p>geo 组件离容器下侧的距离。</p>\n<p>bottom 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高度的百分比。</p>\n<p>默认自适应。</p>\n<blockquote>\n<p>注：如果发现图形被拉伸了不符合预期，参见 <a href=\"#geo.preserveAspect\">preserveAspect</a>。</p>\n</blockquote>\n<blockquote>\n<p>注：geo 有两种盒布局方式。你可以使用任一种：</p>\n<ul>\n<li><a href=\"#geo.left\">geo.left</a> / <a href=\"#geo.right\">.right</a> / <a href=\"#geo.top\">.top</a> / <a href=\"#geo.bottom\">.bottom</a> / <a href=\"#geo.width\">.width</a> / <a href=\"#geo.height\">.height</a></li>\n<li><a href=\"#geo.layoutCenter\">geo.layoutCenter</a> / <a href=\"#geo.layoutSize\">.layoutSize</a></li>\n</ul>\n</blockquote>\n"
        }
      },
      {
        "type": "ElInput",
        "model": "geo.layoutCenter",
        "props": {
          "placeholder": "布局中心"
        },
        "_raw": {
          "label": "布局中心",
          "desc": "<p><code class=\"codespan\">layoutCenter</code> 和 <code class=\"codespan\">layoutSize</code> 用于定义 geo 组件 所拥有的矩形区域，其中<code class=\"codespan\">layoutCenter</code> 定义了区域中心在容器中的位置，<code class=\"codespan\">layoutSize</code> 定义了区域的大小。如下示例：</p>\n<pre><code class=\"lang-ts\">layoutCenter: [&#39;30%&#39;, &#39;30%&#39;],\n// 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域\nlayoutSize: 100\n</code></pre>\n<p>设置这两个值后 <code class=\"codespan\">left/right/top/bottom/width/height</code> 无效。</p>\n<blockquote>\n<p>注：geo 有两种盒布局方式。你可以使用任一种：</p>\n<ul>\n<li><a href=\"#geo.left\">geo.left</a> / <a href=\"#geo.right\">.right</a> / <a href=\"#geo.top\">.top</a> / <a href=\"#geo.bottom\">.bottom</a> / <a href=\"#geo.width\">.width</a> / <a href=\"#geo.height\">.height</a></li>\n<li><a href=\"#geo.layoutCenter\">geo.layoutCenter</a> / <a href=\"#geo.layoutSize\">.layoutSize</a></li>\n</ul>\n</blockquote>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": "geo.layoutSize",
        "props": {
          "placeholder": "布局尺寸",
          "types": [
            "number",
            "string"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "布局尺寸",
          "desc": "<p>地图的大小，见 <a href=\"geo.layoutCenter\" target=\"_blank\">layoutCenter</a>。支持相对于容器宽高的百分比或者绝对的像素大小。</p>\n<blockquote>\n<p>注：geo 有两种盒布局方式。你可以使用任一种：</p>\n<ul>\n<li><a href=\"#geo.left\">geo.left</a> / <a href=\"#geo.right\">.right</a> / <a href=\"#geo.top\">.top</a> / <a href=\"#geo.bottom\">.bottom</a> / <a href=\"#geo.width\">.width</a> / <a href=\"#geo.height\">.height</a></li>\n<li><a href=\"#geo.layoutCenter\">geo.layoutCenter</a> / <a href=\"#geo.layoutSize\">.layoutSize</a></li>\n</ul>\n</blockquote>\n"
        }
      },
      {
        "type": "ElInput",
        "model": "geo.regions",
        "props": {
          "placeholder": "区域"
        },
        "_raw": {
          "label": "区域",
          "desc": "<p>在地图中对特定的区域配置样式。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">regions: [{\n    name: &#39;广东&#39;,\n    itemStyle: {\n        areaColor: &#39;red&#39;,\n        color: &#39;red&#39;\n    }\n}]\n</code></pre>\n<p>geo 区域的颜色也可以被 map series 所控制，参见 <a href=\"#series-map.geoIndex\">series-map.geoIndex</a>。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "geo.silent",
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
        "type": "ElCollapseItem",
        "props": {
          "title": "提示框",
          "name": "tooltip"
        },
        "children": [
          {
            "type": "ElSwitch",
            "model": {
              "path": "geo.tooltip.show",
              "default": true
            },
            "props": {
              "placeholder": "显示"
            },
            "_raw": {
              "label": "显示",
              "desc": "\n\n<p>是否显示提示框组件。</p>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": "geo.tooltip.position",
            "props": {
              "placeholder": "位置",
              "types": [
                "string",
                "array",
                "function"
              ],
              "defaultType": "string",
              "specialKeywords": []
            },
            "_raw": {
              "label": "位置",
              "desc": "<p>提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。</p>\n<p>可选：</p>\n<ul>\n<li><p><code class=\"codespan\">Array</code></p>\n<p>  通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。</p>\n<p>  示例:</p>\n<pre><code class=\"lang-ts\">  // 绝对位置，相对于容器左侧 10px, 上侧 10 px\n  position: [10, 10]\n  // 相对位置，放置在容器正中间\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">Function</code></p>\n<p>  回调函数，格式如下：</p>\n<pre><code class=\"lang-ts\">  (point: Array, params: Object|Array.&lt;Object&gt;, dom: HTMLDomElement, rect: Object, size: Object) =&gt; Array\n</code></pre>\n<p>  <strong>参数：</strong><br>\n  point: 鼠标位置，如 [20, 40]。<br>\n  params: 同 formatter 的参数相同。<br>\n  dom: tooltip 的 dom 对象。<br>\n  rect: 只有鼠标在图形上时有效，是一个用<code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">width</code>, <code class=\"codespan\">height</code>四个属性表达的图形包围盒。<br>\n  size: 包括 dom 的尺寸和 echarts 容器的当前尺寸，例如：<code class=\"codespan\">{contentSize: [width, height], viewSize: [width, height]}</code>。<br></p>\n<p>  <strong>返回值：</strong><br>\n  可以是一个表示 tooltip 位置的数组，数组值可以是绝对的像素值，也可以是相  百分比。<br>\n  也可以是一个对象，如：<code class=\"codespan\">{left: 10, top: 30}</code>，或者 <code class=\"codespan\">{right: &#39;20%&#39;, bottom: 40}</code>。<br></p>\n<p>  如下示例：</p>\n<pre><code class=\"lang-ts\">  position: function (point, params, dom, rect, size) {\n      // 固定在顶部\n      return [point[0], &#39;10%&#39;];\n  }\n</code></pre>\n<p>  或者：</p>\n<pre><code class=\"lang-ts\">  position: function (pos, params, dom, rect, size) {\n      // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。\n      var obj = {top: 60};\n      obj[[&#39;left&#39;, &#39;right&#39;][+(pos[0] &lt; size.viewSize[0] / 2)]] = 5;\n      return obj;\n  }\n</code></pre>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;inside&#39;</code></p>\n<p>  鼠标所在图形的内部中心位置，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;top&#39;</code></p>\n<p>  鼠标所在图形上侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;left&#39;</code></p>\n<p>  鼠标所在图形左侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code></p>\n<p>  鼠标所在图形右侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;bottom&#39;</code></p>\n<p>  鼠标所在图形底侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n</ul>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": "geo.tooltip.formatter",
            "props": {
              "placeholder": "格式化器",
              "types": [
                "string",
                "function"
              ],
              "defaultType": "string",
              "specialKeywords": []
            },
            "_raw": {
              "label": "格式化器",
              "desc": "<p>提示框浮层内容格式器，支持字符串模板和回调函数两种形式。</p>\n<p><strong>1. 字符串模板</strong></p>\n<p>模板变量有 <code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code>，<code class=\"codespan\">{e}</code>，分别表示系列名，数据名，数据值等。\n在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，会有多个系列的数据，此时可以通过 <code class=\"codespan\">{a0}</code>, <code class=\"codespan\">{a1}</code>, <code class=\"codespan\">{a2}</code> 这种后面加索引的方式表示系列的索引。\n不同图表类型下的 <code class=\"codespan\">{a}</code>，<code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code> 含义不一样。\n其中变量<code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code>在不同图表类型下代表数据含义为：</p>\n<ul>\n<li><p>折线（区域）图、柱状（条形）图、K线图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（类目值），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>散点图（气泡）图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据名称），<code class=\"codespan\">{c}</code>（数值数组）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>地图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（区域名称），<code class=\"codespan\">{c}</code>（合并数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>饼图、仪表盘、漏斗图: <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据项名称），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（百分比）</p>\n</li>\n</ul>\n<p>更多其它图表模板变量的含义可以见相应的图表的 label.formatter 配置项。</p>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-ts\">formatter: &#39;{b0}: {c0}&lt;br /&gt;{b1}: {c1}&#39;\n</code></pre>\n<p><strong>2. 回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-ts\">(params: Object|Array, ticket: string, callback: (ticket: string, html: string | HTMLElement | HTMLElement[])) =&gt; string | HTMLElement | HTMLElement[]\n</code></pre>\n<p>支持返回 HTML 字符串或者创建的 DOM 实例。</p>\n<div  class=\"doc-partial-security-warning\">\n<span  class=\"warning-title\">[警告]:</span> tooltip 是用 HTML 实现的（除非 <a  href=\"#tooltip.renderMode\">tooltip.renderMode</a> 设为 <code  class=\"codespan\">richText</code>）。允许用此方式定制 HTML。传入 HTML 前须要对其内容进行正确转义。 使用时必须考虑 <strong >安全风险</strong>。文档 <a  href=\"https://echarts.apache.org/handbook/zh/best-practices/security\" target=\"_blank\">“安全指南”</a> 给出了安全使用建议。\n</div>\n\n\n<p>组装 HTML 字符串时，<strong>必须进行 HTML 转义（HTML-escaping）</strong>。例如：</p>\n<pre><code class=\"lang-js\">{\n    tooltip: {\n        formatter: params =&gt; {\n            const { name, value } = params;\n            // 必须进行 HTML 转义。\n            // 否则，如果 name 或 value 中含有功能性字符，如 &#39;&lt;&#39; &#39;&gt;&#39; 等，\n            // 则可能渲染不正确。\n            // 同时，如果 name 或 value 的值来自于“非受信任”的来源，则可能被注入恶意代码；\n            // 如果未被转义，则会被运行。\n            return echarts.format.encodeHTML(name)\n                + &#39;&lt;b&gt;&#39; + echarts.format.encodeHTML(value) + &#39;&lt;/b&gt;&#39;;\n            // 注：`echarts.format.encodeHTML` 是个工具函数，把特殊字符\n            //  （&#39;&amp;&#39;、&#39;&lt;&#39;、&#39;&gt;&#39;、&#39;&quot;&#39;、&quot;&#39;&quot;）转换成他们对应的 HTML entities.\n            //  这只是个例子，任何 HTML 转义工具函数都可使用。\n        }\n    }\n}\n</code></pre>\n<p>第一个参数 <code class=\"codespan\">params</code> 是 formatter 需要的数据集。格式如下：</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefined，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n    // 饼图/漏斗图的百分比\n    percent: number,\n    // 旭日图中当前节点的祖先节点（包括自身）\n    treePathInfo: Array,\n    // 树图/矩形树图中当前节点的祖先节点（包括自身）\n    treeAncestors: Array,\n    // 坐标轴标签文本是否溢出隐藏，可以使用此函数判断是否需要弹出提示框\n    isTruncated: Function,\n    // 当前坐标轴标签刻度索引\n    tickIndex: number\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，或者 tooltip 被 <a href=\"#xAxis.axisPointer\">axisPointer</a> 触发的时候，<code class=\"codespan\">params</code> 是多个系列的数据数组。其中每项内容格式同上，并且，</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefined，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>第二个参数 <code class=\"codespan\">ticket</code> 是异步回调标识，配合第三个参数 <code class=\"codespan\">callback</code> 使用。\n第三个参数 <code class=\"codespan\">callback</code> 是异步回调，在提示框浮层内容是异步获取的时候，可以通过 callback 传入上述的 <code class=\"codespan\">ticket</code> 和 <code class=\"codespan\">html</code> 更新提示框浮层内容。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">formatter: function (params, ticket, callback) {\n    $.get(&#39;detail?name=&#39; + params.name, function (content) {\n        callback(ticket, toHTML(content));\n    });\n    return &#39;Loading&#39;;\n}\n</code></pre>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "geo.tooltip.valueFormatter",
            "props": {
              "placeholder": "数值格式化器"
            },
            "_raw": {
              "label": "数值格式化器",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.3.0</code> 开始支持\n\n</div>\n\n\n\n<p>tooltip 中数值显示部分的格式化回调函数。</p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-ts\">(value: number | string, dataIndex: number) =&gt; string\n</code></pre>\n<div  class=\"doc-partial-version\">\n\n<code  class=\"codespan\">dataIndex</code> 参数 从 <code  class=\"codespan\">v5.3.0</code> 开始支持\n\n</div>\n\n\n\n<p>示例：</p>\n<pre><code class=\"lang-ts\">// 添加 $ 前缀\nvalueFormatter: (value) =&gt; &#39;$&#39; + value.toFixed(2)\n</code></pre>\n<blockquote>\n<p><strong>[注]:</strong> 不同于 <a href=\"#tooltip.formatter\">tooltip.formater</a>，本方式不支持返回原始 HTML。返回内容渲染前会被自动按需转义。</p>\n</blockquote>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "geo.tooltip.backgroundColor",
              "default": "rgba(50,50,50,0.7)"
            },
            "props": {
              "placeholder": "背景颜色",
              "keywords": [
                "inherit",
                "none",
                "transparent"
              ],
              "allowInherit": true
            },
            "_raw": {
              "label": "背景颜色",
              "desc": "<p>提示框浮层的背景颜色。</p>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "geo.tooltip.borderColor",
              "default": "#333"
            },
            "props": {
              "placeholder": "边框颜色",
              "keywords": [
                "inherit",
                "none",
                "transparent"
              ],
              "allowInherit": true
            },
            "_raw": {
              "label": "边框颜色",
              "desc": "\n\n\n\n\n\n\n\n\n\n<p>提示框浮层的边框颜色。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.tooltip.borderWidth",
              "default": 0
            },
            "props": {
              "placeholder": "边框宽度"
            },
            "_raw": {
              "label": "边框宽度",
              "desc": "\n\n\n\n\n\n\n\n\n\n<p>提示框浮层的边框宽。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "geo.tooltip.padding",
              "default": 5
            },
            "props": {
              "placeholder": "内边距"
            },
            "_raw": {
              "label": "内边距",
              "desc": "\n\n\n\n\n\n\n\n\n\n\n\n\n\n<p>提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。</p>\n<p>使用示例：</p>\n<pre><code class=\"lang-ts\">// 设置内边距为 5\npadding: 5\n// 设置上下的内边距为 5，左右的内边距为 10\npadding: [5, 10]\n// 分别设置四个方向的内边距\npadding: [\n    5,  // 上\n    10, // 右\n    5,  // 下\n    10, // 左\n]\n</code></pre>\n"
            }
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "文本样式",
              "name": "textStyle"
            },
            "children": [
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.tooltip.textStyle.color",
                  "default": "#fff"
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
                  "desc": "\n\n<p>文字的颜色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.tooltip.textStyle.fontStyle",
                  "default": "normal"
                },
                "props": {
                  "placeholder": "字体样式"
                },
                "_raw": {
                  "label": "字体样式",
                  "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "geo.tooltip.textStyle.fontWeight",
                  "default": "normal"
                },
                "props": {
                  "placeholder": "字体粗细",
                  "types": [
                    "string",
                    "number"
                  ],
                  "defaultType": "string",
                  "specialKeywords": [
                    "normal"
                  ]
                },
                "_raw": {
                  "label": "字体粗细",
                  "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.tooltip.textStyle.fontFamily",
                  "default": "sans-serif"
                },
                "props": {
                  "placeholder": "字体"
                },
                "_raw": {
                  "label": "字体",
                  "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.tooltip.textStyle.fontSize",
                  "default": 14
                },
                "props": {
                  "placeholder": "字体大小"
                },
                "_raw": {
                  "label": "字体大小",
                  "desc": "\n\n<p>文字的字体大小。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "geo.tooltip.textStyle.lineHeight",
                "props": {
                  "placeholder": "行高"
                },
                "_raw": {
                  "label": "行高",
                  "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "SmartSizeInput",
                "model": "geo.tooltip.textStyle.width",
                "props": {
                  "placeholder": "宽度",
                  "allowPercentage": true,
                  "keywords": [
                    "auto"
                  ]
                },
                "_raw": {
                  "label": "宽度",
                  "desc": "\n\n<p>文本显示宽度。</p>\n"
                }
              },
              {
                "type": "SmartSizeInput",
                "model": "geo.tooltip.textStyle.height",
                "props": {
                  "placeholder": "高度",
                  "allowPercentage": true,
                  "keywords": [
                    "auto"
                  ]
                },
                "_raw": {
                  "label": "高度",
                  "desc": "\n\n<p>文本显示高度。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": "geo.tooltip.textStyle.textBorderColor",
                "props": {
                  "placeholder": "文本边框颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "文本边框颜色",
                  "desc": "\n\n<p>文字本身的描边颜色。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "geo.tooltip.textStyle.textBorderWidth",
                "props": {
                  "placeholder": "文本边框宽度"
                },
                "_raw": {
                  "label": "文本边框宽度",
                  "desc": "\n\n<p>文字本身的描边宽度。</p>\n"
                }
              },
              {
                "type": "SmartStyleSelect",
                "model": {
                  "path": "geo.tooltip.textStyle.textBorderType",
                  "default": "solid"
                },
                "props": {
                  "placeholder": "文本边框类型",
                  "options": [
                    {
                      "value": "solid",
                      "label": "实线",
                      "description": "连续的实线"
                    },
                    {
                      "value": "dashed",
                      "label": "虚线",
                      "description": "短横线组成的虚线"
                    },
                    {
                      "value": "dotted",
                      "label": "点线",
                      "description": "点组成的虚线"
                    }
                  ],
                  "allowCustom": true
                },
                "_raw": {
                  "label": "文本边框类型",
                  "desc": "\n\n\n<p>文字本身的描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">textBorderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.tooltip.textStyle.textBorderDashOffset",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本边框虚线偏移"
                },
                "_raw": {
                  "label": "文本边框虚线偏移",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">textBorderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "geo.tooltip.textStyle.textShadowColor",
                  "default": "transparent"
                },
                "props": {
                  "placeholder": "文本阴影颜色",
                  "keywords": [
                    "transparent",
                    "inherit",
                    "none"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "文本阴影颜色",
                  "desc": "\n\n<p>文字本身的阴影颜色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.tooltip.textStyle.textShadowBlur",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本阴影模糊"
                },
                "_raw": {
                  "label": "文本阴影模糊",
                  "desc": "\n\n<p>文字本身的阴影长度。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.tooltip.textStyle.textShadowOffsetX",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本阴影X偏移"
                },
                "_raw": {
                  "label": "文本阴影X偏移",
                  "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.tooltip.textStyle.textShadowOffsetY",
                  "default": 0
                },
                "props": {
                  "placeholder": "文本阴影Y偏移"
                },
                "_raw": {
                  "label": "文本阴影Y偏移",
                  "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.tooltip.textStyle.overflow",
                  "default": "none"
                },
                "props": {
                  "placeholder": "溢出"
                },
                "_raw": {
                  "label": "溢出",
                  "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "geo.tooltip.textStyle.ellipsis",
                  "default": "..."
                },
                "props": {
                  "placeholder": "省略"
                },
                "_raw": {
                  "label": "省略",
                  "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
                }
              }
            ]
          },
          {
            "type": "ElInput",
            "model": "geo.tooltip.extraCssText",
            "props": {
              "placeholder": "额外CSS文本"
            },
            "_raw": {
              "label": "额外CSS文本",
              "desc": "\n\n\n\n\n\n\n\n\n\n<p>额外附加到浮层的 css 样式。如下为浮层添加阴影的示例：</p>\n<pre><code class=\"lang-ts\">extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39;\n</code></pre>\n<div  class=\"doc-partial-security-warning\">\n<span  class=\"warning-title\">[警告]:</span> tooltip 是用 HTML 实现的（除非 <a  href=\"#tooltip.renderMode\">tooltip.renderMode</a> 设为 <code  class=\"codespan\">richText</code>）。允许用此方式定制 toolbox 外壳的 CSS text。 如果此 CSS text 来自于“不受信任”的来源，必须考虑 <strong >安全风险</strong>。文档 <a  href=\"https://echarts.apache.org/handbook/zh/best-practices/security\" target=\"_blank\">“安全指南”</a> 给出了安全使用建议。\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
            }
          }
        ]
      }
    ]
  }
];
