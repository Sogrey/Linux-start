# arch - 显示当前主机的硬件架构类型

Arch指令主要用于显示当前主机的硬件结构类型，我们可以看到它输出的结果有：i386、i486、mips、alpha等。

打印机器架构信息；arch 命令输出结果有：i386、i486、i586、alpha、sparc、arm、m68k、mips、ppc、i686等。

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
arch    [OPTION]
```

## 选项

``` bash
--help               # 显示帮助文档
--version            # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon ~]$ arch
x86_64
[sogrey@bogon ~]$ arch --help
用法：arch [选项]...
输出机器的体系结构。

      --help		显示此帮助信息并退出
      --version		显示版本信息并退出

GNU coreutils online help: <http://www.gnu.org/software/coreutils/>
请向<http://translationproject.org/team/zh_CN.html> 报告arch 的翻译错误
要获取完整文档，请运行：info coreutils 'arch invocation'
[sogrey@bogon ~]$ arch --version
arch (GNU coreutils) 8.22
Copyright (C) 2013 Free Software Foundation, Inc.
许可证：GPLv3+：GNU 通用公共许可证第3 版或更新版本<http://gnu.org/licenses/gpl.html>。
本软件是自由软件：您可以自由修改和重新发布它。
在法律范围内没有其他保证。

由David MacKenzie 和Karel Zak 编写。
[sogrey@bogon ~]$ 
```