# exportfs - 管理NFS共享文件系统列表
exportfs主要用于管理当前NFS服务器的文件系统。

exportfs 命令用来管理当前NFS共享的文件系统列表。
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
/usr/sbin/exportfs  [-avi]  [-o options,..]  [client:/path ..]
/usr/sbin/exportfs  -r  [-v]
/usr/sbin/exportfs  [-av]  -u  [client:/path ..]
/usr/sbin/exportfs  [-v]
/usr/sbin/exportfs  –f
```

## 选项

``` bash
-a    # 共享nfs配置文件中所有的共享目录
-i    # 忽略/etc/exports配置文件，只使用exportfs指令的默认值和命令行指定的参数
-r    # 重新共享所有的nfs文件系统
-u    # 取消一个或者多个NFS共享文件系统的共享
-v    # 显示详细执行信息
```
## 举例

阅读用户david邮件
``` bash
[root@localhost ~]$ exportfs -u 192.168.1.12:/media/test
```