# alias - 定义或显示别名

Alias不带参数或使用-p选项在标准输出上以“name=value”的形式打印别名列表。当提供参数时，为其值给定的每个名称定义一个别名。值中的尾随空格将导致在扩展别名时检查下一个单词是否替换别名。对于参数列表中没有为其提供值的每个名称，将打印别名的名称和值。别名返回true，除非给出没有为其定义别名的名称。

主要用途

- 简化较长的命令。
- 定义一个或多个别名。
- 修改一个或多个已定义别名的值。
- 显示一个或多个已定义别名。
- 显示全部已定义的别名。

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
alias  [-p]  [name[=value] ...]
```

## 选项

``` bash
-p   # 以“key=val”的方式列出所有别名
```
## 举例
查看已经定义别名
``` bash

[root@localhost ~]$ alias  
alias cp='cp -i'
alias l.='ls -d .* --color=auto'
alias ll='ls -l --color=auto'
alias ls='ls --color=auto'
alias mv='mv -i'
alias rm='rm -i'
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
```



