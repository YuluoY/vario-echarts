export default [
  {
    "type": "ElCollapseItem",
    "props": {
      "title": "状态动画",
      "name": "stateAnimation"
    },
    "children": [
      {
        "type": "ElInput",
        "model": {
          "path": "stateAnimation.duration",
          "default": 300
        },
        "props": {
          "placeholder": "持续时间"
        },
        "_raw": {
          "label": "持续时间"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "stateAnimation.easing",
          "default": "cubicOut"
        },
        "props": {
          "placeholder": "缓动函数"
        },
        "_raw": {
          "label": "缓动函数"
        }
      }
    ]
  }
];
