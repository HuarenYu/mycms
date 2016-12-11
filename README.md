# 极简内容管理系统

安装依赖

```shell
npm install
npm install -g sequelize-cli
npm install -g cross-env
npm install -g nodemon
```

初始化数据库

```shell
sequelize db:migrate

sequelize db:seed
```

运行程序

```shell
npm run start
```

登陆管理后台

用户名:admin 密码:admin
```
http://localhost:8080/admin
```