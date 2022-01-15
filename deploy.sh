set -e

npm run docs:build

cp -rf docs/.vuepress/dist /usr/local/www/