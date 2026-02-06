export default [
  {
    "type": "ElCollapseItem",
    "props": {
      "title": "旭日图",
      "name": "sunburst"
    },
    "children": [
      {
        "type": "ElInput",
        "model": {
          "path": "series.sunburst.type",
          "default": "sunburst"
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
        "model": "series.sunburst.id",
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
        "model": "series.sunburst.name",
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
          "path": "series.sunburst.zlevel",
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
          "path": "series.sunburst.z",
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
        "type": "ElInput",
        "model": {
          "path": "series.sunburst.center",
          "default": "['50%', '50%']"
        },
        "props": {
          "placeholder": "中心"
        },
        "_raw": {
          "label": "中心",
          "desc": "\n\n<p>旭日图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。</p>\n<p>支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。</p>\n<p><strong>使用示例：</strong></p>\n<pre><code>// 设置成绝对的像素值\ncenter: [400, 300]\n// 设置成相对的百分比\ncenter: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "series.sunburst.radius",
          "default": "[0, '75%']"
        },
        "props": {
          "placeholder": "半径",
          "types": [
            "number",
            "string",
            "array"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "半径",
          "desc": "\n\n<p>旭日图的半径。可以为如下类型：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：直接指定外半径值。</li>\n<li><code class=\"codespan\">string</code>：例如，<code class=\"codespan\">&#39;20%&#39;</code>，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。</li>\n</ul>\n<ul>\n<li><code class=\"codespan\">Array.&lt;number|string&gt;</code>：数组的第一项是内半径，第二项是外半径。每一项遵从上述 <code class=\"codespan\">number</code> <code class=\"codespan\">string</code> 的描述。</li>\n</ul>\n"
        }
      },
      {
        "type": "ElInput",
        "model": "series.sunburst.data",
        "props": {
          "placeholder": "数据"
        },
        "_raw": {
          "label": "数据",
          "desc": "<p><a href=\"#series-sunburst.data\">series-sunburst.data</a> 的数据格式是树状的，例如：</p>\n<pre><code class=\"lang-ts\">[{\n    name: &#39;parent1&#39;,\n    value: 10,          // 可以不写父元素的 value，则为子元素之和；\n                        // 如果写了，并且大于子元素之和，可以用来表示还有其他子元素未显示\n    children: [{\n        value: 5,\n        name: &#39;child1&#39;,\n        children: [{\n            value: 2,\n            name: &#39;grandchild1&#39;,\n            itemStyle: {\n                // 每个数据可以有自己的样式，覆盖 series.itemStyle 和 level.itemStyle\n            },\n            label: {\n                // 标签样式，同上\n            }\n        }]\n    }, {\n        value: 3,\n        name: &#39;child2&#39;\n    }],\n    itemStyle: {\n        // parent1 的图形样式，不会被后代继承\n    },\n    label: {\n        // parent1 的标签样式，不会被后代继承\n    }\n}, {\n    name: &#39;parent2&#39;,\n    value: 4\n}]\n</code></pre>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "series.sunburst.nodeClick",
          "default": "rootToNode"
        },
        "props": {
          "placeholder": "节点点击",
          "types": [
            "boolean",
            "string"
          ],
          "defaultType": "boolean",
          "specialKeywords": []
        },
        "_raw": {
          "label": "节点点击",
          "desc": "\n\n<p>点击节点后的行为。可取值为：</p>\n<ul>\n<li><code class=\"codespan\">false</code>：节点点击无反应。</li>\n<li><code class=\"codespan\">&#39;rootToNode&#39;</code>：点击节点后以该节点为根结点。</li>\n<li><code class=\"codespan\">&#39;link&#39;</code>：如果节点数据中有 <a href=\"#series-sunburst.data.link\">link</a> 点击节点后会进行超链接跳转。</li>\n</ul>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "series.sunburst.sort",
          "default": "desc"
        },
        "props": {
          "placeholder": "排序",
          "types": [
            "string",
            "function"
          ],
          "defaultType": "string",
          "specialKeywords": []
        },
        "_raw": {
          "label": "排序",
          "desc": "\n\n<p>扇形块根据数据 <a href=\"#series-sunburst.data.value\"><code class=\"codespan\">value</code></a> 的排序方式，如果未指定 <code class=\"codespan\">value</code>，则其值为子元素 <code class=\"codespan\">value</code> 之和。默认值 <code class=\"codespan\">&#39;desc&#39;</code> 表示降序排序；还可以设置为 <code class=\"codespan\">&#39;asc&#39;</code> 表示升序排序；<code class=\"codespan\">null</code> 表示不排序，使用原始数据的顺序；或者用回调函数进行排列：</p>\n<pre><code class=\"lang-ts\">function(nodeA, nodeB) {\n    return nodeA.getValue() - nodeB.getValue();\n}\n</code></pre>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "series.sunburst.renderLabelForZeroData",
          "default": false
        },
        "props": {
          "placeholder": "零数据渲染标签"
        },
        "_raw": {
          "label": "零数据渲染标签",
          "desc": "\n\n<p>如果数据没有 <code class=\"codespan\">name</code>，是否需要渲染文字。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "series.sunburst.clockwise",
          "default": true
        },
        "props": {
          "placeholder": "顺时针"
        },
        "_raw": {
          "label": "顺时针",
          "desc": "\n\n<p>旭日图的扇区是否是顺时针排布。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.sunburst.startAngle",
          "default": 90
        },
        "props": {
          "placeholder": "起始角度"
        },
        "_raw": {
          "label": "起始角度",
          "desc": "\n\n<p>起始角度，支持范围[0, 360]。</p>\n"
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
            "type": "SmartUnionInput",
            "model": {
              "path": "series.sunburst.label.rotate",
              "default": "radial"
            },
            "props": {
              "placeholder": "旋转",
              "types": [
                "string",
                "number"
              ],
              "defaultType": "string",
              "specialKeywords": []
            },
            "_raw": {
              "label": "旋转",
              "desc": "<p>如果是 <code class=\"codespan\">number</code> 类型，则表示标签的旋转角，从 -90 度到 90 度，正值是逆时针。</p>\n<p>除此之外，还可以是字符串 <code class=\"codespan\">&#39;radial&#39;</code> 表示径向旋转、<code class=\"codespan\">&#39;tangential&#39;</code> 表示切向旋转。</p>\n<p>如果不需要文字旋转，可以将其设为 <code class=\"codespan\">0</code>。</p>\n<p>下面的例子展示了不同的 <code class=\"codespan\">rotate</code> 设置方法：</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=sunburst-label-rotate&edit=1&reset=1\" width=\"700\" height=\"400\"></iframe>\n\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "series.sunburst.label.align",
              "default": "center"
            },
            "props": {
              "placeholder": "对齐"
            },
            "_raw": {
              "label": "对齐",
              "desc": "\n\n<p>文字对齐方式，可取值为：<code class=\"codespan\">&#39;left&#39;</code>、 <code class=\"codespan\">&#39;center&#39;</code>、 <code class=\"codespan\">&#39;right&#39;</code>。注意，<code class=\"codespan\">&#39;left&#39;</code> 是指靠近内圈，而 <code class=\"codespan\">&#39;right&#39;</code> 是指靠近外圈。</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/sunburst-label-align&edit=1&reset=1\" width=\"700\" height=\"400\"></iframe>\n\n\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "series.sunburst.label.minAngle",
            "props": {
              "placeholder": "最小角度"
            },
            "_raw": {
              "label": "最小角度",
              "desc": "\n\n<p>当某个扇形块的角度小于该值（角度制）时，扇形块对应的文字不显示。该值用以隐藏过小扇形块中的文字。</p>\n"
            }
          },
          {
            "type": "ElSwitch",
            "model": {
              "path": "series.sunburst.label.show",
              "default": true
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
            "model": {
              "path": "series.sunburst.label.position",
              "default": "inside"
            },
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
              "path": "series.sunburst.label.distance",
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
            "type": "ElInput",
            "model": "series.sunburst.label.offset",
            "props": {
              "placeholder": "偏移"
            },
            "_raw": {
              "label": "偏移",
              "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "series.sunburst.label.minMargin",
            "props": {
              "placeholder": "最小边距"
            },
            "_raw": {
              "label": "最小边距",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>用于控制标签之间的最小距离，当启用 <a href=\"#series.labelLayout\">labelLayout</a> 时可能会用到。</p>\n<p><code class=\"codespan\">minMargin</code> 和 <code class=\"codespan\">textMargin</code> 含义相似，但有细微区别。如果不确定，可使用 <code class=\"codespan\">textMargin</code>，因为它基本包含了 <code class=\"codespan\">minMargin</code> 的能力，并且在某些旋转标签的场景下可以提供更紧凑的布局。</p>\n<blockquote>\n<p>区别如下：</p>\n<ul>\n<li>两个标签之间的最小间隔（如适用）为 <code class=\"codespan\">label1.minMargin/2 + label2.minMargin/2</code>，或 <code class=\"codespan\">label1.textMargin[number] + label2.textMargin[number]</code>。</li>\n<li>如果标签设置了 <code class=\"codespan\">rotate</code>：<ul>\n<li><code class=\"codespan\">minMargin</code>：先旋转标签，取四个角的 x/y 的 min/max 得到新的矩形（即扩展后的包围盒），最后在新矩形上应用 <code class=\"codespan\">minMargin</code>。</li>\n<li><code class=\"codespan\">textMargin</code>：先在标签的包围盒上应用 <code class=\"codespan\">textMargin</code>，再进行旋转。</li>\n</ul>\n</li>\n<li>数据类型：<code class=\"codespan\">minMargin</code> 只能为 <code class=\"codespan\">number</code>，<code class=\"codespan\">textMargin</code> 可以为 <code class=\"codespan\">number | number[]</code>（类似 CSS margin）。</li>\n</ul>\n</blockquote>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": "series.sunburst.label.formatter",
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
              "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{@xxx}</code>：数据中名为 <code class=\"codespan\">&#39;xxx&#39;</code> 的维度的值，如 <code class=\"codespan\">{@product}</code> 表示名为 <code class=\"codespan\">&#39;product&#39;</code> 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}</code>：数据中维度 <code class=\"codespan\">n</code> 的值，如 <code class=\"codespan\">{@[3]}</code> 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-ts\">formatter: &#39;{b}: {@score}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-ts\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefined，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n    // 当前节点的祖先节点（包括自身）\n    treePathInfo: Array\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "series.sunburst.label.color",
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
              "path": "series.sunburst.label.fontStyle",
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
              "path": "series.sunburst.label.fontWeight",
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
              "path": "series.sunburst.label.fontFamily",
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
              "path": "series.sunburst.label.fontSize",
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
            "model": "series.sunburst.label.verticalAlign",
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
            "model": "series.sunburst.label.lineHeight",
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
              "path": "series.sunburst.label.backgroundColor",
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
            "model": "series.sunburst.label.borderColor",
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
              "path": "series.sunburst.label.borderWidth",
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
              "path": "series.sunburst.label.borderType",
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
              "path": "series.sunburst.label.borderDashOffset",
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
              "path": "series.sunburst.label.borderRadius",
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
              "path": "series.sunburst.label.padding",
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
              "path": "series.sunburst.label.shadowColor",
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
              "path": "series.sunburst.label.shadowBlur",
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
              "path": "series.sunburst.label.shadowOffsetX",
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
              "path": "series.sunburst.label.shadowOffsetY",
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
            "model": "series.sunburst.label.width",
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
            "model": "series.sunburst.label.height",
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
            "model": "series.sunburst.label.textBorderColor",
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
            "model": "series.sunburst.label.textBorderWidth",
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
              "path": "series.sunburst.label.textBorderType",
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
              "path": "series.sunburst.label.textBorderDashOffset",
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
              "path": "series.sunburst.label.textShadowColor",
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
              "path": "series.sunburst.label.textShadowBlur",
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
              "path": "series.sunburst.label.textShadowOffsetX",
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
              "path": "series.sunburst.label.textShadowOffsetY",
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
              "path": "series.sunburst.label.overflow",
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
              "path": "series.sunburst.label.ellipsis",
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
          "title": "标签线",
          "name": "labelLine"
        },
        "children": [
          {
            "type": "ElSwitch",
            "model": "series.sunburst.labelLine.show",
            "props": {
              "placeholder": "显示"
            },
            "_raw": {
              "label": "显示",
              "desc": "\n\n<p>是否显示视觉引导线。</p>\n"
            }
          },
          {
            "type": "ElSwitch",
            "model": "series.sunburst.labelLine.showAbove",
            "props": {
              "placeholder": "显示在上方"
            },
            "_raw": {
              "label": "显示在上方",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>是否显示在图形上方。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "series.sunburst.labelLine.length2",
            "props": {
              "placeholder": "长度2"
            },
            "_raw": {
              "label": "长度2",
              "desc": "\n\n<p>视觉引导项第二段的长度。</p>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": {
              "path": "series.sunburst.labelLine.smooth",
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
              "desc": "\n\n<p>是否平滑视觉引导线，默认不平滑，可以设置成 <code class=\"codespan\">true</code> 平滑显示，也可以设置为 0 到 1 的值，表示平滑程度。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "series.sunburst.labelLine.minTurnAngle",
            "props": {
              "placeholder": "最小转折角"
            },
            "_raw": {
              "label": "最小转折角",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>通过调整第二段线的长度，限制引导线两端之间最小的夹角，以防止过小的夹角导致显示不美观。</p>\n<p>可以设置为 0 - 180 度。</p>\n"
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
                  "path": "series.sunburst.labelLine.lineStyle.color",
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
                  "path": "series.sunburst.labelLine.lineStyle.width",
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
                  "path": "series.sunburst.labelLine.lineStyle.type",
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
                  "path": "series.sunburst.labelLine.lineStyle.dashOffset",
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
                  "path": "series.sunburst.labelLine.lineStyle.cap",
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
                  "path": "series.sunburst.labelLine.lineStyle.join",
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
                  "path": "series.sunburst.labelLine.lineStyle.miterLimit",
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
                "model": "series.sunburst.labelLine.lineStyle.shadowBlur",
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
                "model": "series.sunburst.labelLine.lineStyle.shadowColor",
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
                  "path": "series.sunburst.labelLine.lineStyle.shadowOffsetX",
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
                  "path": "series.sunburst.labelLine.lineStyle.shadowOffsetY",
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
                  "path": "series.sunburst.labelLine.lineStyle.opacity",
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
          "title": "标签布局",
          "name": "labelLayout"
        },
        "children": [
          {
            "type": "ElSwitch",
            "model": "series.sunburst.labelLayout.hideOverlap",
            "props": {
              "placeholder": "隐藏重叠"
            },
            "_raw": {
              "label": "隐藏重叠",
              "desc": "<p>是否隐藏重叠的标签。</p>\n<p>下面示例演示了在关系图中开启该配置后，在缩放时可以实现自动的标签隐藏。</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=graph-label-overlap&edit=1&reset=1\" width=\"600\" height=\"400\"></iframe>\n\n"
            }
          },
          {
            "type": "ElInput",
            "model": "series.sunburst.labelLayout.moveOverlap",
            "props": {
              "placeholder": "移动重叠"
            },
            "_raw": {
              "label": "移动重叠",
              "desc": "<p>在标签重叠的时候是否挪动标签位置以防止重叠。</p>\n<p>目前支持配置为：</p>\n<ul>\n<li><code class=\"codespan\">&#39;shiftX&#39;</code> 水平方向依次位移，在水平方向对齐时使用</li>\n<li><code class=\"codespan\">&#39;shiftY&#39;</code> 垂直方向依次位移，在垂直方向对齐时使用</li>\n</ul>\n<p>下面是标签右对齐并配置垂直方向依次位移以防止重叠的示例。</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=scatter-label-align-right&edit=1&reset=1\" width=\"600\" height=\"400\"></iframe>\n\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": "series.sunburst.labelLayout.x",
            "props": {
              "placeholder": "x",
              "types": [
                "number",
                "string"
              ],
              "defaultType": "number",
              "specialKeywords": []
            },
            "_raw": {
              "label": "x",
              "desc": "<p>标签的 x 位置。支持绝对的像素值或者<code class=\"codespan\">&#39;20%&#39;</code>这样的相对值。</p>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": "series.sunburst.labelLayout.y",
            "props": {
              "placeholder": "y",
              "types": [
                "number",
                "string"
              ],
              "defaultType": "number",
              "specialKeywords": []
            },
            "_raw": {
              "label": "y",
              "desc": "<p>标签的 y 位置。支持绝对的像素值或者<code class=\"codespan\">&#39;20%&#39;</code>这样的相对值。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "series.sunburst.labelLayout.dx",
            "props": {
              "placeholder": "dx"
            },
            "_raw": {
              "label": "dx",
              "desc": "<p>标签在 x 方向上的像素偏移。可以和<code class=\"codespan\">x</code>一起使用。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "series.sunburst.labelLayout.dy",
            "props": {
              "placeholder": "dy"
            },
            "_raw": {
              "label": "dy",
              "desc": "<p>标签在 y 方向上的像素偏移。可以和<code class=\"codespan\">y</code>一起使用</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "series.sunburst.labelLayout.rotate",
            "props": {
              "placeholder": "旋转"
            },
            "_raw": {
              "label": "旋转",
              "desc": "<p>标签旋转角度。</p>\n"
            }
          },
          {
            "type": "SmartSizeInput",
            "model": "series.sunburst.labelLayout.width",
            "props": {
              "placeholder": "宽度",
              "allowPercentage": true,
              "keywords": [
                "auto"
              ]
            },
            "_raw": {
              "label": "宽度",
              "desc": "<p>标签显示的宽度。可以配合<code class=\"codespan\">overflow</code>使用控制标签显示在固定宽度内</p>\n"
            }
          },
          {
            "type": "SmartSizeInput",
            "model": "series.sunburst.labelLayout.height",
            "props": {
              "placeholder": "高度",
              "allowPercentage": true,
              "keywords": [
                "auto"
              ]
            },
            "_raw": {
              "label": "高度",
              "desc": "<p>标签显示的高度。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "series.sunburst.labelLayout.align",
            "props": {
              "placeholder": "对齐"
            },
            "_raw": {
              "label": "对齐",
              "desc": "<p>标签水平对齐方式。可以设置<code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "series.sunburst.labelLayout.verticalAlign",
            "props": {
              "placeholder": "垂直对齐"
            },
            "_raw": {
              "label": "垂直对齐",
              "desc": "<p>标签垂直对齐方式。可以设置<code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "series.sunburst.labelLayout.fontSize",
            "props": {
              "placeholder": "字体大小"
            },
            "_raw": {
              "label": "字体大小",
              "desc": "<p>The text size of the label.</p>\n"
            }
          },
          {
            "type": "ElSwitch",
            "model": "series.sunburst.labelLayout.draggable",
            "props": {
              "placeholder": "可拖拽"
            },
            "_raw": {
              "label": "可拖拽",
              "desc": "<p>标签是否可以允许用户通过拖拽二次调整位置。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "series.sunburst.labelLayout.labelLinePoints",
            "props": {
              "placeholder": "标签线点"
            },
            "_raw": {
              "label": "标签线点",
              "desc": "<p>标签引导线三个点的位置。格式为：</p>\n<pre><code class=\"lang-ts\">[[x, y], [x, y], [x, y]]\n</code></pre>\n<p>在饼图中常用来微调已经计算好的引导线，其它情况一般不建议设置。</p>\n"
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
              "path": "series.sunburst.itemStyle.color",
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
              "desc": "\n\n<p>图形的颜色。 默认从全局调色盘 <a href=\"#color\">option.color</a> 获取颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "series.sunburst.itemStyle.borderColor",
              "default": "white"
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
              "path": "series.sunburst.itemStyle.borderWidth",
              "default": 1
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
              "path": "series.sunburst.itemStyle.borderType",
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
              "path": "series.sunburst.itemStyle.borderDashOffset",
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
              "path": "series.sunburst.itemStyle.borderCap",
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
              "path": "series.sunburst.itemStyle.borderJoin",
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
              "path": "series.sunburst.itemStyle.borderMiterLimit",
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
            "model": "series.sunburst.itemStyle.shadowBlur",
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
            "model": "series.sunburst.itemStyle.shadowColor",
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
              "path": "series.sunburst.itemStyle.shadowOffsetX",
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
              "path": "series.sunburst.itemStyle.shadowOffsetY",
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
              "path": "series.sunburst.itemStyle.opacity",
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
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "贴花",
              "name": "decal"
            },
            "children": [
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "series.sunburst.itemStyle.decal.symbol",
                  "default": "rect"
                },
                "props": {
                  "placeholder": "图形",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "图形",
                  "desc": "<p>贴花的图案，如果是 <code class=\"codespan\">string[]</code> 表示循环使用数组中的图案。</p>\n<p>ECharts 提供的标记类型包括</p>\n<p><code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.sunburst.itemStyle.decal.symbolSize",
                  "default": 1
                },
                "props": {
                  "placeholder": "图形大小"
                },
                "_raw": {
                  "label": "图形大小",
                  "desc": "<p>取值范围：<code class=\"codespan\">0</code> 到 <code class=\"codespan\">1</code>，表示占图案区域的百分比。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.sunburst.itemStyle.decal.symbolKeepAspect",
                  "default": true
                },
                "props": {
                  "placeholder": "标记保持比例"
                },
                "_raw": {
                  "label": "标记保持比例",
                  "desc": "<p>是否保持图案的长宽比。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.sunburst.itemStyle.decal.color",
                  "default": "rgba(0, 0, 0, 0.2)"
                },
                "props": {
                  "placeholder": "颜色"
                },
                "_raw": {
                  "label": "颜色",
                  "desc": "<p>贴花图案的颜色，建议使用半透明色，这样能叠加在系列本身的颜色上。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": "series.sunburst.itemStyle.decal.backgroundColor",
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
                  "desc": "<p>贴花的背景色，将会覆盖在系列本身颜色之上，贴花图案之下。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "series.sunburst.itemStyle.decal.dashArrayX",
                  "default": 5
                },
                "props": {
                  "placeholder": "虚线阵列X",
                  "types": [
                    "number",
                    "array"
                  ],
                  "defaultType": "number",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "虚线阵列X",
                  "desc": "<p>贴花图案的基本模式是在横向和纵向上分别以<code class=\"codespan\">图案 - 空白 - 图案 - 空白 - 图案 - 空白</code>的形式无限循环。通过设置每个图案和空白的长度，可以实现复杂的图案效果。</p>\n<p><code class=\"codespan\">dashArrayX</code> 控制了横向的图案模式。当其值为 <code class=\"codespan\">number</code> 或 <code class=\"codespan\">number[]</code> 类型时，与 <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">SVG stroke-dasharray</a> 类似。</p>\n<ul>\n<li><p>如果是 <code class=\"codespan\">number</code> 类型，表示图案和空白分别是这个值。如 <code class=\"codespan\">5</code> 表示先显示宽度为 5 的图案，然后空 5 像素，再然后显示宽度为 5 的图案……</p>\n</li>\n<li><p>如果是 <code class=\"codespan\">number[]</code> 类型，则表示图案和空白依次为数组值的循环。如：<code class=\"codespan\">[5, 10, 2, 6]</code> 表示图案宽 5 像素，然后空 10 像素，然后图案宽 2 像素，然后空 6 像素，然后图案宽 5 像素……</p>\n</li>\n<li><p>如果是 <code class=\"codespan\">(number | number[])[]</code> 类型，表示每行的图案和空白依次为数组值的循环。如：<code class=\"codespan\">[10, [2, 5]]</code> 表示第一行以图案 10 像素空 10 像素循环，第二行以图案 2 像素空 5 像素循环，第三行以图案 10 像素空 10 像素循环……</p>\n</li>\n</ul>\n<p>可以结合以下的例子理解本接口：</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/aria-decal&edit=1&reset=1\" width=\"700\" height=\"300\"></iframe>\n\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "series.sunburst.itemStyle.decal.dashArrayY",
                  "default": 5
                },
                "props": {
                  "placeholder": "虚线阵列Y",
                  "types": [
                    "number",
                    "array"
                  ],
                  "defaultType": "number",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "虚线阵列Y",
                  "desc": "<p>贴花图案的基本模式是在横向和纵向上分别以<code class=\"codespan\">图案 - 空白 - 图案 - 空白 - 图案 - 空白</code>的形式无限循环。通过设置每个图案和空白的长度，可以实现复杂的图案效果。</p>\n<p><code class=\"codespan\">dashArrayY</code> 控制了横向的图案模式。与 <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">SVG stroke-dasharray</a> 类似。</p>\n<ul>\n<li><p>如果是 <code class=\"codespan\">number</code> 类型，表示图案和空白分别是这个值。如 <code class=\"codespan\">5</code> 表示先显示高度为 5 的图案，然后空 5 像素，再然后显示高度为 5 的图案……</p>\n</li>\n<li><p>如果是 <code class=\"codespan\">number[]</code> 类型，则表示图案和空白依次为数组值的循环。如：<code class=\"codespan\">[5, 10, 2, 6]</code> 表示图案高 5 像素，然后空 10 像素，然后图案高 2 像素，然后空 6 像素，然后图案高 5 像素……</p>\n</li>\n</ul>\n<p>可以结合以下的例子理解本接口：</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/aria-decal&edit=1&reset=1\" width=\"700\" height=\"300\"></iframe>\n\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.sunburst.itemStyle.decal.rotation",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>图案的整体旋转角度（弧度制），取值范围从 <code class=\"codespan\">-Math.PI</code> 到 <code class=\"codespan\">Math.PI</code>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.sunburst.itemStyle.decal.maxTileWidth",
                  "default": 512
                },
                "props": {
                  "placeholder": "最大平铺宽度"
                },
                "_raw": {
                  "label": "最大平铺宽度",
                  "desc": "<p>生成的图案在未重复之前的宽度上限。通常不需要设置该值，当你发现图案在重复的时候出现不连续的接缝时，可以尝试提高该值。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.sunburst.itemStyle.decal.maxTileHeight",
                  "default": 512
                },
                "props": {
                  "placeholder": "最大平铺高度"
                },
                "_raw": {
                  "label": "最大平铺高度",
                  "desc": "<p>生成的图案在未重复之前的高度上限。通常不需要设置该值，当你发现图案在重复的时候出现不连续的接缝时，可以尝试提高该值。</p>\n"
                }
              }
            ]
          },
          {
            "type": "SmartUnionInput",
            "model": "series.sunburst.itemStyle.borderRadius",
            "props": {
              "placeholder": "圆角半径",
              "types": [
                "number",
                "string",
                "array"
              ],
              "defaultType": "number",
              "specialKeywords": []
            },
            "_raw": {
              "label": "圆角半径",
              "desc": "\n\n\n\n<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>用于指定旭日图扇形区块的内外圆角半径，支持设置固定数值或者相对于扇形区块的半径的百分比值。</p>\n<p>从 <code class=\"codespan\">v5.3.0</code> 开始，支持分别配置从内到外顺时针方向四个角的圆角半径，百分比值从相对于内外扇形的半径更改为相对于内外扇形的半径差。</p>\n<p>例如：</p>\n<p><code class=\"codespan\">v5.3.0</code> 之前</p>\n<ul>\n<li><code class=\"codespan\">borderRadius: 10</code>：表示内圆角半径和外圆角半径都是 <code class=\"codespan\">10px</code>。</li>\n<li><code class=\"codespan\">borderRadius: &#39;20%&#39;</code>：表示内圆角半径和外圆角半径都是扇形区块半径的 <code class=\"codespan\">20%</code>。</li>\n<li><code class=\"codespan\">borderRadius: [10, 20]</code>：表示为环形图时，内圆角半径是 <code class=\"codespan\">10px</code>、外圆角半径是 <code class=\"codespan\">20px</code>。</li>\n<li><code class=\"codespan\">borderRadius: [&#39;20%&#39;, &#39;50%&#39;]</code>：表示为环形图时，内圆角半径是内圆半径的 <code class=\"codespan\">20%</code>、外圆角半径是外圆半径的 <code class=\"codespan\">50%</code>。</li>\n</ul>\n<p><code class=\"codespan\">v5.3.0</code> 之后</p>\n<ul>\n<li><code class=\"codespan\">borderRadius: 10</code>：表示内圆角半径和外圆角半径都是 <code class=\"codespan\">10px</code>。</li>\n<li><code class=\"codespan\">borderRadius: &#39;20%&#39;</code>：表示内圆角半径和外圆角半径都是扇形区块半径的 <code class=\"codespan\">20%</code>。</li>\n<li><code class=\"codespan\">borderRadius: [10, 20]</code>：表示为环形图时，内圆角半径是 <code class=\"codespan\">10px</code>、外圆角半径是 <code class=\"codespan\">20px</code>。</li>\n<li><code class=\"codespan\">borderRadius: [&#39;20%&#39;, &#39;50%&#39;]</code>：表示为环形图时，内圆角半径是内外圆半径差的 <code class=\"codespan\">20%</code>、外圆角半径是内外圆半径差的 <code class=\"codespan\">50%</code>。</li>\n<li><code class=\"codespan\">borderRadius: [5, 10, 15, 20]</code>：表示内圆角半径分别为 <code class=\"codespan\">5px</code> 和 <code class=\"codespan\">10px</code>，外圆角半径分别为 <code class=\"codespan\">15px</code> 和 <code class=\"codespan\">20px</code>。</li>\n</ul>\n"
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
            "type": "ElInput",
            "model": {
              "path": "series.sunburst.emphasis.focus",
              "default": "none"
            },
            "props": {
              "placeholder": "聚焦"
            },
            "_raw": {
              "label": "聚焦",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n</ul>\n<ul>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n<ul>\n<li><code class=\"codespan\">&#39;ancestor&#39;</code> 聚焦所有祖先节点。</li>\n<li><code class=\"codespan\">&#39;descendant&#39;</code> 聚焦所有子孙节点。</li>\n</ul>\n<ul>\n<li><code class=\"codespan\">&#39;relative&#39;</code> 聚焦所有子孙和祖先节点。（从 <code class=\"codespan\">v5.6.0</code> 开始支持）</li>\n</ul>\n<p><strong>示例：</strong></p>\n<p>下面代码配置了柱状图在高亮一个图形的时候，淡出当前直角坐标系所有其它的系列。</p>\n<pre><code class=\"lang-ts\">emphasis: {\n    focus: &#39;series&#39;,\n    blurScope: &#39;coordinateSystem&#39;\n}\n</code></pre>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=bar-y-category-stack&reset=1&edit=1\" width=\"600\" height=\"400\"></iframe>\n\n\n\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "series.sunburst.emphasis.blurScope",
              "default": "coordinateSystem"
            },
            "props": {
              "placeholder": "模糊范围"
            },
            "_raw": {
              "label": "模糊范围",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
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
                "type": "SmartUnionInput",
                "model": {
                  "path": "series.sunburst.emphasis.label.rotate",
                  "default": "radial"
                },
                "props": {
                  "placeholder": "旋转",
                  "types": [
                    "string",
                    "number"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>如果是 <code class=\"codespan\">number</code> 类型，则表示标签的旋转角，从 -90 度到 90 度，正值是逆时针。</p>\n<p>除此之外，还可以是字符串 <code class=\"codespan\">&#39;radial&#39;</code> 表示径向旋转、<code class=\"codespan\">&#39;tangential&#39;</code> 表示切向旋转。</p>\n<p>如果不需要文字旋转，可以将其设为 <code class=\"codespan\">0</code>。</p>\n<p>下面的例子展示了不同的 <code class=\"codespan\">rotate</code> 设置方法：</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=sunburst-label-rotate&edit=1&reset=1\" width=\"700\" height=\"400\"></iframe>\n\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.sunburst.emphasis.label.align",
                  "default": "center"
                },
                "props": {
                  "placeholder": "对齐"
                },
                "_raw": {
                  "label": "对齐",
                  "desc": "\n\n<p>文字对齐方式，可取值为：<code class=\"codespan\">&#39;left&#39;</code>、 <code class=\"codespan\">&#39;center&#39;</code>、 <code class=\"codespan\">&#39;right&#39;</code>。注意，<code class=\"codespan\">&#39;left&#39;</code> 是指靠近内圈，而 <code class=\"codespan\">&#39;right&#39;</code> 是指靠近外圈。</p>\n<p>同 <a href=\"#sunburst.label.align\">label.align</a></p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "series.sunburst.emphasis.label.minAngle",
                "props": {
                  "placeholder": "最小角度"
                },
                "_raw": {
                  "label": "最小角度",
                  "desc": "\n\n<p>当某个扇形块的角度小于该值（角度制）时，扇形块对应的文字不显示。该值用以隐藏过小扇形块中的文字。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.sunburst.emphasis.label.show",
                  "default": true
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
                "model": {
                  "path": "series.sunburst.emphasis.label.position",
                  "default": "inside"
                },
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
                  "path": "series.sunburst.emphasis.label.distance",
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
                "type": "ElInput",
                "model": "series.sunburst.emphasis.label.offset",
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
                "model": "series.sunburst.emphasis.label.formatter",
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
                  "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{@xxx}</code>：数据中名为 <code class=\"codespan\">&#39;xxx&#39;</code> 的维度的值，如 <code class=\"codespan\">{@product}</code> 表示名为 <code class=\"codespan\">&#39;product&#39;</code> 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}</code>：数据中维度 <code class=\"codespan\">n</code> 的值，如 <code class=\"codespan\">{@[3]}</code> 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-ts\">formatter: &#39;{b}: {@score}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-ts\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefined，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n    // 当前节点的祖先节点（包括自身）\n    treePathInfo: Array\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "series.sunburst.emphasis.label.color",
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
                  "path": "series.sunburst.emphasis.label.fontStyle",
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
                  "path": "series.sunburst.emphasis.label.fontWeight",
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
                  "path": "series.sunburst.emphasis.label.fontFamily",
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
                  "path": "series.sunburst.emphasis.label.fontSize",
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
                "model": "series.sunburst.emphasis.label.verticalAlign",
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
                "model": "series.sunburst.emphasis.label.lineHeight",
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
                  "path": "series.sunburst.emphasis.label.backgroundColor",
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
                "model": "series.sunburst.emphasis.label.borderColor",
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
                  "path": "series.sunburst.emphasis.label.borderWidth",
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
                  "path": "series.sunburst.emphasis.label.borderType",
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
                  "path": "series.sunburst.emphasis.label.borderDashOffset",
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
                  "path": "series.sunburst.emphasis.label.borderRadius",
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
                  "path": "series.sunburst.emphasis.label.padding",
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
                  "path": "series.sunburst.emphasis.label.shadowColor",
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
                  "path": "series.sunburst.emphasis.label.shadowBlur",
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
                  "path": "series.sunburst.emphasis.label.shadowOffsetX",
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
                  "path": "series.sunburst.emphasis.label.shadowOffsetY",
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
                "model": "series.sunburst.emphasis.label.width",
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
                "model": "series.sunburst.emphasis.label.height",
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
                "model": "series.sunburst.emphasis.label.textBorderColor",
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
                "model": "series.sunburst.emphasis.label.textBorderWidth",
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
                  "path": "series.sunburst.emphasis.label.textBorderType",
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
                  "path": "series.sunburst.emphasis.label.textBorderDashOffset",
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
                  "path": "series.sunburst.emphasis.label.textShadowColor",
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
                  "path": "series.sunburst.emphasis.label.textShadowBlur",
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
                  "path": "series.sunburst.emphasis.label.textShadowOffsetX",
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
                  "path": "series.sunburst.emphasis.label.textShadowOffsetY",
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
                  "path": "series.sunburst.emphasis.label.overflow",
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
                  "path": "series.sunburst.emphasis.label.ellipsis",
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
              "title": "标签线",
              "name": "labelLine"
            },
            "children": [
              {
                "type": "ElSwitch",
                "model": "series.sunburst.emphasis.labelLine.show",
                "props": {
                  "placeholder": "显示"
                },
                "_raw": {
                  "label": "显示",
                  "desc": "\n\n<p>是否显示视觉引导线。</p>\n"
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
                      "path": "series.sunburst.emphasis.labelLine.lineStyle.color",
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
                      "path": "series.sunburst.emphasis.labelLine.lineStyle.width",
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
                      "path": "series.sunburst.emphasis.labelLine.lineStyle.type",
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
                      "path": "series.sunburst.emphasis.labelLine.lineStyle.dashOffset",
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
                      "path": "series.sunburst.emphasis.labelLine.lineStyle.cap",
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
                      "path": "series.sunburst.emphasis.labelLine.lineStyle.join",
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
                      "path": "series.sunburst.emphasis.labelLine.lineStyle.miterLimit",
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
                    "model": "series.sunburst.emphasis.labelLine.lineStyle.shadowBlur",
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
                    "model": "series.sunburst.emphasis.labelLine.lineStyle.shadowColor",
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
                      "path": "series.sunburst.emphasis.labelLine.lineStyle.shadowOffsetX",
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
                      "path": "series.sunburst.emphasis.labelLine.lineStyle.shadowOffsetY",
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
                      "path": "series.sunburst.emphasis.labelLine.lineStyle.opacity",
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
              "title": "图元样式",
              "name": "itemStyle"
            },
            "children": [
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "series.sunburst.emphasis.itemStyle.color",
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
                  "desc": "\n\n<p>图形的颜色。 默认从全局调色盘 <a href=\"#color\">option.color</a> 获取颜色。从 v5.2.0 开始支持在 <code class=\"codespan\">emphasis</code> 状态中支持设置为 <code class=\"codespan\">&#39;inherit&#39;</code> 取消高亮颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "series.sunburst.emphasis.itemStyle.borderColor",
                  "default": "white"
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
                  "path": "series.sunburst.emphasis.itemStyle.borderWidth",
                  "default": 1
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
                  "path": "series.sunburst.emphasis.itemStyle.borderType",
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
                  "path": "series.sunburst.emphasis.itemStyle.borderDashOffset",
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
                  "path": "series.sunburst.emphasis.itemStyle.borderCap",
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
                  "path": "series.sunburst.emphasis.itemStyle.borderJoin",
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
                  "path": "series.sunburst.emphasis.itemStyle.borderMiterLimit",
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
                "model": "series.sunburst.emphasis.itemStyle.shadowBlur",
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
                "model": "series.sunburst.emphasis.itemStyle.shadowColor",
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
                  "path": "series.sunburst.emphasis.itemStyle.shadowOffsetX",
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
                  "path": "series.sunburst.emphasis.itemStyle.shadowOffsetY",
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
                  "path": "series.sunburst.emphasis.itemStyle.opacity",
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
              },
              {
                "type": "SmartUnionInput",
                "model": "series.sunburst.emphasis.itemStyle.borderRadius",
                "props": {
                  "placeholder": "圆角半径",
                  "types": [
                    "number",
                    "string",
                    "array"
                  ],
                  "defaultType": "number",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "圆角半径",
                  "desc": "\n\n\n\n<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>用于指定旭日图扇形区块的内外圆角半径，支持设置固定数值或者相对于扇形区块的半径的百分比值。</p>\n<p>从 <code class=\"codespan\">v5.3.0</code> 开始，支持分别配置从内到外顺时针方向四个角的圆角半径，百分比值从相对于内外扇形的半径更改为相对于内外扇形的半径差。</p>\n<p>例如：</p>\n<p><code class=\"codespan\">v5.3.0</code> 之前</p>\n<ul>\n<li><code class=\"codespan\">borderRadius: 10</code>：表示内圆角半径和外圆角半径都是 <code class=\"codespan\">10px</code>。</li>\n<li><code class=\"codespan\">borderRadius: &#39;20%&#39;</code>：表示内圆角半径和外圆角半径都是扇形区块半径的 <code class=\"codespan\">20%</code>。</li>\n<li><code class=\"codespan\">borderRadius: [10, 20]</code>：表示为环形图时，内圆角半径是 <code class=\"codespan\">10px</code>、外圆角半径是 <code class=\"codespan\">20px</code>。</li>\n<li><code class=\"codespan\">borderRadius: [&#39;20%&#39;, &#39;50%&#39;]</code>：表示为环形图时，内圆角半径是内圆半径的 <code class=\"codespan\">20%</code>、外圆角半径是外圆半径的 <code class=\"codespan\">50%</code>。</li>\n</ul>\n<p><code class=\"codespan\">v5.3.0</code> 之后</p>\n<ul>\n<li><code class=\"codespan\">borderRadius: 10</code>：表示内圆角半径和外圆角半径都是 <code class=\"codespan\">10px</code>。</li>\n<li><code class=\"codespan\">borderRadius: &#39;20%&#39;</code>：表示内圆角半径和外圆角半径都是扇形区块半径的 <code class=\"codespan\">20%</code>。</li>\n<li><code class=\"codespan\">borderRadius: [10, 20]</code>：表示为环形图时，内圆角半径是 <code class=\"codespan\">10px</code>、外圆角半径是 <code class=\"codespan\">20px</code>。</li>\n<li><code class=\"codespan\">borderRadius: [&#39;20%&#39;, &#39;50%&#39;]</code>：表示为环形图时，内圆角半径是内外圆半径差的 <code class=\"codespan\">20%</code>、外圆角半径是内外圆半径差的 <code class=\"codespan\">50%</code>。</li>\n<li><code class=\"codespan\">borderRadius: [5, 10, 15, 20]</code>：表示内圆角半径分别为 <code class=\"codespan\">5px</code> 和 <code class=\"codespan\">10px</code>，外圆角半径分别为 <code class=\"codespan\">15px</code> 和 <code class=\"codespan\">20px</code>。</li>\n</ul>\n"
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
                "type": "SmartUnionInput",
                "model": {
                  "path": "series.sunburst.blur.label.rotate",
                  "default": "radial"
                },
                "props": {
                  "placeholder": "旋转",
                  "types": [
                    "string",
                    "number"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>如果是 <code class=\"codespan\">number</code> 类型，则表示标签的旋转角，从 -90 度到 90 度，正值是逆时针。</p>\n<p>除此之外，还可以是字符串 <code class=\"codespan\">&#39;radial&#39;</code> 表示径向旋转、<code class=\"codespan\">&#39;tangential&#39;</code> 表示切向旋转。</p>\n<p>如果不需要文字旋转，可以将其设为 <code class=\"codespan\">0</code>。</p>\n<p>下面的例子展示了不同的 <code class=\"codespan\">rotate</code> 设置方法：</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=sunburst-label-rotate&edit=1&reset=1\" width=\"700\" height=\"400\"></iframe>\n\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.sunburst.blur.label.align",
                  "default": "center"
                },
                "props": {
                  "placeholder": "对齐"
                },
                "_raw": {
                  "label": "对齐",
                  "desc": "\n\n<p>文字对齐方式，可取值为：<code class=\"codespan\">&#39;left&#39;</code>、 <code class=\"codespan\">&#39;center&#39;</code>、 <code class=\"codespan\">&#39;right&#39;</code>。注意，<code class=\"codespan\">&#39;left&#39;</code> 是指靠近内圈，而 <code class=\"codespan\">&#39;right&#39;</code> 是指靠近外圈。</p>\n<p>同 <a href=\"#sunburst.label.align\">label.align</a></p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "series.sunburst.blur.label.minAngle",
                "props": {
                  "placeholder": "最小角度"
                },
                "_raw": {
                  "label": "最小角度",
                  "desc": "\n\n<p>当某个扇形块的角度小于该值（角度制）时，扇形块对应的文字不显示。该值用以隐藏过小扇形块中的文字。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.sunburst.blur.label.show",
                  "default": true
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
                "model": {
                  "path": "series.sunburst.blur.label.position",
                  "default": "inside"
                },
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
                  "path": "series.sunburst.blur.label.distance",
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
                "type": "ElInput",
                "model": "series.sunburst.blur.label.offset",
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
                "model": "series.sunburst.blur.label.formatter",
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
                  "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{@xxx}</code>：数据中名为 <code class=\"codespan\">&#39;xxx&#39;</code> 的维度的值，如 <code class=\"codespan\">{@product}</code> 表示名为 <code class=\"codespan\">&#39;product&#39;</code> 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}</code>：数据中维度 <code class=\"codespan\">n</code> 的值，如 <code class=\"codespan\">{@[3]}</code> 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-ts\">formatter: &#39;{b}: {@score}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-ts\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefined，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n    // 当前节点的祖先节点（包括自身）\n    treePathInfo: Array\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "series.sunburst.blur.label.color",
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
                  "path": "series.sunburst.blur.label.fontStyle",
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
                  "path": "series.sunburst.blur.label.fontWeight",
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
                  "path": "series.sunburst.blur.label.fontFamily",
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
                  "path": "series.sunburst.blur.label.fontSize",
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
                "model": "series.sunburst.blur.label.verticalAlign",
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
                "model": "series.sunburst.blur.label.lineHeight",
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
                  "path": "series.sunburst.blur.label.backgroundColor",
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
                "model": "series.sunburst.blur.label.borderColor",
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
                  "path": "series.sunburst.blur.label.borderWidth",
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
                  "path": "series.sunburst.blur.label.borderType",
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
                  "path": "series.sunburst.blur.label.borderDashOffset",
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
                  "path": "series.sunburst.blur.label.borderRadius",
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
                  "path": "series.sunburst.blur.label.padding",
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
                  "path": "series.sunburst.blur.label.shadowColor",
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
                  "path": "series.sunburst.blur.label.shadowBlur",
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
                  "path": "series.sunburst.blur.label.shadowOffsetX",
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
                  "path": "series.sunburst.blur.label.shadowOffsetY",
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
                "model": "series.sunburst.blur.label.width",
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
                "model": "series.sunburst.blur.label.height",
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
                "model": "series.sunburst.blur.label.textBorderColor",
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
                "model": "series.sunburst.blur.label.textBorderWidth",
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
                  "path": "series.sunburst.blur.label.textBorderType",
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
                  "path": "series.sunburst.blur.label.textBorderDashOffset",
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
                  "path": "series.sunburst.blur.label.textShadowColor",
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
                  "path": "series.sunburst.blur.label.textShadowBlur",
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
                  "path": "series.sunburst.blur.label.textShadowOffsetX",
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
                  "path": "series.sunburst.blur.label.textShadowOffsetY",
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
                  "path": "series.sunburst.blur.label.overflow",
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
                  "path": "series.sunburst.blur.label.ellipsis",
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
              "title": "标签线",
              "name": "labelLine"
            },
            "children": [
              {
                "type": "ElSwitch",
                "model": "series.sunburst.blur.labelLine.show",
                "props": {
                  "placeholder": "显示"
                },
                "_raw": {
                  "label": "显示",
                  "desc": "\n\n<p>是否显示视觉引导线。</p>\n"
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
                      "path": "series.sunburst.blur.labelLine.lineStyle.color",
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
                      "path": "series.sunburst.blur.labelLine.lineStyle.width",
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
                      "path": "series.sunburst.blur.labelLine.lineStyle.type",
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
                      "path": "series.sunburst.blur.labelLine.lineStyle.dashOffset",
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
                      "path": "series.sunburst.blur.labelLine.lineStyle.cap",
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
                      "path": "series.sunburst.blur.labelLine.lineStyle.join",
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
                      "path": "series.sunburst.blur.labelLine.lineStyle.miterLimit",
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
                    "model": "series.sunburst.blur.labelLine.lineStyle.shadowBlur",
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
                    "model": "series.sunburst.blur.labelLine.lineStyle.shadowColor",
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
                      "path": "series.sunburst.blur.labelLine.lineStyle.shadowOffsetX",
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
                      "path": "series.sunburst.blur.labelLine.lineStyle.shadowOffsetY",
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
                      "path": "series.sunburst.blur.labelLine.lineStyle.opacity",
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
              "title": "图元样式",
              "name": "itemStyle"
            },
            "children": [
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "series.sunburst.blur.itemStyle.color",
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
                  "desc": "\n\n<p>图形的颜色。 默认从全局调色盘 <a href=\"#color\">option.color</a> 获取颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "series.sunburst.blur.itemStyle.borderColor",
                  "default": "white"
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
                  "path": "series.sunburst.blur.itemStyle.borderWidth",
                  "default": 1
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
                  "path": "series.sunburst.blur.itemStyle.borderType",
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
                  "path": "series.sunburst.blur.itemStyle.borderDashOffset",
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
                  "path": "series.sunburst.blur.itemStyle.borderCap",
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
                  "path": "series.sunburst.blur.itemStyle.borderJoin",
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
                  "path": "series.sunburst.blur.itemStyle.borderMiterLimit",
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
                "model": "series.sunburst.blur.itemStyle.shadowBlur",
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
                "model": "series.sunburst.blur.itemStyle.shadowColor",
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
                  "path": "series.sunburst.blur.itemStyle.shadowOffsetX",
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
                  "path": "series.sunburst.blur.itemStyle.shadowOffsetY",
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
                  "path": "series.sunburst.blur.itemStyle.opacity",
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
              },
              {
                "type": "SmartUnionInput",
                "model": "series.sunburst.blur.itemStyle.borderRadius",
                "props": {
                  "placeholder": "圆角半径",
                  "types": [
                    "number",
                    "string",
                    "array"
                  ],
                  "defaultType": "number",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "圆角半径",
                  "desc": "\n\n\n\n<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>用于指定旭日图扇形区块的内外圆角半径，支持设置固定数值或者相对于扇形区块的半径的百分比值。</p>\n<p>从 <code class=\"codespan\">v5.3.0</code> 开始，支持分别配置从内到外顺时针方向四个角的圆角半径，百分比值从相对于内外扇形的半径更改为相对于内外扇形的半径差。</p>\n<p>例如：</p>\n<p><code class=\"codespan\">v5.3.0</code> 之前</p>\n<ul>\n<li><code class=\"codespan\">borderRadius: 10</code>：表示内圆角半径和外圆角半径都是 <code class=\"codespan\">10px</code>。</li>\n<li><code class=\"codespan\">borderRadius: &#39;20%&#39;</code>：表示内圆角半径和外圆角半径都是扇形区块半径的 <code class=\"codespan\">20%</code>。</li>\n<li><code class=\"codespan\">borderRadius: [10, 20]</code>：表示为环形图时，内圆角半径是 <code class=\"codespan\">10px</code>、外圆角半径是 <code class=\"codespan\">20px</code>。</li>\n<li><code class=\"codespan\">borderRadius: [&#39;20%&#39;, &#39;50%&#39;]</code>：表示为环形图时，内圆角半径是内圆半径的 <code class=\"codespan\">20%</code>、外圆角半径是外圆半径的 <code class=\"codespan\">50%</code>。</li>\n</ul>\n<p><code class=\"codespan\">v5.3.0</code> 之后</p>\n<ul>\n<li><code class=\"codespan\">borderRadius: 10</code>：表示内圆角半径和外圆角半径都是 <code class=\"codespan\">10px</code>。</li>\n<li><code class=\"codespan\">borderRadius: &#39;20%&#39;</code>：表示内圆角半径和外圆角半径都是扇形区块半径的 <code class=\"codespan\">20%</code>。</li>\n<li><code class=\"codespan\">borderRadius: [10, 20]</code>：表示为环形图时，内圆角半径是 <code class=\"codespan\">10px</code>、外圆角半径是 <code class=\"codespan\">20px</code>。</li>\n<li><code class=\"codespan\">borderRadius: [&#39;20%&#39;, &#39;50%&#39;]</code>：表示为环形图时，内圆角半径是内外圆半径差的 <code class=\"codespan\">20%</code>、外圆角半径是内外圆半径差的 <code class=\"codespan\">50%</code>。</li>\n<li><code class=\"codespan\">borderRadius: [5, 10, 15, 20]</code>：表示内圆角半径分别为 <code class=\"codespan\">5px</code> 和 <code class=\"codespan\">10px</code>，外圆角半径分别为 <code class=\"codespan\">15px</code> 和 <code class=\"codespan\">20px</code>。</li>\n</ul>\n"
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
            "type": "ElCollapseItem",
            "props": {
              "title": "标签",
              "name": "label"
            },
            "children": [
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "series.sunburst.select.label.rotate",
                  "default": "radial"
                },
                "props": {
                  "placeholder": "旋转",
                  "types": [
                    "string",
                    "number"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>如果是 <code class=\"codespan\">number</code> 类型，则表示标签的旋转角，从 -90 度到 90 度，正值是逆时针。</p>\n<p>除此之外，还可以是字符串 <code class=\"codespan\">&#39;radial&#39;</code> 表示径向旋转、<code class=\"codespan\">&#39;tangential&#39;</code> 表示切向旋转。</p>\n<p>如果不需要文字旋转，可以将其设为 <code class=\"codespan\">0</code>。</p>\n<p>下面的例子展示了不同的 <code class=\"codespan\">rotate</code> 设置方法：</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=sunburst-label-rotate&edit=1&reset=1\" width=\"700\" height=\"400\"></iframe>\n\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.sunburst.select.label.align",
                  "default": "center"
                },
                "props": {
                  "placeholder": "对齐"
                },
                "_raw": {
                  "label": "对齐",
                  "desc": "\n\n<p>文字对齐方式，可取值为：<code class=\"codespan\">&#39;left&#39;</code>、 <code class=\"codespan\">&#39;center&#39;</code>、 <code class=\"codespan\">&#39;right&#39;</code>。注意，<code class=\"codespan\">&#39;left&#39;</code> 是指靠近内圈，而 <code class=\"codespan\">&#39;right&#39;</code> 是指靠近外圈。</p>\n<p>同 <a href=\"#sunburst.label.align\">label.align</a></p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "series.sunburst.select.label.minAngle",
                "props": {
                  "placeholder": "最小角度"
                },
                "_raw": {
                  "label": "最小角度",
                  "desc": "\n\n<p>当某个扇形块的角度小于该值（角度制）时，扇形块对应的文字不显示。该值用以隐藏过小扇形块中的文字。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.sunburst.select.label.show",
                  "default": true
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
                "model": {
                  "path": "series.sunburst.select.label.position",
                  "default": "inside"
                },
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
                  "path": "series.sunburst.select.label.distance",
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
                "type": "ElInput",
                "model": "series.sunburst.select.label.offset",
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
                "model": "series.sunburst.select.label.formatter",
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
                  "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{@xxx}</code>：数据中名为 <code class=\"codespan\">&#39;xxx&#39;</code> 的维度的值，如 <code class=\"codespan\">{@product}</code> 表示名为 <code class=\"codespan\">&#39;product&#39;</code> 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}</code>：数据中维度 <code class=\"codespan\">n</code> 的值，如 <code class=\"codespan\">{@[3]}</code> 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-ts\">formatter: &#39;{b}: {@score}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-ts\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefined，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n    // 当前节点的祖先节点（包括自身）\n    treePathInfo: Array\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "series.sunburst.select.label.color",
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
                  "path": "series.sunburst.select.label.fontStyle",
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
                  "path": "series.sunburst.select.label.fontWeight",
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
                  "path": "series.sunburst.select.label.fontFamily",
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
                  "path": "series.sunburst.select.label.fontSize",
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
                "model": "series.sunburst.select.label.verticalAlign",
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
                "model": "series.sunburst.select.label.lineHeight",
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
                  "path": "series.sunburst.select.label.backgroundColor",
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
                "model": "series.sunburst.select.label.borderColor",
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
                  "path": "series.sunburst.select.label.borderWidth",
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
                  "path": "series.sunburst.select.label.borderType",
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
                  "path": "series.sunburst.select.label.borderDashOffset",
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
                  "path": "series.sunburst.select.label.borderRadius",
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
                  "path": "series.sunburst.select.label.padding",
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
                  "path": "series.sunburst.select.label.shadowColor",
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
                  "path": "series.sunburst.select.label.shadowBlur",
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
                  "path": "series.sunburst.select.label.shadowOffsetX",
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
                  "path": "series.sunburst.select.label.shadowOffsetY",
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
                "model": "series.sunburst.select.label.width",
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
                "model": "series.sunburst.select.label.height",
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
                "model": "series.sunburst.select.label.textBorderColor",
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
                "model": "series.sunburst.select.label.textBorderWidth",
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
                  "path": "series.sunburst.select.label.textBorderType",
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
                  "path": "series.sunburst.select.label.textBorderDashOffset",
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
                  "path": "series.sunburst.select.label.textShadowColor",
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
                  "path": "series.sunburst.select.label.textShadowBlur",
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
                  "path": "series.sunburst.select.label.textShadowOffsetX",
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
                  "path": "series.sunburst.select.label.textShadowOffsetY",
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
                  "path": "series.sunburst.select.label.overflow",
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
                  "path": "series.sunburst.select.label.ellipsis",
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
              "title": "标签线",
              "name": "labelLine"
            },
            "children": [
              {
                "type": "ElSwitch",
                "model": "series.sunburst.select.labelLine.show",
                "props": {
                  "placeholder": "显示"
                },
                "_raw": {
                  "label": "显示",
                  "desc": "\n\n<p>是否显示视觉引导线。</p>\n"
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
                      "path": "series.sunburst.select.labelLine.lineStyle.color",
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
                      "path": "series.sunburst.select.labelLine.lineStyle.width",
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
                      "path": "series.sunburst.select.labelLine.lineStyle.type",
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
                      "path": "series.sunburst.select.labelLine.lineStyle.dashOffset",
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
                      "path": "series.sunburst.select.labelLine.lineStyle.cap",
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
                      "path": "series.sunburst.select.labelLine.lineStyle.join",
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
                      "path": "series.sunburst.select.labelLine.lineStyle.miterLimit",
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
                    "model": "series.sunburst.select.labelLine.lineStyle.shadowBlur",
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
                    "model": "series.sunburst.select.labelLine.lineStyle.shadowColor",
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
                      "path": "series.sunburst.select.labelLine.lineStyle.shadowOffsetX",
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
                      "path": "series.sunburst.select.labelLine.lineStyle.shadowOffsetY",
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
                      "path": "series.sunburst.select.labelLine.lineStyle.opacity",
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
              "title": "图元样式",
              "name": "itemStyle"
            },
            "children": [
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "series.sunburst.select.itemStyle.color",
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
                  "desc": "\n\n<p>图形的颜色。 默认从全局调色盘 <a href=\"#color\">option.color</a> 获取颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "series.sunburst.select.itemStyle.borderColor",
                  "default": "white"
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
                  "path": "series.sunburst.select.itemStyle.borderWidth",
                  "default": 1
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
                  "path": "series.sunburst.select.itemStyle.borderType",
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
                  "path": "series.sunburst.select.itemStyle.borderDashOffset",
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
                  "path": "series.sunburst.select.itemStyle.borderCap",
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
                  "path": "series.sunburst.select.itemStyle.borderJoin",
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
                  "path": "series.sunburst.select.itemStyle.borderMiterLimit",
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
                "model": "series.sunburst.select.itemStyle.shadowBlur",
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
                "model": "series.sunburst.select.itemStyle.shadowColor",
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
                  "path": "series.sunburst.select.itemStyle.shadowOffsetX",
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
                  "path": "series.sunburst.select.itemStyle.shadowOffsetY",
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
                  "path": "series.sunburst.select.itemStyle.opacity",
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
              },
              {
                "type": "SmartUnionInput",
                "model": "series.sunburst.select.itemStyle.borderRadius",
                "props": {
                  "placeholder": "圆角半径",
                  "types": [
                    "number",
                    "string",
                    "array"
                  ],
                  "defaultType": "number",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "圆角半径",
                  "desc": "\n\n\n\n<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>用于指定旭日图扇形区块的内外圆角半径，支持设置固定数值或者相对于扇形区块的半径的百分比值。</p>\n<p>从 <code class=\"codespan\">v5.3.0</code> 开始，支持分别配置从内到外顺时针方向四个角的圆角半径，百分比值从相对于内外扇形的半径更改为相对于内外扇形的半径差。</p>\n<p>例如：</p>\n<p><code class=\"codespan\">v5.3.0</code> 之前</p>\n<ul>\n<li><code class=\"codespan\">borderRadius: 10</code>：表示内圆角半径和外圆角半径都是 <code class=\"codespan\">10px</code>。</li>\n<li><code class=\"codespan\">borderRadius: &#39;20%&#39;</code>：表示内圆角半径和外圆角半径都是扇形区块半径的 <code class=\"codespan\">20%</code>。</li>\n<li><code class=\"codespan\">borderRadius: [10, 20]</code>：表示为环形图时，内圆角半径是 <code class=\"codespan\">10px</code>、外圆角半径是 <code class=\"codespan\">20px</code>。</li>\n<li><code class=\"codespan\">borderRadius: [&#39;20%&#39;, &#39;50%&#39;]</code>：表示为环形图时，内圆角半径是内圆半径的 <code class=\"codespan\">20%</code>、外圆角半径是外圆半径的 <code class=\"codespan\">50%</code>。</li>\n</ul>\n<p><code class=\"codespan\">v5.3.0</code> 之后</p>\n<ul>\n<li><code class=\"codespan\">borderRadius: 10</code>：表示内圆角半径和外圆角半径都是 <code class=\"codespan\">10px</code>。</li>\n<li><code class=\"codespan\">borderRadius: &#39;20%&#39;</code>：表示内圆角半径和外圆角半径都是扇形区块半径的 <code class=\"codespan\">20%</code>。</li>\n<li><code class=\"codespan\">borderRadius: [10, 20]</code>：表示为环形图时，内圆角半径是 <code class=\"codespan\">10px</code>、外圆角半径是 <code class=\"codespan\">20px</code>。</li>\n<li><code class=\"codespan\">borderRadius: [&#39;20%&#39;, &#39;50%&#39;]</code>：表示为环形图时，内圆角半径是内外圆半径差的 <code class=\"codespan\">20%</code>、外圆角半径是内外圆半径差的 <code class=\"codespan\">50%</code>。</li>\n<li><code class=\"codespan\">borderRadius: [5, 10, 15, 20]</code>：表示内圆角半径分别为 <code class=\"codespan\">5px</code> 和 <code class=\"codespan\">10px</code>，外圆角半径分别为 <code class=\"codespan\">15px</code> 和 <code class=\"codespan\">20px</code>。</li>\n</ul>\n"
                }
              }
            ]
          }
        ]
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "series.sunburst.selectedMode",
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
          "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n\n<p>选中模式的配置，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选<code class=\"codespan\">&#39;single&#39;</code>，<code class=\"codespan\">&#39;multiple&#39;</code>，<code class=\"codespan\">&#39;series&#39;</code> 分别表示单选，多选以及选择整个系列。</p>\n<blockquote>\n<p>从 v5.3.0 开始支持 <code class=\"codespan\">&#39;series&#39;</code>。</p>\n</blockquote>\n"
        }
      },
      {
        "type": "ElInput",
        "model": "series.sunburst.levels",
        "props": {
          "placeholder": "层级"
        },
        "_raw": {
          "label": "层级",
          "desc": "<p><strong>多层配置</strong></p>\n<p>旭日图是一种有层次的结构，为了方便同一层样式的配置，我们提供了 levels 配置项。它是一个数组，其中的第 0 项表示数据下钻后返回上级的图形，其后的每一项分别表示从圆心向外层的层级。</p>\n<p>例如，假设我们没有数据下钻功能，并且希望将最内层的扇形块的颜色设为红色，文字设为蓝色，可以这样设置：</p>\n<pre><code class=\"lang-ts\">series: {\n    // ...\n    levels: [\n        {\n            // 留给数据下钻点的空白配置\n        },\n        {\n            // 最靠内测的第一层\n            itemStyle: {\n                color: &#39;red&#39;\n            },\n            label: {\n                color: &#39;blue&#39;\n            }\n        },\n        {\n            // 第二层 ...\n        }\n    ]\n}\n</code></pre>\n"
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
            "type": "SmartUnionInput",
            "model": "series.sunburst.tooltip.position",
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
              "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。</p>\n<p>可选：</p>\n<ul>\n<li><p><code class=\"codespan\">Array</code></p>\n<p>  通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。</p>\n<p>  示例:</p>\n<pre><code class=\"lang-ts\">  // 绝对位置，相对于容器左侧 10px, 上侧 10 px\n  position: [10, 10]\n  // 相对位置，放置在容器正中间\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">Function</code></p>\n<p>  回调函数，格式如下：</p>\n<pre><code class=\"lang-ts\">  (point: Array, params: Object|Array.&lt;Object&gt;, dom: HTMLDomElement, rect: Object, size: Object) =&gt; Array\n</code></pre>\n<p>  <strong>参数：</strong><br>\n  point: 鼠标位置，如 [20, 40]。<br>\n  params: 同 formatter 的参数相同。<br>\n  dom: tooltip 的 dom 对象。<br>\n  rect: 只有鼠标在图形上时有效，是一个用<code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">width</code>, <code class=\"codespan\">height</code>四个属性表达的图形包围盒。<br>\n  size: 包括 dom 的尺寸和 echarts 容器的当前尺寸，例如：<code class=\"codespan\">{contentSize: [width, height], viewSize: [width, height]}</code>。<br></p>\n<p>  <strong>返回值：</strong><br>\n  可以是一个表示 tooltip 位置的数组，数组值可以是绝对的像素值，也可以是相  百分比。<br>\n  也可以是一个对象，如：<code class=\"codespan\">{left: 10, top: 30}</code>，或者 <code class=\"codespan\">{right: &#39;20%&#39;, bottom: 40}</code>。<br></p>\n<p>  如下示例：</p>\n<pre><code class=\"lang-ts\">  position: function (point, params, dom, rect, size) {\n      // 固定在顶部\n      return [point[0], &#39;10%&#39;];\n  }\n</code></pre>\n<p>  或者：</p>\n<pre><code class=\"lang-ts\">  position: function (pos, params, dom, rect, size) {\n      // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。\n      var obj = {top: 60};\n      obj[[&#39;left&#39;, &#39;right&#39;][+(pos[0] &lt; size.viewSize[0] / 2)]] = 5;\n      return obj;\n  }\n</code></pre>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;inside&#39;</code></p>\n<p>  鼠标所在图形的内部中心位置，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;top&#39;</code></p>\n<p>  鼠标所在图形上侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;left&#39;</code></p>\n<p>  鼠标所在图形左侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code></p>\n<p>  鼠标所在图形右侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;bottom&#39;</code></p>\n<p>  鼠标所在图形底侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n</ul>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": "series.sunburst.tooltip.formatter",
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
              "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层内容格式器，支持字符串模板和回调函数两种形式。</p>\n<p><strong>1. 字符串模板</strong></p>\n<p>模板变量有 <code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code>，<code class=\"codespan\">{e}</code>，分别表示系列名，数据名，数据值等。\n在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，会有多个系列的数据，此时可以通过 <code class=\"codespan\">{a0}</code>, <code class=\"codespan\">{a1}</code>, <code class=\"codespan\">{a2}</code> 这种后面加索引的方式表示系列的索引。\n不同图表类型下的 <code class=\"codespan\">{a}</code>，<code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code> 含义不一样。\n其中变量<code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code>在不同图表类型下代表数据含义为：</p>\n<ul>\n<li><p>折线（区域）图、柱状（条形）图、K线图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（类目值），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>散点图（气泡）图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据名称），<code class=\"codespan\">{c}</code>（数值数组）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>地图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（区域名称），<code class=\"codespan\">{c}</code>（合并数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>饼图、仪表盘、漏斗图: <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据项名称），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（百分比）</p>\n</li>\n</ul>\n<p>更多其它图表模板变量的含义可以见相应的图表的 label.formatter 配置项。</p>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-ts\">formatter: &#39;{b0}: {c0}&lt;br /&gt;{b1}: {c1}&#39;\n</code></pre>\n<p><strong>2. 回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-ts\">(params: Object|Array, ticket: string, callback: (ticket: string, html: string | HTMLElement | HTMLElement[])) =&gt; string | HTMLElement | HTMLElement[]\n</code></pre>\n<p>支持返回 HTML 字符串或者创建的 DOM 实例。</p>\n<div  class=\"doc-partial-security-warning\">\n<span  class=\"warning-title\">[警告]:</span> tooltip 是用 HTML 实现的（除非 <a  href=\"#tooltip.renderMode\">tooltip.renderMode</a> 设为 <code  class=\"codespan\">richText</code>）。允许用此方式定制 HTML。传入 HTML 前须要对其内容进行正确转义。 使用时必须考虑 <strong >安全风险</strong>。文档 <a  href=\"https://echarts.apache.org/handbook/zh/best-practices/security\" target=\"_blank\">“安全指南”</a> 给出了安全使用建议。\n</div>\n\n\n<p>组装 HTML 字符串时，<strong>必须进行 HTML 转义（HTML-escaping）</strong>。例如：</p>\n<pre><code class=\"lang-js\">{\n    tooltip: {\n        formatter: params =&gt; {\n            const { name, value } = params;\n            // 必须进行 HTML 转义。\n            // 否则，如果 name 或 value 中含有功能性字符，如 &#39;&lt;&#39; &#39;&gt;&#39; 等，\n            // 则可能渲染不正确。\n            // 同时，如果 name 或 value 的值来自于“非受信任”的来源，则可能被注入恶意代码；\n            // 如果未被转义，则会被运行。\n            return echarts.format.encodeHTML(name)\n                + &#39;&lt;b&gt;&#39; + echarts.format.encodeHTML(value) + &#39;&lt;/b&gt;&#39;;\n            // 注：`echarts.format.encodeHTML` 是个工具函数，把特殊字符\n            //  （&#39;&amp;&#39;、&#39;&lt;&#39;、&#39;&gt;&#39;、&#39;&quot;&#39;、&quot;&#39;&quot;）转换成他们对应的 HTML entities.\n            //  这只是个例子，任何 HTML 转义工具函数都可使用。\n        }\n    }\n}\n</code></pre>\n<p>第一个参数 <code class=\"codespan\">params</code> 是 formatter 需要的数据集。格式如下：</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefined，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n    // 饼图/漏斗图的百分比\n    percent: number,\n    // 旭日图中当前节点的祖先节点（包括自身）\n    treePathInfo: Array,\n    // 树图/矩形树图中当前节点的祖先节点（包括自身）\n    treeAncestors: Array,\n    // 坐标轴标签文本是否溢出隐藏，可以使用此函数判断是否需要弹出提示框\n    isTruncated: Function,\n    // 当前坐标轴标签刻度索引\n    tickIndex: number\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，或者 tooltip 被 <a href=\"#xAxis.axisPointer\">axisPointer</a> 触发的时候，<code class=\"codespan\">params</code> 是多个系列的数据数组。其中每项内容格式同上，并且，</p>\n<pre><code class=\"lang-ts\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefined，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-ts\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-ts\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>第二个参数 <code class=\"codespan\">ticket</code> 是异步回调标识，配合第三个参数 <code class=\"codespan\">callback</code> 使用。\n第三个参数 <code class=\"codespan\">callback</code> 是异步回调，在提示框浮层内容是异步获取的时候，可以通过 callback 传入上述的 <code class=\"codespan\">ticket</code> 和 <code class=\"codespan\">html</code> 更新提示框浮层内容。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">formatter: function (params, ticket, callback) {\n    $.get(&#39;detail?name=&#39; + params.name, function (content) {\n        callback(ticket, toHTML(content));\n    });\n    return &#39;Loading&#39;;\n}\n</code></pre>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "series.sunburst.tooltip.valueFormatter",
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
              "path": "series.sunburst.tooltip.backgroundColor",
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
              "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的背景颜色。</p>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "series.sunburst.tooltip.borderColor",
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
              "desc": "\n\n\n\n\n<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的边框颜色。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "series.sunburst.tooltip.borderWidth",
              "default": 0
            },
            "props": {
              "placeholder": "边框宽度"
            },
            "_raw": {
              "label": "边框宽度",
              "desc": "\n\n\n\n\n<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的边框宽。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "series.sunburst.tooltip.padding",
              "default": 5
            },
            "props": {
              "placeholder": "内边距"
            },
            "_raw": {
              "label": "内边距",
              "desc": "\n\n\n\n\n<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n\n\n<p>提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。</p>\n<p>使用示例：</p>\n<pre><code class=\"lang-ts\">// 设置内边距为 5\npadding: 5\n// 设置上下的内边距为 5，左右的内边距为 10\npadding: [5, 10]\n// 分别设置四个方向的内边距\npadding: [\n    5,  // 上\n    10, // 右\n    5,  // 下\n    10, // 左\n]\n</code></pre>\n"
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
                  "path": "series.sunburst.tooltip.textStyle.color",
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
                  "path": "series.sunburst.tooltip.textStyle.fontStyle",
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
                  "path": "series.sunburst.tooltip.textStyle.fontWeight",
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
                  "path": "series.sunburst.tooltip.textStyle.fontFamily",
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
                  "path": "series.sunburst.tooltip.textStyle.fontSize",
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
                "model": "series.sunburst.tooltip.textStyle.lineHeight",
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
                "model": "series.sunburst.tooltip.textStyle.width",
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
                "model": "series.sunburst.tooltip.textStyle.height",
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
                "model": "series.sunburst.tooltip.textStyle.textBorderColor",
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
                "model": "series.sunburst.tooltip.textStyle.textBorderWidth",
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
                  "path": "series.sunburst.tooltip.textStyle.textBorderType",
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
                  "path": "series.sunburst.tooltip.textStyle.textBorderDashOffset",
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
                  "path": "series.sunburst.tooltip.textStyle.textShadowColor",
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
                  "path": "series.sunburst.tooltip.textStyle.textShadowBlur",
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
                  "path": "series.sunburst.tooltip.textStyle.textShadowOffsetX",
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
                  "path": "series.sunburst.tooltip.textStyle.textShadowOffsetY",
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
                  "path": "series.sunburst.tooltip.textStyle.overflow",
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
                  "path": "series.sunburst.tooltip.textStyle.ellipsis",
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
            "model": "series.sunburst.tooltip.extraCssText",
            "props": {
              "placeholder": "额外CSS文本"
            },
            "_raw": {
              "label": "额外CSS文本",
              "desc": "\n\n\n\n\n<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>额外附加到浮层的 css 样式。如下为浮层添加阴影的示例：</p>\n<pre><code class=\"lang-ts\">extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39;\n</code></pre>\n<div  class=\"doc-partial-security-warning\">\n<span  class=\"warning-title\">[警告]:</span> tooltip 是用 HTML 实现的（除非 <a  href=\"#tooltip.renderMode\">tooltip.renderMode</a> 设为 <code  class=\"codespan\">richText</code>）。允许用此方式定制 toolbox 外壳的 CSS text。 如果此 CSS text 来自于“不受信任”的来源，必须考虑 <strong >安全风险</strong>。文档 <a  href=\"https://echarts.apache.org/handbook/zh/best-practices/security\" target=\"_blank\">“安全指南”</a> 给出了安全使用建议。\n</div>\n\n\n\n\n\n\n\n\n\n\n"
            }
          }
        ]
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "series.sunburst.animation",
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
          "path": "series.sunburst.animationThreshold",
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
          "path": "series.sunburst.animationDuration",
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
          "path": "series.sunburst.animationEasing",
          "default": "cubicOut"
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
          "path": "series.sunburst.animationDelay",
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
          "path": "series.sunburst.animationDurationUpdate",
          "default": 500
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
          "path": "series.sunburst.animationEasingUpdate",
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
          "path": "series.sunburst.animationDelayUpdate",
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
