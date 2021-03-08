# gzip - 用来压缩文件
gzip命令 用来压缩文件。gzip是个使用广泛的压缩程序，文件经它压缩过后，其名称后面会多处“.gz”扩展名。

gzip是在Linux系统中经常使用的一个对文件进行压缩和解压缩的命令，既方便又好用。gzip不仅可以用来压缩大的、较少使用的文件以节省磁盘空间，还可以和tar命令一起构成Linux操作系统中比较流行的压缩文件格式。据统计，gzip命令对文本文件有60%～70%的压缩率。减少文件大小有两个明显的好处，一是可以减少存储空间，二是通过网络传输文件时，可以减少传输的时间。

gzip通过Lempel-ziv算法来压缩文件，压缩的时候保留每个文件的所有者、权限、修改时间。对于符号链接，gzip将会忽略它。

如果压缩的文件名对其文件系统来说太长，则gzip将截断它。Gzip试图只截断文件名中超过3个字符的部分。(部分由点分隔。)如果名称仅由小部件组成，最长的部分将被截断。例如，如果文件名限制为14个字符，则“gzip.msdos.exe”压缩为“gzi.msd.exe.gz”。在没有文件名长度限制的系统中，名称不会被截断。

默认情况下，gzip将原始文件名和时间戳保存在压缩文件中。这些在使用“-N”选项解压缩文件时使用。当压缩文件名被截断或文件传输后没有保留时间戳时，这是非常有用的。压缩文件可以使用“gzip –d”或“gunzip”或“zcat”恢复到它们的原始形式。如果保存在压缩文件中的原始名称不适合其文件系统，则从原始文件中构造新名称以使其合法。

gunzip在其命令行中获取一个文件列表，并替换其名称以.gz、-z、-z、_z或.z结尾的每个文件，该文件以正确的魔术号开头，文件的未压缩文件没有原来的扩展名。gunzip还将特殊的扩展名.tgz和.taz分别识别为.tar.gz和.tar.z的缩写。压缩时，gzip在必要时使用.tgz扩展名，而不是截断扩展名为.tar的文件。

gunzip目前可以解压缩由gzip，zip，compress-H或Pack创建的文件.输入格式的检测是自动的。当使用前两种格式时，gunzip检查32位CRC。对于包，枪拉链检查未压缩长度。标准压缩格式的设计不是为了允许一致性检查。然而，gunzip有时能够检测到一个坏的.z文件。如果在解压缩.z文件时出现错误，请不要仅仅因为标准解压缩不抱怨而认为.Z文件是正确的。这通常意味着标准解压缩不检查其输入，并愉快地生成垃圾输出。上海合作组织压缩-H格式(lzh压缩方法)不包括一个CRC，但也允许一些一致性检查。

由zip创建的文件只有在使用“通缩”方法压缩单个成员的情况下才能被gzip解压缩。此特性仅用于帮助将tar.zip文件转换为tar.gz格式。要使用单个成员提取zip文件，可以使用诸如“gunzip  <  foo.zip”或“gunzip  –S  .zip  foo.zip”之类的命令。要提取包含多个成员的zip文件，请使用解压缩而不是gunzip。

Zcat和“gunzip  –c”是一样的。(在某些系统上，可以将zcat安装为gzcat，以保留原始链接以进行压缩。)zcat解压缩命令行上的文件列表或其标准输入，并将未压缩的数据写入标准输出。无论是否有.gz后缀，zcat都会解压缩具有正确魔术号的文件。

Gzip使用用于zip和PKZIP的Lempel-Ziv算法。获得的压缩量取决于输入的大小和常用子字符串的分布。通常，像源代码或英语这样的文本会减少60-70%.压缩通常比LZW(用于压缩)、Huffman编码(用于Pack)或自适应Huffman编码(紧凑)要好得多。

压缩总是被执行，即使压缩文件比原始文件稍大。最坏的情况是gzip文件头的几个字节，加上每32K块5个字节，或者大文件的扩展率为0.015%。注意，使用过的磁盘块的实际数量几乎从未增加。gzip在压缩或解压缩时保留文件的模式、所有权和时间戳。

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
gzip  [ -acdfhlLnNrtvV19 ]  [-S suffix]  [ name ...  ]
```

## 选项

``` bash
-a, --ascii                    # 文本模式，只适用于某些系统
-c, --stdout, --to-stdout      # 将解压文件写到标准输出，源文件不变。如果有多个输入文件，则输出由一系列独立压缩的成员组成。为了获得更好的压缩，在压缩所有输入文件之前先将它们连接起来。
-d, --decompress, --uncompress # 解压
-f, --force                    # 强制执行
-l, --list                     # 对于每一个压缩的文件，列出压缩文件大小、解压大小、压缩比列、压缩前的文件名字 
-L, --license                  # 列出gzip的许可证
-n, --no-name                  # 压缩文件的时候，不保留原始文件名字和时间属性
-N, --name                     # 压缩的时候，保留原始文件和时间属性
-q, --quite                    # 跳过所有的警告信息
-r, --recursive                # 递归压缩子目录
-S,.suf, --suffix, .suf        # 指定压缩文件后缀。压缩时，使用后缀.suf代替.gz。可以提供任何非空后缀，但应避免使用.z和.gz以外的后缀，以避免文件传输到其他系统时出现混淆。
-t, --test                     # 测试
-v, --verbose                  # 显示执行过程
-num, --fast, --best           # 使用指定的数字num调整压缩速度，其中-1或--fast表示最快的压缩方法(较小的压缩)和-9或--best表示最慢的压缩方法(最佳压缩)。默认的压缩级别是-6(也就是说，以牺牲速度为代价倾向于高压缩)。

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 环境变量
环境变量GZIP可以保存gzip的一组默认选项。这些选项首先被解释，可以被显式命令行参数覆盖。例如
```
for sh:    GZIP="-8v --name"; export GZIP
for csh:   setenv GZIP "-8v --name"
for MSDOS: set GZIP=-8v --name
```
在VAX/VMS上，环境变量的名称为GZIP_OPT，以避免与用于调用程序的符号设置冲突。
## 举例

``` bash
[sogrey@bogon 文档]$ ll
总用量 12
-rw-------. 1 sogrey sogrey 415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rwx------. 1 sogrey sogrey  90 3月   7 12:08 run.sh
[sogrey@bogon 文档]$ cat file1.txt 
报道称，7日上午，近3000人身穿白衣，祈求上天降甘霖，其中台湾“农田水利署”台中管理处长陈荣福也出席参加。参加祈雨仪式的民众都穿白上衣，随着法师诵经跪拜，直到2个小时仪式结束。台湾“农委会主委”陈吉仲称，农田水利会过去也有这样的祈雨习俗，现已积极调整耕作制度，以因应极端气候的威胁。
[sogrey@bogon 文档]$ cat file2.txt 
国民党“立委”赖士葆表示，干旱不雨，担心科技业没水用，“要凿井取水”、要办祈雨法会求助神明解决水荒，政府却毫无专业管理能力来解决问题。台湾的降雨量是世界（平均值）的2.6倍，反观以色列一年只降雨三十天，“为何可以在干旱的沙漠创造农业奇迹？”赖士葆表示，借此可窥知什么是有效能的治理。

也有岛内网友讽刺民进党当局，“这个‘政府’竟然有办法搞到只剩乞求神明保佑这招了…怎么有办法无能至此…”↓
[sogrey@bogon 文档]$ gzip -c file1.txt > FILE.gz # 压缩
[sogrey@bogon 文档]$ gzip -c file2.txt >> FILE.gz # 可以连接多个压缩文件
[sogrey@bogon 文档]$ gunzip -c FILE # 等价于cat file1 file2
报道称，7日上午，近3000人身穿白衣，祈求上天降甘霖，其中台湾“农田水利署”台中管理处长陈荣福也出席参加。参加祈雨仪式的民众都穿白上衣，随着法师诵经跪拜，直到2个小时仪式结束。台湾“农委会主委”陈吉仲称，农田水利会过去也有这样的祈雨习俗，现已积极调整耕作制度，以因应极端气候的威胁。
国民党“立委”赖士葆表示，干旱不雨，担心科技业没水用，“要凿井取水”、要办祈雨法会求助神明解决水荒，政府却毫无专业管理能力来解决问题。台湾的降雨量是世界（平均值）的2.6倍，反观以色列一年只降雨三十天，“为何可以在干旱的沙漠创造农业奇迹？”赖士葆表示，借此可窥知什么是有效能的治理。

也有岛内网友讽刺民进党当局，“这个‘政府’竟然有办法搞到只剩乞求神明保佑这招了…怎么有办法无能至此…”↓
[sogrey@bogon 文档]$ ll
总用量 16
-rw-------. 1 sogrey sogrey 415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rw-------. 1 sogrey sogrey 782 3月   8 23:54 FILE.gz
-rwx------. 1 sogrey sogrey  90 3月   7 12:08 run.sh
[sogrey@bogon 文档]$ cat file1.txt file2.txt | gzip > FOO.gz # 通过一次压缩所有成员来获得更好的压缩
[sogrey@bogon 文档]$ ll
总用量 20
-rw-------. 1 sogrey sogrey 415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rw-------. 1 sogrey sogrey 782 3月   8 23:54 FILE.gz
-rw-------. 1 sogrey sogrey 682 3月   8 23:59 FOO.gz
-rwx------. 1 sogrey sogrey  90 3月   7 12:08 run.sh
[sogrey@bogon 文档]$ 
```
如果您想要重新压缩连接的文件以获得更好的压缩
``` bash
[sogrey@bogon 文档]$ gzip -cd old.gz | gzip > new.gz # 想要重新压缩连接的文件以获得更好的压缩
```
如果需要所有成员的未压缩大小
``` bash
[sogrey@bogon 文档]$ ll
总用量 20
-rw-------. 1 sogrey sogrey 415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rw-------. 1 sogrey sogrey 782 3月   8 23:54 FILE.gz
-rw-------. 1 sogrey sogrey 682 3月   8 23:59 FOO.gz
-rwx------. 1 sogrey sogrey  90 3月   7 12:08 run.sh
[sogrey@bogon 文档]$ gzip -cd FOO.gz | wc -c
991
[sogrey@bogon 文档]$ 
```
如果希望创建一个包含多个成员的单个归档文件，以便以后可以独立提取成员，请使用一个归档程序(如tar或zip)。GNUtar支持-z选项来透明地调用gzip。gzip是作为tar的补充，而不是替代。

**压缩文件**
``` bash
[sogrey@bogon 文档]$ ll
总用量 12
-rw-------. 1 sogrey sogrey 415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rwx------. 1 sogrey sogrey  90 3月   7 12:08 run.sh
[sogrey@bogon 文档]$ gzip file1.txt 
[sogrey@bogon 文档]$ ll
总用量 12
-rw-------. 1 sogrey sogrey 337 3月   8 23:50 file1.txt.gz
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rwx------. 1 sogrey sogrey  90 3月   7 12:08 run.sh
```
**解压**
``` bash
[sogrey@bogon 文档]$ gzip -ld file1.txt.gz # 解压文件
         compressed        uncompressed  ratio uncompressed_name
                337                 415  25.5% file1.txt
[sogrey@bogon 文档]$ gzip -dv * # 解压每个压缩的文件
file1.txt.gz:	 25.5% -- replaced with file1.txt
gzip: file2.txt: unknown suffix -- ignored
gzip: run.sh: unknown suffix -- ignored
[sogrey@bogon 文档]$ ll
总用量 12
-rw-------. 1 sogrey sogrey 415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rwx------. 1 sogrey sogrey  90 3月   7 12:08 run.sh
[sogrey@bogon 文档]$ 
```

**其他**

把test6目录下的每个文件压缩成.gz文件
``` bash
gzip *
```
把上例中每个压缩的文件解压，并列出详细的信息
``` bash
gzip -dv *
```
详细显示例1中每个压缩的文件的信息，并不解压
``` bash
gzip -l *
```
压缩一个tar备份文件，此时压缩文件的扩展名为.tar.gz
``` bash
gzip -r log.tar
```
递归的压缩目录
``` bash
gzip -rv test6
```
这样，所有test下面的文件都变成了*.gz，目录依然存在只是目录里面的文件相应变成了*.gz.这就是压缩，和打包不同。因为是对目录操作，所以需要加上-r选项，这样也可以对子目录进行递归了。

递归地解压目录
``` bash
gzip -dr test6
```
保留原始文件，把压缩/解压流重定向到新文件
``` bash
gzip -c aa > aa.gz
gzip -dc bb.gz > bb
```



