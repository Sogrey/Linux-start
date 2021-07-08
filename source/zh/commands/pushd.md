# pushd - 将目录添加到目录堆栈顶部

pushd指令用来将目录加入堆栈的顶部，并且切换到该目录。如果没有任何参数，那么将栈最上面的两个记录切换位置。
## 主要用途
- 将目录添加到目录堆栈顶部，切换当前工作目录到该目录。
- 旋转目录堆栈，使堆栈的新顶部成为当前工作目录。
- 没有参数时，交换目录堆栈的前两个目录。
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
pushd  [-n]  [+num]  [-num]
pushd  [-n]  [dir]
```
如果没有参数，则交换前两个目录并返回0，除非目录堆栈为空。如果pusd命令成功，那么还会执行dir。如果使用第一种形式，除非cd到dir失败，否则pushd返回0。对于第二种表单，除非目录堆栈为空，指定了一个不存在的目录堆栈元素，或者将目录更改为指定的新的当前目录，否则PUSD返回0。
## 选项

``` bash
+num          # 将从左起第num个目录移动到栈顶，从0开始计数
-num          # 将从右起第num个目录移动到栈顶，从0开始计数
-n            # 添加记录的时候，不切换目录
dir           # 将dir添加到顶部的目录堆栈，使其成为新的当前工作目录。
```
## 举例

不使用任何参数
``` bash
[root@localhost dev]$ dirs.          #查看目录
/dev/so/sogrey
You have new mail in /var/spool/mail/root
[root@localhost dev]$ pushd          #直接调用pushd，栈顶的两个目录位置切换
/so/dev/sogrey
```
删除最左面的目录
``` bash
[root@localhost wj]$ pushd /etc       #增加目录
/etc/so/dev/sogrey
[root@localhost etc]$                   #位置已经切换
```
移动目录的位置
``` bash
[root@localhost wj]$ dirs.               #查看目录
/etc/so/dev/sogrey
[root@localhost etc]$ pushd -0            #将最右面的移动到栈顶
/sogrey/etc/so/dev
[root@localhost sogrey]$                #成功移动，并且切换位置
```
 


