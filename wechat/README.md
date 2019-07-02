# 微信

公众号、小程序

1. 订阅号：每天群发1次；折叠
2. 服务号：每月群发4次，功能强大；好友列表
3. 企业微信：
4. 小程序：强大、无法脱离微信；显示在好友列表上面

公众号：`90%` 都是后台的活

## 配置第三方服务器配置

- **AppID**：应用的ID，不能改
- **AppSecret**：应用的密码(bd6c9e417c9910c86823155b5be027a1)
- **Token**：校验对方服务器身份(f6ezye6E0H780fI9OiztnzxjONqF600R)
  - 只有微信服务器和我的服务器知道Token
- **AES密钥**：wFMnZArWNw8fGuTw4MTDROyzZoZmMM1QnG6dYnLkvhM
  - 微信服务器与我的服务器交互式使用的秘钥

- 按下提交按钮之后进行与第三方服务器进行校验 Token
  - 校验Token：`/?signature=58a07886aeec12e4d8f2521ac777d425fd723c7e&echostr=7833260604640908667&timestamp=1545913465&nonce=2101019453`
    - `signature`：签名=token、时间戳、nonce共同组成
    - `echostr`：需要你发送回去的文本
    - `timestamp`：时间戳
    - `nonce`：随机数

- 校验算法

access_token: 第三方服务器主动向微信服务器索要token
```js
{
  "access_token":"17_JK_1CZYqtsG2f8rfobqKNdXTl8rGdIW0fw4eTrINpcUJh2MKVHqgxyZXmSQvSVucH-tYaY3IU673JgAjo7eKmbHc5CphmlybQai9E_J318Bzl7vsU2FkTLInByVY2_3pwQjM84dAlSriPJg0SUZgAIAACH",
  "expires_in":7200 // 有效期2个小时
}

{ ToUserName: 'gh_d9a3d032490d',
  FromUserName: 'ops4v0g_EFWFARCKFt-0x9z0aLiE',
  CreateTime: '1545917346',
  MsgType: 'text',
  Content: 'sd',
  MsgId: '6639664444097694548'
}
```

--------

- 小程序远强于公众号
  - 基本：网络、媒体、文件操作
  - 数据：位置、用户数据、设备信息
  - 微信：支付、生物识别（指纹）、微信运动、卡券、客服、二维码
  - 社交：微信转发、QQ转发

- 获取session_key 和 openid
  - `https://api.weixin.qq.com/sns/jscode2session?appid=wx54a46fc113d310d7&secret=d4b0272a2f24bdaf2e2af6155dcc0508&js_code=061f4mX52eNMAQ0aMtX52C2iX52f4mX6&grant_type=authorization_code`

{"session_key":"pfomyS1oQH8tbiaYIV2b8Q==","openid":"oxgA75IDrvwn9jphgP6PQgG1zVas", unionid}

- 用户
  - session_key: 会话ID，会变
  - openid: 用户ID，唯一的
  - access_token: 令牌，会变
