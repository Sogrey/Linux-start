# ed - 简单的单行文本编辑程序

ed是简单的单行文本编辑程序，一次只能编辑一行。Ed有两种工作模式，命令模式和输入模式。在输入模式下输入“.”并按下回车就可以回到命令模式。


内置命令：
``` bash
a         # 进入输入模式，在最后一行之后输入新内容
c         # 进入输入模式，输入内容替代最后一行
i         # 进入输入模式，在当前行之前加入新行输入内容
d         # 删除最后一行
n         # 显示最后一行的行号和内容
w         # 保存，可指定文件名
q         # 退出
```

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
ed  [-GVhs]  [-p string]  file
```

## 选项

``` bash
--version     # 显示命令版本信息
--help        # 显示帮助文档
-G            # 与老版本兼容
-p string     # 指定命令模式的提示符
-s            # 打开文件时不执行检查功能
```

## 举例

``` bash
[sogrey@bogon demo4]$ cat test.txt # 查看内容
eeeiee eeiee
[sogrey@bogon demo4]$ ed test.txt  # 编辑文件
13                                 # 显示文件字节数
a                                  # 输入命令a，进入输入模式
hello world!                       # 输入内容
.                                  # 输入“.”，并回车，回到命令模式
w                                  # 输入命令w，保存文件
26                                 # 显示字节数
q                                  # 输入命令q，退出编辑
[sogrey@bogon demo4]$ cat test.txt
eeeiee eeiee
hello world!
[sogrey@bogon demo4]$ 

```
