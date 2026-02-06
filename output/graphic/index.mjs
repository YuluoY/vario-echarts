export default [
  {
    "type": "ElCollapseItem",
    "props": {
      "title": "图形",
      "name": "graphic"
    },
    "children": [
      {
        "type": "ElInput",
        "model": "graphic.id",
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
        "model": "graphic.elements",
        "props": {
          "placeholder": "元素"
        },
        "_raw": {
          "label": "元素",
          "desc": "<p>里面是所有图形元素的集合。</p>\n<p>注意：graphic 的标准写法是：</p>\n<pre><code class=\"lang-javascript\">{\n    graphic: {\n        elements: [\n            {type: &#39;rect&#39;, ...}, {type: &#39;circle&#39;, ...}, ...\n        ]\n    }\n}\n</code></pre>\n<p>但是我们常常可以用简写：</p>\n<pre><code class=\"lang-javascript\">{\n    graphic: {\n        type: &#39;rect&#39;,\n        ...\n    }\n}\n</code></pre>\n<p>或者：</p>\n<pre><code class=\"lang-javascript\">{\n    graphic: [\n        {type: &#39;rect&#39;, ...}, {type: &#39;circle&#39;, ...}, ...\n    ]\n}\n</code></pre>\n"
        }
      }
    ]
  }
];
