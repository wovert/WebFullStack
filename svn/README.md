# SVN

> 集中式；中心服务器；唯一最新版

1. checkout(克隆版本)
2. commit(提交到中心服务器)
3. update(从中心服务器拉取最新代码)
4. 冲突

## 搭建SVN

```sh

# yum install subversion -y
# mkdir /svn && cd /svn

创建新的仓库
# svnadmin create /svn/test1/
# cd /svn/test1

配置用户和密码
# vim /svn/test1/conf/passwd
  [users]
  blue=12345
  zhangsan=456789

服务器配置
# vim /svn/test1/conf/svnserve.conf
  anon-access = none 不允许匿名访问
  auth-access = write 授权访问
  password-db = passwd
  #不要轻易打开authz-db

启动服务(-d:守护模式, -r:目录)
# svnserve -d -r /svn/test1/
# daemon
# root

关闭防火墙
清除防火墙规则
# iptables -F
查看
# iptables -L
```

```sh
Checkout:
  URL of respository:
    svn://192.168.1.2/
  Checkout directory:
    C:\wamp64\www\test
```
