# pull-duoshuo-data

配置你的多说的有关信息，将多说评论内容拉取下来变成 JSON 文档以方便数据分析和使用。

因为多说已经停止服务了，因此我把这份[常用 APP 的 WebView 内核测试数据](http://yujiangshui.com/webview-core-test/)更新下来，直接放在 git 上面了，请参见 data 目录下的数据，自行使用。

## 用法

### 拉取信息

```
git clone https://github.com/yujiangshui/pull-duoshuo-data.git
cd pull-duoshuo-data
```

打开 `app.js` 文件，找到 `option` 根据自己多说有关账号填写相关信息并保存。


```
npm install
node app.js
```

即可拉取数据，并在 `data` 目录下面创建两个文件 `result.json` 和 `result-1422522840635.json`。其中 `result.json` 为最近拉取的数据，`result-1422522840635.json` 则以时间戳命名，存放每次拉取的数据用做备份。

### 处理信息

拉取下来的数据将以数组的形式存放，每个 comments 内容作为数组一个元素。

`readResult.js` 是一个简单的处理数据示例，你可以基于该文件进一步编写分析数据的逻辑。

你也可以直接 `require` 有关 JSON 文件，而不是使用 `fs.readFile`，都可以。

## 无协议