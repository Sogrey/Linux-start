# popd - 从目录堆栈中删除目录
popd指令用来从shell目录堆栈中删除记录，如果没有选项，那么先删除栈顶记录，然后将当前目录切换到新的栈顶目录中。
# 主要用途
- 从目录堆栈中删除目录，如果是顶部目录被删除，那么当前工作目录会切换到新的顶部目录。
- 没有参数时，删除目录堆栈顶部。



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
popd  [-n]  [+num]  [-num]
```
在没有参数的情况下，从堆栈中移除顶层目录，并对新的顶层目录执行CD。如果popd命令成功，也会执行dir，返回状态为0。如果遇到无效选项、目录堆栈为空、指定不存在的目录堆栈条目或目录更改失败，则popd返回false。
## 选项

``` bash
+num       # 将从左起第num个目录删除，从0开始计数
-num       # 将从右起第num个目录删除，从0开始计数
-n         # 在从堆栈中删除目录时，取消目录的正常更改，以便只操作堆栈。
```
## 举例
删除最右面的目录
``` bash
[root@localhost doc]$ dirs.           #查看目录
/home/sogrey/app/doc
[root@localhost doc]$ popd -0         #删除最右面的，成功
/home/sogrey/app
```
删除最左面的目录
``` bash
[root@localhost doc]$ dirs.           #查看目录
/home/sogrey/app/doc
[root@localhost doc]$ popd +0        #删除最左面的，成功
/sogrey/app/doc
```


