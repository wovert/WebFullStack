# git

1.安装
  `yum install git -y`

2.初始化仓库
  `git init --bare xxx.git`

3.添加系统用户

```sh
useradd <name>
passwd <name>
```

4.修改目录的所有者
`chown -R <name>:<name> test.git`

5.clone

```sh
git clone 用户名@服务器:/目录/仓库.git
git clone blue@192.168.183.130:/git/test.git test2
```

## server

```sh
# mkdir /git
# cd /git
# git init --bare test.git
# useradd blue
# passwd blue
# cd /git
# chown -R blue:blue test.git
```

## client

``` sh
git clone 用户名@服务器:/目录/仓库.git
git clone blue@192.168.183.130:/git/test.git test2
```