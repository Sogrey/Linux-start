# head - 显示文件的开头部分

显示文件开头的几行，默认显示10行，可以使用选项-n来指定行数。

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
head  [选项]  files    
```

## 选项

``` bash
-c, --bytes=[-]K  # 显示文件开头的n个字节；-n显示所有内容，但是不包含最后n字节
-n, --lines=[-]K  # 显示开头的k行；-k显示所有行，但是不包含最后k行
-q, --quite, --silent # 不显示文件名
-v, --verbose  # 显示文件名

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon newDir3]$ cat 1.txt
hello world,
i love linux,
love code.
[sogrey@bogon newDir3]$ head -c 10 1.txt # 显示前10个字节
hello worl
[sogrey@bogon newDir3]$ head -n 2 1.txt # 使用-n选项指定显示前3行
hello world,
i love linux,
[sogrey@bogon newDir3]$ 
```
