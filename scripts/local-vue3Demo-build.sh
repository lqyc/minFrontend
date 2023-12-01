#!/bin/bash

cd $(dirname $0)/..

set -eo pipefail

cd ./examples/vue3Demo

npm run build

cd ../../

rm -rf ../demo-vue3Demo/*


mv examples/vue3Demo/dist/* ../demo-vue3Demo/
cp ../demo-vue3Demo/index.html ../demo-vue3Demo/404.html
cd ../demo-vue3Demo
git add .
git commit -m 'feat: demo修改'
git push

