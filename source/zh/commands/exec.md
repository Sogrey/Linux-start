# exec - 调用并执行指定的命令
exec指令用于执行给定的指令然后退出当前shell，exec并没有创建新的进程，只是替换了原来进程的上下文，进程PID保持不变。


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
exec  [-cl]  [-a name]  [command [arguments]]
```

## 选项

``` bash
-l   # 在第0个参数之前增加一个~，类似登录shell一样
-c   # 不使用任何环境变量执行命令
-a   # 将name作为命令的第0个参数
```
## 举例

执行指令后退出
``` bash
[root@localhost bak]$ exec cat 1.c      #打印1.c
123
321
#上面的指令执行完毕之后，shell就会退出
```



