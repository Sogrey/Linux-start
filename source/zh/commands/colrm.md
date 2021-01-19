# colrm - 删除文件中的指定列
从标准输入读取数据，删除指定的列，然后送到标准输出。如果用一个参数调用，则将从指定的列开始删除每一行的列。如果使用两个参数调用，则将删除从第一列到最后一列的列。列编号以第1列开始。

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
colrm  [startcol]  [endcol]
```


## 举例

``` bash
[sogrey@bogon demo4]$ cat hello.txt # 显示内容
Hello world!
Ok,fine.
[sogrey@bogon demo4]$ colrm 3 < hello.txt # 删除第3列之后
He
Ok
[sogrey@bogon demo4]$ colrm 3 5 < hello.txt # 删除3-5列
He world!
Okne.
[sogrey@bogon demo4]$ colrm < hello.txt # 不指定列，显示所有的
Hello world!
Ok,fine.
[sogrey@bogon demo4]$  
```
