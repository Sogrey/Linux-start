# chattr - 改变文件的属性

用来改变文件属性。这项指令可改变存放在ext2文件系统上的文件或目录属性，这些属性共有以下8种模式。

这个命令只有超级用户才能使用。这个指令适用于ext2、ext3、ext4、xfs、ubifs、reiserfs、jfs系统。

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
chattr  [-RVf]  [ -v version ]  + | - | =[属性]  file
```
运算符‘+‘使所选属性被添加到文件的现有属性中；’-’使它们被删除；‘=’使它们成为文件所拥有的唯一属性。

## 选项

``` bash
-R            # 递归的方式修改目录及其子目录下的文件属性
-V            # 显示详细执行过程
-f            # 跳过错误信息
-v version    # 设置文件或者目录的版本号

# 属性
a             # 只能以append的方式打开
A             # 最后修改时间不被记录
c             # 对文件进行压缩，而读取的时候会得到解压数据
D             # 同步目录更新
d             # 不进行备份
E             # 压缩文件有错误，这个属性不能被用户手动修改
e             # 文件使用扩展区来映射到磁盘
-I            # 目录使用hash树来索引，这个属性不能被用户手动修改
h             # 文件大小超过2TB，这个属性不能被用户手动修改
i             # 文件不能被修改，但是可以删除或者重命名
s             # 将数据块清零并存入磁盘
S             # 同步更新。将文件修改之后，结果写入磁盘
u             # 预防意外删除
-T            # 目录层次结构顶部
-X            # 压缩原始存取。虽然lsattr(1)可以显示它，
              # 但它目前不能使用chattr(1)进行设置或重置。
-Z            # 压缩脏文件。虽然它可以由lsattr(1)显示，
              # 但不能使用chattr(1)设置或重置

+<属性>       # 开启文件或目录的该项属性；
-<属性>       # 关闭文件或目录的该项属性；
=<属性>       # 指定文件或目录的该项属性。
```

## 举例
用chattr命令防止系统中某个关键文件被修改：
``` bash
[sogrey@bogon 文档]$ chattr +i /etc/fstab
/home/sogrey/文档
```
然后试一下`rm`、`mv`、`rename`等命令操作于该文件，都是得到`Operation not permitted`的结果。

让某个文件只能往里面追加内容，不能删除，一些日志文件适用于这种操作：

``` bash
[sogrey@bogon 文档]$ chattr +a /data1/user_act.log
/home/sogrey/文档
```
增加a属性，设置版本号。显示详细的执行过程:

``` bash
[sogrey@bogon demos]$ chattr -v 1 -V +a test.txt
chattr 1.45.0 (6-Mar-2019)
test.txt的标志被设为 -----a--------e-----
chattr: 不允许的操作 设置 test.txt 的标志时
[sogrey@bogon demos]$ > test.c
[sogrey@bogon demos]$ chattr -Vv 2 -a +c test.c
chattr 1.45.0 (6-Mar-2019)
test.c的标志被设为 --------c-----e-----
test.c 的版本被设置为 2
[sogrey@bogon demos]$ 
```
