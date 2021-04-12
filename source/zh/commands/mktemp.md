# mktemp - 创建临时文件供shell脚本使用
mktemp命令 被用来创建临时文件供shell脚本使用。

创建临时文件或者目录，这样的创建方式是安全的。

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
mktemp  [选项]  [TEMPLATE]
```

## 选项

``` bash
-d, --directory         # 创建目录
-u, --dry-run           # 不要创建任何东西，只要打印一个名字（不安全）
-q, --quiet             # 发生错误的时候不显示提示信息
--suffix=SUFF           # 附加SUFF到模板中。SUFF不能包含斜杠。如果模板不以X结尾，则使用此选项。
--tmpdir[=dir]          # 指定临时文件的路径，如果tmpdir后面没有路径，那么使用变量$TMPDIR；如果这个变量也没指定，那么临时文件创建在/tmp目录下。使用此选项，模板不能是绝对名称。与“-t“不同，模板可能包含斜杠，但mktemp只创建最终组件
-p DIR                  # 使用DIR作为前缀
-t                      # 将模板解释为一个相对于目录$TMPDIR(如果设置)的单个文件名组件；否则通过-p指定的目录；或者使用/tmp（-t已经弃用）
TEMPLATE                # 临时文件名，名字中必须包含至少3个字母X。如果没有指定，那么默认是tmp. XXXXXXXXXX

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例



创建临时文件
``` bash
[root@bogon 文档]$ mktemp wj123.XXXX    #名字包含4个X
wj123.kpET
You have new mail in /var/spool/mail/root
[root@bogon 文档]$ mktemp wj123.XXXXXX   #名字包含6个X
wj123.oH2o4P
[root@bogon 文档]$ ls
1.c  wj123.kpET  wj123.oH2o4P
```
创建临时目录
``` bash
[root@bogon 文档]$ mktemp -d wjtp   #名字中没有X
mktemp: 模板"wjtp" 中X 太少
[root@bogon 文档]$ mktemp -d wjtpxxx   #名字中没有X，这里可以看到X必须是大写的
mktemp: 模板"wjtpxxx" 中X 太少
[root@bogon 文档]$ mktemp -d wjtpXXX   #创建成功
wjtpflR
[root@bogon 文档]$ ls -l
总用量 4
-rw-r--r-- 1 root root    0 9月   7 09:11 1.c
-rw------- 1 root root    0 9月   7 14:47 wj123.kpET
-rw------- 1 root root    0 9月   7 14:47 wj123.oH2o4P
drwx------ 2 root root 4096 9月   7 14:50 wjtpflR
```
在/tmp中创建临时文件
``` bash
[root@bogon 文档]$ mktemp --tmpdir wj234.XXX #tmpdir没有指定路径，在tmp下创建
/tmp/wj234.BNy
You have new mail in /var/spool/mail/root
```
在指定目录下创建临时目录
``` bash
[root@bogon 文档]$ mktemp --tmpdir=/weijie wj234.XXX  #在tmpdir指定的路径下创建
/weijie/wj234.q1C
[root@bogon 文档]$ ls
1.c  wj123.kpET  wj123.oH2o4P  wj234.q1C  wjtpflR
```
使用选项-u创建
``` bash
[root@bogon 文档]$ mktemp -u wj123.XXXXXX  #使用-u选项
wj123.dSgIKl
[root@bogon 文档]$ ls     #看不到临时文件
1.c  wj123.kpET  wj123.oH2o4P  wj234.q1C  wjtpflR
```