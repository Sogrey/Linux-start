# users - 打印当前主机所有登陆用户的名称
每个显示的用户名对应一个登录会话；如果一个用户有不止一个登录会话，那他的用户名将显示相同的次数。

该命令是GNU coreutils包中的命令，相关的帮助信息请查看`man -s 1 users`，`info coreutils 'users invocation'`

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
users [OPTION]... [FILE]
```

FILE（可选）：记录用户当前登录情况的文件；默认使用 `/var/run/utmp` 、`/var/log/wtmp`。

## 选项

``` bash
--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon ~]$ users
sogrey sogrey
[sogrey@bogon ~]$ 
```
