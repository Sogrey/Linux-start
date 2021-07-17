# mysqlshow - 一个mysql客户端显示数据库的信息、表信息、字段信息备份程序

mysqlshow是一个客户端的程序，它可以显示数据库的信息、表信息、字段信息。
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
mysqlshow  [options]  [db_name  [tbl_name  [col_name]]]
```

## 选项

``` bash
-？, --help               # 显示帮助信息
--bind-address=ip         # 绑定ip
--character-sets-dir      # 默认的字符集目录
-i, --status              # 显示表格的额外信息
-count                    # 显示表中的行数
-C, --compress            # 在服务器和客户端之间使用压缩语句
-P, --port                # 指定端口
--protocol                # 指定协议
-v, --verbose             # 显示详细过程
-V, --version             # 显示版本信息
-u, --user                # 指定用户
-p, --password            # 指定密码
```
## 举例

查看有哪些数据库
``` bash
[root@localhost ~]$ mysqlshow -u root –p     #显示有哪些数据库
Enter password:
+--------------------+
|     Databases      |
+--------------------+
| information_schema |
| david              |
| discuz             |
| drupal             |
| mediawiki          |
| mysql              |
| phpmyvisites       |
| test               |
| test01             |
| test02             |
| wordpress          |
+--------------------+
```
查看数据库中有哪些表
``` bash
[root@localhost ~]$ mysqlshow -u root -p test   #显示数据库test的信息
Enter password:
Database: test
+--------+
| Tables |
+--------+
| wj     |
+--------+
```
查看表中有哪些字段
``` bash
[root@localhost ~]$ mysqlshow -u root -p test wj  #显示数据库test中的表wj的信息
Enter password:
Database: test  Table: wj
+-------+---------+-------------------+------+-----+---------+-------+---------------------------------+---------+
| Field | Type    | Collation         | Null | Key | Default | Extra | Privileges                      | Comment |
+-------+---------+-------------------+------+-----+---------+-------+---------------------------------+---------+
| id    | int(11) |                   | NO   |     |         |       | select,insert,update,references |         |
| name  | text    | latin1_swedish_ci | NO   |     |         |       | select,insert,update,references |         |
+-------+---------+-------------------+------+-----+---------+-------+---------------------------------+---------+
```
 

