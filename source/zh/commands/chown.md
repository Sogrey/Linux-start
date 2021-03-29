# chown - 用来变更文件或目录的拥有者或所属群组
chown命令 改变某个文件或目录的所有者和所属的组，该命令可以向某个用户授权，使该用户变成指定文件的所有者或者改变文件所属的组。用户可以是用户或者是用户D，用户组可以是组名或组id。文件名可以使由空格分开的文件列表，在文件名中可以包含通配符。

只有文件主和超级用户才可以便用该命令。

改变文件或者目录的所有者，或者所属的群组。如果只给出一个所有者(用户名或数字用户ID)，则该用户将成为每个给定文件的所有者，并且文件的组不会被更改。如果所有者后面跟着冒号和组名(或数字组ID)，在它们之间没有空格，那么文件的组所有权也会被更改。如果用户名后面有冒号，但没有组名，则使该用户成为文件的所有者，并将文件组更改为该用户的登录组。如果给出冒号和组，但省略了所有者，则只更改文件组；在本例中，Chown执行与chgrp相同的功能。如果只给出冒号，或者整个操作数为空，则所有者和组都不会更改。

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
chmod  [选项]  [owner：group], [owner], [.group]  file
chmod  [选项]  –reference=RFILE  file
```

## 选项

``` bash
-c, --changes            # 和verbose一样，但是只有在发生改变的时候才显示详细信息
--dereference            # 修改符号链接所指的对象
-h, --no-dereference     # 修改符号链接
--from=CURRENT_OWNER:CURRENT_GROUP # 仅当每个文件的当前所有者和组匹配此处指定的所有者和组时，才更改其所有者和组。可以省略这两种属性之一，在这种情况下，省略的属性不需要匹配。
--preserve-root          # 禁止对根目录递归炒作
--no-preserve-root       # 不特殊对待根目录，默认值
-f, --silent, --quiet    # 忽略部分错误信息
--reference=file         # 使用关联文件所属的组
-v, --verbose            # 显示详细信息
-R, --recursive          # 用递归的方式改变所有的目录和子目录
-H                       # 如果命令行参数是指向目录的符号链接，请遍历它。配合“-R”使用。
-L                       # 遍历到遇到的目录的每个符号链接，配合“-R”使用。
-P                       # 不要遍历任何符号链接(默认)，配合“-R”使用。

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

通过名称改变组信息
``` bash
[root@bogon 文档]$ ls -l 1.c     #当前的组是sogrey
-rwxr--r-- 1 root sogrey 0 9月   7 09:11 1.c
[root@bogon 文档]$ chown .david 1.c   #把组改为david。注意语法，前面有个点
[root@bogon 文档]$ ls -l 1.c
-rwxr--r-- 1 root david 0 9月   7 09:11 1.c
```
2）通过id修改组信息，id可以从/etc/group中找到
``` bash
[root@bogon 文档]$ ls -l 1.c     #当前的组是sogrey
-rwxr--r-- 1 root sogrey 0 9月   7 09:11 1.c
[root@bogon 文档]$ chown .500 1.c  #把组改为500，这个id对应的名称就是david。注意语法，前面有个点
[root@bogon 文档]$ ls -l 1.c
-rwxr--r-- 1 root david 0 9月   7 09:11 1.c
```
3）通过名称改所有者
``` bash
[root@bogon 文档]$ ls -l 1.c    #当前的所有者，root
-rwxr--r-- 1 root sogrey 0 9月   7 09:11 1.c
[root@bogon 文档]$ chown david 1.c  #把所有者改为david。
[root@bogon 文档]$ ls -l 1.c
-rwxr--r-- 1 david sogrey 0 9月   7 09:11 1.c
```
4）同时改变所有者和组
``` bash
[root@bogon 文档]$ ls -l 1.c    #当前的组是sogrey
-rwxr--r-- 1 root sogrey 0 9月   7 09:11 1.c
[root@bogon 文档]$ chown 500：500 1.c   #把组和所有者都改为500，注意语法，中间有个冒号
[root@bogon 文档]$ ls -l 1.c
-rwxr--r-- 1 david david 0 9月   7 09:11 1.c
```