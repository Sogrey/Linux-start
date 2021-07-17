# mysqlimport - 可以用来将文本文件中的数据导入到数据库

mysqlimport指令可以用来将文本文件中的数据导入到数据库。在导入文本文件的时候，必须确保数据库中有一张表，而且他的名字和文本文件的名字是一样的。

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
mysqlimport  [options]  dbname  textfile1 ...
```

## 选项

``` bash
-？, --help                # 显示帮助信息
--bind-address=ip          # 绑定ip
--character-sets-dir       # 默认的字符集目录
-i, --ignore               # 与replace选项相同
-c, --columns              # 设置字段列表
-C, --compress             # 在服务器和客户端之间使用压缩语句
-D, --delete               # 导入数据之前，删除数据库表
-f, --force                # 强制执行
-ignore-lines              # 忽略前n行
-L, --local                # 从客户端主机读取内容
-l, --local-tables         # 执行写操作之前，锁定表
-P, --port                 # 指定端口
--protocol                 # 指定协议
-r, --replace              # 如果有相同的行，那么久覆盖
-v, --verbose              # 显示详细过程
-V, --version              # 显示版本信息
-u, --users                # 指定用户
-p, --password             # 指定密码
```
## 举例

导入数据库文件
``` bash
[root@localhost ~]$ cat wj.txt           #查看文本内容
1                zhangsan
2                lisi
3                wangwu
4                zhangliu 

[root@localhost ~]$ mysqlimport -v -u root -p test wj.txt #导入文本到数据库。前提是必须有一个表，而且名字和文本文件的名字一样
Enter password:
Connecting to localhost
Selecting database test
Loading data from SERVER file: wj.txt into wj
test.wj: Records: 4  Deleted: 0  Skipped: 0  Warnings: 0
Disconnecting from localhost

[root@localhost ~]$ mysql -u root -p -e 'select * from wj' test #查看数据库中表wj的内容
Enter password:
+----+----------+
| id | name     |
+----+----------+
|  1 | zhangsan |
|  2 | lisi     |
|  3 | wangwu   |
|  4 | zhangliu |
+----+----------+
```
 
