# tar - 将许多文件一起保存至一个单独的磁带或磁盘归档，并能从归档中单独还原所需文件

创建归档、解压或者压缩文件。

tar命令 可以为linux的文件和目录创建档案。利用tar，可以为某一特定文件创建档案（备份文件），也可以在档案中改变文件，或者向档案中加入新的文件。tar最初被用来在磁带上创建档案，现在，用户可以在任何设备上创建档案。利用tar命令，可以把一大堆的文件和目录全部打包成一个文件，这对于备份文件或将几个文件组合成为一个文件以便于网络传输是非常有用的。

首先要弄清两个概念：打包和压缩。打包是指将一大堆文件或目录变成一个总的文件；压缩则是将一个大的文件通过一些压缩算法变成一个小文件。

为什么要区分这两个概念呢？这源于Linux中很多压缩程序只能针对一个文件进行压缩，这样当你想要压缩一大堆文件时，你得先将这一大堆文件先打成一个包（tar命令），然后再用压缩程序进行压缩（gzip bzip2命令）。

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
tar  [选项]  文件
```

## 选项

``` bash
-A, --catenate, --concatenate   # 在归档最后追加tar文件
-c, --create                    # 创建归档
-d, --diff, --compare           # 查找归档和文件系统之间的差异
--delete                        # 从档案中删除(不是在磁带上！)
-f file                         # 指定归档名字
-r, --append                    # 在归档的最后追加文件
-t, --list                      # 列出归档的文件列表
--telst-label                   # 测试存档卷标签并退出
-u, --update                    # 只有文件比归档中的内容新的时候，才会追加
-x, --extract, --get            # 从归档中释放文件
-C dir ,  --directory=DIR       # 更改工作目录
-j, --bzip2                     # 从bzip2中解压或者压缩
-J, -xz                         # 通过xz过滤存档
-p, --preserve-permissions      # 提取有关文件权限的信息(超级用户默认)
-z, --gzip                      # 从gzip中解压或者压缩
-v, --verbose                   # 显示详细信息


--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

操作修饰符

``` bash
--check-device

创建增量档案时检查设备编号(默认)

-g, --listed-incremental=FILE

处理新的GNU格式增量备份

-G, --incremental

处理旧的GNU格式增量备份

--ignore-failed-read

不要在不可读文件上使用非零退出

--level=NUMBER

创建列表的转储级别-增量存档

-n, --seek

档案是可查找的

--no-check-device

创建增量档案时不检查设备编号

--no-seek

档案是不可寻的

--occurrence[=NUMBER]

只处理存档中每个文件的第NUMBER次出现的文件；此选项仅与--delete、--diff、--extract、--list一起使用时有效，以及在命令行上或通过-T选项给出的文件列表有效；数字默认值为1。

--sparse-version=MAJOR[.MINOR]

将稀疏格式的版本

-S, --sparse

有效处理稀疏文件
```

覆盖控制

``` bash
-k | --keep-old-files

解压缩时不要替换现有文件，将它们视为错误

--skip-old-files

解压缩时不要替换现有文件，请悄悄跳过它们

--keep-newer-files

不要替换比其存档副本更新的现有文件

--no-overwrite-dir

保存现有目录的元数据

--overwrite

解压时替换现有的文件

--overwrite-dir

提取时覆盖现有目录的元数据(默认)

--recursive-unlink

提取目录之前的空层次结构

--remove-files

将文件添加到存档后删除它们

-U | --unlink-first

在提取每个文件之前删除它。

-W | --verify

在编写存档后尝试验证它
```
选择输出流
``` bash
--ignore-command-error

忽略子级退出代码

--no-ignore-command-error

将子级的非零退出码视为错误

-O, --to-stdout

将文件解压缩到标准输出

--to-command=COMMAND

将文件解压缩到另一个处理文件属性的程序。

--acls

将ACLs保存到存档中

--atime-preserve[=METHOD]

保留转储文件的访问时间，方法是在读取后恢复时间(METHOD=’replace’；默认值)，或者不首先设置时间(METHOD=’system’)

--delay-directory-restore

将已提取目录的设置修改时间和权限延迟到提取结束

--group=NAME

强制NAME作为添加文件的组

--mode=CHANGES

强制(符号) 添加的文件的模式为CHANGES

--mtime=DATE-OR-FILE

设置文件的mtime

-m, --touch

不要提取文件修改时间

--no-acls

不要从存档中提取ACLs

--no-delay-directory-restore

取消选项“--delay-directory-restore”

--no-same-owner

自解压缩文件(普通用户默认)

--no-same-permissions

从存档提取权限时应用用户的umask(普通用户默认)

--no-selinux

不要提取SELinux上下文

--no-xattrs

不要从归档文件中提取用户/root的xatts

--numeric-owner

始终使用数字作为用户名/组名。

--owner=NAME

强制NAME作为添加文件的所有者

-p, --preserve-permissions, --same-permissions

提取有关文件权限的信息(超级用户默认)

--preserve

同时具备“-p”和“-s”选项

--same-owner

尝试提取与存档中存在的所有权相同的文件(默认为超级用户)。

-s | --preserve-order | --same-order

排序要提取的名称以匹配存档

--selinux

保存SELinux上下文到存档

-xattrs

保存用户/rootd xattrs到存档
```

设备选择和切换

``` bash
-f | --file=ARCHIVE

使用存档文件或设备ARCHIVE

--force-local

存档文件是本地的，即使它有冒号。

-F

--info-script=NAME

--new-volume-script=NAME

在每个磁带的末尾运行脚本

L | --tape-length=NUMBER

在写入NUMBERx1024字节后更改磁带

-M | --multi-volume

创建/列表/提取多卷存档

--rmt-command=COMMAND

使用给定的rmt命令代替rmt

--rsh-command=COMMAND

使用给定的远程命令代替rsh

--volno-file=FILE

使用/更新文件中的卷号
```
设备块
``` bash
-b | --blocking-factor=BLOCKS

每个记录BLOCKSx512个字节

-B | --read-full-records

重新定义block大小

-i | --ignore-zeros

忽略归档中的零块(意为EOF)

--record-size=NUMBER

每个记录NUMBER字节，倍数为512
```
归档格式选择
``` bash
-H | --format=FORMAT

使用给定的格式创建归档，格式可以是：

gnu，GNU tar 1.13.x格式

oldgnu，按tar<=1.12表示的GNU格式

pax，POSIX 1003.1-2001 (pax)格式

posix，和pax一样

ustar，POSIX 1003.1-1988 (ustar)格式

v7，旧的v7 tar格式

--old-archive | --portability

等价于“--format=v7”

--pax-option=

keyword[[:]=value][,keyword[[:]=value]]...

控制pax关键字

--posix

等价于“--format=posix”

V | --label=TEXT

使用卷名TEXT创建存档；在列表/解压缩时，使用TEXT作为卷名的全局模式
```
压缩选项
``` bash
-a | --auto-compress

使用归档后缀确定压缩程序

-I | --use-compress-program=PROG

通过PROG过滤(必须接受-d)

-j | --bzip2

通过bzip2过滤存档

-J | --xz

通过xz过滤存档

--lzip

通过lzip过滤存档

--lzma

通过lzma过滤存档

--lzop | --no-auto-compress

不要使用归档后缀来确定压缩程序。

-z | --gzip | --gunzip | --ungzip

通过gzip过滤存档

-Z | --compress | --uncompress

通过compress过滤存档
```
本地文件选择
``` bash
--add-file=FILE

将给定的文件添加到归档文件中(如果其名称以‘-’开头，则有用)

--backup[=CONTROL]

删除前的备份，选择版本控制

-C, --directory=DIR

切换到目录dir

--exclude=PATTERN

排除指定文件

--exclude-backups

排除备份和锁定的文件

--exclude-caches

排除包含CACHEDIR.TAG的目录的内容，标记文件本身除外

--exclude-caches-all

CACHEDIR.TAG的目录

--exclude-caches-under

排除包含CACHEDIR.TAG目录下的所有内容

--exclude-tag=FILE

排除包含FILE的目录的内容，但文件本身除外

--exclude-tag-all=FILE

排除包含FILE的目录

--exclude-tag-under=FILE

排除包含FILE的目录下的所有内容

--exclude-vcs

排除版本控制的系统目录

-h | --dereference

遵循符号链接；归档和转储它们指向的文件

--hard-dereference

遵循硬链接；归档和转储它们指向的文件

-K | --starting-file=MEMBER-NAME

从存档中的成员MEMBER-NAME开始

--newer-mtime=DATE

比较仅更改数据的日期和时间

--no-null

关闭“--null”选项

--no-recursion

避免在目录中自动递归

--no-unquote

不要取消引用-T读取的文件名

--null | -T

读取以空结尾的名称，禁用-C

-N | --newer=DATE-OR-FILE

--after-date=DATE-OR-FILE

只保存比DATE-OR-FILE新的文件

--one-file-system

创建存档时保持本地文件系统

-P | --absolute-names

不要从文件名中去掉前导‘/’

--recursion

递归操作，默认的

--suffix=STRING

删除之前备份，重写通常的后缀(‘~’除非被环境变量SIMPLE_BACKUP_SUFFIX覆盖)

-T | --files-from=FILE

获取要从FILE中提取或创建的名称

--unquote

取消引用-T读取的文件名(默认)

 

-X | --exclude-from=FILE

排除FILE中列出的模式
```
文件名字转换
``` bash
--strip-components=NUMBER

提取文件名中的带NUM前导组件

--transform=EXPRESSION,

--xform=EXPRESSION

使用sed替换EXPRESSION转换文件名

--anchored

模式匹配文件名开始

--ignore-case

忽略大小写

--no-anchored

任何“/”之后的模式匹配(exclude的默认)

--no-ignore-case

大小写敏感，默认。

--no-wildcards

逐字字符串匹配

--no-wildcards-match-slash

通配符不匹配“/”

--wildcards

使用通配符(默认)

--wildcards-match-slash

通配符匹配“/”，默认
```
多信息输出
``` bash
--checkpoint[=NUMBER]

每NUMBERth个记录显示一次进度

--checkpoint-action=ACTION

对每个检查点执行操作ACTION

--index-file=FILE

将详细信息输出到FILE

-l | --check-links

如果不是所有链接都已转储，则打印一条消息

--no-quote-chars=STRING

禁止引用STRING中的字符

--quote-chars=STRING

引用STRING中的字符

--quoting-style=STYLE

设置名称引用样式

-R | --block-number

在存档中显示每条消息的块号

--show-defaults

显示tar默认值

--show-omitted-dirs

列出或提取时，列出不匹配搜索条件的每个目录

--show-transformed-names

--show-stored-names

转换后显示文件名或存档名称

--totals[=SIGNAL]

在处理归档文件后使用参数“-”打印总字节；在发送此信号时使用参数打印总字节；允许的信号是：SIGHUP、SIGQUIT、SIGINT、SIGUSR1和SIGUSR2；没有SIG前缀的名称也被接受。

--utc

使用UTC格式打印文件修改日期

-v | --verbose

详细列出已处理的文件

--warning=KEYWORD

警告控制

-w | --interactive, --confirmation

要求确认每一项行动
```

备份后缀为‘~’，除非设置为“--suffix”或“SIMPLE_BACKUP_SUFFIX”。版本控制可以用“--backup”或“VERSION_CONTROL”设置，值为：

1）none，off，从不备份。

2）t，numbered，数字备份。

3）nil，existing，如果存在数字备份，那么使用数字备份；否则，使用普通备份。

4）never，simple，简单备份。


## 举例
```
- z：有gzip属性的
- j：有bz2属性的
- Z：有compress属性的
- v：显示所有过程
- O：将文件解开到标准输出

tar -cf archive.tar foo bar  # 从文件 foo 和 bar 创建归档文件 archive.tar。
tar -tvf archive.tar         # 详细列举归档文件 archive.tar 中的所有文件。
tar -xf archive.tar          # 展开归档文件 archive.tar 中的所有文件。
```
下面的参数-f是必须的

-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。
```
tar -cf all.tar *.jpg
# 这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。

tar -rf all.tar *.gif
# 这条命令是将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的意思。

tar -uf all.tar logo.gif
# 这条命令是更新原来tar包all.tar中logo.gif文件，-u是表示更新文件的意思。

tar -tf all.tar
# 这条命令是列出all.tar包中所有文件，-t是列出文件的意思
tar -cfv archive.tar foo bar  # 从文件foo和bar创建archive.tar。
tar -tvf archive.tar         # 详细列出archive.tar中的所有文件。
tar -xf archive.tar          # 从archive.tar提取所有文件。
```
### zip格式
- 压缩： zip -r [目标文件名].zip [原文件/目录名]
- 解压： unzip [原文件名].zip

> 注：-r参数代表递归

### tar格式（该格式仅仅打包，不压缩）
- 打包：tar -cvf [目标文件名].tar [原文件名/目录名]
- 解包：tar -xvf [原文件名].tar

> 注：c参数代表create（创建），x参数代表extract（解包），v参数代表verbose（详细信息），f参数代表filename（文件名），所以f后必须接文件名。

### tar.gz格式
- 方式一：利用前面已经打包好的tar文件，直接用压缩命令。
  - 压缩：gzip [原文件名].tar
  - 解压：gunzip [原文件名].tar.gz
- 方式二：一次性打包并压缩、解压并解包
  - 打包并压缩： tar -zcvf [目标文件名].tar.gz [原文件名/目录名]
  - 解压并解包： tar -zxvf [原文件名].tar.gz

> 注：z代表用gzip算法来压缩/解压。

### tar.bz2格式
- 方式一：利用已经打包好的tar文件，直接执行压缩命令：
  - 压缩：bzip2 [原文件名].tar
  - 解压：bunzip2 [原文件名].tar.bz2
- 方式二：一次性打包并压缩、解压并解包
  - 打包并压缩： tar -jcvf [目标文件名].tar.bz2 [原文件名/目录名]
  - 解压并解包： tar -jxvf [原文件名].tar.bz2

> 注：小写j代表用bzip2算法来压缩/解压。

### tar.xz格式
- 方式一：利用已经打包好的tar文件，直接用压缩命令：
  - 压缩：xz [原文件名].tar
  - 解压：unxz [原文件名].tar.xz
- 方式二：一次性打包并压缩、解压并解包
  - 打包并压缩： tar -Jcvf [目标文件名].tar.xz [原文件名/目录名]
  - 解压并解包： tar -Jxvf [原文件名].tar.xz

> 注：大写J代表用xz算法来压缩/解压。

### tar.Z格式（已过时）
- 方式一：利用已经打包好的tar文件，直接用压缩命令：
  - 压缩：compress [原文件名].tar
  - 解压：uncompress [原文件名].tar.Z
- 方式二：一次性打包并压缩、解压并解包
  - 打包并压缩： tar -Zcvf [目标文件名].tar.Z [原文件名/目录名]
  - 解压并解包： tar -Zxvf [原文件名].tar.Z

> 注：大写Z代表用ncompress算法来压缩/解压。另，ncompress是早期Unix系统的压缩格式，但由于ncompress的压缩率太低，现已过时。

## jar格式
- 压缩：jar -cvf [目标文件名].jar [原文件名/目录名]
- 解压：jar -xvf [原文件名].jar

> 注：如果是打包的是Java类库，并且该类库中存在主类，那么需要写一个META-INF/MANIFEST.MF配置文件，内容如下：
```
Manifest-Version: 1.0
Created-By: 1.6.0_27 (Sun Microsystems Inc.)
Main-class: the_name_of_the_main_class_should_be_put_here
```
然后用如下命令打包：
```
jar -cvfm [目标文件名].jar META-INF/MANIFEST.MF [原文件名/目录名]
```
这样以后就能用“java -jar [文件名].jar”命令直接运行主类中的public static void main方法了。

### 7z格式
- 压缩：7z a [目标文件名].7z [原文件名/目录名]
- 解压：7z x [原文件名].7z

> 注：这个7z解压命令支持rar格式，即：
``` bash
7z x [原文件名].rar
```
### 其它例子

将文件全部打包成tar包 ：
``` bash
tar -cvf log.tar log2012.log    仅打包，不压缩！
tar -zcvf log.tar.gz log2012.log   打包后，以 gzip 压缩
tar -jcvf log.tar.bz2 log2012.log  打包后，以 bzip2 压缩
```
在选项f之后的文件档名是自己取的，我们习惯上都用 .tar 来作为辨识。 如果加z选项，则以.tar.gz或.tgz来代表gzip压缩过的tar包；如果加j选项，则以.tar.bz2来作为tar包名。

解压目录

去掉第一层目录结构，要出除第二层，--strip-components 2
``` bash
tar -xvf portal-web-v2.0.0.tar --strip-components 1  -C 指定目录
```
查阅上述tar包内有哪些文件 ：
``` bash
tar -ztvf log.tar.gz
```
由于我们使用 gzip 压缩的log.tar.gz，所以要查阅log.tar.gz包内的文件时，就得要加上z这个选项了。

将tar包解压缩 ：
``` bash
tar -zxvf /opt/soft/test/log.tar.gz
```
在预设的情况下，我们可以将压缩档在任何地方解开的

只将tar内的部分文件解压出来 ：
``` bash
tar -zxvf /opt/soft/test/log30.tar.gz log2013.log
```
我可以透过tar -ztvf来查阅 tar 包内的文件名称，如果单只要一个文件，就可以透过这个方式来解压部分文件！

文件备份下来，并且保存其权限 ：
``` bash
tar -zcvpf log31.tar.gz log2014.log log2015.log log2016.log
```
这个-p的属性是很重要的，尤其是当您要保留原本文件的属性时。

在文件夹当中，比某个日期新的文件才备份 ：
``` bash
tar -N "2012/11/13" -zcvf log17.tar.gz test
```
备份文件夹内容是排除部分文件：
``` bash
tar --exclude scf/service -zcvf scf.tar.gz scf/*
```
打包文件之后删除源文件：
``` bash
tar -cvf test.tar test --remove-files
```
其实最简单的使用 tar 就只要记忆底下的方式即可：

- 压　缩：tar -jcv -f filename.tar.bz2 要被压缩的文件或目录名称
- 查　询：tar -jtv -f filename.tar.bz2
- 解压缩：tar -jxv -f filename.tar.bz2 -C 欲解压缩的目录