## React・ReactRouter・TypeScriptのサンプル環境

## 使い方

```
$ docker-compose up
$ docker-compose exec app bash

$ npm ci
$ npm run watch
```

## node_moduleの中のtypeを読み込む

```
ホスト側のターミナルで
$ docker cp react-training_app_1:/app/node_modules .
※react-training_app_1はコンテナのIDなので、上記で動作しない場合はIDを確認
```

