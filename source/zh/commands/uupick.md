# uupick - 命令处理传送进来的文件

uupick命令 处理传送进来的文件。 当其他主机通过UUCP将文件传送进来时，可利用uupick指令取出这些文件。

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
uupick [-v][-I<配置文件>][-s<主机>][-x<层级>][--help]
```

## 选项

``` bash
-I<配置文件>, --config<配置文件>  # 指定配置文件。
-s<主机>, --system<主机>         # 处理由指定主机传送过来的文件。
-v, --version                   # 显示版本信息。
--help                          # 显示帮助。
```
## 举例

处理由主机localhost传送过来的文件。在命令行直接输入如下命令：
``` bash
uupick-s localhost
```
该命令通常没有输出。
