# zip - 可以用来解压缩文件

zip是一种最通用的文件压缩方式，使用于unix、msdos、windows、OS等系统。如果在编译zip时包含bzip 2库，zip现在也支持bzip 2压缩。当将大于4GB的文件添加到存档中时，zip会自动使用Zip 64扩展名，包含Zip 64条目的归档将被更新(如果结果的归档仍然需要Zip 64)，归档的大小将超过4GB，或者当归档中的条目数超过64K时。Zip 64也用于从标准输入中传输的档案，因为事先不知道这些档案的大小，但是选项fz可以用来强制zip创建与PKZIP 2兼容的档案(只要不需要Zip 64扩展)。必须使用PKZIP4.5兼容解压缩，例如解压缩6.0或更高版本，才能使用Zip 64扩展名提取文件。

zip程序将一个或多个压缩文件与有关文件的信息(名称、路径、日期、上次修改的时间、保护和检查信息以验证文件完整性)一起放入一个压缩存档中。可以使用一个命令将整个目录结构打包到zip存档中。对于文本文件来说，压缩比为2：1和3：1是常见的。zip只有一种压缩方法(通缩)，并且可以在不压缩的情况下存储文件。(如果添加了bzip 2支持，zip也可以使用bzip 2压缩，但这些条目需要一个合理的现代解压缩来解压缩。当选择bzip 2压缩时，它将通货紧缩替换为默认方法。)zip会自动为每个要压缩的文件选择更好的两个文件(通缩或存储，如果选择bzip2，则选择bzip2或Store)。

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
zip  [选项]  zipfile  list
```

## 选项

``` bash
-a, --ascii                      # 将系统使用的EBCDIC文件转换为ascii
-A, --adjust-sfx                 # 调整自解压可执行档案。自解压缩的可执行存档是通过将SFX存根放在现有存档的前面创建的。-A选项告诉zip调整存储在归档中的条目偏移量，以考虑到这些“序言”数据。
-b path ,  --temp-path path      # 为临时zip归档使用指定的路径
-B, --binary                     # 使用二进制格式，默认是文本格式
-c, --entry-comments             # 给被压缩的文件加上注释信息
-d, --delete                     # 将指定的文件从压缩文件中删除
-db, --display-bytes             # 显示正在运行的字节计数，显示压缩的字节和要运行的字节。
-dc, --display-counts            # 显示已压缩的条目的运行计数和要运行的条目
-dd, --display-dots              # 在每个条目被拉链时显示点(除了在具有自己的进度指示器的端口上)。见下面的设置点大小-DS。默认情况下，每处理10 MB的输入文件就有一个点。-v选项还显示点(以前的速率比这个高得多，但现在-v也默认为10 MB)，这个速率也是由-ds控制的。
-dg, --display-globaldots        # 显示存档的进度点，而不是为每个文件显示进度点。
-ds size, --dot-size size        # 设置为显示的每个点处理的输入文件的数量。尺寸为nm格式，其中n是一个数字，m是一个乘数。目前m可以是k(KB)，m(MB)，g(GB)，或者t(TB)，所以如果n是100，m是k，那么大小将是100 k，即100 KB。默认值为10 MB。
-du, --display-usize             # 显示每个条目的未压缩大小。
-dv, --display-volume            # 显示正在读取的每个条目的卷(磁盘)号，如果读取现有存档，并将其写入
-D, --no-dir-entries             # 不要在zip存档中为目录创建条目。
-DF, --difference-archive        # 创建一个包含自原始存档创建以来所有新的和已更改的文件的归档文件。
-e, --encrypt                    # 压缩文件加密
-f, --freshen                    # 替代压缩文件中的旧文件，如果文件不存在，那么不会追加文件
-F, --fix, -FF, --fixfix         # 尝试修复已经损坏的压缩文件
-FI, --fifo                      # 通常zip会跳过读取遇到的任何FIFO(命名管道)，因为如果FIFO没有被喂入，zip就会挂起。
-FS, --filesync                  # 将存档的内容与操作系统上的文件同步
-g, --grow                       # 将文件追加到已经存在的压缩文件结尾
-i, --include                    # 仅包含指定的文件
-j, --junk-paths                 # 压缩的时候，忽略文件名中的路径，只保存文件名和内容
-J, --junk-sfx                   # 从存档中删除任何预置的数据
-i, --include                    # 只包含指定的文件 
-la, --log-append                # 附加到现有日志文件。默认值是覆盖
-lf, --logfile-path              # 在给定路径上打开日志文件。默认情况下，该位置的任何现有文件都会被覆盖
-li, --log-info                  # 在日志中包含信息消息，例如正在压缩的文件名。默认情况下，只包含命令行、任何警告和错误以及最终状态。
-L, --license                    # 显示zip的许可证
-m, --move                       # 将指定的文件移动到压缩文件
-MM, --must-match                # 所有输入模式必须至少匹配一个文件，所有找到的输入文件必须是可读的。
-n, --suffixes                   # 不要尝试压缩以给定后缀命名的文件。
-nw, --no-wild                   # 不要执行内部通配符处理。
-o, --latest-time                # 将zip归档的“最后修改”时间设置为在zip归档中的条目中找到的最新(最老的)“最后修改”时间。

-O, --output-file

像往常一样处理归档更改，但不是更新现有存档，而是将新存档输出到输出文件。

-p, --path

将相对文件路径作为存储在存档中的文件名称的一部分

-P, --password

加密

-q, --quite

静默模式，不显示执行过程

-r, --recurse-paths

压缩的时候，递归处理目录

-R, --recurse-patterns

递归遍历目录结构，从当前目录开始。

-s, --split-size

启用创建拆分存档并设置拆分大小

-sb, --split-bell

如果拆分并使用拆分暂停模式，则在zip对每个拆分目标暂停时按下铃声。

-sc, --show-command

显示已处理并退出的启动zip的命令行

-sf, --show-files

显示要操作的文件，然后退出。

-so, --show-options

显示在当前系统上编译的zip支持的所有可用选项

-sp, --split-pause

如果使用-s启用拆分，则启用拆分暂停模式

-su, --show-unicode

和-sf一样，如果存在，还会显示路径的unicode版本

-sU, --show-just-unicode

和-sf一样，仅显示路径的Unicode版本(如果存在)，否则显示路径的标准版本。

-sv, --split-verbose

在拆分时启用各种详细的消息，显示拆分是如何进行的。

-t mmddyyyy, --from-date mmddyyyy

不要对在指定日期之前修改的文件进行操作，其中mm是月份(00-12)，dd是月份的日期(01-31)，yyyy是年。

-T, --test

测试新zip文件的完整性。如果检查失败，旧的zip文件将保持不变，并且(使用-m选项)不会删除输入文件。

-TT, --unzip-command

当使用-T选项时，使用命令cmd而不是“unzip-tqq”来测试存档。

-U, --copy-entries

将条目从一个存档复制到另一个存档。

-u, --update

更新文件，不存在的时候，直接追加。仅当zip存档中的现有条目比zip存档中的版本修改得更近时，才替换(更新)它。

-UN, --unicode

确定zip应该如何处理unicode文件名

-x, --exclude

压缩时不包含指定的文件

-y

压缩时直接保存符号链接

-v, --verbose

显示执行过程

-ws, --wild-stop-dirs

通配符仅在目录级别匹配。

-#

使用指定的数字#调整压缩速度，其中-0表示没有压缩(存储所有文件)，-1表示最快的压缩速度(压缩较少)，-9表示最慢的压缩速度(最佳压缩，忽略后缀列表)。默认的压缩级别是-6

-@, --names-stdin

从标准输入中获取输入文件列表。每行只有一个文件名。

-h2, --more-help

显示扩展帮助，包括更多关于命令行格式、模式匹配和更模糊的选项。

-?, -h, --help                   # 显示帮助文档
-V, --version                    # 显示命令版本信息
```
## 模式匹配

- `?`，匹配任意单个字符
- `*`，匹配任意多个字符
- `[]`匹配括号内所示范围内的任何字符(例如：[a-f]，[0-9])。

## 退出码

- 0，正常，没有错误。
- 2，压缩文件的意外结束。
- 3，检测到zip文件格式中的通用错误。
- 4，在程序初始化期间，zip无法为一个或多个缓冲区分配内存。
- 5，检测到zip文件格式出现严重错误。
- 6，条目太大，无法处理(例如，不使用Zip 64或试图读取现有存档太大时，输入文件大于2GB)或条目太大，不能用zip拆分。
- 7，无效注释格式。
- 8，zip-T失败或内存不足。
- 9，用户使用Control-C(或类似的)过早中止zip。
- 10，使用临时文件时，zip遇到了一个错误。
- 11，读取或查找错误。
- 12，zip无事可做。
- 13，丢失或空压缩文件。
- 14，写入文件时出错。
- 15，zip无法创建要写入的文件。
- 16，坏命令行参数。
- 18，zip无法打开要读取的指定文件。
- 19，在此系统中不支持的选项编译了zip。
## 例子代码
创建存档stuff.zip(假设它不存在)，并以压缩形式将所有文件放在当前目录中(.zip后缀自动添加，除非存档名称已经包含一个点；这允许明确说明其他后缀)。
``` bash
zip  stuff  *
zip  stuff  .* *
```
压缩整个目录。创建存档foo.zip，其中包含当前目录中包含的目录foo中的所有文件和目录。
``` bash
zip  -r  foo  foo
```
您可能希望创建一个包含foo中文件的zip存档，而不记录目录名foo。可以使用-j选项关闭路径，如
``` bash
zip  -j  foo  foo/*
```
如果您缺少磁盘空间，您可能没有足够的空间来保存原始目录和相应的压缩归档文件。在这种情况下，您可以使用-m选项分步骤创建归档文件。如果foo包含子目录Tom、Dick和Harry。其中，第一个命令创建foo.zip，下两个命令添加到其中。在完成每个zip命令后，最后创建的归档文件将被删除，为下一个zip命令提供工作空间。
``` bash
zip  -rm  foo  foo/tom
zip  -rm  foo  foo/dick
zip  -rm  foo  foo/harry
```
使用-s设置拆分大小并创建拆分存档。大小可选地被k(KB)、m(MB)、g(Gb)或t(Tb)之一跟随。创建目录foo的拆分存档，每个分区不大于2GB。如果foo包含5 GB的内容，并且内容未经压缩就存储在拆分存档中(为了使这个示例变得简单)，这将创建三个分块，分别是2GB的split.z01、2GB的split.z02和略高于1GB的split.zip。
``` bash
zip  -s  2g  -r  split.zip  foo
```
虽然zip不更新拆分档案，但zip提供了新的选项-O(-Output-file)，允许更新拆分档案并将其保存在新的存档中。读取归档文件，即使拆分，也会添加foo.c和bar.c文件，并将结果存档写入outArchive.zip。如果inArchive.zip是拆分的，那么outArchive.zip默认为相同的拆分大小。请注意，outArchive.zip和使用它创建的任何拆分文件都会在没有警告的情况下被覆盖。这种情况将来可能会改变。
``` bash
zip  inarchive.zip  foo.c  bar.c  --out  outarchive.zip
```

将/home/Blinux/html/这个目录下所有文件和文件夹打包为当前目录下的html.zip：
``` bash
zip -q -r html.zip /home/Blinux/html
```
上面的命令操作是将绝对地址的文件及文件夹进行压缩，以下给出压缩相对路径目录，比如目前在Bliux这个目录下，执行以下操作可以达到以上同样的效果：
``` bash
zip -q -r html.zip html
```
比如现在我的html目录下，我操作的zip压缩命令是：
``` bash
zip -q -r html.zip *
```
压缩 example/basic/ 目录内容到 basic.zip 压缩包中 -x 指定排除目录，注意没有双引号将不起作用。
``` bash
zip -r basic.zip example/basic/ -x "example/basic/node_modules/*" -x "example/basic/build/*" -x "example/basic/coverage/*"
```
上面压缩解压出来，内容存放在 example/basic/， 如果想存放到根目录，进入目录进行压缩，目前没有找到一个合适的参数来解决此问题。
``` bash
cd example/basic/ && zip -r basic.zip . -x "node_modules/*" -x "build/*" -x "coverage/*"
```
压缩效率选择:
``` bash
zip -9 # 1-9 faster->better
```
创建 public_html 目录下忽略所有文件和文件夹，排除包括文本 backup 的所有文件。
``` bash
$ zip -r public_html.zip public_html -x *backup*
```
httpdocs 目录忽略 .svn 文件或 git 的文件和目录下创建所有文件的归档。
``` bash
$ zip -r httpdocs.zip httpdocs --exclude *.svn* --exclude *.git*
```
httpdocs 目录忽略的所有文件，并与 .log 结尾的目录下创建所有文件的归档。
``` bash
$ zip -r httpdocs.zip httpdocs --exclude "*.log"
```
## 举例

压缩文件
``` bash
[sogrey@bogon 文档]$ ls
1.c  2.c  3.c  file1.txt.gz  file2.txt  list.txt  run.sh
[sogrey@bogon 文档]$ zip -r res . -i *.c #压缩当前目录下的所有.c文件
  adding: 2.c (stored 0%)
  adding: 3.c (stored 0%)
  adding: 1.c (stored 0%)
[sogrey@bogon 文档]$ ls
1.c  2.c  3.c  file1.txt.gz  file2.txt  list.txt  res.zip  run.sh
[sogrey@bogon 文档]$ 
```
2）给压缩文件添加、删除内容
``` bash
[sogrey@bogon 文档]$ zip res.zip -g file2.txt #追加file2.txt
  adding: file2.txt (deflated 28%)
[sogrey@bogon 文档]$ ls
1.c  2.c  3.c  file1.txt.gz  file2.txt  list.txt  res.zip  run.sh
[sogrey@bogon 文档]$ zip res.zip -d file2.txt #删除file2.txt
deleting: file2.txt
[sogrey@bogon 文档]$ 
```
3）压缩时设置密码
``` bash
[sogrey@bogon 文档]$ zip -er res2 . -i *.c #设置密码，需要输入两次密码
Enter password: 
Verify password: 
  adding: 2.c (stored 0%)
  adding: 3.c (stored 0%)
  adding: 1.c (stored 0%)
[sogrey@bogon 文档]$ 
```

## 安装

CentOS：
``` bash
yum install -y unzip zip
```