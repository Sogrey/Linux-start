# od - 输出文件的八进制、十六进制等格式编码的字节

将指定文件的内容以八进制、十进制、十六进制等编码方式显示。

od命令 用于输出文件的八进制、十六进制或其它格式编码的字节，通常用于显示或查看文件中不能直接显示在终端的字符。

常见的文件为文本文件和二进制文件。此命令主要用来查看保存在二进制文件中的值。比如，程序可能输出大量的数据记录，每个数据是一个单精度浮点数。这些数据记录存放在一个文件中，如果想查看下这个数据，这时候od命令就派上用场了。在我看来，od命令主要用来格式化输出文件数据，即对文件中的数据进行无二义性的解释。不管是IEEE754格式的浮点数还是ASCII码，od命令都能按照需求输出它们的值。

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
od  [选项]  file
od  [-abcdfilosx]... [FILE]  [[+]OFFSET[.][b]]
od  --traditional  [OPTION]... [FILE]  [[+]OFFSET[.][b]  [+][LABEL][.][b]]
```

## 选项

``` bash
-A, --address-radix=RADIX   # 设置偏移量的编码单位
-j, --skip-bytes=BYTES      # 跳过指定书目的字符
-N, --read-bytes=BYTES      # 输出指定字符数
-S, --strings[=BYTES]       # 输出至少BYTES个图形字符的字符串
-t, --format=TYPE           # 指定输出格式
-w, --width[=BYTES]         # 设置每一行的最大字数
-v, --output-duplicates     # 显示重复的数据
--traditional               # 接受传统形式的参数

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon newDir3]$ cat test2.txt
123
23
212
[sogrey@bogon newDir3]$ od test2.txt # 以八进制显示
0000000 031061 005063 031462 031012 031061 000012
0000013
[sogrey@bogon newDir3]$ od -t c test2.txt # 以字符方式显示
0000000   1   2   3  \n   2   3  \n   2   1   2  \n
0000013
[sogrey@bogon newDir3]$ od -b test2.txt # 使用单字节八进制解释进行输出，注意左侧的默认地址格式为八字节
0000000 061 062 063 012 062 063 012 062 061 062 012
0000013
[sogrey@bogon newDir3]$ od -c test2.txt # 使用ASCII码进行输出，注意其中包括转义字符
0000000   1   2   3  \n   2   3  \n   2   1   2  \n
0000013
[sogrey@bogon newDir3]$ od -t d1 test2.txt # 使用单字节十进制进行解释
0000000   49   50   51   10   50   51   10   50   49   50   10
0000013
[sogrey@bogon newDir3]$ od -A d -c test2.txt # 设置地址格式为十进制
0000000   1   2   3  \n   2   3  \n   2   1   2  \n
0000011
[sogrey@bogon newDir3]$ od -A x -c test2.txt # 设置地址格式为十六进制
000000   1   2   3  \n   2   3  \n   2   1   2  \n
00000b
[sogrey@bogon newDir3]$ od -j 2 -c test2.txt # 跳过开始的两个字节
0000002   3  \n   2   3  \n   2   1   2  \n
0000013
[sogrey@bogon newDir3]$ od -N 2 -j 2 -c test2.txt # 跳过开始的两个字节，并且仅输出两个字节
0000002   3  \n
0000004
[sogrey@bogon newDir3]$ od -w1 -c test2.txt # 每行仅输出1个字节
0000000   1
0000001   2
0000002   3
0000003  \n
0000004   2
0000005   3
0000006  \n
0000007   2
0000010   1
0000011   2
0000012  \n
0000013
[sogrey@bogon newDir3]$ od -w2 -c test2.txt # 每行仅输出2个字节
0000000   1   2
0000002   3  \n
0000004   2   3
0000006  \n   2
0000010   1   2
0000012  \n
0000013
[sogrey@bogon newDir3]$ od -w3 -c test2.txt # 每行仅输出3个字节
0000000   1   2   3
0000003  \n   2   3
0000006  \n   2   1
0000011   2  \n
0000013
[sogrey@bogon newDir3]$ 
```
