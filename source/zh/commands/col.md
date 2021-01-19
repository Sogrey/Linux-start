# col - 过滤控制字符

col命令 是一个标准输入文本过滤器，它从标注输入设备读取文本内容，并把内容显示到标注输出设备。在许多UNIX说明文件里，都有RLF控制字符。当我们运用shell特殊字符>和>>，把说明文件的内容输出成纯文本文件时，控制字符会变成乱码，col命令则能有效滤除这些控制字符。

过滤掉影响阅读的控制字符，使用重定向符把说明手册的内容输出到文本文件时，控制字符就成乱码。col指令可以过滤掉控制字符，使文本可读。col从标砖输入读取内容，输出到标准输出。col在读取字符时跟踪字符集，并确保字符集在输出时是正确的。如果输入试图备份到最后一条刷新行，col将显示一条警告消息。

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
col  [-bfpx]  [-lnum]  file
```

## 选项

``` bash
-b              # 过滤所有的控制字符
-f              # 过滤掉RLF字符，忽略HRLF字符
-p              # 忽略未知的控制字符
-x              # 将多个空格用tab代替
-lnum           # 设置缓冲区大小，默认128行

--help          # 显示帮助文档
--version       # 显示命令版本信息
```

## 举例

``` bash
[sogrey@bogon demo4]$ man 
您需要什么手册页？
[sogrey@bogon demo4]$ man col
[sogrey@bogon demo4]$ man col > col.txt # 将手册从定向到文件
<standard input>:58: warning [p 1, 2.0i]: cannot adjust line
<standard input>:74: warning [p 1, 3.5i]: cannot adjust line
[sogrey@bogon demo4]$ ls
col.txt  hello.txt  test2.txt
[sogrey@bogon demo4]$ cat col.txt
col(1)                         General Commands Manual                        col(1)



NAME(名
       col - 过滤掉输入中的反向换行符

SYNOPSIS(总
       col [ -bfx ] [ -l num ]

DESCRIPTION(描
       col   过滤掉反向(以及半反向)换行符(LF:   line   feed   or   NL:   new  line),
       这样输出按正常顺序，即只包括正向和半正向换行符,
       而且在可能的地方使用tab替换白空格.这对 nroff(1) 和 tbl(1) 的输出处理很有用处.

       col 从标准输出读入,并写出到标准输出上.

       选项如下:

       -b     不输出任何退格符,在每列的位置上只打印最后写的那个字符.

       -f     允许正向半换行符(``fine''模式).
              通常,处于半行分界线上的字符打印在下一行.

       -x     输出多个空格以替换tab.

       -l num 在内存中至少缓冲 num 行.  默认情况下,缓冲128行.

       col 所能理解的用于回车操作的控制序列以及它们的十进制值都列在下面的表中:

       ESC-7  反向换行符(escape后接7)

       ESC-8  反向半换行符(escape后接8)

       ESC-9  正向半换行符(escape后接9)

       backspace
              反向移动一列(8);在第一列则忽略.

       carriage return
              (13)

       newline
              正向换行符(10);同时执行回车(carriage return)操作

       shift in
              转到正常字符集(15)

       shift out
              转到备选的字符集(14)

       space  正向移动一列(32)

       tab    正向移动到下一个tab(9)

       vertical tab
              反向换行符(11)

       丢弃所有不被承认的控制字符和escape序列.

       当读取字符时, col 保持着与字符集的联系,而且在输出时确保字符集是正确的.

       如果输入设备试图回复到最近被刷新的行, col 会显示一条警告消息.

SEE ALSO(另
       expand(1) nroff(1) tbl(1)

HISTORY(历
       col 命令出现于AT&T UNIX版本6.

[中
       riser <boomer@ccidnet.com>

[中
       2000/12/6

《
       http://cmpp.linuxforum.net



COL 1                               1991年6月17日                             col(1)
[sogrey@bogon demo4]$ 
```
