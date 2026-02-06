export default [
  {
    "type": "ElCollapseItem",
    "props": {
      "title": "自定义",
      "name": "custom"
    },
    "children": [
      {
        "type": "ElInput",
        "model": {
          "path": "series.custom.type",
          "default": "custom"
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
        "model": "series.custom.id",
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
        "model": "series.custom.name",
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
          "path": "series.custom.colorBy",
          "default": "series"
        },
        "props": {
          "placeholder": "着色依据"
        },
        "_raw": {
          "label": "着色依据",
          "desc": "\n\n\n\n<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.2.0</code> 开始支持\n\n</div>\n\n\n\n<p>从调色盘 <a href=\"#color\">option.color</a> 中取色的策略，可取值为：</p>\n<ul>\n<li><code class=\"codespan\">&#39;series&#39;</code>：按照系列分配调色盘中的颜色，同一系列中的所有数据都是用相同的颜色；</li>\n<li><code class=\"codespan\">&#39;data&#39;</code>：按照数据项分配调色盘中的颜色，每个数据项都使用不同的颜色。</li>\n</ul>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "series.custom.legendHoverLink",
          "default": true
        },
        "props": {
          "placeholder": "图例悬停联动"
        },
        "_raw": {
          "label": "图例悬停联动",
          "desc": "\n\n<p>是否启用<a href=\"#legend\">图例</a> hover 时的联动高亮。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.custom.coordinateSystem",
          "default": "cartesian2d"
        },
        "props": {
          "placeholder": "坐标系"
        },
        "_raw": {
          "label": "坐标系",
          "desc": "<p>指定另一个坐标系组件，本 <code class=\"codespan\">series-custom</code> 布局在那个坐标系中。</p>\n<p>可选值：</p>\n<ul>\n<li><p><code class=\"codespan\">null</code>、<code class=\"codespan\">undefined</code> 或者 <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>  不布局在任何坐标系中。自己独立完成布局。</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;cartesian2d&#39;</code></p>\n<p>  布局在一个二维 <a href=\"#grid\">直角坐标系（也称笛卡尔坐标系）</a> 中。当一个 ECharts 实例中存在多个 x 坐标轴（<code class=\"codespan\">xAxis</code>）时或者多个 y 坐标轴（<code class=\"codespan\">yAxis</code>）时，须通过 <a href=\"#series-custom.xAxisIndex\">xAxisIndex</a> 和 <a href=\"#series-custom.yAxisIndex\">yAxisIndex</a> 或者 <a href=\"#series-custom.xAxisId\">xAxisId</a> 和 <a href=\"#series-custom.yAxisId\">yAxisId</a> 指定所使用的坐标轴。</p>\n<p>  注：一些常用的系列，例如 <a href=\"#series-line\">折线图（series-line）</a>, <a href=\"#series-bar\">柱状图（series-bar）</a> 等，不能直接布局于 <a href=\"#matrix\">矩阵坐标系（matrix）</a> 或者 <a href=\"#calendar\">日历坐标系（calendar）</a> 中，但是他们能布局在 <a href=\"#grid\">直角坐标系（grid）</a> 中，然后这个 <a href=\"#grid\">直角坐标系（grid）</a> 可以布局在 <a href=\"#matrix\">矩阵坐标系（matrix）</a> 或 <a href=\"#calendar\">日历坐标系（calendar）</a> 中。</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;polar&#39;</code></p>\n<p>  布局在一个 <a href=\"#polar\">极坐标系</a> 中。当一个 ECharts 实例中存在多个极坐标系时，须通过 <a href=\"#series-custom.polarIndex\">polarIndex</a> 或 <a href=\"#series-custom.polarId\">polarId</a> 指定所使用的极坐标系。</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;geo&#39;</code></p>\n<p>  布局在一个 <a href=\"#geo\">地理坐标系</a> 中。当一个 ECharts 实例中存在多个地理坐标系时，须通过 <a href=\"#series-custom.geoIndex\">geoIndex</a> 或 <a href=\"#series-custom.geoId\">geoId</a> 指定所使用的地理坐标系。</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;singleAxis&#39;</code></p>\n<p>  布局在一个 <a href=\"#singleAxis\">单轴坐标系</a> 中。当一个 ECharts 实例中存在多个单轴坐标系时，须通过 <a href=\"#series-custom.singleAxisIndex\">singleAxisIndex</a> 或 <a href=\"#series-custom.singleAxisId\">singleAxisId</a> 指定所使用的单轴标系。</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;calendar&#39;</code></p>\n<p>  布局在一个 <a href=\"#calendar\">日历坐标系</a> 中。当一个 ECharts 实例中存在多个日历坐标系时，须通过 <a href=\"#series-custom.calendarIndex\">calendarIndex</a> 或 <a href=\"#series-custom.calendarId\">calendarId</a> 指定所使用的日历坐标系。</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;matrix&#39;</code></p>\n<p>  布局在一个 <a href=\"#matrix\">矩阵坐标系</a>中。当一个 ECharts 实例中存在多个矩阵坐标系时，须通过 <a href=\"#series-custom.matrixIndex\">matrixIndex</a> 或 <a href=\"#series-custom.matrixId\">matrixId</a> 指定所使用的矩阵坐标系。</p>\n</li>\n</ul>\n<p><strong>下表总结了“某系列或组件是否支持布局在某坐标系上”：</strong></p>\n<p>最左列列出了要布局的系列和组件（坐标系本身也是组件），最上行列出了所基于的坐标系。</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th>no coord sys</th>\n<th><a href=\"#grid\">grid</a> (cartesian2d)</th>\n<th><a href=\"#polar\">polar</a></th>\n<th><a href=\"#geo\">geo</a></th>\n<th><a href=\"#singleAxis\">singleAxis</a></th>\n<th><a href=\"#radar\">radar</a></th>\n<th><a href=\"#parallel\">parallel</a></th>\n<th><a href=\"#calendar\">calendar</a></th>\n<th><a href=\"#matrix\">matrix</a></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a href=\"#grid\">grid</a> (cartesian2d)</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#polar\">polar</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#geo\">geo</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#singleAxis\">singleAxis</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#calendar\">calendar</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#matrix\">matrix</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-line\">series-line</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n</tr>\n<tr>\n<td><a href=\"#series-bar\">series-bar</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n</tr>\n<tr>\n<td><a href=\"#series-pie\">series-pie</a></td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-scatter\">series-scatter</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-effectScatter\">series-effectScatter</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-radar\">series-radar</a></td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过 <a href=\"#radar\">radar</a> 坐标系)</td>\n<td>❌ (✅ 如果通过 <a href=\"#radar\">radar</a> 坐标系)</td>\n</tr>\n<tr>\n<td><a href=\"#series-tree\">series-tree</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-treemap\">series-treemap</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-sunburst\">series-sunburst</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-boxplot\">series-boxplot</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n</tr>\n<tr>\n<td><a href=\"#series-candlestick\">series-candlestick</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n</tr>\n<tr>\n<td><a href=\"#series-heatmap\">series-heatmap</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>❌</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-map\">series-map</a></td>\n<td>✅ (create a geo coord sys exclusively)</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-parallel\">series-parallel</a></td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>❌ (✅ 如果通过 <a href=\"#parallel\">parallel</a> 坐标系)</td>\n<td>❌ (✅ 如果通过 <a href=\"#parallel\">parallel</a> 坐标系)</td>\n</tr>\n<tr>\n<td><a href=\"#series-lines\">series-lines</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#geo\">geo</a>)</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#geo\">geo</a>)</td>\n</tr>\n<tr>\n<td><a href=\"#series-graph\">series-graph</a></td>\n<td>✅ (create a &quot;view&quot; coord sys exclusively)</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-sankey\">series-sankey</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-funnel\">series-funnel</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-gauge\">series-gauge</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#series-pictorialBar\">series-pictorialBar</a></td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#grid\">grid</a>)</td>\n</tr>\n<tr>\n<td><a href=\"#series-themeRiver\">series-themeRiver</a></td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#singleAxis\">singleAxis</a>)</td>\n<td>❌ (✅ 如果通过其他坐标系，如 <a href=\"#singleAxis\">singleAxis</a>)</td>\n</tr>\n<tr>\n<td><a href=\"#series-chord\">series-chord</a></td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#title\">title</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#legend\">legend</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#dataZoom\">dataZoom</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#visualMap\">visualMap</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#toolbox\">toolbox</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#timeline\">timeline</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><a href=\"#thumbnail\">thumbnail</a></td>\n<td>✅</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>❌</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n</tbody>\n</table>\n<p>也参见 <a href=\"#series-custom.coordinateSystemUsage\">series-custom.coordinateSystemUsage</a>。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.custom.xAxisIndex",
          "default": 0
        },
        "props": {
          "placeholder": "x轴索引"
        },
        "_raw": {
          "label": "x轴索引",
          "desc": "<p>布局时所基于的 <a href=\"#xAxis\">x 轴</a> 的 index。当一个 ECharts 实例中存在多个 x 轴时，用其指定所使用的 x 轴。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.custom.yAxisIndex",
          "default": 0
        },
        "props": {
          "placeholder": "Y轴索引"
        },
        "_raw": {
          "label": "Y轴索引",
          "desc": "<p>布局时所基于的 <a href=\"#yAxis\">y 轴</a> 的 index。当一个 ECharts 实例中存在多个 y轴时，用其指定所使用的 y 轴。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.custom.polarIndex",
          "default": 0
        },
        "props": {
          "placeholder": "极坐标索引"
        },
        "_raw": {
          "label": "极坐标索引",
          "desc": "<p>布局时所基于的 <a href=\"#polar\">极坐标系</a> 的 index。当一个 ECharts 实例中存在多个极坐标系时，用其指定所使用的坐标系。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.custom.geoIndex",
          "default": 0
        },
        "props": {
          "placeholder": "地理索引"
        },
        "_raw": {
          "label": "地理索引",
          "desc": "<p>布局时所基于的 <a href=\"#geo\">地理坐标系</a> 的 index。当一个 ECharts 实例中存在多个地理坐标系时，用其指定所使用的坐标系。</p>\n<p><strong>参见示例</strong>: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=geo-choropleth-scatter&amp;reset=1&amp;edit=1\" target=\"_blank\">geo-choropleth-scatter</a></p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.custom.calendarIndex",
          "default": 0
        },
        "props": {
          "placeholder": "日历索引"
        },
        "_raw": {
          "label": "日历索引",
          "desc": "<p>布局时所基于的 <a href=\"#calendar\">日历坐标系</a> 的 index。当一个 ECharts 实例中存在多个日历坐标系时，用其指定所使用的坐标系。</p>\n"
        }
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "渲染项",
          "name": "renderItem"
        },
        "children": [
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "参数",
              "name": "arguments"
            },
            "children": [
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.arguments.params",
                "props": {
                  "placeholder": "参数"
                },
                "_raw": {
                  "label": "参数",
                  "desc": "<p>renderItem 函数的第一个参数，含有：</p>\n<pre><code class=\"lang-ts\">{\n    context: // {Object} 一个可供开发者暂存东西的对象。生命周期只为：当前次的渲染。\n    seriesId: // {string} 本系列 id。\n    seriesName: // {string} 本系列 name。\n    seriesIndex: // {number} 本系列 index。\n    dataIndex: // {number} 数据项的 index。\n    dataIndexInside: // {number} 数据项在当前坐标系中可见的数据的 index（即 dataZoom 当前窗口中的数据的 index）。\n    dataInsideLength: // {number} 当前坐标系中可见的数据长度（即 dataZoom 当前窗口中的数据数量）。\n    actionType: // {string} 触发此次重绘的 action 的 type。\n    coordSys: // 不同的坐标系中，coordSys 里的信息不一样，含有如下这些可能：\n    coordSys: {\n        type: &#39;cartesian2d&#39;,\n        x: // {number} grid rect 的 x\n        y: // {number} grid rect 的 y\n        width: // {number} grid rect 的 width\n        height: // {number} grid rect 的 height\n    },\n    coordSys: {\n        type: &#39;calendar&#39;,\n        x: // {number} calendar 组件 rect 的 x\n        y: // {number} calendar 组件 rect 的 y\n        width: // {number} calendar 组件 rect 的 width\n        height: // {number} calendar 组件 rect 的 height\n        cellWidth: // {number} calendar cellWidth\n        cellHeight: // {number} calendar cellHeight\n        rangeInfo: {\n            start: // calendar 日期开端\n            end: // calendar 日期结尾\n            weeks: // calendar 周数\n            dayCount: // calendar 日数\n        }\n    },\n    coordSys: {\n        type: &#39;matrix&#39;,\n        x: // {number} matrix 组件 rect 的 x\n        y: // {number} matrix 组件 rect 的 y\n        width: // {number} matrix 组件 rect 的 width\n        height: // {number} matrix 组件 rect 的 height\n    },\n    coordSys: {\n        type: &#39;geo&#39;,\n        x: // {number} geo rect 的 x\n        y: // {number} geo rect 的 y\n        width: // {number} geo rect 的 width\n        height: // {number} geo rect 的 height\n        zoom: // {number} 缩放的比率。如果没有缩放，则值为 1。例如 0.5 表示缩小了一半。\n    },\n    coordSys: {\n        type: &#39;polar&#39;,\n        cx: // {number} polar 的中心坐标\n        cy: // {number} polar 的中心坐标\n        r: // {number} polar 的外半径\n        r0: // {number} polar 的内半径\n    },\n    coordSys: {\n        type: &#39;singleAxis&#39;,\n        x: // {number} singleAxis rect 的 x\n        y: // {number} singleAxis rect 的 y\n        width: // {number} singleAxis rect 的 width\n        height: // {number} singleAxis rect 的 height\n    }\n}\n</code></pre>\n<p>其中，关于 <code class=\"codespan\">dataIndex</code> 和 <code class=\"codespan\">dataIndexInside</code> 的区别：</p>\n<ul>\n<li><code class=\"codespan\">dataIndex</code> 指的 <code class=\"codespan\">dataItem</code> 在原始数据中的 index。</li>\n<li><code class=\"codespan\">dataIndexInside</code> 指的是 <code class=\"codespan\">dataItem</code> 在当前数据窗口（参见 <a href=\"#dataZoom\">dataZoom</a>）中的 index。</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.arguments.api\">renderItem.arguments.api</a> 中使用的参数都是 <code class=\"codespan\">dataIndexInside</code> 而非 <code class=\"codespan\">dataIndex</code>，因为从 <code class=\"codespan\">dataIndex</code> 转换成 <code class=\"codespan\">dataIndexInside</code> 需要时间开销。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "API",
                  "name": "api"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.arguments.api.value",
                    "props": {
                      "placeholder": "值"
                    },
                    "_raw": {
                      "label": "值",
                      "desc": "<p>得到给定维度的数据值。</p>\n<pre><code>@param {number} dimension 指定的维度（维度从 0 开始计数）。\n@param {number} [dataIndexInside] 一般不用传，默认就是当前数据项的 dataIndexInside。\n@return {number} 给定维度上的值。\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.arguments.api.coord",
                    "props": {
                      "placeholder": "坐标"
                    },
                    "_raw": {
                      "label": "坐标",
                      "desc": "<p>将数据值转换成坐标系的坐标。</p>\n<p>其行为、输入参数和返回值和 <a href=\"api.html#echartsInstance.convertToPixel\" target=\"_blank\">chart.convertToPixel</a> 相同（只是去除它的第一个参数 <code class=\"codespan\">finder</code>）。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.arguments.api.size",
                    "props": {
                      "placeholder": "尺寸"
                    },
                    "_raw": {
                      "label": "尺寸",
                      "desc": "<p>给定数据范围，映射到坐标系上后的长度。</p>\n<p>例如，cartesian2d中，<code class=\"codespan\">api.size([2, 4])</code> 返回 <code class=\"codespan\">[12.4, 55]</code>，表示 x 轴数据范围为 2 映射得到长度是 <code class=\"codespan\">12.4</code>，y 轴数据范围为 4 时应设得到长度为 <code class=\"codespan\">55</code>。</p>\n<p>在一些坐标系中，如极坐标系（polar）或者有 log 数轴的坐标系，不同点的长度是不同的，所以需要第二个参数，指定获取长度的点。</p>\n<pre><code>@param {Array.&lt;number&gt;} dataSize 数据范围。\n@param {Array.&lt;number&gt;} dataItem 获取长度的点。\n@return {Array.&lt;number&gt;} 画布上的长度\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.arguments.api.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>能得到 <a href=\"#series-custom.itemStyle\">series.itemStyle</a> 中定义的样式信息和视觉映射得到的样式信息，可直接用于绘制图元。也可以用这种方式覆盖这些样式信息：<code class=\"codespan\">api.style({fill: &#39;green&#39;, stroke: &#39;yellow&#39;})</code>。</p>\n<pre><code>@param {Object} [extra] 额外指定的样式信息。\n@param {number} [dataIndexInside] 一般不用传，默认就是当前数据项的 dataIndexInside。\n@return {Object} 直接用于绘制图元的样式信息。\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.arguments.api.styleEmphasis",
                    "props": {
                      "placeholder": "强调样式"
                    },
                    "_raw": {
                      "label": "强调样式",
                      "desc": "<p>能得到 <a href=\"#series-custom.itemStyle.emphasis\">series.itemStyle.emphasis</a> 中定义的样式信息和视觉映射的样式信息，可直接用于绘制图元。也可以用这种方式覆盖这些样式信息：<code class=\"codespan\">api.style({fill: &#39;green&#39;, stroke: &#39;yellow&#39;})</code>。</p>\n<pre><code>@param {Object} [extra] 额外指定的样式信息。\n@param {number} [dataIndexInside] 一般不用传，默认就是当前数据项的 dataIndexInside。\n@return {Object} 直接用于绘制图元的样式信息。\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.arguments.api.visual",
                    "props": {
                      "placeholder": "视觉映射"
                    },
                    "_raw": {
                      "label": "视觉映射",
                      "desc": "<p>得到视觉映射的样式信息。比较少被使用。</p>\n<pre><code>@param {string} visualType &#39;color&#39;, &#39;symbol&#39;, &#39;symbolSize&#39;, ...\n@param {number} [dataIndexInside] 一般不用传，默认就是当前数据项的 dataIndexInside。\n@return {string|number} 视觉映射的样式值。\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.arguments.api.barLayout",
                    "props": {
                      "placeholder": "柱状图布局"
                    },
                    "_raw": {
                      "label": "柱状图布局",
                      "desc": "<p>当需要采用 barLayout 的时候，比如向柱状图上附加些东西，可以用这个方法得到 layout 信息。\n参见 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-bar-trend\" target=\"_blank\">例子</a>。</p>\n<pre><code>@param {Object} opt\n@param {number} opt.count 每个簇有多少个 bar。\n@param {number|string} [opt.barWidth] bar 宽度。\n        可以是绝对值例如 `40` 或者百分数例如 `&#39;60%&#39;`。\n        百分数基于自动计算出的每一类目的宽度。\n@param {number|string} [opt.barMaxWidth] bar 最大宽度。\n        可以是绝对值例如 `40` 或者百分数例如 `&#39;60%&#39;`。\n        百分数基于自动计算出的每一类目的宽度。\n        比 `opt.barWidth` 优先级高。\n@param {number|string} [opt.barMinWidth] bar 最小宽度。\n        可以是绝对值例如 `40` 或者百分数例如 `&#39;60%&#39;`。\n        百分数基于自动计算出的每一类目的宽度。\n        比 `opt.barWidth` 优先级高。\n@param {number} [opt.barGap] 每个簇的 bar 之间的宽度。\n@param {number} [opt.barCategoryGap] 不同簇间的宽度。\n@return {Array.&lt;Object&gt;} [{\n        width: number bar 的宽度。\n        offset: number bar 的偏移量，以bar最左为基准。\n        offsetCenter: number bar 的偏移量，以bar中心为基准。\n    }, ...]\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.arguments.api.currentSeriesIndices",
                    "props": {
                      "placeholder": "当前系列索引"
                    },
                    "_raw": {
                      "label": "当前系列索引",
                      "desc": "<p>得到系列的 当前index。注意这个 index 不同于系列定义时的 index。这个 index 是当 legend 组件进行了系列筛选后，剩余的系列排列后的 index。</p>\n<pre><code>@return {number}\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.arguments.api.font",
                    "props": {
                      "placeholder": "字体"
                    },
                    "_raw": {
                      "label": "字体",
                      "desc": "<p>得到可以直接进行样式设置的文字信息字符串。</p>\n<pre><code>@param {Object} opt\n@param {string} [opt.fontStyle]\n@param {number} [opt.fontWeight]\n@param {number} [opt.fontSize]\n@param {string} [opt.fontFamily]\n@return {string} font 字符串。\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.arguments.api.getWidth",
                    "props": {
                      "placeholder": "获取宽度"
                    },
                    "_raw": {
                      "label": "获取宽度",
                      "desc": "<pre><code>@return {number} echarts 容器的宽度。\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.arguments.api.getHeight",
                    "props": {
                      "placeholder": "获取高度"
                    },
                    "_raw": {
                      "label": "获取高度",
                      "desc": "<pre><code>@return {number} echarts 容器的高度。\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.arguments.api.getZr",
                    "props": {
                      "placeholder": "获取ZRender实例"
                    },
                    "_raw": {
                      "label": "获取ZRender实例",
                      "desc": "<pre><code>@return {module:zrender} zrender 实例。\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.arguments.api.getDevicePixelRatio",
                    "props": {
                      "placeholder": "获取设备像素比"
                    },
                    "_raw": {
                      "label": "获取设备像素比",
                      "desc": "<pre><code>@return {number} 得到当前 devicePixelRatio。\n</code></pre>"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ElInput",
            "model": "series.custom.renderItem.return",
            "props": {
              "placeholder": "返回"
            },
            "_raw": {
              "label": "返回",
              "desc": "<p>图形元素。每个图形元素是一个 object。详细信息参见：<a href=\"#graphic.elements\">graphic</a>。（width\\height\\top\\bottom 不支持）</p>\n<p>如果什么都不渲染，可以不返回任何东西。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">// 单独一个矩形\n{\n    type: &#39;rect&#39;,\n    shape: {\n        x: x, y: y, width: width, height: height\n    },\n    style: api.style()\n}\n</code></pre>\n<pre><code class=\"lang-ts\">// 一组图形元素\n{\n    type: &#39;group&#39;,\n    // 如果 diffChildrenByName 设为 true，则会使用 child.name 进行 diff，\n    // 从而能有更好的过度动画，但是降低性能。缺省为 false。\n    // diffChildrenByName: true,\n    children: [{\n        type: &#39;circle&#39;,\n        shape: {\n            cx: cx, cy: cy, r: r\n        },\n        style: api.style()\n    }, {\n        type: &#39;line&#39;,\n        shape: {\n            x1: x1, y1: y1, x2: x2, y2: y2\n        },\n        style: api.style()\n    }]\n}\n</code></pre>\n"
            }
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "返回组",
              "name": "return_group"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_group.type",
                  "default": "group"
                },
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_group.id",
                "props": {
                  "placeholder": "ID"
                },
                "_raw": {
                  "label": "ID",
                  "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_group.x",
                  "default": 0
                },
                "props": {
                  "placeholder": "x"
                },
                "_raw": {
                  "label": "x",
                  "desc": "<p>元素的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_group.y",
                  "default": 0
                },
                "props": {
                  "placeholder": "y"
                },
                "_raw": {
                  "label": "y",
                  "desc": "<p>元素的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_group.rotation",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>元素的旋转</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_group.scaleX",
                  "default": 1
                },
                "props": {
                  "placeholder": "X轴缩放"
                },
                "_raw": {
                  "label": "X轴缩放",
                  "desc": "<p>元素在 x 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_group.scaleY",
                  "default": 1
                },
                "props": {
                  "placeholder": "Y轴缩放"
                },
                "_raw": {
                  "label": "Y轴缩放",
                  "desc": "<p>元素在 y 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_group.originX",
                  "default": 0
                },
                "props": {
                  "placeholder": "X轴原点"
                },
                "_raw": {
                  "label": "X轴原点",
                  "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_group.originY",
                  "default": 0
                },
                "props": {
                  "placeholder": "Y轴原点"
                },
                "_raw": {
                  "label": "Y轴原点",
                  "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "series.custom.renderItem.return_group.transition",
                "props": {
                  "placeholder": "过渡",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "过渡",
                  "desc": "<p>可以通过<code class=\"codespan\">&#39;all&#39;</code>指定所有属性都开启过渡动画，也可以指定单个或一组属性。</p>\n<p>Transform 相关的属性：<code class=\"codespan\">&#39;x&#39;</code>、 <code class=\"codespan\">&#39;y&#39;</code>、<code class=\"codespan\">&#39;scaleX&#39;</code>、<code class=\"codespan\">&#39;scaleY&#39;</code>、<code class=\"codespan\">&#39;rotation&#39;</code>、<code class=\"codespan\">&#39;originX&#39;</code>、<code class=\"codespan\">&#39;originY&#39;</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>还可以是这三个属性 <code class=\"codespan\">&#39;shape&#39;</code>、<code class=\"codespan\">&#39;style&#39;</code>、<code class=\"codespan\">&#39;extra&#39;</code>。表示这三个属性中所有的子属性都开启过渡动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // 表示 shape 中所有属性都开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>在自定义系列中，当 transition 没有指定时，<code class=\"codespan\">&#39;x&#39;</code> 和 <code class=\"codespan\">&#39;y&#39;</code> 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：<code class=\"codespan\">transition: []</code></p>\n<p><code class=\"codespan\">transition</code> 效果参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_group.enterFrom",
                "props": {
                  "placeholder": "进入起点"
                },
                "_raw": {
                  "label": "进入起点",
                  "desc": "<p>配置图形的入场属性用于入场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // 淡入\n        style: { opacity: 0 },\n        // 从左飞入\n        x: 0\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_group.leaveTo",
                "props": {
                  "placeholder": "离开终点"
                },
                "_raw": {
                  "label": "离开终点",
                  "desc": "<p>配置图形的退场属性用于退场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // 淡出\n        style: { opacity: 0 },\n        // 向右飞出\n        x: 200\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "进入动画",
                  "name": "enterAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_group.enterAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_group.enterAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_group.enterAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "更新动画",
                  "name": "updateAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_group.updateAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_group.updateAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_group.updateAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "离开动画",
                  "name": "leaveAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_group.leaveAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_group.leaveAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_group.leaveAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "关键帧动画",
                  "name": "keyframeAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_group.keyframeAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_group.keyframeAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_group.keyframeAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_group.keyframeAnimation.loop",
                    "props": {
                      "placeholder": "循环"
                    },
                    "_raw": {
                      "label": "循环",
                      "desc": "<p>是否循环播放动画。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_group.keyframeAnimation.keyframes",
                    "props": {
                      "placeholder": "关键帧"
                    },
                    "_raw": {
                      "label": "关键帧",
                      "desc": "<p>动画的关键帧。数组中每一项为一个关键帧，格式如下：</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // 关键帧位置。0 为第一帧，1 为最后一帧\n    // 关键帧时间为 percent * duration + delay\n    percent: number\n    // 上一个关键帧到这个关键帧运行时的缓动函数。可选\n    easing?: number\n\n    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInputNumber",
                "model": "series.custom.renderItem.return_group.z2",
                "props": {
                  "placeholder": "Z轴层级2"
                },
                "_raw": {
                  "label": "Z轴层级2",
                  "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_group.name",
                "props": {
                  "placeholder": "名称"
                },
                "_raw": {
                  "label": "名称",
                  "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_group.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_group.info",
                "props": {
                  "placeholder": "信息"
                },
                "_raw": {
                  "label": "信息",
                  "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_group.silent",
                  "default": false
                },
                "props": {
                  "placeholder": "静默"
                },
                "_raw": {
                  "label": "静默",
                  "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_group.ignore",
                  "default": false
                },
                "props": {
                  "placeholder": "忽略"
                },
                "_raw": {
                  "label": "忽略",
                  "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_group.textContent",
                "props": {
                  "placeholder": "文本内容"
                },
                "_raw": {
                  "label": "文本内容",
                  "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#series-custom.renderItem.return_text\" target=\"_blank\">text</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "文本配置",
                  "name": "textConfig"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_group.textConfig.position",
                      "default": "inside"
                    },
                    "props": {
                      "placeholder": "位置"
                    },
                    "_raw": {
                      "label": "位置",
                      "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_group.textConfig.rotation",
                    "props": {
                      "placeholder": "旋转"
                    },
                    "_raw": {
                      "label": "旋转",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_group.textConfig.layoutRect",
                    "props": {
                      "placeholder": "布局矩形"
                    },
                    "_raw": {
                      "label": "布局矩形",
                      "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_group.textConfig.offset",
                    "props": {
                      "placeholder": "偏移"
                    },
                    "_raw": {
                      "label": "偏移",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_group.textConfig.origin",
                    "props": {
                      "placeholder": "原点"
                    },
                    "_raw": {
                      "label": "原点",
                      "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_group.textConfig.distance",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "距离"
                    },
                    "_raw": {
                      "label": "距离",
                      "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_group.textConfig.local",
                      "default": false
                    },
                    "props": {
                      "placeholder": "局部"
                    },
                    "_raw": {
                      "label": "局部",
                      "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_group.textConfig.insideFill",
                    "props": {
                      "placeholder": "内部填充"
                    },
                    "_raw": {
                      "label": "内部填充",
                      "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_group.textConfig.insideStroke",
                    "props": {
                      "placeholder": "内部描边"
                    },
                    "_raw": {
                      "label": "内部描边",
                      "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_group.textConfig.outsideFill",
                    "props": {
                      "placeholder": "外部填充"
                    },
                    "_raw": {
                      "label": "外部填充",
                      "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_group.textConfig.outsideStroke",
                    "props": {
                      "placeholder": "外部描边"
                    },
                    "_raw": {
                      "label": "外部描边",
                      "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_group.textConfig.inside",
                    "props": {
                      "placeholder": "内部"
                    },
                    "_raw": {
                      "label": "内部",
                      "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_group.during",
                "props": {
                  "placeholder": "期间"
                },
                "_raw": {
                  "label": "期间",
                  "desc": "<p>在动画的每一帧里，用户可以使用 <code class=\"codespan\">during</code> 回调来设定节点的各种属性。</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // 设置 transform 属性值。\n    // transform 属性参见 `TransformProp`。\n    setTransform(key: TransformProp, val: unknown): void;\n    // 获得当前动画帧的 transform 属性值。\n    getTransform(key: TransformProp): unknown;\n    // 设置 shape 属性值。\n    // shape 属性形如：`{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`。\n    setShape(key: string, val: unknown): void;\n    // 获得当前动画帧的 shape 属性值。\n    getShape(key: string): unknown;\n    // 设置 style 属性值。\n    // style 属性形如：`{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`。\n    setStyle(key: string, val: unknown): void;\n    // 获得当前动画帧的 style 属性值。\n    getStyle(key: string): unknown;\n    // 设置 extra 属性值。\n    // extra 属性形如：`{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`。\n    setExtra(key: string, val: unknown): void;\n    // 获得当前动画帧的 extra 属性值。\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>在绝大多数场景下，用户不需要这个 <code class=\"codespan\">during</code> 回调。因为，假如属性被设定到 <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a> 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 <code class=\"codespan\">during</code> 回调来定制他们。</p>\n<p>例如，如果用户使用 <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> 画图形，图形的形状会由 <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a> 来定义，形如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>如果用户指定了 <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> 如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>尽管这些 <code class=\"codespan\">points</code> 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 <code class=\"codespan\">during</code> 回调如下：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // 让 echarts 对 `extra.degree` 进行插值，然后基于\n    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>也参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "额外",
                  "name": "extra"
                },
                "children": [
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_group.extra.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">extra</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">extra</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: { ... },\n    // `extra` 下所有属性开启过渡动画。\n    transition: &#39;extra&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "SmartSizeInput",
                "model": {
                  "path": "series.custom.renderItem.return_group.width",
                  "default": 0
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
                  "desc": "<p>用于描述此 <code class=\"codespan\">group</code> 的宽。</p>\n<p>这个宽只用于给子节点定位。</p>\n<p>即便当宽度为零的时候，子节点也可以使用 <code class=\"codespan\">left: &#39;center&#39;</code> 相对于父节点水平居中。</p>\n"
                }
              },
              {
                "type": "SmartSizeInput",
                "model": {
                  "path": "series.custom.renderItem.return_group.height",
                  "default": 0
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
                  "desc": "<p>用于描述此 <code class=\"codespan\">group</code> 的高。</p>\n<p>这个高只用于给子节点定位。</p>\n<p>即便当高度为零的时候，子节点也可以使用 <code class=\"codespan\">top: &#39;middle&#39;</code> 相对于父节点垂直居中。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_group.diffChildrenByName",
                  "default": false
                },
                "props": {
                  "placeholder": "按名称差异子项"
                },
                "_raw": {
                  "label": "按名称差异子项",
                  "desc": "<p>在 <a href=\"#series-custom\">自定义系列</a> 中，当 <code class=\"codespan\">diffChildrenByName: true</code> 时，对于 <a href=\"#series-custom.renderItem\">renderItem</a> 返回值中的每一个 <a href=\"#series-custom.renderItem.return_group\">group</a>，会根据其 <a href=\"#series-custom.renderItem.return_group.children\">children</a> 中每个图形元素的 <a href=\"#series-custom.renderItem.return_polygon.name\">name</a> 属性进行 &quot;diff&quot;。在这里，&quot;diff&quot; 的意思是，重绘的时候，在已存在的图形元素和新的图形元素之间建立对应关系（依据 <code class=\"codespan\">name</code> 是否相同），从如果数据有更新，能够形成的过渡动画。</p>\n<p>但是注意，这会有性能开销。如果数据量较大，不要开启这个功能。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_group.children",
                "props": {
                  "placeholder": "子元素"
                },
                "_raw": {
                  "label": "子元素",
                  "desc": "<p>子节点列表，其中项都是一个图形元素定义。</p>\n"
                }
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "返回路径",
              "name": "return_path"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_path.type",
                  "default": "path"
                },
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_path.id",
                "props": {
                  "placeholder": "ID"
                },
                "_raw": {
                  "label": "ID",
                  "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_path.x",
                  "default": 0
                },
                "props": {
                  "placeholder": "x"
                },
                "_raw": {
                  "label": "x",
                  "desc": "<p>元素的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_path.y",
                  "default": 0
                },
                "props": {
                  "placeholder": "y"
                },
                "_raw": {
                  "label": "y",
                  "desc": "<p>元素的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_path.rotation",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>元素的旋转</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_path.scaleX",
                  "default": 1
                },
                "props": {
                  "placeholder": "X轴缩放"
                },
                "_raw": {
                  "label": "X轴缩放",
                  "desc": "<p>元素在 x 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_path.scaleY",
                  "default": 1
                },
                "props": {
                  "placeholder": "Y轴缩放"
                },
                "_raw": {
                  "label": "Y轴缩放",
                  "desc": "<p>元素在 y 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_path.originX",
                  "default": 0
                },
                "props": {
                  "placeholder": "X轴原点"
                },
                "_raw": {
                  "label": "X轴原点",
                  "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_path.originY",
                  "default": 0
                },
                "props": {
                  "placeholder": "Y轴原点"
                },
                "_raw": {
                  "label": "Y轴原点",
                  "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "series.custom.renderItem.return_path.transition",
                "props": {
                  "placeholder": "过渡",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "过渡",
                  "desc": "<p>可以通过<code class=\"codespan\">&#39;all&#39;</code>指定所有属性都开启过渡动画，也可以指定单个或一组属性。</p>\n<p>Transform 相关的属性：<code class=\"codespan\">&#39;x&#39;</code>、 <code class=\"codespan\">&#39;y&#39;</code>、<code class=\"codespan\">&#39;scaleX&#39;</code>、<code class=\"codespan\">&#39;scaleY&#39;</code>、<code class=\"codespan\">&#39;rotation&#39;</code>、<code class=\"codespan\">&#39;originX&#39;</code>、<code class=\"codespan\">&#39;originY&#39;</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>还可以是这三个属性 <code class=\"codespan\">&#39;shape&#39;</code>、<code class=\"codespan\">&#39;style&#39;</code>、<code class=\"codespan\">&#39;extra&#39;</code>。表示这三个属性中所有的子属性都开启过渡动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // 表示 shape 中所有属性都开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>在自定义系列中，当 transition 没有指定时，<code class=\"codespan\">&#39;x&#39;</code> 和 <code class=\"codespan\">&#39;y&#39;</code> 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：<code class=\"codespan\">transition: []</code></p>\n<p><code class=\"codespan\">transition</code> 效果参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_path.enterFrom",
                "props": {
                  "placeholder": "进入起点"
                },
                "_raw": {
                  "label": "进入起点",
                  "desc": "<p>配置图形的入场属性用于入场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // 淡入\n        style: { opacity: 0 },\n        // 从左飞入\n        x: 0\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_path.leaveTo",
                "props": {
                  "placeholder": "离开终点"
                },
                "_raw": {
                  "label": "离开终点",
                  "desc": "<p>配置图形的退场属性用于退场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // 淡出\n        style: { opacity: 0 },\n        // 向右飞出\n        x: 200\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "进入动画",
                  "name": "enterAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_path.enterAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.enterAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_path.enterAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "更新动画",
                  "name": "updateAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_path.updateAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.updateAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_path.updateAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "离开动画",
                  "name": "leaveAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_path.leaveAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.leaveAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_path.leaveAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "关键帧动画",
                  "name": "keyframeAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_path.keyframeAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.keyframeAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_path.keyframeAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_path.keyframeAnimation.loop",
                    "props": {
                      "placeholder": "循环"
                    },
                    "_raw": {
                      "label": "循环",
                      "desc": "<p>是否循环播放动画。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.keyframeAnimation.keyframes",
                    "props": {
                      "placeholder": "关键帧"
                    },
                    "_raw": {
                      "label": "关键帧",
                      "desc": "<p>动画的关键帧。数组中每一项为一个关键帧，格式如下：</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // 关键帧位置。0 为第一帧，1 为最后一帧\n    // 关键帧时间为 percent * duration + delay\n    percent: number\n    // 上一个关键帧到这个关键帧运行时的缓动函数。可选\n    easing?: number\n\n    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_path.morph",
                "props": {
                  "placeholder": "形变"
                },
                "_raw": {
                  "label": "形变",
                  "desc": "<p>是否开启形变动画。</p>\n<p>开启 <a href=\"#series-custom.universalTransition\">universalTransition</a> 后如果前后两次更新图形类型不一样，比如从<code class=\"codespan\">rect</code>变为了<code class=\"codespan\">circle</code>，会通过形变动画过渡。如果想要关闭可以设置该属性为<code class=\"codespan\">false</code>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "series.custom.renderItem.return_path.z2",
                "props": {
                  "placeholder": "Z轴层级2"
                },
                "_raw": {
                  "label": "Z轴层级2",
                  "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_path.name",
                "props": {
                  "placeholder": "名称"
                },
                "_raw": {
                  "label": "名称",
                  "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_path.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_path.info",
                "props": {
                  "placeholder": "信息"
                },
                "_raw": {
                  "label": "信息",
                  "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_path.silent",
                  "default": false
                },
                "props": {
                  "placeholder": "静默"
                },
                "_raw": {
                  "label": "静默",
                  "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_path.invisible",
                  "default": false
                },
                "props": {
                  "placeholder": "不可见"
                },
                "_raw": {
                  "label": "不可见",
                  "desc": "<p>节点是否可见。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_path.ignore",
                  "default": false
                },
                "props": {
                  "placeholder": "忽略"
                },
                "_raw": {
                  "label": "忽略",
                  "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_path.textContent",
                "props": {
                  "placeholder": "文本内容"
                },
                "_raw": {
                  "label": "文本内容",
                  "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#series-custom.renderItem.return_text\" target=\"_blank\">text</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "文本配置",
                  "name": "textConfig"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.textConfig.position",
                      "default": "inside"
                    },
                    "props": {
                      "placeholder": "位置"
                    },
                    "_raw": {
                      "label": "位置",
                      "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_path.textConfig.rotation",
                    "props": {
                      "placeholder": "旋转"
                    },
                    "_raw": {
                      "label": "旋转",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.textConfig.layoutRect",
                    "props": {
                      "placeholder": "布局矩形"
                    },
                    "_raw": {
                      "label": "布局矩形",
                      "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.textConfig.offset",
                    "props": {
                      "placeholder": "偏移"
                    },
                    "_raw": {
                      "label": "偏移",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.textConfig.origin",
                    "props": {
                      "placeholder": "原点"
                    },
                    "_raw": {
                      "label": "原点",
                      "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.textConfig.distance",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "距离"
                    },
                    "_raw": {
                      "label": "距离",
                      "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_path.textConfig.local",
                      "default": false
                    },
                    "props": {
                      "placeholder": "局部"
                    },
                    "_raw": {
                      "label": "局部",
                      "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.textConfig.insideFill",
                    "props": {
                      "placeholder": "内部填充"
                    },
                    "_raw": {
                      "label": "内部填充",
                      "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.textConfig.insideStroke",
                    "props": {
                      "placeholder": "内部描边"
                    },
                    "_raw": {
                      "label": "内部描边",
                      "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.textConfig.outsideFill",
                    "props": {
                      "placeholder": "外部填充"
                    },
                    "_raw": {
                      "label": "外部填充",
                      "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.textConfig.outsideStroke",
                    "props": {
                      "placeholder": "外部描边"
                    },
                    "_raw": {
                      "label": "外部描边",
                      "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_path.textConfig.inside",
                    "props": {
                      "placeholder": "内部"
                    },
                    "_raw": {
                      "label": "内部",
                      "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_path.during",
                "props": {
                  "placeholder": "期间"
                },
                "_raw": {
                  "label": "期间",
                  "desc": "<p>在动画的每一帧里，用户可以使用 <code class=\"codespan\">during</code> 回调来设定节点的各种属性。</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // 设置 transform 属性值。\n    // transform 属性参见 `TransformProp`。\n    setTransform(key: TransformProp, val: unknown): void;\n    // 获得当前动画帧的 transform 属性值。\n    getTransform(key: TransformProp): unknown;\n    // 设置 shape 属性值。\n    // shape 属性形如：`{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`。\n    setShape(key: string, val: unknown): void;\n    // 获得当前动画帧的 shape 属性值。\n    getShape(key: string): unknown;\n    // 设置 style 属性值。\n    // style 属性形如：`{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`。\n    setStyle(key: string, val: unknown): void;\n    // 获得当前动画帧的 style 属性值。\n    getStyle(key: string): unknown;\n    // 设置 extra 属性值。\n    // extra 属性形如：`{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`。\n    setExtra(key: string, val: unknown): void;\n    // 获得当前动画帧的 extra 属性值。\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>在绝大多数场景下，用户不需要这个 <code class=\"codespan\">during</code> 回调。因为，假如属性被设定到 <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a> 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 <code class=\"codespan\">during</code> 回调来定制他们。</p>\n<p>例如，如果用户使用 <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> 画图形，图形的形状会由 <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a> 来定义，形如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>如果用户指定了 <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> 如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>尽管这些 <code class=\"codespan\">points</code> 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 <code class=\"codespan\">during</code> 回调如下：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // 让 echarts 对 `extra.degree` 进行插值，然后基于\n    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>也参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "额外",
                  "name": "extra"
                },
                "children": [
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_path.extra.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">extra</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">extra</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: { ... },\n    // `extra` 下所有属性开启过渡动画。\n    transition: &#39;extra&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "形状",
                  "name": "shape"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.shape.pathData",
                    "props": {
                      "placeholder": "路径数据"
                    },
                    "_raw": {
                      "label": "路径数据",
                      "desc": "<p>即 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。</p>\n<p>例如：<code class=\"codespan\">&#39;M0,0 L0,-20 L30,-20 C42,-20 38,-1 50,-1 L70,-1 L70,0 Z&#39;</code>。</p>\n<p>如果指定了 <a href=\"#series-custom.renderItem.return_path.shape.width\">width</a>、<a href=\"#series-custom.renderItem.return_path.shape.height\">height</a>、<a href=\"#series-custom.renderItem.return_path.shape.x\">x</a>、<a href=\"#series-custom.renderItem.return_path.shape.y\">y</a>，则会根据他们定义的矩形，缩放 PathData。如果没有指定这些，就不会缩放。</p>\n<p>可使用 <a href=\"#series-custom.renderItem.return_path.shape.layout\">layout</a> 指定缩放策略。</p>\n<p>参见例子：\n<a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-calendar-icon\" target=\"_blank\">icons</a> 和 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-gantt-flight\" target=\"_blank\">shapes</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.shape.d",
                    "props": {
                      "placeholder": "路径定义"
                    },
                    "_raw": {
                      "label": "路径定义",
                      "desc": "<p>同 <a href=\"#series-custom.renderItem.return_path.shape.pathData\">pathData</a>，别名。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.shape.layout",
                      "default": "center"
                    },
                    "props": {
                      "placeholder": "布局"
                    },
                    "_raw": {
                      "label": "布局",
                      "desc": "<p>如果指定了 <a href=\"#series-custom.renderItem.return_path.shape.width\">width</a>、<a href=\"#series-custom.renderItem.return_path.shape.height\">height</a>、<a href=\"#series-custom.renderItem.return_path.shape.x\">x</a>、<a href=\"#series-custom.renderItem.return_path.shape.y\">y</a>，则会根据他们定义的矩形，缩放 PathData。</p>\n<p><code class=\"codespan\">layout</code> 用于指定缩放策略。</p>\n<p>可选值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;center&#39;</code>：保持原来的 PathData 的长宽比，居于矩形中，尽可能撑大但不会超出矩形。</li>\n<li><code class=\"codespan\">&#39;cover&#39;</code>：PathData 拉伸为矩形的长宽比，完全填满矩形，不会超出矩形。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.shape.x",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "x"
                    },
                    "_raw": {
                      "label": "x",
                      "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.shape.y",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "y"
                    },
                    "_raw": {
                      "label": "y",
                      "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "SmartSizeInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.shape.width",
                      "default": 0
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
                      "desc": "<p>图形元素的宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartSizeInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.shape.height",
                      "default": 0
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
                      "desc": "<p>图形元素的高度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_path.shape.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">shape</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">shape</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { ... },\n    // `shape` 下所有属性开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "样式",
                  "name": "style"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.style.fill",
                      "default": "#000"
                    },
                    "props": {
                      "placeholder": "填充"
                    },
                    "_raw": {
                      "label": "填充",
                      "desc": "<p>填充色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.style.stroke",
                    "props": {
                      "placeholder": "描边"
                    },
                    "_raw": {
                      "label": "描边",
                      "desc": "<p>线条颜色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.style.lineWidth",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "线宽"
                    },
                    "_raw": {
                      "label": "线宽",
                      "desc": "<p>线条宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.style.lineDash",
                      "default": "solid"
                    },
                    "props": {
                      "placeholder": "虚线样式",
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
                      "label": "虚线样式",
                      "desc": "<p>线条样式。可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n<li><code class=\"codespan\">number</code> 或 <code class=\"codespan\">number</code> 数组。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash\" target=\"_blank\">MDN</a>。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.style.lineDashOffset",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "虚线偏移"
                    },
                    "_raw": {
                      "label": "虚线偏移",
                      "desc": "<p>用于设置虚线的偏移量。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.style.lineCap",
                      "default": "butt"
                    },
                    "props": {
                      "placeholder": "线帽样式"
                    },
                    "_raw": {
                      "label": "线帽样式",
                      "desc": "<p>用于指定线段末端的绘制方式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.style.lineJoin",
                      "default": "miter"
                    },
                    "props": {
                      "placeholder": "线段连接"
                    },
                    "_raw": {
                      "label": "线段连接",
                      "desc": "<p>设置线条转折点的样式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.style.miterLimit",
                      "default": 10
                    },
                    "props": {
                      "placeholder": "斜接限制"
                    },
                    "_raw": {
                      "label": "斜接限制",
                      "desc": "<p>设置斜接面限制比例的属性。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_path.style.shadowBlur",
                    "props": {
                      "placeholder": "阴影模糊"
                    },
                    "_raw": {
                      "label": "阴影模糊",
                      "desc": "<p>阴影宽度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_path.style.shadowOffsetX",
                    "props": {
                      "placeholder": "阴影X偏移"
                    },
                    "_raw": {
                      "label": "阴影X偏移",
                      "desc": "<p>阴影 X 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_path.style.shadowOffsetY",
                    "props": {
                      "placeholder": "阴影Y偏移"
                    },
                    "_raw": {
                      "label": "阴影Y偏移",
                      "desc": "<p>阴影 Y 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "SmartColorInput",
                    "model": "series.custom.renderItem.return_path.style.shadowColor",
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
                      "desc": "<p>阴影颜色。</p>\n"
                    }
                  },
                  {
                    "type": "SmartOpacityInput",
                    "model": {
                      "path": "series.custom.renderItem.return_path.style.opacity",
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
                      "desc": "<p>不透明度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_path.style.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">style</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">style</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: { ... },\n    // `style` 下所有属性开启过渡动画。\n    transition: &#39;style&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_path.focus",
                  "default": "none"
                },
                "props": {
                  "placeholder": "聚焦"
                },
                "_raw": {
                  "label": "聚焦",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_path.blurScope",
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
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_path.emphasisDisabled",
                "props": {
                  "placeholder": "禁用高亮"
                },
                "_raw": {
                  "label": "禁用高亮",
                  "desc": "<p>是否关闭高亮状态。</p>\n"
                }
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
                    "model": "series.custom.renderItem.return_path.emphasis.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.blur.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_path.select.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "返回图像",
              "name": "return_image"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_image.type",
                  "default": "image"
                },
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_image.id",
                "props": {
                  "placeholder": "ID"
                },
                "_raw": {
                  "label": "ID",
                  "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_image.x",
                  "default": 0
                },
                "props": {
                  "placeholder": "x"
                },
                "_raw": {
                  "label": "x",
                  "desc": "<p>元素的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_image.y",
                  "default": 0
                },
                "props": {
                  "placeholder": "y"
                },
                "_raw": {
                  "label": "y",
                  "desc": "<p>元素的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_image.rotation",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>元素的旋转</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_image.scaleX",
                  "default": 1
                },
                "props": {
                  "placeholder": "X轴缩放"
                },
                "_raw": {
                  "label": "X轴缩放",
                  "desc": "<p>元素在 x 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_image.scaleY",
                  "default": 1
                },
                "props": {
                  "placeholder": "Y轴缩放"
                },
                "_raw": {
                  "label": "Y轴缩放",
                  "desc": "<p>元素在 y 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_image.originX",
                  "default": 0
                },
                "props": {
                  "placeholder": "X轴原点"
                },
                "_raw": {
                  "label": "X轴原点",
                  "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_image.originY",
                  "default": 0
                },
                "props": {
                  "placeholder": "Y轴原点"
                },
                "_raw": {
                  "label": "Y轴原点",
                  "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "series.custom.renderItem.return_image.transition",
                "props": {
                  "placeholder": "过渡",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "过渡",
                  "desc": "<p>可以通过<code class=\"codespan\">&#39;all&#39;</code>指定所有属性都开启过渡动画，也可以指定单个或一组属性。</p>\n<p>Transform 相关的属性：<code class=\"codespan\">&#39;x&#39;</code>、 <code class=\"codespan\">&#39;y&#39;</code>、<code class=\"codespan\">&#39;scaleX&#39;</code>、<code class=\"codespan\">&#39;scaleY&#39;</code>、<code class=\"codespan\">&#39;rotation&#39;</code>、<code class=\"codespan\">&#39;originX&#39;</code>、<code class=\"codespan\">&#39;originY&#39;</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>还可以是这三个属性 <code class=\"codespan\">&#39;shape&#39;</code>、<code class=\"codespan\">&#39;style&#39;</code>、<code class=\"codespan\">&#39;extra&#39;</code>。表示这三个属性中所有的子属性都开启过渡动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // 表示 shape 中所有属性都开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>在自定义系列中，当 transition 没有指定时，<code class=\"codespan\">&#39;x&#39;</code> 和 <code class=\"codespan\">&#39;y&#39;</code> 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：<code class=\"codespan\">transition: []</code></p>\n<p><code class=\"codespan\">transition</code> 效果参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_image.enterFrom",
                "props": {
                  "placeholder": "进入起点"
                },
                "_raw": {
                  "label": "进入起点",
                  "desc": "<p>配置图形的入场属性用于入场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // 淡入\n        style: { opacity: 0 },\n        // 从左飞入\n        x: 0\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_image.leaveTo",
                "props": {
                  "placeholder": "离开终点"
                },
                "_raw": {
                  "label": "离开终点",
                  "desc": "<p>配置图形的退场属性用于退场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // 淡出\n        style: { opacity: 0 },\n        // 向右飞出\n        x: 200\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "进入动画",
                  "name": "enterAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_image.enterAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.enterAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_image.enterAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "更新动画",
                  "name": "updateAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_image.updateAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.updateAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_image.updateAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "离开动画",
                  "name": "leaveAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_image.leaveAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.leaveAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_image.leaveAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "关键帧动画",
                  "name": "keyframeAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_image.keyframeAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.keyframeAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_image.keyframeAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_image.keyframeAnimation.loop",
                    "props": {
                      "placeholder": "循环"
                    },
                    "_raw": {
                      "label": "循环",
                      "desc": "<p>是否循环播放动画。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.keyframeAnimation.keyframes",
                    "props": {
                      "placeholder": "关键帧"
                    },
                    "_raw": {
                      "label": "关键帧",
                      "desc": "<p>动画的关键帧。数组中每一项为一个关键帧，格式如下：</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // 关键帧位置。0 为第一帧，1 为最后一帧\n    // 关键帧时间为 percent * duration + delay\n    percent: number\n    // 上一个关键帧到这个关键帧运行时的缓动函数。可选\n    easing?: number\n\n    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInputNumber",
                "model": "series.custom.renderItem.return_image.z2",
                "props": {
                  "placeholder": "Z轴层级2"
                },
                "_raw": {
                  "label": "Z轴层级2",
                  "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_image.name",
                "props": {
                  "placeholder": "名称"
                },
                "_raw": {
                  "label": "名称",
                  "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_image.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_image.info",
                "props": {
                  "placeholder": "信息"
                },
                "_raw": {
                  "label": "信息",
                  "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_image.silent",
                  "default": false
                },
                "props": {
                  "placeholder": "静默"
                },
                "_raw": {
                  "label": "静默",
                  "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_image.invisible",
                  "default": false
                },
                "props": {
                  "placeholder": "不可见"
                },
                "_raw": {
                  "label": "不可见",
                  "desc": "<p>节点是否可见。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_image.ignore",
                  "default": false
                },
                "props": {
                  "placeholder": "忽略"
                },
                "_raw": {
                  "label": "忽略",
                  "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_image.textContent",
                "props": {
                  "placeholder": "文本内容"
                },
                "_raw": {
                  "label": "文本内容",
                  "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#series-custom.renderItem.return_text\" target=\"_blank\">text</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "文本配置",
                  "name": "textConfig"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_image.textConfig.position",
                      "default": "inside"
                    },
                    "props": {
                      "placeholder": "位置"
                    },
                    "_raw": {
                      "label": "位置",
                      "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_image.textConfig.rotation",
                    "props": {
                      "placeholder": "旋转"
                    },
                    "_raw": {
                      "label": "旋转",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.textConfig.layoutRect",
                    "props": {
                      "placeholder": "布局矩形"
                    },
                    "_raw": {
                      "label": "布局矩形",
                      "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.textConfig.offset",
                    "props": {
                      "placeholder": "偏移"
                    },
                    "_raw": {
                      "label": "偏移",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.textConfig.origin",
                    "props": {
                      "placeholder": "原点"
                    },
                    "_raw": {
                      "label": "原点",
                      "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_image.textConfig.distance",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "距离"
                    },
                    "_raw": {
                      "label": "距离",
                      "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_image.textConfig.local",
                      "default": false
                    },
                    "props": {
                      "placeholder": "局部"
                    },
                    "_raw": {
                      "label": "局部",
                      "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.textConfig.insideFill",
                    "props": {
                      "placeholder": "内部填充"
                    },
                    "_raw": {
                      "label": "内部填充",
                      "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.textConfig.insideStroke",
                    "props": {
                      "placeholder": "内部描边"
                    },
                    "_raw": {
                      "label": "内部描边",
                      "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.textConfig.outsideFill",
                    "props": {
                      "placeholder": "外部填充"
                    },
                    "_raw": {
                      "label": "外部填充",
                      "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.textConfig.outsideStroke",
                    "props": {
                      "placeholder": "外部描边"
                    },
                    "_raw": {
                      "label": "外部描边",
                      "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_image.textConfig.inside",
                    "props": {
                      "placeholder": "内部"
                    },
                    "_raw": {
                      "label": "内部",
                      "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_image.during",
                "props": {
                  "placeholder": "期间"
                },
                "_raw": {
                  "label": "期间",
                  "desc": "<p>在动画的每一帧里，用户可以使用 <code class=\"codespan\">during</code> 回调来设定节点的各种属性。</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // 设置 transform 属性值。\n    // transform 属性参见 `TransformProp`。\n    setTransform(key: TransformProp, val: unknown): void;\n    // 获得当前动画帧的 transform 属性值。\n    getTransform(key: TransformProp): unknown;\n    // 设置 shape 属性值。\n    // shape 属性形如：`{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`。\n    setShape(key: string, val: unknown): void;\n    // 获得当前动画帧的 shape 属性值。\n    getShape(key: string): unknown;\n    // 设置 style 属性值。\n    // style 属性形如：`{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`。\n    setStyle(key: string, val: unknown): void;\n    // 获得当前动画帧的 style 属性值。\n    getStyle(key: string): unknown;\n    // 设置 extra 属性值。\n    // extra 属性形如：`{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`。\n    setExtra(key: string, val: unknown): void;\n    // 获得当前动画帧的 extra 属性值。\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>在绝大多数场景下，用户不需要这个 <code class=\"codespan\">during</code> 回调。因为，假如属性被设定到 <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a> 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 <code class=\"codespan\">during</code> 回调来定制他们。</p>\n<p>例如，如果用户使用 <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> 画图形，图形的形状会由 <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a> 来定义，形如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>如果用户指定了 <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> 如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>尽管这些 <code class=\"codespan\">points</code> 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 <code class=\"codespan\">during</code> 回调如下：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // 让 echarts 对 `extra.degree` 进行插值，然后基于\n    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>也参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "额外",
                  "name": "extra"
                },
                "children": [
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_image.extra.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">extra</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">extra</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: { ... },\n    // `extra` 下所有属性开启过渡动画。\n    transition: &#39;extra&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "样式",
                  "name": "style"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.style.image",
                    "props": {
                      "placeholder": "图像"
                    },
                    "_raw": {
                      "label": "图像",
                      "desc": "<p>图片的内容，可以是图片的 URL，也可以是 <a href=\"https://tools.ietf.org/html/rfc2397\" target=\"_blank\">dataURI</a>.</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_image.style.x",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "x"
                    },
                    "_raw": {
                      "label": "x",
                      "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_image.style.y",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "y"
                    },
                    "_raw": {
                      "label": "y",
                      "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "SmartSizeInput",
                    "model": {
                      "path": "series.custom.renderItem.return_image.style.width",
                      "default": 0
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
                      "desc": "<p>图形元素的宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartSizeInput",
                    "model": {
                      "path": "series.custom.renderItem.return_image.style.height",
                      "default": 0
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
                      "desc": "<p>图形元素的高度。</p>\n<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.itemStyle.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.itemStyle.borderColor\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_image.style.fill",
                      "default": "#000"
                    },
                    "props": {
                      "placeholder": "填充"
                    },
                    "_raw": {
                      "label": "填充",
                      "desc": "<p>填充色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.style.stroke",
                    "props": {
                      "placeholder": "描边"
                    },
                    "_raw": {
                      "label": "描边",
                      "desc": "<p>线条颜色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_image.style.lineWidth",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "线宽"
                    },
                    "_raw": {
                      "label": "线宽",
                      "desc": "<p>线条宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": {
                      "path": "series.custom.renderItem.return_image.style.lineDash",
                      "default": "solid"
                    },
                    "props": {
                      "placeholder": "虚线样式",
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
                      "label": "虚线样式",
                      "desc": "<p>线条样式。可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n<li><code class=\"codespan\">number</code> 或 <code class=\"codespan\">number</code> 数组。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash\" target=\"_blank\">MDN</a>。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_image.style.lineDashOffset",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "虚线偏移"
                    },
                    "_raw": {
                      "label": "虚线偏移",
                      "desc": "<p>用于设置虚线的偏移量。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_image.style.lineCap",
                      "default": "butt"
                    },
                    "props": {
                      "placeholder": "线帽样式"
                    },
                    "_raw": {
                      "label": "线帽样式",
                      "desc": "<p>用于指定线段末端的绘制方式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_image.style.lineJoin",
                      "default": "miter"
                    },
                    "props": {
                      "placeholder": "线段连接"
                    },
                    "_raw": {
                      "label": "线段连接",
                      "desc": "<p>设置线条转折点的样式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_image.style.miterLimit",
                      "default": 10
                    },
                    "props": {
                      "placeholder": "斜接限制"
                    },
                    "_raw": {
                      "label": "斜接限制",
                      "desc": "<p>设置斜接面限制比例的属性。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_image.style.shadowBlur",
                    "props": {
                      "placeholder": "阴影模糊"
                    },
                    "_raw": {
                      "label": "阴影模糊",
                      "desc": "<p>阴影宽度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_image.style.shadowOffsetX",
                    "props": {
                      "placeholder": "阴影X偏移"
                    },
                    "_raw": {
                      "label": "阴影X偏移",
                      "desc": "<p>阴影 X 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_image.style.shadowOffsetY",
                    "props": {
                      "placeholder": "阴影Y偏移"
                    },
                    "_raw": {
                      "label": "阴影Y偏移",
                      "desc": "<p>阴影 Y 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "SmartColorInput",
                    "model": "series.custom.renderItem.return_image.style.shadowColor",
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
                      "desc": "<p>阴影颜色。</p>\n"
                    }
                  },
                  {
                    "type": "SmartOpacityInput",
                    "model": {
                      "path": "series.custom.renderItem.return_image.style.opacity",
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
                      "desc": "<p>不透明度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_image.style.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">style</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">style</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: { ... },\n    // `style` 下所有属性开启过渡动画。\n    transition: &#39;style&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_image.focus",
                  "default": "none"
                },
                "props": {
                  "placeholder": "聚焦"
                },
                "_raw": {
                  "label": "聚焦",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_image.blurScope",
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
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_image.emphasisDisabled",
                "props": {
                  "placeholder": "禁用高亮"
                },
                "_raw": {
                  "label": "禁用高亮",
                  "desc": "<p>是否关闭高亮状态。</p>\n"
                }
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
                    "model": "series.custom.renderItem.return_image.emphasis.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.blur.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_image.select.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "返回文本",
              "name": "return_text"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_text.type",
                  "default": "text"
                },
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_text.id",
                "props": {
                  "placeholder": "ID"
                },
                "_raw": {
                  "label": "ID",
                  "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_text.x",
                  "default": 0
                },
                "props": {
                  "placeholder": "x"
                },
                "_raw": {
                  "label": "x",
                  "desc": "<p>元素的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_text.y",
                  "default": 0
                },
                "props": {
                  "placeholder": "y"
                },
                "_raw": {
                  "label": "y",
                  "desc": "<p>元素的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_text.rotation",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>元素的旋转</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_text.scaleX",
                  "default": 1
                },
                "props": {
                  "placeholder": "X轴缩放"
                },
                "_raw": {
                  "label": "X轴缩放",
                  "desc": "<p>元素在 x 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_text.scaleY",
                  "default": 1
                },
                "props": {
                  "placeholder": "Y轴缩放"
                },
                "_raw": {
                  "label": "Y轴缩放",
                  "desc": "<p>元素在 y 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_text.originX",
                  "default": 0
                },
                "props": {
                  "placeholder": "X轴原点"
                },
                "_raw": {
                  "label": "X轴原点",
                  "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_text.originY",
                  "default": 0
                },
                "props": {
                  "placeholder": "Y轴原点"
                },
                "_raw": {
                  "label": "Y轴原点",
                  "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "series.custom.renderItem.return_text.transition",
                "props": {
                  "placeholder": "过渡",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "过渡",
                  "desc": "<p>可以通过<code class=\"codespan\">&#39;all&#39;</code>指定所有属性都开启过渡动画，也可以指定单个或一组属性。</p>\n<p>Transform 相关的属性：<code class=\"codespan\">&#39;x&#39;</code>、 <code class=\"codespan\">&#39;y&#39;</code>、<code class=\"codespan\">&#39;scaleX&#39;</code>、<code class=\"codespan\">&#39;scaleY&#39;</code>、<code class=\"codespan\">&#39;rotation&#39;</code>、<code class=\"codespan\">&#39;originX&#39;</code>、<code class=\"codespan\">&#39;originY&#39;</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>还可以是这三个属性 <code class=\"codespan\">&#39;shape&#39;</code>、<code class=\"codespan\">&#39;style&#39;</code>、<code class=\"codespan\">&#39;extra&#39;</code>。表示这三个属性中所有的子属性都开启过渡动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // 表示 shape 中所有属性都开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>在自定义系列中，当 transition 没有指定时，<code class=\"codespan\">&#39;x&#39;</code> 和 <code class=\"codespan\">&#39;y&#39;</code> 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：<code class=\"codespan\">transition: []</code></p>\n<p><code class=\"codespan\">transition</code> 效果参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_text.enterFrom",
                "props": {
                  "placeholder": "进入起点"
                },
                "_raw": {
                  "label": "进入起点",
                  "desc": "<p>配置图形的入场属性用于入场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // 淡入\n        style: { opacity: 0 },\n        // 从左飞入\n        x: 0\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_text.leaveTo",
                "props": {
                  "placeholder": "离开终点"
                },
                "_raw": {
                  "label": "离开终点",
                  "desc": "<p>配置图形的退场属性用于退场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // 淡出\n        style: { opacity: 0 },\n        // 向右飞出\n        x: 200\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "进入动画",
                  "name": "enterAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_text.enterAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.enterAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_text.enterAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "更新动画",
                  "name": "updateAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_text.updateAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.updateAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_text.updateAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "离开动画",
                  "name": "leaveAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_text.leaveAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.leaveAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_text.leaveAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "关键帧动画",
                  "name": "keyframeAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_text.keyframeAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.keyframeAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_text.keyframeAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_text.keyframeAnimation.loop",
                    "props": {
                      "placeholder": "循环"
                    },
                    "_raw": {
                      "label": "循环",
                      "desc": "<p>是否循环播放动画。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.keyframeAnimation.keyframes",
                    "props": {
                      "placeholder": "关键帧"
                    },
                    "_raw": {
                      "label": "关键帧",
                      "desc": "<p>动画的关键帧。数组中每一项为一个关键帧，格式如下：</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // 关键帧位置。0 为第一帧，1 为最后一帧\n    // 关键帧时间为 percent * duration + delay\n    percent: number\n    // 上一个关键帧到这个关键帧运行时的缓动函数。可选\n    easing?: number\n\n    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInputNumber",
                "model": "series.custom.renderItem.return_text.z2",
                "props": {
                  "placeholder": "Z轴层级2"
                },
                "_raw": {
                  "label": "Z轴层级2",
                  "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_text.name",
                "props": {
                  "placeholder": "名称"
                },
                "_raw": {
                  "label": "名称",
                  "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_text.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_text.info",
                "props": {
                  "placeholder": "信息"
                },
                "_raw": {
                  "label": "信息",
                  "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_text.silent",
                  "default": false
                },
                "props": {
                  "placeholder": "静默"
                },
                "_raw": {
                  "label": "静默",
                  "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_text.invisible",
                  "default": false
                },
                "props": {
                  "placeholder": "不可见"
                },
                "_raw": {
                  "label": "不可见",
                  "desc": "<p>节点是否可见。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_text.ignore",
                  "default": false
                },
                "props": {
                  "placeholder": "忽略"
                },
                "_raw": {
                  "label": "忽略",
                  "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_text.textContent",
                "props": {
                  "placeholder": "文本内容"
                },
                "_raw": {
                  "label": "文本内容",
                  "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#series-custom.renderItem.return_text\" target=\"_blank\">text</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "文本配置",
                  "name": "textConfig"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_text.textConfig.position",
                      "default": "inside"
                    },
                    "props": {
                      "placeholder": "位置"
                    },
                    "_raw": {
                      "label": "位置",
                      "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_text.textConfig.rotation",
                    "props": {
                      "placeholder": "旋转"
                    },
                    "_raw": {
                      "label": "旋转",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.textConfig.layoutRect",
                    "props": {
                      "placeholder": "布局矩形"
                    },
                    "_raw": {
                      "label": "布局矩形",
                      "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.textConfig.offset",
                    "props": {
                      "placeholder": "偏移"
                    },
                    "_raw": {
                      "label": "偏移",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.textConfig.origin",
                    "props": {
                      "placeholder": "原点"
                    },
                    "_raw": {
                      "label": "原点",
                      "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_text.textConfig.distance",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "距离"
                    },
                    "_raw": {
                      "label": "距离",
                      "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_text.textConfig.local",
                      "default": false
                    },
                    "props": {
                      "placeholder": "局部"
                    },
                    "_raw": {
                      "label": "局部",
                      "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.textConfig.insideFill",
                    "props": {
                      "placeholder": "内部填充"
                    },
                    "_raw": {
                      "label": "内部填充",
                      "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.textConfig.insideStroke",
                    "props": {
                      "placeholder": "内部描边"
                    },
                    "_raw": {
                      "label": "内部描边",
                      "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.textConfig.outsideFill",
                    "props": {
                      "placeholder": "外部填充"
                    },
                    "_raw": {
                      "label": "外部填充",
                      "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.textConfig.outsideStroke",
                    "props": {
                      "placeholder": "外部描边"
                    },
                    "_raw": {
                      "label": "外部描边",
                      "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_text.textConfig.inside",
                    "props": {
                      "placeholder": "内部"
                    },
                    "_raw": {
                      "label": "内部",
                      "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_text.during",
                "props": {
                  "placeholder": "期间"
                },
                "_raw": {
                  "label": "期间",
                  "desc": "<p>在动画的每一帧里，用户可以使用 <code class=\"codespan\">during</code> 回调来设定节点的各种属性。</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // 设置 transform 属性值。\n    // transform 属性参见 `TransformProp`。\n    setTransform(key: TransformProp, val: unknown): void;\n    // 获得当前动画帧的 transform 属性值。\n    getTransform(key: TransformProp): unknown;\n    // 设置 shape 属性值。\n    // shape 属性形如：`{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`。\n    setShape(key: string, val: unknown): void;\n    // 获得当前动画帧的 shape 属性值。\n    getShape(key: string): unknown;\n    // 设置 style 属性值。\n    // style 属性形如：`{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`。\n    setStyle(key: string, val: unknown): void;\n    // 获得当前动画帧的 style 属性值。\n    getStyle(key: string): unknown;\n    // 设置 extra 属性值。\n    // extra 属性形如：`{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`。\n    setExtra(key: string, val: unknown): void;\n    // 获得当前动画帧的 extra 属性值。\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>在绝大多数场景下，用户不需要这个 <code class=\"codespan\">during</code> 回调。因为，假如属性被设定到 <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a> 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 <code class=\"codespan\">during</code> 回调来定制他们。</p>\n<p>例如，如果用户使用 <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> 画图形，图形的形状会由 <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a> 来定义，形如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>如果用户指定了 <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> 如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>尽管这些 <code class=\"codespan\">points</code> 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 <code class=\"codespan\">during</code> 回调如下：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // 让 echarts 对 `extra.degree` 进行插值，然后基于\n    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>也参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "额外",
                  "name": "extra"
                },
                "children": [
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_text.extra.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">extra</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">extra</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: { ... },\n    // `extra` 下所有属性开启过渡动画。\n    transition: &#39;extra&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "样式",
                  "name": "style"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.style.text",
                    "props": {
                      "placeholder": "文本"
                    },
                    "_raw": {
                      "label": "文本",
                      "desc": "<p>文本块文字。可以使用 <code class=\"codespan\">\\n</code> 来换行。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_text.style.x",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "x"
                    },
                    "_raw": {
                      "label": "x",
                      "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_text.style.y",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "y"
                    },
                    "_raw": {
                      "label": "y",
                      "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.style.font",
                    "props": {
                      "placeholder": "字体"
                    },
                    "_raw": {
                      "label": "字体",
                      "desc": "<p>字体大小、字体类型、粗细、字体样式。格式参见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/CSS/font\" target=\"_blank\">css font</a>。</p>\n<p>例如：</p>\n<pre><code>// size | family\nfont: &#39;2em &quot;STHeiti&quot;, sans-serif&#39;\n\n// style | weight | size | family\nfont: &#39;italic bolder 16px cursive&#39;\n\n// weight | size | family\nfont: &#39;bolder 2em &quot;Microsoft YaHei&quot;, sans-serif&#39;\n</code></pre>"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_text.style.textAlign",
                      "default": "left"
                    },
                    "props": {
                      "placeholder": "文本对齐"
                    },
                    "_raw": {
                      "label": "文本对齐",
                      "desc": "<p>水平对齐方式，取值：<code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n<p>如果为 <code class=\"codespan\">&#39;left&#39;</code>，表示文本最左端在 <code class=\"codespan\">x</code> 值上。如果为 <code class=\"codespan\">&#39;right&#39;</code>，表示文本最右端在 <code class=\"codespan\">x</code> 值上。</p>\n"
                    }
                  },
                  {
                    "type": "SmartSizeInput",
                    "model": "series.custom.renderItem.return_text.style.width",
                    "props": {
                      "placeholder": "宽度",
                      "allowPercentage": true,
                      "keywords": [
                        "auto"
                      ]
                    },
                    "_raw": {
                      "label": "宽度",
                      "desc": "<p>文本限制宽度，用于提供 <a href=\"#series-custom.renderItem.return_text.style.overflow\">overflow</a> 的参考。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.style.overflow",
                    "props": {
                      "placeholder": "溢出"
                    },
                    "_raw": {
                      "label": "溢出",
                      "desc": "<p>当文本内容超出 <a href=\"#series-custom.renderItem.return_text.style.width\">width</a> 时的文本显示策略，取值：<code class=\"codespan\">&#39;break&#39;</code>, <code class=\"codespan\">&#39;breakAll&#39;</code>, <code class=\"codespan\">&#39;truncate&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code>。</p>\n<ul>\n<li><code class=\"codespan\">&#39;break&#39;</code>: 尽可能保证完整的单词不被截断(类似 <code class=\"codespan\">CSS</code> 中的 <code class=\"codespan\">word-break: break-word;</code>)</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code>: 可在任意字符间断行</li>\n<li><code class=\"codespan\">&#39;truncate&#39;</code>: 截断文本屏显示 &#39;...&#39;，可以使用 <a href=\"#series-custom.renderItem.return_text.style.ellipsis\">ellipsis</a> 来自定义省略号的显示</li>\n<li><code class=\"codespan\">&#39;none&#39;</code>: 不换行</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.style.ellipsis",
                    "props": {
                      "placeholder": "省略"
                    },
                    "_raw": {
                      "label": "省略",
                      "desc": "<p>当 <a href=\"#series-custom.renderItem.return_text.style.overflow\">overflow</a> 设置为 <code class=\"codespan\">&#39;truncate&#39;</code> 时生效，默认为 <code class=\"codespan\">...</code>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.style.textVerticalAlign",
                    "props": {
                      "placeholder": "文本垂直对齐"
                    },
                    "_raw": {
                      "label": "文本垂直对齐",
                      "desc": "<p>垂直对齐方式，取值：<code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.itemStyle.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.itemStyle.borderColor\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_text.style.fill",
                      "default": "#000"
                    },
                    "props": {
                      "placeholder": "填充"
                    },
                    "_raw": {
                      "label": "填充",
                      "desc": "<p>填充色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.style.stroke",
                    "props": {
                      "placeholder": "描边"
                    },
                    "_raw": {
                      "label": "描边",
                      "desc": "<p>线条颜色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_text.style.lineWidth",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "线宽"
                    },
                    "_raw": {
                      "label": "线宽",
                      "desc": "<p>线条宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": {
                      "path": "series.custom.renderItem.return_text.style.lineDash",
                      "default": "solid"
                    },
                    "props": {
                      "placeholder": "虚线样式",
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
                      "label": "虚线样式",
                      "desc": "<p>线条样式。可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n<li><code class=\"codespan\">number</code> 或 <code class=\"codespan\">number</code> 数组。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash\" target=\"_blank\">MDN</a>。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_text.style.lineDashOffset",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "虚线偏移"
                    },
                    "_raw": {
                      "label": "虚线偏移",
                      "desc": "<p>用于设置虚线的偏移量。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_text.style.lineCap",
                      "default": "butt"
                    },
                    "props": {
                      "placeholder": "线帽样式"
                    },
                    "_raw": {
                      "label": "线帽样式",
                      "desc": "<p>用于指定线段末端的绘制方式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_text.style.lineJoin",
                      "default": "miter"
                    },
                    "props": {
                      "placeholder": "线段连接"
                    },
                    "_raw": {
                      "label": "线段连接",
                      "desc": "<p>设置线条转折点的样式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_text.style.miterLimit",
                      "default": 10
                    },
                    "props": {
                      "placeholder": "斜接限制"
                    },
                    "_raw": {
                      "label": "斜接限制",
                      "desc": "<p>设置斜接面限制比例的属性。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_text.style.shadowBlur",
                    "props": {
                      "placeholder": "阴影模糊"
                    },
                    "_raw": {
                      "label": "阴影模糊",
                      "desc": "<p>阴影宽度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_text.style.shadowOffsetX",
                    "props": {
                      "placeholder": "阴影X偏移"
                    },
                    "_raw": {
                      "label": "阴影X偏移",
                      "desc": "<p>阴影 X 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_text.style.shadowOffsetY",
                    "props": {
                      "placeholder": "阴影Y偏移"
                    },
                    "_raw": {
                      "label": "阴影Y偏移",
                      "desc": "<p>阴影 Y 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "SmartColorInput",
                    "model": "series.custom.renderItem.return_text.style.shadowColor",
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
                      "desc": "<p>阴影颜色。</p>\n"
                    }
                  },
                  {
                    "type": "SmartOpacityInput",
                    "model": {
                      "path": "series.custom.renderItem.return_text.style.opacity",
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
                      "desc": "<p>不透明度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_text.style.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">style</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">style</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: { ... },\n    // `style` 下所有属性开启过渡动画。\n    transition: &#39;style&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_text.focus",
                  "default": "none"
                },
                "props": {
                  "placeholder": "聚焦"
                },
                "_raw": {
                  "label": "聚焦",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_text.blurScope",
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
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_text.emphasisDisabled",
                "props": {
                  "placeholder": "禁用高亮"
                },
                "_raw": {
                  "label": "禁用高亮",
                  "desc": "<p>是否关闭高亮状态。</p>\n"
                }
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
                    "model": "series.custom.renderItem.return_text.emphasis.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.blur.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_text.select.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "返回矩形",
              "name": "return_rect"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_rect.type",
                  "default": "rect"
                },
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_rect.id",
                "props": {
                  "placeholder": "ID"
                },
                "_raw": {
                  "label": "ID",
                  "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_rect.x",
                  "default": 0
                },
                "props": {
                  "placeholder": "x"
                },
                "_raw": {
                  "label": "x",
                  "desc": "<p>元素的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_rect.y",
                  "default": 0
                },
                "props": {
                  "placeholder": "y"
                },
                "_raw": {
                  "label": "y",
                  "desc": "<p>元素的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_rect.rotation",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>元素的旋转</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_rect.scaleX",
                  "default": 1
                },
                "props": {
                  "placeholder": "X轴缩放"
                },
                "_raw": {
                  "label": "X轴缩放",
                  "desc": "<p>元素在 x 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_rect.scaleY",
                  "default": 1
                },
                "props": {
                  "placeholder": "Y轴缩放"
                },
                "_raw": {
                  "label": "Y轴缩放",
                  "desc": "<p>元素在 y 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_rect.originX",
                  "default": 0
                },
                "props": {
                  "placeholder": "X轴原点"
                },
                "_raw": {
                  "label": "X轴原点",
                  "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_rect.originY",
                  "default": 0
                },
                "props": {
                  "placeholder": "Y轴原点"
                },
                "_raw": {
                  "label": "Y轴原点",
                  "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "series.custom.renderItem.return_rect.transition",
                "props": {
                  "placeholder": "过渡",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "过渡",
                  "desc": "<p>可以通过<code class=\"codespan\">&#39;all&#39;</code>指定所有属性都开启过渡动画，也可以指定单个或一组属性。</p>\n<p>Transform 相关的属性：<code class=\"codespan\">&#39;x&#39;</code>、 <code class=\"codespan\">&#39;y&#39;</code>、<code class=\"codespan\">&#39;scaleX&#39;</code>、<code class=\"codespan\">&#39;scaleY&#39;</code>、<code class=\"codespan\">&#39;rotation&#39;</code>、<code class=\"codespan\">&#39;originX&#39;</code>、<code class=\"codespan\">&#39;originY&#39;</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>还可以是这三个属性 <code class=\"codespan\">&#39;shape&#39;</code>、<code class=\"codespan\">&#39;style&#39;</code>、<code class=\"codespan\">&#39;extra&#39;</code>。表示这三个属性中所有的子属性都开启过渡动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // 表示 shape 中所有属性都开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>在自定义系列中，当 transition 没有指定时，<code class=\"codespan\">&#39;x&#39;</code> 和 <code class=\"codespan\">&#39;y&#39;</code> 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：<code class=\"codespan\">transition: []</code></p>\n<p><code class=\"codespan\">transition</code> 效果参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_rect.enterFrom",
                "props": {
                  "placeholder": "进入起点"
                },
                "_raw": {
                  "label": "进入起点",
                  "desc": "<p>配置图形的入场属性用于入场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // 淡入\n        style: { opacity: 0 },\n        // 从左飞入\n        x: 0\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_rect.leaveTo",
                "props": {
                  "placeholder": "离开终点"
                },
                "_raw": {
                  "label": "离开终点",
                  "desc": "<p>配置图形的退场属性用于退场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // 淡出\n        style: { opacity: 0 },\n        // 向右飞出\n        x: 200\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "进入动画",
                  "name": "enterAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_rect.enterAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.enterAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_rect.enterAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "更新动画",
                  "name": "updateAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_rect.updateAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.updateAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_rect.updateAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "离开动画",
                  "name": "leaveAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_rect.leaveAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.leaveAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_rect.leaveAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "关键帧动画",
                  "name": "keyframeAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_rect.keyframeAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.keyframeAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_rect.keyframeAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_rect.keyframeAnimation.loop",
                    "props": {
                      "placeholder": "循环"
                    },
                    "_raw": {
                      "label": "循环",
                      "desc": "<p>是否循环播放动画。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.keyframeAnimation.keyframes",
                    "props": {
                      "placeholder": "关键帧"
                    },
                    "_raw": {
                      "label": "关键帧",
                      "desc": "<p>动画的关键帧。数组中每一项为一个关键帧，格式如下：</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // 关键帧位置。0 为第一帧，1 为最后一帧\n    // 关键帧时间为 percent * duration + delay\n    percent: number\n    // 上一个关键帧到这个关键帧运行时的缓动函数。可选\n    easing?: number\n\n    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_rect.morph",
                "props": {
                  "placeholder": "形变"
                },
                "_raw": {
                  "label": "形变",
                  "desc": "<p>是否开启形变动画。</p>\n<p>开启 <a href=\"#series-custom.universalTransition\">universalTransition</a> 后如果前后两次更新图形类型不一样，比如从<code class=\"codespan\">rect</code>变为了<code class=\"codespan\">circle</code>，会通过形变动画过渡。如果想要关闭可以设置该属性为<code class=\"codespan\">false</code>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "series.custom.renderItem.return_rect.z2",
                "props": {
                  "placeholder": "Z轴层级2"
                },
                "_raw": {
                  "label": "Z轴层级2",
                  "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_rect.name",
                "props": {
                  "placeholder": "名称"
                },
                "_raw": {
                  "label": "名称",
                  "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_rect.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_rect.info",
                "props": {
                  "placeholder": "信息"
                },
                "_raw": {
                  "label": "信息",
                  "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_rect.silent",
                  "default": false
                },
                "props": {
                  "placeholder": "静默"
                },
                "_raw": {
                  "label": "静默",
                  "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_rect.invisible",
                  "default": false
                },
                "props": {
                  "placeholder": "不可见"
                },
                "_raw": {
                  "label": "不可见",
                  "desc": "<p>节点是否可见。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_rect.ignore",
                  "default": false
                },
                "props": {
                  "placeholder": "忽略"
                },
                "_raw": {
                  "label": "忽略",
                  "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_rect.textContent",
                "props": {
                  "placeholder": "文本内容"
                },
                "_raw": {
                  "label": "文本内容",
                  "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#series-custom.renderItem.return_text\" target=\"_blank\">text</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "文本配置",
                  "name": "textConfig"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.textConfig.position",
                      "default": "inside"
                    },
                    "props": {
                      "placeholder": "位置"
                    },
                    "_raw": {
                      "label": "位置",
                      "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_rect.textConfig.rotation",
                    "props": {
                      "placeholder": "旋转"
                    },
                    "_raw": {
                      "label": "旋转",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.textConfig.layoutRect",
                    "props": {
                      "placeholder": "布局矩形"
                    },
                    "_raw": {
                      "label": "布局矩形",
                      "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.textConfig.offset",
                    "props": {
                      "placeholder": "偏移"
                    },
                    "_raw": {
                      "label": "偏移",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.textConfig.origin",
                    "props": {
                      "placeholder": "原点"
                    },
                    "_raw": {
                      "label": "原点",
                      "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.textConfig.distance",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "距离"
                    },
                    "_raw": {
                      "label": "距离",
                      "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.textConfig.local",
                      "default": false
                    },
                    "props": {
                      "placeholder": "局部"
                    },
                    "_raw": {
                      "label": "局部",
                      "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.textConfig.insideFill",
                    "props": {
                      "placeholder": "内部填充"
                    },
                    "_raw": {
                      "label": "内部填充",
                      "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.textConfig.insideStroke",
                    "props": {
                      "placeholder": "内部描边"
                    },
                    "_raw": {
                      "label": "内部描边",
                      "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.textConfig.outsideFill",
                    "props": {
                      "placeholder": "外部填充"
                    },
                    "_raw": {
                      "label": "外部填充",
                      "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.textConfig.outsideStroke",
                    "props": {
                      "placeholder": "外部描边"
                    },
                    "_raw": {
                      "label": "外部描边",
                      "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_rect.textConfig.inside",
                    "props": {
                      "placeholder": "内部"
                    },
                    "_raw": {
                      "label": "内部",
                      "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_rect.during",
                "props": {
                  "placeholder": "期间"
                },
                "_raw": {
                  "label": "期间",
                  "desc": "<p>在动画的每一帧里，用户可以使用 <code class=\"codespan\">during</code> 回调来设定节点的各种属性。</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // 设置 transform 属性值。\n    // transform 属性参见 `TransformProp`。\n    setTransform(key: TransformProp, val: unknown): void;\n    // 获得当前动画帧的 transform 属性值。\n    getTransform(key: TransformProp): unknown;\n    // 设置 shape 属性值。\n    // shape 属性形如：`{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`。\n    setShape(key: string, val: unknown): void;\n    // 获得当前动画帧的 shape 属性值。\n    getShape(key: string): unknown;\n    // 设置 style 属性值。\n    // style 属性形如：`{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`。\n    setStyle(key: string, val: unknown): void;\n    // 获得当前动画帧的 style 属性值。\n    getStyle(key: string): unknown;\n    // 设置 extra 属性值。\n    // extra 属性形如：`{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`。\n    setExtra(key: string, val: unknown): void;\n    // 获得当前动画帧的 extra 属性值。\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>在绝大多数场景下，用户不需要这个 <code class=\"codespan\">during</code> 回调。因为，假如属性被设定到 <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a> 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 <code class=\"codespan\">during</code> 回调来定制他们。</p>\n<p>例如，如果用户使用 <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> 画图形，图形的形状会由 <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a> 来定义，形如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>如果用户指定了 <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> 如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>尽管这些 <code class=\"codespan\">points</code> 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 <code class=\"codespan\">during</code> 回调如下：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // 让 echarts 对 `extra.degree` 进行插值，然后基于\n    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>也参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "额外",
                  "name": "extra"
                },
                "children": [
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_rect.extra.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">extra</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">extra</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: { ... },\n    // `extra` 下所有属性开启过渡动画。\n    transition: &#39;extra&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "形状",
                  "name": "shape"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.shape.x",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "x"
                    },
                    "_raw": {
                      "label": "x",
                      "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.shape.y",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "y"
                    },
                    "_raw": {
                      "label": "y",
                      "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "SmartSizeInput",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.shape.width",
                      "default": 0
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
                      "desc": "<p>图形元素的宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartSizeInput",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.shape.height",
                      "default": 0
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
                      "desc": "<p>图形元素的高度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.shape.r",
                    "props": {
                      "placeholder": "半径"
                    },
                    "_raw": {
                      "label": "半径",
                      "desc": "<p>可以用于设置圆角矩形。<code class=\"codespan\">r: [r1, r2, r3, r4]</code>，\n左上、右上、右下、左下角的半径依次为r1、r2、r3、r4。</p>\n<p>可以缩写，例如：</p>\n<ul>\n<li><code class=\"codespan\">r</code> 缩写为 <code class=\"codespan\">1</code>         相当于 <code class=\"codespan\">[1, 1, 1, 1]</code></li>\n<li><code class=\"codespan\">r</code> 缩写为 <code class=\"codespan\">[1]</code>       相当于 <code class=\"codespan\">[1, 1, 1, 1]</code></li>\n<li><code class=\"codespan\">r</code> 缩写为 <code class=\"codespan\">[1, 2]</code>    相当于 <code class=\"codespan\">[1, 2, 1, 2]</code></li>\n<li><code class=\"codespan\">r</code> 缩写为 <code class=\"codespan\">[1, 2, 3]1 相当于</code>[1, 2, 3, 2]`</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_rect.shape.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">shape</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">shape</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { ... },\n    // `shape` 下所有属性开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "样式",
                  "name": "style"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.style.fill",
                      "default": "#000"
                    },
                    "props": {
                      "placeholder": "填充"
                    },
                    "_raw": {
                      "label": "填充",
                      "desc": "<p>填充色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.style.stroke",
                    "props": {
                      "placeholder": "描边"
                    },
                    "_raw": {
                      "label": "描边",
                      "desc": "<p>线条颜色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.style.lineWidth",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "线宽"
                    },
                    "_raw": {
                      "label": "线宽",
                      "desc": "<p>线条宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.style.lineDash",
                      "default": "solid"
                    },
                    "props": {
                      "placeholder": "虚线样式",
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
                      "label": "虚线样式",
                      "desc": "<p>线条样式。可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n<li><code class=\"codespan\">number</code> 或 <code class=\"codespan\">number</code> 数组。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash\" target=\"_blank\">MDN</a>。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.style.lineDashOffset",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "虚线偏移"
                    },
                    "_raw": {
                      "label": "虚线偏移",
                      "desc": "<p>用于设置虚线的偏移量。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.style.lineCap",
                      "default": "butt"
                    },
                    "props": {
                      "placeholder": "线帽样式"
                    },
                    "_raw": {
                      "label": "线帽样式",
                      "desc": "<p>用于指定线段末端的绘制方式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.style.lineJoin",
                      "default": "miter"
                    },
                    "props": {
                      "placeholder": "线段连接"
                    },
                    "_raw": {
                      "label": "线段连接",
                      "desc": "<p>设置线条转折点的样式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.style.miterLimit",
                      "default": 10
                    },
                    "props": {
                      "placeholder": "斜接限制"
                    },
                    "_raw": {
                      "label": "斜接限制",
                      "desc": "<p>设置斜接面限制比例的属性。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_rect.style.shadowBlur",
                    "props": {
                      "placeholder": "阴影模糊"
                    },
                    "_raw": {
                      "label": "阴影模糊",
                      "desc": "<p>阴影宽度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_rect.style.shadowOffsetX",
                    "props": {
                      "placeholder": "阴影X偏移"
                    },
                    "_raw": {
                      "label": "阴影X偏移",
                      "desc": "<p>阴影 X 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_rect.style.shadowOffsetY",
                    "props": {
                      "placeholder": "阴影Y偏移"
                    },
                    "_raw": {
                      "label": "阴影Y偏移",
                      "desc": "<p>阴影 Y 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "SmartColorInput",
                    "model": "series.custom.renderItem.return_rect.style.shadowColor",
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
                      "desc": "<p>阴影颜色。</p>\n"
                    }
                  },
                  {
                    "type": "SmartOpacityInput",
                    "model": {
                      "path": "series.custom.renderItem.return_rect.style.opacity",
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
                      "desc": "<p>不透明度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_rect.style.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">style</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">style</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: { ... },\n    // `style` 下所有属性开启过渡动画。\n    transition: &#39;style&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_rect.focus",
                  "default": "none"
                },
                "props": {
                  "placeholder": "聚焦"
                },
                "_raw": {
                  "label": "聚焦",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_rect.blurScope",
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
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_rect.emphasisDisabled",
                "props": {
                  "placeholder": "禁用高亮"
                },
                "_raw": {
                  "label": "禁用高亮",
                  "desc": "<p>是否关闭高亮状态。</p>\n"
                }
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
                    "model": "series.custom.renderItem.return_rect.emphasis.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.blur.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_rect.select.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "返回圆形",
              "name": "return_circle"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_circle.type",
                  "default": "circle"
                },
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_circle.id",
                "props": {
                  "placeholder": "ID"
                },
                "_raw": {
                  "label": "ID",
                  "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_circle.x",
                  "default": 0
                },
                "props": {
                  "placeholder": "x"
                },
                "_raw": {
                  "label": "x",
                  "desc": "<p>元素的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_circle.y",
                  "default": 0
                },
                "props": {
                  "placeholder": "y"
                },
                "_raw": {
                  "label": "y",
                  "desc": "<p>元素的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_circle.rotation",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>元素的旋转</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_circle.scaleX",
                  "default": 1
                },
                "props": {
                  "placeholder": "X轴缩放"
                },
                "_raw": {
                  "label": "X轴缩放",
                  "desc": "<p>元素在 x 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_circle.scaleY",
                  "default": 1
                },
                "props": {
                  "placeholder": "Y轴缩放"
                },
                "_raw": {
                  "label": "Y轴缩放",
                  "desc": "<p>元素在 y 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_circle.originX",
                  "default": 0
                },
                "props": {
                  "placeholder": "X轴原点"
                },
                "_raw": {
                  "label": "X轴原点",
                  "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_circle.originY",
                  "default": 0
                },
                "props": {
                  "placeholder": "Y轴原点"
                },
                "_raw": {
                  "label": "Y轴原点",
                  "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "series.custom.renderItem.return_circle.transition",
                "props": {
                  "placeholder": "过渡",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "过渡",
                  "desc": "<p>可以通过<code class=\"codespan\">&#39;all&#39;</code>指定所有属性都开启过渡动画，也可以指定单个或一组属性。</p>\n<p>Transform 相关的属性：<code class=\"codespan\">&#39;x&#39;</code>、 <code class=\"codespan\">&#39;y&#39;</code>、<code class=\"codespan\">&#39;scaleX&#39;</code>、<code class=\"codespan\">&#39;scaleY&#39;</code>、<code class=\"codespan\">&#39;rotation&#39;</code>、<code class=\"codespan\">&#39;originX&#39;</code>、<code class=\"codespan\">&#39;originY&#39;</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>还可以是这三个属性 <code class=\"codespan\">&#39;shape&#39;</code>、<code class=\"codespan\">&#39;style&#39;</code>、<code class=\"codespan\">&#39;extra&#39;</code>。表示这三个属性中所有的子属性都开启过渡动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // 表示 shape 中所有属性都开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>在自定义系列中，当 transition 没有指定时，<code class=\"codespan\">&#39;x&#39;</code> 和 <code class=\"codespan\">&#39;y&#39;</code> 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：<code class=\"codespan\">transition: []</code></p>\n<p><code class=\"codespan\">transition</code> 效果参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_circle.enterFrom",
                "props": {
                  "placeholder": "进入起点"
                },
                "_raw": {
                  "label": "进入起点",
                  "desc": "<p>配置图形的入场属性用于入场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // 淡入\n        style: { opacity: 0 },\n        // 从左飞入\n        x: 0\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_circle.leaveTo",
                "props": {
                  "placeholder": "离开终点"
                },
                "_raw": {
                  "label": "离开终点",
                  "desc": "<p>配置图形的退场属性用于退场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // 淡出\n        style: { opacity: 0 },\n        // 向右飞出\n        x: 200\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "进入动画",
                  "name": "enterAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_circle.enterAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.enterAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_circle.enterAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "更新动画",
                  "name": "updateAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_circle.updateAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.updateAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_circle.updateAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "离开动画",
                  "name": "leaveAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_circle.leaveAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.leaveAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_circle.leaveAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "关键帧动画",
                  "name": "keyframeAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_circle.keyframeAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.keyframeAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_circle.keyframeAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_circle.keyframeAnimation.loop",
                    "props": {
                      "placeholder": "循环"
                    },
                    "_raw": {
                      "label": "循环",
                      "desc": "<p>是否循环播放动画。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.keyframeAnimation.keyframes",
                    "props": {
                      "placeholder": "关键帧"
                    },
                    "_raw": {
                      "label": "关键帧",
                      "desc": "<p>动画的关键帧。数组中每一项为一个关键帧，格式如下：</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // 关键帧位置。0 为第一帧，1 为最后一帧\n    // 关键帧时间为 percent * duration + delay\n    percent: number\n    // 上一个关键帧到这个关键帧运行时的缓动函数。可选\n    easing?: number\n\n    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_circle.morph",
                "props": {
                  "placeholder": "形变"
                },
                "_raw": {
                  "label": "形变",
                  "desc": "<p>是否开启形变动画。</p>\n<p>开启 <a href=\"#series-custom.universalTransition\">universalTransition</a> 后如果前后两次更新图形类型不一样，比如从<code class=\"codespan\">rect</code>变为了<code class=\"codespan\">circle</code>，会通过形变动画过渡。如果想要关闭可以设置该属性为<code class=\"codespan\">false</code>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "series.custom.renderItem.return_circle.z2",
                "props": {
                  "placeholder": "Z轴层级2"
                },
                "_raw": {
                  "label": "Z轴层级2",
                  "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_circle.name",
                "props": {
                  "placeholder": "名称"
                },
                "_raw": {
                  "label": "名称",
                  "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_circle.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_circle.info",
                "props": {
                  "placeholder": "信息"
                },
                "_raw": {
                  "label": "信息",
                  "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_circle.silent",
                  "default": false
                },
                "props": {
                  "placeholder": "静默"
                },
                "_raw": {
                  "label": "静默",
                  "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_circle.invisible",
                  "default": false
                },
                "props": {
                  "placeholder": "不可见"
                },
                "_raw": {
                  "label": "不可见",
                  "desc": "<p>节点是否可见。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_circle.ignore",
                  "default": false
                },
                "props": {
                  "placeholder": "忽略"
                },
                "_raw": {
                  "label": "忽略",
                  "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_circle.textContent",
                "props": {
                  "placeholder": "文本内容"
                },
                "_raw": {
                  "label": "文本内容",
                  "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#series-custom.renderItem.return_text\" target=\"_blank\">text</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "文本配置",
                  "name": "textConfig"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_circle.textConfig.position",
                      "default": "inside"
                    },
                    "props": {
                      "placeholder": "位置"
                    },
                    "_raw": {
                      "label": "位置",
                      "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_circle.textConfig.rotation",
                    "props": {
                      "placeholder": "旋转"
                    },
                    "_raw": {
                      "label": "旋转",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.textConfig.layoutRect",
                    "props": {
                      "placeholder": "布局矩形"
                    },
                    "_raw": {
                      "label": "布局矩形",
                      "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.textConfig.offset",
                    "props": {
                      "placeholder": "偏移"
                    },
                    "_raw": {
                      "label": "偏移",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.textConfig.origin",
                    "props": {
                      "placeholder": "原点"
                    },
                    "_raw": {
                      "label": "原点",
                      "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_circle.textConfig.distance",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "距离"
                    },
                    "_raw": {
                      "label": "距离",
                      "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_circle.textConfig.local",
                      "default": false
                    },
                    "props": {
                      "placeholder": "局部"
                    },
                    "_raw": {
                      "label": "局部",
                      "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.textConfig.insideFill",
                    "props": {
                      "placeholder": "内部填充"
                    },
                    "_raw": {
                      "label": "内部填充",
                      "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.textConfig.insideStroke",
                    "props": {
                      "placeholder": "内部描边"
                    },
                    "_raw": {
                      "label": "内部描边",
                      "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.textConfig.outsideFill",
                    "props": {
                      "placeholder": "外部填充"
                    },
                    "_raw": {
                      "label": "外部填充",
                      "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.textConfig.outsideStroke",
                    "props": {
                      "placeholder": "外部描边"
                    },
                    "_raw": {
                      "label": "外部描边",
                      "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_circle.textConfig.inside",
                    "props": {
                      "placeholder": "内部"
                    },
                    "_raw": {
                      "label": "内部",
                      "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_circle.during",
                "props": {
                  "placeholder": "期间"
                },
                "_raw": {
                  "label": "期间",
                  "desc": "<p>在动画的每一帧里，用户可以使用 <code class=\"codespan\">during</code> 回调来设定节点的各种属性。</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // 设置 transform 属性值。\n    // transform 属性参见 `TransformProp`。\n    setTransform(key: TransformProp, val: unknown): void;\n    // 获得当前动画帧的 transform 属性值。\n    getTransform(key: TransformProp): unknown;\n    // 设置 shape 属性值。\n    // shape 属性形如：`{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`。\n    setShape(key: string, val: unknown): void;\n    // 获得当前动画帧的 shape 属性值。\n    getShape(key: string): unknown;\n    // 设置 style 属性值。\n    // style 属性形如：`{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`。\n    setStyle(key: string, val: unknown): void;\n    // 获得当前动画帧的 style 属性值。\n    getStyle(key: string): unknown;\n    // 设置 extra 属性值。\n    // extra 属性形如：`{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`。\n    setExtra(key: string, val: unknown): void;\n    // 获得当前动画帧的 extra 属性值。\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>在绝大多数场景下，用户不需要这个 <code class=\"codespan\">during</code> 回调。因为，假如属性被设定到 <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a> 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 <code class=\"codespan\">during</code> 回调来定制他们。</p>\n<p>例如，如果用户使用 <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> 画图形，图形的形状会由 <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a> 来定义，形如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>如果用户指定了 <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> 如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>尽管这些 <code class=\"codespan\">points</code> 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 <code class=\"codespan\">during</code> 回调如下：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // 让 echarts 对 `extra.degree` 进行插值，然后基于\n    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>也参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "额外",
                  "name": "extra"
                },
                "children": [
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_circle.extra.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">extra</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">extra</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: { ... },\n    // `extra` 下所有属性开启过渡动画。\n    transition: &#39;extra&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "形状",
                  "name": "shape"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_circle.shape.cx",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "圆心x"
                    },
                    "_raw": {
                      "label": "圆心x",
                      "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_circle.shape.cy",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "圆心y"
                    },
                    "_raw": {
                      "label": "圆心y",
                      "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_circle.shape.r",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "半径"
                    },
                    "_raw": {
                      "label": "半径",
                      "desc": "<p>外半径。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_circle.shape.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">shape</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">shape</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { ... },\n    // `shape` 下所有属性开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "样式",
                  "name": "style"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_circle.style.fill",
                      "default": "#000"
                    },
                    "props": {
                      "placeholder": "填充"
                    },
                    "_raw": {
                      "label": "填充",
                      "desc": "<p>填充色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.style.stroke",
                    "props": {
                      "placeholder": "描边"
                    },
                    "_raw": {
                      "label": "描边",
                      "desc": "<p>线条颜色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_circle.style.lineWidth",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "线宽"
                    },
                    "_raw": {
                      "label": "线宽",
                      "desc": "<p>线条宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": {
                      "path": "series.custom.renderItem.return_circle.style.lineDash",
                      "default": "solid"
                    },
                    "props": {
                      "placeholder": "虚线样式",
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
                      "label": "虚线样式",
                      "desc": "<p>线条样式。可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n<li><code class=\"codespan\">number</code> 或 <code class=\"codespan\">number</code> 数组。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash\" target=\"_blank\">MDN</a>。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_circle.style.lineDashOffset",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "虚线偏移"
                    },
                    "_raw": {
                      "label": "虚线偏移",
                      "desc": "<p>用于设置虚线的偏移量。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_circle.style.lineCap",
                      "default": "butt"
                    },
                    "props": {
                      "placeholder": "线帽样式"
                    },
                    "_raw": {
                      "label": "线帽样式",
                      "desc": "<p>用于指定线段末端的绘制方式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_circle.style.lineJoin",
                      "default": "miter"
                    },
                    "props": {
                      "placeholder": "线段连接"
                    },
                    "_raw": {
                      "label": "线段连接",
                      "desc": "<p>设置线条转折点的样式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_circle.style.miterLimit",
                      "default": 10
                    },
                    "props": {
                      "placeholder": "斜接限制"
                    },
                    "_raw": {
                      "label": "斜接限制",
                      "desc": "<p>设置斜接面限制比例的属性。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_circle.style.shadowBlur",
                    "props": {
                      "placeholder": "阴影模糊"
                    },
                    "_raw": {
                      "label": "阴影模糊",
                      "desc": "<p>阴影宽度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_circle.style.shadowOffsetX",
                    "props": {
                      "placeholder": "阴影X偏移"
                    },
                    "_raw": {
                      "label": "阴影X偏移",
                      "desc": "<p>阴影 X 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_circle.style.shadowOffsetY",
                    "props": {
                      "placeholder": "阴影Y偏移"
                    },
                    "_raw": {
                      "label": "阴影Y偏移",
                      "desc": "<p>阴影 Y 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "SmartColorInput",
                    "model": "series.custom.renderItem.return_circle.style.shadowColor",
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
                      "desc": "<p>阴影颜色。</p>\n"
                    }
                  },
                  {
                    "type": "SmartOpacityInput",
                    "model": {
                      "path": "series.custom.renderItem.return_circle.style.opacity",
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
                      "desc": "<p>不透明度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_circle.style.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">style</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">style</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: { ... },\n    // `style` 下所有属性开启过渡动画。\n    transition: &#39;style&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_circle.focus",
                  "default": "none"
                },
                "props": {
                  "placeholder": "聚焦"
                },
                "_raw": {
                  "label": "聚焦",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_circle.blurScope",
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
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_circle.emphasisDisabled",
                "props": {
                  "placeholder": "禁用高亮"
                },
                "_raw": {
                  "label": "禁用高亮",
                  "desc": "<p>是否关闭高亮状态。</p>\n"
                }
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
                    "model": "series.custom.renderItem.return_circle.emphasis.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.blur.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_circle.select.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "返回圆环",
              "name": "return_ring"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_ring.type",
                  "default": "ring"
                },
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_ring.id",
                "props": {
                  "placeholder": "ID"
                },
                "_raw": {
                  "label": "ID",
                  "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_ring.x",
                  "default": 0
                },
                "props": {
                  "placeholder": "x"
                },
                "_raw": {
                  "label": "x",
                  "desc": "<p>元素的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_ring.y",
                  "default": 0
                },
                "props": {
                  "placeholder": "y"
                },
                "_raw": {
                  "label": "y",
                  "desc": "<p>元素的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_ring.rotation",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>元素的旋转</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_ring.scaleX",
                  "default": 1
                },
                "props": {
                  "placeholder": "X轴缩放"
                },
                "_raw": {
                  "label": "X轴缩放",
                  "desc": "<p>元素在 x 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_ring.scaleY",
                  "default": 1
                },
                "props": {
                  "placeholder": "Y轴缩放"
                },
                "_raw": {
                  "label": "Y轴缩放",
                  "desc": "<p>元素在 y 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_ring.originX",
                  "default": 0
                },
                "props": {
                  "placeholder": "X轴原点"
                },
                "_raw": {
                  "label": "X轴原点",
                  "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_ring.originY",
                  "default": 0
                },
                "props": {
                  "placeholder": "Y轴原点"
                },
                "_raw": {
                  "label": "Y轴原点",
                  "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "series.custom.renderItem.return_ring.transition",
                "props": {
                  "placeholder": "过渡",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "过渡",
                  "desc": "<p>可以通过<code class=\"codespan\">&#39;all&#39;</code>指定所有属性都开启过渡动画，也可以指定单个或一组属性。</p>\n<p>Transform 相关的属性：<code class=\"codespan\">&#39;x&#39;</code>、 <code class=\"codespan\">&#39;y&#39;</code>、<code class=\"codespan\">&#39;scaleX&#39;</code>、<code class=\"codespan\">&#39;scaleY&#39;</code>、<code class=\"codespan\">&#39;rotation&#39;</code>、<code class=\"codespan\">&#39;originX&#39;</code>、<code class=\"codespan\">&#39;originY&#39;</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>还可以是这三个属性 <code class=\"codespan\">&#39;shape&#39;</code>、<code class=\"codespan\">&#39;style&#39;</code>、<code class=\"codespan\">&#39;extra&#39;</code>。表示这三个属性中所有的子属性都开启过渡动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // 表示 shape 中所有属性都开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>在自定义系列中，当 transition 没有指定时，<code class=\"codespan\">&#39;x&#39;</code> 和 <code class=\"codespan\">&#39;y&#39;</code> 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：<code class=\"codespan\">transition: []</code></p>\n<p><code class=\"codespan\">transition</code> 效果参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_ring.enterFrom",
                "props": {
                  "placeholder": "进入起点"
                },
                "_raw": {
                  "label": "进入起点",
                  "desc": "<p>配置图形的入场属性用于入场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // 淡入\n        style: { opacity: 0 },\n        // 从左飞入\n        x: 0\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_ring.leaveTo",
                "props": {
                  "placeholder": "离开终点"
                },
                "_raw": {
                  "label": "离开终点",
                  "desc": "<p>配置图形的退场属性用于退场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // 淡出\n        style: { opacity: 0 },\n        // 向右飞出\n        x: 200\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "进入动画",
                  "name": "enterAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_ring.enterAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.enterAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_ring.enterAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "更新动画",
                  "name": "updateAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_ring.updateAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.updateAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_ring.updateAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "离开动画",
                  "name": "leaveAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_ring.leaveAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.leaveAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_ring.leaveAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "关键帧动画",
                  "name": "keyframeAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_ring.keyframeAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.keyframeAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_ring.keyframeAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_ring.keyframeAnimation.loop",
                    "props": {
                      "placeholder": "循环"
                    },
                    "_raw": {
                      "label": "循环",
                      "desc": "<p>是否循环播放动画。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.keyframeAnimation.keyframes",
                    "props": {
                      "placeholder": "关键帧"
                    },
                    "_raw": {
                      "label": "关键帧",
                      "desc": "<p>动画的关键帧。数组中每一项为一个关键帧，格式如下：</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // 关键帧位置。0 为第一帧，1 为最后一帧\n    // 关键帧时间为 percent * duration + delay\n    percent: number\n    // 上一个关键帧到这个关键帧运行时的缓动函数。可选\n    easing?: number\n\n    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_ring.morph",
                "props": {
                  "placeholder": "形变"
                },
                "_raw": {
                  "label": "形变",
                  "desc": "<p>是否开启形变动画。</p>\n<p>开启 <a href=\"#series-custom.universalTransition\">universalTransition</a> 后如果前后两次更新图形类型不一样，比如从<code class=\"codespan\">rect</code>变为了<code class=\"codespan\">circle</code>，会通过形变动画过渡。如果想要关闭可以设置该属性为<code class=\"codespan\">false</code>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "series.custom.renderItem.return_ring.z2",
                "props": {
                  "placeholder": "Z轴层级2"
                },
                "_raw": {
                  "label": "Z轴层级2",
                  "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_ring.name",
                "props": {
                  "placeholder": "名称"
                },
                "_raw": {
                  "label": "名称",
                  "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_ring.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_ring.info",
                "props": {
                  "placeholder": "信息"
                },
                "_raw": {
                  "label": "信息",
                  "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_ring.silent",
                  "default": false
                },
                "props": {
                  "placeholder": "静默"
                },
                "_raw": {
                  "label": "静默",
                  "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_ring.invisible",
                  "default": false
                },
                "props": {
                  "placeholder": "不可见"
                },
                "_raw": {
                  "label": "不可见",
                  "desc": "<p>节点是否可见。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_ring.ignore",
                  "default": false
                },
                "props": {
                  "placeholder": "忽略"
                },
                "_raw": {
                  "label": "忽略",
                  "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_ring.textContent",
                "props": {
                  "placeholder": "文本内容"
                },
                "_raw": {
                  "label": "文本内容",
                  "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#series-custom.renderItem.return_text\" target=\"_blank\">text</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "文本配置",
                  "name": "textConfig"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.textConfig.position",
                      "default": "inside"
                    },
                    "props": {
                      "placeholder": "位置"
                    },
                    "_raw": {
                      "label": "位置",
                      "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_ring.textConfig.rotation",
                    "props": {
                      "placeholder": "旋转"
                    },
                    "_raw": {
                      "label": "旋转",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.textConfig.layoutRect",
                    "props": {
                      "placeholder": "布局矩形"
                    },
                    "_raw": {
                      "label": "布局矩形",
                      "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.textConfig.offset",
                    "props": {
                      "placeholder": "偏移"
                    },
                    "_raw": {
                      "label": "偏移",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.textConfig.origin",
                    "props": {
                      "placeholder": "原点"
                    },
                    "_raw": {
                      "label": "原点",
                      "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.textConfig.distance",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "距离"
                    },
                    "_raw": {
                      "label": "距离",
                      "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.textConfig.local",
                      "default": false
                    },
                    "props": {
                      "placeholder": "局部"
                    },
                    "_raw": {
                      "label": "局部",
                      "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.textConfig.insideFill",
                    "props": {
                      "placeholder": "内部填充"
                    },
                    "_raw": {
                      "label": "内部填充",
                      "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.textConfig.insideStroke",
                    "props": {
                      "placeholder": "内部描边"
                    },
                    "_raw": {
                      "label": "内部描边",
                      "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.textConfig.outsideFill",
                    "props": {
                      "placeholder": "外部填充"
                    },
                    "_raw": {
                      "label": "外部填充",
                      "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.textConfig.outsideStroke",
                    "props": {
                      "placeholder": "外部描边"
                    },
                    "_raw": {
                      "label": "外部描边",
                      "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_ring.textConfig.inside",
                    "props": {
                      "placeholder": "内部"
                    },
                    "_raw": {
                      "label": "内部",
                      "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_ring.during",
                "props": {
                  "placeholder": "期间"
                },
                "_raw": {
                  "label": "期间",
                  "desc": "<p>在动画的每一帧里，用户可以使用 <code class=\"codespan\">during</code> 回调来设定节点的各种属性。</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // 设置 transform 属性值。\n    // transform 属性参见 `TransformProp`。\n    setTransform(key: TransformProp, val: unknown): void;\n    // 获得当前动画帧的 transform 属性值。\n    getTransform(key: TransformProp): unknown;\n    // 设置 shape 属性值。\n    // shape 属性形如：`{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`。\n    setShape(key: string, val: unknown): void;\n    // 获得当前动画帧的 shape 属性值。\n    getShape(key: string): unknown;\n    // 设置 style 属性值。\n    // style 属性形如：`{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`。\n    setStyle(key: string, val: unknown): void;\n    // 获得当前动画帧的 style 属性值。\n    getStyle(key: string): unknown;\n    // 设置 extra 属性值。\n    // extra 属性形如：`{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`。\n    setExtra(key: string, val: unknown): void;\n    // 获得当前动画帧的 extra 属性值。\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>在绝大多数场景下，用户不需要这个 <code class=\"codespan\">during</code> 回调。因为，假如属性被设定到 <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a> 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 <code class=\"codespan\">during</code> 回调来定制他们。</p>\n<p>例如，如果用户使用 <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> 画图形，图形的形状会由 <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a> 来定义，形如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>如果用户指定了 <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> 如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>尽管这些 <code class=\"codespan\">points</code> 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 <code class=\"codespan\">during</code> 回调如下：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // 让 echarts 对 `extra.degree` 进行插值，然后基于\n    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>也参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "额外",
                  "name": "extra"
                },
                "children": [
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_ring.extra.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">extra</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">extra</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: { ... },\n    // `extra` 下所有属性开启过渡动画。\n    transition: &#39;extra&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "形状",
                  "name": "shape"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.shape.cx",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "圆心x"
                    },
                    "_raw": {
                      "label": "圆心x",
                      "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.shape.cy",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "圆心y"
                    },
                    "_raw": {
                      "label": "圆心y",
                      "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.shape.r",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "半径"
                    },
                    "_raw": {
                      "label": "半径",
                      "desc": "<p>外半径。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.shape.r0",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "内半径"
                    },
                    "_raw": {
                      "label": "内半径",
                      "desc": "<p>内半径。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_ring.shape.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">shape</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">shape</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { ... },\n    // `shape` 下所有属性开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "样式",
                  "name": "style"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.style.fill",
                      "default": "#000"
                    },
                    "props": {
                      "placeholder": "填充"
                    },
                    "_raw": {
                      "label": "填充",
                      "desc": "<p>填充色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.style.stroke",
                    "props": {
                      "placeholder": "描边"
                    },
                    "_raw": {
                      "label": "描边",
                      "desc": "<p>线条颜色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.style.lineWidth",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "线宽"
                    },
                    "_raw": {
                      "label": "线宽",
                      "desc": "<p>线条宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.style.lineDash",
                      "default": "solid"
                    },
                    "props": {
                      "placeholder": "虚线样式",
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
                      "label": "虚线样式",
                      "desc": "<p>线条样式。可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n<li><code class=\"codespan\">number</code> 或 <code class=\"codespan\">number</code> 数组。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash\" target=\"_blank\">MDN</a>。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.style.lineDashOffset",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "虚线偏移"
                    },
                    "_raw": {
                      "label": "虚线偏移",
                      "desc": "<p>用于设置虚线的偏移量。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.style.lineCap",
                      "default": "butt"
                    },
                    "props": {
                      "placeholder": "线帽样式"
                    },
                    "_raw": {
                      "label": "线帽样式",
                      "desc": "<p>用于指定线段末端的绘制方式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.style.lineJoin",
                      "default": "miter"
                    },
                    "props": {
                      "placeholder": "线段连接"
                    },
                    "_raw": {
                      "label": "线段连接",
                      "desc": "<p>设置线条转折点的样式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.style.miterLimit",
                      "default": 10
                    },
                    "props": {
                      "placeholder": "斜接限制"
                    },
                    "_raw": {
                      "label": "斜接限制",
                      "desc": "<p>设置斜接面限制比例的属性。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_ring.style.shadowBlur",
                    "props": {
                      "placeholder": "阴影模糊"
                    },
                    "_raw": {
                      "label": "阴影模糊",
                      "desc": "<p>阴影宽度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_ring.style.shadowOffsetX",
                    "props": {
                      "placeholder": "阴影X偏移"
                    },
                    "_raw": {
                      "label": "阴影X偏移",
                      "desc": "<p>阴影 X 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_ring.style.shadowOffsetY",
                    "props": {
                      "placeholder": "阴影Y偏移"
                    },
                    "_raw": {
                      "label": "阴影Y偏移",
                      "desc": "<p>阴影 Y 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "SmartColorInput",
                    "model": "series.custom.renderItem.return_ring.style.shadowColor",
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
                      "desc": "<p>阴影颜色。</p>\n"
                    }
                  },
                  {
                    "type": "SmartOpacityInput",
                    "model": {
                      "path": "series.custom.renderItem.return_ring.style.opacity",
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
                      "desc": "<p>不透明度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_ring.style.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">style</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">style</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: { ... },\n    // `style` 下所有属性开启过渡动画。\n    transition: &#39;style&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_ring.focus",
                  "default": "none"
                },
                "props": {
                  "placeholder": "聚焦"
                },
                "_raw": {
                  "label": "聚焦",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_ring.blurScope",
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
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_ring.emphasisDisabled",
                "props": {
                  "placeholder": "禁用高亮"
                },
                "_raw": {
                  "label": "禁用高亮",
                  "desc": "<p>是否关闭高亮状态。</p>\n"
                }
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
                    "model": "series.custom.renderItem.return_ring.emphasis.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.blur.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_ring.select.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "返回扇形",
              "name": "return_sector"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_sector.type",
                  "default": "sector"
                },
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_sector.id",
                "props": {
                  "placeholder": "ID"
                },
                "_raw": {
                  "label": "ID",
                  "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_sector.x",
                  "default": 0
                },
                "props": {
                  "placeholder": "x"
                },
                "_raw": {
                  "label": "x",
                  "desc": "<p>元素的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_sector.y",
                  "default": 0
                },
                "props": {
                  "placeholder": "y"
                },
                "_raw": {
                  "label": "y",
                  "desc": "<p>元素的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_sector.rotation",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>元素的旋转</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_sector.scaleX",
                  "default": 1
                },
                "props": {
                  "placeholder": "X轴缩放"
                },
                "_raw": {
                  "label": "X轴缩放",
                  "desc": "<p>元素在 x 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_sector.scaleY",
                  "default": 1
                },
                "props": {
                  "placeholder": "Y轴缩放"
                },
                "_raw": {
                  "label": "Y轴缩放",
                  "desc": "<p>元素在 y 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_sector.originX",
                  "default": 0
                },
                "props": {
                  "placeholder": "X轴原点"
                },
                "_raw": {
                  "label": "X轴原点",
                  "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_sector.originY",
                  "default": 0
                },
                "props": {
                  "placeholder": "Y轴原点"
                },
                "_raw": {
                  "label": "Y轴原点",
                  "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "series.custom.renderItem.return_sector.transition",
                "props": {
                  "placeholder": "过渡",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "过渡",
                  "desc": "<p>可以通过<code class=\"codespan\">&#39;all&#39;</code>指定所有属性都开启过渡动画，也可以指定单个或一组属性。</p>\n<p>Transform 相关的属性：<code class=\"codespan\">&#39;x&#39;</code>、 <code class=\"codespan\">&#39;y&#39;</code>、<code class=\"codespan\">&#39;scaleX&#39;</code>、<code class=\"codespan\">&#39;scaleY&#39;</code>、<code class=\"codespan\">&#39;rotation&#39;</code>、<code class=\"codespan\">&#39;originX&#39;</code>、<code class=\"codespan\">&#39;originY&#39;</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>还可以是这三个属性 <code class=\"codespan\">&#39;shape&#39;</code>、<code class=\"codespan\">&#39;style&#39;</code>、<code class=\"codespan\">&#39;extra&#39;</code>。表示这三个属性中所有的子属性都开启过渡动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // 表示 shape 中所有属性都开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>在自定义系列中，当 transition 没有指定时，<code class=\"codespan\">&#39;x&#39;</code> 和 <code class=\"codespan\">&#39;y&#39;</code> 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：<code class=\"codespan\">transition: []</code></p>\n<p><code class=\"codespan\">transition</code> 效果参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_sector.enterFrom",
                "props": {
                  "placeholder": "进入起点"
                },
                "_raw": {
                  "label": "进入起点",
                  "desc": "<p>配置图形的入场属性用于入场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // 淡入\n        style: { opacity: 0 },\n        // 从左飞入\n        x: 0\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_sector.leaveTo",
                "props": {
                  "placeholder": "离开终点"
                },
                "_raw": {
                  "label": "离开终点",
                  "desc": "<p>配置图形的退场属性用于退场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // 淡出\n        style: { opacity: 0 },\n        // 向右飞出\n        x: 200\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "进入动画",
                  "name": "enterAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_sector.enterAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.enterAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_sector.enterAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "更新动画",
                  "name": "updateAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_sector.updateAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.updateAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_sector.updateAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "离开动画",
                  "name": "leaveAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_sector.leaveAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.leaveAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_sector.leaveAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "关键帧动画",
                  "name": "keyframeAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_sector.keyframeAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.keyframeAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_sector.keyframeAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_sector.keyframeAnimation.loop",
                    "props": {
                      "placeholder": "循环"
                    },
                    "_raw": {
                      "label": "循环",
                      "desc": "<p>是否循环播放动画。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.keyframeAnimation.keyframes",
                    "props": {
                      "placeholder": "关键帧"
                    },
                    "_raw": {
                      "label": "关键帧",
                      "desc": "<p>动画的关键帧。数组中每一项为一个关键帧，格式如下：</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // 关键帧位置。0 为第一帧，1 为最后一帧\n    // 关键帧时间为 percent * duration + delay\n    percent: number\n    // 上一个关键帧到这个关键帧运行时的缓动函数。可选\n    easing?: number\n\n    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_sector.morph",
                "props": {
                  "placeholder": "形变"
                },
                "_raw": {
                  "label": "形变",
                  "desc": "<p>是否开启形变动画。</p>\n<p>开启 <a href=\"#series-custom.universalTransition\">universalTransition</a> 后如果前后两次更新图形类型不一样，比如从<code class=\"codespan\">rect</code>变为了<code class=\"codespan\">circle</code>，会通过形变动画过渡。如果想要关闭可以设置该属性为<code class=\"codespan\">false</code>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "series.custom.renderItem.return_sector.z2",
                "props": {
                  "placeholder": "Z轴层级2"
                },
                "_raw": {
                  "label": "Z轴层级2",
                  "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_sector.name",
                "props": {
                  "placeholder": "名称"
                },
                "_raw": {
                  "label": "名称",
                  "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_sector.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_sector.info",
                "props": {
                  "placeholder": "信息"
                },
                "_raw": {
                  "label": "信息",
                  "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_sector.silent",
                  "default": false
                },
                "props": {
                  "placeholder": "静默"
                },
                "_raw": {
                  "label": "静默",
                  "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_sector.invisible",
                  "default": false
                },
                "props": {
                  "placeholder": "不可见"
                },
                "_raw": {
                  "label": "不可见",
                  "desc": "<p>节点是否可见。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_sector.ignore",
                  "default": false
                },
                "props": {
                  "placeholder": "忽略"
                },
                "_raw": {
                  "label": "忽略",
                  "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_sector.textContent",
                "props": {
                  "placeholder": "文本内容"
                },
                "_raw": {
                  "label": "文本内容",
                  "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#series-custom.renderItem.return_text\" target=\"_blank\">text</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "文本配置",
                  "name": "textConfig"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.textConfig.position",
                      "default": "inside"
                    },
                    "props": {
                      "placeholder": "位置"
                    },
                    "_raw": {
                      "label": "位置",
                      "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_sector.textConfig.rotation",
                    "props": {
                      "placeholder": "旋转"
                    },
                    "_raw": {
                      "label": "旋转",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.textConfig.layoutRect",
                    "props": {
                      "placeholder": "布局矩形"
                    },
                    "_raw": {
                      "label": "布局矩形",
                      "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.textConfig.offset",
                    "props": {
                      "placeholder": "偏移"
                    },
                    "_raw": {
                      "label": "偏移",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.textConfig.origin",
                    "props": {
                      "placeholder": "原点"
                    },
                    "_raw": {
                      "label": "原点",
                      "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.textConfig.distance",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "距离"
                    },
                    "_raw": {
                      "label": "距离",
                      "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.textConfig.local",
                      "default": false
                    },
                    "props": {
                      "placeholder": "局部"
                    },
                    "_raw": {
                      "label": "局部",
                      "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.textConfig.insideFill",
                    "props": {
                      "placeholder": "内部填充"
                    },
                    "_raw": {
                      "label": "内部填充",
                      "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.textConfig.insideStroke",
                    "props": {
                      "placeholder": "内部描边"
                    },
                    "_raw": {
                      "label": "内部描边",
                      "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.textConfig.outsideFill",
                    "props": {
                      "placeholder": "外部填充"
                    },
                    "_raw": {
                      "label": "外部填充",
                      "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.textConfig.outsideStroke",
                    "props": {
                      "placeholder": "外部描边"
                    },
                    "_raw": {
                      "label": "外部描边",
                      "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_sector.textConfig.inside",
                    "props": {
                      "placeholder": "内部"
                    },
                    "_raw": {
                      "label": "内部",
                      "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_sector.during",
                "props": {
                  "placeholder": "期间"
                },
                "_raw": {
                  "label": "期间",
                  "desc": "<p>在动画的每一帧里，用户可以使用 <code class=\"codespan\">during</code> 回调来设定节点的各种属性。</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // 设置 transform 属性值。\n    // transform 属性参见 `TransformProp`。\n    setTransform(key: TransformProp, val: unknown): void;\n    // 获得当前动画帧的 transform 属性值。\n    getTransform(key: TransformProp): unknown;\n    // 设置 shape 属性值。\n    // shape 属性形如：`{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`。\n    setShape(key: string, val: unknown): void;\n    // 获得当前动画帧的 shape 属性值。\n    getShape(key: string): unknown;\n    // 设置 style 属性值。\n    // style 属性形如：`{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`。\n    setStyle(key: string, val: unknown): void;\n    // 获得当前动画帧的 style 属性值。\n    getStyle(key: string): unknown;\n    // 设置 extra 属性值。\n    // extra 属性形如：`{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`。\n    setExtra(key: string, val: unknown): void;\n    // 获得当前动画帧的 extra 属性值。\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>在绝大多数场景下，用户不需要这个 <code class=\"codespan\">during</code> 回调。因为，假如属性被设定到 <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a> 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 <code class=\"codespan\">during</code> 回调来定制他们。</p>\n<p>例如，如果用户使用 <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> 画图形，图形的形状会由 <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a> 来定义，形如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>如果用户指定了 <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> 如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>尽管这些 <code class=\"codespan\">points</code> 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 <code class=\"codespan\">during</code> 回调如下：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // 让 echarts 对 `extra.degree` 进行插值，然后基于\n    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>也参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "额外",
                  "name": "extra"
                },
                "children": [
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_sector.extra.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">extra</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">extra</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: { ... },\n    // `extra` 下所有属性开启过渡动画。\n    transition: &#39;extra&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "形状",
                  "name": "shape"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.shape.cx",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "圆心x"
                    },
                    "_raw": {
                      "label": "圆心x",
                      "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.shape.cy",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "圆心y"
                    },
                    "_raw": {
                      "label": "圆心y",
                      "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.shape.r",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "半径"
                    },
                    "_raw": {
                      "label": "半径",
                      "desc": "<p>外半径。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.shape.r0",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "内半径"
                    },
                    "_raw": {
                      "label": "内半径",
                      "desc": "<p>内半径。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.shape.startAngle",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "起始角度"
                    },
                    "_raw": {
                      "label": "起始角度",
                      "desc": "<p>开始弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.shape.endAngle",
                      "default": "Math.PI * 2"
                    },
                    "props": {
                      "placeholder": "结束角度"
                    },
                    "_raw": {
                      "label": "结束角度",
                      "desc": "<p>结束弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.shape.clockwise",
                      "default": true
                    },
                    "props": {
                      "placeholder": "顺时针"
                    },
                    "_raw": {
                      "label": "顺时针",
                      "desc": "<p>是否顺时针。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_sector.shape.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">shape</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">shape</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { ... },\n    // `shape` 下所有属性开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "样式",
                  "name": "style"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.style.fill",
                      "default": "#000"
                    },
                    "props": {
                      "placeholder": "填充"
                    },
                    "_raw": {
                      "label": "填充",
                      "desc": "<p>填充色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.style.stroke",
                    "props": {
                      "placeholder": "描边"
                    },
                    "_raw": {
                      "label": "描边",
                      "desc": "<p>线条颜色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.style.lineWidth",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "线宽"
                    },
                    "_raw": {
                      "label": "线宽",
                      "desc": "<p>线条宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.style.lineDash",
                      "default": "solid"
                    },
                    "props": {
                      "placeholder": "虚线样式",
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
                      "label": "虚线样式",
                      "desc": "<p>线条样式。可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n<li><code class=\"codespan\">number</code> 或 <code class=\"codespan\">number</code> 数组。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash\" target=\"_blank\">MDN</a>。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.style.lineDashOffset",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "虚线偏移"
                    },
                    "_raw": {
                      "label": "虚线偏移",
                      "desc": "<p>用于设置虚线的偏移量。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.style.lineCap",
                      "default": "butt"
                    },
                    "props": {
                      "placeholder": "线帽样式"
                    },
                    "_raw": {
                      "label": "线帽样式",
                      "desc": "<p>用于指定线段末端的绘制方式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.style.lineJoin",
                      "default": "miter"
                    },
                    "props": {
                      "placeholder": "线段连接"
                    },
                    "_raw": {
                      "label": "线段连接",
                      "desc": "<p>设置线条转折点的样式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.style.miterLimit",
                      "default": 10
                    },
                    "props": {
                      "placeholder": "斜接限制"
                    },
                    "_raw": {
                      "label": "斜接限制",
                      "desc": "<p>设置斜接面限制比例的属性。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_sector.style.shadowBlur",
                    "props": {
                      "placeholder": "阴影模糊"
                    },
                    "_raw": {
                      "label": "阴影模糊",
                      "desc": "<p>阴影宽度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_sector.style.shadowOffsetX",
                    "props": {
                      "placeholder": "阴影X偏移"
                    },
                    "_raw": {
                      "label": "阴影X偏移",
                      "desc": "<p>阴影 X 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_sector.style.shadowOffsetY",
                    "props": {
                      "placeholder": "阴影Y偏移"
                    },
                    "_raw": {
                      "label": "阴影Y偏移",
                      "desc": "<p>阴影 Y 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "SmartColorInput",
                    "model": "series.custom.renderItem.return_sector.style.shadowColor",
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
                      "desc": "<p>阴影颜色。</p>\n"
                    }
                  },
                  {
                    "type": "SmartOpacityInput",
                    "model": {
                      "path": "series.custom.renderItem.return_sector.style.opacity",
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
                      "desc": "<p>不透明度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_sector.style.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">style</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">style</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: { ... },\n    // `style` 下所有属性开启过渡动画。\n    transition: &#39;style&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_sector.focus",
                  "default": "none"
                },
                "props": {
                  "placeholder": "聚焦"
                },
                "_raw": {
                  "label": "聚焦",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_sector.blurScope",
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
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_sector.emphasisDisabled",
                "props": {
                  "placeholder": "禁用高亮"
                },
                "_raw": {
                  "label": "禁用高亮",
                  "desc": "<p>是否关闭高亮状态。</p>\n"
                }
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
                    "model": "series.custom.renderItem.return_sector.emphasis.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.blur.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_sector.select.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "返回圆弧",
              "name": "return_arc"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_arc.type",
                  "default": "arc"
                },
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_arc.id",
                "props": {
                  "placeholder": "ID"
                },
                "_raw": {
                  "label": "ID",
                  "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_arc.x",
                  "default": 0
                },
                "props": {
                  "placeholder": "x"
                },
                "_raw": {
                  "label": "x",
                  "desc": "<p>元素的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_arc.y",
                  "default": 0
                },
                "props": {
                  "placeholder": "y"
                },
                "_raw": {
                  "label": "y",
                  "desc": "<p>元素的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_arc.rotation",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>元素的旋转</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_arc.scaleX",
                  "default": 1
                },
                "props": {
                  "placeholder": "X轴缩放"
                },
                "_raw": {
                  "label": "X轴缩放",
                  "desc": "<p>元素在 x 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_arc.scaleY",
                  "default": 1
                },
                "props": {
                  "placeholder": "Y轴缩放"
                },
                "_raw": {
                  "label": "Y轴缩放",
                  "desc": "<p>元素在 y 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_arc.originX",
                  "default": 0
                },
                "props": {
                  "placeholder": "X轴原点"
                },
                "_raw": {
                  "label": "X轴原点",
                  "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_arc.originY",
                  "default": 0
                },
                "props": {
                  "placeholder": "Y轴原点"
                },
                "_raw": {
                  "label": "Y轴原点",
                  "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "series.custom.renderItem.return_arc.transition",
                "props": {
                  "placeholder": "过渡",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "过渡",
                  "desc": "<p>可以通过<code class=\"codespan\">&#39;all&#39;</code>指定所有属性都开启过渡动画，也可以指定单个或一组属性。</p>\n<p>Transform 相关的属性：<code class=\"codespan\">&#39;x&#39;</code>、 <code class=\"codespan\">&#39;y&#39;</code>、<code class=\"codespan\">&#39;scaleX&#39;</code>、<code class=\"codespan\">&#39;scaleY&#39;</code>、<code class=\"codespan\">&#39;rotation&#39;</code>、<code class=\"codespan\">&#39;originX&#39;</code>、<code class=\"codespan\">&#39;originY&#39;</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>还可以是这三个属性 <code class=\"codespan\">&#39;shape&#39;</code>、<code class=\"codespan\">&#39;style&#39;</code>、<code class=\"codespan\">&#39;extra&#39;</code>。表示这三个属性中所有的子属性都开启过渡动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // 表示 shape 中所有属性都开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>在自定义系列中，当 transition 没有指定时，<code class=\"codespan\">&#39;x&#39;</code> 和 <code class=\"codespan\">&#39;y&#39;</code> 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：<code class=\"codespan\">transition: []</code></p>\n<p><code class=\"codespan\">transition</code> 效果参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_arc.enterFrom",
                "props": {
                  "placeholder": "进入起点"
                },
                "_raw": {
                  "label": "进入起点",
                  "desc": "<p>配置图形的入场属性用于入场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // 淡入\n        style: { opacity: 0 },\n        // 从左飞入\n        x: 0\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_arc.leaveTo",
                "props": {
                  "placeholder": "离开终点"
                },
                "_raw": {
                  "label": "离开终点",
                  "desc": "<p>配置图形的退场属性用于退场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // 淡出\n        style: { opacity: 0 },\n        // 向右飞出\n        x: 200\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "进入动画",
                  "name": "enterAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_arc.enterAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.enterAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_arc.enterAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "更新动画",
                  "name": "updateAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_arc.updateAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.updateAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_arc.updateAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "离开动画",
                  "name": "leaveAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_arc.leaveAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.leaveAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_arc.leaveAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "关键帧动画",
                  "name": "keyframeAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_arc.keyframeAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.keyframeAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_arc.keyframeAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_arc.keyframeAnimation.loop",
                    "props": {
                      "placeholder": "循环"
                    },
                    "_raw": {
                      "label": "循环",
                      "desc": "<p>是否循环播放动画。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.keyframeAnimation.keyframes",
                    "props": {
                      "placeholder": "关键帧"
                    },
                    "_raw": {
                      "label": "关键帧",
                      "desc": "<p>动画的关键帧。数组中每一项为一个关键帧，格式如下：</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // 关键帧位置。0 为第一帧，1 为最后一帧\n    // 关键帧时间为 percent * duration + delay\n    percent: number\n    // 上一个关键帧到这个关键帧运行时的缓动函数。可选\n    easing?: number\n\n    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_arc.morph",
                "props": {
                  "placeholder": "形变"
                },
                "_raw": {
                  "label": "形变",
                  "desc": "<p>是否开启形变动画。</p>\n<p>开启 <a href=\"#series-custom.universalTransition\">universalTransition</a> 后如果前后两次更新图形类型不一样，比如从<code class=\"codespan\">rect</code>变为了<code class=\"codespan\">circle</code>，会通过形变动画过渡。如果想要关闭可以设置该属性为<code class=\"codespan\">false</code>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "series.custom.renderItem.return_arc.z2",
                "props": {
                  "placeholder": "Z轴层级2"
                },
                "_raw": {
                  "label": "Z轴层级2",
                  "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_arc.name",
                "props": {
                  "placeholder": "名称"
                },
                "_raw": {
                  "label": "名称",
                  "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_arc.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_arc.info",
                "props": {
                  "placeholder": "信息"
                },
                "_raw": {
                  "label": "信息",
                  "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_arc.silent",
                  "default": false
                },
                "props": {
                  "placeholder": "静默"
                },
                "_raw": {
                  "label": "静默",
                  "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_arc.invisible",
                  "default": false
                },
                "props": {
                  "placeholder": "不可见"
                },
                "_raw": {
                  "label": "不可见",
                  "desc": "<p>节点是否可见。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_arc.ignore",
                  "default": false
                },
                "props": {
                  "placeholder": "忽略"
                },
                "_raw": {
                  "label": "忽略",
                  "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_arc.textContent",
                "props": {
                  "placeholder": "文本内容"
                },
                "_raw": {
                  "label": "文本内容",
                  "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#series-custom.renderItem.return_text\" target=\"_blank\">text</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "文本配置",
                  "name": "textConfig"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.textConfig.position",
                      "default": "inside"
                    },
                    "props": {
                      "placeholder": "位置"
                    },
                    "_raw": {
                      "label": "位置",
                      "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_arc.textConfig.rotation",
                    "props": {
                      "placeholder": "旋转"
                    },
                    "_raw": {
                      "label": "旋转",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.textConfig.layoutRect",
                    "props": {
                      "placeholder": "布局矩形"
                    },
                    "_raw": {
                      "label": "布局矩形",
                      "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.textConfig.offset",
                    "props": {
                      "placeholder": "偏移"
                    },
                    "_raw": {
                      "label": "偏移",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.textConfig.origin",
                    "props": {
                      "placeholder": "原点"
                    },
                    "_raw": {
                      "label": "原点",
                      "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.textConfig.distance",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "距离"
                    },
                    "_raw": {
                      "label": "距离",
                      "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.textConfig.local",
                      "default": false
                    },
                    "props": {
                      "placeholder": "局部"
                    },
                    "_raw": {
                      "label": "局部",
                      "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.textConfig.insideFill",
                    "props": {
                      "placeholder": "内部填充"
                    },
                    "_raw": {
                      "label": "内部填充",
                      "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.textConfig.insideStroke",
                    "props": {
                      "placeholder": "内部描边"
                    },
                    "_raw": {
                      "label": "内部描边",
                      "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.textConfig.outsideFill",
                    "props": {
                      "placeholder": "外部填充"
                    },
                    "_raw": {
                      "label": "外部填充",
                      "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.textConfig.outsideStroke",
                    "props": {
                      "placeholder": "外部描边"
                    },
                    "_raw": {
                      "label": "外部描边",
                      "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_arc.textConfig.inside",
                    "props": {
                      "placeholder": "内部"
                    },
                    "_raw": {
                      "label": "内部",
                      "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_arc.during",
                "props": {
                  "placeholder": "期间"
                },
                "_raw": {
                  "label": "期间",
                  "desc": "<p>在动画的每一帧里，用户可以使用 <code class=\"codespan\">during</code> 回调来设定节点的各种属性。</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // 设置 transform 属性值。\n    // transform 属性参见 `TransformProp`。\n    setTransform(key: TransformProp, val: unknown): void;\n    // 获得当前动画帧的 transform 属性值。\n    getTransform(key: TransformProp): unknown;\n    // 设置 shape 属性值。\n    // shape 属性形如：`{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`。\n    setShape(key: string, val: unknown): void;\n    // 获得当前动画帧的 shape 属性值。\n    getShape(key: string): unknown;\n    // 设置 style 属性值。\n    // style 属性形如：`{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`。\n    setStyle(key: string, val: unknown): void;\n    // 获得当前动画帧的 style 属性值。\n    getStyle(key: string): unknown;\n    // 设置 extra 属性值。\n    // extra 属性形如：`{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`。\n    setExtra(key: string, val: unknown): void;\n    // 获得当前动画帧的 extra 属性值。\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>在绝大多数场景下，用户不需要这个 <code class=\"codespan\">during</code> 回调。因为，假如属性被设定到 <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a> 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 <code class=\"codespan\">during</code> 回调来定制他们。</p>\n<p>例如，如果用户使用 <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> 画图形，图形的形状会由 <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a> 来定义，形如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>如果用户指定了 <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> 如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>尽管这些 <code class=\"codespan\">points</code> 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 <code class=\"codespan\">during</code> 回调如下：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // 让 echarts 对 `extra.degree` 进行插值，然后基于\n    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>也参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "额外",
                  "name": "extra"
                },
                "children": [
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_arc.extra.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">extra</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">extra</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: { ... },\n    // `extra` 下所有属性开启过渡动画。\n    transition: &#39;extra&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "形状",
                  "name": "shape"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.shape.cx",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "圆心x"
                    },
                    "_raw": {
                      "label": "圆心x",
                      "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.shape.cy",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "圆心y"
                    },
                    "_raw": {
                      "label": "圆心y",
                      "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.shape.r",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "半径"
                    },
                    "_raw": {
                      "label": "半径",
                      "desc": "<p>外半径。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.shape.r0",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "内半径"
                    },
                    "_raw": {
                      "label": "内半径",
                      "desc": "<p>内半径。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.shape.startAngle",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "起始角度"
                    },
                    "_raw": {
                      "label": "起始角度",
                      "desc": "<p>开始弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.shape.endAngle",
                      "default": "Math.PI * 2"
                    },
                    "props": {
                      "placeholder": "结束角度"
                    },
                    "_raw": {
                      "label": "结束角度",
                      "desc": "<p>结束弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.shape.clockwise",
                      "default": true
                    },
                    "props": {
                      "placeholder": "顺时针"
                    },
                    "_raw": {
                      "label": "顺时针",
                      "desc": "<p>是否顺时针。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_arc.shape.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">shape</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">shape</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { ... },\n    // `shape` 下所有属性开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "样式",
                  "name": "style"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.style.fill",
                    "props": {
                      "placeholder": "填充"
                    },
                    "_raw": {
                      "label": "填充",
                      "desc": "<p>填充色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.style.stroke",
                      "default": "#000"
                    },
                    "props": {
                      "placeholder": "描边"
                    },
                    "_raw": {
                      "label": "描边",
                      "desc": "<p>线条颜色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.style.lineWidth",
                      "default": 1
                    },
                    "props": {
                      "placeholder": "线宽"
                    },
                    "_raw": {
                      "label": "线宽",
                      "desc": "<p>线条宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.style.lineDash",
                      "default": "solid"
                    },
                    "props": {
                      "placeholder": "虚线样式",
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
                      "label": "虚线样式",
                      "desc": "<p>线条样式。可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n<li><code class=\"codespan\">number</code> 或 <code class=\"codespan\">number</code> 数组。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash\" target=\"_blank\">MDN</a>。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.style.lineDashOffset",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "虚线偏移"
                    },
                    "_raw": {
                      "label": "虚线偏移",
                      "desc": "<p>用于设置虚线的偏移量。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.style.lineCap",
                      "default": "butt"
                    },
                    "props": {
                      "placeholder": "线帽样式"
                    },
                    "_raw": {
                      "label": "线帽样式",
                      "desc": "<p>用于指定线段末端的绘制方式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.style.lineJoin",
                      "default": "miter"
                    },
                    "props": {
                      "placeholder": "线段连接"
                    },
                    "_raw": {
                      "label": "线段连接",
                      "desc": "<p>设置线条转折点的样式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.style.miterLimit",
                      "default": 10
                    },
                    "props": {
                      "placeholder": "斜接限制"
                    },
                    "_raw": {
                      "label": "斜接限制",
                      "desc": "<p>设置斜接面限制比例的属性。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_arc.style.shadowBlur",
                    "props": {
                      "placeholder": "阴影模糊"
                    },
                    "_raw": {
                      "label": "阴影模糊",
                      "desc": "<p>阴影宽度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_arc.style.shadowOffsetX",
                    "props": {
                      "placeholder": "阴影X偏移"
                    },
                    "_raw": {
                      "label": "阴影X偏移",
                      "desc": "<p>阴影 X 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_arc.style.shadowOffsetY",
                    "props": {
                      "placeholder": "阴影Y偏移"
                    },
                    "_raw": {
                      "label": "阴影Y偏移",
                      "desc": "<p>阴影 Y 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "SmartColorInput",
                    "model": "series.custom.renderItem.return_arc.style.shadowColor",
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
                      "desc": "<p>阴影颜色。</p>\n"
                    }
                  },
                  {
                    "type": "SmartOpacityInput",
                    "model": {
                      "path": "series.custom.renderItem.return_arc.style.opacity",
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
                      "desc": "<p>不透明度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_arc.style.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">style</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">style</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: { ... },\n    // `style` 下所有属性开启过渡动画。\n    transition: &#39;style&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_arc.focus",
                  "default": "none"
                },
                "props": {
                  "placeholder": "聚焦"
                },
                "_raw": {
                  "label": "聚焦",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_arc.blurScope",
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
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_arc.emphasisDisabled",
                "props": {
                  "placeholder": "禁用高亮"
                },
                "_raw": {
                  "label": "禁用高亮",
                  "desc": "<p>是否关闭高亮状态。</p>\n"
                }
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
                    "model": "series.custom.renderItem.return_arc.emphasis.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.blur.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_arc.select.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "返回多边形",
              "name": "return_polygon"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polygon.type",
                  "default": "polygon"
                },
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_polygon.id",
                "props": {
                  "placeholder": "ID"
                },
                "_raw": {
                  "label": "ID",
                  "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polygon.x",
                  "default": 0
                },
                "props": {
                  "placeholder": "x"
                },
                "_raw": {
                  "label": "x",
                  "desc": "<p>元素的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polygon.y",
                  "default": 0
                },
                "props": {
                  "placeholder": "y"
                },
                "_raw": {
                  "label": "y",
                  "desc": "<p>元素的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polygon.rotation",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>元素的旋转</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polygon.scaleX",
                  "default": 1
                },
                "props": {
                  "placeholder": "X轴缩放"
                },
                "_raw": {
                  "label": "X轴缩放",
                  "desc": "<p>元素在 x 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polygon.scaleY",
                  "default": 1
                },
                "props": {
                  "placeholder": "Y轴缩放"
                },
                "_raw": {
                  "label": "Y轴缩放",
                  "desc": "<p>元素在 y 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polygon.originX",
                  "default": 0
                },
                "props": {
                  "placeholder": "X轴原点"
                },
                "_raw": {
                  "label": "X轴原点",
                  "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polygon.originY",
                  "default": 0
                },
                "props": {
                  "placeholder": "Y轴原点"
                },
                "_raw": {
                  "label": "Y轴原点",
                  "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "series.custom.renderItem.return_polygon.transition",
                "props": {
                  "placeholder": "过渡",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "过渡",
                  "desc": "<p>可以通过<code class=\"codespan\">&#39;all&#39;</code>指定所有属性都开启过渡动画，也可以指定单个或一组属性。</p>\n<p>Transform 相关的属性：<code class=\"codespan\">&#39;x&#39;</code>、 <code class=\"codespan\">&#39;y&#39;</code>、<code class=\"codespan\">&#39;scaleX&#39;</code>、<code class=\"codespan\">&#39;scaleY&#39;</code>、<code class=\"codespan\">&#39;rotation&#39;</code>、<code class=\"codespan\">&#39;originX&#39;</code>、<code class=\"codespan\">&#39;originY&#39;</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>还可以是这三个属性 <code class=\"codespan\">&#39;shape&#39;</code>、<code class=\"codespan\">&#39;style&#39;</code>、<code class=\"codespan\">&#39;extra&#39;</code>。表示这三个属性中所有的子属性都开启过渡动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // 表示 shape 中所有属性都开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>在自定义系列中，当 transition 没有指定时，<code class=\"codespan\">&#39;x&#39;</code> 和 <code class=\"codespan\">&#39;y&#39;</code> 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：<code class=\"codespan\">transition: []</code></p>\n<p><code class=\"codespan\">transition</code> 效果参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_polygon.enterFrom",
                "props": {
                  "placeholder": "进入起点"
                },
                "_raw": {
                  "label": "进入起点",
                  "desc": "<p>配置图形的入场属性用于入场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // 淡入\n        style: { opacity: 0 },\n        // 从左飞入\n        x: 0\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_polygon.leaveTo",
                "props": {
                  "placeholder": "离开终点"
                },
                "_raw": {
                  "label": "离开终点",
                  "desc": "<p>配置图形的退场属性用于退场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // 淡出\n        style: { opacity: 0 },\n        // 向右飞出\n        x: 200\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "进入动画",
                  "name": "enterAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polygon.enterAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.enterAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polygon.enterAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "更新动画",
                  "name": "updateAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polygon.updateAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.updateAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polygon.updateAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "离开动画",
                  "name": "leaveAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polygon.leaveAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.leaveAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polygon.leaveAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "关键帧动画",
                  "name": "keyframeAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polygon.keyframeAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.keyframeAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polygon.keyframeAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_polygon.keyframeAnimation.loop",
                    "props": {
                      "placeholder": "循环"
                    },
                    "_raw": {
                      "label": "循环",
                      "desc": "<p>是否循环播放动画。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.keyframeAnimation.keyframes",
                    "props": {
                      "placeholder": "关键帧"
                    },
                    "_raw": {
                      "label": "关键帧",
                      "desc": "<p>动画的关键帧。数组中每一项为一个关键帧，格式如下：</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // 关键帧位置。0 为第一帧，1 为最后一帧\n    // 关键帧时间为 percent * duration + delay\n    percent: number\n    // 上一个关键帧到这个关键帧运行时的缓动函数。可选\n    easing?: number\n\n    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_polygon.morph",
                "props": {
                  "placeholder": "形变"
                },
                "_raw": {
                  "label": "形变",
                  "desc": "<p>是否开启形变动画。</p>\n<p>开启 <a href=\"#series-custom.universalTransition\">universalTransition</a> 后如果前后两次更新图形类型不一样，比如从<code class=\"codespan\">rect</code>变为了<code class=\"codespan\">circle</code>，会通过形变动画过渡。如果想要关闭可以设置该属性为<code class=\"codespan\">false</code>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "series.custom.renderItem.return_polygon.z2",
                "props": {
                  "placeholder": "Z轴层级2"
                },
                "_raw": {
                  "label": "Z轴层级2",
                  "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_polygon.name",
                "props": {
                  "placeholder": "名称"
                },
                "_raw": {
                  "label": "名称",
                  "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_polygon.info",
                "props": {
                  "placeholder": "信息"
                },
                "_raw": {
                  "label": "信息",
                  "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_polygon.silent",
                  "default": false
                },
                "props": {
                  "placeholder": "静默"
                },
                "_raw": {
                  "label": "静默",
                  "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_polygon.invisible",
                  "default": false
                },
                "props": {
                  "placeholder": "不可见"
                },
                "_raw": {
                  "label": "不可见",
                  "desc": "<p>节点是否可见。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_polygon.ignore",
                  "default": false
                },
                "props": {
                  "placeholder": "忽略"
                },
                "_raw": {
                  "label": "忽略",
                  "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_polygon.textContent",
                "props": {
                  "placeholder": "文本内容"
                },
                "_raw": {
                  "label": "文本内容",
                  "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#series-custom.renderItem.return_text\" target=\"_blank\">text</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "文本配置",
                  "name": "textConfig"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polygon.textConfig.position",
                      "default": "inside"
                    },
                    "props": {
                      "placeholder": "位置"
                    },
                    "_raw": {
                      "label": "位置",
                      "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polygon.textConfig.rotation",
                    "props": {
                      "placeholder": "旋转"
                    },
                    "_raw": {
                      "label": "旋转",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.textConfig.layoutRect",
                    "props": {
                      "placeholder": "布局矩形"
                    },
                    "_raw": {
                      "label": "布局矩形",
                      "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.textConfig.offset",
                    "props": {
                      "placeholder": "偏移"
                    },
                    "_raw": {
                      "label": "偏移",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.textConfig.origin",
                    "props": {
                      "placeholder": "原点"
                    },
                    "_raw": {
                      "label": "原点",
                      "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polygon.textConfig.distance",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "距离"
                    },
                    "_raw": {
                      "label": "距离",
                      "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_polygon.textConfig.local",
                      "default": false
                    },
                    "props": {
                      "placeholder": "局部"
                    },
                    "_raw": {
                      "label": "局部",
                      "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.textConfig.insideFill",
                    "props": {
                      "placeholder": "内部填充"
                    },
                    "_raw": {
                      "label": "内部填充",
                      "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.textConfig.insideStroke",
                    "props": {
                      "placeholder": "内部描边"
                    },
                    "_raw": {
                      "label": "内部描边",
                      "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.textConfig.outsideFill",
                    "props": {
                      "placeholder": "外部填充"
                    },
                    "_raw": {
                      "label": "外部填充",
                      "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.textConfig.outsideStroke",
                    "props": {
                      "placeholder": "外部描边"
                    },
                    "_raw": {
                      "label": "外部描边",
                      "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_polygon.textConfig.inside",
                    "props": {
                      "placeholder": "内部"
                    },
                    "_raw": {
                      "label": "内部",
                      "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_polygon.during",
                "props": {
                  "placeholder": "期间"
                },
                "_raw": {
                  "label": "期间",
                  "desc": "<p>在动画的每一帧里，用户可以使用 <code class=\"codespan\">during</code> 回调来设定节点的各种属性。</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // 设置 transform 属性值。\n    // transform 属性参见 `TransformProp`。\n    setTransform(key: TransformProp, val: unknown): void;\n    // 获得当前动画帧的 transform 属性值。\n    getTransform(key: TransformProp): unknown;\n    // 设置 shape 属性值。\n    // shape 属性形如：`{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`。\n    setShape(key: string, val: unknown): void;\n    // 获得当前动画帧的 shape 属性值。\n    getShape(key: string): unknown;\n    // 设置 style 属性值。\n    // style 属性形如：`{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`。\n    setStyle(key: string, val: unknown): void;\n    // 获得当前动画帧的 style 属性值。\n    getStyle(key: string): unknown;\n    // 设置 extra 属性值。\n    // extra 属性形如：`{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`。\n    setExtra(key: string, val: unknown): void;\n    // 获得当前动画帧的 extra 属性值。\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>在绝大多数场景下，用户不需要这个 <code class=\"codespan\">during</code> 回调。因为，假如属性被设定到 <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a> 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 <code class=\"codespan\">during</code> 回调来定制他们。</p>\n<p>例如，如果用户使用 <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> 画图形，图形的形状会由 <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a> 来定义，形如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>如果用户指定了 <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> 如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>尽管这些 <code class=\"codespan\">points</code> 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 <code class=\"codespan\">during</code> 回调如下：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // 让 echarts 对 `extra.degree` 进行插值，然后基于\n    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>也参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "额外",
                  "name": "extra"
                },
                "children": [
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_polygon.extra.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">extra</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">extra</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: { ... },\n    // `extra` 下所有属性开启过渡动画。\n    transition: &#39;extra&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "形状",
                  "name": "shape"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.shape.points",
                    "props": {
                      "placeholder": "点数组"
                    },
                    "_raw": {
                      "label": "点数组",
                      "desc": "<p>点列表，用于定义形状，如 <code class=\"codespan\">[[22, 44], [44, 55], [11, 44], ...]</code></p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_polygon.shape.smooth",
                    "props": {
                      "placeholder": "平滑",
                      "types": [
                        "number",
                        "string"
                      ],
                      "defaultType": "number",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "平滑",
                      "desc": "<p>是否平滑曲线。</p>\n<ul>\n<li>如果为 number：表示贝塞尔 (bezier) 差值平滑，smooth 指定了平滑等级，范围 <code class=\"codespan\">[0, 1]</code>。</li>\n<li>如果为 <code class=\"codespan\">&#39;spline&#39;</code>：表示 Catmull-Rom spline 差值平滑。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_polygon.shape.smoothConstraint",
                      "default": false
                    },
                    "props": {
                      "placeholder": "平滑约束"
                    },
                    "_raw": {
                      "label": "平滑约束",
                      "desc": "<p>是否将平滑曲线约束在包围盒中。<code class=\"codespan\">smooth</code> 为 <code class=\"codespan\">number</code>（bezier）时生效。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_polygon.shape.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">shape</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">shape</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { ... },\n    // `shape` 下所有属性开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "样式",
                  "name": "style"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polygon.style.fill",
                      "default": "#000"
                    },
                    "props": {
                      "placeholder": "填充"
                    },
                    "_raw": {
                      "label": "填充",
                      "desc": "<p>填充色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.style.stroke",
                    "props": {
                      "placeholder": "描边"
                    },
                    "_raw": {
                      "label": "描边",
                      "desc": "<p>线条颜色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polygon.style.lineWidth",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "线宽"
                    },
                    "_raw": {
                      "label": "线宽",
                      "desc": "<p>线条宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polygon.style.lineDash",
                      "default": "solid"
                    },
                    "props": {
                      "placeholder": "虚线样式",
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
                      "label": "虚线样式",
                      "desc": "<p>线条样式。可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n<li><code class=\"codespan\">number</code> 或 <code class=\"codespan\">number</code> 数组。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash\" target=\"_blank\">MDN</a>。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polygon.style.lineDashOffset",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "虚线偏移"
                    },
                    "_raw": {
                      "label": "虚线偏移",
                      "desc": "<p>用于设置虚线的偏移量。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polygon.style.lineCap",
                      "default": "butt"
                    },
                    "props": {
                      "placeholder": "线帽样式"
                    },
                    "_raw": {
                      "label": "线帽样式",
                      "desc": "<p>用于指定线段末端的绘制方式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polygon.style.lineJoin",
                      "default": "miter"
                    },
                    "props": {
                      "placeholder": "线段连接"
                    },
                    "_raw": {
                      "label": "线段连接",
                      "desc": "<p>设置线条转折点的样式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polygon.style.miterLimit",
                      "default": 10
                    },
                    "props": {
                      "placeholder": "斜接限制"
                    },
                    "_raw": {
                      "label": "斜接限制",
                      "desc": "<p>设置斜接面限制比例的属性。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polygon.style.shadowBlur",
                    "props": {
                      "placeholder": "阴影模糊"
                    },
                    "_raw": {
                      "label": "阴影模糊",
                      "desc": "<p>阴影宽度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polygon.style.shadowOffsetX",
                    "props": {
                      "placeholder": "阴影X偏移"
                    },
                    "_raw": {
                      "label": "阴影X偏移",
                      "desc": "<p>阴影 X 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polygon.style.shadowOffsetY",
                    "props": {
                      "placeholder": "阴影Y偏移"
                    },
                    "_raw": {
                      "label": "阴影Y偏移",
                      "desc": "<p>阴影 Y 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "SmartColorInput",
                    "model": "series.custom.renderItem.return_polygon.style.shadowColor",
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
                      "desc": "<p>阴影颜色。</p>\n"
                    }
                  },
                  {
                    "type": "SmartOpacityInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polygon.style.opacity",
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
                      "desc": "<p>不透明度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_polygon.style.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">style</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">style</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: { ... },\n    // `style` 下所有属性开启过渡动画。\n    transition: &#39;style&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polygon.focus",
                  "default": "none"
                },
                "props": {
                  "placeholder": "聚焦"
                },
                "_raw": {
                  "label": "聚焦",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polygon.blurScope",
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
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_polygon.emphasisDisabled",
                "props": {
                  "placeholder": "禁用高亮"
                },
                "_raw": {
                  "label": "禁用高亮",
                  "desc": "<p>是否关闭高亮状态。</p>\n"
                }
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
                    "model": "series.custom.renderItem.return_polygon.emphasis.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.blur.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polygon.select.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "返回折线",
              "name": "return_polyline"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polyline.type",
                  "default": "polyline"
                },
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_polyline.id",
                "props": {
                  "placeholder": "ID"
                },
                "_raw": {
                  "label": "ID",
                  "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polyline.x",
                  "default": 0
                },
                "props": {
                  "placeholder": "x"
                },
                "_raw": {
                  "label": "x",
                  "desc": "<p>元素的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polyline.y",
                  "default": 0
                },
                "props": {
                  "placeholder": "y"
                },
                "_raw": {
                  "label": "y",
                  "desc": "<p>元素的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polyline.rotation",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>元素的旋转</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polyline.scaleX",
                  "default": 1
                },
                "props": {
                  "placeholder": "X轴缩放"
                },
                "_raw": {
                  "label": "X轴缩放",
                  "desc": "<p>元素在 x 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polyline.scaleY",
                  "default": 1
                },
                "props": {
                  "placeholder": "Y轴缩放"
                },
                "_raw": {
                  "label": "Y轴缩放",
                  "desc": "<p>元素在 y 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polyline.originX",
                  "default": 0
                },
                "props": {
                  "placeholder": "X轴原点"
                },
                "_raw": {
                  "label": "X轴原点",
                  "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polyline.originY",
                  "default": 0
                },
                "props": {
                  "placeholder": "Y轴原点"
                },
                "_raw": {
                  "label": "Y轴原点",
                  "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "series.custom.renderItem.return_polyline.transition",
                "props": {
                  "placeholder": "过渡",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "过渡",
                  "desc": "<p>可以通过<code class=\"codespan\">&#39;all&#39;</code>指定所有属性都开启过渡动画，也可以指定单个或一组属性。</p>\n<p>Transform 相关的属性：<code class=\"codespan\">&#39;x&#39;</code>、 <code class=\"codespan\">&#39;y&#39;</code>、<code class=\"codespan\">&#39;scaleX&#39;</code>、<code class=\"codespan\">&#39;scaleY&#39;</code>、<code class=\"codespan\">&#39;rotation&#39;</code>、<code class=\"codespan\">&#39;originX&#39;</code>、<code class=\"codespan\">&#39;originY&#39;</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>还可以是这三个属性 <code class=\"codespan\">&#39;shape&#39;</code>、<code class=\"codespan\">&#39;style&#39;</code>、<code class=\"codespan\">&#39;extra&#39;</code>。表示这三个属性中所有的子属性都开启过渡动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // 表示 shape 中所有属性都开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>在自定义系列中，当 transition 没有指定时，<code class=\"codespan\">&#39;x&#39;</code> 和 <code class=\"codespan\">&#39;y&#39;</code> 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：<code class=\"codespan\">transition: []</code></p>\n<p><code class=\"codespan\">transition</code> 效果参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_polyline.enterFrom",
                "props": {
                  "placeholder": "进入起点"
                },
                "_raw": {
                  "label": "进入起点",
                  "desc": "<p>配置图形的入场属性用于入场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // 淡入\n        style: { opacity: 0 },\n        // 从左飞入\n        x: 0\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_polyline.leaveTo",
                "props": {
                  "placeholder": "离开终点"
                },
                "_raw": {
                  "label": "离开终点",
                  "desc": "<p>配置图形的退场属性用于退场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // 淡出\n        style: { opacity: 0 },\n        // 向右飞出\n        x: 200\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "进入动画",
                  "name": "enterAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polyline.enterAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.enterAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polyline.enterAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "更新动画",
                  "name": "updateAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polyline.updateAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.updateAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polyline.updateAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "离开动画",
                  "name": "leaveAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polyline.leaveAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.leaveAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polyline.leaveAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "关键帧动画",
                  "name": "keyframeAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polyline.keyframeAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.keyframeAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polyline.keyframeAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_polyline.keyframeAnimation.loop",
                    "props": {
                      "placeholder": "循环"
                    },
                    "_raw": {
                      "label": "循环",
                      "desc": "<p>是否循环播放动画。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.keyframeAnimation.keyframes",
                    "props": {
                      "placeholder": "关键帧"
                    },
                    "_raw": {
                      "label": "关键帧",
                      "desc": "<p>动画的关键帧。数组中每一项为一个关键帧，格式如下：</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // 关键帧位置。0 为第一帧，1 为最后一帧\n    // 关键帧时间为 percent * duration + delay\n    percent: number\n    // 上一个关键帧到这个关键帧运行时的缓动函数。可选\n    easing?: number\n\n    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_polyline.morph",
                "props": {
                  "placeholder": "形变"
                },
                "_raw": {
                  "label": "形变",
                  "desc": "<p>是否开启形变动画。</p>\n<p>开启 <a href=\"#series-custom.universalTransition\">universalTransition</a> 后如果前后两次更新图形类型不一样，比如从<code class=\"codespan\">rect</code>变为了<code class=\"codespan\">circle</code>，会通过形变动画过渡。如果想要关闭可以设置该属性为<code class=\"codespan\">false</code>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "series.custom.renderItem.return_polyline.z2",
                "props": {
                  "placeholder": "Z轴层级2"
                },
                "_raw": {
                  "label": "Z轴层级2",
                  "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_polyline.name",
                "props": {
                  "placeholder": "名称"
                },
                "_raw": {
                  "label": "名称",
                  "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_polyline.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_polyline.info",
                "props": {
                  "placeholder": "信息"
                },
                "_raw": {
                  "label": "信息",
                  "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_polyline.silent",
                  "default": false
                },
                "props": {
                  "placeholder": "静默"
                },
                "_raw": {
                  "label": "静默",
                  "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_polyline.invisible",
                  "default": false
                },
                "props": {
                  "placeholder": "不可见"
                },
                "_raw": {
                  "label": "不可见",
                  "desc": "<p>节点是否可见。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_polyline.ignore",
                  "default": false
                },
                "props": {
                  "placeholder": "忽略"
                },
                "_raw": {
                  "label": "忽略",
                  "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_polyline.textContent",
                "props": {
                  "placeholder": "文本内容"
                },
                "_raw": {
                  "label": "文本内容",
                  "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#series-custom.renderItem.return_text\" target=\"_blank\">text</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "文本配置",
                  "name": "textConfig"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polyline.textConfig.position",
                      "default": "inside"
                    },
                    "props": {
                      "placeholder": "位置"
                    },
                    "_raw": {
                      "label": "位置",
                      "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polyline.textConfig.rotation",
                    "props": {
                      "placeholder": "旋转"
                    },
                    "_raw": {
                      "label": "旋转",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.textConfig.layoutRect",
                    "props": {
                      "placeholder": "布局矩形"
                    },
                    "_raw": {
                      "label": "布局矩形",
                      "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.textConfig.offset",
                    "props": {
                      "placeholder": "偏移"
                    },
                    "_raw": {
                      "label": "偏移",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.textConfig.origin",
                    "props": {
                      "placeholder": "原点"
                    },
                    "_raw": {
                      "label": "原点",
                      "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polyline.textConfig.distance",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "距离"
                    },
                    "_raw": {
                      "label": "距离",
                      "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_polyline.textConfig.local",
                      "default": false
                    },
                    "props": {
                      "placeholder": "局部"
                    },
                    "_raw": {
                      "label": "局部",
                      "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.textConfig.insideFill",
                    "props": {
                      "placeholder": "内部填充"
                    },
                    "_raw": {
                      "label": "内部填充",
                      "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.textConfig.insideStroke",
                    "props": {
                      "placeholder": "内部描边"
                    },
                    "_raw": {
                      "label": "内部描边",
                      "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.textConfig.outsideFill",
                    "props": {
                      "placeholder": "外部填充"
                    },
                    "_raw": {
                      "label": "外部填充",
                      "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.textConfig.outsideStroke",
                    "props": {
                      "placeholder": "外部描边"
                    },
                    "_raw": {
                      "label": "外部描边",
                      "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_polyline.textConfig.inside",
                    "props": {
                      "placeholder": "内部"
                    },
                    "_raw": {
                      "label": "内部",
                      "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_polyline.during",
                "props": {
                  "placeholder": "期间"
                },
                "_raw": {
                  "label": "期间",
                  "desc": "<p>在动画的每一帧里，用户可以使用 <code class=\"codespan\">during</code> 回调来设定节点的各种属性。</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // 设置 transform 属性值。\n    // transform 属性参见 `TransformProp`。\n    setTransform(key: TransformProp, val: unknown): void;\n    // 获得当前动画帧的 transform 属性值。\n    getTransform(key: TransformProp): unknown;\n    // 设置 shape 属性值。\n    // shape 属性形如：`{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`。\n    setShape(key: string, val: unknown): void;\n    // 获得当前动画帧的 shape 属性值。\n    getShape(key: string): unknown;\n    // 设置 style 属性值。\n    // style 属性形如：`{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`。\n    setStyle(key: string, val: unknown): void;\n    // 获得当前动画帧的 style 属性值。\n    getStyle(key: string): unknown;\n    // 设置 extra 属性值。\n    // extra 属性形如：`{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`。\n    setExtra(key: string, val: unknown): void;\n    // 获得当前动画帧的 extra 属性值。\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>在绝大多数场景下，用户不需要这个 <code class=\"codespan\">during</code> 回调。因为，假如属性被设定到 <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a> 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 <code class=\"codespan\">during</code> 回调来定制他们。</p>\n<p>例如，如果用户使用 <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> 画图形，图形的形状会由 <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a> 来定义，形如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>如果用户指定了 <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> 如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>尽管这些 <code class=\"codespan\">points</code> 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 <code class=\"codespan\">during</code> 回调如下：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // 让 echarts 对 `extra.degree` 进行插值，然后基于\n    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>也参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "额外",
                  "name": "extra"
                },
                "children": [
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_polyline.extra.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">extra</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">extra</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: { ... },\n    // `extra` 下所有属性开启过渡动画。\n    transition: &#39;extra&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "形状",
                  "name": "shape"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.shape.points",
                    "props": {
                      "placeholder": "点数组"
                    },
                    "_raw": {
                      "label": "点数组",
                      "desc": "<p>点列表，用于定义形状，如 <code class=\"codespan\">[[22, 44], [44, 55], [11, 44], ...]</code></p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_polyline.shape.smooth",
                    "props": {
                      "placeholder": "平滑",
                      "types": [
                        "number",
                        "string"
                      ],
                      "defaultType": "number",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "平滑",
                      "desc": "<p>是否平滑曲线。</p>\n<ul>\n<li>如果为 number：表示贝塞尔 (bezier) 差值平滑，smooth 指定了平滑等级，范围 <code class=\"codespan\">[0, 1]</code>。</li>\n<li>如果为 <code class=\"codespan\">&#39;spline&#39;</code>：表示 Catmull-Rom spline 差值平滑。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_polyline.shape.smoothConstraint",
                      "default": false
                    },
                    "props": {
                      "placeholder": "平滑约束"
                    },
                    "_raw": {
                      "label": "平滑约束",
                      "desc": "<p>是否将平滑曲线约束在包围盒中。<code class=\"codespan\">smooth</code> 为 <code class=\"codespan\">number</code>（bezier）时生效。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_polyline.shape.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">shape</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">shape</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { ... },\n    // `shape` 下所有属性开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "样式",
                  "name": "style"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.style.fill",
                    "props": {
                      "placeholder": "填充"
                    },
                    "_raw": {
                      "label": "填充",
                      "desc": "<p>填充色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polyline.style.stroke",
                      "default": "#000"
                    },
                    "props": {
                      "placeholder": "描边"
                    },
                    "_raw": {
                      "label": "描边",
                      "desc": "<p>线条颜色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polyline.style.lineWidth",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "线宽"
                    },
                    "_raw": {
                      "label": "线宽",
                      "desc": "<p>线条宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polyline.style.lineDash",
                      "default": "solid"
                    },
                    "props": {
                      "placeholder": "虚线样式",
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
                      "label": "虚线样式",
                      "desc": "<p>线条样式。可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n<li><code class=\"codespan\">number</code> 或 <code class=\"codespan\">number</code> 数组。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash\" target=\"_blank\">MDN</a>。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polyline.style.lineDashOffset",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "虚线偏移"
                    },
                    "_raw": {
                      "label": "虚线偏移",
                      "desc": "<p>用于设置虚线的偏移量。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polyline.style.lineCap",
                      "default": "butt"
                    },
                    "props": {
                      "placeholder": "线帽样式"
                    },
                    "_raw": {
                      "label": "线帽样式",
                      "desc": "<p>用于指定线段末端的绘制方式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polyline.style.lineJoin",
                      "default": "miter"
                    },
                    "props": {
                      "placeholder": "线段连接"
                    },
                    "_raw": {
                      "label": "线段连接",
                      "desc": "<p>设置线条转折点的样式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polyline.style.miterLimit",
                      "default": 10
                    },
                    "props": {
                      "placeholder": "斜接限制"
                    },
                    "_raw": {
                      "label": "斜接限制",
                      "desc": "<p>设置斜接面限制比例的属性。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polyline.style.shadowBlur",
                    "props": {
                      "placeholder": "阴影模糊"
                    },
                    "_raw": {
                      "label": "阴影模糊",
                      "desc": "<p>阴影宽度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polyline.style.shadowOffsetX",
                    "props": {
                      "placeholder": "阴影X偏移"
                    },
                    "_raw": {
                      "label": "阴影X偏移",
                      "desc": "<p>阴影 X 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_polyline.style.shadowOffsetY",
                    "props": {
                      "placeholder": "阴影Y偏移"
                    },
                    "_raw": {
                      "label": "阴影Y偏移",
                      "desc": "<p>阴影 Y 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "SmartColorInput",
                    "model": "series.custom.renderItem.return_polyline.style.shadowColor",
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
                      "desc": "<p>阴影颜色。</p>\n"
                    }
                  },
                  {
                    "type": "SmartOpacityInput",
                    "model": {
                      "path": "series.custom.renderItem.return_polyline.style.opacity",
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
                      "desc": "<p>不透明度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_polyline.style.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">style</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">style</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: { ... },\n    // `style` 下所有属性开启过渡动画。\n    transition: &#39;style&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polyline.focus",
                  "default": "none"
                },
                "props": {
                  "placeholder": "聚焦"
                },
                "_raw": {
                  "label": "聚焦",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_polyline.blurScope",
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
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_polyline.emphasisDisabled",
                "props": {
                  "placeholder": "禁用高亮"
                },
                "_raw": {
                  "label": "禁用高亮",
                  "desc": "<p>是否关闭高亮状态。</p>\n"
                }
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
                    "model": "series.custom.renderItem.return_polyline.emphasis.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.blur.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_polyline.select.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "返回线段",
              "name": "return_line"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_line.type",
                  "default": "line"
                },
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_line.id",
                "props": {
                  "placeholder": "ID"
                },
                "_raw": {
                  "label": "ID",
                  "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_line.x",
                  "default": 0
                },
                "props": {
                  "placeholder": "x"
                },
                "_raw": {
                  "label": "x",
                  "desc": "<p>元素的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_line.y",
                  "default": 0
                },
                "props": {
                  "placeholder": "y"
                },
                "_raw": {
                  "label": "y",
                  "desc": "<p>元素的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_line.rotation",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>元素的旋转</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_line.scaleX",
                  "default": 1
                },
                "props": {
                  "placeholder": "X轴缩放"
                },
                "_raw": {
                  "label": "X轴缩放",
                  "desc": "<p>元素在 x 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_line.scaleY",
                  "default": 1
                },
                "props": {
                  "placeholder": "Y轴缩放"
                },
                "_raw": {
                  "label": "Y轴缩放",
                  "desc": "<p>元素在 y 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_line.originX",
                  "default": 0
                },
                "props": {
                  "placeholder": "X轴原点"
                },
                "_raw": {
                  "label": "X轴原点",
                  "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_line.originY",
                  "default": 0
                },
                "props": {
                  "placeholder": "Y轴原点"
                },
                "_raw": {
                  "label": "Y轴原点",
                  "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "series.custom.renderItem.return_line.transition",
                "props": {
                  "placeholder": "过渡",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "过渡",
                  "desc": "<p>可以通过<code class=\"codespan\">&#39;all&#39;</code>指定所有属性都开启过渡动画，也可以指定单个或一组属性。</p>\n<p>Transform 相关的属性：<code class=\"codespan\">&#39;x&#39;</code>、 <code class=\"codespan\">&#39;y&#39;</code>、<code class=\"codespan\">&#39;scaleX&#39;</code>、<code class=\"codespan\">&#39;scaleY&#39;</code>、<code class=\"codespan\">&#39;rotation&#39;</code>、<code class=\"codespan\">&#39;originX&#39;</code>、<code class=\"codespan\">&#39;originY&#39;</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>还可以是这三个属性 <code class=\"codespan\">&#39;shape&#39;</code>、<code class=\"codespan\">&#39;style&#39;</code>、<code class=\"codespan\">&#39;extra&#39;</code>。表示这三个属性中所有的子属性都开启过渡动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // 表示 shape 中所有属性都开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>在自定义系列中，当 transition 没有指定时，<code class=\"codespan\">&#39;x&#39;</code> 和 <code class=\"codespan\">&#39;y&#39;</code> 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：<code class=\"codespan\">transition: []</code></p>\n<p><code class=\"codespan\">transition</code> 效果参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_line.enterFrom",
                "props": {
                  "placeholder": "进入起点"
                },
                "_raw": {
                  "label": "进入起点",
                  "desc": "<p>配置图形的入场属性用于入场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // 淡入\n        style: { opacity: 0 },\n        // 从左飞入\n        x: 0\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_line.leaveTo",
                "props": {
                  "placeholder": "离开终点"
                },
                "_raw": {
                  "label": "离开终点",
                  "desc": "<p>配置图形的退场属性用于退场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // 淡出\n        style: { opacity: 0 },\n        // 向右飞出\n        x: 200\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "进入动画",
                  "name": "enterAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_line.enterAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.enterAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_line.enterAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "更新动画",
                  "name": "updateAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_line.updateAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.updateAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_line.updateAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "离开动画",
                  "name": "leaveAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_line.leaveAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.leaveAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_line.leaveAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "关键帧动画",
                  "name": "keyframeAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_line.keyframeAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.keyframeAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_line.keyframeAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_line.keyframeAnimation.loop",
                    "props": {
                      "placeholder": "循环"
                    },
                    "_raw": {
                      "label": "循环",
                      "desc": "<p>是否循环播放动画。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.keyframeAnimation.keyframes",
                    "props": {
                      "placeholder": "关键帧"
                    },
                    "_raw": {
                      "label": "关键帧",
                      "desc": "<p>动画的关键帧。数组中每一项为一个关键帧，格式如下：</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // 关键帧位置。0 为第一帧，1 为最后一帧\n    // 关键帧时间为 percent * duration + delay\n    percent: number\n    // 上一个关键帧到这个关键帧运行时的缓动函数。可选\n    easing?: number\n\n    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_line.morph",
                "props": {
                  "placeholder": "形变"
                },
                "_raw": {
                  "label": "形变",
                  "desc": "<p>是否开启形变动画。</p>\n<p>开启 <a href=\"#series-custom.universalTransition\">universalTransition</a> 后如果前后两次更新图形类型不一样，比如从<code class=\"codespan\">rect</code>变为了<code class=\"codespan\">circle</code>，会通过形变动画过渡。如果想要关闭可以设置该属性为<code class=\"codespan\">false</code>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "series.custom.renderItem.return_line.z2",
                "props": {
                  "placeholder": "Z轴层级2"
                },
                "_raw": {
                  "label": "Z轴层级2",
                  "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_line.name",
                "props": {
                  "placeholder": "名称"
                },
                "_raw": {
                  "label": "名称",
                  "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_line.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_line.info",
                "props": {
                  "placeholder": "信息"
                },
                "_raw": {
                  "label": "信息",
                  "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_line.silent",
                  "default": false
                },
                "props": {
                  "placeholder": "静默"
                },
                "_raw": {
                  "label": "静默",
                  "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_line.invisible",
                  "default": false
                },
                "props": {
                  "placeholder": "不可见"
                },
                "_raw": {
                  "label": "不可见",
                  "desc": "<p>节点是否可见。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_line.ignore",
                  "default": false
                },
                "props": {
                  "placeholder": "忽略"
                },
                "_raw": {
                  "label": "忽略",
                  "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_line.textContent",
                "props": {
                  "placeholder": "文本内容"
                },
                "_raw": {
                  "label": "文本内容",
                  "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#series-custom.renderItem.return_text\" target=\"_blank\">text</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "文本配置",
                  "name": "textConfig"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.textConfig.position",
                      "default": "inside"
                    },
                    "props": {
                      "placeholder": "位置"
                    },
                    "_raw": {
                      "label": "位置",
                      "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_line.textConfig.rotation",
                    "props": {
                      "placeholder": "旋转"
                    },
                    "_raw": {
                      "label": "旋转",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.textConfig.layoutRect",
                    "props": {
                      "placeholder": "布局矩形"
                    },
                    "_raw": {
                      "label": "布局矩形",
                      "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.textConfig.offset",
                    "props": {
                      "placeholder": "偏移"
                    },
                    "_raw": {
                      "label": "偏移",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.textConfig.origin",
                    "props": {
                      "placeholder": "原点"
                    },
                    "_raw": {
                      "label": "原点",
                      "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.textConfig.distance",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "距离"
                    },
                    "_raw": {
                      "label": "距离",
                      "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_line.textConfig.local",
                      "default": false
                    },
                    "props": {
                      "placeholder": "局部"
                    },
                    "_raw": {
                      "label": "局部",
                      "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.textConfig.insideFill",
                    "props": {
                      "placeholder": "内部填充"
                    },
                    "_raw": {
                      "label": "内部填充",
                      "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.textConfig.insideStroke",
                    "props": {
                      "placeholder": "内部描边"
                    },
                    "_raw": {
                      "label": "内部描边",
                      "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.textConfig.outsideFill",
                    "props": {
                      "placeholder": "外部填充"
                    },
                    "_raw": {
                      "label": "外部填充",
                      "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.textConfig.outsideStroke",
                    "props": {
                      "placeholder": "外部描边"
                    },
                    "_raw": {
                      "label": "外部描边",
                      "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_line.textConfig.inside",
                    "props": {
                      "placeholder": "内部"
                    },
                    "_raw": {
                      "label": "内部",
                      "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_line.during",
                "props": {
                  "placeholder": "期间"
                },
                "_raw": {
                  "label": "期间",
                  "desc": "<p>在动画的每一帧里，用户可以使用 <code class=\"codespan\">during</code> 回调来设定节点的各种属性。</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // 设置 transform 属性值。\n    // transform 属性参见 `TransformProp`。\n    setTransform(key: TransformProp, val: unknown): void;\n    // 获得当前动画帧的 transform 属性值。\n    getTransform(key: TransformProp): unknown;\n    // 设置 shape 属性值。\n    // shape 属性形如：`{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`。\n    setShape(key: string, val: unknown): void;\n    // 获得当前动画帧的 shape 属性值。\n    getShape(key: string): unknown;\n    // 设置 style 属性值。\n    // style 属性形如：`{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`。\n    setStyle(key: string, val: unknown): void;\n    // 获得当前动画帧的 style 属性值。\n    getStyle(key: string): unknown;\n    // 设置 extra 属性值。\n    // extra 属性形如：`{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`。\n    setExtra(key: string, val: unknown): void;\n    // 获得当前动画帧的 extra 属性值。\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>在绝大多数场景下，用户不需要这个 <code class=\"codespan\">during</code> 回调。因为，假如属性被设定到 <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a> 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 <code class=\"codespan\">during</code> 回调来定制他们。</p>\n<p>例如，如果用户使用 <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> 画图形，图形的形状会由 <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a> 来定义，形如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>如果用户指定了 <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> 如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>尽管这些 <code class=\"codespan\">points</code> 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 <code class=\"codespan\">during</code> 回调如下：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // 让 echarts 对 `extra.degree` 进行插值，然后基于\n    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>也参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "额外",
                  "name": "extra"
                },
                "children": [
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_line.extra.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">extra</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">extra</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: { ... },\n    // `extra` 下所有属性开启过渡动画。\n    transition: &#39;extra&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "形状",
                  "name": "shape"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.shape.x1",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "起点x"
                    },
                    "_raw": {
                      "label": "起点x",
                      "desc": "<p>开始点的 x 值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.shape.y1",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "起点y"
                    },
                    "_raw": {
                      "label": "起点y",
                      "desc": "<p>开始点的 y 值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.shape.x2",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "终点x"
                    },
                    "_raw": {
                      "label": "终点x",
                      "desc": "<p>结束点的 x 值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.shape.y2",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "终点y"
                    },
                    "_raw": {
                      "label": "终点y",
                      "desc": "<p>结束点的 y 值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.shape.percent",
                      "default": 1
                    },
                    "props": {
                      "placeholder": "百分比"
                    },
                    "_raw": {
                      "label": "百分比",
                      "desc": "<p>线画到百分之多少就不画了。值的范围：[0, 1]。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_line.shape.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">shape</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">shape</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { ... },\n    // `shape` 下所有属性开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "样式",
                  "name": "style"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.style.fill",
                    "props": {
                      "placeholder": "填充"
                    },
                    "_raw": {
                      "label": "填充",
                      "desc": "<p>填充色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.style.stroke",
                      "default": "#000"
                    },
                    "props": {
                      "placeholder": "描边"
                    },
                    "_raw": {
                      "label": "描边",
                      "desc": "<p>线条颜色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.style.lineWidth",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "线宽"
                    },
                    "_raw": {
                      "label": "线宽",
                      "desc": "<p>线条宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.style.lineDash",
                      "default": "solid"
                    },
                    "props": {
                      "placeholder": "虚线样式",
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
                      "label": "虚线样式",
                      "desc": "<p>线条样式。可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n<li><code class=\"codespan\">number</code> 或 <code class=\"codespan\">number</code> 数组。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash\" target=\"_blank\">MDN</a>。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.style.lineDashOffset",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "虚线偏移"
                    },
                    "_raw": {
                      "label": "虚线偏移",
                      "desc": "<p>用于设置虚线的偏移量。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.style.lineCap",
                      "default": "butt"
                    },
                    "props": {
                      "placeholder": "线帽样式"
                    },
                    "_raw": {
                      "label": "线帽样式",
                      "desc": "<p>用于指定线段末端的绘制方式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.style.lineJoin",
                      "default": "miter"
                    },
                    "props": {
                      "placeholder": "线段连接"
                    },
                    "_raw": {
                      "label": "线段连接",
                      "desc": "<p>设置线条转折点的样式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.style.miterLimit",
                      "default": 10
                    },
                    "props": {
                      "placeholder": "斜接限制"
                    },
                    "_raw": {
                      "label": "斜接限制",
                      "desc": "<p>设置斜接面限制比例的属性。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_line.style.shadowBlur",
                    "props": {
                      "placeholder": "阴影模糊"
                    },
                    "_raw": {
                      "label": "阴影模糊",
                      "desc": "<p>阴影宽度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_line.style.shadowOffsetX",
                    "props": {
                      "placeholder": "阴影X偏移"
                    },
                    "_raw": {
                      "label": "阴影X偏移",
                      "desc": "<p>阴影 X 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_line.style.shadowOffsetY",
                    "props": {
                      "placeholder": "阴影Y偏移"
                    },
                    "_raw": {
                      "label": "阴影Y偏移",
                      "desc": "<p>阴影 Y 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "SmartColorInput",
                    "model": "series.custom.renderItem.return_line.style.shadowColor",
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
                      "desc": "<p>阴影颜色。</p>\n"
                    }
                  },
                  {
                    "type": "SmartOpacityInput",
                    "model": {
                      "path": "series.custom.renderItem.return_line.style.opacity",
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
                      "desc": "<p>不透明度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_line.style.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">style</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">style</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: { ... },\n    // `style` 下所有属性开启过渡动画。\n    transition: &#39;style&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_line.focus",
                  "default": "none"
                },
                "props": {
                  "placeholder": "聚焦"
                },
                "_raw": {
                  "label": "聚焦",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_line.blurScope",
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
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_line.emphasisDisabled",
                "props": {
                  "placeholder": "禁用高亮"
                },
                "_raw": {
                  "label": "禁用高亮",
                  "desc": "<p>是否关闭高亮状态。</p>\n"
                }
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
                    "model": "series.custom.renderItem.return_line.emphasis.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.blur.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_line.select.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ElCollapseItem",
            "props": {
              "title": "返回贝塞尔曲线",
              "name": "return_bezierCurve"
            },
            "children": [
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_bezierCurve.type",
                  "default": "bezierCurve"
                },
                "props": {
                  "placeholder": "类型"
                },
                "_raw": {
                  "label": "类型",
                  "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_bezierCurve.id",
                "props": {
                  "placeholder": "ID"
                },
                "_raw": {
                  "label": "ID",
                  "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_bezierCurve.x",
                  "default": 0
                },
                "props": {
                  "placeholder": "x"
                },
                "_raw": {
                  "label": "x",
                  "desc": "<p>元素的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_bezierCurve.y",
                  "default": 0
                },
                "props": {
                  "placeholder": "y"
                },
                "_raw": {
                  "label": "y",
                  "desc": "<p>元素的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_bezierCurve.rotation",
                  "default": 0
                },
                "props": {
                  "placeholder": "旋转"
                },
                "_raw": {
                  "label": "旋转",
                  "desc": "<p>元素的旋转</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_bezierCurve.scaleX",
                  "default": 1
                },
                "props": {
                  "placeholder": "X轴缩放"
                },
                "_raw": {
                  "label": "X轴缩放",
                  "desc": "<p>元素在 x 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_bezierCurve.scaleY",
                  "default": 1
                },
                "props": {
                  "placeholder": "Y轴缩放"
                },
                "_raw": {
                  "label": "Y轴缩放",
                  "desc": "<p>元素在 y 方向上的缩放。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_bezierCurve.originX",
                  "default": 0
                },
                "props": {
                  "placeholder": "X轴原点"
                },
                "_raw": {
                  "label": "X轴原点",
                  "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_bezierCurve.originY",
                  "default": 0
                },
                "props": {
                  "placeholder": "Y轴原点"
                },
                "_raw": {
                  "label": "Y轴原点",
                  "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
                }
              },
              {
                "type": "SmartUnionInput",
                "model": "series.custom.renderItem.return_bezierCurve.transition",
                "props": {
                  "placeholder": "过渡",
                  "types": [
                    "string",
                    "array"
                  ],
                  "defaultType": "string",
                  "specialKeywords": []
                },
                "_raw": {
                  "label": "过渡",
                  "desc": "<p>可以通过<code class=\"codespan\">&#39;all&#39;</code>指定所有属性都开启过渡动画，也可以指定单个或一组属性。</p>\n<p>Transform 相关的属性：<code class=\"codespan\">&#39;x&#39;</code>、 <code class=\"codespan\">&#39;y&#39;</code>、<code class=\"codespan\">&#39;scaleX&#39;</code>、<code class=\"codespan\">&#39;scaleY&#39;</code>、<code class=\"codespan\">&#39;rotation&#39;</code>、<code class=\"codespan\">&#39;originX&#39;</code>、<code class=\"codespan\">&#39;originY&#39;</code>。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>还可以是这三个属性 <code class=\"codespan\">&#39;shape&#39;</code>、<code class=\"codespan\">&#39;style&#39;</code>、<code class=\"codespan\">&#39;extra&#39;</code>。表示这三个属性中所有的子属性都开启过渡动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // 表示 shape 中所有属性都开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>在自定义系列中，当 transition 没有指定时，<code class=\"codespan\">&#39;x&#39;</code> 和 <code class=\"codespan\">&#39;y&#39;</code> 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：<code class=\"codespan\">transition: []</code></p>\n<p><code class=\"codespan\">transition</code> 效果参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_bezierCurve.enterFrom",
                "props": {
                  "placeholder": "进入起点"
                },
                "_raw": {
                  "label": "进入起点",
                  "desc": "<p>配置图形的入场属性用于入场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // 淡入\n        style: { opacity: 0 },\n        // 从左飞入\n        x: 0\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_bezierCurve.leaveTo",
                "props": {
                  "placeholder": "离开终点"
                },
                "_raw": {
                  "label": "离开终点",
                  "desc": "<p>配置图形的退场属性用于退场动画。例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // 淡出\n        style: { opacity: 0 },\n        // 向右飞出\n        x: 200\n    }\n}\n</code></pre>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "进入动画",
                  "name": "enterAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_bezierCurve.enterAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.enterAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_bezierCurve.enterAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "更新动画",
                  "name": "updateAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_bezierCurve.updateAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.updateAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_bezierCurve.updateAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "离开动画",
                  "name": "leaveAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_bezierCurve.leaveAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.leaveAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_bezierCurve.leaveAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "关键帧动画",
                  "name": "keyframeAnimation"
                },
                "children": [
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_bezierCurve.keyframeAnimation.duration",
                    "props": {
                      "placeholder": "持续时间"
                    },
                    "_raw": {
                      "label": "持续时间",
                      "desc": "<p>动画时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.keyframeAnimation.easing",
                    "props": {
                      "placeholder": "缓动函数"
                    },
                    "_raw": {
                      "label": "缓动函数",
                      "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_bezierCurve.keyframeAnimation.delay",
                    "props": {
                      "placeholder": "延迟"
                    },
                    "_raw": {
                      "label": "延迟",
                      "desc": "<p>动画延迟时长，单位 ms</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_bezierCurve.keyframeAnimation.loop",
                    "props": {
                      "placeholder": "循环"
                    },
                    "_raw": {
                      "label": "循环",
                      "desc": "<p>是否循环播放动画。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.keyframeAnimation.keyframes",
                    "props": {
                      "placeholder": "关键帧"
                    },
                    "_raw": {
                      "label": "关键帧",
                      "desc": "<p>动画的关键帧。数组中每一项为一个关键帧，格式如下：</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // 关键帧位置。0 为第一帧，1 为最后一帧\n    // 关键帧时间为 percent * duration + delay\n    percent: number\n    // 上一个关键帧到这个关键帧运行时的缓动函数。可选\n    easing?: number\n\n    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_bezierCurve.morph",
                "props": {
                  "placeholder": "形变"
                },
                "_raw": {
                  "label": "形变",
                  "desc": "<p>是否开启形变动画。</p>\n<p>开启 <a href=\"#series-custom.universalTransition\">universalTransition</a> 后如果前后两次更新图形类型不一样，比如从<code class=\"codespan\">rect</code>变为了<code class=\"codespan\">circle</code>，会通过形变动画过渡。如果想要关闭可以设置该属性为<code class=\"codespan\">false</code>。</p>\n"
                }
              },
              {
                "type": "ElInputNumber",
                "model": "series.custom.renderItem.return_bezierCurve.z2",
                "props": {
                  "placeholder": "Z轴层级2"
                },
                "_raw": {
                  "label": "Z轴层级2",
                  "desc": "<p>用于决定图形元素的覆盖关系。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_bezierCurve.name",
                "props": {
                  "placeholder": "名称"
                },
                "_raw": {
                  "label": "名称",
                  "desc": "<p>参见 <a href=\"#series-custom.renderItem.return_bezierCurve.diffChildrenByName\">diffChildrenByName</a>。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_bezierCurve.info",
                "props": {
                  "placeholder": "信息"
                },
                "_raw": {
                  "label": "信息",
                  "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_bezierCurve.silent",
                  "default": false
                },
                "props": {
                  "placeholder": "静默"
                },
                "_raw": {
                  "label": "静默",
                  "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_bezierCurve.invisible",
                  "default": false
                },
                "props": {
                  "placeholder": "不可见"
                },
                "_raw": {
                  "label": "不可见",
                  "desc": "<p>节点是否可见。</p>\n"
                }
              },
              {
                "type": "ElSwitch",
                "model": {
                  "path": "series.custom.renderItem.return_bezierCurve.ignore",
                  "default": false
                },
                "props": {
                  "placeholder": "忽略"
                },
                "_raw": {
                  "label": "忽略",
                  "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
                }
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_bezierCurve.textContent",
                "props": {
                  "placeholder": "文本内容"
                },
                "_raw": {
                  "label": "文本内容",
                  "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#series-custom.renderItem.return_text\" target=\"_blank\">text</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "文本配置",
                  "name": "textConfig"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.textConfig.position",
                      "default": "inside"
                    },
                    "props": {
                      "placeholder": "位置"
                    },
                    "_raw": {
                      "label": "位置",
                      "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_bezierCurve.textConfig.rotation",
                    "props": {
                      "placeholder": "旋转"
                    },
                    "_raw": {
                      "label": "旋转",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.textConfig.layoutRect",
                    "props": {
                      "placeholder": "布局矩形"
                    },
                    "_raw": {
                      "label": "布局矩形",
                      "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.textConfig.offset",
                    "props": {
                      "placeholder": "偏移"
                    },
                    "_raw": {
                      "label": "偏移",
                      "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.textConfig.origin",
                    "props": {
                      "placeholder": "原点"
                    },
                    "_raw": {
                      "label": "原点",
                      "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.textConfig.distance",
                      "default": 5
                    },
                    "props": {
                      "placeholder": "距离"
                    },
                    "_raw": {
                      "label": "距离",
                      "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.textConfig.local",
                      "default": false
                    },
                    "props": {
                      "placeholder": "局部"
                    },
                    "_raw": {
                      "label": "局部",
                      "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.textConfig.insideFill",
                    "props": {
                      "placeholder": "内部填充"
                    },
                    "_raw": {
                      "label": "内部填充",
                      "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.textConfig.insideStroke",
                    "props": {
                      "placeholder": "内部描边"
                    },
                    "_raw": {
                      "label": "内部描边",
                      "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.textConfig.outsideFill",
                    "props": {
                      "placeholder": "外部填充"
                    },
                    "_raw": {
                      "label": "外部填充",
                      "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.textConfig.outsideStroke",
                    "props": {
                      "placeholder": "外部描边"
                    },
                    "_raw": {
                      "label": "外部描边",
                      "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElSwitch",
                    "model": "series.custom.renderItem.return_bezierCurve.textConfig.inside",
                    "props": {
                      "placeholder": "内部"
                    },
                    "_raw": {
                      "label": "内部",
                      "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": "series.custom.renderItem.return_bezierCurve.during",
                "props": {
                  "placeholder": "期间"
                },
                "_raw": {
                  "label": "期间",
                  "desc": "<p>在动画的每一帧里，用户可以使用 <code class=\"codespan\">during</code> 回调来设定节点的各种属性。</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // 设置 transform 属性值。\n    // transform 属性参见 `TransformProp`。\n    setTransform(key: TransformProp, val: unknown): void;\n    // 获得当前动画帧的 transform 属性值。\n    getTransform(key: TransformProp): unknown;\n    // 设置 shape 属性值。\n    // shape 属性形如：`{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`。\n    setShape(key: string, val: unknown): void;\n    // 获得当前动画帧的 shape 属性值。\n    getShape(key: string): unknown;\n    // 设置 style 属性值。\n    // style 属性形如：`{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`。\n    setStyle(key: string, val: unknown): void;\n    // 获得当前动画帧的 style 属性值。\n    getStyle(key: string): unknown;\n    // 设置 extra 属性值。\n    // extra 属性形如：`{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`。\n    setExtra(key: string, val: unknown): void;\n    // 获得当前动画帧的 extra 属性值。\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>在绝大多数场景下，用户不需要这个 <code class=\"codespan\">during</code> 回调。因为，假如属性被设定到 <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a> 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 <code class=\"codespan\">during</code> 回调来定制他们。</p>\n<p>例如，如果用户使用 <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> 画图形，图形的形状会由 <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a> 来定义，形如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>如果用户指定了 <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> 如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>尽管这些 <code class=\"codespan\">points</code> 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 <code class=\"codespan\">during</code> 回调如下：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // 让 echarts 对 `extra.degree` 进行插值，然后基于\n    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>也参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
                }
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "额外",
                  "name": "extra"
                },
                "children": [
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_bezierCurve.extra.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">extra</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">extra</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    extra: { ... },\n    // `extra` 下所有属性开启过渡动画。\n    transition: &#39;extra&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "形状",
                  "name": "shape"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.shape.x1",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "起点x"
                    },
                    "_raw": {
                      "label": "起点x",
                      "desc": "<p>开始点的 x 值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.shape.y1",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "起点y"
                    },
                    "_raw": {
                      "label": "起点y",
                      "desc": "<p>开始点的 y 值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.shape.x2",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "终点x"
                    },
                    "_raw": {
                      "label": "终点x",
                      "desc": "<p>结束点的 x 值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.shape.y2",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "终点y"
                    },
                    "_raw": {
                      "label": "终点y",
                      "desc": "<p>结束点的 y 值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.shape.cpx1",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "控制点1x"
                    },
                    "_raw": {
                      "label": "控制点1x",
                      "desc": "<p>控制点 x 值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.shape.cpy1",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "控制点1y"
                    },
                    "_raw": {
                      "label": "控制点1y",
                      "desc": "<p>控制点 y 值。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_bezierCurve.shape.cpx2",
                    "props": {
                      "placeholder": "控制点2x"
                    },
                    "_raw": {
                      "label": "控制点2x",
                      "desc": "<p>第二个控制点 x 值。如果设置则开启三阶贝塞尔曲线。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_bezierCurve.shape.cpy2",
                    "props": {
                      "placeholder": "控制点2y"
                    },
                    "_raw": {
                      "label": "控制点2y",
                      "desc": "<p>第二个控制点 y 值。如果设置则开启三阶贝塞尔曲线。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.shape.percent",
                      "default": 1
                    },
                    "props": {
                      "placeholder": "百分比"
                    },
                    "_raw": {
                      "label": "百分比",
                      "desc": "<p>画到百分之多少就不画了。值的范围：[0, 1]。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_bezierCurve.shape.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">shape</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">shape</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { ... },\n    // `shape` 下所有属性开启过渡动画。\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElCollapseItem",
                "props": {
                  "title": "样式",
                  "name": "style"
                },
                "children": [
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.style.fill",
                      "default": "#000"
                    },
                    "props": {
                      "placeholder": "填充"
                    },
                    "_raw": {
                      "label": "填充",
                      "desc": "<p>填充色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.style.stroke",
                    "props": {
                      "placeholder": "描边"
                    },
                    "_raw": {
                      "label": "描边",
                      "desc": "<p>线条颜色。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.style.lineWidth",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "线宽"
                    },
                    "_raw": {
                      "label": "线宽",
                      "desc": "<p>线条宽度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.style.lineDash",
                      "default": "solid"
                    },
                    "props": {
                      "placeholder": "虚线样式",
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
                      "label": "虚线样式",
                      "desc": "<p>线条样式。可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n<li><code class=\"codespan\">number</code> 或 <code class=\"codespan\">number</code> 数组。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash\" target=\"_blank\">MDN</a>。</li>\n</ul>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.style.lineDashOffset",
                      "default": 0
                    },
                    "props": {
                      "placeholder": "虚线偏移"
                    },
                    "_raw": {
                      "label": "虚线偏移",
                      "desc": "<p>用于设置虚线的偏移量。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.style.lineCap",
                      "default": "butt"
                    },
                    "props": {
                      "placeholder": "线帽样式"
                    },
                    "_raw": {
                      "label": "线帽样式",
                      "desc": "<p>用于指定线段末端的绘制方式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.style.lineJoin",
                      "default": "miter"
                    },
                    "props": {
                      "placeholder": "线段连接"
                    },
                    "_raw": {
                      "label": "线段连接",
                      "desc": "<p>设置线条转折点的样式。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.style.miterLimit",
                      "default": 10
                    },
                    "props": {
                      "placeholder": "斜接限制"
                    },
                    "_raw": {
                      "label": "斜接限制",
                      "desc": "<p>设置斜接面限制比例的属性。详见 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">MDN</a>。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_bezierCurve.style.shadowBlur",
                    "props": {
                      "placeholder": "阴影模糊"
                    },
                    "_raw": {
                      "label": "阴影模糊",
                      "desc": "<p>阴影宽度。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_bezierCurve.style.shadowOffsetX",
                    "props": {
                      "placeholder": "阴影X偏移"
                    },
                    "_raw": {
                      "label": "阴影X偏移",
                      "desc": "<p>阴影 X 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "ElInputNumber",
                    "model": "series.custom.renderItem.return_bezierCurve.style.shadowOffsetY",
                    "props": {
                      "placeholder": "阴影Y偏移"
                    },
                    "_raw": {
                      "label": "阴影Y偏移",
                      "desc": "<p>阴影 Y 方向偏移。</p>\n"
                    }
                  },
                  {
                    "type": "SmartColorInput",
                    "model": "series.custom.renderItem.return_bezierCurve.style.shadowColor",
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
                      "desc": "<p>阴影颜色。</p>\n"
                    }
                  },
                  {
                    "type": "SmartOpacityInput",
                    "model": {
                      "path": "series.custom.renderItem.return_bezierCurve.style.opacity",
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
                      "desc": "<p>不透明度。</p>\n"
                    }
                  },
                  {
                    "type": "SmartUnionInput",
                    "model": "series.custom.renderItem.return_bezierCurve.style.transition",
                    "props": {
                      "placeholder": "过渡",
                      "types": [
                        "string",
                        "array"
                      ],
                      "defaultType": "string",
                      "specialKeywords": []
                    },
                    "_raw": {
                      "label": "过渡",
                      "desc": "<p>可以是一个属性名，或者一组属性名。\n被指定的属性，在其指发生变化时，会开启过渡动画。\n只可以指定本 <code class=\"codespan\">style</code> 下的属性。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        // ...\n        // 这两个属性会开启过渡动画。\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>我们这样可以指定 <code class=\"codespan\">style</code> 下所有属性开启过渡动画：</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: { ... },\n    // `style` 下所有属性开启过渡动画。\n    transition: &#39;style&#39;,\n}\n</code></pre>\n"
                    }
                  }
                ]
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_bezierCurve.focus",
                  "default": "none"
                },
                "props": {
                  "placeholder": "聚焦"
                },
                "_raw": {
                  "label": "聚焦",
                  "desc": "<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v5.0.0</code> 开始支持\n\n</div>\n\n\n\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
                }
              },
              {
                "type": "ElInput",
                "model": {
                  "path": "series.custom.renderItem.return_bezierCurve.blurScope",
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
                "type": "ElSwitch",
                "model": "series.custom.renderItem.return_bezierCurve.emphasisDisabled",
                "props": {
                  "placeholder": "禁用高亮"
                },
                "_raw": {
                  "label": "禁用高亮",
                  "desc": "<p>是否关闭高亮状态。</p>\n"
                }
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
                    "model": "series.custom.renderItem.return_bezierCurve.emphasis.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.blur.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
                    }
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
                    "type": "ElInput",
                    "model": "series.custom.renderItem.return_bezierCurve.select.style",
                    "props": {
                      "placeholder": "样式"
                    },
                    "_raw": {
                      "label": "样式",
                      "desc": "<p>结构同 <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>。</p>\n"
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
          "title": "图元样式",
          "name": "itemStyle"
        },
        "children": [
          {
            "type": "SmartColorInput",
            "model": {
              "path": "series.custom.itemStyle.color",
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
              "path": "series.custom.itemStyle.borderColor",
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
              "path": "series.custom.itemStyle.borderWidth",
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
              "path": "series.custom.itemStyle.borderType",
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
              "path": "series.custom.itemStyle.borderDashOffset",
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
              "path": "series.custom.itemStyle.borderCap",
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
              "path": "series.custom.itemStyle.borderJoin",
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
              "path": "series.custom.itemStyle.borderMiterLimit",
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
            "model": "series.custom.itemStyle.shadowBlur",
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
            "model": "series.custom.itemStyle.shadowColor",
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
              "path": "series.custom.itemStyle.shadowOffsetX",
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
              "path": "series.custom.itemStyle.shadowOffsetY",
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
              "path": "series.custom.itemStyle.opacity",
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
                  "path": "series.custom.itemStyle.decal.symbol",
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
                  "path": "series.custom.itemStyle.decal.symbolSize",
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
                  "path": "series.custom.itemStyle.decal.symbolKeepAspect",
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
                  "path": "series.custom.itemStyle.decal.color",
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
                "model": "series.custom.itemStyle.decal.backgroundColor",
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
                  "path": "series.custom.itemStyle.decal.dashArrayX",
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
                  "path": "series.custom.itemStyle.decal.dashArrayY",
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
                  "path": "series.custom.itemStyle.decal.rotation",
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
                  "path": "series.custom.itemStyle.decal.maxTileWidth",
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
                  "path": "series.custom.itemStyle.decal.maxTileHeight",
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
            "model": "series.custom.labelLine.show",
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
            "model": "series.custom.labelLine.showAbove",
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
            "model": "series.custom.labelLine.length2",
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
              "path": "series.custom.labelLine.smooth",
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
            "model": "series.custom.labelLine.minTurnAngle",
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
                  "path": "series.custom.labelLine.lineStyle.color",
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
                  "path": "series.custom.labelLine.lineStyle.width",
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
                  "path": "series.custom.labelLine.lineStyle.type",
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
                  "path": "series.custom.labelLine.lineStyle.dashOffset",
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
                  "path": "series.custom.labelLine.lineStyle.cap",
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
                  "path": "series.custom.labelLine.lineStyle.join",
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
                  "path": "series.custom.labelLine.lineStyle.miterLimit",
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
                "model": "series.custom.labelLine.lineStyle.shadowBlur",
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
                "model": "series.custom.labelLine.lineStyle.shadowColor",
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
                  "path": "series.custom.labelLine.lineStyle.shadowOffsetX",
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
                  "path": "series.custom.labelLine.lineStyle.shadowOffsetY",
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
                  "path": "series.custom.labelLine.lineStyle.opacity",
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
            "model": "series.custom.labelLayout.hideOverlap",
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
            "model": "series.custom.labelLayout.moveOverlap",
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
            "model": "series.custom.labelLayout.x",
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
            "model": "series.custom.labelLayout.y",
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
            "model": "series.custom.labelLayout.dx",
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
            "model": "series.custom.labelLayout.dy",
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
            "model": "series.custom.labelLayout.rotate",
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
            "model": "series.custom.labelLayout.width",
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
            "model": "series.custom.labelLayout.height",
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
            "model": "series.custom.labelLayout.align",
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
            "model": "series.custom.labelLayout.verticalAlign",
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
            "model": "series.custom.labelLayout.fontSize",
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
            "model": "series.custom.labelLayout.draggable",
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
            "model": "series.custom.labelLayout.labelLinePoints",
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
        "type": "SmartUnionInput",
        "model": {
          "path": "series.custom.selectedMode",
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
        "model": "series.custom.dimensions",
        "props": {
          "placeholder": "维度"
        },
        "_raw": {
          "label": "维度",
          "desc": "<p>使用 dimensions 定义 <code class=\"codespan\">series.data</code> 或者 <code class=\"codespan\">dataset.source</code> 的每个维度的信息。</p>\n<p>注意：如果使用了 <a href=\"#dataset\">dataset</a>，那么可以在 <a href=\"#dataset.dimensions\">dataset.dimensions</a> 中定义 dimension ，或者在 <a href=\"#dataset.source\">dataset.source</a> 的第一行/列中给出 dimension 名称。于是就不用在这里指定 dimension。但如果在这里指定了 <code class=\"codespan\">dimensions</code>，那么优先使用这里的。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">option = {\n    dataset: {\n        source: [\n            // 有了上面 dimensions 定义后，下面这五个维度的名称分别为：\n            // &#39;date&#39;, &#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;\n            [12, 44, 55, 66, 2],\n            [23, 6, 16, 23, 1],\n            ...\n        ]\n    },\n    series: {\n        type: &#39;xxx&#39;,\n        // 定义了每个维度的名称。这个名称会被显示到默认的 tooltip 中。\n        dimensions: [&#39;date&#39;, &#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;]\n    }\n}\n</code></pre>\n<pre><code class=\"lang-ts\">series: {\n    type: &#39;xxx&#39;,\n    dimensions: [\n        null,                // 如果此维度不想给出定义，则使用 null 即可\n        {type: &#39;ordinal&#39;},   // 只定义此维度的类型。\n                             // &#39;ordinal&#39; 表示离散型，一般文本使用这种类型。\n                             // 如果类型没有被定义，会自动猜测类型。\n        {name: &#39;good&#39;, type: &#39;number&#39;},\n        &#39;bad&#39;                // 等同于 {name: &#39;bad&#39;}\n    ]\n}\n</code></pre>\n<p><code class=\"codespan\">dimensions</code> 数组中的每一项可以是：</p>\n<ul>\n<li><code class=\"codespan\">string</code>，如 <code class=\"codespan\">&#39;someName&#39;</code>，等同于 <code class=\"codespan\">{name: &#39;someName&#39;}</code></li>\n<li><code class=\"codespan\">Object</code>，属性可以有：<ul>\n<li>name: <code class=\"codespan\">string</code>。</li>\n<li>type: <code class=\"codespan\">string</code>，支持<ul>\n<li><code class=\"codespan\">number</code>，默认，表示普通数据。</li>\n<li><code class=\"codespan\">ordinal</code>，对于类目、文本这些 string 类型的数据，如果需要能在数轴上使用，须是 &#39;ordinal&#39; 类型。ECharts 默认会自动判断这个类型。但是自动判断也是不可能很完备的，所以使用者也可以手动强制指定。</li>\n<li><code class=\"codespan\">float</code>，即 <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array\" target=\"_blank\">Float64Array</a>。</li>\n<li><code class=\"codespan\">int</code>，即 <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array\" target=\"_blank\">Int32Array</a>。</li>\n<li><code class=\"codespan\">time</code>，表示时间类型。设置成 &#39;time&#39; 则能支持自动解析数据成时间戳（timestamp），比如该维度的数据是 &#39;2017-05-10&#39;，会自动被解析。时间类型的支持参见 <a href=\"#series.data\">data</a>。</li>\n</ul>\n</li>\n<li>displayName: 一般用于 tooltip 中维度名的展示。<code class=\"codespan\">string</code> 如果没有指定，默认使用 name 来展示。</li>\n</ul>\n</li>\n</ul>\n<p>值得一提的是，当定义了 <code class=\"codespan\">dimensions</code> 后，默认 <code class=\"codespan\">tooltip</code> 中对个维度的显示，会变为『竖排』，从而方便显示每个维度的名称。如果没有定义 <code class=\"codespan\">dimensions</code>，则默认 <code class=\"codespan\">tooltip</code> 会横排显示，且只显示数值没有维度名称可显示。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": "series.custom.encode",
        "props": {
          "placeholder": "编码"
        },
        "_raw": {
          "label": "编码",
          "desc": "<p>可以定义 <code class=\"codespan\">data</code> 的哪个维度被编码成什么。比如：</p>\n<pre><code class=\"lang-ts\">option = {\n    dataset: {\n        source: [\n            // 每一列称为一个『维度』。\n            // 这里分别是维度 0、1、2、3、4。\n            [12, 44, 55, 66, 2],\n            [23, 6, 16, 23, 1],\n            ...\n        ]\n    },\n    series: {\n        type: &#39;xxx&#39;,\n        encode: {\n            x: [3, 1, 5],      // 表示维度 3、1、5 映射到 x 轴。\n            y: 2,              // 表示维度 2 映射到 y 轴。\n            tooltip: [3, 2, 4] // 表示维度 3、2、4 会在 tooltip 中显示。\n        }\n    }\n}\n</code></pre>\n<p>当使用 <a href=\"#series.dimensions\">dimensions</a> 给维度定义名称后，<code class=\"codespan\">encode</code> 中可直接引用名称，例如：</p>\n<pre><code class=\"lang-ts\">series: {\n    type: &#39;xxx&#39;,\n    dimensions: [&#39;date&#39;, &#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;],\n    encode: {\n        x: &#39;date&#39;,\n        y: [&#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;]\n    }\n}\n</code></pre>\n<p><code class=\"codespan\">encode</code> 声明的基本结构如下，其中冒号左边是坐标系、标签等特定名称，如 <code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;tooltip&#39;</code> 等，冒号右边是数据中的维度名（string 格式）或者维度的序号（number 格式，从 0 开始计数），可以指定一个或多个维度（使用数组）。通常情况下，下面各种信息不需要所有的都写，按需写即可。</p>\n<p>下面是 encode 支持的属性：</p>\n<pre><code class=\"lang-ts\">// 在任何坐标系和系列中，都支持：\nencode: {\n    // 使用 “名为 product 的维度” 和 “名为 score 的维度” 的值在 tooltip 中显示\n    tooltip: [&#39;product&#39;, &#39;score&#39;]\n    // 使用第一个维度和第三个维度的维度名连起来作为系列名。（有时候名字比较长，这可以避免在 series.name 重复输入这些名字）\n    seriesName: [1, 3],\n    // 表示使用第二个维度中的值作为 id。这在使用 setOption 动态更新数据时有用处，可以使新老数据用 id 对应起来，从而能够产生合适的数据更新动画。\n    itemId: 2,\n    // 指定数据项的名称使用第三个维度在饼图等图表中有用，可以使这个名字显示在图例（legend）中。\n    itemName: 3,\n    // 指定数据项的组 ID (groupId)。当全局过渡动画功能开启时，setOption 前后拥有相同 groupId 的数据项会进行动画过渡。\n    itemGroupId: 4,\n    // 指定数据项对应的子数据组 ID (childGroupId)，用于实现多层下钻和聚合。详见 childGroupId。\n    // 从 v5.5.0 开始支持\n    itemChildGroupId: 5\n}\n\n// 直角坐标系（grid/cartesian）特有的属性：\nencode: {\n    // 把 “维度1”、“维度5”、“名为 score 的维度” 映射到 X 轴：\n    x: [1, 5, &#39;score&#39;],\n    // 把“维度0”映射到 Y 轴。\n    y: 0\n}\n\n// 单轴（singleAxis）特有的属性：\nencode: {\n    single: 3\n}\n\n// 极坐标系（polar）特有的属性：\nencode: {\n    radius: 3,\n    angle: 2\n}\n\n// 地理坐标系（geo）特有的属性：\nencode: {\n    lng: 3,\n    lat: 2\n}\n\n// 对于一些没有坐标系的图表，例如饼图、漏斗图等，可以是：\nencode: {\n    value: 3\n}\n</code></pre>\n<p>这是个更丰富的 <code class=\"codespan\">encode</code> 的<a href=\"https://echarts.apache.org/examples/zh/view.html?c=dataset-encode1&amp;edit=1&amp;reset=1\" target=\"_blank\">示例</a>：</p>\n<p>特殊地，在 <a href=\"#series-custom\">自定义系列（custom series）</a> 中，<code class=\"codespan\">encode</code> 中轴可以不指定或设置为 <code class=\"codespan\">null/undefined</code>，从而使系列免于受这个轴控制，也就是说，轴的范围（extent）不会受此系列数值的影响，轴被 <a href=\"#dataZoom\">dataZoom</a> 控制时也不会过滤掉这个系列：</p>\n<pre><code class=\"lang-ts\">var option = {\n    xAxis: {},\n    yAxis: {},\n    dataZoom: [{\n        xAxisIndex: 0\n    }, {\n        yAxisIndex: 0\n    }],\n    series: {\n        type: &#39;custom&#39;,\n        renderItem: function (params, api) {\n            return {\n                type: &#39;circle&#39;,\n                shape: {\n                    cx: 100, // x 位置永远为 100\n                    cy: api.coord([0, api.value(0)])[1],\n                    r: 30\n                },\n                style: {\n                    fill: &#39;blue&#39;\n                }\n            };\n        },\n        encode: {\n            // 这样这个系列就不会被 x 轴以及 x\n            // 轴上的 dataZoom 控制了。\n            x: -1,\n            y: 1\n        },\n        data: [ ... ]\n    }\n};\n</code></pre>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.custom.seriesLayoutBy",
          "default": "column"
        },
        "props": {
          "placeholder": "系列布局依据"
        },
        "_raw": {
          "label": "系列布局依据",
          "desc": "<p>当使用 <a href=\"#dataset\">dataset</a> 时，<code class=\"codespan\">seriesLayoutBy</code> 指定了 <code class=\"codespan\">dataset</code> 中用行还是列对应到系列上，也就是说，系列“排布”到 <code class=\"codespan\">dataset</code> 的行还是列上。可取值：</p>\n<ul>\n<li>&#39;column&#39;：默认，<code class=\"codespan\">dataset</code> 的列对应于系列，从而 <code class=\"codespan\">dataset</code> 中每一列是一个维度（dimension）。</li>\n<li>&#39;row&#39;：<code class=\"codespan\">dataset</code> 的行对应于系列，从而 <code class=\"codespan\">dataset</code> 中每一行是一个维度（dimension）。</li>\n</ul>\n<p>参见这个 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=dataset-series-layout-by&amp;theme=lite\" target=\"_blank\">示例</a></p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.custom.datasetIndex",
          "default": 0
        },
        "props": {
          "placeholder": "数据集索引"
        },
        "_raw": {
          "label": "数据集索引",
          "desc": "<p>如果 <a href=\"#series.data\">series.data</a> 没有指定，并且 <a href=\"#dataset\">dataset</a> 存在，那么就会使用 <a href=\"#dataset\">dataset</a>。<code class=\"codespan\">datasetIndex</code> 指定本系列使用哪个 <a href=\"#dataset\">dataset</a>。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": "series.custom.dataGroupId",
        "props": {
          "placeholder": "数据组ID"
        },
        "_raw": {
          "label": "数据组ID",
          "desc": "<p>该系列所有数据项的组 ID，优先级低于<code class=\"codespan\">groupId</code>。详见<code class=\"codespan\">series.data.groupId</code>。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": "series.custom.data",
        "props": {
          "placeholder": "数据"
        },
        "_raw": {
          "label": "数据",
          "desc": "<p>系列中的数据内容数组。数组项通常为具体的数据项。</p>\n<p>注意，如果系列没有指定 <code class=\"codespan\">data</code>，并且 option 有 <a href=\"#dataset\">dataset</a>，那么默认使用第一个 <a href=\"#dataset\">dataset</a>。如果指定了 <code class=\"codespan\">data</code>，则不会再使用 <a href=\"#dataset\">dataset</a>。</p>\n<p>可以使用 <code class=\"codespan\">series.datasetIndex</code> 指定其他的 <a href=\"#dataset\">dataset</a>。</p>\n<p>通常来说，数据用一个二维数组表示。如下，每一列被称为一个『维度』。</p>\n<pre><code class=\"lang-ts\">series: [{\n    data: [\n        // 维度X   维度Y   其他维度 ...\n        [  3.4,    4.5,   15,   43],\n        [  4.2,    2.3,   20,   91],\n        [  10.8,   9.5,   30,   18],\n        [  7.2,    8.8,   18,   57]\n    ]\n}]\n</code></pre>\n<ul>\n<li>在 <a href=\"#grid\">直角坐标系 (grid)</a> 中『维度X』和『维度Y』会默认对应于 <a href=\"#xAxis\">xAxis</a> 和 <a href=\"#yAxis\">yAxis</a>。</li>\n<li>在 <a href=\"#polar\">极坐标系 (polar)</a> 中『维度X』和『维度Y』会默认对应于 <a href=\"#radiusAxis\">radiusAxis</a> 和 <a href=\"#angleAxis\">angleAxis</a>。</li>\n<li>后面的其他维度是可选的，可以在别处被使用，例如：<ul>\n<li>在 <a href=\"#visualMap\">visualMap</a> 中可以将一个或多个维度映射到颜色，大小等多个图形属性上。</li>\n<li>在 <a href=\"#series.symbolSize\">series.symbolSize</a> 中可以使用回调函数，基于某个维度得到 symbolSize 值。</li>\n<li>使用 <a href=\"#tooltip.formatter\">tooltip.formatter</a> 或 <a href=\"#series.label.formatter\">series.label.formatter</a> 可以把其他维度的值展示出来。</li>\n</ul>\n</li>\n</ul>\n<p>特别地，当只有一个轴为类目轴（axis.type 为 <code class=\"codespan\">&#39;category&#39;</code>）的时候，数据可以简化用一个一维数组表示。例如：</p>\n<pre><code class=\"lang-ts\">xAxis: {\n    data: [&#39;a&#39;, &#39;b&#39;, &#39;m&#39;, &#39;n&#39;]\n},\nseries: [{\n    // 与 xAxis.data 一一对应。\n    data: [23,  44,  55,  19]\n    // 它其实是下面这种形式的简化：\n    // data: [[0, 23], [1, 44], [2, 55], [3, 19]]\n}]\n</code></pre>\n<p><strong>『值』与 <a href=\"#xAxis.type\">轴类型</a> 的关系：</strong></p>\n<ul>\n<li><p>当某维度对应于数值轴（axis.type 为 <code class=\"codespan\">&#39;value&#39;</code> 或者 <code class=\"codespan\">&#39;log&#39;</code>）的时候：</p>\n<p>  其值可以为 <code class=\"codespan\">number</code>（例如 <code class=\"codespan\">12</code>）。（也可以兼容 <code class=\"codespan\">string</code> 形式的 number，例如 <code class=\"codespan\">&#39;12&#39;</code>）</p>\n</li>\n<li><p>当某维度对应于类目轴（axis.type 为 <code class=\"codespan\">&#39;category&#39;</code>）的时候：</p>\n<p>  其值须为类目的『序数』（从 <code class=\"codespan\">0</code> 开始）或者类目的『字符串值』。例如：</p>\n<pre><code class=\"lang-ts\">  xAxis: {\n      type: &#39;category&#39;,\n      data: [&#39;星期一&#39;, &#39;星期二&#39;, &#39;星期三&#39;, &#39;星期四&#39;]\n  },\n  yAxis: {\n      type: &#39;category&#39;,\n      data: [&#39;a&#39;, &#39;b&#39;, &#39;m&#39;, &#39;n&#39;, &#39;p&#39;, &#39;q&#39;]\n  },\n  series: [{\n      data: [\n          // xAxis    yAxis\n          [  0,        0,    2  ], // 意思是此点位于 xAxis: &#39;星期一&#39;, yAxis: &#39;a&#39;。\n          [  &#39;星期四&#39;,  2,    1  ], // 意思是此点位于 xAxis: &#39;星期四&#39;, yAxis: &#39;m&#39;。\n          [  2,       &#39;p&#39;,   2  ], // 意思是此点位于 xAxis: &#39;星期三&#39;, yAxis: &#39;p&#39;。\n          [  3,        3,    5  ]\n      ]\n  }]\n</code></pre>\n<p>  双类目轴的示例可以参考 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=scatter-punchCard\" target=\"_blank\">Github Punchcard</a> 示例。</p>\n</li>\n<li><p>当某维度对应于时间轴（type 为 <code class=\"codespan\">&#39;time&#39;</code>）的时候，值可以为：</p>\n<ul>\n<li>一个时间戳，如 <code class=\"codespan\">1484141700832</code>，表示 UTC 时间。</li>\n<li>或者字符串形式的时间描述：<ul>\n<li><a href=\"https://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15\" target=\"_blank\">ISO 8601</a> 的子集，只包含这些形式（这几种格式，除非指明时区，否则均表示本地时间，与 <a href=\"https://momentjs.com/\" target=\"_blank\">moment</a> 一致）：<ul>\n<li>部分年月日时间: <code class=\"codespan\">&#39;2012-03&#39;</code>, <code class=\"codespan\">&#39;2012-03-01&#39;</code>, <code class=\"codespan\">&#39;2012-03-01 05&#39;</code>, <code class=\"codespan\">&#39;2012-03-01 05:06&#39;</code>.</li>\n<li>使用 <code class=\"codespan\">&#39;T&#39;</code> 或空格分割: <code class=\"codespan\">&#39;2012-03-01T12:22:33.123&#39;</code>, <code class=\"codespan\">&#39;2012-03-01 12:22:33.123&#39;</code>.</li>\n<li>时区设定: <code class=\"codespan\">&#39;2012-03-01T12:22:33Z&#39;</code>, <code class=\"codespan\">&#39;2012-03-01T12:22:33+8000&#39;</code>, <code class=\"codespan\">&#39;2012-03-01T12:22:33-05:00&#39;</code>.</li>\n</ul>\n</li>\n<li>其他的时间字符串，包括（均表示本地时间）:\n<code class=\"codespan\">&#39;2012&#39;</code>, <code class=\"codespan\">&#39;2012-3-1&#39;</code>, <code class=\"codespan\">&#39;2012/3/1&#39;</code>, <code class=\"codespan\">&#39;2012/03/01&#39;</code>,\n<code class=\"codespan\">&#39;2009/6/12 2:00&#39;</code>, <code class=\"codespan\">&#39;2009/6/12 2:05:08&#39;</code>, <code class=\"codespan\">&#39;2009/6/12 2:05:08.123&#39;</code></li>\n</ul>\n</li>\n<li>或者用户自行初始化的 Date 实例：<ul>\n<li>注意，用户自行初始化 Date 实例的时候，<a href=\"https://dygraphs.com/date-formats.html\" target=\"_blank\">浏览器的行为有差异，不同字符串的表示也不同</a>。</li>\n<li>例如：在 chrome 中，<code class=\"codespan\">new Date(&#39;2012-01-01&#39;)</code> 表示 UTC 时间的 2012 年 1 月 1 日，而 <code class=\"codespan\">new Date(&#39;2012-1-1&#39;)</code> 和 <code class=\"codespan\">new Date(&#39;2012/01/01&#39;)</code> 表示本地时间的 2012 年 1 月 1 日。在 safari 中，不支持 <code class=\"codespan\">new Date(&#39;2012-1-1&#39;)</code> 这种表示方法。</li>\n<li>所以，使用 <code class=\"codespan\">new Date(dataString)</code> 时，可使用第三方库解析（如 <a href=\"https://momentjs.com/\" target=\"_blank\">moment</a>），或者使用 <code class=\"codespan\">echarts.time.parse</code>，或者参见 <a href=\"https://dygraphs.com/date-formats.html\" target=\"_blank\">这里</a>。</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<p><strong>当需要对个别数据进行个性化定义时：</strong></p>\n<p>数组项可用对象，其中的 <code class=\"codespan\">value</code> 像表示具体的数值，如：</p>\n<pre><code class=\"lang-ts\">[\n    12,\n    34,\n    {\n        value : 56,\n        //自定义标签样式，仅对该数据项有效\n        label: {},\n        //自定义特殊 itemStyle，仅对该数据项有效\n        itemStyle:{}\n    },\n    10\n]\n// 或\n[\n    [12, 33],\n    [34, 313],\n    {\n        value: [56, 44],\n        label: {},\n        itemStyle:{}\n    },\n    [10, 33]\n]\n</code></pre>\n<p><strong>空值：</strong></p>\n<p>当某数据不存在时（ps：<em>不存在</em>不代表值为 0），可以用 <code class=\"codespan\">&#39;-&#39;</code> 或者 <code class=\"codespan\">null</code> 或者 <code class=\"codespan\">undefined</code> 或者 <code class=\"codespan\">NaN</code> 表示。</p>\n<p>例如，无数据在折线图中可表现为该点是断开的，在其它图中可表示为图形不存在。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "series.custom.clip",
          "default": false
        },
        "props": {
          "placeholder": "裁剪"
        },
        "_raw": {
          "label": "裁剪",
          "desc": "\n\n\n\n<div  class=\"doc-partial-version\">\n\n从 <code  class=\"codespan\">v4.4.0</code> 开始支持\n\n</div>\n\n\n\n<p>是否裁剪超出坐标系部分的图形，具体裁剪效果根据系列决定：</p>\n<ul>\n<li>散点图/带有涟漪特效动画的散点（气泡）图：忽略中心点超出坐标系的图形，但是不裁剪单个图形</li>\n<li>柱状图：裁掉完全超出的柱子，但是不会裁剪只超出部分的柱子</li>\n<li>折线图：裁掉所有超出坐标系的折线部分，拐点图形的逻辑按照散点图处理</li>\n<li>路径图：裁掉所有超出坐标系的部分</li>\n<li>K 线图：忽略整体都超出坐标系的图形，但是不裁剪单个图形</li>\n<li>象形柱图：裁掉所有超出坐标系的部分（从 v5.5.0 开始支持）</li>\n<li>自定义系列：裁掉所有超出坐标系的部分</li>\n</ul>\n<p>除了象形柱图和自定义系列，其它系列的默认值都为 true，及开启裁剪，如果你觉得不想要裁剪的话，可以设置成 false 关闭。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.custom.zlevel",
          "default": 0
        },
        "props": {
          "placeholder": "层级"
        },
        "_raw": {
          "label": "层级",
          "desc": "<p>自定义图所有图形的 zlevel 值。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n"
        }
      },
      {
        "type": "ElInput",
        "model": {
          "path": "series.custom.z",
          "default": 2
        },
        "props": {
          "placeholder": "Z"
        },
        "_raw": {
          "label": "Z",
          "desc": "<p>自定义图组件的所有图形的<code class=\"codespan\">z</code>值。控制图形的前后顺序。<code class=\"codespan\">z</code>值小的图形会被<code class=\"codespan\">z</code>值大的图形覆盖。</p>\n<p><code class=\"codespan\">z</code>相比<code class=\"codespan\">zlevel</code>优先级更低，而且不会创建新的 Canvas。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "series.custom.silent",
          "default": false
        },
        "props": {
          "placeholder": "静默"
        },
        "_raw": {
          "label": "静默",
          "desc": "\n\n\n\n<p>图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。</p>\n"
        }
      },
      {
        "type": "ElSwitch",
        "model": {
          "path": "series.custom.animation",
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
          "path": "series.custom.animationThreshold",
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
          "path": "series.custom.animationDuration",
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
          "path": "series.custom.animationEasing",
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
          "path": "series.custom.animationDelay",
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
          "path": "series.custom.animationDurationUpdate",
          "default": 300
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
          "path": "series.custom.animationEasingUpdate",
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
          "path": "series.custom.animationDelayUpdate",
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
      },
      {
        "type": "ElCollapseItem",
        "props": {
          "title": "通用过渡",
          "name": "universalTransition"
        },
        "children": [
          {
            "type": "ElSwitch",
            "model": {
              "path": "series.custom.universalTransition.enabled",
              "default": false
            },
            "props": {
              "placeholder": "启用"
            },
            "_raw": {
              "label": "启用",
              "desc": "<p>是否开启全局过渡动画。</p>\n"
            }
          },
          {
            "type": "SmartUnionInput",
            "model": "series.custom.universalTransition.seriesKey",
            "props": {
              "placeholder": "系列键",
              "types": [
                "string",
                "array"
              ],
              "defaultType": "string",
              "specialKeywords": []
            },
            "_raw": {
              "label": "系列键",
              "desc": "<p><code class=\"codespan\">seriesKey</code>决定了如何关联需要动画的系列，未配置时会默认取系列的<code class=\"codespan\">id</code>。</p>\n<p>通常该配置为一个字符串，配置为相同<code class=\"codespan\">seriesKey</code>的系列之间会进行动画的过渡。也可以像下面配置为一个数组：</p>\n<pre><code class=\"lang-ts\">seriesKey: [&#39;male&#39;, &#39;female&#39;]\n</code></pre>\n<p>配置为数组意味着在动画的时候所有数组项指定的系列会合并为当前系列。比如该配置是指<code class=\"codespan\">id</code>或者<code class=\"codespan\">seriesKey</code>为<code class=\"codespan\">&#39;male&#39;</code>和<code class=\"codespan\">&#39;female&#39;</code>的系列会合并成当前系列。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "series.custom.universalTransition.divideShape",
            "props": {
              "placeholder": "分割形状"
            },
            "_raw": {
              "label": "分割形状",
              "desc": "<p><code class=\"codespan\">divideShape</code>决定在一对多或者多对一的动画中，当前系列的图形如何分裂成多个图形。目前支持</p>\n<ul>\n<li><code class=\"codespan\">&#39;split&#39;</code> 通过一定的算法将分割图形成为多个。</li>\n<li><code class=\"codespan\">&#39;clone&#39;</code> 从当前图形克隆得到多个。</li>\n</ul>\n<p>为了较好的效果，不同的系列会默认有不同的配置，比如散点图这种图形比较小且复杂的默认采用了<code class=\"codespan\">&#39;clone&#39;</code>，而柱状图这种更加规则的则默认是<code class=\"codespan\">&#39;split&#39;</code>。你可以根据你自己的场景需求设置为需要的分裂策略。</p>\n"
            }
          },
          {
            "type": "ElInput",
            "model": "series.custom.universalTransition.delay",
            "props": {
              "placeholder": "延迟"
            },
            "_raw": {
              "label": "延迟",
              "desc": "<pre><code class=\"lang-ts\">(index: number, count: number) =&gt; number\n</code></pre>\n<p>配置一对多或者多对一的动画中每个图形的动画延时，设置不同的动画延时可以给动画带来一定的趣味性。比如下面代码每个图形通过一个随机的延时造成一种错落的效果：</p>\n<pre><code class=\"lang-ts\">delay: function (index, count) {\n    return Math.random() * 1000;\n}\n</code></pre>\n"
            }
          }
        ]
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
            "model": "series.custom.tooltip.position",
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
            "model": "series.custom.tooltip.formatter",
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
            "model": "series.custom.tooltip.valueFormatter",
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
              "path": "series.custom.tooltip.backgroundColor",
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
              "path": "series.custom.tooltip.borderColor",
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
              "path": "series.custom.tooltip.borderWidth",
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
              "path": "series.custom.tooltip.padding",
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
                  "path": "series.custom.tooltip.textStyle.color",
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
                  "path": "series.custom.tooltip.textStyle.fontStyle",
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
                  "path": "series.custom.tooltip.textStyle.fontWeight",
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
                  "path": "series.custom.tooltip.textStyle.fontFamily",
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
                  "path": "series.custom.tooltip.textStyle.fontSize",
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
                "model": "series.custom.tooltip.textStyle.lineHeight",
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
                "model": "series.custom.tooltip.textStyle.width",
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
                "model": "series.custom.tooltip.textStyle.height",
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
                "model": "series.custom.tooltip.textStyle.textBorderColor",
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
                "model": "series.custom.tooltip.textStyle.textBorderWidth",
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
                  "path": "series.custom.tooltip.textStyle.textBorderType",
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
                  "path": "series.custom.tooltip.textStyle.textBorderDashOffset",
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
                  "path": "series.custom.tooltip.textStyle.textShadowColor",
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
                  "path": "series.custom.tooltip.textStyle.textShadowBlur",
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
                  "path": "series.custom.tooltip.textStyle.textShadowOffsetX",
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
                  "path": "series.custom.tooltip.textStyle.textShadowOffsetY",
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
                  "path": "series.custom.tooltip.textStyle.overflow",
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
                  "path": "series.custom.tooltip.textStyle.ellipsis",
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
            "model": "series.custom.tooltip.extraCssText",
            "props": {
              "placeholder": "额外CSS文本"
            },
            "_raw": {
              "label": "额外CSS文本",
              "desc": "\n\n\n\n\n<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>额外附加到浮层的 css 样式。如下为浮层添加阴影的示例：</p>\n<pre><code class=\"lang-ts\">extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39;\n</code></pre>\n<div  class=\"doc-partial-security-warning\">\n<span  class=\"warning-title\">[警告]:</span> tooltip 是用 HTML 实现的（除非 <a  href=\"#tooltip.renderMode\">tooltip.renderMode</a> 设为 <code  class=\"codespan\">richText</code>）。允许用此方式定制 toolbox 外壳的 CSS text。 如果此 CSS text 来自于“不受信任”的来源，必须考虑 <strong >安全风险</strong>。文档 <a  href=\"https://echarts.apache.org/handbook/zh/best-practices/security\" target=\"_blank\">“安全指南”</a> 给出了安全使用建议。\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n"
            }
          }
        ]
      }
    ]
  }
];
