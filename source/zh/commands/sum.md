# sum - 计算文件的校验码和块数
计算文件的校验码和块数，可以采用BSD和system V两种算法。如果没有指定文件，或者文件名是“-”，那么文件就是标准输入。


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
sum  [选项]  file
```

## 选项

``` bash
-r                  # 使用system v算法，使用1k字节。
-s                  # 使用BSD算法，使用512字节

--help              # 显示帮助文档
--version           # 显示命令版本信息
```


## 举例

``` bash
[sogrey@bogon demos]$ sum -r test.txt
19632     1
[sogrey@bogon demos]$ sum -s test.txt
44089 1 test.txt
[sogrey@bogon demos]$ 
```
