# MongoDB

## CentOS 源码安装 MongoDB

### 环境准备

```sh
程序存放目录，数据存放目录，日志存放目录，配置文件目录
# mkdir -pv /usr/local/mongodb/{data,log,etc}
```

### 下载MongoDB程序源码

```sh
# cd /usr/local/src
# wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-4.0.6.tgz
# tar -zxvf mongodb-linux-x86_64-4.0.6.tgz
# cd mongodb-linux-x86_64-4.0.6
# cp -r * /usr/local/mongodb
```

### 配置环境变量

```sh
# vim /etc/profile.d/mongodb.sh
  export PATH=$PATH:/usr/local/mongodb/bin
# source /etc/profile
```

### 创建配置文件

```sh
# vim /usr/local/mongodb/etc/mongodb.conf
#数据文件存放目录
dbpath = /usr/local/mongodb/data
#日志文件存放目录
logpath = /usr/local/mongodb/log/mongodb.log
#端口
port = 27017
#以守护程序的方式启用，即在后台运行
fork = true   
#nohttpinterface = true
bind_ip=127.0.0.1
```
### 启动服务

```sh
# mongod --config /usr/local/mongodb/etc/mongodb.conf --dbpath=/usr/local/mongodb/data --logpath=/usr/local/mongodb/log/mongodb.log --logappend --fork
```

### 消除警告

```sh
# vim /etc/rc.local
if test -f /sys/kernel/mm/transparent_hugepage/enabled; then
  echo never > /sys/kernel/mm/transparent_hugepage/enabled
fi
if test -f /sys/kernel/mm/transparent_hugepage/defrag; then
  echo never > /sys/kernel/mm/transparent_hugepage/defrag
fi
ulimit -u 65535

# echo never > /sys/kernel/mm/transparent_hugepage/enabled
# echo never > /sys/kernel/mm/transparent_hugepage/defrag
```
Tip:
如果发现加入到/etc/rc.local中的内容在重启后没有生效，检查下rc.local的权限及当前系统运行等级

```sh
# runlevel
# chmod +x /etc/rc.local
```

### 停止mongodb

```sh
# ps -ef | grep mongo
# kill -2 PID
```

### 文件限制数调整

```sh
# vim /etc/security/limits.conf
* soft nofile 65535
* hard nofile 65535
* soft nproc 32000
* hard nproc 32000
```

### 服务化

```sh
# useradd -r mongodb
# chown -R mongodb.mongodb /usr/local/mongodb
# vim /etc/systemd/system/mongodb.service
[Unit]
Description=mongodb
After=network.target
 
[Service]
Type=forking
User=mongodb
PIDFile=/usr/local/mongodb/data/mongod.lock
ExecStart=/usr/local/mongodb/bin/mongod --aut -f /usr/local/mongodb/etc/mongodb.conf
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s QUIT $MAINPID
PrivateTmp=true
 
[Install]
WantedBy=multi-user.target
# systemctl daemon-reload
# vim /usr/local/mognodb/etc/mongodb.conf
authorization: enabled   # 添加权限设置
```

### 创建授权用户

```sh
use admin
db.createUser(
  {
    user: "admin", //用户名
    pwd: "admin123", //密码
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] //权限
  }
)


> use admin
switched to db admin
> db.auth('ljaiadmin','123456') (注：切换到admin用户进行授权验证)
```

### 创建普通用户

用可以对test123数据库读写的rwtest123用户为例

```
> use test123
switched to db test123
> db.createUser(
...    {
...      user: "rwtest123",
...      pwd: "123456",
...     roles: [ { role: "readWrite", db: "test123" } ]
...   }
... )
Successfully added user: {
        "user" : "rwtest123",
        "roles" : [
                {
                        "role" : "readWrite",
                        "db" : "test123"
                }
        ]
}

#所建的rwtest123用户可以在test123数据库中进行增删改查操作，但是其他操作就不行了
>db.auth('rwtest123','123456')
switched to db test123
> db.test123.insert({"test":"test"})
WriteResult({ "nInserted" : 1 })
> db.test123.find()
{ "_id" : ObjectId("563332ebc8a59ae4fe96bbf5"), "test" : "test" }
> db.test123.drop()
true
> use test100
switched to db test100
> db.test100.find()
Error: error: { "$err" : "not authorized for query on test100.test100", "code" : 13 }
>
```

## command

```
> show dbs
> use test
switched to db test
> db.createUser(
...    {
...      user: "test",
...      pwd: "test",
...     roles: [ { role: "readWrite", db: "test" } ]
...   }
... )

> db.users.insert({name:"zhangsan", age: 101})
> show collections
> db.users.find()
> db.users.update({name: "zhangsan"}, {age: 102})
> db.users.stats()
> db.usrs.remove()

> var id = ObjectId()
> id
> id.getTimestamp()
> new Date(id.getTimestamp())

```

- ObjectId=机器名称做编码+正在运行的进程号+当前的时间戳+自增数字

```
> var user = db.users
> user.find()

> user.find({age: { $gt: 1 }})
> user.find({age: { $gte: 1 }})
> user.find({age: { $lte: 1 }})
> user.find({age: 20})

# and
> user.find({age: { $lte: 30, $gte: 12 }})

# or
> user.find({age: { $or: [{}, {}] }})
> user.find({age: {$exists: true}})
> user.find({hobbies.hiking.desc: "grea love"})
> user.find({hobbies.0.name: "hiking"})
> user.find({name: {$regex: "xiao"}})
> user.find({hobbies: {$size: 2}})
> user.update({name: "wovert", {$set: {age: 10}}})
```

## Data Type

