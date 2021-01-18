# umask - 显示或设置创建文件的权限掩码

指定创建文件时所需要的权限掩码，掩码的执行权限对于文件没有效果。如果模式以数字开头，则解释为八进制数字；否则解释为符号模式掩码，类似于chmod(1)所接受的模式掩码。如果省略模式，则打印掩码的当前值。


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
umask  [选项]  mask
```

## 选项

``` bash
-S  # 以字符方式表示权限掩码
-P  # 显示当前权限掩码
```

## 举例

``` bash
[sogrey@bogon newDir2]$ umask #不用任何参数，可以查看掩码
0077
[sogrey@bogon newDir2]$ mkdir demo # 创建目录
[sogrey@bogon newDir2]$ ll -d demo
drwx------. 2 sogrey sogrey 4096 1月  18 23:06 demo # 权限700
[sogrey@bogon newDir2]$ touch test.c
[sogrey@bogon newDir2]$ ll test.c
-rw-------. 1 sogrey sogrey 0 1月  18 23:06 test.c # 权限600
[sogrey@bogon newDir2]$ umask 0055 # 修改掩码
[sogrey@bogon newDir2]$ mkdir test
[sogrey@bogon newDir2]$ ll -d test
drwx-w--w-. 2 sogrey sogrey 4096 1月  18 23:07 test # 权限744
[sogrey@bogon newDir2]$ 
```
