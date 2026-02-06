export default [
  {
    "type": "ElCollapseItem",
    "props": {
      "title": "时间轴",
      "name": "timeline"
    },
    "children": [
      {
        "type": "ElSwitch",
        "model": {
          "path": "timeline.show",
          "default": true
        },
        "props": {
          "placeholder": "显示"
        },
        "_raw": {
          "label": "显示",
          "desc": "\n\n<p>是否显示 <code class=\"codespan\">timeline</code> 组件。如果设置为<code class=\"codespan\">false</code>，不会显示，但是功能还存在。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "timeline.type",
          "default": "slider"
        },
        "props": {
          "placeholder": "类型"
        },
        "_raw": {
          "label": "类型",
          "desc": "<p>这个属性目前只支持为 <code class=\"codespan\">slider</code>，不需要更改。</p>\n"
        }
      },
      {
        "type": "SmartStyleSelect",
        "model": {
          "path": "timeline.axisType",
          "default": "time"
        },
        "props": {
          "placeholder": "坐标轴类型",
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
          "label": "坐标轴类型",
          "desc": "<p>轴的类型。可选值为：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;value&#39;</code>\n  数值轴，适用于连续数据。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;category&#39;</code>\n  类目轴，适用于离散的类目数据。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;time&#39;</code>\n  时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。</p>\n</li>\n</ul>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "timeline.currentIndex",
          "default": 0
        },
        "props": {
          "placeholder": "当前索引"
        },
        "_raw": {
          "label": "当前索引",
          "desc": "\n\n<p>表示当前选中项是哪项。比如，<code class=\"codespan\">currentIndex</code> 为 <code class=\"codespan\">0</code> 时，表示当前选中项为 <code class=\"codespan\">timeline.data[0]</code>（即使用 <code class=\"codespan\">options[0]</code>）。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "timeline.autoPlay",
          "default": false
        },
        "props": {
          "placeholder": "自动播放"
        },
        "_raw": {
          "label": "自动播放",
          "desc": "\n\n<p>表示是否自动播放。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "timeline.rewind",
          "default": false
        },
        "props": {
          "placeholder": "倒回"
        },
        "_raw": {
          "label": "倒回",
          "desc": "\n\n<p>表示是否反向播放。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "timeline.loop",
          "default": true
        },
        "props": {
          "placeholder": "循环"
        },
        "_raw": {
          "label": "循环",
          "desc": "\n\n<p>表示是否循环播放。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "timeline.playInterval",
          "default": 2000
        },
        "props": {
          "placeholder": "播放间隔"
        },
        "_raw": {
          "label": "播放间隔",
          "desc": "\n\n<p>表示播放的速度（跳动的间隔），单位毫秒（ms）。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "timeline.realtime",
          "default": true
        },
        "props": {
          "placeholder": "实时更新"
        },
        "_raw": {
          "label": "实时更新",
          "desc": "\n\n<p>拖动圆点的时候，是否实时更新视图。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": "timeline.replaceMerge",
        "props": {
          "placeholder": "替换合并",
          "types": [
            "array",
            "string"
          ],
          "defaultType": "array",
          "specialKeywords": []
        },
        "_raw": {
          "label": "替换合并",
          "desc": "<p>初始化的时候，对应于当前时间的那个 <code class=\"codespan\">switchableOption</code> 会被合并（merge）到 <code class=\"codespan\">baseOption</code>，形成 <code class=\"codespan\">finalOption</code>。而每当时间变化时，对应于新时间的 <code class=\"codespan\">switchableOption</code> 会被合并（merge）到<code class=\"codespan\">finalOption</code>。</p>\n<p>有两种合并（merge）策略：</p>\n<ul>\n<li>默认使用 <code class=\"codespan\">NORMAL_MERGE</code>。</li>\n<li>如果 <a href=\"#option.html#timeline.replaceMerge\">timeline.replaceMerge</a> 被指定了，则使用 <code class=\"codespan\">REPLACE_MERGE</code>。如果要知道 <code class=\"codespan\">REPLACE_MERGE</code> 更多信息，可以参见 <a href=\"#api.html#echartsInstance.setOption\">setOption</a> 中 <code class=\"codespan\">REPLACE_MERGE</code> 一节。\n。</li>\n</ul>\n<p><br></p>\n<p><code class=\"codespan\">replaceMerge</code> 的值可以是一个组件的 <code class=\"codespan\">mainType</code>，例如 <code class=\"codespan\">replaceMerge: &#39;xAxis&#39;</code>。也可以是 <code class=\"codespan\">mainType</code> 数组，例如 <code class=\"codespan\">replaceMerge: [&#39;xAxis&#39;, &#39;series&#39;]</code>。</p>\n<p>常见需要使用 <code class=\"codespan\">replaceMerge</code> 的地方是，如果需要下一个时间刻度的 series 完全替换上一个时间刻度的 series 而不进行任何 merge ，可以设置 <code class=\"codespan\">replaceMerge: &#39;series&#39;</code>，并且两个时间刻度的 series id 不相同或者没有 id 。</p>\n<p>参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/timeline-dynamic-series&amp;edit=1&amp;reset=1\" target=\"_blank\">示例</a>。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "timeline.controlPosition",
          "default": "left"
        },
        "props": {
          "placeholder": "控制位置"
        },
        "_raw": {
          "label": "控制位置",
          "desc": "\n\n<p>表示『播放』按钮的位置。可选值：<code class=\"codespan\">&#39;left&#39;</code>、<code class=\"codespan\">&#39;right&#39;</code>。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "timeline.zlevel",
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
          "path": "timeline.z",
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
          "path": "timeline.left",
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
          "desc": "\n\n\n\n<p>时间轴（timeline）组件离容器左侧的距离。</p>\n<p><code class=\"codespan\">left</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器宽度的百分比，也可以是 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">left</code> 的值为 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>，组件会根据相应的位置自动对齐。</p>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "timeline.top",
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
          "desc": "\n\n\n\n<p>时间轴（timeline）组件离容器上侧的距离。</p>\n<p><code class=\"codespan\">top</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高度的百分比，也可以是 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">top</code> 的值为 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>，组件会根据相应的位置自动对齐。</p>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "timeline.right",
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
          "desc": "\n\n\n\n<p>时间轴（timeline）组件离容器右侧的距离。</p>\n<p><code class=\"codespan\">right</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器宽度的百分比。</p>\n<p>默认自适应。</p>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "timeline.bottom",
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
          "desc": "\n\n\n\n<p>时间轴（timeline）组件离容器下侧的距离。</p>\n<p>bottom 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高度的百分比。</p>\n<p>默认自适应。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "timeline.padding",
          "default": 5
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
          "desc": "\n\n\n\n\n\n<p>timeline内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。</p>\n<p>使用示例：</p>\n<pre><code class=\"lang-ts\">// 设置内边距为 5\npadding: 5\n// 设置上下的内边距为 5，左右的内边距为 10\npadding: [5, 10]\n// 分别设置四个方向的内边距\npadding: [\n    5,  // 上\n    10, // 右\n    5,  // 下\n    10, // 左\n]\n</code></pre>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "timeline.orient",
          "default": "horizontal"
        },
        "props": {
          "placeholder": "朝向"
        },
        "_raw": {
          "label": "朝向",
          "desc": "\n\n<p>摆放方式，可选值有：</p>\n<ul>\n<li><code class=\"codespan\">&#39;vertical&#39;</code>：竖直放置。</li>\n<li><code class=\"codespan\">&#39;horizontal&#39;</code>：水平放置。</li>\n</ul>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "timeline.inverse",
          "default": false
        },
        "props": {
          "placeholder": "反向"
        },
        "_raw": {
          "label": "反向",
          "desc": "\n\n<ul>\n<li>是否反向放置 <code class=\"codespan\">timeline</code>，反向则首位颠倒过来。</li>\n</ul>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "timeline.symbol",
          "default": "emptyCircle"
        },
        "props": {
          "placeholder": "图形"
        },
        "_raw": {
          "label": "图形",
          "desc": "\n\n<p>timeline标记的图形。</p>\n<p>ECharts 提供的标记类型包括</p>\n<p><code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "timeline.symbolSize",
          "default": 10
        },
        "props": {
          "placeholder": "图形大小",
          "types": [
            "number",
            "array"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "图形大小",
          "desc": "\n\n<p>timeline标记的大小，可以设置成诸如 <code class=\"codespan\">10</code> 这样单一的数字，也可以用数组分开表示宽和高，例如 <code class=\"codespan\">[20, 10]</code> 表示标记宽为<code class=\"codespan\">20</code>，高为<code class=\"codespan\">10</code>。</p>\n"
        }
      },
      {
        "type": "ElInputNumber",
        "model": "timeline.symbolRotate",
        "props": {
          "placeholder": "标记旋转"
        },
        "_raw": {
          "label": "标记旋转",
          "desc": "\n\n<p>timeline标记的旋转角度（而非弧度）。正值表示逆时针旋转。注意在 <code class=\"codespan\">markLine</code> 中当 <code class=\"codespan\">symbol</code> 为 <code class=\"codespan\">&#39;arrow&#39;</code> 时会忽略 <code class=\"codespan\">symbolRotate</code> 强制设置为切线的角度。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "timeline.symbolKeepAspect",
          "default": false
        },
        "props": {
          "placeholder": "标记保持比例"
        },
        "_raw": {
          "label": "标记保持比例",
          "desc": "\n\n<p>如果 <code class=\"codespan\">symbol</code> 是 <code class=\"codespan\">path://</code> 的形式，是否在缩放时保持该图形的长宽比。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "timeline.symbolOffset",
          "default": "[0, 0]"
        },
        "props": {
          "placeholder": "符号偏移"
        },
        "_raw": {
          "label": "符号偏移",
          "desc": "\n\n<p>timeline标记相对于原本位置的偏移。默认情况下，标记会居中置放在数据对应的位置，但是如果 symbol 是自定义的矢量路径或者图片，就有可能不希望 symbol 居中。这时候可以使用该配置项配置 symbol 相对于原本居中的偏移，可以是绝对的像素值，也可以是相对的百分比。</p>\n<p>例如 <code class=\"codespan\">[0, &#39;-50%&#39;]</code> 就是把自己向上移动了一半的位置，在 symbol 图形是气泡的时候可以让图形下端的箭头对准数据点。</p>\n"
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
            "type": "ElSwitch",
            "model": {
              "path": "timeline.lineStyle.show",
              "default": true
            },
            "props": {
              "placeholder": "显示"
            },
            "_raw": {
              "label": "显示",
              "desc": "\n\n<p>是否显示轴线。可以设置为 <code class=\"codespan\">false</code> 不显示轴线，则可以做出不同的样式效果。</p>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "timeline.lineStyle.color",
              "default": "#DAE1F5"
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
              "desc": "\n\n<p>timeline 线的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
            }
          },
          {
            "type": "SmartSizeInput",
            "model": {
              "path": "timeline.lineStyle.width",
              "default": 2
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
              "desc": "\n\n<p>timeline 线宽。</p>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": {
              "path": "timeline.lineStyle.type",
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
              "path": "timeline.lineStyle.dashOffset",
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
              "path": "timeline.lineStyle.cap",
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
              "path": "timeline.lineStyle.join",
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
              "path": "timeline.lineStyle.miterLimit",
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
            "model": "timeline.lineStyle.shadowBlur",
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
            "model": "timeline.lineStyle.shadowColor",
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
              "path": "timeline.lineStyle.shadowOffsetX",
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
              "path": "timeline.lineStyle.shadowOffsetY",
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
              "path": "timeline.lineStyle.opacity",
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
          "title": "标签",
          "name": "label"
        },
        "children": [
          {
            "type": "SmartUnionInput",
            "model": {
              "path": "timeline.label.position",
              "default": "auto"
            },
            "props": {
              "placeholder": "位置",
              "types": [
                "string",
                "number"
              ],
              "defaultType": "string",
              "specialKeywords": [
                "auto"
              ]
            },
            "_raw": {
              "label": "位置",
              "desc": "\n\n\n\n<p>可选的配置方式：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;auto&#39;</code>：\n  完全自动决定。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;left&#39;</code>：\n  贴左边界放置。\n  当 <a href=\"#timeline.orient\">timline.orient</a> 为 <code class=\"codespan\">&#39;vertical&#39;</code> 时有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code>：当 <a href=\"#timeline.orient\">timline.orient</a> 为 <code class=\"codespan\">&#39;vertical&#39;</code> 时有效。\n  贴右边界放置。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;top&#39;</code>：\n  贴上边界放置。\n  当 <a href=\"#timeline.orient\">timline.orient</a> 为 <code class=\"codespan\">&#39;horizontal&#39;</code> 时有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;bottom&#39;</code>：\n  贴下边界放置。\n  当 <a href=\"#timeline.orient\">timline.orient</a> 为 <code class=\"codespan\">&#39;horizontal&#39;</code> 时有效。</p>\n</li>\n<li><p><code class=\"codespan\">number</code>：\n  指定某个数值时，表示 <code class=\"codespan\">label</code> 和轴的距离。为 <code class=\"codespan\">0</code> 时则和坐标轴重合，可以为正负值，决定 <code class=\"codespan\">label</code> 在坐标轴的哪一边。</p>\n</li>\n</ul>\n"
            }
          },
          {
            "type": "ElSwitch",
            "model": {
              "path": "timeline.label.show",
              "default": true
            },
            "props": {
              "placeholder": "显示"
            },
            "_raw": {
              "label": "显示",
              "desc": "\n\n<p>是否显示 label。</p>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": {
              "path": "timeline.label.interval",
              "default": "auto"
            },
            "props": {
              "placeholder": "间隔",
              "types": [
                "string",
                "number"
              ],
              "defaultType": "string",
              "specialKeywords": [
                "auto"
              ]
            },
            "_raw": {
              "label": "间隔",
              "desc": "<p><code class=\"codespan\">label</code> 的间隔。当指定为数值时，例如指定为 <code class=\"codespan\">2</code>，则每隔两个显示一个 label。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "timeline.label.rotate",
              "default": 0
            },
            "props": {
              "placeholder": "旋转"
            },
            "_raw": {
              "label": "旋转",
              "desc": "<p><code class=\"codespan\">label</code> 的旋转角度。正值表示逆时针旋转。</p>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": "timeline.label.formatter",
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
              "desc": "<p>刻度标签的内容格式器，支持字符串模板和回调函数两种形式。</p>\n<p>示例:</p>\n<pre><code class=\"lang-ts\">// 使用字符串模板，模板变量为刻度默认标签 {value}\nformatter: &#39;{value} kg&#39;\n// 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引\nformatter: function (value, index, extra?) {\n    return value + &#39;kg&#39;;\n}\n</code></pre>\n<hr>\n<p><br></p>\n<hr>\n<p><br></p>\n<p><strong>对于时间轴（<a href=\"#.axisType\"><code class=\"codespan\">.axisType: &#39;time&#39;</code></a>）</strong></p>\n<p><code class=\"codespan\">formatter</code> 的字符串模板支持多种形式：</p>\n<ul>\n<li><strong>字符串模板</strong>：简单快速实现常用日期时间模板，<code class=\"codespan\">string</code> 类型</li>\n<li><strong>回调函数</strong>：自定义 formatter，可以用来实现复杂高级的格式，<code class=\"codespan\">Function</code> 类型</li>\n<li><strong>分级模板</strong>：为不同时间粒度的标签使用不同的 formatter，<code class=\"codespan\">object</code> 类型</li>\n</ul>\n<p>下面我们分别介绍这三种形式。</p>\n<p><strong> 字符串模板 </strong></p>\n<p>使用字符串模板是一种方便实现常用日期时间格式化方式的形式。如果字符串模板可以实现你的效果，那我们优先推荐使用此方式；如果无法实现，再考虑其他两种更复杂的方式。支持的模板如下：</p>\n<table>\n<thead>\n<tr>\n<th>分类</th>\n<th>模板</th>\n<th>取值（英文）</th>\n<th>取值（中文）</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Year</td>\n<td>{yyyy}</td>\n<td>e.g., 2020, 2021, ...</td>\n<td>例：2020, 2021, ...</td>\n</tr>\n<tr>\n<td></td>\n<td>{yy}</td>\n<td>00-99</td>\n<td>00-99</td>\n</tr>\n<tr>\n<td>Quarter</td>\n<td>{Q}</td>\n<td>1, 2, 3, 4</td>\n<td>1, 2, 3, 4</td>\n</tr>\n<tr>\n<td>Month</td>\n<td>{MMMM}</td>\n<td>e.g., January, February, ...</td>\n<td>一月、二月、……</td>\n</tr>\n<tr>\n<td></td>\n<td>{MMM}</td>\n<td>e.g., Jan, Feb, ...</td>\n<td>1月、2月、……</td>\n</tr>\n<tr>\n<td></td>\n<td>{MM}</td>\n<td>01-12</td>\n<td>01-12</td>\n</tr>\n<tr>\n<td></td>\n<td>{M}</td>\n<td>1-12</td>\n<td>1-12</td>\n</tr>\n<tr>\n<td>Day of Month</td>\n<td>{dd}</td>\n<td>01-31</td>\n<td>01-31</td>\n</tr>\n<tr>\n<td></td>\n<td>{d}</td>\n<td>1-31</td>\n<td>1-31</td>\n</tr>\n<tr>\n<td>Day of Week</td>\n<td>{eeee}</td>\n<td>Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday</td>\n<td>星期日、星期一、星期二、星期三、星期四、星期五、星期六</td>\n</tr>\n<tr>\n<td></td>\n<td>{ee}</td>\n<td>Sun, Mon, Tues, Wed, Thu, Fri, Sat</td>\n<td>日、一、二、三、四、五、六</td>\n</tr>\n<tr>\n<td></td>\n<td>{e}</td>\n<td>1-54</td>\n<td>1-54</td>\n</tr>\n<tr>\n<td>Hour</td>\n<td>{HH}</td>\n<td>00-23</td>\n<td>00-23</td>\n</tr>\n<tr>\n<td></td>\n<td>{H}</td>\n<td>0-23</td>\n<td>0-23</td>\n</tr>\n<tr>\n<td></td>\n<td>{hh}</td>\n<td>01-12</td>\n<td>01-12</td>\n</tr>\n<tr>\n<td></td>\n<td>{h}</td>\n<td>1-12</td>\n<td>1-12</td>\n</tr>\n<tr>\n<td>Minute</td>\n<td>{mm}</td>\n<td>00-59</td>\n<td>00-59</td>\n</tr>\n<tr>\n<td></td>\n<td>{m}</td>\n<td>0-59</td>\n<td>0-59</td>\n</tr>\n<tr>\n<td>Second</td>\n<td>{ss}</td>\n<td>00-59</td>\n<td>00-59</td>\n</tr>\n<tr>\n<td></td>\n<td>{s}</td>\n<td>0-59</td>\n<td>0-59</td>\n</tr>\n<tr>\n<td>Millisecond</td>\n<td>{SSS}</td>\n<td>000-999</td>\n<td>000-999</td>\n</tr>\n<tr>\n<td></td>\n<td>{S}</td>\n<td>0-999</td>\n<td>0-999</td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>其他语言请参考相应<a href=\"https://github.com/apache/echarts/tree/master/src/i18n\" target=\"_blank\">语言包</a>中的定义，语言包可以通过 <a href=\"api.html#echarts.registerLocale\" target=\"_blank\">echarts.registerLocale</a> 注册。</p>\n</blockquote>\n<p>示例:</p>\n<pre><code class=\"lang-ts\">formatter: &#39;{yyyy}-{MM}-{dd}&#39; // 得到的 label 形如：&#39;2020-12-02&#39;\nformatter: &#39;{d}日&#39; // 得到的 label 形如：&#39;2日&#39;\n</code></pre>\n<p><strong> 回调函数 </strong></p>\n<p>回调函数可以根据刻度值返回不同的格式，如果有复杂的时间格式化需求，也可以引用第三方的日期时间相关的库（如 <a href=\"https://momentjs.com/\" target=\"_blank\">Moment.js</a>、<a href=\"https://date-fns.org/\" target=\"_blank\">date-fns</a> 等），返回显示的文本。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">// 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引\nformatter: function (value, index) {\n    // 格式化成月/日，只在第一个刻度显示年份\n    var date = new Date(value);\n    var texts = [(date.getMonth() + 1), date.getDate()];\n    if (index === 0) {\n        texts.unshift(date.getFullYear());\n    }\n    return texts.join(&#39;/&#39;);\n}\n\n// 另外，`echarts.time.format` 也可以被使用：\nformatter: function (value, index) {\n    // 时间模版的规则如上描述。\n    const timeStrLocal = echarts.time.format(value, &#39;{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}&#39;);\n    // 第三个参数表示，基于 UTC 解析时间。\n    const timeStrUTC = echarts.time.format(value, &#39;{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}&#39;, true);\n    // 注意：如果使用 UTC，https://echarts.apache.org/zh/option.html#useUTC 也要设置为 `true`，保持一致。\n    return timeStrLocal;\n}\n</code></pre>\n<p><strong> 分级模板 </strong></p>\n<p>有时候，我们希望对不同的时间粒度采用不同的格式化策略。例如，在季度图表中，我们可能希望对每个月的第一天显示月份，而其他日期显示日期。我们可以使用以下方式实现该效果：</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">formatter: {\n    month: &#39;{MMMM}&#39;, // 一月、二月、……\n    day: &#39;{d}日&#39; // 1日、2日、……\n}\n</code></pre>\n<p>支持的分级以及各自默认的取值为：</p>\n<pre><code class=\"lang-ts\">{\n    year: &#39;{yyyy}&#39;,\n    month: &#39;{MMM}&#39;,\n    day: &#39;{d}&#39;,\n    hour: &#39;{HH}:{mm}&#39;,\n    minute: &#39;{HH}:{mm}&#39;,\n    second: &#39;{HH}:{mm}:{ss}&#39;,\n    millisecond: &#39;{hh}:{mm}:{ss} {SSS}&#39;,\n    none: &#39;{yyyy}-{MM}-{dd} {hh}:{mm}:{ss} {SSS}&#39;\n}\n</code></pre>\n<p>以 <code class=\"codespan\">day</code> 为例，当一个刻度点的值的小时、分钟、秒、毫秒都为 <code class=\"codespan\">0</code> 时，将采用 <code class=\"codespan\">day</code> 的分级值作为模板。<code class=\"codespan\">none</code> 表示当其他规则都不适用时采用的模板，也就是带有毫秒值的刻度点的模板。</p>\n<p><strong> 富文本 </strong></p>\n<p>以上这三种形式的 formatter 都支持富文本，所以可以做成一些复杂的效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">xAxis: {\n    type: &#39;time&#39;,\n    axisLabel: {\n        formatter: {\n            // 一年的第一个月显示年度信息和月份信息\n            year: &#39;{yearStyle|{yyyy}}\\n{monthStyle|{MMM}}&#39;,\n            month: &#39;{monthStyle|{MMM}}&#39;\n        },\n        rich: {\n            yearStyle: {\n                // 让年度信息更醒目\n                color: &#39;#000&#39;,\n                fontWeight: &#39;bold&#39;\n            },\n            monthStyle: {\n                color: &#39;#999&#39;\n            }\n        }\n    }\n},\n</code></pre>\n<p>使用回调函数形式实现上面例子同样的效果：</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">xAxis: {\n    type: &#39;time&#39;,\n    axisLabel: {\n        formatter: function (value) {\n            const date = new Date(value);\n            const yearStart = new Date(value);\n            yearStart.setMonth(0);\n            yearStart.setDate(1);\n            yearStart.setHours(0);\n            yearStart.setMinutes(0);\n            yearStart.setSeconds(0);\n            yearStart.setMilliseconds(0);\n            // 判断一个刻度值知否为一年的开始\n            if (date.getTime() === yearStart.getTime()) {\n                return &#39;{year|&#39; + date.getFullYear() + &#39;}\\n&#39;\n                    + &#39;{month|&#39; + (date.getMonth() + 1) + &#39;月}&#39;;\n            }\n            else {\n                return &#39;{month|&#39; + (date.getMonth() + 1) + &#39;月}&#39;\n            }\n        },\n        rich: {\n            year: {\n                color: &#39;#000&#39;,\n                fontWeight: &#39;bold&#39;\n            },\n            month: {\n                color: &#39;#999&#39;\n            }\n        }\n    }\n},\n</code></pre>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "timeline.label.color",
              "default": "#A4B1D7"
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
              "desc": "\n\n<p>timeline.lable文字的颜色。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "timeline.label.fontStyle",
              "default": "normal"
            },
            "props": {
              "placeholder": "字体样式"
            },
            "_raw": {
              "label": "字体样式",
              "desc": "\n\n<p>timeline.lable文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": {
              "path": "timeline.label.fontWeight",
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
              "desc": "\n\n<p>timeline.lable文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "timeline.label.fontFamily",
              "default": "sans-serif"
            },
            "props": {
              "placeholder": "字体"
            },
            "_raw": {
              "label": "字体",
              "desc": "\n\n<p>timeline.lable文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "timeline.label.fontSize",
              "default": 12
            },
            "props": {
              "placeholder": "字体大小"
            },
            "_raw": {
              "label": "字体大小",
              "desc": "\n\n<p>timeline.lable文字的字体大小。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "timeline.label.align",
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
            "model": "timeline.label.verticalAlign",
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
            "model": "timeline.label.lineHeight",
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
              "path": "timeline.label.backgroundColor",
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
              "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-ts\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": "timeline.label.borderColor",
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
              "desc": "\n\n<p>文字块边框颜色。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "timeline.label.borderWidth",
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
              "path": "timeline.label.borderType",
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
              "path": "timeline.label.borderDashOffset",
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
              "path": "timeline.label.borderRadius",
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
              "path": "timeline.label.padding",
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
              "path": "timeline.label.shadowColor",
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
              "path": "timeline.label.shadowBlur",
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
              "path": "timeline.label.shadowOffsetX",
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
              "path": "timeline.label.shadowOffsetY",
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
            "model": "timeline.label.width",
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
            "model": "timeline.label.height",
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
            "model": "timeline.label.textBorderColor",
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
            "model": "timeline.label.textBorderWidth",
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
              "path": "timeline.label.textBorderType",
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
              "path": "timeline.label.textBorderDashOffset",
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
              "path": "timeline.label.textShadowColor",
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
              "path": "timeline.label.textShadowBlur",
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
              "path": "timeline.label.textShadowOffsetX",
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
              "path": "timeline.label.textShadowOffsetY",
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
              "path": "timeline.label.overflow",
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
              "path": "timeline.label.ellipsis",
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
              "path": "timeline.itemStyle.color",
              "default": "#A4B1D7"
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
              "desc": "\n\n<p>timeline 图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "timeline.itemStyle.borderColor",
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
              "desc": "\n\n<p>timeline 图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "timeline.itemStyle.borderWidth",
              "default": 1
            },
            "props": {
              "placeholder": "边框宽度"
            },
            "_raw": {
              "label": "边框宽度",
              "desc": "\n\n<p>timeline 描边线宽。为 0 时无描边。</p>\n"
            }
          },
          {
            "type": "SmartStyleSelect",
            "model": {
              "path": "timeline.itemStyle.borderType",
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
              "desc": "\n\n\n<p>timeline 描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "timeline.itemStyle.borderDashOffset",
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
              "path": "timeline.itemStyle.borderCap",
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
              "path": "timeline.itemStyle.borderJoin",
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
              "path": "timeline.itemStyle.borderMiterLimit",
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
            "model": "timeline.itemStyle.shadowBlur",
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
            "model": "timeline.itemStyle.shadowColor",
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
              "path": "timeline.itemStyle.shadowOffsetX",
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
              "path": "timeline.itemStyle.shadowOffsetY",
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
              "path": "timeline.itemStyle.opacity",
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
          "title": "检查点样式",
          "name": "checkpointStyle"
        },
        "children": [
          {
            "type": "ElInput",
            "model": {
              "path": "timeline.checkpointStyle.symbol",
              "default": "circle"
            },
            "props": {
              "placeholder": "图形"
            },
            "_raw": {
              "label": "图形",
              "desc": "\n\n<p>timeline.checkpointStyle 标记的图形。</p>\n<p>ECharts 提供的标记类型包括</p>\n<p><code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": {
              "path": "timeline.checkpointStyle.symbolSize",
              "default": 13
            },
            "props": {
              "placeholder": "图形大小",
              "types": [
                "number",
                "array"
              ],
              "defaultType": "number",
              "specialKeywords": []
            },
            "_raw": {
              "label": "图形大小",
              "desc": "\n\n<p>timeline.checkpointStyle 标记的大小，可以设置成诸如 <code class=\"codespan\">10</code> 这样单一的数字，也可以用数组分开表示宽和高，例如 <code class=\"codespan\">[20, 10]</code> 表示标记宽为<code class=\"codespan\">20</code>，高为<code class=\"codespan\">10</code>。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "timeline.checkpointStyle.symbolRotate",
            "props": {
              "placeholder": "标记旋转"
            },
            "_raw": {
              "label": "标记旋转",
              "desc": "\n\n<p>timeline.checkpointStyle 标记的旋转角度（而非弧度）。正值表示逆时针旋转。注意在 <code class=\"codespan\">markLine</code> 中当 <code class=\"codespan\">symbol</code> 为 <code class=\"codespan\">&#39;arrow&#39;</code> 时会忽略 <code class=\"codespan\">symbolRotate</code> 强制设置为切线的角度。</p>\n"
            }
          },
          {
            "type": "ElSwitch",
            "model": {
              "path": "timeline.checkpointStyle.symbolKeepAspect",
              "default": false
            },
            "props": {
              "placeholder": "标记保持比例"
            },
            "_raw": {
              "label": "标记保持比例",
              "desc": "\n\n<p>如果 <code class=\"codespan\">symbol</code> 是 <code class=\"codespan\">path://</code> 的形式，是否在缩放时保持该图形的长宽比。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "timeline.checkpointStyle.symbolOffset",
              "default": "[0, 0]"
            },
            "props": {
              "placeholder": "符号偏移"
            },
            "_raw": {
              "label": "符号偏移",
              "desc": "\n\n<p>timeline.checkpointStyle 标记相对于原本位置的偏移。默认情况下，标记会居中置放在数据对应的位置，但是如果 symbol 是自定义的矢量路径或者图片，就有可能不希望 symbol 居中。这时候可以使用该配置项配置 symbol 相对于原本居中的偏移，可以是绝对的像素值，也可以是相对的百分比。</p>\n<p>例如 <code class=\"codespan\">[0, &#39;-50%&#39;]</code> 就是把自己向上移动了一半的位置，在 symbol 图形是气泡的时候可以让图形下端的箭头对准数据点。</p>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "timeline.checkpointStyle.color",
              "default": "#316bf3"
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
              "path": "timeline.checkpointStyle.borderColor",
              "default": "#fff"
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
              "path": "timeline.checkpointStyle.borderWidth",
              "default": 2
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
              "path": "timeline.checkpointStyle.borderType",
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
              "path": "timeline.checkpointStyle.borderDashOffset",
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
              "path": "timeline.checkpointStyle.borderCap",
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
              "path": "timeline.checkpointStyle.borderJoin",
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
              "path": "timeline.checkpointStyle.borderMiterLimit",
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
            "type": "ElInput",
            "model": {
              "path": "timeline.checkpointStyle.shadowBlur",
              "default": 2
            },
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
            "model": {
              "path": "timeline.checkpointStyle.shadowColor",
              "default": "rgba(0, 0, 0, 0.3)"
            },
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
              "path": "timeline.checkpointStyle.shadowOffsetX",
              "default": 1
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
              "path": "timeline.checkpointStyle.shadowOffsetY",
              "default": 1
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
              "path": "timeline.checkpointStyle.opacity",
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
            "type": "ElSwitch",
            "model": {
              "path": "timeline.checkpointStyle.animation",
              "default": true
            },
            "props": {
              "placeholder": "动画"
            },
            "_raw": {
              "label": "动画",
              "desc": "\n\n<p><code class=\"codespan\">timeline</code>组件中『当前项』（<code class=\"codespan\">checkpoint</code>）在 <code class=\"codespan\">timeline</code> 播放切换中的移动，是否有动画。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "timeline.checkpointStyle.animationDuration",
              "default": 300
            },
            "props": {
              "placeholder": "动画时长"
            },
            "_raw": {
              "label": "动画时长",
              "desc": "\n\n<p><code class=\"codespan\">timeline</code>组件中『当前项』（<code class=\"codespan\">checkpoint</code>）的动画时长。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "timeline.checkpointStyle.animationEasing",
              "default": "quinticInOut"
            },
            "props": {
              "placeholder": "动画缓动"
            },
            "_raw": {
              "label": "动画缓动",
              "desc": "\n\n<p><code class=\"codespan\">timeline</code>组件中『当前项』（<code class=\"codespan\">checkpoint</code>）的动画的缓动效果。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/view.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
            }
          }
        ]
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "控制样式",
          "name": "controlStyle"
        },
        "children": [
          {
            "type": "ElSwitch",
            "model": {
              "path": "timeline.controlStyle.show",
              "default": true
            },
            "props": {
              "placeholder": "显示"
            },
            "_raw": {
              "label": "显示",
              "desc": "\n\n<p>是否显示『控制按钮』。设置为 <code class=\"codespan\">false</code> 则全不显示。</p>\n"
            }
          },
          {
            "type": "ElSwitch",
            "model": {
              "path": "timeline.controlStyle.showPlayBtn",
              "default": true
            },
            "props": {
              "placeholder": "显示播放按钮"
            },
            "_raw": {
              "label": "显示播放按钮",
              "desc": "\n\n<p>是否显示『播放按钮』。</p>\n"
            }
          },
          {
            "type": "ElSwitch",
            "model": {
              "path": "timeline.controlStyle.showPrevBtn",
              "default": true
            },
            "props": {
              "placeholder": "显示上一个按钮"
            },
            "_raw": {
              "label": "显示上一个按钮",
              "desc": "\n\n<p>是否显示『后退按钮』。</p>\n"
            }
          },
          {
            "type": "ElSwitch",
            "model": {
              "path": "timeline.controlStyle.showNextBtn",
              "default": true
            },
            "props": {
              "placeholder": "显示下一个按钮"
            },
            "_raw": {
              "label": "显示下一个按钮",
              "desc": "\n\n<p>是否显示『前进按钮』。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "timeline.controlStyle.itemSize",
              "default": 24
            },
            "props": {
              "placeholder": "图形大小"
            },
            "_raw": {
              "label": "图形大小",
              "desc": "\n\n<p>『控制按钮』的尺寸，单位为像素（px）。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "timeline.controlStyle.itemGap",
              "default": 12
            },
            "props": {
              "placeholder": "项间隔"
            },
            "_raw": {
              "label": "项间隔",
              "desc": "\n\n<p>『控制按钮』的间隔，单位为像素（px）。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "timeline.controlStyle.position",
              "default": "left"
            },
            "props": {
              "placeholder": "位置"
            },
            "_raw": {
              "label": "位置",
              "desc": "\n\n<p>『控制按钮』的位置。</p>\n<ul>\n<li><p>当 <a href=\"#timeline.orient\">timeline.orient</a> 为 <code class=\"codespan\">&#39;horizontal&#39;</code>时，<code class=\"codespan\">&#39;left&#39;</code>、<code class=\"codespan\">&#39;right&#39;</code>有效。</p>\n</li>\n<li><p>当 <a href=\"#timeline.orient\">timeline.orient</a> 为 <code class=\"codespan\">&#39;vertical&#39;</code>时，<code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;bottom&#39;</code>有效。</p>\n</li>\n</ul>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "timeline.controlStyle.playIcon",
            "props": {
              "placeholder": "播放图标"
            },
            "_raw": {
              "label": "播放图标",
              "desc": "\n\n<p>『播放按钮』的『可播放状态』的图形。</p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
            }
          },
          {
            "type": "ElInput",
            "model": "timeline.controlStyle.stopIcon",
            "props": {
              "placeholder": "停止图标"
            },
            "_raw": {
              "label": "停止图标",
              "desc": "\n\n<p>『播放按钮』的『可停止状态』的图形。</p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
            }
          },
          {
            "type": "ElInput",
            "model": "timeline.controlStyle.prevIcon",
            "props": {
              "placeholder": "上一个图标"
            },
            "_raw": {
              "label": "上一个图标",
              "desc": "\n\n<p>『后退按钮』的图形</p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
            }
          },
          {
            "type": "ElInput",
            "model": "timeline.controlStyle.nextIcon",
            "props": {
              "placeholder": "下一个图标"
            },
            "_raw": {
              "label": "下一个图标",
              "desc": "\n\n<p>『前进按钮』的图形</p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "timeline.controlStyle.color",
              "default": "#A4B1D7"
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
              "path": "timeline.controlStyle.borderColor",
              "default": "#A4B1D7"
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
              "path": "timeline.controlStyle.borderWidth",
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
              "path": "timeline.controlStyle.borderType",
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
              "path": "timeline.controlStyle.borderDashOffset",
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
              "path": "timeline.controlStyle.borderCap",
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
              "path": "timeline.controlStyle.borderJoin",
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
              "path": "timeline.controlStyle.borderMiterLimit",
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
            "model": "timeline.controlStyle.shadowBlur",
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
            "model": "timeline.controlStyle.shadowColor",
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
              "path": "timeline.controlStyle.shadowOffsetX",
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
              "path": "timeline.controlStyle.shadowOffsetY",
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
              "path": "timeline.controlStyle.opacity",
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
          "title": "进度",
          "name": "progress"
        },
        "children": [
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
                  "path": "timeline.progress.lineStyle.color",
                  "default": "#316BF3"
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
                  "path": "timeline.progress.lineStyle.width",
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
                  "path": "timeline.progress.lineStyle.type",
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
                  "path": "timeline.progress.lineStyle.dashOffset",
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
                  "path": "timeline.progress.lineStyle.cap",
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
                  "path": "timeline.progress.lineStyle.join",
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
                  "path": "timeline.progress.lineStyle.miterLimit",
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
                "model": "timeline.progress.lineStyle.shadowBlur",
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
                "model": "timeline.progress.lineStyle.shadowColor",
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
                  "path": "timeline.progress.lineStyle.shadowOffsetX",
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
                  "path": "timeline.progress.lineStyle.shadowOffsetY",
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
                  "path": "timeline.progress.lineStyle.opacity",
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
              "title": "图元样式",
              "name": "itemStyle"
            },
            "children": [
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "timeline.progress.itemStyle.color",
                  "default": "#316BF3"
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
                  "path": "timeline.progress.itemStyle.borderColor",
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
                  "path": "timeline.progress.itemStyle.borderWidth",
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
                  "path": "timeline.progress.itemStyle.borderType",
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
                  "path": "timeline.progress.itemStyle.borderDashOffset",
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
                  "path": "timeline.progress.itemStyle.borderCap",
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
                  "path": "timeline.progress.itemStyle.borderJoin",
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
                  "path": "timeline.progress.itemStyle.borderMiterLimit",
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
                "model": "timeline.progress.itemStyle.shadowBlur",
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
                "model": "timeline.progress.itemStyle.shadowColor",
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
                  "path": "timeline.progress.itemStyle.shadowOffsetX",
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
                  "path": "timeline.progress.itemStyle.shadowOffsetY",
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
                  "path": "timeline.progress.itemStyle.opacity",
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
              "title": "标签",
              "name": "label"
            },
            "children": [
              {
                "type": "ElSwitch",
                "model": {
                  "path": "timeline.progress.label.show",
                  "default": true
                },
                "props": {
                  "placeholder": "显示"
                },
                "_raw": {
                  "label": "显示",
                  "desc": "\n\n<p>是否显示 label。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "timeline.progress.label.interval",
                  "default": "auto"
                },
                "props": {
                  "placeholder": "间隔",
                  "types": [
                    "string",
                    "number"
                  ],
                  "defaultType": "string",
                  "specialKeywords": [
                    "auto"
                  ]
                },
                "_raw": {
                  "label": "间隔",
                  "desc": "<p><code class=\"codespan\">label</code> 的间隔。当指定为数值时，例如指定为 <code class=\"codespan\">2</code>，则每隔两个显示一个 label。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "timeline.progress.label.rotate",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p><code class=\"codespan\">label</code> 的旋转角度。正值表示逆时针旋转。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "timeline.progress.label.formatter",
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
                  "desc": "<p>刻度标签的内容格式器，支持字符串模板和回调函数两种形式。</p>\n<p>示例:</p>\n<pre><code class=\"lang-ts\">// 使用字符串模板，模板变量为刻度默认标签 {value}\nformatter: &#39;{value} kg&#39;\n// 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引\nformatter: function (value, index, extra?) {\n    return value + &#39;kg&#39;;\n}\n</code></pre>\n<hr>\n<p><br></p>\n<hr>\n<p><br></p>\n<p><strong>对于时间轴（<a href=\"#.axisType\"><code class=\"codespan\">.axisType: &#39;time&#39;</code></a>）</strong></p>\n<p><code class=\"codespan\">formatter</code> 的字符串模板支持多种形式：</p>\n<ul>\n<li><strong>字符串模板</strong>：简单快速实现常用日期时间模板，<code class=\"codespan\">string</code> 类型</li>\n<li><strong>回调函数</strong>：自定义 formatter，可以用来实现复杂高级的格式，<code class=\"codespan\">Function</code> 类型</li>\n<li><strong>分级模板</strong>：为不同时间粒度的标签使用不同的 formatter，<code class=\"codespan\">object</code> 类型</li>\n</ul>\n<p>下面我们分别介绍这三种形式。</p>\n<p><strong> 字符串模板 </strong></p>\n<p>使用字符串模板是一种方便实现常用日期时间格式化方式的形式。如果字符串模板可以实现你的效果，那我们优先推荐使用此方式；如果无法实现，再考虑其他两种更复杂的方式。支持的模板如下：</p>\n<table>\n<thead>\n<tr>\n<th>分类</th>\n<th>模板</th>\n<th>取值（英文）</th>\n<th>取值（中文）</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Year</td>\n<td>{yyyy}</td>\n<td>e.g., 2020, 2021, ...</td>\n<td>例：2020, 2021, ...</td>\n</tr>\n<tr>\n<td></td>\n<td>{yy}</td>\n<td>00-99</td>\n<td>00-99</td>\n</tr>\n<tr>\n<td>Quarter</td>\n<td>{Q}</td>\n<td>1, 2, 3, 4</td>\n<td>1, 2, 3, 4</td>\n</tr>\n<tr>\n<td>Month</td>\n<td>{MMMM}</td>\n<td>e.g., January, February, ...</td>\n<td>一月、二月、……</td>\n</tr>\n<tr>\n<td></td>\n<td>{MMM}</td>\n<td>e.g., Jan, Feb, ...</td>\n<td>1月、2月、……</td>\n</tr>\n<tr>\n<td></td>\n<td>{MM}</td>\n<td>01-12</td>\n<td>01-12</td>\n</tr>\n<tr>\n<td></td>\n<td>{M}</td>\n<td>1-12</td>\n<td>1-12</td>\n</tr>\n<tr>\n<td>Day of Month</td>\n<td>{dd}</td>\n<td>01-31</td>\n<td>01-31</td>\n</tr>\n<tr>\n<td></td>\n<td>{d}</td>\n<td>1-31</td>\n<td>1-31</td>\n</tr>\n<tr>\n<td>Day of Week</td>\n<td>{eeee}</td>\n<td>Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday</td>\n<td>星期日、星期一、星期二、星期三、星期四、星期五、星期六</td>\n</tr>\n<tr>\n<td></td>\n<td>{ee}</td>\n<td>Sun, Mon, Tues, Wed, Thu, Fri, Sat</td>\n<td>日、一、二、三、四、五、六</td>\n</tr>\n<tr>\n<td></td>\n<td>{e}</td>\n<td>1-54</td>\n<td>1-54</td>\n</tr>\n<tr>\n<td>Hour</td>\n<td>{HH}</td>\n<td>00-23</td>\n<td>00-23</td>\n</tr>\n<tr>\n<td></td>\n<td>{H}</td>\n<td>0-23</td>\n<td>0-23</td>\n</tr>\n<tr>\n<td></td>\n<td>{hh}</td>\n<td>01-12</td>\n<td>01-12</td>\n</tr>\n<tr>\n<td></td>\n<td>{h}</td>\n<td>1-12</td>\n<td>1-12</td>\n</tr>\n<tr>\n<td>Minute</td>\n<td>{mm}</td>\n<td>00-59</td>\n<td>00-59</td>\n</tr>\n<tr>\n<td></td>\n<td>{m}</td>\n<td>0-59</td>\n<td>0-59</td>\n</tr>\n<tr>\n<td>Second</td>\n<td>{ss}</td>\n<td>00-59</td>\n<td>00-59</td>\n</tr>\n<tr>\n<td></td>\n<td>{s}</td>\n<td>0-59</td>\n<td>0-59</td>\n</tr>\n<tr>\n<td>Millisecond</td>\n<td>{SSS}</td>\n<td>000-999</td>\n<td>000-999</td>\n</tr>\n<tr>\n<td></td>\n<td>{S}</td>\n<td>0-999</td>\n<td>0-999</td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>其他语言请参考相应<a href=\"https://github.com/apache/echarts/tree/master/src/i18n\" target=\"_blank\">语言包</a>中的定义，语言包可以通过 <a href=\"api.html#echarts.registerLocale\" target=\"_blank\">echarts.registerLocale</a> 注册。</p>\n</blockquote>\n<p>示例:</p>\n<pre><code class=\"lang-ts\">formatter: &#39;{yyyy}-{MM}-{dd}&#39; // 得到的 label 形如：&#39;2020-12-02&#39;\nformatter: &#39;{d}日&#39; // 得到的 label 形如：&#39;2日&#39;\n</code></pre>\n<p><strong> 回调函数 </strong></p>\n<p>回调函数可以根据刻度值返回不同的格式，如果有复杂的时间格式化需求，也可以引用第三方的日期时间相关的库（如 <a href=\"https://momentjs.com/\" target=\"_blank\">Moment.js</a>、<a href=\"https://date-fns.org/\" target=\"_blank\">date-fns</a> 等），返回显示的文本。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">// 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引\nformatter: function (value, index) {\n    // 格式化成月/日，只在第一个刻度显示年份\n    var date = new Date(value);\n    var texts = [(date.getMonth() + 1), date.getDate()];\n    if (index === 0) {\n        texts.unshift(date.getFullYear());\n    }\n    return texts.join(&#39;/&#39;);\n}\n\n// 另外，`echarts.time.format` 也可以被使用：\nformatter: function (value, index) {\n    // 时间模版的规则如上描述。\n    const timeStrLocal = echarts.time.format(value, &#39;{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}&#39;);\n    // 第三个参数表示，基于 UTC 解析时间。\n    const timeStrUTC = echarts.time.format(value, &#39;{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}&#39;, true);\n    // 注意：如果使用 UTC，https://echarts.apache.org/zh/option.html#useUTC 也要设置为 `true`，保持一致。\n    return timeStrLocal;\n}\n</code></pre>\n<p><strong> 分级模板 </strong></p>\n<p>有时候，我们希望对不同的时间粒度采用不同的格式化策略。例如，在季度图表中，我们可能希望对每个月的第一天显示月份，而其他日期显示日期。我们可以使用以下方式实现该效果：</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">formatter: {\n    month: &#39;{MMMM}&#39;, // 一月、二月、……\n    day: &#39;{d}日&#39; // 1日、2日、……\n}\n</code></pre>\n<p>支持的分级以及各自默认的取值为：</p>\n<pre><code class=\"lang-ts\">{\n    year: &#39;{yyyy}&#39;,\n    month: &#39;{MMM}&#39;,\n    day: &#39;{d}&#39;,\n    hour: &#39;{HH}:{mm}&#39;,\n    minute: &#39;{HH}:{mm}&#39;,\n    second: &#39;{HH}:{mm}:{ss}&#39;,\n    millisecond: &#39;{hh}:{mm}:{ss} {SSS}&#39;,\n    none: &#39;{yyyy}-{MM}-{dd} {hh}:{mm}:{ss} {SSS}&#39;\n}\n</code></pre>\n<p>以 <code class=\"codespan\">day</code> 为例，当一个刻度点的值的小时、分钟、秒、毫秒都为 <code class=\"codespan\">0</code> 时，将采用 <code class=\"codespan\">day</code> 的分级值作为模板。<code class=\"codespan\">none</code> 表示当其他规则都不适用时采用的模板，也就是带有毫秒值的刻度点的模板。</p>\n<p><strong> 富文本 </strong></p>\n<p>以上这三种形式的 formatter 都支持富文本，所以可以做成一些复杂的效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">xAxis: {\n    type: &#39;time&#39;,\n    axisLabel: {\n        formatter: {\n            // 一年的第一个月显示年度信息和月份信息\n            year: &#39;{yearStyle|{yyyy}}\\n{monthStyle|{MMM}}&#39;,\n            month: &#39;{monthStyle|{MMM}}&#39;\n        },\n        rich: {\n            yearStyle: {\n                // 让年度信息更醒目\n                color: &#39;#000&#39;,\n                fontWeight: &#39;bold&#39;\n            },\n            monthStyle: {\n                color: &#39;#999&#39;\n            }\n        }\n    }\n},\n</code></pre>\n<p>使用回调函数形式实现上面例子同样的效果：</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">xAxis: {\n    type: &#39;time&#39;,\n    axisLabel: {\n        formatter: function (value) {\n            const date = new Date(value);\n            const yearStart = new Date(value);\n            yearStart.setMonth(0);\n            yearStart.setDate(1);\n            yearStart.setHours(0);\n            yearStart.setMinutes(0);\n            yearStart.setSeconds(0);\n            yearStart.setMilliseconds(0);\n            // 判断一个刻度值知否为一年的开始\n            if (date.getTime() === yearStart.getTime()) {\n                return &#39;{year|&#39; + date.getFullYear() + &#39;}\\n&#39;\n                    + &#39;{month|&#39; + (date.getMonth() + 1) + &#39;月}&#39;;\n            }\n            else {\n                return &#39;{month|&#39; + (date.getMonth() + 1) + &#39;月}&#39;\n            }\n        },\n        rich: {\n            year: {\n                color: &#39;#000&#39;,\n                fontWeight: &#39;bold&#39;\n            },\n            month: {\n                color: &#39;#999&#39;\n            }\n        }\n    }\n},\n</code></pre>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "timeline.progress.label.color",
                  "default": "#6f778d"
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
                  "desc": "\n\n<p>timeline.lable文字的颜色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "timeline.progress.label.fontStyle",
                  "default": "normal"
                },
                "props": {
                  "placeholder": "字体样式"
                },
                "_raw": {
                  "label": "字体样式",
                  "desc": "\n\n<p>timeline.lable文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "timeline.progress.label.fontWeight",
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
                  "desc": "\n\n<p>timeline.lable文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "timeline.progress.label.fontFamily",
                  "default": "sans-serif"
                },
                "props": {
                  "placeholder": "字体"
                },
                "_raw": {
                  "label": "字体",
                  "desc": "\n\n<p>timeline.lable文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "timeline.progress.label.fontSize",
                  "default": 12
                },
                "props": {
                  "placeholder": "字体大小"
                },
                "_raw": {
                  "label": "字体大小",
                  "desc": "\n\n<p>timeline.lable文字的字体大小。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "timeline.progress.label.align",
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
                "model": "timeline.progress.label.verticalAlign",
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
                "model": "timeline.progress.label.lineHeight",
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
                  "path": "timeline.progress.label.backgroundColor",
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
                  "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-ts\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": "timeline.progress.label.borderColor",
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
                  "desc": "\n\n<p>文字块边框颜色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "timeline.progress.label.borderWidth",
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
                  "path": "timeline.progress.label.borderType",
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
                  "path": "timeline.progress.label.borderDashOffset",
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
                  "path": "timeline.progress.label.borderRadius",
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
                  "path": "timeline.progress.label.padding",
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
                  "path": "timeline.progress.label.shadowColor",
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
                  "path": "timeline.progress.label.shadowBlur",
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
                  "path": "timeline.progress.label.shadowOffsetX",
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
                  "path": "timeline.progress.label.shadowOffsetY",
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
                "model": "timeline.progress.label.width",
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
                "model": "timeline.progress.label.height",
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
                "model": "timeline.progress.label.textBorderColor",
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
                "model": "timeline.progress.label.textBorderWidth",
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
                  "path": "timeline.progress.label.textBorderType",
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
                  "path": "timeline.progress.label.textBorderDashOffset",
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
                  "path": "timeline.progress.label.textShadowColor",
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
                  "path": "timeline.progress.label.textShadowBlur",
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
                  "path": "timeline.progress.label.textShadowOffsetX",
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
                  "path": "timeline.progress.label.textShadowOffsetY",
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
                  "path": "timeline.progress.label.overflow",
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
                  "path": "timeline.progress.label.ellipsis",
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
            "type": "ElCollapseItem",
            "props": {
              "title": "标签",
              "name": "label"
            },
            "children": [
              {
                "type": "ElSwitch",
                "model": {
                  "path": "timeline.emphasis.label.show",
                  "default": true
                },
                "props": {
                  "placeholder": "显示"
                },
                "_raw": {
                  "label": "显示",
                  "desc": "\n\n<p>是否显示 label。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "timeline.emphasis.label.interval",
                  "default": "auto"
                },
                "props": {
                  "placeholder": "间隔",
                  "types": [
                    "string",
                    "number"
                  ],
                  "defaultType": "string",
                  "specialKeywords": [
                    "auto"
                  ]
                },
                "_raw": {
                  "label": "间隔",
                  "desc": "<p><code class=\"codespan\">label</code> 的间隔。当指定为数值时，例如指定为 <code class=\"codespan\">2</code>，则每隔两个显示一个 label。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "timeline.emphasis.label.rotate",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p><code class=\"codespan\">label</code> 的旋转角度。正值表示逆时针旋转。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "timeline.emphasis.label.formatter",
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
                  "desc": "<p>刻度标签的内容格式器，支持字符串模板和回调函数两种形式。</p>\n<p>示例:</p>\n<pre><code class=\"lang-ts\">// 使用字符串模板，模板变量为刻度默认标签 {value}\nformatter: &#39;{value} kg&#39;\n// 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引\nformatter: function (value, index, extra?) {\n    return value + &#39;kg&#39;;\n}\n</code></pre>\n<hr>\n<p><br></p>\n<hr>\n<p><br></p>\n<p><strong>对于时间轴（<a href=\"#.axisType\"><code class=\"codespan\">.axisType: &#39;time&#39;</code></a>）</strong></p>\n<p><code class=\"codespan\">formatter</code> 的字符串模板支持多种形式：</p>\n<ul>\n<li><strong>字符串模板</strong>：简单快速实现常用日期时间模板，<code class=\"codespan\">string</code> 类型</li>\n<li><strong>回调函数</strong>：自定义 formatter，可以用来实现复杂高级的格式，<code class=\"codespan\">Function</code> 类型</li>\n<li><strong>分级模板</strong>：为不同时间粒度的标签使用不同的 formatter，<code class=\"codespan\">object</code> 类型</li>\n</ul>\n<p>下面我们分别介绍这三种形式。</p>\n<p><strong> 字符串模板 </strong></p>\n<p>使用字符串模板是一种方便实现常用日期时间格式化方式的形式。如果字符串模板可以实现你的效果，那我们优先推荐使用此方式；如果无法实现，再考虑其他两种更复杂的方式。支持的模板如下：</p>\n<table>\n<thead>\n<tr>\n<th>分类</th>\n<th>模板</th>\n<th>取值（英文）</th>\n<th>取值（中文）</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Year</td>\n<td>{yyyy}</td>\n<td>e.g., 2020, 2021, ...</td>\n<td>例：2020, 2021, ...</td>\n</tr>\n<tr>\n<td></td>\n<td>{yy}</td>\n<td>00-99</td>\n<td>00-99</td>\n</tr>\n<tr>\n<td>Quarter</td>\n<td>{Q}</td>\n<td>1, 2, 3, 4</td>\n<td>1, 2, 3, 4</td>\n</tr>\n<tr>\n<td>Month</td>\n<td>{MMMM}</td>\n<td>e.g., January, February, ...</td>\n<td>一月、二月、……</td>\n</tr>\n<tr>\n<td></td>\n<td>{MMM}</td>\n<td>e.g., Jan, Feb, ...</td>\n<td>1月、2月、……</td>\n</tr>\n<tr>\n<td></td>\n<td>{MM}</td>\n<td>01-12</td>\n<td>01-12</td>\n</tr>\n<tr>\n<td></td>\n<td>{M}</td>\n<td>1-12</td>\n<td>1-12</td>\n</tr>\n<tr>\n<td>Day of Month</td>\n<td>{dd}</td>\n<td>01-31</td>\n<td>01-31</td>\n</tr>\n<tr>\n<td></td>\n<td>{d}</td>\n<td>1-31</td>\n<td>1-31</td>\n</tr>\n<tr>\n<td>Day of Week</td>\n<td>{eeee}</td>\n<td>Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday</td>\n<td>星期日、星期一、星期二、星期三、星期四、星期五、星期六</td>\n</tr>\n<tr>\n<td></td>\n<td>{ee}</td>\n<td>Sun, Mon, Tues, Wed, Thu, Fri, Sat</td>\n<td>日、一、二、三、四、五、六</td>\n</tr>\n<tr>\n<td></td>\n<td>{e}</td>\n<td>1-54</td>\n<td>1-54</td>\n</tr>\n<tr>\n<td>Hour</td>\n<td>{HH}</td>\n<td>00-23</td>\n<td>00-23</td>\n</tr>\n<tr>\n<td></td>\n<td>{H}</td>\n<td>0-23</td>\n<td>0-23</td>\n</tr>\n<tr>\n<td></td>\n<td>{hh}</td>\n<td>01-12</td>\n<td>01-12</td>\n</tr>\n<tr>\n<td></td>\n<td>{h}</td>\n<td>1-12</td>\n<td>1-12</td>\n</tr>\n<tr>\n<td>Minute</td>\n<td>{mm}</td>\n<td>00-59</td>\n<td>00-59</td>\n</tr>\n<tr>\n<td></td>\n<td>{m}</td>\n<td>0-59</td>\n<td>0-59</td>\n</tr>\n<tr>\n<td>Second</td>\n<td>{ss}</td>\n<td>00-59</td>\n<td>00-59</td>\n</tr>\n<tr>\n<td></td>\n<td>{s}</td>\n<td>0-59</td>\n<td>0-59</td>\n</tr>\n<tr>\n<td>Millisecond</td>\n<td>{SSS}</td>\n<td>000-999</td>\n<td>000-999</td>\n</tr>\n<tr>\n<td></td>\n<td>{S}</td>\n<td>0-999</td>\n<td>0-999</td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>其他语言请参考相应<a href=\"https://github.com/apache/echarts/tree/master/src/i18n\" target=\"_blank\">语言包</a>中的定义，语言包可以通过 <a href=\"api.html#echarts.registerLocale\" target=\"_blank\">echarts.registerLocale</a> 注册。</p>\n</blockquote>\n<p>示例:</p>\n<pre><code class=\"lang-ts\">formatter: &#39;{yyyy}-{MM}-{dd}&#39; // 得到的 label 形如：&#39;2020-12-02&#39;\nformatter: &#39;{d}日&#39; // 得到的 label 形如：&#39;2日&#39;\n</code></pre>\n<p><strong> 回调函数 </strong></p>\n<p>回调函数可以根据刻度值返回不同的格式，如果有复杂的时间格式化需求，也可以引用第三方的日期时间相关的库（如 <a href=\"https://momentjs.com/\" target=\"_blank\">Moment.js</a>、<a href=\"https://date-fns.org/\" target=\"_blank\">date-fns</a> 等），返回显示的文本。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">// 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引\nformatter: function (value, index) {\n    // 格式化成月/日，只在第一个刻度显示年份\n    var date = new Date(value);\n    var texts = [(date.getMonth() + 1), date.getDate()];\n    if (index === 0) {\n        texts.unshift(date.getFullYear());\n    }\n    return texts.join(&#39;/&#39;);\n}\n\n// 另外，`echarts.time.format` 也可以被使用：\nformatter: function (value, index) {\n    // 时间模版的规则如上描述。\n    const timeStrLocal = echarts.time.format(value, &#39;{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}&#39;);\n    // 第三个参数表示，基于 UTC 解析时间。\n    const timeStrUTC = echarts.time.format(value, &#39;{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}&#39;, true);\n    // 注意：如果使用 UTC，https://echarts.apache.org/zh/option.html#useUTC 也要设置为 `true`，保持一致。\n    return timeStrLocal;\n}\n</code></pre>\n<p><strong> 分级模板 </strong></p>\n<p>有时候，我们希望对不同的时间粒度采用不同的格式化策略。例如，在季度图表中，我们可能希望对每个月的第一天显示月份，而其他日期显示日期。我们可以使用以下方式实现该效果：</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">formatter: {\n    month: &#39;{MMMM}&#39;, // 一月、二月、……\n    day: &#39;{d}日&#39; // 1日、2日、……\n}\n</code></pre>\n<p>支持的分级以及各自默认的取值为：</p>\n<pre><code class=\"lang-ts\">{\n    year: &#39;{yyyy}&#39;,\n    month: &#39;{MMM}&#39;,\n    day: &#39;{d}&#39;,\n    hour: &#39;{HH}:{mm}&#39;,\n    minute: &#39;{HH}:{mm}&#39;,\n    second: &#39;{HH}:{mm}:{ss}&#39;,\n    millisecond: &#39;{hh}:{mm}:{ss} {SSS}&#39;,\n    none: &#39;{yyyy}-{MM}-{dd} {hh}:{mm}:{ss} {SSS}&#39;\n}\n</code></pre>\n<p>以 <code class=\"codespan\">day</code> 为例，当一个刻度点的值的小时、分钟、秒、毫秒都为 <code class=\"codespan\">0</code> 时，将采用 <code class=\"codespan\">day</code> 的分级值作为模板。<code class=\"codespan\">none</code> 表示当其他规则都不适用时采用的模板，也就是带有毫秒值的刻度点的模板。</p>\n<p><strong> 富文本 </strong></p>\n<p>以上这三种形式的 formatter 都支持富文本，所以可以做成一些复杂的效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">xAxis: {\n    type: &#39;time&#39;,\n    axisLabel: {\n        formatter: {\n            // 一年的第一个月显示年度信息和月份信息\n            year: &#39;{yearStyle|{yyyy}}\\n{monthStyle|{MMM}}&#39;,\n            month: &#39;{monthStyle|{MMM}}&#39;\n        },\n        rich: {\n            yearStyle: {\n                // 让年度信息更醒目\n                color: &#39;#000&#39;,\n                fontWeight: &#39;bold&#39;\n            },\n            monthStyle: {\n                color: &#39;#999&#39;\n            }\n        }\n    }\n},\n</code></pre>\n<p>使用回调函数形式实现上面例子同样的效果：</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">xAxis: {\n    type: &#39;time&#39;,\n    axisLabel: {\n        formatter: function (value) {\n            const date = new Date(value);\n            const yearStart = new Date(value);\n            yearStart.setMonth(0);\n            yearStart.setDate(1);\n            yearStart.setHours(0);\n            yearStart.setMinutes(0);\n            yearStart.setSeconds(0);\n            yearStart.setMilliseconds(0);\n            // 判断一个刻度值知否为一年的开始\n            if (date.getTime() === yearStart.getTime()) {\n                return &#39;{year|&#39; + date.getFullYear() + &#39;}\\n&#39;\n                    + &#39;{month|&#39; + (date.getMonth() + 1) + &#39;月}&#39;;\n            }\n            else {\n                return &#39;{month|&#39; + (date.getMonth() + 1) + &#39;月}&#39;\n            }\n        },\n        rich: {\n            year: {\n                color: &#39;#000&#39;,\n                fontWeight: &#39;bold&#39;\n            },\n            month: {\n                color: &#39;#999&#39;\n            }\n        }\n    }\n},\n</code></pre>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "timeline.emphasis.label.color",
                  "default": "#6f778d"
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
                  "desc": "\n\n<p>timeline.lable.emphasis文字的颜色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "timeline.emphasis.label.fontStyle",
                  "default": "normal"
                },
                "props": {
                  "placeholder": "字体样式"
                },
                "_raw": {
                  "label": "字体样式",
                  "desc": "\n\n<p>timeline.lable.emphasis文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "timeline.emphasis.label.fontWeight",
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
                  "desc": "\n\n<p>timeline.lable.emphasis文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "timeline.emphasis.label.fontFamily",
                  "default": "sans-serif"
                },
                "props": {
                  "placeholder": "字体"
                },
                "_raw": {
                  "label": "字体",
                  "desc": "\n\n<p>timeline.lable.emphasis文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "timeline.emphasis.label.fontSize",
                  "default": 12
                },
                "props": {
                  "placeholder": "字体大小"
                },
                "_raw": {
                  "label": "字体大小",
                  "desc": "\n\n<p>timeline.lable.emphasis文字的字体大小。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "timeline.emphasis.label.align",
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
                "model": "timeline.emphasis.label.verticalAlign",
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
                "model": "timeline.emphasis.label.lineHeight",
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
                  "path": "timeline.emphasis.label.backgroundColor",
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
                  "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-ts\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": "timeline.emphasis.label.borderColor",
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
                  "desc": "\n\n<p>文字块边框颜色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "timeline.emphasis.label.borderWidth",
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
                  "path": "timeline.emphasis.label.borderType",
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
                  "path": "timeline.emphasis.label.borderDashOffset",
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
                  "path": "timeline.emphasis.label.borderRadius",
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
                  "path": "timeline.emphasis.label.padding",
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
                  "path": "timeline.emphasis.label.shadowColor",
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
                  "path": "timeline.emphasis.label.shadowBlur",
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
                  "path": "timeline.emphasis.label.shadowOffsetX",
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
                  "path": "timeline.emphasis.label.shadowOffsetY",
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
                "model": "timeline.emphasis.label.width",
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
                "model": "timeline.emphasis.label.height",
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
                "model": "timeline.emphasis.label.textBorderColor",
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
                "model": "timeline.emphasis.label.textBorderWidth",
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
                  "path": "timeline.emphasis.label.textBorderType",
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
                  "path": "timeline.emphasis.label.textBorderDashOffset",
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
                  "path": "timeline.emphasis.label.textShadowColor",
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
                  "path": "timeline.emphasis.label.textShadowBlur",
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
                  "path": "timeline.emphasis.label.textShadowOffsetX",
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
                  "path": "timeline.emphasis.label.textShadowOffsetY",
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
                  "path": "timeline.emphasis.label.overflow",
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
                  "path": "timeline.emphasis.label.ellipsis",
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
                  "path": "timeline.emphasis.itemStyle.color",
                  "default": "#316BF3"
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
                  "desc": "\n\n<p>timeline 图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "timeline.emphasis.itemStyle.borderColor",
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
                  "desc": "\n\n<p>timeline 图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "timeline.emphasis.itemStyle.borderWidth",
                  "default": 1
                },
                "props": {
                  "placeholder": "边框宽度"
                },
                "_raw": {
                  "label": "边框宽度",
                  "desc": "\n\n<p>timeline 描边线宽。为 0 时无描边。</p>\n"
                }
              },
              {
                "type": "SmartStyleSelect",
                "model": {
                  "path": "timeline.emphasis.itemStyle.borderType",
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
                  "desc": "\n\n\n<p>timeline 描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">borderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "timeline.emphasis.itemStyle.borderDashOffset",
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
                  "path": "timeline.emphasis.itemStyle.borderCap",
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
                  "path": "timeline.emphasis.itemStyle.borderJoin",
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
                  "path": "timeline.emphasis.itemStyle.borderMiterLimit",
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
                "model": "timeline.emphasis.itemStyle.shadowBlur",
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
                "model": "timeline.emphasis.itemStyle.shadowColor",
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
                  "path": "timeline.emphasis.itemStyle.shadowOffsetX",
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
                  "path": "timeline.emphasis.itemStyle.shadowOffsetY",
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
                  "path": "timeline.emphasis.itemStyle.opacity",
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
            "type": "ElInput",
            "model": "timeline.emphasis.checkpointStyle",
            "props": {
              "placeholder": "检查点样式"
            },
            "_raw": {
              "label": "检查点样式",
              "desc": "<p>当前项『高亮状态』的样式（hover时）。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "timeline.emphasis.controlStyle",
            "props": {
              "placeholder": "控制样式"
            },
            "_raw": {
              "label": "控制样式",
              "desc": "<p>控制按钮的『高亮状态』的样式（hover时）。</p>\n"
            }
          }
        ]
      },
      {
        "type": "ElInput",
        "model": "timeline.data",
        "props": {
          "placeholder": "数据"
        },
        "_raw": {
          "label": "数据",
          "desc": "<p><code class=\"codespan\">timeline</code> 数据。<code class=\"codespan\">Array</code> 的每一项，可以是直接的数值。\n如果需要对每个数据项单独进行样式定义，则数据项写成 <code class=\"codespan\">Object</code>。<code class=\"codespan\">Object</code>中，<code class=\"codespan\">value</code>属性为数值。其他属性如下例子，可以覆盖 <code class=\"codespan\">timeline</code> 中的属性配置。</p>\n<p>如下例：</p>\n<pre><code class=\"lang-javascript\">[\n    &#39;2002-01-01&#39;,\n    &#39;2003-01-01&#39;,\n    &#39;2004-01-01&#39;,\n    {\n        value: &#39;2005-01-01&#39;,\n        tooltip: {          // 让鼠标悬浮到此项时能够显示 `tooltip`。\n            formatter: &#39;{b} xxxx&#39;\n        },\n        symbol: &#39;diamond&#39;,  // 此项的图形的特别设置。\n        symbolSize: 16      // 此项的图形大小的特别设置。\n    },\n    &#39;2006-01-01&#39;,\n    &#39;2007-01-01&#39;,\n    &#39;2008-01-01&#39;,\n    &#39;2009-01-01&#39;,\n    &#39;2010-01-01&#39;,\n    {\n        value: &#39;2011-01-01&#39;,\n        tooltip: {          // 让鼠标悬浮到此项时能够显示 `tooltip`。\n            formatter: function (params) {\n                return params.name + &#39;xxxx&#39;;\n            }\n        },\n        symbol: &#39;diamond&#39;,\n        symbolSize: 18\n    },\n]\n</code></pre>\n"
        }
      }
    ]
  }
];
