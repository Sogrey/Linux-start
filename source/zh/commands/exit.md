# exit - 退出当前的shell
使shell以状态码n退出。如果省略n，则退出状态是执行的最后一个命令的状态。退出时的陷阱在shell终止之前执行。
## 主要用途
- 执行exit可使shell以指定的状态值退出。若不设置参数，则以最后一条命令的返回值作为exit的返回值退出。

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
exit  [n]
```

## 选项
无
## 返回值
返回值为你指定的参数n的值，如果你指定的参数大于255或小于0，那么会通过加或减256的方式使得返回值总是处于0到255之间。
## 举例

退出shell
``` bash
[root@localhost ~]$ tcsh           #切换shell
[root@localhost /~]$ exit 9        #已经切换。退出shell
exit
You have new mail in /var/spool/mail/root
[root@localhost ~]$                #回到原来的shell
```


