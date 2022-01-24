#!/bin/sh
set -ex

# ドキュメントを生成
npx redoc-cli bundle ./specs/openapi.yaml -o document.html

# 分割ファイルを統合
npx swagger-cli bundle ./specs/openapi.yaml -o ./build/openapi.yaml -t yaml

# tsの型ファイルを生成
rm -r outputs/openapi_server_interface/ts/types.ts
npx openapi-typescript ./build/openapi.yaml \
  --output outputs/openapi_server_interface/ts/types.ts
