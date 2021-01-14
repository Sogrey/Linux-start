# ls - 显示目录内容列表

ls命令 用来显示目标列表，在Linux中是使用率较高的命令。ls命令的输出信息可以进行彩色加亮显示，以分区不同类型的文件。

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
ls [选项] [文件名...]
   [-1abcdfgiklmnopqrstuxABCDFGLNQRSUX]
   [-w cols]
   [-T cols]
   [-I pattern]
   [--full-time] 
   [--format={long,verbose,commas,across,vertical,single-col‐umn}] 
   [--sort={none,time,size,extension}]
   [--time={atime,access,use,ctime,status}] 
   [--color[={none,auto,always}]]
   [--help]
   [--version]
   [--]
```

常用命令：
``` bash
ls                                           # 仅列出当前目录可见文件
ls -l                                        # 列出当前目录可见文件详细信息
ls -hl                                       # 列出详细信息并以可读大小显示文件大小
ls -al                                       # 列出所有文件（包括隐藏）的详细信息
ls --human-readable --size -1 -S --classify  # 按文件大小排序
du -sh * | sort -h                           # 按文件大小排序(同上)
```

## 选项

``` bash
[sogrey@bogon 文档]$ ls --help
用法：ls [选项]... [文件]...
List information about the FILEs (the current directory by default).
Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.

Mandatory arguments to long options are mandatory for short options too.
  -a, --all			            # 不隐藏任何以. 开始的项目
  -A, --almost-all		        # 列出除. 及.. 以外的任何项目
      --author			        # 与-l 同时使用时列出每个文件的作者
  -b, --escape			        # 以八进制溢出序列表示不可打印的字符
      --block-size=SIZE         # scale sizes by SIZE before printing them; e.g.,
                                # '--block-size=M' prints sizes in units of
                                # 1,048,576 bytes; see SIZE format below
  -B, --ignore-backups          # do not list implied entries ending with ~
  -c                            # with -lt: sort by, and show, ctime (time of last
                                # modification of file status information);
                                # with -l: show ctime and sort by name;
                                # otherwise: sort by ctime, newest first
  -C                            # list entries by columns
      --color[=WHEN]            # colorize the output; WHEN can be 'never', 'auto',
                                # or 'always' (the default); more info below
  -d, --directory               # list directories themselves, not their contents
  -D, --dired                   # generate output designed for Emacs' dired mode
  -f                            # do not sort, enable -aU, disable -ls --color
  -F, --classify                # append indicator (one of */=>@|) to entries
      --file-type               # likewise, except do not append '*'
      --format=WORD             # across -x, commas -m, horizontal -x, long -l,
                                # single-column -1, verbose -l, vertical -C
      --full-time               # like -l --time-style=full-iso
  -g				            # 类似-l，但不列出所有者
      --group-directories-first
                                # group directories before files;
                                # can be augmented with a --sort option, but any
                                # use of --sort=none (-U) disables grouping
  -G, --no-group		        # 以一个长列表的形式，不输出组名
  -h, --human-readable		    # 与-l 一起，以易于阅读的格式输出文件大小
				                # (例如 1K 234M 2G)
      --si			            # 同上面类似，但是使用1000 为基底而非1024
  -H, --dereference-command-line
                                # follow symbolic links listed on the command line
      --dereference-command-line-symlink-to-dir
                                # follow each command line symbolic link
                                # that points to a directory
      --hide=PATTERN            # do not list implied entries matching shell PATTERN
                                # (overridden by -a or -A)
      --indicator-style=WORD    # append indicator with style WORD to entry names:
                                # none (default), slash (-p),
                                # file-type (--file-type), classify (-F)
  -i, --inode                   # print the index number of each file
  -I, --ignore=PATTERN          # do not list implied entries matching shell PATTERN
  -k, --kibibytes               # default to 1024-byte blocks for disk usage
  -l				            # 使用较长格式列出信息
  -L, --dereference		        # 当显示符号链接的文件信息时，显示符号链接所指示
				                # 的对象而并非符号链接本身的信息
  -m				            # 所有项目以逗号分隔，并填满整行行宽
  -n, --numeric-uid-gid		    # 类似 -l，但列出UID 及GID 号
  -N, --literal			        # 输出未经处理的项目名称 (如不特别处理控制字符)
  -o				            # 类似 -l，但不列出有关组的信息
  -p,  --indicator-style=slash	# 对目录加上表示符号"/"
  -q, --hide-control-chars      # print ? instead of nongraphic characters
      --show-control-chars      # show nongraphic characters as-is (the default,
                                # unless program is 'ls' and output is a terminal)
  -Q, --quote-name              # enclose entry names in double quotes
      --quoting-style=WORD      # use quoting style WORD for entry names:
                                # literal, locale, shell, shell-always, c, escape
  -r, --reverse			        # 逆序排列
  -R, --recursive		        # 递归显示子目录
  -s, --size			        # 以块数形式显示每个文件分配的尺寸
  -S                            # sort by file size
      --sort=WORD               # sort by WORD instead of name: none (-U), size (-S),
                                # time (-t), version (-v), extension (-X)
      --time=WORD               # with -l, show time as WORD instead of default
                                # modification time: atime or access or use (-u)
                                # ctime or status (-c); also use specified time
                                # as sort key if --sort=time
      --time-style=STYLE        # with -l, show times using style STYLE:
                                # full-iso, long-iso, iso, locale, or +FORMAT;
                                # FORMAT is interpreted like in 'date'; if FORMAT
                                # is FORMAT1<newline>FORMAT2, then FORMAT1 applies
                                # to non-recent files and FORMAT2 to recent files;
                                # if STYLE is prefixed with 'posix-', STYLE
                                # takes effect only outside the POSIX locale
  -t                            # sort by modification time, newest first
  -T, --tabsize=COLS            # assume tab stops at each COLS instead of 8
  -u                            # with -lt: sort by, and show, access time;
                                # with -l: show access time and sort by name;
                                # otherwise: sort by access time
  -U                            # do not sort; list entries in directory order
  -v                            # natural sort of (version) numbers within text
  -w, --width=COLS              # assume screen width instead of current value
  -x                            # list entries by lines instead of by columns
  -X                            # sort alphabetically by entry extension
  -1                            # list one file per line

SELinux options:

  --lcontext                    # Display security context.   Enable -l. Lines
                                # will probably be too wide for most displays.
  -Z, --context                 # Display security context so it fits on most
                                # displays.  Displays only mode, user, group,
                                # security context and file name.
  --scontext                    # Display only security context and file name.
      --help		            # 显示此帮助信息并退出
      --version		            # 显示版本信息并退出

SIZE is an integer and optional unit (example: 10M is 10*1024*1024).  Units
are K, M, G, T, P, E, Z, Y (powers of 1024) or KB, MB, ... (powers of 1000).

使用色彩来区分文件类型的功能已被禁用，默认设置和 --color=never 同时禁用了它。
使用 --color=auto 选项，ls 只在标准输出被连至终端时才生成颜色代码。
LS_COLORS 环境变量可改变此设置，可使用 dircolors 命令来设置。


退出状态：
 0  正常
 1  一般问题 (例如：无法访问子文件夹)
 2  严重问题 (例如：无法使用命令行参数)

GNU coreutils online help: <http://www.gnu.org/software/coreutils/>
请向<http://translationproject.org/team/zh_CN.html> 报告ls 的翻译错误
要获取完整文档，请运行：info coreutils 'ls invocation'
```
> 以上信息来自 CenrOS Linux 8

## 补充说明

在默认情况下，使用颜色来区分文件类型是禁用的，并且使用“--color=never“。只有当标准输出连接到终端时，ls才会发出颜色代码。LS_CONERS环境变量可以更改设置，使用dircolors命令来设置。

大小可以是KB，1000； K，1024,；MB，1000*1000；M，1024*1024

## 举例

``` bash
[sogrey@bogon 文档]$ ls
ee.txt
[sogrey@bogon 文档]$ ls -lh ee.txt
-rw-------. 1 sogrey sogrey 12 1月  10 18:45 ee.txt
[sogrey@bogon 文档]$ 
```
