# chgrp - 用来变更文件或目录的所属群组
chgrp命令 用来改变文件或目录所属的用户组。该命令用来改变指定文件所属的用户组。其中，组名可以是用户组的id，也可以是用户组的组名。文件名可以 是由空格分开的要改变属组的文件列表，也可以是由通配符描述的文件集合。如果用户不是该文件的文件主或超级用户(root)，则不能改变该文件的组。

在UNIX系统家族里，文件或目录权限的掌控以拥有者及所属群组来管理。您可以使用chgrp指令去变更文件与目录的所属群组，设置方式采用群组名称或群组识别码皆可。

改变文件或者目录所属的群组，使用参数“--reference”，可以改变文件的群组为指定的关联文件群组。

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
chgrp  [选项]  group  file
chgrp  [选项]  –reference=RFILE  file
```

## 选项

``` bash
-c,  --changes          # 和verbose一样，但是只有在发生改变的时候才显示详细信息
--dereference           # 改变符号链接所指向的文件，而不是符号链接自己。这是默认选项
-h,  --no-dereference   # 修改符号链接，仅适用于可更改符号链接所有权的系统
--no-preserve-root      # 不要特殊处理“/”，默认选项
--preserve-root         # 未能对“/”进行递归操作
-f,  --silent,  --quiet # 忽略部分错误信息
--reference=file        # 使用关联文件所属的组，而不是指出一个具体的值
-R, --recursive         # 递归处理目录及其内部的文件
-v,  --verbose          # 显示详细信息
-H                      # 如果命令行参数是指向目录的符号链接，请遍历它。配合”-R”使用
-L                      # 遍历到遇到的目录的每个符号链接。配合”-R”使用
-P                      # 不要遍历任何符号链接(默认)。配合”-R”使用

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例


修改文件所属的组
``` bash
[root@bogon 文档]$  ls –l  #使用ls查看详细信息
总用量 1072
-rw-r--r-- 1 root root      0 9月   7 09:11 1.c
-rw-r--r-- 3 root root 358400 9月   7 15:46 link
[root@bogon 文档]$  chgrp sogrey 1.c  #修改组
[root@bogon 文档]$  ls –l       #再次查看，修改已经成功
总用量 1072
-rw-r--r-- 1 root sogrey      0 9月   7 09:11 1.c
-rw-r--r-- 3 root root   358400 9月   7 15:46 link
```
2）使用选项“--reference”
``` bash
[root@bogon 文档]$  chgrp --reference=1.c my.iso   #1.c的组已经是sogrey了
[root@bogon 文档]$  ls -l
总用量 1072
-rw-r--r-- 1 root sogrey      0 9月   7 09:11 1.c
-rw-r--r-- 3 root sogrey 358400 9月   7 15:46 my.iso      #my.iso所属的组也变成sogrey
```
3）只修改符号链接自己
``` bash
[root@localhost wj]$ ls -l 1.c 11.c    #查看文件信息
lrwxrwxrwx 1 root root 3 10月 26 10:11 11.c -> 1.c
-rw-r--r-- 1 root root 0 10月 24 10:12 1.c
[root@localhost wj]$ chgrp -h sogrey 11.c      #修改组
[root@localhost wj]$ ls -l 1.c 11.c          #查看文件信息，只有符号链接自己的组被改了
lrwxrwxrwx 1 root sogrey 3 10月 26 10:11 11.c -> 1.c
-rw-r--r-- 1 root root   0 10月 24 10:12 1.c
```