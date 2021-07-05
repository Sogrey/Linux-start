# pwd - 显示当前工作目录

查看用户当前的工作目录，输出完整路径。

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
pwd  [OPTION]
```

## 选项

``` bash
-L                               # 从环境变量中使用PWD
-P                               # 跳过所有的符号链接
--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon 文档]$ pwd
/home/sogrey/文档
```



