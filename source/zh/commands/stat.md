# stat - 显示文件或者文件系统的状态信息

显示文件或者文件系统的状态信息，可以输出文件名、大小、文件类型、访问权限、uid、gid。


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
stat  [选项]  file
```

## 选项

``` bash
-f, -file-system           # 显示文件系统状态
-c, --format=FORMAT        # 使用指定的格式输出，每一个输出后打印换行           
    --printf=FORMAT        # 和“--format”一样，但是解释反斜杠转义，
                           # 不要输出强制性的尾随换行符。如果您想要换行符，
                           # 请在格式中包括\n
-t, --terse                # 用简明的格式显示
-L                         # 允许符号链接
-Z                         # 如果selinux可用，那么显示安全上下文

--help                     # 显示帮助文档
--version                  # 显示命令版本信息
```

针对文件的格式

``` bash
%a         # 以八进制为单位的访问权
%A         # 人类可读的访问权
%b         # block 的大小
%B         # %b报告的每个块的大小(以字节为单位)
%C         # SELinux上下文的字符串
%d         # 十进制设备号
%D         # 十六进制的设备号
%f         # 十六进制中的原始模式
%F         # 文件类型
%g         # 拥有者的gid
%G         # 拥有者的组名
%h         # 硬连接数量
%i         # inode
%n         # 文件名
%N         # 如果是符号链接，那么文件名用引号扩起来
%o         # IO块的大小
%s         # 全部大小，字节
%t         # 十六进制的主设备类型
%T         # 十六进制的次设备类型
%u         # 拥有者的uid
%U         # 拥有者的名字
%x         # 最后访问时间
%X         # 上一次访问时间为自纪元以来的秒数
%y         # 最后修改时间
%Y         # 上一次修改时间为自纪元以来的秒数
%z         # 上一次变更的时间
%Z         # 上一次变更时间为自纪元以来的秒数
```
针对文件系统的格式
``` bash
%a         # 非超级用户可用的空闲块
%b         # 文件系统中的数据块总量
%c         # 文件系统中的节点总量
%d         # 文件系统中的空闲节点
%f         # 文件系统中的空闲块
%C         # SELinux的上下文
%i         # 文件系统的ID，十六进制
%l         # 文件名字的最大长度
%n         # 文件名
%s         # 块大小（用于快速传输）
%S         # 基本块大小(用于块计数)
%t         # 十六进制的类型
%T         # 人类可读的形式
```

## 举例

``` bash
[sogrey@bogon 文档]$ cd demos
[sogrey@bogon demos]$ ls
test2.txt  test3.txt  test4.txt  test.c  test.txt
[sogrey@bogon demos]$ stat test.txt
  文件："test.txt"
  大小：250       	块：8          IO 块：4096   普通文件
设备：fd02h/64770d	Inode：9568824     硬链接：1
权限：(0700/-rwx------)  Uid：( 1000/  sogrey)   Gid：( 1000/  sogrey)
环境：unconfined_u:object_r:user_home_t:s0
最近访问：2021-01-15 23:25:26.061982500 +0800
最近更改：2021-01-12 00:54:12.868311798 +0800
最近改动：2021-01-12 00:54:12.868311798 +0800
创建时间：-
[sogrey@bogon demos]$ stat -t test.txt
test.txt 250 8 81c0 1000 1000 fd02 9568824 1 0 0 1610724326 1610384052 1610384052 0 4096 unconfined_u:object_r:user_home_t:s0
[sogrey@bogon demos]$ stat test.txt -c %u,%g,%x
1000,1000,2021-01-15 23:25:26.061982500 +0800
[sogrey@bogon demos]$ 
```
