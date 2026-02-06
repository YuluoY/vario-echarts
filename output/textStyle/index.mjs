export default [
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
          "path": "textStyle.color",
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
          "label": "颜色"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "textStyle.fontStyle",
          "default": "normal"
        },
        "props": {
          "placeholder": "字体样式"
        },
        "_raw": {
          "label": "字体样式"
        }
      },
      {
        "type": "SmartUnionInput",
        "model": {
          "path": "textStyle.fontWeight",
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
          "label": "字体粗细"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "textStyle.fontFamily",
          "default": "sans-serif"
        },
        "props": {
          "placeholder": "字体"
        },
        "_raw": {
          "label": "字体"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "textStyle.fontSize",
          "default": 12
        },
        "props": {
          "placeholder": "字体大小"
        },
        "_raw": {
          "label": "字体大小"
        }
      },
      {
        "type": "ElInputNumber",
        "model": "textStyle.lineHeight",
        "props": {
          "placeholder": "行高"
        },
        "_raw": {
          "label": "行高"
        }
      },
      {
        "type": "SmartSizeInput",
        "model": "textStyle.width",
        "props": {
          "placeholder": "宽度",
          "allowPercentage": true,
          "keywords": [
            "auto"
          ]
        },
        "_raw": {
          "label": "宽度"
        }
      },
      {
        "type": "SmartSizeInput",
        "model": "textStyle.height",
        "props": {
          "placeholder": "高度",
          "allowPercentage": true,
          "keywords": [
            "auto"
          ]
        },
        "_raw": {
          "label": "高度"
        }
      },
      {
        "type": "SmartColorInput",
        "model": "textStyle.textBorderColor",
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
          "label": "文本边框颜色"
        }
      },
      {
        "type": "ElInputNumber",
        "model": "textStyle.textBorderWidth",
        "props": {
          "placeholder": "文本边框宽度"
        },
        "_raw": {
          "label": "文本边框宽度"
        }
      },
      {
        "type": "SmartStyleSelect",
        "model": {
          "path": "textStyle.textBorderType",
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
          "label": "文本边框类型"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "textStyle.textBorderDashOffset",
          "default": 0
        },
        "props": {
          "placeholder": "文本边框虚线偏移"
        },
        "_raw": {
          "label": "文本边框虚线偏移"
        }
      },
      {
        "type": "SmartColorInput",
        "model": {
          "path": "textStyle.textShadowColor",
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
          "label": "文本阴影颜色"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "textStyle.textShadowBlur",
          "default": 0
        },
        "props": {
          "placeholder": "文本阴影模糊"
        },
        "_raw": {
          "label": "文本阴影模糊"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "textStyle.textShadowOffsetX",
          "default": 0
        },
        "props": {
          "placeholder": "文本阴影X偏移"
        },
        "_raw": {
          "label": "文本阴影X偏移"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "textStyle.textShadowOffsetY",
          "default": 0
        },
        "props": {
          "placeholder": "文本阴影Y偏移"
        },
        "_raw": {
          "label": "文本阴影Y偏移"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "textStyle.overflow",
          "default": "none"
        },
        "props": {
          "placeholder": "溢出"
        },
        "_raw": {
          "label": "溢出"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "textStyle.ellipsis",
          "default": "..."
        },
        "props": {
          "placeholder": "省略"
        },
        "_raw": {
          "label": "省略"
        }
      }
    ]
  }
];
