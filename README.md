# websocket-nest
## サーバレスwebsocket

### メモ
https://dev.classmethod.jp/server-side/nestj-aws-lambda-api-gateway/
https://github.com/serverless/serverless-websockets-plugin
https://riotz.works/articles/lulzneko/2018/12/22/implement-chat-using-websocket-of-api-gateway-with-serverless-framework/
https://github.com/serverless/serverless-websockets-plugin

怪しいissue。でも試したけどダメだった。
https://github.com/nestjs/nest/issues/2355





記事途中まで・・・
## API Gateway&LambdaでサーバレスWebsocket
最後にAWS のAPI Gateway&LambdaでサーバレスなWebsocketをやってみようと思います。

[「NestJS」をAWS Lambda + API Gatewayで動かす](https://dev.classmethod.jp/server-side/nestj-aws-lambda-api-gateway/)を参考にさせていただこうと思います。


### サーバレスパッケージのインストール

```console:
$ npm i -g serverless
$ npm i aws-lambda aws-serverless-express express
```
