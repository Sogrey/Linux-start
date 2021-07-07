# export - 为shell变量或函数设置导出属性
export用来设置、删除、修改环境变量，改指令仅在本次登录有效。
## 主要用途
- 定义一到多个变量并设置导出属性。
- 修改一到多个变量的值并设置导出属性。
- 删除一到多个变量的导出属性。
- 显示全部拥有导出属性的变量。
- 为一到多个已定义函数新增导出属性。
- 删除一到多个函数的导出属性。
- 显示全部拥有导出属性的函数。

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
export  [-fn]  [name[=word]] ...
export  -p
```

## 选项

``` bash
-f     # 设置变量名称为某一函数名称
-n     # 删除某环境变量
-p     # 显示所有环境变量
-o     # 限制变量的值必须是使用-o选项定义的set内置变量
```
如果变量名后面跟着“=word”，则变量的值设置为word。除非遇到无效的选项，否则导出返回退出状态为0，其中一个名称不是有效的shell变量名，或者-f提供的名称不是函数。
## 举例

显示所有环境变量
``` bash
[root@localhost ~]$ export
declare -x CLASSPATH=".:/usr/local/src/jdk1.8.0_181/jre/lib/rt.jar:/usr/local/src/jdk1.8.0_181/lib/dt.jar:
/usr/local/src/jdk1.8.0_181/lib/tools.jar"
declare -x COLORTERM="gnome-terminal"
declare -x CVS_RSH="ssh"
```
添加环境变量
``` bash
[root@localhost ~]$ declare var_1="/root"    #定义变量
[root@localhost ~]$ export var_1              #将变量导出为环境变量
[root@localhost ~]$ export | grep var_1       #查看环境变量，已经导出
declare -xu var_1="/ROOT"
[root@localhost ~]$
```
删除环境变量
``` bash
[root@localhost ~]$ export -n var_1        #删除环境变量
[root@localhost ~]$ export | grep var_1    #查看环境变量，已经删除
[root@localhost ~]$  
```

