# `deploy.sh`

# 当发生错误时中止脚本
set -e

# 构建
yarn build

# cd 到构建输出的目录下 
cd dist

git init
git add -A
git commit -m 'deploy'

git remote add origin https://gitee.com/Demrey/test.git
# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f origin master

cd -