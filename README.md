# Antd-Pro-Serve

antd-pro 的线上 mock 数据，为了 build 之后的展示。

## serve start

```base
git clone  https://github.com/xiaohuoni/antd-pro-server.git
npm i
npm start
```

```http://localhost:3000/api/users```

```json
[
  {
    "key": "1",
    "name": "John Brown",
    "age": 32,
    "address": "New York No. 1 Lake Park"
  },
  ...
]
```

## mock start

```base
npm i antd-pro-server --save
```

mock.config
### 比如 .umirc.mock.js

```js
import proxy from "antd-pro-server";
export default proxy;
```

### 支持扩展配置

```js
import antdServer from "antd-pro-server";
const proxy = {
  "GET /api/test": [
    {
      code: "success",
      message: "成功"
    }
  ]
};
export default { ...proxy, ...antdServer };
```
```http://localhost:8000/api/test```
```json
[{"code":"success","message":"成功"}]
```
### 支持环境配置
```js
import antdServer from 'antd-pro-server';
// // 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';
const proxy = {
  'GET /api/test': [
    {
      code:'success',
      message:'成功'
    },
  ],
};
export default (noProxy ? {} : {...proxy,...antdServer});
```
```base
cross-env NO_PROXY=true umi dev
```
