# groups - 打印指定用户所在组的名称
打印指定用户所在组的名称。

groups指令可以查看用户所属的组。如果未指定用户名，则打印当前进程的组成员资格。

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
groups [OPTION]... [username]...
```

- username（可选）：可以是一到多个，不提供时默认为当前用户。

## 选项

``` bash
--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

## 返回值
返回0表示成功，返回非0值表示失败。
## 举例
显示sogrey用户所属的组
``` bash
[sogrey@bogon ~]$ groups sogrey
sogrey : sogrey wheel
[sogrey@bogon ~]$ 

```
## 注意
1. 该命令等价于 `id -Gn`。
2. 每个用户属于`/etc/passwd`中指定的一个组和在`/etc/group`中指定的其他组。
3. 该命令是`GNU coreutils`包中的命令，相关的帮助信息请查看`man -s 1 groups`，`info coreutils 'groups invocation'`。
