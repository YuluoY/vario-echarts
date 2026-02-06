export default [
  {
    "type": "ElCollapseItem",
    "props": {
      "title": "工具箱",
      "name": "toolbox"
    },
    "children": [
      {
        "type": "ElInput",
        "model": "toolbox.id",
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
          "path": "toolbox.show",
          "default": true
        },
        "props": {
          "placeholder": "显示"
        },
        "_raw": {
          "label": "显示",
          "desc": "\n\n<p>是否显示工具栏组件。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "toolbox.orient",
          "default": "horizontal"
        },
        "props": {
          "placeholder": "朝向"
        },
        "_raw": {
          "label": "朝向",
          "desc": "\n\n<p>工具栏 icon 的布局朝向。</p>\n<p>可选：</p>\n<ul>\n<li>&#39;horizontal&#39;</li>\n<li>&#39;vertical&#39;</li>\n</ul>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "toolbox.itemSize",
          "default": 15
        },
        "props": {
          "placeholder": "图形大小"
        },
        "_raw": {
          "label": "图形大小",
          "desc": "\n\n<p>工具栏 icon 的大小。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "toolbox.itemGap",
          "default": 8
        },
        "props": {
          "placeholder": "项间隔"
        },
        "_raw": {
          "label": "项间隔",
          "desc": "\n\n<p>工具栏 icon 每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "toolbox.showTitle",
          "default": true
        },
        "props": {
          "placeholder": "显示标题"
        },
        "_raw": {
          "label": "显示标题",
          "desc": "\n\n<p>是否在鼠标 hover 的时候显示每个工具 icon 的标题。</p>\n"
        }
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "功能",
          "name": "feature"
        },
        "children": [
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "保存为图片",
              "name": "saveAsImage"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "toolbox.feature.saveAsImage.type",
                  "default": "png"
                },
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "\n\n<p>保存的图片格式。</p>\n<ul>\n<li>如果 <code class=\"codespan\">renderer</code> 的类型在 <a href=\"api.html#echarts.init\" target=\"_blank\">初始化图表</a> 时被设为 <code class=\"codespan\">&#39;canvas&#39;</code>（默认），则支持 <code class=\"codespan\">&#39;png&#39;</code>（默认）和 <code class=\"codespan\">&#39;jpg&#39;</code>；</li>\n<li>如果 <code class=\"codespan\">renderer</code> 的类型在 <a href=\"api.html#echarts.init\" target=\"_blank\">初始化图表</a> 时被设为 <code class=\"codespan\">&#39;svg&#39;</code>，则 <code class=\"codespan\">type</code> 只支持 <code class=\"codespan\">&#39;svg&#39;</code>（<code class=\"codespan\">&#39;svg&#39;</code> 格式的图片从 <code class=\"codespan\">v4.8.0</code> 开始支持）。</li>\n</ul>\n<div  class=\"doc-partial-security-warning\">\n<span  class=\"warning-title\">[警告]:</span>  <code  class=\"codespan\">type</code> 会被用于文件的扩展名。但是实现中并没有在内部对其进行合法性校验（历史因素）。所以不要传入不合法的值；否则，需要考虑 <strong >安全风险</strong>。文档 <a  href=\"https://echarts.apache.org/handbook/zh/best-practices/security\" target=\"_blank\">“安全指南”</a> 给出了安全使用建议。\n</div>\n\n"
                }
              },
              {
                "type": "ElInput",
                "model": "toolbox.feature.saveAsImage.name",
                "props": {
                  "placeholder": "名称"
                },
                "_raw": {
                  "label": "名称",
                  "desc": "\n\n<p>保存的文件名称的扩展名之前的部分。如果没有指定，会使用 <a href=\"#title.text\">title[0].text</a>（如果存在的话）。完整的文件名是 <code class=\"codespan\">{name}.{type}</code>。</p>\n<div  class=\"doc-partial-security-warning\">\n<span  class=\"warning-title\">[警告]:</span>  建议总是显式指定 <code  class=\"codespan\">name</code>，以及不使用“不可信任来源”的字符串。否则，须要考虑作为文件名的 <strong >正确性</strong> 和 <strong >安全性</strong>。文档 <a  href=\"https://echarts.apache.org/handbook/zh/best-practices/security\" target=\"_blank\">“安全指南”</a> 给出了安全使用建议。\n</div>\n\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "toolbox.feature.saveAsImage.backgroundColor",
                  "default": "auto"
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
                  "desc": "\n\n<p>保存的图片背景色，默认使用 <a href=\"#backgroundColor\">backgroundColor</a>，如果<code class=\"codespan\">backgroundColor</code>不存在的话会取白色。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "toolbox.feature.saveAsImage.connectedBackgroundColor",
                  "default": "#fff"
                },
                "props": {
                  "placeholder": "连接背景色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "连接背景色",
                  "desc": "\n\n<p>如果图表使用了 <a href=\"api.html#echarts.connect\" target=\"_blank\">echarts.connect</a> 对多个图表进行联动，则在导出图片时会导出这些联动的图表。该配置项决定了图表与图表之间间隙处的填充色。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "toolbox.feature.saveAsImage.excludeComponents",
                  "default": "['toolbox']"
                },
                "props": {
                  "placeholder": "排除组件"
                },
                "_raw": {
                  "label": "排除组件",
                  "desc": "<p>保存为图片时忽略的组件列表，默认忽略工具栏。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "toolbox.feature.saveAsImage.show",
                  "default": true
                },
                "props": {
                  "placeholder": "显示"
                },
                "_raw": {
                  "label": "显示",
                  "desc": "<p>是否显示该工具。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "toolbox.feature.saveAsImage.title",
                  "default": "保存为图片"
                },
                "props": {
                  "placeholder": "标题"
                },
                "_raw": {
                  "label": "标题"
                }
              },
              {
                "type": "ElInput",
                "model": "toolbox.feature.saveAsImage.icon",
                "props": {
                  "placeholder": "图标"
                },
                "_raw": {
                  "label": "图标",
                  "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "图标样式",
                  "name": "iconStyle"
                },
                "children": [
                  {
                    "type": "SmartColorInput",
                    "model": {
                      "path": "toolbox.feature.saveAsImage.iconStyle.color",
                      "default": "none"
                    },
                    "props": {
                      "placeholder": "颜色",
                      "keywords": [
                        "none",
                        "inherit",
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
                      "path": "toolbox.feature.saveAsImage.iconStyle.borderColor",
                      "default": "#666"
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
                      "path": "toolbox.feature.saveAsImage.iconStyle.borderWidth",
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
                      "path": "toolbox.feature.saveAsImage.iconStyle.borderType",
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
                      "path": "toolbox.feature.saveAsImage.iconStyle.borderDashOffset",
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
                      "path": "toolbox.feature.saveAsImage.iconStyle.borderCap",
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
                      "path": "toolbox.feature.saveAsImage.iconStyle.borderJoin",
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
                      "path": "toolbox.feature.saveAsImage.iconStyle.borderMiterLimit",
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
                    "model": "toolbox.feature.saveAsImage.iconStyle.shadowBlur",
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
                    "model": "toolbox.feature.saveAsImage.iconStyle.shadowColor",
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
                      "path": "toolbox.feature.saveAsImage.iconStyle.shadowOffsetX",
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
                      "path": "toolbox.feature.saveAsImage.iconStyle.shadowOffsetY",
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
                      "path": "toolbox.feature.saveAsImage.iconStyle.opacity",
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
                      "title": "图标样式",
                      "name": "iconStyle"
                    },
                    "children": [
                      {
                        "type": "SmartColorInput",
                        "model": {
                          "path": "toolbox.feature.saveAsImage.emphasis.iconStyle.color",
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
                          "path": "toolbox.feature.saveAsImage.emphasis.iconStyle.borderColor",
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
                          "path": "toolbox.feature.saveAsImage.emphasis.iconStyle.borderWidth",
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
                          "path": "toolbox.feature.saveAsImage.emphasis.iconStyle.borderType",
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
                          "path": "toolbox.feature.saveAsImage.emphasis.iconStyle.borderDashOffset",
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
                          "path": "toolbox.feature.saveAsImage.emphasis.iconStyle.borderCap",
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
                          "path": "toolbox.feature.saveAsImage.emphasis.iconStyle.borderJoin",
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
                          "path": "toolbox.feature.saveAsImage.emphasis.iconStyle.borderMiterLimit",
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
                        "model": "toolbox.feature.saveAsImage.emphasis.iconStyle.shadowBlur",
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
                        "model": "toolbox.feature.saveAsImage.emphasis.iconStyle.shadowColor",
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
                          "path": "toolbox.feature.saveAsImage.emphasis.iconStyle.shadowOffsetX",
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
                          "path": "toolbox.feature.saveAsImage.emphasis.iconStyle.shadowOffsetY",
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
                          "path": "toolbox.feature.saveAsImage.emphasis.iconStyle.opacity",
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
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.saveAsImage.emphasis.iconStyle.textPosition",
                          "default": "bottom"
                        },
                        "props": {
                          "placeholder": "文本位置"
                        },
                        "_raw": {
                          "label": "文本位置",
                          "desc": "<p>文本位置，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code> / <code class=\"codespan\">&#39;top&#39;</code> / <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.saveAsImage.emphasis.iconStyle.textFill",
                          "default": "#000"
                        },
                        "props": {
                          "placeholder": "文本填充"
                        },
                        "_raw": {
                          "label": "文本填充",
                          "desc": "\n\n<p>文本颜色，如果未设定，则依次取图标 emphasis 时候的填充色、描边色，如果都不存在，则为 <code class=\"codespan\">&#39;#000&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.saveAsImage.emphasis.iconStyle.textAlign",
                          "default": "center"
                        },
                        "props": {
                          "placeholder": "文本对齐"
                        },
                        "_raw": {
                          "label": "文本对齐",
                          "desc": "\n\n<p>文本对齐方式，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;center&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "SmartColorInput",
                        "model": "toolbox.feature.saveAsImage.emphasis.iconStyle.textBackgroundColor",
                        "props": {
                          "placeholder": "文本背景色",
                          "keywords": [
                            "inherit",
                            "none",
                            "transparent"
                          ],
                          "allowInherit": true
                        },
                        "_raw": {
                          "label": "文本背景色",
                          "desc": "\n\n<p>文本区域填充色。</p>\n"
                        }
                      },
                      {
                        "type": "ElInputNumber",
                        "model": "toolbox.feature.saveAsImage.emphasis.iconStyle.textBorderRadius",
                        "props": {
                          "placeholder": "文本圆角"
                        },
                        "_raw": {
                          "label": "文本圆角",
                          "desc": "\n\n<p>文本区域圆角大小。</p>\n"
                        }
                      },
                      {
                        "type": "ElInputNumber",
                        "model": "toolbox.feature.saveAsImage.emphasis.iconStyle.textPadding",
                        "props": {
                          "placeholder": "文本内边距"
                        },
                        "_raw": {
                          "label": "文本内边距",
                          "desc": "\n\n<p>文本区域内边距。</p>\n"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "toolbox.feature.saveAsImage.pixelRatio",
                  "default": 1
                },
                "props": {
                  "placeholder": "像素比"
                },
                "_raw": {
                  "label": "像素比",
                  "desc": "\n\n<p>保存图片的分辨率比例，默认跟容器相同大小，如果需要保存更高分辨率的，可以设置为大于 1 的值，例如 2。</p>\n"
                }
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "还原",
              "name": "restore"
            },
            "children": [
              {
                "type": "ElSwitch",
                "model": {
                  "path": "toolbox.feature.restore.show",
                  "default": true
                },
                "props": {
                  "placeholder": "显示"
                },
                "_raw": {
                  "label": "显示",
                  "desc": "<p>是否显示该工具。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "toolbox.feature.restore.title",
                  "default": "还原"
                },
                "props": {
                  "placeholder": "标题"
                },
                "_raw": {
                  "label": "标题"
                }
              },
              {
                "type": "ElInput",
                "model": "toolbox.feature.restore.icon",
                "props": {
                  "placeholder": "图标"
                },
                "_raw": {
                  "label": "图标",
                  "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "图标样式",
                  "name": "iconStyle"
                },
                "children": [
                  {
                    "type": "SmartColorInput",
                    "model": {
                      "path": "toolbox.feature.restore.iconStyle.color",
                      "default": "none"
                    },
                    "props": {
                      "placeholder": "颜色",
                      "keywords": [
                        "none",
                        "inherit",
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
                      "path": "toolbox.feature.restore.iconStyle.borderColor",
                      "default": "#666"
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
                      "path": "toolbox.feature.restore.iconStyle.borderWidth",
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
                      "path": "toolbox.feature.restore.iconStyle.borderType",
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
                      "path": "toolbox.feature.restore.iconStyle.borderDashOffset",
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
                      "path": "toolbox.feature.restore.iconStyle.borderCap",
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
                      "path": "toolbox.feature.restore.iconStyle.borderJoin",
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
                      "path": "toolbox.feature.restore.iconStyle.borderMiterLimit",
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
                    "model": "toolbox.feature.restore.iconStyle.shadowBlur",
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
                    "model": "toolbox.feature.restore.iconStyle.shadowColor",
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
                      "path": "toolbox.feature.restore.iconStyle.shadowOffsetX",
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
                      "path": "toolbox.feature.restore.iconStyle.shadowOffsetY",
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
                      "path": "toolbox.feature.restore.iconStyle.opacity",
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
                      "title": "图标样式",
                      "name": "iconStyle"
                    },
                    "children": [
                      {
                        "type": "SmartColorInput",
                        "model": {
                          "path": "toolbox.feature.restore.emphasis.iconStyle.color",
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
                          "path": "toolbox.feature.restore.emphasis.iconStyle.borderColor",
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
                          "path": "toolbox.feature.restore.emphasis.iconStyle.borderWidth",
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
                          "path": "toolbox.feature.restore.emphasis.iconStyle.borderType",
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
                          "path": "toolbox.feature.restore.emphasis.iconStyle.borderDashOffset",
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
                          "path": "toolbox.feature.restore.emphasis.iconStyle.borderCap",
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
                          "path": "toolbox.feature.restore.emphasis.iconStyle.borderJoin",
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
                          "path": "toolbox.feature.restore.emphasis.iconStyle.borderMiterLimit",
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
                        "model": "toolbox.feature.restore.emphasis.iconStyle.shadowBlur",
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
                        "model": "toolbox.feature.restore.emphasis.iconStyle.shadowColor",
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
                          "path": "toolbox.feature.restore.emphasis.iconStyle.shadowOffsetX",
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
                          "path": "toolbox.feature.restore.emphasis.iconStyle.shadowOffsetY",
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
                          "path": "toolbox.feature.restore.emphasis.iconStyle.opacity",
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
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.restore.emphasis.iconStyle.textPosition",
                          "default": "bottom"
                        },
                        "props": {
                          "placeholder": "文本位置"
                        },
                        "_raw": {
                          "label": "文本位置",
                          "desc": "<p>文本位置，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code> / <code class=\"codespan\">&#39;top&#39;</code> / <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.restore.emphasis.iconStyle.textFill",
                          "default": "#000"
                        },
                        "props": {
                          "placeholder": "文本填充"
                        },
                        "_raw": {
                          "label": "文本填充",
                          "desc": "\n\n<p>文本颜色，如果未设定，则依次取图标 emphasis 时候的填充色、描边色，如果都不存在，则为 <code class=\"codespan\">&#39;#000&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.restore.emphasis.iconStyle.textAlign",
                          "default": "center"
                        },
                        "props": {
                          "placeholder": "文本对齐"
                        },
                        "_raw": {
                          "label": "文本对齐",
                          "desc": "\n\n<p>文本对齐方式，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;center&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "SmartColorInput",
                        "model": "toolbox.feature.restore.emphasis.iconStyle.textBackgroundColor",
                        "props": {
                          "placeholder": "文本背景色",
                          "keywords": [
                            "inherit",
                            "none",
                            "transparent"
                          ],
                          "allowInherit": true
                        },
                        "_raw": {
                          "label": "文本背景色",
                          "desc": "\n\n<p>文本区域填充色。</p>\n"
                        }
                      },
                      {
                        "type": "ElInputNumber",
                        "model": "toolbox.feature.restore.emphasis.iconStyle.textBorderRadius",
                        "props": {
                          "placeholder": "文本圆角"
                        },
                        "_raw": {
                          "label": "文本圆角",
                          "desc": "\n\n<p>文本区域圆角大小。</p>\n"
                        }
                      },
                      {
                        "type": "ElInputNumber",
                        "model": "toolbox.feature.restore.emphasis.iconStyle.textPadding",
                        "props": {
                          "placeholder": "文本内边距"
                        },
                        "_raw": {
                          "label": "文本内边距",
                          "desc": "\n\n<p>文本区域内边距。</p>\n"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "数据视图",
              "name": "dataView"
            },
            "children": [
              {
                "type": "ElSwitch",
                "model": {
                  "path": "toolbox.feature.dataView.show",
                  "default": true
                },
                "props": {
                  "placeholder": "显示"
                },
                "_raw": {
                  "label": "显示",
                  "desc": "<p>是否显示该工具。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "toolbox.feature.dataView.title",
                  "default": "数据视图"
                },
                "props": {
                  "placeholder": "标题"
                },
                "_raw": {
                  "label": "标题",
                  "desc": "<div  class=\"doc-partial-security-warning\">\n<span  class=\"warning-title\">[警告]:</span> <code  class=\"codespan\">dataView</code> 面板是用 HTML 实现的，一些部分允许用户自定义格式和样式。<code  class=\"codespan\">title</code> 字段会直接拼接到此 HTML 中，并没有做转义。因此传入前须要正确转义。 使用时必须考虑 <strong >安全风险</strong>。文档 <a  href=\"https://echarts.apache.org/handbook/zh/best-practices/security\" target=\"_blank\">“安全指南”</a> 给出了安全使用建议。\n</div>\n\n\n"
                }
              },
              {
                "type": "ElInput",
                "model": "toolbox.feature.dataView.icon",
                "props": {
                  "placeholder": "图标"
                },
                "_raw": {
                  "label": "图标",
                  "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "图标样式",
                  "name": "iconStyle"
                },
                "children": [
                  {
                    "type": "SmartColorInput",
                    "model": {
                      "path": "toolbox.feature.dataView.iconStyle.color",
                      "default": "none"
                    },
                    "props": {
                      "placeholder": "颜色",
                      "keywords": [
                        "none",
                        "inherit",
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
                      "path": "toolbox.feature.dataView.iconStyle.borderColor",
                      "default": "#666"
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
                      "path": "toolbox.feature.dataView.iconStyle.borderWidth",
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
                      "path": "toolbox.feature.dataView.iconStyle.borderType",
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
                      "path": "toolbox.feature.dataView.iconStyle.borderDashOffset",
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
                      "path": "toolbox.feature.dataView.iconStyle.borderCap",
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
                      "path": "toolbox.feature.dataView.iconStyle.borderJoin",
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
                      "path": "toolbox.feature.dataView.iconStyle.borderMiterLimit",
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
                    "model": "toolbox.feature.dataView.iconStyle.shadowBlur",
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
                    "model": "toolbox.feature.dataView.iconStyle.shadowColor",
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
                      "path": "toolbox.feature.dataView.iconStyle.shadowOffsetX",
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
                      "path": "toolbox.feature.dataView.iconStyle.shadowOffsetY",
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
                      "path": "toolbox.feature.dataView.iconStyle.opacity",
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
                      "title": "图标样式",
                      "name": "iconStyle"
                    },
                    "children": [
                      {
                        "type": "SmartColorInput",
                        "model": {
                          "path": "toolbox.feature.dataView.emphasis.iconStyle.color",
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
                          "path": "toolbox.feature.dataView.emphasis.iconStyle.borderColor",
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
                          "path": "toolbox.feature.dataView.emphasis.iconStyle.borderWidth",
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
                          "path": "toolbox.feature.dataView.emphasis.iconStyle.borderType",
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
                          "path": "toolbox.feature.dataView.emphasis.iconStyle.borderDashOffset",
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
                          "path": "toolbox.feature.dataView.emphasis.iconStyle.borderCap",
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
                          "path": "toolbox.feature.dataView.emphasis.iconStyle.borderJoin",
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
                          "path": "toolbox.feature.dataView.emphasis.iconStyle.borderMiterLimit",
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
                        "model": "toolbox.feature.dataView.emphasis.iconStyle.shadowBlur",
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
                        "model": "toolbox.feature.dataView.emphasis.iconStyle.shadowColor",
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
                          "path": "toolbox.feature.dataView.emphasis.iconStyle.shadowOffsetX",
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
                          "path": "toolbox.feature.dataView.emphasis.iconStyle.shadowOffsetY",
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
                          "path": "toolbox.feature.dataView.emphasis.iconStyle.opacity",
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
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.dataView.emphasis.iconStyle.textPosition",
                          "default": "bottom"
                        },
                        "props": {
                          "placeholder": "文本位置"
                        },
                        "_raw": {
                          "label": "文本位置",
                          "desc": "<p>文本位置，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code> / <code class=\"codespan\">&#39;top&#39;</code> / <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.dataView.emphasis.iconStyle.textFill",
                          "default": "#000"
                        },
                        "props": {
                          "placeholder": "文本填充"
                        },
                        "_raw": {
                          "label": "文本填充",
                          "desc": "\n\n<p>文本颜色，如果未设定，则依次取图标 emphasis 时候的填充色、描边色，如果都不存在，则为 <code class=\"codespan\">&#39;#000&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.dataView.emphasis.iconStyle.textAlign",
                          "default": "center"
                        },
                        "props": {
                          "placeholder": "文本对齐"
                        },
                        "_raw": {
                          "label": "文本对齐",
                          "desc": "\n\n<p>文本对齐方式，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;center&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "SmartColorInput",
                        "model": "toolbox.feature.dataView.emphasis.iconStyle.textBackgroundColor",
                        "props": {
                          "placeholder": "文本背景色",
                          "keywords": [
                            "inherit",
                            "none",
                            "transparent"
                          ],
                          "allowInherit": true
                        },
                        "_raw": {
                          "label": "文本背景色",
                          "desc": "\n\n<p>文本区域填充色。</p>\n"
                        }
                      },
                      {
                        "type": "ElInputNumber",
                        "model": "toolbox.feature.dataView.emphasis.iconStyle.textBorderRadius",
                        "props": {
                          "placeholder": "文本圆角"
                        },
                        "_raw": {
                          "label": "文本圆角",
                          "desc": "\n\n<p>文本区域圆角大小。</p>\n"
                        }
                      },
                      {
                        "type": "ElInputNumber",
                        "model": "toolbox.feature.dataView.emphasis.iconStyle.textPadding",
                        "props": {
                          "placeholder": "文本内边距"
                        },
                        "_raw": {
                          "label": "文本内边距",
                          "desc": "\n\n<p>文本区域内边距。</p>\n"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "toolbox.feature.dataView.readOnly",
                  "default": false
                },
                "props": {
                  "placeholder": "只读"
                },
                "_raw": {
                  "label": "只读",
                  "desc": "\n\n<p>是否不可编辑（只读）。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "toolbox.feature.dataView.optionToContent",
                "props": {
                  "placeholder": "配置转内容"
                },
                "_raw": {
                  "label": "配置转内容",
                  "desc": "<pre><code class=\"lang-ts\">(option:Object) =&gt; HTMLDomElement|string\n</code></pre>\n<p>自定义 dataView 展现函数，用以取代默认的 textarea 使用更丰富的数据编辑。可以返回 dom 对象或者 html 字符串。</p>\n<div  class=\"doc-partial-security-warning\">\n<span  class=\"warning-title\">[警告]:</span> <code  class=\"codespan\">dataView</code> 面板是用 HTML 实现的，一些部分允许用户自定义格式和样式。<code  class=\"codespan\">optionToContent</code> 给出的 HTML 会直接拼接到面板 HTML 中，并没有做转义。因此传入前须要正确转义。 使用时必须考虑 <strong >安全风险</strong>。文档 <a  href=\"https://echarts.apache.org/handbook/zh/best-practices/security\" target=\"_blank\">“安全指南”</a> 给出了安全使用建议。\n</div>\n\n\n<p>如下示例使用表格展现数据值：</p>\n<pre><code class=\"lang-ts\">optionToContent: function(opt) {\n    var axisData = opt.xAxis[0].data;\n    var series = opt.series;\n    var table = &#39;&lt;table style=&quot;width:100%;text-align:center&quot;&gt;&lt;tbody&gt;&lt;tr&gt;&#39;\n        + &#39;&lt;td&gt;时间&lt;/td&gt;&#39;\n        + &#39;&lt;td&gt;&#39; + echarts.format.encodeHTML(series[0].name) + &#39;&lt;/td&gt;&#39;\n        + &#39;&lt;td&gt;&#39; + echarts.format.encodeHTML(series[1].name) + &#39;&lt;/td&gt;&#39;\n        + &#39;&lt;/tr&gt;&#39;;\n    for (var i = 0, l = axisData.length; i &lt; l; i++) {\n        table += &#39;&lt;tr&gt;&#39;\n            + &#39;&lt;td&gt;&#39; + echarts.format.encodeHTML(axisData[i]) + &#39;&lt;/td&gt;&#39;\n            + &#39;&lt;td&gt;&#39; + echarts.format.encodeHTML(series[0].data[i]) + &#39;&lt;/td&gt;&#39;\n            + &#39;&lt;td&gt;&#39; + echarts.format.encodeHTML(series[1].data[i]) + &#39;&lt;/td&gt;&#39;\n            + &#39;&lt;/tr&gt;&#39;;\n    }\n    table += &#39;&lt;/tbody&gt;&lt;/table&gt;&#39;;\n    return table;\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "toolbox.feature.dataView.contentToOption",
                "props": {
                  "placeholder": "内容转配置"
                },
                "_raw": {
                  "label": "内容转配置",
                  "desc": "<pre><code class=\"lang-ts\">(container:HTMLDomElement, option:Object) =&gt; Object\n</code></pre>\n<p>在使用 optionToContent 的情况下，如果支持数据编辑后的刷新，需要自行通过该函数实现组装 option 的逻辑。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "toolbox.feature.dataView.lang",
                  "default": "['数据视图', '关闭', '刷新']"
                },
                "props": {
                  "placeholder": "语言"
                },
                "_raw": {
                  "label": "语言",
                  "desc": "<p>数据视图上有三个话术，默认是<code class=\"codespan\">[&#39;数据视图&#39;, &#39;关闭&#39;, &#39;刷新&#39;]</code>。</p>\n<div  class=\"doc-partial-security-warning\">\n<span  class=\"warning-title\">[警告]:</span> <code  class=\"codespan\">dataView</code> 面板是用 HTML 实现的，一些部分允许用户自定义格式和样式。<code  class=\"codespan\">lang</code> 中的内容会直接拼接到此 HTML 中，并没有做转义。因此传入前须要正确转义。 使用时必须考虑 <strong >安全风险</strong>。文档 <a  href=\"https://echarts.apache.org/handbook/zh/best-practices/security\" target=\"_blank\">“安全指南”</a> 给出了安全使用建议。\n</div>\n\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "toolbox.feature.dataView.backgroundColor",
                  "default": "#fff"
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
                  "desc": "\n\n<p>数据视图浮层背景色。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "toolbox.feature.dataView.textareaColor",
                  "default": "#fff"
                },
                "props": {
                  "placeholder": "文本域颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "文本域颜色",
                  "desc": "\n\n<p>数据视图浮层文本输入区背景色。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "toolbox.feature.dataView.textareaBorderColor",
                  "default": "#333"
                },
                "props": {
                  "placeholder": "文本域边框色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "文本域边框色",
                  "desc": "\n\n<p>数据视图浮层文本输入区边框颜色。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "toolbox.feature.dataView.textColor",
                  "default": "#000"
                },
                "props": {
                  "placeholder": "文本颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "文本颜色",
                  "desc": "\n\n<p>文本颜色。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "toolbox.feature.dataView.buttonColor",
                  "default": "#c23531"
                },
                "props": {
                  "placeholder": "按钮颜色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "按钮颜色",
                  "desc": "\n\n<p>按钮颜色。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "toolbox.feature.dataView.buttonTextColor",
                  "default": "#fff"
                },
                "props": {
                  "placeholder": "按钮文本色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "按钮文本色",
                  "desc": "\n\n<p>按钮文本颜色。</p>\n"
                }
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "数据区域缩放",
              "name": "dataZoom"
            },
            "children": [
              {
                "type": "ElSwitch",
                "model": {
                  "path": "toolbox.feature.dataZoom.show",
                  "default": true
                },
                "props": {
                  "placeholder": "显示"
                },
                "_raw": {
                  "label": "显示",
                  "desc": "<p>是否显示该工具。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "标题",
                  "name": "title"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "toolbox.feature.dataZoom.title.zoom",
                      "default": "区域缩放"
                    },
                    "props": {
                      "placeholder": "缩放"
                    },
                    "_raw": {
                      "label": "缩放"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "toolbox.feature.dataZoom.title.back",
                      "default": "区域缩放还原"
                    },
                    "props": {
                      "placeholder": "后退"
                    },
                    "_raw": {
                      "label": "后退"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "图标",
                  "name": "icon"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.dataZoom.icon.zoom",
                    "props": {
                      "placeholder": "缩放"
                    },
                    "_raw": {
                      "label": "缩放",
                      "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.dataZoom.icon.back",
                    "props": {
                      "placeholder": "后退"
                    },
                    "_raw": {
                      "label": "后退",
                      "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "图标样式",
                  "name": "iconStyle"
                },
                "children": [
                  {
                    "type": "SmartColorInput",
                    "model": {
                      "path": "toolbox.feature.dataZoom.iconStyle.color",
                      "default": "none"
                    },
                    "props": {
                      "placeholder": "颜色",
                      "keywords": [
                        "none",
                        "inherit",
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
                      "path": "toolbox.feature.dataZoom.iconStyle.borderColor",
                      "default": "#666"
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
                      "path": "toolbox.feature.dataZoom.iconStyle.borderWidth",
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
                      "path": "toolbox.feature.dataZoom.iconStyle.borderType",
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
                      "path": "toolbox.feature.dataZoom.iconStyle.borderDashOffset",
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
                      "path": "toolbox.feature.dataZoom.iconStyle.borderCap",
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
                      "path": "toolbox.feature.dataZoom.iconStyle.borderJoin",
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
                      "path": "toolbox.feature.dataZoom.iconStyle.borderMiterLimit",
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
                    "model": "toolbox.feature.dataZoom.iconStyle.shadowBlur",
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
                    "model": "toolbox.feature.dataZoom.iconStyle.shadowColor",
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
                      "path": "toolbox.feature.dataZoom.iconStyle.shadowOffsetX",
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
                      "path": "toolbox.feature.dataZoom.iconStyle.shadowOffsetY",
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
                      "path": "toolbox.feature.dataZoom.iconStyle.opacity",
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
                      "title": "图标样式",
                      "name": "iconStyle"
                    },
                    "children": [
                      {
                        "type": "SmartColorInput",
                        "model": {
                          "path": "toolbox.feature.dataZoom.emphasis.iconStyle.color",
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
                          "path": "toolbox.feature.dataZoom.emphasis.iconStyle.borderColor",
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
                          "path": "toolbox.feature.dataZoom.emphasis.iconStyle.borderWidth",
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
                          "path": "toolbox.feature.dataZoom.emphasis.iconStyle.borderType",
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
                          "path": "toolbox.feature.dataZoom.emphasis.iconStyle.borderDashOffset",
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
                          "path": "toolbox.feature.dataZoom.emphasis.iconStyle.borderCap",
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
                          "path": "toolbox.feature.dataZoom.emphasis.iconStyle.borderJoin",
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
                          "path": "toolbox.feature.dataZoom.emphasis.iconStyle.borderMiterLimit",
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
                        "model": "toolbox.feature.dataZoom.emphasis.iconStyle.shadowBlur",
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
                        "model": "toolbox.feature.dataZoom.emphasis.iconStyle.shadowColor",
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
                          "path": "toolbox.feature.dataZoom.emphasis.iconStyle.shadowOffsetX",
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
                          "path": "toolbox.feature.dataZoom.emphasis.iconStyle.shadowOffsetY",
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
                          "path": "toolbox.feature.dataZoom.emphasis.iconStyle.opacity",
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
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.dataZoom.emphasis.iconStyle.textPosition",
                          "default": "bottom"
                        },
                        "props": {
                          "placeholder": "文本位置"
                        },
                        "_raw": {
                          "label": "文本位置",
                          "desc": "<p>文本位置，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code> / <code class=\"codespan\">&#39;top&#39;</code> / <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.dataZoom.emphasis.iconStyle.textFill",
                          "default": "#000"
                        },
                        "props": {
                          "placeholder": "文本填充"
                        },
                        "_raw": {
                          "label": "文本填充",
                          "desc": "\n\n<p>文本颜色，如果未设定，则依次取图标 emphasis 时候的填充色、描边色，如果都不存在，则为 <code class=\"codespan\">&#39;#000&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.dataZoom.emphasis.iconStyle.textAlign",
                          "default": "center"
                        },
                        "props": {
                          "placeholder": "文本对齐"
                        },
                        "_raw": {
                          "label": "文本对齐",
                          "desc": "\n\n<p>文本对齐方式，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;center&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "SmartColorInput",
                        "model": "toolbox.feature.dataZoom.emphasis.iconStyle.textBackgroundColor",
                        "props": {
                          "placeholder": "文本背景色",
                          "keywords": [
                            "inherit",
                            "none",
                            "transparent"
                          ],
                          "allowInherit": true
                        },
                        "_raw": {
                          "label": "文本背景色",
                          "desc": "\n\n<p>文本区域填充色。</p>\n"
                        }
                      },
                      {
                        "type": "ElInputNumber",
                        "model": "toolbox.feature.dataZoom.emphasis.iconStyle.textBorderRadius",
                        "props": {
                          "placeholder": "文本圆角"
                        },
                        "_raw": {
                          "label": "文本圆角",
                          "desc": "\n\n<p>文本区域圆角大小。</p>\n"
                        }
                      },
                      {
                        "type": "ElInputNumber",
                        "model": "toolbox.feature.dataZoom.emphasis.iconStyle.textPadding",
                        "props": {
                          "placeholder": "文本内边距"
                        },
                        "_raw": {
                          "label": "文本内边距",
                          "desc": "\n\n<p>文本区域内边距。</p>\n"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "toolbox.feature.dataZoom.filterMode",
                  "default": "filter"
                },
                "props": {
                  "placeholder": "筛选模式"
                },
                "_raw": {
                  "label": "筛选模式",
                  "desc": "<p>与 <a href=\"#dataZoom.filterMode\">dataZoom.filterMode</a> 含义和取值相同。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "toolbox.feature.dataZoom.xAxisIndex",
                "props": {
                  "placeholder": "x轴索引",
                  "types": [
                    "number",
                    "array",
                    "boolean"
                  ],
                  "defaultType": "number",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "x轴索引",
                  "desc": "<p>指定哪些 <a href=\"#xAxis\">xAxis</a> 被控制。如果缺省则控制所有的x轴。如果设置为 <code class=\"codespan\">false</code> 则不控制任何x轴。如果设置成 <code class=\"codespan\">3</code> 则控制 axisIndex 为 <code class=\"codespan\">3</code> 的x轴。如果设置为 <code class=\"codespan\">[0, 3]</code> 则控制 axisIndex 为 <code class=\"codespan\">0</code> 和 <code class=\"codespan\">3</code> 的x轴。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "toolbox.feature.dataZoom.yAxisIndex",
                "props": {
                  "placeholder": "Y轴索引",
                  "types": [
                    "number",
                    "array",
                    "boolean"
                  ],
                  "defaultType": "number",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "Y轴索引",
                  "desc": "<p>指定哪些 <a href=\"#yAxis\">yAxis</a> 被控制。如果缺省则控制所有的y轴。如果设置为 <code class=\"codespan\">false</code> 则不控制任何y轴。如果设置成 <code class=\"codespan\">3</code> 则控制 axisIndex 为 <code class=\"codespan\">3</code> 的y轴。如果设置为 <code class=\"codespan\">[0, 3]</code> 则控制 axisIndex 为 <code class=\"codespan\">0</code> 和 <code class=\"codespan\">3</code> 的y轴。</p>\n"
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
                      "path": "toolbox.feature.dataZoom.brushStyle.color",
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
                      "path": "toolbox.feature.dataZoom.brushStyle.borderColor",
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
                      "path": "toolbox.feature.dataZoom.brushStyle.borderWidth",
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
                      "path": "toolbox.feature.dataZoom.brushStyle.borderType",
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
                      "path": "toolbox.feature.dataZoom.brushStyle.borderDashOffset",
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
                      "path": "toolbox.feature.dataZoom.brushStyle.borderCap",
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
                      "path": "toolbox.feature.dataZoom.brushStyle.borderJoin",
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
                      "path": "toolbox.feature.dataZoom.brushStyle.borderMiterLimit",
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
                    "model": "toolbox.feature.dataZoom.brushStyle.shadowBlur",
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
                    "model": "toolbox.feature.dataZoom.brushStyle.shadowColor",
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
                      "path": "toolbox.feature.dataZoom.brushStyle.shadowOffsetX",
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
                      "path": "toolbox.feature.dataZoom.brushStyle.shadowOffsetY",
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
                      "path": "toolbox.feature.dataZoom.brushStyle.opacity",
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
              "title": "动态类型切换",
              "name": "magicType"
            },
            "children": [
              {
                "type": "ElSwitch",
                "model": {
                  "path": "toolbox.feature.magicType.show",
                  "default": true
                },
                "props": {
                  "placeholder": "显示"
                },
                "_raw": {
                  "label": "显示",
                  "desc": "<p>是否显示该工具。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "toolbox.feature.magicType.type",
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>启用的动态类型，包括<code class=\"codespan\">&#39;line&#39;</code>（切换为折线图）, <code class=\"codespan\">&#39;bar&#39;</code>（切换为柱状图）, <code class=\"codespan\">&#39;stack&#39;</code>（切换为堆叠模式）。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "标题",
                  "name": "title"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "toolbox.feature.magicType.title.line",
                      "default": "切换为折线图"
                    },
                    "props": {
                      "placeholder": "折线图"
                    },
                    "_raw": {
                      "label": "折线图"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "toolbox.feature.magicType.title.bar",
                      "default": "切换为柱状图"
                    },
                    "props": {
                      "placeholder": "柱状图"
                    },
                    "_raw": {
                      "label": "柱状图"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "toolbox.feature.magicType.title.stack",
                      "default": "切换为堆叠"
                    },
                    "props": {
                      "placeholder": "堆叠"
                    },
                    "_raw": {
                      "label": "堆叠"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "toolbox.feature.magicType.title.tiled",
                      "default": "切换为平铺"
                    },
                    "props": {
                      "placeholder": "平铺"
                    },
                    "_raw": {
                      "label": "平铺"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "图标",
                  "name": "icon"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.magicType.icon.line",
                    "props": {
                      "placeholder": "折线图"
                    },
                    "_raw": {
                      "label": "折线图",
                      "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.magicType.icon.bar",
                    "props": {
                      "placeholder": "柱状图"
                    },
                    "_raw": {
                      "label": "柱状图",
                      "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.magicType.icon.stack",
                    "props": {
                      "placeholder": "堆叠"
                    },
                    "_raw": {
                      "label": "堆叠",
                      "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "图标样式",
                  "name": "iconStyle"
                },
                "children": [
                  {
                    "type": "SmartColorInput",
                    "model": {
                      "path": "toolbox.feature.magicType.iconStyle.color",
                      "default": "none"
                    },
                    "props": {
                      "placeholder": "颜色",
                      "keywords": [
                        "none",
                        "inherit",
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
                      "path": "toolbox.feature.magicType.iconStyle.borderColor",
                      "default": "#666"
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
                      "path": "toolbox.feature.magicType.iconStyle.borderWidth",
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
                      "path": "toolbox.feature.magicType.iconStyle.borderType",
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
                      "path": "toolbox.feature.magicType.iconStyle.borderDashOffset",
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
                      "path": "toolbox.feature.magicType.iconStyle.borderCap",
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
                      "path": "toolbox.feature.magicType.iconStyle.borderJoin",
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
                      "path": "toolbox.feature.magicType.iconStyle.borderMiterLimit",
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
                    "model": "toolbox.feature.magicType.iconStyle.shadowBlur",
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
                    "model": "toolbox.feature.magicType.iconStyle.shadowColor",
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
                      "path": "toolbox.feature.magicType.iconStyle.shadowOffsetX",
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
                      "path": "toolbox.feature.magicType.iconStyle.shadowOffsetY",
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
                      "path": "toolbox.feature.magicType.iconStyle.opacity",
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
                      "title": "图标样式",
                      "name": "iconStyle"
                    },
                    "children": [
                      {
                        "type": "SmartColorInput",
                        "model": {
                          "path": "toolbox.feature.magicType.emphasis.iconStyle.color",
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
                          "path": "toolbox.feature.magicType.emphasis.iconStyle.borderColor",
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
                          "path": "toolbox.feature.magicType.emphasis.iconStyle.borderWidth",
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
                          "path": "toolbox.feature.magicType.emphasis.iconStyle.borderType",
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
                          "path": "toolbox.feature.magicType.emphasis.iconStyle.borderDashOffset",
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
                          "path": "toolbox.feature.magicType.emphasis.iconStyle.borderCap",
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
                          "path": "toolbox.feature.magicType.emphasis.iconStyle.borderJoin",
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
                          "path": "toolbox.feature.magicType.emphasis.iconStyle.borderMiterLimit",
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
                        "model": "toolbox.feature.magicType.emphasis.iconStyle.shadowBlur",
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
                        "model": "toolbox.feature.magicType.emphasis.iconStyle.shadowColor",
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
                          "path": "toolbox.feature.magicType.emphasis.iconStyle.shadowOffsetX",
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
                          "path": "toolbox.feature.magicType.emphasis.iconStyle.shadowOffsetY",
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
                          "path": "toolbox.feature.magicType.emphasis.iconStyle.opacity",
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
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.magicType.emphasis.iconStyle.textPosition",
                          "default": "bottom"
                        },
                        "props": {
                          "placeholder": "文本位置"
                        },
                        "_raw": {
                          "label": "文本位置",
                          "desc": "<p>文本位置，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code> / <code class=\"codespan\">&#39;top&#39;</code> / <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.magicType.emphasis.iconStyle.textFill",
                          "default": "#000"
                        },
                        "props": {
                          "placeholder": "文本填充"
                        },
                        "_raw": {
                          "label": "文本填充",
                          "desc": "\n\n<p>文本颜色，如果未设定，则依次取图标 emphasis 时候的填充色、描边色，如果都不存在，则为 <code class=\"codespan\">&#39;#000&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "ElInput",
                        "model": {
                          "path": "toolbox.feature.magicType.emphasis.iconStyle.textAlign",
                          "default": "center"
                        },
                        "props": {
                          "placeholder": "文本对齐"
                        },
                        "_raw": {
                          "label": "文本对齐",
                          "desc": "\n\n<p>文本对齐方式，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;center&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code>。</p>\n"
                        }
                      },
                      {
                        "type": "SmartColorInput",
                        "model": "toolbox.feature.magicType.emphasis.iconStyle.textBackgroundColor",
                        "props": {
                          "placeholder": "文本背景色",
                          "keywords": [
                            "inherit",
                            "none",
                            "transparent"
                          ],
                          "allowInherit": true
                        },
                        "_raw": {
                          "label": "文本背景色",
                          "desc": "\n\n<p>文本区域填充色。</p>\n"
                        }
                      },
                      {
                        "type": "ElInputNumber",
                        "model": "toolbox.feature.magicType.emphasis.iconStyle.textBorderRadius",
                        "props": {
                          "placeholder": "文本圆角"
                        },
                        "_raw": {
                          "label": "文本圆角",
                          "desc": "\n\n<p>文本区域圆角大小。</p>\n"
                        }
                      },
                      {
                        "type": "ElInputNumber",
                        "model": "toolbox.feature.magicType.emphasis.iconStyle.textPadding",
                        "props": {
                          "placeholder": "文本内边距"
                        },
                        "_raw": {
                          "label": "文本内边距",
                          "desc": "\n\n<p>文本区域内边距。</p>\n"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "选项",
                  "name": "option"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.magicType.option.line",
                    "props": {
                      "placeholder": "折线图"
                    },
                    "_raw": {
                      "label": "折线图"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.magicType.option.bar",
                    "props": {
                      "placeholder": "柱状图"
                    },
                    "_raw": {
                      "label": "柱状图"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.magicType.option.stack",
                    "props": {
                      "placeholder": "堆叠"
                    },
                    "_raw": {
                      "label": "堆叠"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "系列索引",
                  "name": "seriesIndex"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.magicType.seriesIndex.line",
                    "props": {
                      "placeholder": "折线图"
                    },
                    "_raw": {
                      "label": "折线图"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.magicType.seriesIndex.bar",
                    "props": {
                      "placeholder": "柱状图"
                    },
                    "_raw": {
                      "label": "柱状图"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "刷选",
              "name": "brush"
            },
            "children": [
              {
                "type": "ElInput",
                "model": "toolbox.feature.brush.type",
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>使用的按钮，取值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;rect&#39;</code>：开启矩形选框选择功能。</li>\n<li><code class=\"codespan\">&#39;polygon&#39;</code>：开启任意形状选框选择功能。</li>\n<li><code class=\"codespan\">&#39;lineX&#39;</code>：开启横向选择功能。</li>\n<li><code class=\"codespan\">&#39;lineY&#39;</code>：开启纵向选择功能。</li>\n<li><code class=\"codespan\">&#39;keep&#39;</code>：切换『单选』和『多选』模式。后者可支持同时画多个选框。前者支持单击清除所有选框。</li>\n<li><code class=\"codespan\">&#39;clear&#39;</code>：清空所有选框。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "图标",
                  "name": "icon"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.brush.icon.rect",
                    "props": {
                      "placeholder": "矩形"
                    },
                    "_raw": {
                      "label": "矩形",
                      "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.brush.icon.polygon",
                    "props": {
                      "placeholder": "多边形"
                    },
                    "_raw": {
                      "label": "多边形",
                      "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.brush.icon.lineX",
                    "props": {
                      "placeholder": "横向线"
                    },
                    "_raw": {
                      "label": "横向线",
                      "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.brush.icon.lineY",
                    "props": {
                      "placeholder": "纵向线"
                    },
                    "_raw": {
                      "label": "纵向线",
                      "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.brush.icon.keep",
                    "props": {
                      "placeholder": "保留"
                    },
                    "_raw": {
                      "label": "保留",
                      "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "toolbox.feature.brush.icon.clear",
                    "props": {
                      "placeholder": "清除"
                    },
                    "_raw": {
                      "label": "清除",
                      "desc": "<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://example.website/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "标题",
                  "name": "title"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "toolbox.feature.brush.title.rect",
                      "default": "矩形选择"
                    },
                    "props": {
                      "placeholder": "矩形"
                    },
                    "_raw": {
                      "label": "矩形"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "toolbox.feature.brush.title.polygon",
                      "default": "圈选"
                    },
                    "props": {
                      "placeholder": "多边形"
                    },
                    "_raw": {
                      "label": "多边形"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "toolbox.feature.brush.title.lineX",
                      "default": "横向选择"
                    },
                    "props": {
                      "placeholder": "横向线"
                    },
                    "_raw": {
                      "label": "横向线"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "toolbox.feature.brush.title.lineY",
                      "default": "纵向选择"
                    },
                    "props": {
                      "placeholder": "纵向线"
                    },
                    "_raw": {
                      "label": "纵向线"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "toolbox.feature.brush.title.keep",
                      "default": "保持选择"
                    },
                    "props": {
                      "placeholder": "保留"
                    },
                    "_raw": {
                      "label": "保留"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "toolbox.feature.brush.title.clear",
                      "default": "清除选择"
                    },
                    "props": {
                      "placeholder": "清除"
                    },
                    "_raw": {
                      "label": "清除"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "图标样式",
          "name": "iconStyle"
        },
        "children": [
          {
            "type": "SmartColorInput",
            "model": {
              "path": "toolbox.iconStyle.color",
              "default": "none"
            },
            "props": {
              "placeholder": "颜色",
              "keywords": [
                "none",
                "inherit",
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
              "path": "toolbox.iconStyle.borderColor",
              "default": "#666"
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
              "path": "toolbox.iconStyle.borderWidth",
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
              "path": "toolbox.iconStyle.borderType",
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
              "path": "toolbox.iconStyle.borderDashOffset",
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
              "path": "toolbox.iconStyle.borderCap",
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
              "path": "toolbox.iconStyle.borderJoin",
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
              "path": "toolbox.iconStyle.borderMiterLimit",
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
            "model": "toolbox.iconStyle.shadowBlur",
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
            "model": "toolbox.iconStyle.shadowColor",
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
              "path": "toolbox.iconStyle.shadowOffsetX",
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
              "path": "toolbox.iconStyle.shadowOffsetY",
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
              "path": "toolbox.iconStyle.opacity",
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
              "title": "图标样式",
              "name": "iconStyle"
            },
            "children": [
              {
                "type": "SmartColorInput",
                "model": {
                  "path": "toolbox.emphasis.iconStyle.color",
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
                  "path": "toolbox.emphasis.iconStyle.borderColor",
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
                  "path": "toolbox.emphasis.iconStyle.borderWidth",
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
                  "path": "toolbox.emphasis.iconStyle.borderType",
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
                  "path": "toolbox.emphasis.iconStyle.borderDashOffset",
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
                  "path": "toolbox.emphasis.iconStyle.borderCap",
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
                  "path": "toolbox.emphasis.iconStyle.borderJoin",
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
                  "path": "toolbox.emphasis.iconStyle.borderMiterLimit",
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
                "model": "toolbox.emphasis.iconStyle.shadowBlur",
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
                "model": "toolbox.emphasis.iconStyle.shadowColor",
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
                  "path": "toolbox.emphasis.iconStyle.shadowOffsetX",
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
                  "path": "toolbox.emphasis.iconStyle.shadowOffsetY",
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
                  "path": "toolbox.emphasis.iconStyle.opacity",
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
                "type": "ElInput",
                "model": {
                  "path": "toolbox.emphasis.iconStyle.textPosition",
                  "default": "bottom"
                },
                "props": {
                  "placeholder": "文本位置"
                },
                "_raw": {
                  "label": "文本位置",
                  "desc": "<p>文本位置，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code> / <code class=\"codespan\">&#39;top&#39;</code> / <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "toolbox.emphasis.iconStyle.textFill",
                  "default": "#000"
                },
                "props": {
                  "placeholder": "文本填充"
                },
                "_raw": {
                  "label": "文本填充",
                  "desc": "\n\n<p>文本颜色，如果未设定，则依次取图标 emphasis 时候的填充色、描边色，如果都不存在，则为 <code class=\"codespan\">&#39;#000&#39;</code>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "toolbox.emphasis.iconStyle.textAlign",
                  "default": "center"
                },
                "props": {
                  "placeholder": "文本对齐"
                },
                "_raw": {
                  "label": "文本对齐",
                  "desc": "\n\n<p>文本对齐方式，<code class=\"codespan\">&#39;left&#39;</code> / <code class=\"codespan\">&#39;center&#39;</code> / <code class=\"codespan\">&#39;right&#39;</code>。</p>\n"
                }
              },
              {
                "type": "SmartColorInput",
                "model": "toolbox.emphasis.iconStyle.textBackgroundColor",
                "props": {
                  "placeholder": "文本背景色",
                  "keywords": [
                    "inherit",
                    "none",
                    "transparent"
                  ],
                  "allowInherit": true
                },
                "_raw": {
                  "label": "文本背景色",
                  "desc": "\n\n<p>文本区域填充色。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "toolbox.emphasis.iconStyle.textBorderRadius",
                "props": {
                  "placeholder": "文本圆角"
                },
                "_raw": {
                  "label": "文本圆角",
                  "desc": "\n\n<p>文本区域圆角大小。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "toolbox.emphasis.iconStyle.textPadding",
                "props": {
                  "placeholder": "文本内边距"
                },
                "_raw": {
                  "label": "文本内边距",
                  "desc": "\n\n<p>文本区域内边距。</p>\n"
                }
              }
            ]
          }
        ]
      },
      {
        "type": "ElInput",
        "model": {
          "path": "toolbox.zlevel",
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
          "path": "toolbox.z",
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
          "path": "toolbox.left",
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
          "desc": "\n\n\n\n<p>undefined组件离容器左侧的距离。</p>\n<p><code class=\"codespan\">left</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器宽度的百分比，也可以是 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">left</code> 的值为 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>，组件会根据相应的位置自动对齐。</p>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "toolbox.top",
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
          "desc": "\n\n\n\n<p>undefined组件离容器上侧的距离。</p>\n<p><code class=\"codespan\">top</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高度的百分比，也可以是 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">top</code> 的值为 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>，组件会根据相应的位置自动对齐。</p>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "toolbox.right",
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
          "desc": "\n\n\n\n<p>undefined组件离容器右侧的距离。</p>\n<p><code class=\"codespan\">right</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器宽度的百分比。</p>\n<p>默认自适应。</p>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "toolbox.bottom",
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
          "desc": "\n\n\n\n<p>undefined组件离容器下侧的距离。</p>\n<p>bottom 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高度的百分比。</p>\n<p>默认自适应。</p>\n"
        }
      },
      {
        "type": "SmartSizeInput",
        "model": {
          "path": "toolbox.width",
          "default": "auto"
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
          "desc": "\n\n\n\n<p>工具栏（toolbox）组件的宽度。默认自适应。</p>\n<p><code class=\"codespan\">width</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器宽度的百分比。</p>\n"
        }
      },
      {
        "type": "SmartSizeInput",
        "model": {
          "path": "toolbox.height",
          "default": "auto"
        },
        "props": {
          "placeholder": "高度",
          "allowPercentage": true,
          "keywords": [
            "auto"
          ]
        },
        "_raw": {
          "label": "高度",
          "desc": "\n\n\n\n<p>工具栏（toolbox）组件的高度。默认自适应。</p>\n<p><code class=\"codespan\">height</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高度的百分比。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": "toolbox.tooltip",
        "props": {
          "placeholder": "提示框"
        },
        "_raw": {
          "label": "提示框",
          "desc": "<p>工具箱的 tooltip 配置，配置项同 <a href=\"#tooltip\">tooltip</a>。默认不显示，可以在需要特殊定制文字样式（尤其是想用自定义 CSS 控制文字样式）的时候开启 tooltip，如下示例：</p>\n<pre><code class=\"lang-ts\">option = {\n    tooltip: {\n        show: true // 必须引入 tooltip 组件\n    },\n    toolbox: {\n        show: true,\n        showTitle: false, // 隐藏默认文字，否则两者位置会重叠\n        feature: {\n            saveAsImage: {\n                show: true,\n                title: &#39;Save As Image&#39;\n            },\n            dataView: {\n                show: true,\n                title: &#39;Data View&#39;\n            },\n        },\n        tooltip: { // 和 option.tooltip 的配置项相同\n            show: true,\n            formatter: function (param) {\n                return &#39;&lt;div&gt;&#39; + param.title + &#39;&lt;/div&gt;&#39;; // 自定义的 DOM 结构\n            },\n            backgroundColor: &#39;#222&#39;,\n            textStyle: {\n                fontSize: 12,\n            },\n            extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39; // 自定义的 CSS 样式\n        }\n    },\n    ...\n}\n</code></pre>\n"
        }
      }
    ]
  }
];
