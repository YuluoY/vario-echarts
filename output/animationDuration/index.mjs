export default [
  {
    "type": "SmartUnionInput",
    "model": {
      "path": "animationDuration",
      "default": 1000
    },
    "props": {
      "placeholder": "初始动画时长",
      "types": [
        "number",
        "function"
      ],
      "defaultType": "number",
      "specialKeywords": []
    },
    "_raw": {
      "label": "动画时长"
    }
  }
];
