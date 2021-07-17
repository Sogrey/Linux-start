# mysql - 一个简单的sql shell
mysql是一个简单的sql shell，它可以用来管理mysql数据库。

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
mysql  [options]  db
```

## 选项

``` bash
-？, --help                     # 显示帮助信息
--auto-rehash                   # 激活自动rehash功能
--bind-address=ip               # 绑定ip，当电脑有多个网卡的时候，可以指定mysql连接时的网卡
--character-sets-dir = path     # 指定字符集所在的目录
--column-names                  # 在结果中显示列名
-C, --comments                  # 在发送给服务器的状态中显示注释
-c, --compress                  # 在服务器和客户端之间的数据进行压缩
-D db, --database=db            # 指定数据库名
--default-character-set=chatset # 默认的字符集
-e statement, --execute=statement # 指定要使用的指令
-f, --force                     # 强制执行
-H, --html                      # 输出html格式
-i, --ignore-spaces             # 忽略空格
--line-numbers                  # 为错误信息显示行号
--local-infile=0|1              # 关闭或者开启LOAD DATA INFILE功能
-A, --no-autp-rehash            # 关闭自动rehash功能
-b, --no-beep                   # 关闭出错提醒
-p password, --password=        # 连接数据库使用的密码
-W, --pipe                      # 使用有名管道连接数据库
-P port, --port=                # 连接数据库使用的端口
--protocol=TCP|SOCKET|PIPI|MEMORY # 连接数据库使用的协议
-q, --quick                     # 不缓存查询结果
-s, --silent                    # 输出简短的内容
-v, --verbose                   # 显示详细执行过程
-V, --version                   # 显示版本信息
-w, --wait                      # 等待时间
-X, --xml                       # 产生xml输出
-u user, --user=                # 连接数据库的用户名，默认是rootq
```
## 举例

登录
``` bash
[root@localhost ~]$ mysql -u root –p  #使用用户root连接数据库
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 5
Server version: 5.1.71 Source distribution 

Copyright (c) 2000, 2013, Oracle and/or its affiliates. All rights reserved. 

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners. 

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement. 

mysql> quit       #退出
Bye
```
查看权限
``` bash
mysql> show privileges;
+-------------------------+---------------------------------------+-------------------------------------------------------+
| Privilege               | Context                               | Comment                                               |
+-------------------------+---------------------------------------+-------------------------------------------------------+
| Alter                   | Tables                                | To alter the table                                    |
| Alter routine           | Functions,Procedures                  | To alter or drop stored functions/procedures          |
| Create                  | Databases,Tables,Indexes              | To create new databases and tables                    |
| Create routine          | Databases                             | To use CREATE FUNCTION/PROCEDURE                      |
| Create temporary tables | Databases                             | To use CREATE TEMPORARY TABLE                         |
| Create view             | Tables                                | To create new views                                   |
| Create user             | Server Admin                          | To create new users                                   |
| Delete                  | Tables                                | To delete existing rows                               |
| Drop                    | Databases,Tables                      | To drop databases, tables, and views                  |
| Event                   | Server Admin                          | To create, alter, drop and execute events             |
| Execute                 | Functions,Procedures                  | To execute stored routines                            |
| File                    | File access on server                 | To read and write files on the server                 |
| Grant option            | Databases,Tables,Functions,Procedures | To give to other users those privileges you possess   |
| Index                   | Tables                                | To create or drop indexes                             |
| Insert                  | Tables                                | To insert data into tables                            |
| Lock tables             | Databases                             | To use LOCK TABLES (together with SELECT privilege)   |
| Process                 | Server Admin                          | To view the plain text of currently executing queries |
| References              | Databases,Tables                      | To have references on tables                          |
| Reload                  | Server Admin                          | To reload or refresh tables, logs and privileges      |
| Replication client      | Server Admin                          | To ask where the slave or master servers are          |
| Replication slave       | Server Admin                          | To read binary log events from the master             |
| Select                  | Tables                                | To retrieve rows from table                           |
| Show databases          | Server Admin                          | To see all databases with SHOW DATABASES              |
| Show view               | Tables                                | To see views with SHOW CREATE VIEW                    |
| Shutdown                | Server Admin                          | To shut down the server                               |
| Super                   | Server Admin                          | To use KILL thread, SET GLOBAL, CHANGE MASTER, etc.   |
| Trigger                 | Tables                                | To use triggers                                       |
| Update                  | Tables                                | To update existing rows                               |
| Usage                   | Server Admin                          | No privileges - allow connect only                    |
+-------------------------+---------------------------------------+-------------------------------------------------------+
29 rows in set (0.00 sec)
```
 


