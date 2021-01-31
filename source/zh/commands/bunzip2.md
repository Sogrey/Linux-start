# bunzip2 - 解压缩bzip2压缩过的文件



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
bunzip2  [-fkvsVL]  文件
```
## 选项
``` bash
-f, --force   # 强制执行
-k, --keep    # 解压之后，保留源文件
-v, --verbose # 显示详细信息
-s, --small   # 减少内存使用，用于压缩、解压缩和测试。使用修改的算法对文件进行解压缩和测试，该算法每个块字节只需要2.5字节。这意味着任何文件都可以在2300 k内存中解压缩，尽管速度是正常速度的一半。
-L, --license # 显示许可条款和条件
-V, --version # 显示软件版本
```

## 举例

1）解压，保留压缩包
``` bash
[root@localhost weijie]$ bunzip2 -k 2.c.bz2           #解压之后保留压缩包
[root@localhost weijie]$ ls
11.c  1.c.gz  1.gz  2.c  2.c.bz2  3.c  4.c  5.c  6.c~  rec000012.c.bz2  res.zip
```
2）解压
``` bash
[root@localhost weijie]$ bzip2 -d res.bz2          #解压
[root@localhost weijie]$ ls
11.c  1.c.bz2  2.c  3.c  4.c  5.c  6.c~  bak  res
```
3）将两个文件压缩到一个文件中
``` bash
[root@localhost weijie]$ cat 1.c 2.c                 #输出两个文件的内容
hello world,
i am david.
i love linux,
love code.
123
23
212
[root@localhost weijie]$ bzip2 –c 1.c > foo.gz      #将1.c压缩到foo
[root@localhost weijie]$ bzip2 –c 2.c >> foo.gz     #将2.c压缩到foo
[root@localhost weijie]$ bgzip2 -d foo.gz            #解压foo
[root@localhost weijie]$ cat foo                      #显示foo的内容
hello world,
i am david.
i love linux,
love code.
123
23
212
```