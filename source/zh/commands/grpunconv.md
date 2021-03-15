# grpunconv - 用来关闭群组的投影密码

grpunconv命令 用来关闭群组的投影密码。它会把密码从gshadow文件内，回存到group文件里。

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
grpunconv
```

## 实例
未关闭的情况
``` bash
[sogrey@bogon ~]$ sudo cat /etc/gshadow | grep sogrey
[sudo] sogrey 的密码：
wheel:::sogrey
sogrey:123456::sogrey
[sogrey@bogon ~]$ 
```
关闭影子密码
``` bash
[sogrey@bogon ~]$ sudo grpunconv
[sogrey@bogon ~]$ sudo cat /etc/gshadow
cat: /etc/gshadow: 没有那个文件或目录
[sogrey@bogon ~]$ 
```
查看密码已经复制到/etc/group中了。
``` bash
[sogrey@bogon ~]$ cat /etc/group | grep sogrey
wheel::10:sogrey
sogrey:123456:1000:sogrey
[sogrey@bogon ~]$ 
```
