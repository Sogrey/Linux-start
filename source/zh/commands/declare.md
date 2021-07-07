# declare - 声明变量，设置或显示变量的值和属性
declare用来定义shell变量或者给变量增加属性，如果没有指定变量，那么就显示所有的变量。declare定义的变量仅能在当前的shell环境中使用，退出shell之后无效。
## 主要用途

- 显示包含指定属性的全部变量和值
- 显示包含指定属性的一到多个变量和值
- 显示一到多个变量的属性和值
- 显示所有变量的属性和值并显示函数的定义
- 显示所有变量的属性和值
- 显示所有全局变量的属性和值
- 显示全部函数名和函数定义
- 只显示全部函数名
- 显示一到多个函数名和函数定义
- 只显示一到多个函数名
- 声明全局变量（可选：赋值）
- 声明变量（可选：赋值、属性）
- 增加、删除变量的属性（可选：赋值）

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
declare  [-aAfFilrtux]  [-p]  [name[=value] ...]
```

## 选项

``` bash
-a     # 声明数组变量
-f     # 仅显示函数
-F     # 不显示函数定义
-i     # 先计算表达式，把结果赋值给变量
-p     # 仅显示变量定义的方法和值。使用此选项时，其他选项被忽略
-r     # 定义只读变量
-x     # 将指定的变量转换成环境变量
-l     # 当变量分配值的时候，所有的大写字母变成小写
-u     # 当变量分配值的时候，所有的小写字母变成大写
```
使用“-”是赋值属性，使用“+”可以关闭属性。例如使用“-x”可以将变量改为环境变量，而使用“+x”可以将其变为普通变量
## 举例

定义环境变量
``` bash
[root@localhost ~]$ declare -x var_1=100       #定义环境变量
[root@localhost ~]$ declare –x | tail –n 1     #查看环境变量
declare -x var_1="100"

[root@localhost ~]$ declare +x var_1          #去除var_1的环境变量属性
You have new mail in /var/spool/mail/root
[root@localhost ~]$ declare -x | tail -n 1     #查看环境变量，已经成功去除
declare -x XMODIFIERS="@im=ibus"
```
使用“-u”属性定义变量
``` bash
[root@localhost ~]$ declare -u var_1="hello"   #定义变量并赋值
[root@localhost ~]$ declare | grep var_1       #查看变量，赋值时的小写字母都变成大写
_=var_1=hello
var_1=HELLO
[root@localhost ~]$  
```
使用“-i”属性定义变量
``` bash
[root@localhost ~]$ declare -i var_2=100+200    #定义变量var_2，结果是300
[root@localhost ~]$ declare | grep var_2        #查看变量
_=var_2=100+200
var_2=300
```
