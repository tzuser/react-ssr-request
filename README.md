# React-Inital-Request 针对Router4服务端渲染首次加载数据


## 安装
``` 
npm install --save react-ssr-request

```

## 使用说明
在webpack发布环境的配置文件里引用插件

`const ReactSSRRequest =require('react-ssr-request/webpack');`

添加插件
```
plugins:[
  new ReactSSRRequest()
]
```
执行build后会生成router-config.json文件


### 需要首次加载的组件
```
import React,{Component} from 'react';
import {initialRequest} from 'react-ssr-request';
import * as Acts from '../actions/Test';

class Home extends Component{
  render(){
    ...
  }
 }
 
const initialDispatchs=(state)=>[
  Acts.get(1),
]
export default initialRequest(initialDispatchs)(Home)
```
### 注意 initialRequest必须包裹在最外层
例如
`initialRequest(initialDispatchs)(connect(...)(Home))`




### 服务端
```
import initalActions from 'react-ssr-request/server';
import initialRequestConfig from '../build/router-config.json';


const render=async (ctx,next)=>{
  //获取store
  const { store, history } = getCreateStore(ctx.req.url);
  //保证所有请求完成
  await initalActions(store,ctx.req.url,initialRequestConfig)
  
  let routeMarkup =renderToString(...)
}
```
