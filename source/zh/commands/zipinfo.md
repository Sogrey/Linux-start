# zipinfo - 用来列出压缩文件信息
在不解压的情况下，获取zip压缩文件的的详细信息。zipinfo列出了ZIP档案中有关文件的技术信息，最常见的是在MS-DOS系统上。这些信息包括文件访问权限、加密状态、压缩类型、版本和操作系统或压缩程序的文件系统等。默认的行为(没有选项)是列出存档中每个文件的单线条目，标题和拖车行为整个归档提供摘要信息。格式是Unix‘ls-l’和‘unzip-v’输出之间的交叉。见下文的详细说明。请注意，zipinfo与解压缩程序相同(在Unix下，链接到它)；然而，在某些系统上，在解压缩编译时可能忽略了zipinfo支持。

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
zipinfo  [-12smlvhMtTz]  file[.zip]  [file(s) ...]  [-x xfile(s) ...]
```

## 选项
``` bash
file[.zip]        # ZIP存档的路径。如果文件规范是通配符，则按操作系统(或文件系统)确定的顺序处理每个匹配的文件。只有文件名可以是通配符；路径本身不能。通配符表达式类似于unix egrep(1)(正则)表达式，可能包含
[file(s)]         # 要处理的归档成员的可选列表，用空格分隔。(用VMSCLI定义的VMS版本必须用逗号分隔文件。)正则表达式(通配符)可用于匹配多个成员；参见上文。同样，请务必引用否则将由操作系统展开或修改的表达式。
[-x xfile(s)]     # 要排除在处理之外的归档成员的可选列表。
```
``` bash
-1               # 只列出文件名称
-2               # 和“-1”类似，但是可以单配其他选项“-h”、-i”、-z”
-s               # 类似“ls –l”的短格式
-m               # 类似“ls -l”的medium格式
-l               # 类似“ls -l”的长格式
-v               # 显示zip文件的详细信息
-h               # 只列出压缩包的文件名、大小、包内文件数目
-M               # 类似more命令，分屏显示
-t               # 列出压缩文件内的文件数目、压缩前后文件大小、压缩率
-T               # 将压缩包内文件的日期以年、月、日、时、分、秒的顺序列出
-z               # 显示压缩文件的注释信息

--help           # 显示帮助文档
--version        # 显示命令版本信息
```
## 用例

要获得包含头行和总计行的ZIP存档Storage.zip的完整内容的基本的、简短的列表，只使用归档名称作为zipinfo的参数。
``` bash
zipinfo  storage
```
要生成一个基本的、长格式的列表(而不是冗长的)，包括标题和总计行，请使用-l：
``` bash
zipinfo  -l  storage
```
要列出没有标题和总计行的存档的完整内容，可以忽略-h和-t选项，或者显式地指定内容：
``` bash
zipinfo  --h-t  storage
zipinfo  storage  \*
```
默认情况下，若要关闭汇总行，请使用环境变量(此处假定为C shell)：
``` bash
setenv  ZIPINFO  --t
zipinfo  storage
```
为了再次获得第一个示例的完整、简短的列表，考虑到前面示例中设置了环境变量，有必要显式地指定-s选项，因为-t选项本身意味着只打印页脚行
``` bash
setenv  ZIPINFO  --t
zipinfo  -t  storage            [only totals line]
zipinfo  -st  storage           [full listing]  
```
若要以中等格式列出存档中单个文件的信息，请显式指定文件名。
``` bash
zipinfo  -m  storage  unshrink.c
```
任何成员文件的规范都将覆盖默认的标头和总计行；将只打印有关请求文件的一行信息。这是在请求有关单个文件的信息时所期望的直观结果。对于多个文件，了解总的压缩和未压缩大小通常是有用的；在这种情况下，可以显式地指定-t：
``` bash
zipinfo  -mt  storage  "*.[ch]"  Mak\*
```
要获取有关ZIP存档的最大信息，请使用详细选项。如果操作系统允许，通常明智的做法是将输出输送到Unix More(1)这样的过滤器中：
``` bash
zipinfo  -v  storage | more
```
要查看存档中最近修改的文件，请结合外部排序实用程序(如Unix Sort(1)和sed(1)使用-T选项
``` bash
zipinfo  -T  storage | sort  –nr  -k  7 | sed  15q
```

## 举例

``` bash
[sogrey@bogon 文档]$ ll
总用量 24
-rw-------. 1 sogrey sogrey   0 3月   9 00:44 1.c
-rw-------. 1 sogrey sogrey   0 3月   9 00:44 2.c
-rw-------. 1 sogrey sogrey   0 3月   9 00:44 3.c
-rw-------. 1 sogrey sogrey 337 3月   8 23:50 file1.txt.gz
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rw-------. 1 sogrey sogrey  12 3月   9 00:43 list.txt
-rw-------. 1 sogrey sogrey 508 3月  11 00:05 res2.zip
-rw-------. 1 sogrey sogrey 424 3月  11 00:04 res.zip
-rwx------. 1 sogrey sogrey  90 3月   9 00:23 run.sh
[sogrey@bogon 文档]$ zipinfo res.zip # 查看压缩包内文件信息
Archive:  res.zip
Zip file size: 424 bytes, number of entries: 3
-rw-------  3.0 unx        0 bx stor 21-Mar-09 00:44 2.c
-rw-------  3.0 unx        0 bx stor 21-Mar-09 00:44 3.c
-rw-------  3.0 unx        0 bx stor 21-Mar-09 00:44 1.c
3 files, 0 bytes uncompressed, 0 bytes compressed:  0.0%
```
``` bash
[sogrey@bogon 文档]$ zipinfo -h res.zip # 只显示压缩包大小、文件数目
Archive:  res.zip
Zip file size: 424 bytes, number of entries: 3
[sogrey@bogon 文档]$ 
```
