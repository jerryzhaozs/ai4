set -e

npm run build

cp -rf docs/.vuepress/dist /usr/local/www/