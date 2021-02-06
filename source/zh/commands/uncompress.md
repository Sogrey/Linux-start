# uncompress - 用来解压.Z文件

uncompress命令 用来解压缩由compress命令压缩后产生的“.Z”压缩包。

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
uncompress [选项]  [参数]
```

## 选项

``` bash
-f            # 不提示用户，强制覆盖掉目标文件；
-c            # 将结果送到标准输出，无文件被改变；
-r            # 递归的操作方式。
```
## 举例
先创建一个.Z压缩文件
``` bash
compress FileName
```
解压：
``` bash
uncompress FileName.Z
```
