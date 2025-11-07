<h1 style="text-align:center">观远数据 - 开放性示例</h1>
此处汇总整理观远数据sdk相关的demo示例，以便于更好的使用观远数据提供的sdk。

> 提示：所有demo均需要配合观远数据BI使用

### Open-SDK
| 名称                                                             | 介绍        |
|----------------------------------------------------------------|-----------|
| [black-and-white-theme](./Open-SDK/black-and-white-theme.js)   | 黑白主题样式    |
| [floating-button-render](./Open-SDK/floating-button-render.js) | 渲染自定义悬浮按钮 |
| [custom-redirect-page](./Open-SDK/custom-redirect-page.js)     | 获取用户信息完成跳转 |
| [custom-page-render](./Open-SDK/custom-page-render.js)         | 用户自定义页面渲染 |
| [card-page-filter-init](./Open-SDK/card-page-filter-init.js)         | 卡片详情页筛选器初始值url传参 |
| [get-dom-by-text](./Open-SDK/get-dom-by-text.js)         | 通过文本获取节点并进行操作 |
| [Google-analytics](./Open-SDK/Google-analytics.js)             | 谷歌埋点      |


### JS-SDK
| 名称                                                   | 介绍        |
|------------------------------------------------------|-----------|
| [demo-card](./JS-SDK/demo-card.html)                 | 卡片内嵌 / 筛选器联动   |
| [demo-dashboard](./JS-SDK/demo-dashboard.html) | 页面内嵌 / 筛选器联动 |
| [demo-viz-sdk](./JS-SDK/demo-viz-sdk.html) | 图表渲染示例 | 

---

## open-sdk 说明
[帮助中心地址](https://docs.guandata.com/product/bi/605320810881613824)

---

## viz-sdk 说明
### 基础用法

```javascript
<script src="path/to/js-sdk.1.1.0.js"></script>

// 创建 SDK 实例
const sdk = new GDVizSDK(document.getElementById('chart'), {
  BIAddress: {
    baseUrl: 'http://localhost:3001/',
    publicPath: '' // 可选，路径前缀
  },
});

// 设置事件回调
sdk.setEventCallback((event) => {
  console.log('图表事件:', event.detail);
});

// 渲染图表 - 使用 message 格式
sdk.setMessage(messageData);

// 渲染图表 - 使用 report 中的可视化配置，即 GuanViz.json 
sdk.setGuanViz(guanVizJson, id);

// 或者使用 option 格式
sdk.setOption(optionData);
```

### 配置选项

```javascript
const config = {
  BIAddress: {
    baseUrl: 'http://your-bi-address.com',  // BI 地址（必填）
    publicPath: '',                         // 路径前缀（可选）在 BI 的 console 中查看 __GD_PUBLIC_PATH__ 来获取
    staticHTML: false,                      // 不再依赖 BI 站点，而是依赖纯静态的 BI 前端资源（不推荐）
  },
  theme: 'LIGHT',        // 主题：'LIGHT'（默认） 或 'DARK'
  renderType: 'card'     // 渲染类型：'card'（默认）或 'largeScreenCard'（大屏模式）
  //注意： 大屏模式需配合 theme: DARK 一起使用
};
```

### API 方法

#### 实例方法

- `setMessage(message, chartType?)` - 设置图表数据（Chat-BI 消息格式）
- `setGuanViz(vizConfig, id)` - 设置图表数据（洞察分析 GuanViz 格式）
- `setOption(option)` - 设置图表配置（通用选项格式）
- `setEventCallback(callback)` - 设置事件回调
- `setTheme(theme)` - 设置主题（'LIGHT' 或 'DARK'）
- `destroy()` - 销毁 SDK 实例

#### 静态方法

- `GDVizSDK.isMessageHasViz(message)` - 检查消息是否包含可视化数据
- `GDVizSDK.getAvailableChartTypes(optionOrMessage)` - 获取可用的图表类型
- `GDVizSDK.convertNumberFormat(value, format)` - 数字格式化工具
- `GDVizSDK.version` - 获取SDK版本号

### 事件处理

SDK 支持监听图表事件，目前支持的事件类型：

- `TableHeightChange` - 表格高度变化事件
- `Error` - 图表渲染出错的事件

```javascript
// 设置事件回调
sdk.setEventCallback((event) => {
  const { name, ...data } = event.detail;
  
  switch (name) {
    case 'TableHeightChange':
      // 表格高度发生变化时触发
      console.log('表格高度变化:', data.tableHeight);
      // 可以根据新高度调整容器大小
      break;
    default:
      console.log('未知事件:', name, data);
  }
});
```