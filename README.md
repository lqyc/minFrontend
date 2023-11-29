### 使用
- node版本 <18
- 安装

```bash
npm install wujie -S
```

- 使用

```javascript
import { startApp } from "wujie";

startApp({ name: "唯一id", url: "子应用路径", el: "容器", sync: true });
```

### vue 框架

- 安装

```bash
# vue2 框架
npm i wujie-vue2 -S
# vue3 框架
npm i wujie-vue3 -S

```

- 引入

```javascript
// vue2
import WujieVue from "wujie-vue2";
Vue.use(WujieVue);
// vue3
import WujieVue from "wujie-vue3";
app.use(WujieVue);
```

- 使用

```js

<WujieVue
  width="100%"
  height="100%"
  name="xxx"
  :url="xxx"
  :sync="true"
  :fetch="fetch"
  :props="props"
  :beforeLoad="beforeLoad"
  :beforeMount="beforeMount"
  :afterMount="afterMount"
  :beforeUnmount="beforeUnmount"
  :afterUnmount="afterUnmount"
></WujieVue>

```

### react 框架

- 安装

```bash
npm i wujie-react -S

```

- 引入

```javascript
import WujieReact from "wujie-react";
```

- 使用

```html
<WujieReact
  width="100%"
  height="100%"
  name="xxx"
  url="{xxx}"
  sync="{true}"
  fetch="{fetch}"
  props="{props}"
  beforeLoad="{beforeLoad}"
  beforeMount="{beforeMount}"
  afterMount="{afterMount}"
  beforeUnmount="{beforeUnmount}"
  afterUnmount="{afterUnmount}"
></WujieReact>
```

## 常见问题

[详见文档](https://wujie-micro.github.io/doc/question/#_1%E3%80%81%E8%AF%B7%E6%B1%82%E8%B5%84%E6%BA%90%E6%8A%A5%E9%94%99)

## 本地开发

运行以下脚本，可以本地开发无界微前端框架，支持实时编译调试开发。

```bash
pnpm i                  // 安装包依赖，务必使用pnpm
npm run start           // 启动所有应用
```