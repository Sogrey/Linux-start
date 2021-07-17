# mysqladmin - mysql数据库的管理工具

mysqladmin是mysql数据库的管理工具，可以控制、查看、修改数据库服务器的配置和状态。

## 适用范围

<!-- <div class="svg linux">Linux</div> -->
<div class="svg redhat">RedHat</div>
<div class="svg rhel">RHEL</div>
<div class="svg ubuntu">Ubuntu</div>
<div class="svg centos">CentOS</div>
<div class="svg debian">Debian</div>
<div class="svg deepin">Deepin</div>
<div class="svg suse">SUSE</div>
<div class="svg opensuse">openSUSE</div>
<div class="svg fedora">Fedora</div>
<div class="svg linuxmint">Linux Mint</div>
<!-- <div class="svg mxlinux">MX Linux</div> -->
<div class="svg alpinelinux">Alpine Linux</div>
<div class="svg archlinux">Arch Linux</div>

## 语法

``` bash
mysqladmin  [options]  command  [command-options]  [command [command-options]]
```

## 选项

``` bash
-？, --help                   # 显示帮助信息
--bind-address=ip             # 绑定ip，当电脑有多个网卡的时候，可以指定mysql连接时的网卡
--character-sets-dir = path   # 指定字符集所在的目录
-c, --compress                # 在服务器和客户端之间的数据进行压缩
--default-character-set=chatset # 默认的字符集
-f, --force                   # 强制执行
-b, --no-beep                 # 关闭出错提醒
-W, --pipe                    # 使用有名管道连接数据库
-P port, --port=              # 连接数据库使用的端口
--protocol=TCP|SOCKET|PIPI|MEMORY # 连接数据库使用的协议
-s, --silent                  # 输出简短的内容
-v, --verbose                 # 显示详细执行过程
-V, --version                 # 显示版本信息
-w, --wait                    # 等待时间
-u                            # 指定用户名
-p                            # 指定密码
```
## 命令
mysqladmin支持的命令如下
``` bash
create                        # 创建数据库
debug                         # 开启调试模式
drop                          # 删除数据库
extend-status                 # 显示mysql扩展状态信息
flush-hosts                   # 刷新mysql缓冲的主机
flush-logs                    # 刷新日志
flush-status                  # 刷新状态变量
flush-privileges              # 刷新权限
flush-table                   # 刷新所有表格
flush-threads                 # 刷新线程
kill                          # 杀死指定的线程
password                      # 修改密码
ping                          # 测试服务器是否可连接
processlist                   # 显示活动的线程
reload                        # 重新加载授权表
refresh                       # 刷新所有的表，并且关闭和打开日志文件
shutdown                      # 关闭服务器
status                        # 显示服务器状态
start-slave                   # 启动slave
stop-slave                    # 关闭slave
variables                     # 显示可用的变量和值
version                       # 显示版本信息
```
## 举例

显示服务器状态
``` bash
[root@localhost ~]$ mysqladmin -u root -p status
Enter password:
Uptime: 1501  Threads: 1  Questions: 32  Slow queries: 0  Opens: 15  Flush tables: 1  Open tables: 8  Queries per second avg: 0.21
```
查看活动线程
``` bash
[root@localhost ~]$ mysqladmin -u root -p processlist
Enter password:
+----+------+-----------+----+---------+------+-------+------------------+
| Id, User, Host     , db, Command, Time, State, Info            ,
+----+------+-----------+----+---------+------+-------+------------------+
| 7 , root, localhost,   , Query  , 0   ,      , show processlist,
+----+------+-----------+----+---------+------+-------+------------------+
```
显示服务器版本信息
``` bash
[root@localhost ~]$ mysqladmin -u root -p version
Enter password:
mysqladmin  Ver 8.42 Distrib 5.1.71, for redhat-linux-gnu on i386
Copyright (c) 2000, 2013, Oracle and/or its affiliates. All rights reserved. 

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Server version    5.1.71
Protocol version 10
Connection        Localhost via UNIX socket
UNIX socket       /var/lib/mysql/mysql.sock
Uptime:              26 min 13 sec 

Threads: 1  Questions: 33  Slow queries: 0  Opens: 15  Flush tables: 1  Open tables: 8  Queries per second avg: 0.20
```
 


