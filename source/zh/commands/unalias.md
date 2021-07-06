# unalias - 删除由alias设置的别名

unalias指令用来取消已经定义的别名。

主要用途

- 删除一个或多个别名。
- 删除全部已定义的别名。

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
unalias  [-a]  [name ...]
```

## 选项

``` bash
-a  # 取消所有别名
```
## 举例
删除已经定义的别名
``` bash
[root@localhost ~]$ unalias mytail      # 删除别名mytail
You have new mail in /var/spool/mail/root
[root@localhost ~]$ alias               # 查看已经定义别名，mytail已经不存在
alias cp='cp -i'
alias l.='ls -d .* --color=auto'
alias ll='ls -l --color=auto'
alias ls='ls --color=auto'
alias mv='mv -i'
alias rm='rm -i'
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
```

## 注意

1. 执行脚本时请注意：
    > 使用source命令执行的bash脚本如果执行了alias或unalias命令，那么有可能会对终端环境的别名设置产生影响；终端环境的别名设置也可能改变运行结果；
    > 
    > 通过sh方式调用的bash脚本或直接运行当前用户有执行权限的脚本不受终端环境的别名影响。
2. 查看及设置别名，请查看alias命令。
3. 该命令是bash内建命令，相关的帮助信息请查看help命令。
