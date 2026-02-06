export default [
  {
    "type": "ElCollapseItem",
    "props": {
      "title": "滑块",
      "name": "slider"
    },
    "children": [
      {
        "type": "ElInput",
        "model": {
          "path": "dataZoom.slider.type",
          "default": "slider"
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
        "model": "dataZoom.slider.id",
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
          "path": "dataZoom.slider.show",
          "default": true
        },
        "props": {
          "placeholder": "显示"
        },
        "_raw": {
          "label": "显示",
          "desc": "\n\n<p>是否显示  组件。如果设置为 <code class=\"codespan\">false</code>，不会显示，但是数据过滤的功能还存在。</p>\n"
        }
      },
      {
        "type": "SmartColorInput",
        "model": {
          "path": "dataZoom.slider.backgroundColor",
          "default": "rgba(47,69,84,0)"
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
          "desc": "\n\n<p>组件的背景颜色。</p>\n"
        }
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "数据背景",
          "name": "dataBackground"
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
                  "path": "dataZoom.slider.dataBackground.lineStyle.color",
                  "default": "#d2dbee"
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
                  "path": "dataZoom.slider.dataBackground.lineStyle.width",
                  "default": 0.5
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
                  "path": "dataZoom.slider.dataBackground.lineStyle.type",
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
                  "path": "dataZoom.slider.dataBackground.lineStyle.dashOffset",
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
                  "path": "dataZoom.slider.dataBackground.lineStyle.cap",
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
                  "path": "dataZoom.slider.dataBackground.lineStyle.join",
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
                  "path": "dataZoom.slider.dataBackground.lineStyle.miterLimit",
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
                "model": "dataZoom.slider.dataBackground.lineStyle.shadowBlur",
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
                "model": "dataZoom.slider.dataBackground.lineStyle.shadowColor",
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
                  "path": "dataZoom.slider.dataBackground.lineStyle.shadowOffsetX",
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
                  "path": "dataZoom.slider.dataBackground.lineStyle.shadowOffsetY",
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
                  "path": "dataZoom.slider.dataBackground.lineStyle.opacity",
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
              "title": "区域样式",
              "name": "areaStyle"
            },
            "children": [
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "dataZoom.slider.dataBackground.areaStyle.color",
                  "default": "#d2dbee"
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
                  "desc": "\n\n<p>填充的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "dataZoom.slider.dataBackground.areaStyle.shadowBlur",
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
                "model": "dataZoom.slider.dataBackground.areaStyle.shadowColor",
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
                  "path": "dataZoom.slider.dataBackground.areaStyle.shadowOffsetX",
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
                  "path": "dataZoom.slider.dataBackground.areaStyle.shadowOffsetY",
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
                  "path": "dataZoom.slider.dataBackground.areaStyle.opacity",
                  "default": 0.2
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
          "title": "选中数据背景",
          "name": "selectedDataBackground"
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
                  "path": "dataZoom.slider.selectedDataBackground.lineStyle.color",
                  "default": "#8fb0f7"
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
                  "path": "dataZoom.slider.selectedDataBackground.lineStyle.width",
                  "default": 0.5
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
                  "path": "dataZoom.slider.selectedDataBackground.lineStyle.type",
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
                  "path": "dataZoom.slider.selectedDataBackground.lineStyle.dashOffset",
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
                  "path": "dataZoom.slider.selectedDataBackground.lineStyle.cap",
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
                  "path": "dataZoom.slider.selectedDataBackground.lineStyle.join",
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
                  "path": "dataZoom.slider.selectedDataBackground.lineStyle.miterLimit",
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
                "model": "dataZoom.slider.selectedDataBackground.lineStyle.shadowBlur",
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
                "model": "dataZoom.slider.selectedDataBackground.lineStyle.shadowColor",
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
                  "path": "dataZoom.slider.selectedDataBackground.lineStyle.shadowOffsetX",
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
                  "path": "dataZoom.slider.selectedDataBackground.lineStyle.shadowOffsetY",
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
                  "path": "dataZoom.slider.selectedDataBackground.lineStyle.opacity",
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
              "title": "区域样式",
              "name": "areaStyle"
            },
            "children": [
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "dataZoom.slider.selectedDataBackground.areaStyle.color",
                  "default": "#8fb0f7"
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
                  "desc": "\n\n<p>填充的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "dataZoom.slider.selectedDataBackground.areaStyle.shadowBlur",
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
                "model": "dataZoom.slider.selectedDataBackground.areaStyle.shadowColor",
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
                  "path": "dataZoom.slider.selectedDataBackground.areaStyle.shadowOffsetX",
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
                  "path": "dataZoom.slider.selectedDataBackground.areaStyle.shadowOffsetY",
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
                  "path": "dataZoom.slider.selectedDataBackground.areaStyle.opacity",
                  "default": 0.2
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
        "type": "SmartColorInput",
        "model": {
          "path": "dataZoom.slider.fillerColor",
          "default": "rgba(167,183,204,0.4)"
        },
        "props": {
          "placeholder": "填充颜色",
          "keywords": [
            "inherit",
            "none",
            "transparent"
          ],
          "allowInherit": true
        },
        "_raw": {
          "label": "填充颜色",
          "desc": "\n\n<p>选中范围的填充颜色。</p>\n"
        }
      },
      {
        "type": "SmartColorInput",
        "model": {
          "path": "dataZoom.slider.borderColor",
          "default": "#d2dbee"
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
          "desc": "\n\n<p>边框颜色。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "dataZoom.slider.borderRadius",
          "default": 3
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
          "desc": "\n\n<p>圆角半径，单位px，支持传入数组分别指定 4 个圆角半径。\n如:</p>\n<pre><code>borderRadius: 5, // 统一设置四个角的圆角大小\nborderRadius: [5, 5, 0, 0] //（顺时针左上，右上，右下，左下）\n</code></pre>"
        }
      },
      {
        "type": "ElInput",
        "model": "dataZoom.slider.handleIcon",
        "props": {
          "placeholder": "手柄图标"
        },
        "_raw": {
          "label": "手柄图标",
          "desc": "\n\n<p>两侧缩放手柄的 icon 形状，支持路径字符串，默认为：</p>\n<pre><code class=\"lang-ts\">&#39;M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z&#39;\n</code></pre>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "dataZoom.slider.handleSize",
          "default": "100%"
        },
        "props": {
          "placeholder": "手柄尺寸",
          "types": [
            "number",
            "string"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "手柄尺寸",
          "desc": "\n\n<p>控制手柄的尺寸，可以是像素大小，也可以是相对于 dataZoom 组件宽度的百分比，默认跟 dataZoom 宽度相同。</p>\n"
        }
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "手柄样式",
          "name": "handleStyle"
        },
        "children": [
          {
            "type": "SmartColorInput",
            "model": {
              "path": "dataZoom.slider.handleStyle.color",
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
              "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "dataZoom.slider.handleStyle.borderColor",
              "default": "#ACB8D1"
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
              "path": "dataZoom.slider.handleStyle.borderWidth",
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
              "path": "dataZoom.slider.handleStyle.borderType",
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
              "path": "dataZoom.slider.handleStyle.borderDashOffset",
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
              "path": "dataZoom.slider.handleStyle.borderCap",
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
              "path": "dataZoom.slider.handleStyle.borderJoin",
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
              "path": "dataZoom.slider.handleStyle.borderMiterLimit",
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
            "model": "dataZoom.slider.handleStyle.shadowBlur",
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
            "model": "dataZoom.slider.handleStyle.shadowColor",
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
              "path": "dataZoom.slider.handleStyle.shadowOffsetX",
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
              "path": "dataZoom.slider.handleStyle.shadowOffsetY",
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
              "path": "dataZoom.slider.handleStyle.opacity",
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
          "title": "手柄标签",
          "name": "handleLabel"
        },
        "children": [
          {
            "type": "ElSwitch",
            "model": {
              "path": "dataZoom.slider.handleLabel.show",
              "default": false
            },
            "props": {
              "placeholder": "显示"
            },
            "_raw": {
              "label": "显示",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.6.0</code> 开始支持\n\n</div>\n\n\n\n<p>是否显示文字。</p>\n"
            }
          }
        ]
      },
      {
        "type": "ElInput",
        "model": "dataZoom.slider.moveHandleIcon",
        "props": {
          "placeholder": "移动手柄图标"
        },
        "_raw": {
          "label": "移动手柄图标",
          "desc": "\n\n\n\n<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>移动手柄中间的 icon，支持路径字符串，默认为：</p>\n<pre><code class=\"lang-ts\">&#39;M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z&#39;\n</code></pre>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "dataZoom.slider.moveHandleSize",
          "default": 7
        },
        "props": {
          "placeholder": "移动手柄尺寸"
        },
        "_raw": {
          "label": "移动手柄尺寸",
          "desc": "\n\n\n\n<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>移动手柄的尺寸高度。</p>\n"
        }
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "移动手柄样式",
          "name": "moveHandleStyle"
        },
        "children": [
          {
            "type": "SmartColorInput",
            "model": {
              "path": "dataZoom.slider.moveHandleStyle.color",
              "default": "#D2DBEE"
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
              "path": "dataZoom.slider.moveHandleStyle.borderColor",
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
              "path": "dataZoom.slider.moveHandleStyle.borderWidth",
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
              "path": "dataZoom.slider.moveHandleStyle.borderType",
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
              "path": "dataZoom.slider.moveHandleStyle.borderDashOffset",
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
              "path": "dataZoom.slider.moveHandleStyle.borderCap",
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
              "path": "dataZoom.slider.moveHandleStyle.borderJoin",
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
              "path": "dataZoom.slider.moveHandleStyle.borderMiterLimit",
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
            "model": "dataZoom.slider.moveHandleStyle.shadowBlur",
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
            "model": "dataZoom.slider.moveHandleStyle.shadowColor",
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
              "path": "dataZoom.slider.moveHandleStyle.shadowOffsetX",
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
              "path": "dataZoom.slider.moveHandleStyle.shadowOffsetY",
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
              "path": "dataZoom.slider.moveHandleStyle.opacity",
              "default": 0.7
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
        "type": "SmartUnionInput",
        "model": {
          "path": "dataZoom.slider.labelPrecision",
          "default": "auto"
        },
        "props": {
          "placeholder": "标签精度",
          "types": [
            "number",
            "string"
          ],
          "defaultType": "string",
          "specialKeywords": [
            "auto"
          ]
        },
        "_raw": {
          "label": "标签精度",
          "desc": "\n\n<p>显示label的小数精度。默认根据数据自动决定。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": "dataZoom.slider.labelFormatter",
        "props": {
          "placeholder": "标签格式化器",
          "types": [
            "string",
            "function"
          ],
          "defaultType": "string",
          "specialKeywords": []
        },
        "_raw": {
          "label": "标签格式化器",
          "desc": "<p>显示的label的格式化器。</p>\n<ul>\n<li><p>如果为 <code class=\"codespan\">string</code>，表示模板，例如：<code class=\"codespan\">aaaa{value}bbbb</code>，其中<code class=\"codespan\">{value}</code>会被替换为实际的数值。</p>\n</li>\n<li><p>如果为 <code class=\"codespan\">Function</code>，表示回调函数，例如：</p>\n</li>\n</ul>\n<pre><code class=\"lang-javascript\">/**\n * @param {*} value 如果 axis.type 为 &#39;category&#39;，则 `value` 为 axis.data 的 index。\n *                  否则 `value` 是当前值。\n * @param {strign} valueStr 内部格式化的结果。\n * @return {string} 返回最终的label内容。\n */\nlabelFormatter: function (value) {\n    return &#39;aaa&#39; + value + &#39;bbb&#39;;\n}\n</code></pre>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "dataZoom.slider.showDetail",
          "default": true
        },
        "props": {
          "placeholder": "显示详情"
        },
        "_raw": {
          "label": "显示详情",
          "desc": "\n\n<p>是否显示detail，即拖拽时候显示详细数值信息。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "dataZoom.slider.showDataShadow",
          "default": "auto"
        },
        "props": {
          "placeholder": "显示数据阴影"
        },
        "_raw": {
          "label": "显示数据阴影",
          "desc": "\n\n<p>是否在 <code class=\"codespan\">dataZoom-silder</code> 组件中显示数据阴影。数据阴影可以简单地反应数据走势。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "dataZoom.slider.realtime",
          "default": true
        },
        "props": {
          "placeholder": "实时更新"
        },
        "_raw": {
          "label": "实时更新",
          "desc": "\n\n<p>拖动时，是否实时更新系列的视图。如果设置为 <code class=\"codespan\">false</code>，则只在拖拽结束的时候更新。</p>\n"
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
              "path": "dataZoom.slider.textStyle.color",
              "default": "#333"
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
              "desc": "\n\n<p>dataZoom 文字的颜色。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "dataZoom.slider.textStyle.fontStyle",
              "default": "normal"
            },
            "props": {
              "placeholder": "字体样式"
            },
            "_raw": {
              "label": "字体样式",
              "desc": "\n\n<p>dataZoom 文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": {
              "path": "dataZoom.slider.textStyle.fontWeight",
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
              "desc": "\n\n<p>dataZoom 文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "dataZoom.slider.textStyle.fontFamily",
              "default": "sans-serif"
            },
            "props": {
              "placeholder": "字体"
            },
            "_raw": {
              "label": "字体",
              "desc": "\n\n<p>dataZoom 文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "dataZoom.slider.textStyle.fontSize",
              "default": 12
            },
            "props": {
              "placeholder": "字体大小"
            },
            "_raw": {
              "label": "字体大小",
              "desc": "\n\n<p>dataZoom 文字的字体大小。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "dataZoom.slider.textStyle.lineHeight",
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
            "model": "dataZoom.slider.textStyle.width",
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
            "model": "dataZoom.slider.textStyle.height",
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
            "model": "dataZoom.slider.textStyle.textBorderColor",
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
            "model": "dataZoom.slider.textStyle.textBorderWidth",
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
              "path": "dataZoom.slider.textStyle.textBorderType",
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
              "path": "dataZoom.slider.textStyle.textBorderDashOffset",
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
              "path": "dataZoom.slider.textStyle.textShadowColor",
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
              "path": "dataZoom.slider.textStyle.textShadowBlur",
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
              "path": "dataZoom.slider.textStyle.textShadowOffsetX",
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
              "path": "dataZoom.slider.textStyle.textShadowOffsetY",
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
              "path": "dataZoom.slider.textStyle.overflow",
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
              "path": "dataZoom.slider.textStyle.ellipsis",
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
        "type": "SmartUnionInput",
        "model": "dataZoom.slider.xAxisIndex",
        "props": {
          "placeholder": "x轴索引",
          "types": [
            "number",
            "array"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "x轴索引",
          "desc": "<p>设置 <code class=\"codespan\">dataZoom-slider</code> 组件控制的 <code class=\"codespan\">x轴</code>（即<a href=\"#xAxis\">xAxis</a>，是直角坐标系中的概念，参见 <a href=\"#grid\">grid</a>）。</p>\n<p>不指定时，当 <a href=\"#dataZoom-slider.orient\">dataZoom-slider.orient</a> 为 <code class=\"codespan\">&#39;horizontal&#39;</code>时，默认控制和 dataZoom 平行的第一个 <code class=\"codespan\">xAxis</code>。但是不建议使用默认值，建议显式指定。</p>\n<p>如果是 <code class=\"codespan\">number</code> 表示控制一个轴，如果是 <code class=\"codespan\">Array</code> 表示控制多个轴。</p>\n<p>例如有如下 ECharts option：</p>\n<pre><code class=\"lang-javascript\">option: {\n    xAxis: [\n        {...}, // 第一个 xAxis\n        {...}, // 第二个 xAxis\n        {...}, // 第三个 xAxis\n        {...}  // 第四个 xAxis\n    ],\n    dataZoom: [\n        { // 第一个 dataZoom 组件\n            xAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 xAxis\n        },\n        { // 第二个 dataZoom 组件\n            xAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 xAxis\n        }\n    ]\n}\n</code></pre>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": "dataZoom.slider.yAxisIndex",
        "props": {
          "placeholder": "Y轴索引",
          "types": [
            "number",
            "array"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "Y轴索引",
          "desc": "<p>设置 <code class=\"codespan\">dataZoom-slider</code> 组件控制的 <code class=\"codespan\">y轴</code>（即<a href=\"#yAxis\">yAxis</a>，是直角坐标系中的概念，参见 <a href=\"#grid\">grid</a>）。</p>\n<p>不指定时，当 <a href=\"#dataZoom-slider.orient\">dataZoom-slider.orient</a> 为 <code class=\"codespan\">&#39;vertical&#39;</code>时，默认控制和 dataZoom 平行的第一个 <code class=\"codespan\">yAxis</code>。但是不建议使用默认值，建议显式指定。</p>\n<p>如果是 <code class=\"codespan\">number</code> 表示控制一个轴，如果是 <code class=\"codespan\">Array</code> 表示控制多个轴。</p>\n<p>例如有如下 ECharts option：</p>\n<pre><code class=\"lang-javascript\">option: {\n    yAxis: [\n        {...}, // 第一个 yAxis\n        {...}, // 第二个 yAxis\n        {...}, // 第三个 yAxis\n        {...}  // 第四个 yAxis\n    ],\n    dataZoom: [\n        { // 第一个 dataZoom 组件\n            yAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 yAxis\n        },\n        { // 第二个 dataZoom 组件\n            yAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 yAxis\n        }\n    ]\n}\n</code></pre>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": "dataZoom.slider.radiusAxisIndex",
        "props": {
          "placeholder": "半径轴索引",
          "types": [
            "number",
            "array"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "半径轴索引",
          "desc": "<p>设置 <code class=\"codespan\">dataZoom-slider</code> 组件控制的 <code class=\"codespan\">radius 轴</code>（即<a href=\"#radiusAxis\">radiusAxis</a>，是直角坐标系中的概念，参见 <a href=\"#polar\">polar</a>）。</p>\n<p>如果是 <code class=\"codespan\">number</code> 表示控制一个轴，如果是 <code class=\"codespan\">Array</code> 表示控制多个轴。</p>\n<p>例如有如下 ECharts option：</p>\n<pre><code class=\"lang-javascript\">option: {\n    radiusAxis: [\n        {...}, // 第一个 radiusAxis\n        {...}, // 第二个 radiusAxis\n        {...}, // 第三个 radiusAxis\n        {...}  // 第四个 radiusAxis\n    ],\n    dataZoom: [\n        { // 第一个 dataZoom 组件\n            radiusAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 radiusAxis\n        },\n        { // 第二个 dataZoom 组件\n            radiusAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 radiusAxis\n        }\n    ]\n}\n</code></pre>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": "dataZoom.slider.angleAxisIndex",
        "props": {
          "placeholder": "角度轴索引",
          "types": [
            "number",
            "array"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "角度轴索引",
          "desc": "<p>设置 <code class=\"codespan\">dataZoom-slider</code> 组件控制的 <code class=\"codespan\">angle 轴</code>（即<a href=\"#angleAxis\">angleAxis</a>，是直角坐标系中的概念，参见 <a href=\"#polar\">polar</a>）。</p>\n<p>如果是 <code class=\"codespan\">number</code> 表示控制一个轴，如果是 <code class=\"codespan\">Array</code> 表示控制多个轴。</p>\n<p>例如有如下 ECharts option：</p>\n<pre><code class=\"lang-javascript\">option: {\n    angleAxis: [\n        {...}, // 第一个 angleAxis\n        {...}, // 第二个 angleAxis\n        {...}, // 第三个 angleAxis\n        {...}  // 第四个 angleAxis\n    ],\n    dataZoom: [\n        { // 第一个 dataZoom 组件\n            angleAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 angleAxis\n        },\n        { // 第二个 dataZoom 组件\n            angleAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 angleAxis\n        }\n    ]\n}\n</code></pre>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "dataZoom.slider.filterMode",
          "default": "filter"
        },
        "props": {
          "placeholder": "筛选模式"
        },
        "_raw": {
          "label": "筛选模式",
          "desc": "\n\n\n\n<p><code class=\"codespan\">dataZoom</code> 的运行原理是通过 <code class=\"codespan\">数据过滤</code> 以及在内部设置轴的显示窗口来达到 <code class=\"codespan\">数据窗口缩放</code> 的效果。</p>\n<p>数据过滤模式（<a href=\"#dataZoom.filterMode\">dataZoom.filterMode</a>）的设置不同，效果也不同。</p>\n<p>可选值为：</p>\n<ul>\n<li><p>&#39;filter&#39;：当前数据窗口外的数据，被 <strong>过滤掉</strong>。即 <strong>会</strong> 影响其他轴的数据范围。每个数据项，只要有一个维度在数据窗口外，整个数据项就会被过滤掉。</p>\n</li>\n<li><p>&#39;weakFilter&#39;：当前数据窗口外的数据，被 <strong>过滤掉</strong>。即 <strong>会</strong> 影响其他轴的数据范围。每个数据项，只有当全部维度都在数据窗口同侧外部，整个数据项才会被过滤掉。</p>\n</li>\n<li><p>&#39;empty&#39;：当前数据窗口外的数据，被 <strong>设置为空</strong>。即 <strong>不会</strong> 影响其他轴的数据范围。</p>\n</li>\n<li><p>&#39;none&#39;: 不过滤数据，只改变数轴范围。</p>\n</li>\n</ul>\n<p>如何设置，由用户根据场景和需求自己决定。经验来说：</p>\n<ul>\n<li><p>当『只有 X 轴 或 只有 Y 轴受 <code class=\"codespan\">dataZoom</code> 组件控制』时，常使用 <code class=\"codespan\">filterMode: &#39;filter&#39;</code>，这样能使另一个轴自适应过滤后的数值范围。</p>\n</li>\n<li><p>当『X 轴 Y 轴分别受 <code class=\"codespan\">dataZoom</code> 组件控制』时：</p>\n<ul>\n<li><p>如果 X 轴和 Y 轴是『同等地位的、不应互相影响的』，比如在『双数值轴散点图』中，那么两个轴可都设为 <code class=\"codespan\">filterMode: &#39;empty&#39;</code>。</p>\n</li>\n<li><p>如果 X 轴为主，Y 轴为辅，比如在『柱状图』中，需要『拖动 <code class=\"codespan\">dataZoomX</code> 改变 X 轴过滤柱子时，Y 轴的范围也自适应剩余柱子的高度』，『拖动 <code class=\"codespan\">dataZoomY</code> 改变 Y 轴过滤柱子时，X 轴范围不受影响』，那么就 X轴设为 <code class=\"codespan\">filterMode: &#39;filter&#39;</code>，Y 轴设为 <code class=\"codespan\">filterMode: &#39;empty&#39;</code>，即主轴 <code class=\"codespan\">&#39;filter&#39;</code>，辅轴 <code class=\"codespan\">&#39;empty&#39;</code>。</p>\n</li>\n</ul>\n</li>\n</ul>\n<p>下面是个具体例子：</p>\n<pre><code class=\"lang-javascript\">option = {\n    dataZoom: [\n        {\n            id: &#39;dataZoomX&#39;,\n            type: &#39;slider&#39;,\n            xAxisIndex: [0],\n            filterMode: &#39;filter&#39;\n        },\n        {\n            id: &#39;dataZoomY&#39;,\n            type: &#39;slider&#39;,\n            yAxisIndex: [0],\n            filterMode: &#39;empty&#39;\n        }\n    ],\n    xAxis: {type: &#39;value&#39;},\n    yAxis: {type: &#39;value&#39;},\n    series{\n        type: &#39;bar&#39;,\n        data: [\n            // 第一列对应 X 轴，第二列对应 Y 轴。\n            [12, 24, 36],\n            [90, 80, 70],\n            [3, 9, 27],\n            [1, 11, 111]\n        ]\n    }\n}\n</code></pre>\n<p>上例中，<code class=\"codespan\">dataZoomX</code> 的 <code class=\"codespan\">filterMode</code> 设置为 <code class=\"codespan\">&#39;filter&#39;</code>。于是，假设当用户拖拽 <code class=\"codespan\">dataZoomX</code>（不去动 <code class=\"codespan\">dataZoomY</code>）导致其 valueWindow 变为 <code class=\"codespan\">[2, 50]</code> 时，<code class=\"codespan\">dataZoomX</code> 对 series.data 的第一列进行遍历，窗口外的整项去掉，最终得到的 series.data 为：</p>\n<pre><code class=\"lang-javascript\">[\n    // 第一列对应 X 轴，第二列对应 Y 轴。\n    [12, 24, 36],\n    // [90, 80, 70] 整项被过滤掉，因为 90 在 dataWindow 之外。\n    [3, 9, 27]\n    // [1, 11, 111] 整项被过滤掉，因为 1 在 dataWindow 之外。\n]\n</code></pre>\n<p>过滤前，series.data 中对应 Y 轴的值有 <code class=\"codespan\">24</code>、<code class=\"codespan\">80</code>、<code class=\"codespan\">9</code>、<code class=\"codespan\">11</code>，过滤后，只剩下 <code class=\"codespan\">24</code> 和 <code class=\"codespan\">9</code>，那么 Y 轴的显示范围就会自动改变以适应剩下的这两个值的显示（如果 Y 轴没有被设置 <code class=\"codespan\">min</code>、<code class=\"codespan\">max</code> 固定其显示范围的话）。</p>\n<p>所以，<code class=\"codespan\">filterMode: &#39;filter&#39;</code> 的效果是：过滤数据后使另外的轴也能自动适应当前数据的范围。</p>\n<p>再从头来，上例中 <code class=\"codespan\">dataZoomY</code> 的 <code class=\"codespan\">filterMode</code> 设置为 <code class=\"codespan\">&#39;empty&#39;</code>。于是，假设当用户拖拽 <code class=\"codespan\">dataZoomY</code>（不去动 <code class=\"codespan\">dataZoomX</code>）导致其 dataWindow 变为 <code class=\"codespan\">[10, 60]</code> 时，<code class=\"codespan\">dataZoomY</code> 对 series.data 的第二列进行遍历，窗口外的值被设置为 empty （即替换为 NaN，这样设置为空的项，其所对应柱形，在 X 轴还有占位，只是不显示出来）。最终得到的 series.data 为：</p>\n<pre><code class=\"lang-javascript\">[\n    // 第一列对应 X 轴，第二列对应 Y 轴。\n    [12, 24, 36],\n    [90, NaN, 70], // 设置为 empty (NaN)\n    [3, NaN, 27],  // 设置为 empty (NaN)\n    [1, 11, 111]\n]\n</code></pre>\n<p>这时，series.data 中对应于 X 轴的值仍然全部保留不受影响，为 <code class=\"codespan\">12</code>、<code class=\"codespan\">90</code>、<code class=\"codespan\">3</code>、<code class=\"codespan\">1</code>。那么用户对 <code class=\"codespan\">dataZoomY</code> 的拖拽操作不会影响到 X 轴的范围。这样的效果，对于离群点（outlier）过滤功能，比较清晰。</p>\n<p>如下面的例子：</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/bar-dataZoom-filterMode&edit=1&reset=1\" width=\"600\" height=\"400\"></iframe>\n\n\n\n\n\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "dataZoom.slider.start",
          "default": 0
        },
        "props": {
          "placeholder": "起始值"
        },
        "_raw": {
          "label": "起始值",
          "desc": "\n\n<p>数据窗口范围的起始百分比。范围是：0 ~ 100。表示 0% ~ 100%。</p>\n<p><a href=\"#dataZoom-slider.start\">dataZoom-slider.start</a> 和 <a href=\"#dataZoom-slider.end\">dataZoom-slider.end</a> 共同用 <strong>百分比</strong> 的形式定义了数据窗口范围。</p>\n<p>关于坐标轴范围（axis extent）和 <code class=\"codespan\">dataZoom-slider.start</code> 的关系的更多信息，请参见：<a href=\"#dataZoom-slider.rangeMode\">dataZoom-slider.rangeMode</a>。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "dataZoom.slider.end",
          "default": 100
        },
        "props": {
          "placeholder": "结束值"
        },
        "_raw": {
          "label": "结束值",
          "desc": "\n\n<p>数据窗口范围的结束百分比。范围是：0 ~ 100。</p>\n<p><a href=\"#dataZoom-slider.start\">dataZoom-slider.start</a> 和 <a href=\"#dataZoom-slider.end\">dataZoom-slider.end</a> 共同用 <strong>百分比</strong> 的形式定义了数据窗口范围。</p>\n<p>关于坐标轴范围（axis extent）和 <code class=\"codespan\">dataZoom-slider.end</code> 的关系的更多信息，请参见：<a href=\"#dataZoom-slider.rangeMode\">dataZoom-slider.rangeMode</a>。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": "dataZoom.slider.startValue",
        "props": {
          "placeholder": "起始值",
          "types": [
            "number",
            "string",
            "date"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "起始值",
          "desc": "<p>数据窗口范围的起始数值。如果设置了 <a href=\"#dataZoom-slider.start\">dataZoom-slider.start</a> 则 <code class=\"codespan\">startValue</code> 失效。</p>\n<p><a href=\"#dataZoom-slider.startValue\">dataZoom-slider.startValue</a> 和 <a href=\"#dataZoom-slider.endValue\">dataZoom-slider.endValue</a> 共同用 <strong>绝对数值</strong> 的形式定义了数据窗口范围。</p>\n<p>注意，如果轴的类型为 <code class=\"codespan\">category</code>，则 <code class=\"codespan\">startValue</code> 既可以设置为 <code class=\"codespan\">axis.data</code> 数组的 <code class=\"codespan\">index</code>，也可以设置为数组值本身。\n但是如果设置为数组值本身，会在内部自动转化为数组的 index。</p>\n<p>关于坐标轴范围（axis extent）和 <code class=\"codespan\">dataZoom-slider.startValue</code> 的关系的更多信息，请参见：<a href=\"#dataZoom-slider.rangeMode\">dataZoom-slider.rangeMode</a>。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": "dataZoom.slider.endValue",
        "props": {
          "placeholder": "结束数值",
          "types": [
            "number",
            "string",
            "date"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "结束数值",
          "desc": "<p>数据窗口范围的结束数值。如果设置了 <a href=\"#dataZoom-slider.end\">dataZoom-slider.end</a> 则 <code class=\"codespan\">endValue</code> 失效。</p>\n<p><a href=\"#dataZoom-slider.startValue\">dataZoom-slider.startValue</a> 和 <a href=\"#dataZoom-slider.endValue\">dataZoom-slider.endValue</a> 共同用 <strong>绝对数值</strong> 的形式定义了数据窗口范围。</p>\n<p>注意，如果轴的类型为 <code class=\"codespan\">category</code>，则 <code class=\"codespan\">endValue</code> 即可以设置为 <code class=\"codespan\">axis.data</code> 数组的 <code class=\"codespan\">index</code>，也可以设置为数组值本身。\n但是如果设置为数组值本身，会在内部自动转化为数组的 index。</p>\n<p>关于坐标轴范围（axis extent）和 <code class=\"codespan\">dataZoom-slider.endValue</code> 的关系的更多信息，请参见：<a href=\"#dataZoom-slider.rangeMode\">dataZoom-slider.rangeMode</a>。</p>\n"
        }
      },
      {
        "type": "ElInputNumber",
        "model": "dataZoom.slider.minSpan",
        "props": {
          "placeholder": "最小跨度"
        },
        "_raw": {
          "label": "最小跨度",
          "desc": "\n\n<p>用于限制窗口大小的最小值（百分比值），取值范围是 <code class=\"codespan\">0</code> ~ <code class=\"codespan\">100</code>。</p>\n<p>如果设置了 <a href=\"#dataZoom-slider.minValueSpan\">dataZoom-slider.minValueSpan</a> 则 <code class=\"codespan\">minSpan</code> 失效。</p>\n"
        }
      },
      {
        "type": "ElInputNumber",
        "model": "dataZoom.slider.maxSpan",
        "props": {
          "placeholder": "最大跨度"
        },
        "_raw": {
          "label": "最大跨度",
          "desc": "\n\n<p>用于限制窗口大小的最大值（百分比值），取值范围是 <code class=\"codespan\">0</code> ~ <code class=\"codespan\">100</code>。</p>\n<p>如果设置了 <a href=\"#dataZoom-slider.maxValueSpan\">dataZoom-slider.maxValueSpan</a> 则 <code class=\"codespan\">maxSpan</code> 失效。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": "dataZoom.slider.minValueSpan",
        "props": {
          "placeholder": "最小数值跨度",
          "types": [
            "number",
            "string",
            "date"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "最小数值跨度",
          "desc": "<p>用于限制窗口大小的最小值（实际数值）。</p>\n<p>如在时间轴上可以设置为：<code class=\"codespan\">3600 * 24 * 1000 * 5</code> 表示 5 天。\n在类目轴上可以设置为 <code class=\"codespan\">5</code> 表示 5 个类目。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": "dataZoom.slider.maxValueSpan",
        "props": {
          "placeholder": "最大数值跨度",
          "types": [
            "number",
            "string",
            "date"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": {
          "label": "最大数值跨度",
          "desc": "<p>用于限制窗口大小的最大值（实际数值）。</p>\n<p>如在时间轴上可以设置为：<code class=\"codespan\">3600 * 24 * 1000 * 5</code> 表示 5 天。\n在类目轴上可以设置为 <code class=\"codespan\">5</code> 表示 5 个类目。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": "dataZoom.slider.orient",
        "props": {
          "placeholder": "朝向"
        },
        "_raw": {
          "label": "朝向",
          "desc": "\n\n<p>布局方式是横还是竖。不仅是布局方式，对于直角坐标系而言，也决定了，缺省情况控制横向数轴还是纵向数轴。</p>\n<p>可选值为：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;horizontal&#39;</code>：水平。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;vertical&#39;</code>：竖直。</p>\n</li>\n</ul>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "dataZoom.slider.zoomLock",
          "default": false
        },
        "props": {
          "placeholder": "缩放锁定"
        },
        "_raw": {
          "label": "缩放锁定",
          "desc": "\n\n<p>是否锁定选择区域（或叫做数据窗口）的大小。</p>\n<p>如果设置为 <code class=\"codespan\">true</code> 则锁定选择区域的大小，也就是说，只能平移，不能缩放。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "dataZoom.slider.throttle",
          "default": 100
        },
        "props": {
          "placeholder": "节流"
        },
        "_raw": {
          "label": "节流",
          "desc": "\n\n<p>设置触发视图刷新的频率。单位为毫秒（ms）。</p>\n<p>如果 <a href=\"#animation\">animation</a> 设为 <code class=\"codespan\">true</code> 且 <a href=\"#animationDurationUpdate\">animationDurationUpdate</a> 大于 <code class=\"codespan\">0</code>，可以保持 <code class=\"codespan\">throttle</code> 为默认值 <code class=\"codespan\">100</code>（或者设置为大于 <code class=\"codespan\">0</code> 的值），否则拖拽时有可能画面感觉卡顿。</p>\n<p>如果 <a href=\"#animation\">animation</a> 设为 <code class=\"codespan\">false</code> 或者 <a href=\"#animationDurationUpdate\">animationDurationUpdate</a> 设为 <code class=\"codespan\">0</code>，且在数据量不大时，拖拽时画面感觉卡顿，可以把尝试把 <code class=\"codespan\">throttle</code> 设为 <code class=\"codespan\">0</code> 来改善。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": "dataZoom.slider.rangeMode",
        "props": {
          "placeholder": "范围模式"
        },
        "_raw": {
          "label": "范围模式",
          "desc": "<p>形式为：<code class=\"codespan\">[rangeModeForStart, rangeModeForEnd]</code>。</p>\n<p>例如 <code class=\"codespan\">rangeMode: [&#39;value&#39;, &#39;percent&#39;]</code>，表示 start 值取绝对数值，end 取百分比。</p>\n<p>每项可选值为：<code class=\"codespan\">&#39;value&#39;</code>, <code class=\"codespan\">&#39;percent&#39;</code></p>\n<ul>\n<li><code class=\"codespan\">&#39;value&#39;</code> 模式：处于此模式下，坐标轴范围（axis extent）总只会被<code class=\"codespan\">dataZoom.startValue</code> and <code class=\"codespan\">dataZoom.endValue</code> 决定，而不管数据是多少，以及不管，<code class=\"codespan\">axis.min</code> 和 <code class=\"codespan\">axis.max</code> 怎么设置。</li>\n<li><code class=\"codespan\">&#39;percent&#39;</code> 模式：处于此模式下，<code class=\"codespan\">100</code> 代表 100% 的 <code class=\"codespan\">[dMin, dMax]</code>。这里 <code class=\"codespan\">dMin</code> 表示，如果 <code class=\"codespan\">axis.min</code> 设置了就是 <code class=\"codespan\">axis.min</code>，否则是 <code class=\"codespan\">data.extent[0]</code>；<code class=\"codespan\">dMax</code> 表示，如果 <code class=\"codespan\">axis.max</code> 设置了就是 <code class=\"codespan\">axis.max</code>，否则是 <code class=\"codespan\">data.extent[1]</code>。<code class=\"codespan\">[dMin, dMax]</code> 乘以 percent 的结果得到坐标轴范围（axis extent）。</li>\n</ul>\n<p>默认情况下，<code class=\"codespan\">rangeMode</code> 总是被自动设定。如果指定了 <code class=\"codespan\">option.start</code>/<code class=\"codespan\">option.end</code> 那么就设定为 <code class=\"codespan\">&#39;percent&#39;</code>，如果指定了 <code class=\"codespan\">option.startValue</code>/<code class=\"codespan\">option.endValue</code> 那么就设定为 <code class=\"codespan\">&#39;value&#39;</code>。以及当用户用不用操作触发视图改变时，<code class=\"codespan\">rangeMode</code> 也可能会相应得变化（如，通过 <code class=\"codespan\">toolbox.dataZoom</code> 触发视图改变时，<code class=\"codespan\">rangeMode</code> 会自动被设置为 <code class=\"codespan\">value</code>，通过 <code class=\"codespan\">dataZoom-inside</code> 和 <code class=\"codespan\">dataZoom-slider</code> 触发视图改变时，会自动被设置为 <code class=\"codespan\">&#39;percent&#39;</code>）。</p>\n<p>如果我们手动在 <code class=\"codespan\">option</code> 中设定了 <code class=\"codespan\">rangeMode</code>，那么它只在 <code class=\"codespan\">start</code> 和 <code class=\"codespan\">startValue</code> 都设置了或者 <code class=\"codespan\">end</code> 和 <code class=\"codespan\">endValue</code> 都设置了才有意义。所以通常我们没必要在 <code class=\"codespan\">option</code> 中指定 <code class=\"codespan\">rangeMode</code>。</p>\n<p>举例一个使用场景：当我们使用动态数据时（即，周期性得通过 <code class=\"codespan\">setOption</code> 来改变数据），如果 <code class=\"codespan\">rangeMode</code> 在 <code class=\"codespan\">&#39;value</code>&#39; 模式，<code class=\"codespan\">dataZoom</code> 的窗口会一直保持在一个固定的值区间，无论数据怎么改变添加了多少；如果 <code class=\"codespan\">rangeMode</code> 在 <code class=\"codespan\">&#39;percent&#39;</code> 模式，窗口会随着数据的添加而改变（假设 <code class=\"codespan\">axis.min</code> 和 <code class=\"codespan\">axis.max</code> 没有被设置）。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "dataZoom.slider.zlevel",
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
          "path": "dataZoom.slider.z",
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
          "path": "dataZoom.slider.left",
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
          "desc": "\n\n\n\n<p>dataZoom-slider组件离容器左侧的距离。</p>\n<p><code class=\"codespan\">left</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器宽度的百分比，也可以是 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">left</code> 的值为 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>，组件会根据相应的位置自动对齐。</p>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "dataZoom.slider.top",
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
          "desc": "\n\n\n\n<p>dataZoom-slider组件离容器上侧的距离。</p>\n<p><code class=\"codespan\">top</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高度的百分比，也可以是 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">top</code> 的值为 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>，组件会根据相应的位置自动对齐。</p>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "dataZoom.slider.right",
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
          "desc": "\n\n\n\n<p>dataZoom-slider组件离容器右侧的距离。</p>\n<p><code class=\"codespan\">right</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器宽度的百分比。</p>\n<p>默认自适应。</p>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "dataZoom.slider.bottom",
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
          "desc": "\n\n\n\n<p>dataZoom-slider组件离容器下侧的距离。</p>\n<p>bottom 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高度的百分比。</p>\n<p>默认自适应。</p>\n"
        }
      },
      {
        "type": "SmartSizeInput",
        "model": "dataZoom.slider.width",
        "props": {
          "placeholder": "宽度",
          "allowPercentage": true,
          "keywords": [
            "auto"
          ]
        },
        "_raw": {
          "label": "宽度",
          "desc": "\n\n<p>dataZoom-slider 组件的宽度。竖直布局默认 30，水平布局默认自适应。</p>\n<p>比 <code class=\"codespan\">left</code> 和 <code class=\"codespan\">right</code> 优先级高。</p>\n"
        }
      },
      {
        "type": "SmartSizeInput",
        "model": "dataZoom.slider.height",
        "props": {
          "placeholder": "高度",
          "allowPercentage": true,
          "keywords": [
            "auto"
          ]
        },
        "_raw": {
          "label": "高度",
          "desc": "\n\n<p>dataZoom-slider 组件的高度。水平布局默认 30，竖直布局默认自适应。</p>\n<p>比 <code class=\"codespan\">top</code> 和 <code class=\"codespan\">bottom</code> 优先级高。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "dataZoom.slider.brushSelect",
          "default": true
        },
        "props": {
          "placeholder": "刷选"
        },
        "_raw": {
          "label": "刷选",
          "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>是否开启刷选功能。在下图的 brush 区域你可以按住鼠标左键后框选出选中部分。</p>\n<p><img width=\"600\" height=\"auto\" src=\"documents/asset/img/dataZoom-zone.png\"></p>\n"
        }
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "刷选样式",
          "name": "brushStyle"
        },
        "children": [
          {
            "type": "SmartColorInput",
            "model": {
              "path": "dataZoom.slider.brushStyle.color",
              "default": "rgba(135,175,274,0.15)"
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
              "path": "dataZoom.slider.brushStyle.borderColor",
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
              "path": "dataZoom.slider.brushStyle.borderWidth",
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
              "path": "dataZoom.slider.brushStyle.borderType",
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
              "path": "dataZoom.slider.brushStyle.borderDashOffset",
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
              "path": "dataZoom.slider.brushStyle.borderCap",
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
              "path": "dataZoom.slider.brushStyle.borderJoin",
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
              "path": "dataZoom.slider.brushStyle.borderMiterLimit",
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
            "model": "dataZoom.slider.brushStyle.shadowBlur",
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
            "model": "dataZoom.slider.brushStyle.shadowColor",
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
              "path": "dataZoom.slider.brushStyle.shadowOffsetX",
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
              "path": "dataZoom.slider.brushStyle.shadowOffsetY",
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
              "path": "dataZoom.slider.brushStyle.opacity",
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
            "type": "ElCollapseItem",
            "props": {
              "title": "手柄样式",
              "name": "handleStyle"
            },
            "children": [
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "dataZoom.slider.emphasis.handleStyle.color",
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
                  "path": "dataZoom.slider.emphasis.handleStyle.borderColor",
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
                  "path": "dataZoom.slider.emphasis.handleStyle.borderWidth",
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
                  "path": "dataZoom.slider.emphasis.handleStyle.borderType",
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
                  "path": "dataZoom.slider.emphasis.handleStyle.borderDashOffset",
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
                  "path": "dataZoom.slider.emphasis.handleStyle.borderCap",
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
                  "path": "dataZoom.slider.emphasis.handleStyle.borderJoin",
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
                  "path": "dataZoom.slider.emphasis.handleStyle.borderMiterLimit",
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
                "model": "dataZoom.slider.emphasis.handleStyle.shadowBlur",
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
                "model": "dataZoom.slider.emphasis.handleStyle.shadowColor",
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
                  "path": "dataZoom.slider.emphasis.handleStyle.shadowOffsetX",
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
                  "path": "dataZoom.slider.emphasis.handleStyle.shadowOffsetY",
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
                  "path": "dataZoom.slider.emphasis.handleStyle.opacity",
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
              "title": "手柄标签",
              "name": "handleLabel"
            },
            "children": [
              {
                "type": "ElSwitch",
                "model": {
                  "path": "dataZoom.slider.emphasis.handleLabel.show",
                  "default": false
                },
                "props": {
                  "placeholder": "显示"
                },
                "_raw": {
                  "label": "显示",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.6.0</code> 开始支持\n\n</div>\n\n\n\n<p>是否显示文字。</p>\n"
                }
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "移动手柄样式",
              "name": "moveHandleStyle"
            },
            "children": [
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "dataZoom.slider.emphasis.moveHandleStyle.color",
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
                  "path": "dataZoom.slider.emphasis.moveHandleStyle.borderColor",
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
                  "path": "dataZoom.slider.emphasis.moveHandleStyle.borderWidth",
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
                  "path": "dataZoom.slider.emphasis.moveHandleStyle.borderType",
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
                  "path": "dataZoom.slider.emphasis.moveHandleStyle.borderDashOffset",
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
                  "path": "dataZoom.slider.emphasis.moveHandleStyle.borderCap",
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
                  "path": "dataZoom.slider.emphasis.moveHandleStyle.borderJoin",
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
                  "path": "dataZoom.slider.emphasis.moveHandleStyle.borderMiterLimit",
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
                "model": "dataZoom.slider.emphasis.moveHandleStyle.shadowBlur",
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
                "model": "dataZoom.slider.emphasis.moveHandleStyle.shadowColor",
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
                  "path": "dataZoom.slider.emphasis.moveHandleStyle.shadowOffsetX",
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
                  "path": "dataZoom.slider.emphasis.moveHandleStyle.shadowOffsetY",
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
                  "path": "dataZoom.slider.emphasis.moveHandleStyle.opacity",
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
      }
    ]
  }
];
