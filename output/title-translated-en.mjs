export default [
  {
    "type": "ElCollapseItem",
    "props": {
      "title": "Title",
      "name": "title"
    },
    "children": [
      {
        "type": "ElInput",
        "model": "title.id",
        "props": {
          "placeholder": "Id"
        },
        "_raw": { "label": "Id",
          "desc": "<p>组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "title.show",
          "default": true
        },
        "props": {
          "placeholder": "Show"
        },
        "_raw": { "label": "Show",
          "desc": "\n\n<p>是否显示标题组件。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "title.text",
          "default": ""
        },
        "props": {
          "placeholder": "Text"
        },
        "_raw": { "label": "Text",
          "desc": "\n\n<p>主标题文本，支持使用 <code class=\"codespan\">\\n</code> 换行。</p>\n<div  class=\"doc-partial-security-warning\">\n<span  class=\"warning-title\">[警告]:</span>  如果使用了 <a  href=\"#toolbox.feature.saveAsImage\">toolbox.feature.saveAsImage</a>，并且没有设置 <a  href=\"#toolbox.feature.saveAsImage.name\">toolbox.feature.saveAsImage.name</a>，会用 <code  class=\"codespan\">title[0].text</code> 替代。这种用法是历史实现但并不推荐，应该总是显式指定<a  href=\"#toolbox.feature.saveAsImage.name\">toolbox.feature.saveAsImage.name</a>；否则，不得不考虑 <code  class=\"codespan\">title.text</code> 是否是个正确的文件名，以及其 <strong >安全性</strong>。文档 <a  href=\"https://echarts.apache.org/handbook/zh/best-practices/security\" target=\"_blank\">“安全指南”</a> 给出了安全使用建议。\n</div>\n\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "title.link",
          "default": ""
        },
        "props": {
          "placeholder": "Link"
        },
        "_raw": { "label": "Link",
          "desc": "<p>主标题文本超链接。</p>\n<div  class=\"doc-partial-security-warning\">\n<span  class=\"warning-title\">[警告]:</span> 此 URL 字符串直接被使用，并未在内部做其他净化处理（sanitization） 如果他们来自于“不受信任”的来源，必须考虑 <strong >安全风险</strong>。文档 <a  href=\"https://echarts.apache.org/handbook/zh/best-practices/security\" target=\"_blank\">“安全指南”</a> 给出了安全使用建议。\n</div>\n\n\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "title.target",
          "default": "blank"
        },
        "props": {
          "placeholder": "Target"
        },
        "_raw": { "label": "Target",
          "desc": "<p>指定窗口打开主标题超链接。</p>\n<p><strong>可选：</strong></p>\n<ul>\n<li><p><code class=\"codespan\">&#39;self&#39;</code> 当前窗口打开</p>\n</li>\n<li><p><code class=\"codespan\">&#39;blank&#39;</code> 新窗口打开</p>\n</li>\n</ul>\n"
        }
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "Text Style",
          "name": "textStyle"
        },
        "children": [
          {
            "type": "SmartColorInput",
            "model": {
              "path": "title.textStyle.color",
              "default": "#333"
            },
            "props": {
              "placeholder": "Color",
              "keywords": [
                "inherit",
                "none",
                "transparent"
              ],
              "allowInherit": true
            },
            "_raw": { "label": "Color",
              "desc": "\n\n<p>主标题文字的颜色。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.textStyle.fontStyle",
              "default": "normal"
            },
            "props": {
              "placeholder": "Font Style"
            },
            "_raw": { "label": "Font Style",
              "desc": "\n\n<p>主标题文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": {
              "path": "title.textStyle.fontWeight",
              "default": "bolder"
            },
            "props": {
              "placeholder": "Font Weight",
              "types": [
                "string",
                "number"
              ],
              "defaultType": "string",
              "specialKeywords": [
                "bolder"
              ]
            },
            "_raw": { "label": "Font Weight",
              "desc": "\n\n<p>主标题文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.textStyle.fontFamily",
              "default": "sans-serif"
            },
            "props": {
              "placeholder": "Font"
            },
            "_raw": { "label": "Font",
              "desc": "\n\n<p>主标题文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.textStyle.fontSize",
              "default": 18
            },
            "props": {
              "placeholder": "Font Size"
            },
            "_raw": { "label": "Font Size",
              "desc": "\n\n<p>主标题文字的字体大小。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "title.textStyle.lineHeight",
            "props": {
              "placeholder": "Line Height"
            },
            "_raw": { "label": "Line Height",
              "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n"
            }
          },
          {
            "type": "SmartSizeInput",
            "model": "title.textStyle.width",
            "props": {
              "placeholder": "Width",
              "allowPercentage": true,
              "keywords": [
                "auto"
              ]
            },
            "_raw": { "label": "Width",
              "desc": "\n\n<p>文本显示宽度。</p>\n"
            }
          },
          {
            "type": "SmartSizeInput",
            "model": "title.textStyle.height",
            "props": {
              "placeholder": "Height",
              "allowPercentage": true,
              "keywords": [
                "auto"
              ]
            },
            "_raw": { "label": "Height",
              "desc": "\n\n<p>文本显示高度。</p>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": "title.textStyle.textBorderColor",
            "props": {
              "placeholder": "Text Border Color",
              "keywords": [
                "inherit",
                "none",
                "transparent"
              ],
              "allowInherit": true
            },
            "_raw": { "label": "Text Border Color",
              "desc": "\n\n<p>文字本身的描边颜色。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "title.textStyle.textBorderWidth",
            "props": {
              "placeholder": "Text Border Width"
            },
            "_raw": { "label": "Text Border Width",
              "desc": "\n\n<p>文字本身的描边宽度。</p>\n"
            }
          },
          {
            "type": "SmartStyleSelect",
            "model": {
              "path": "title.textStyle.textBorderType",
              "default": "solid"
            },
            "props": {
              "placeholder": "Text Border Type",
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
            "_raw": { "label": "Text Border Type",
              "desc": "\n\n\n<p>文字本身的描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">textBorderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.textStyle.textBorderDashOffset",
              "default": 0
            },
            "props": {
              "placeholder": "Text Border Dash Offset"
            },
            "_raw": { "label": "Text Border Dash Offset",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">textBorderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "title.textStyle.textShadowColor",
              "default": "transparent"
            },
            "props": {
              "placeholder": "Text Shadow Color",
              "keywords": [
                "transparent",
                "inherit",
                "none"
              ],
              "allowInherit": true
            },
            "_raw": { "label": "Text Shadow Color",
              "desc": "\n\n<p>文字本身的阴影颜色。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.textStyle.textShadowBlur",
              "default": 0
            },
            "props": {
              "placeholder": "Text Shadow Blur"
            },
            "_raw": { "label": "Text Shadow Blur",
              "desc": "\n\n<p>文字本身的阴影长度。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.textStyle.textShadowOffsetX",
              "default": 0
            },
            "props": {
              "placeholder": "Text Shadow Offset X"
            },
            "_raw": { "label": "Text Shadow Offset X",
              "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.textStyle.textShadowOffsetY",
              "default": 0
            },
            "props": {
              "placeholder": "Text Shadow Offset Y"
            },
            "_raw": { "label": "Text Shadow Offset Y",
              "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.textStyle.overflow",
              "default": "none"
            },
            "props": {
              "placeholder": "Overflow"
            },
            "_raw": { "label": "Overflow",
              "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.textStyle.ellipsis",
              "default": "..."
            },
            "props": {
              "placeholder": "Ellipsis"
            },
            "_raw": { "label": "Ellipsis",
              "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
            }
          }
        ]
      },
      {
        "type": "ElInput",
        "model": {
          "path": "title.subtext",
          "default": ""
        },
        "props": {
          "placeholder": "Subtext"
        },
        "_raw": { "label": "Subtext",
          "desc": "\n\n<p>副标题文本，支持使用 <code class=\"codespan\">\\n</code> 换行。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "title.sublink",
          "default": ""
        },
        "props": {
          "placeholder": "Sublink"
        },
        "_raw": { "label": "Sublink",
          "desc": "<p>副标题文本超链接。</p>\n<div  class=\"doc-partial-security-warning\">\n<span  class=\"warning-title\">[警告]:</span> 此 URL 字符串直接被使用，并未在内部做其他净化处理（sanitization） 如果他们来自于“不受信任”的来源，必须考虑 <strong >安全风险</strong>。文档 <a  href=\"https://echarts.apache.org/handbook/zh/best-practices/security\" target=\"_blank\">“安全指南”</a> 给出了安全使用建议。\n</div>\n\n\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "title.subtarget",
          "default": "blank"
        },
        "props": {
          "placeholder": "Subtarget"
        },
        "_raw": { "label": "Subtarget",
          "desc": "<p>指定窗口打开副标题超链接，可选：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;self&#39;</code> 当前窗口打开</p>\n</li>\n<li><p><code class=\"codespan\">&#39;blank&#39;</code> 新窗口打开</p>\n</li>\n</ul>\n"
        }
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "Subtext Style",
          "name": "subtextStyle"
        },
        "children": [
          {
            "type": "SmartColorInput",
            "model": {
              "path": "title.subtextStyle.color",
              "default": "#aaa"
            },
            "props": {
              "placeholder": "Color",
              "keywords": [
                "inherit",
                "none",
                "transparent"
              ],
              "allowInherit": true
            },
            "_raw": { "label": "Color",
              "desc": "\n\n<p>副标题文字的颜色。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.subtextStyle.fontStyle",
              "default": "normal"
            },
            "props": {
              "placeholder": "Font Style"
            },
            "_raw": { "label": "Font Style",
              "desc": "\n\n<p>副标题文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": {
              "path": "title.subtextStyle.fontWeight",
              "default": "normal"
            },
            "props": {
              "placeholder": "Font Weight",
              "types": [
                "string",
                "number"
              ],
              "defaultType": "string",
              "specialKeywords": [
                "normal"
              ]
            },
            "_raw": { "label": "Font Weight",
              "desc": "\n\n<p>副标题文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.subtextStyle.fontFamily",
              "default": "sans-serif"
            },
            "props": {
              "placeholder": "Font"
            },
            "_raw": { "label": "Font",
              "desc": "\n\n<p>副标题文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.subtextStyle.fontSize",
              "default": 12
            },
            "props": {
              "placeholder": "Font Size"
            },
            "_raw": { "label": "Font Size",
              "desc": "\n\n<p>副标题文字的字体大小。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "title.subtextStyle.align",
            "props": {
              "placeholder": "Align"
            },
            "_raw": { "label": "Align",
              "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "title.subtextStyle.verticalAlign",
            "props": {
              "placeholder": "Vertical Align"
            },
            "_raw": { "label": "Vertical Align",
              "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "title.subtextStyle.lineHeight",
            "props": {
              "placeholder": "Line Height"
            },
            "_raw": { "label": "Line Height",
              "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n"
            }
          },
          {
            "type": "SmartSizeInput",
            "model": "title.subtextStyle.width",
            "props": {
              "placeholder": "Width",
              "allowPercentage": true,
              "keywords": [
                "auto"
              ]
            },
            "_raw": { "label": "Width",
              "desc": "\n\n<p>文本显示宽度。</p>\n"
            }
          },
          {
            "type": "SmartSizeInput",
            "model": "title.subtextStyle.height",
            "props": {
              "placeholder": "Height",
              "allowPercentage": true,
              "keywords": [
                "auto"
              ]
            },
            "_raw": { "label": "Height",
              "desc": "\n\n<p>文本显示高度。</p>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": "title.subtextStyle.textBorderColor",
            "props": {
              "placeholder": "Text Border Color",
              "keywords": [
                "inherit",
                "none",
                "transparent"
              ],
              "allowInherit": true
            },
            "_raw": { "label": "Text Border Color",
              "desc": "\n\n<p>文字本身的描边颜色。</p>\n"
            }
          },
          {
            "type": "ElInputNumber",
            "model": "title.subtextStyle.textBorderWidth",
            "props": {
              "placeholder": "Text Border Width"
            },
            "_raw": { "label": "Text Border Width",
              "desc": "\n\n<p>文字本身的描边宽度。</p>\n"
            }
          },
          {
            "type": "SmartStyleSelect",
            "model": {
              "path": "title.subtextStyle.textBorderType",
              "default": "solid"
            },
            "props": {
              "placeholder": "Text Border Type",
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
            "_raw": { "label": "Text Border Type",
              "desc": "\n\n\n<p>文字本身的描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">textBorderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.subtextStyle.textBorderDashOffset",
              "default": 0
            },
            "props": {
              "placeholder": "Text Border Dash Offset"
            },
            "_raw": { "label": "Text Border Dash Offset",
              "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">textBorderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n"
            }
          },
          {
            "type": "SmartColorInput",
            "model": {
              "path": "title.subtextStyle.textShadowColor",
              "default": "transparent"
            },
            "props": {
              "placeholder": "Text Shadow Color",
              "keywords": [
                "transparent",
                "inherit",
                "none"
              ],
              "allowInherit": true
            },
            "_raw": { "label": "Text Shadow Color",
              "desc": "\n\n<p>文字本身的阴影颜色。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.subtextStyle.textShadowBlur",
              "default": 0
            },
            "props": {
              "placeholder": "Text Shadow Blur"
            },
            "_raw": { "label": "Text Shadow Blur",
              "desc": "\n\n<p>文字本身的阴影长度。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.subtextStyle.textShadowOffsetX",
              "default": 0
            },
            "props": {
              "placeholder": "Text Shadow Offset X"
            },
            "_raw": { "label": "Text Shadow Offset X",
              "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.subtextStyle.textShadowOffsetY",
              "default": 0
            },
            "props": {
              "placeholder": "Text Shadow Offset Y"
            },
            "_raw": { "label": "Text Shadow Offset Y",
              "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.subtextStyle.overflow",
              "default": "none"
            },
            "props": {
              "placeholder": "Overflow"
            },
            "_raw": { "label": "Overflow",
              "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n"
            }
          },
          {
            "type": "ElInput",
            "model": {
              "path": "title.subtextStyle.ellipsis",
              "default": "..."
            },
            "props": {
              "placeholder": "Ellipsis"
            },
            "_raw": { "label": "Ellipsis",
              "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
            }
          }
        ]
      },
      {
        "type": "ElInput",
        "model": {
          "path": "title.textAlign",
          "default": "auto"
        },
        "props": {
          "placeholder": "Text Align"
        },
        "_raw": { "label": "Text Align",
          "desc": "\n\n<p>整体（包括 text 和 subtext）的水平对齐。</p>\n<p>可选值：<code class=\"codespan\">&#39;auto&#39;</code>、<code class=\"codespan\">&#39;left&#39;</code>、<code class=\"codespan\">&#39;right&#39;</code>、<code class=\"codespan\">&#39;center&#39;</code>。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "title.textVerticalAlign",
          "default": "auto"
        },
        "props": {
          "placeholder": "Text Vertical Align"
        },
        "_raw": { "label": "Text Vertical Align",
          "desc": "\n\n<p>整体（包括 text 和 subtext）的垂直对齐。</p>\n<p>可选值：<code class=\"codespan\">&#39;auto&#39;</code>、<code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;bottom&#39;</code>、<code class=\"codespan\">&#39;middle&#39;</code>。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "title.triggerEvent",
          "default": false
        },
        "props": {
          "placeholder": "Trigger Event"
        },
        "_raw": { "label": "Trigger Event",
          "desc": "<p>是否触发事件。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "title.padding",
          "default": 5
        },
        "props": {
          "placeholder": "Padding",
          "types": [
            "number",
            "array"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": { "label": "Padding",
          "desc": "\n\n<p>标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。</p>\n<p>使用示例：</p>\n<pre><code class=\"lang-ts\">// 设置内边距为 5\npadding: 5\n// 设置上下的内边距为 5，左右的内边距为 10\npadding: [5, 10]\n// 分别设置四个方向的内边距\npadding: [\n    5,  // 上\n    10, // 右\n    5,  // 下\n    10, // 左\n]\n</code></pre>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "title.itemGap",
          "default": 10
        },
        "props": {
          "placeholder": "Item Gap"
        },
        "_raw": { "label": "Item Gap",
          "desc": "\n\n<p>主副标题之间的间距。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "title.zlevel",
          "default": 0
        },
        "props": {
          "placeholder": "Levels"
        },
        "_raw": { "label": "Levels",
          "desc": "<p>所有图形的 zlevel 值。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "title.z",
          "default": 2
        },
        "props": {
          "placeholder": "Z"
        },
        "_raw": { "label": "Z",
          "desc": "<p>组件的所有图形的<code class=\"codespan\">z</code>值。控制图形的前后顺序。<code class=\"codespan\">z</code>值小的图形会被<code class=\"codespan\">z</code>值大的图形覆盖。</p>\n<p><code class=\"codespan\">z</code>相比<code class=\"codespan\">zlevel</code>优先级更低，而且不会创建新的 Canvas。</p>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "title.left",
          "default": "auto"
        },
        "props": {
          "placeholder": "Left",
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
        "_raw": { "label": "Left",
          "desc": "\n\n\n\n<p>标题（title）组件离容器左侧的距离。</p>\n<p><code class=\"codespan\">left</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器宽度的百分比，也可以是 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">left</code> 的值为 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>，组件会根据相应的位置自动对齐。</p>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "title.top",
          "default": "auto"
        },
        "props": {
          "placeholder": "Top",
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
        "_raw": { "label": "Top",
          "desc": "\n\n\n\n<p>标题（title）组件离容器上侧的距离。</p>\n<p><code class=\"codespan\">top</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高度的百分比，也可以是 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">top</code> 的值为 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>，组件会根据相应的位置自动对齐。</p>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "title.right",
          "default": "auto"
        },
        "props": {
          "placeholder": "Right",
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
        "_raw": { "label": "Right",
          "desc": "\n\n\n\n<p>标题（title）组件离容器右侧的距离。</p>\n<p><code class=\"codespan\">right</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器宽度的百分比。</p>\n<p>默认自适应。</p>\n"
        }
      },
      {
        "type": "SmartPositionInput",
        "model": {
          "path": "title.bottom",
          "default": "auto"
        },
        "props": {
          "placeholder": "Bottom",
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
        "_raw": { "label": "Bottom",
          "desc": "\n\n\n\n<p>标题（title）组件离容器下侧的距离。</p>\n<p>bottom 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高度的百分比。</p>\n<p>默认自适应。</p>\n"
        }
      },
      {
        "type": "SmartColorInput",
        "model": {
          "path": "title.backgroundColor",
          "default": "transparent"
        },
        "props": {
          "placeholder": "Background Color",
          "keywords": [
            "transparent",
            "inherit",
            "none"
          ],
          "allowInherit": true
        },
        "_raw": { "label": "Background Color",
          "desc": "\n\n<p>标题背景色，默认透明。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>   ，如果想要加上 alpha 通道，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code></p>\n</blockquote>\n"
        }
      },
      {
        "type": "SmartColorInput",
        "model": {
          "path": "title.borderColor",
          "default": "#ccc"
        },
        "props": {
          "placeholder": "Border Color",
          "keywords": [
            "inherit",
            "none",
            "transparent"
          ],
          "allowInherit": true
        },
        "_raw": { "label": "Border Color",
          "desc": "\n\n<p>标题的边框颜色。支持的颜色格式同 backgroundColor。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "title.borderWidth",
          "default": 0
        },
        "props": {
          "placeholder": "Border Width"
        },
        "_raw": { "label": "Border Width",
          "desc": "\n\n<p>标题的边框线宽。</p>\n"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "title.borderRadius",
          "default": 0
        },
        "props": {
          "placeholder": "Border Radius",
          "types": [
            "number",
            "array"
          ],
          "defaultType": "number",
          "specialKeywords": []
        },
        "_raw": { "label": "Border Radius",
          "desc": "\n\n<p>圆角半径，单位px，支持传入数组分别指定 4 个圆角半径。\n如:</p>\n<pre><code>borderRadius: 5, // 统一设置四个角的圆角大小\nborderRadius: [5, 5, 0, 0] //（顺时针左上，右上，右下，左下）\n</code></pre>"
        }
      },
      {
        "type": "ElInputNumber",
        "model": "title.shadowBlur",
        "props": {
          "placeholder": "Shadow Blur"
        },
        "_raw": { "label": "Shadow Blur",
          "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n<p><strong>注意</strong>：此配置项生效的前提是，设置了 <code class=\"codespan\">show: true</code> 以及值不为 <code class=\"codespan\">transparent</code> 的背景色 <code class=\"codespan\">backgroundColor</code>。</p>\n"
        }
      },
      {
        "type": "SmartColorInput",
        "model": "title.shadowColor",
        "props": {
          "placeholder": "Shadow Color",
          "keywords": [
            "inherit",
            "none",
            "transparent"
          ],
          "allowInherit": true
        },
        "_raw": { "label": "Shadow Color",
          "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n<p><strong>注意</strong>：此配置项生效的前提是，设置了 <code class=\"codespan\">show: true</code>。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "title.shadowOffsetX",
          "default": 0
        },
        "props": {
          "placeholder": "Shadow Offset X"
        },
        "_raw": { "label": "Shadow Offset X",
          "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n<p><strong>注意</strong>：此配置项生效的前提是，设置了 <code class=\"codespan\">show: true</code>。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "title.shadowOffsetY",
          "default": 0
        },
        "props": {
          "placeholder": "Shadow Offset Y"
        },
        "_raw": { "label": "Shadow Offset Y",
          "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n<p><strong>注意</strong>：此配置项生效的前提是，设置了 <code class=\"codespan\">show: true</code>。</p>\n"
        }
      }
    ]
  }
];