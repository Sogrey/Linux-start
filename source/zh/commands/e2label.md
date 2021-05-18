# e2label - 设置第二扩展文件系统的卷标
e2label命令 用来设置第二扩展文件系统的卷标。

修改ext2、ext3、ext4文件系统的标签，如果没有指定标签，那么会显示当前的标签。文件系统标签最长16个字符。

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
e2label  device  [new-label]
```

## 选项

``` bash
device          # 设备名称
label           # 标签名称。不指定名称，会显示当前名称。标签名称最多16个字符，超过16个字符将会被自动截断
```
## 举例
指定sdb4的标签
``` bash

[root@localhost ~]$ e2label /dev/sdb4 hello  #指定标签名字
[root@localhost ~]$ e2label /dev/sdb4        #显示标签名字
hello
[root@localhost ~]$
```
