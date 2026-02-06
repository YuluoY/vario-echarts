export default [
  {
    "type": "ElCollapseItem",
    "props": {
      "title": "无障碍",
      "name": "aria"
    },
    "children": [
      {
        "type": "ElSwitch",
        "model": {
          "path": "aria.enabled",
          "default": false
        },
        "props": {
          "placeholder": "启用"
        },
        "_raw": {
          "label": "启用",
          "desc": "<p>是否开启无障碍访问。如果不开启，则不会开启 <code class=\"codespan\">label</code> 或 <code class=\"codespan\">decal</code> 效果。</p>\n"
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
              "path": "aria.label.enabled",
              "default": true
            },
            "props": {
              "placeholder": "启用"
            },
            "_raw": {
              "label": "启用",
              "desc": "<p>是否开启无障碍访问的标签生成。开启后将生成 <code class=\"codespan\">aria-label</code> 属性。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "aria.label.description",
            "props": {
              "placeholder": "描述"
            },
            "_raw": {
              "label": "描述",
              "desc": "<p>默认采用算法自动生成图表描述，如果用户需要完全自定义，可以将这个值设为描述。如将其设置为 <code class=\"codespan\">&#39;这是一个展示了价格走势的图表&#39;</code>，则图表 DOM 元素的 <code class=\"codespan\">aria-label</code> 属性值即为该字符串。</p>\n<p>这一配置项常用于展示单个的数据并不能展示图表内容时，用户显示指定概括性描述图表的文字。例如图表是一个包含大量散点图的地图，默认的算法只能显示数据点的位置，不能从整体上传达作者的意图。这时候，可以将 <code class=\"codespan\">description</code> 指定为作者想表达的内容即可。</p>\n"
            }
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "通用",
              "name": "general"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "aria.label.general.withTitle",
                  "default": "这是一个关于“{title}”的图表。"
                },
                "props": {
                  "placeholder": "带标题"
                },
                "_raw": {
                  "label": "带标题",
                  "desc": "<p>如果图表存在 <a href=\"#title.text\">title.text</a>，则采用 <code class=\"codespan\">withTitle</code>。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{title}</code>：将被替换为图表的 <a href=\"#title.text\">title.text</a>。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "aria.label.general.withoutTitle",
                  "default": "这是一个图表，"
                },
                "props": {
                  "placeholder": "无标题"
                },
                "_raw": {
                  "label": "无标题",
                  "desc": "<p>如果图表不存在 <a href=\"#title.text\">title.text</a>，则采用 <code class=\"codespan\">withoutTitle</code>。</p>\n"
                }
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "系列",
              "name": "series"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "aria.label.series.maxCount",
                  "default": 10
                },
                "props": {
                  "placeholder": "最大数量"
                },
                "_raw": {
                  "label": "最大数量",
                  "desc": "<p>描述中最多出现的系列个数。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "单",
                  "name": "single"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "aria.label.series.single.prefix",
                    "props": {
                      "placeholder": "前缀"
                    },
                    "_raw": {
                      "label": "前缀",
                      "desc": "<p>对于所有系列的整体性描述，显示在每个系列描述之前。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesCount}</code>：将被替换为系列个数，这里始终为 1。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "aria.label.series.single.withName",
                      "default": "图表类型是{seriesType}，表示{seriesName}。"
                    },
                    "props": {
                      "placeholder": "带名称"
                    },
                    "_raw": {
                      "label": "带名称",
                      "desc": "<p>如果系列有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesName}</code>：将被替换为系列的 <code class=\"codespan\">name</code>；</li>\n<li><code class=\"codespan\">{seriesType}</code>：将被替换为系列的类型名称，如：<code class=\"codespan\">&#39;柱状图&#39;</code>、 <code class=\"codespan\">&#39;折线图&#39;</code> 等等。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "aria.label.series.single.withoutName",
                      "default": "图表类型是{seriesType}。"
                    },
                    "props": {
                      "placeholder": "无名称"
                    },
                    "_raw": {
                      "label": "无名称",
                      "desc": "<p>如果系列没有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesType}</code>：将被替换为系列的类型名称，如：<code class=\"codespan\">&#39;柱状图&#39;</code>、 <code class=\"codespan\">&#39;折线图&#39;</code> 等等。</li>\n</ul>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "多",
                  "name": "multiple"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "aria.label.series.multiple.prefix",
                      "default": "它由{seriesCount}个图表系列组成。"
                    },
                    "props": {
                      "placeholder": "前缀"
                    },
                    "_raw": {
                      "label": "前缀",
                      "desc": "<p>对于所有系列的整体性描述，显示在每个系列描述之前。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesCount}</code>：将被替换为系列个数。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "aria.label.series.multiple.withName",
                      "default": "图表类型是{seriesType}，表示{seriesName}。"
                    },
                    "props": {
                      "placeholder": "带名称"
                    },
                    "_raw": {
                      "label": "带名称",
                      "desc": "<p>如果系列有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesName}</code>：将被替换为系列的 <code class=\"codespan\">name</code>；</li>\n<li><code class=\"codespan\">{seriesType}</code>：将被替换为系列的类型名称，如：<code class=\"codespan\">&#39;柱状图&#39;</code>、 <code class=\"codespan\">&#39;折线图&#39;</code> 等等。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "aria.label.series.multiple.withoutName",
                      "default": "图表类型是{seriesType}。"
                    },
                    "props": {
                      "placeholder": "无名称"
                    },
                    "_raw": {
                      "label": "无名称",
                      "desc": "<p>如果系列没有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesType}</code>：将被替换为系列的类型名称，如：<code class=\"codespan\">&#39;柱状图&#39;</code>、 <code class=\"codespan\">&#39;折线图&#39;</code> 等等。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElCollapseItem",
                    "props": {
                      "title": "分隔符",
                      "name": "separator"
                    },
                    "children": [
                      {
                        "type": "ElInput",
                        "model": {
                          "path": "aria.label.series.multiple.separator.middle",
                          "default": "；"
                        },
                        "props": {
                          "placeholder": "中间"
                        },
                        "_raw": {
                          "label": "中间",
                          "desc": "<p>除了最后一个系列后的分隔符。</p>\n"
                        }
                      },
                      {
                        "type": "ElInput",
                        "model": {
                          "path": "aria.label.series.multiple.separator.end",
                          "default": "。"
                        },
                        "props": {
                          "placeholder": "结束值"
                        },
                        "_raw": {
                          "label": "结束值",
                          "desc": "<p>最后一个系列后的分隔符。</p>\n"
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
              "title": "数据",
              "name": "data"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "aria.label.data.maxCount",
                  "default": 10
                },
                "props": {
                  "placeholder": "最大数量"
                },
                "_raw": {
                  "label": "最大数量",
                  "desc": "<p>描述中每个系列最多出现的数据个数。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "aria.label.data.allData",
                  "default": "其数据是——"
                },
                "props": {
                  "placeholder": "全部数据"
                },
                "_raw": {
                  "label": "全部数据",
                  "desc": "<p>当数据全部显示时采用的描述。这一配置项<strong>不会</strong>使得数据全部显示，可以通过将 <a href=\"#aria.data.maxCount\">aria.data.maxCount</a> 设置为 <code class=\"codespan\">Number.MAX_VALUE</code> 实现全部显示的效果。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "aria.label.data.partialData",
                  "default": "其中，前{displayCnt}项是——"
                },
                "props": {
                  "placeholder": "部分数据"
                },
                "_raw": {
                  "label": "部分数据",
                  "desc": "<p>当只有部分数据显示时采用的描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{displayCnt}</code>：将被替换为显示的数据个数。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "aria.label.data.withName",
                  "default": "{name}的数据是{value}"
                },
                "props": {
                  "placeholder": "带名称"
                },
                "_raw": {
                  "label": "带名称",
                  "desc": "<p>如果数据有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{name}</code>：将被替换为数据的 <code class=\"codespan\">name</code>；</li>\n<li><code class=\"codespan\">{value}</code>：将被替换为数据的值。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "aria.label.data.withoutName",
                  "default": "{value}"
                },
                "props": {
                  "placeholder": "无名称"
                },
                "_raw": {
                  "label": "无名称",
                  "desc": "<p>如果数据没有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{value}</code>：将被替换为数据的值。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "aria.label.data.excludeDimensionId",
                "props": {
                  "placeholder": "排除维度ID"
                },
                "_raw": {
                  "label": "排除维度ID",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.6.0</code> 开始支持\n\n</div>\n\n\n\n<p>忽略 <a href=\"#aria.label\">aria.label</a> 下数据相应的维度。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "分隔符",
                  "name": "separator"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "aria.label.data.separator.middle",
                      "default": "，"
                    },
                    "props": {
                      "placeholder": "中间"
                    },
                    "_raw": {
                      "label": "中间",
                      "desc": "<p>除了最后一个数据后的分隔符。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "aria.label.data.separator.end",
                    "props": {
                      "placeholder": "结束值"
                    },
                    "_raw": {
                      "label": "结束值",
                      "desc": "<p>最后一个数据后的分隔符。</p>\n<p>需要注意的是，通常最后一个数据后是系列的 <code class=\"codespan\">separator.end</code>，所以 <code class=\"codespan\">data.separator.end</code> 在大多数情况下为空字符串。</p>\n"
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
          "title": "贴花",
          "name": "decal"
        },
        "children": [
          {
            "type": "ElSwitch",
            "model": {
              "path": "aria.decal.show",
              "default": false
            },
            "props": {
              "placeholder": "显示"
            },
            "_raw": {
              "label": "显示",
              "desc": "<p>是否显示贴花图案，默认不显示。如果要显示贴花，需要保证 <a href=\"#aria.enabled\">aria.enabled</a> 与 <code class=\"codespan\">aria.decal.show</code> 都是 <code class=\"codespan\">true</code>。</p>\n"
            }
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "贴花",
              "name": "decals"
            },
            "children": [
              {
                "type": "SmartUnionInput",
                "model": {
                  "path": "aria.decal.decals.symbol",
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
                  "path": "aria.decal.decals.symbolSize",
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
                  "path": "aria.decal.decals.symbolKeepAspect",
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
                  "path": "aria.decal.decals.color",
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
                "model": "aria.decal.decals.backgroundColor",
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
                  "path": "aria.decal.decals.dashArrayX",
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
                  "path": "aria.decal.decals.dashArrayY",
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
                  "path": "aria.decal.decals.rotation",
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
                  "path": "aria.decal.decals.maxTileWidth",
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
                  "path": "aria.decal.decals.maxTileHeight",
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
          }
        ]
      }
    ]
  }
];
