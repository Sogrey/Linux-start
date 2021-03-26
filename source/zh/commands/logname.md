# logname - 打印当前终端登录用户的名称
显示当前登录的用户名称。

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
logname
```

## 选项

``` bash
--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例
查看当前登录用户
``` bash
[sogrey@bogon ~]$ logname
sogrey
[sogrey@bogon ~]$ 
```

## 注意

注意区分 whoami 和 logname 这两个命令；比如我们以用户 root 打开的终端，然后切换到了用户 user2。此时， whoami返回的是当前用户 user2, logname 返回的是 root，大家可以自行实践验证一下。

该命令是GNU coreutils包中的命令，相关的帮助信息请查看man -s 1 logname，info coreutils 'logname invocation'。
