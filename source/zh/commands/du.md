# du - 显示每个文件和目录的磁盘使用空间

du命令 也是查看使用空间的，但是与df命令不同的是Linux du命令是对文件和目录磁盘使用的空间的查看，还是和df命令有一些区别的。

以块为单位，显示当前目录下，所有目录、文件、子目录的磁盘使用情况。总结每个文件的磁盘使用情况，对目录进行递归处理


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
du  [选项]  [目录]
```

## 选项

``` bash
-a, --all                # 显示所有的文件大小，包含目录、文件、子目录。默认情况下不显示文件的大小
--apparent-size          # 打印表观大小，而不是磁盘使用量；虽然表观大小通常较小，但由于(“稀疏”)文件中的漏洞、内部碎片、间接块等原因，它可能更大。
-B, --block-size=SIZE    # 设置显示时的块大小
-b, --bytes              # 等价于“--apparent-size --block-size=1”
-c, --total              # 产生一个总和统计
-D, --dereference-args, -H # 只引用命令行中列出的符号链接
--files0-from=F            # 总结文件F中指定的以NUL结尾的文件名的磁盘使用情况；如果F是“-”，则从标准输入中读取名称
-h, --human-readable       # 以更加易读的方式来显示
--si                       # 和“-h“一样，只是显示单位是1000，而不是1024
-k                         # 相当于—block-size=1k
-m                         # 相当于—block-size=1M
-l, --count-links          # 如果是硬链接，那么记录次数
-L, --dereference          # 取消引用所有符号链接
-P, --no-dereference       # 不要跟随任何符号链接，这是默认的
-0, --null                 # 以0字节(而不是换行符)结束每一行输出
-S, --separate-dirs        # 不包括子目录的大小
-s, --summarize            # 只显示每个参数的总数
-x, --one-file-system      # 跳过不同文件系统上的目录
-X, --exclude-from=FILE    # 排除与文件中任何模式匹配的文件
--exclude=PATTERN          # 排除匹配模式的文件
--max-depth=N              # 只有目录层数少于N，才打印目录(或文件)的总数(或带有-all)；“--max-depth=0 “等价于 ” --summarize “
--time                     # 显示最后修改的时间
--time=WORD                # 将时间显示为指定的内容而不是修改时间，可以是：atime、access、use、ctime或status。
--time-style=STYLE         # 使用指定的格式显示时间，时间格式可以是full-iso，long-iso，iso，+FORMAT

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

该指令显示的值的单位是“--block-size”、“DF_BLOCK_SIZE”、“BLOCK_SIZE”，、BLOCKSIZE”这是四个值中第一个可用的值。 除了第一个值是用户设定的，其他3个都是环境变量。如果这四个值没有可用的，那么默认是1024（如果设置了POSIXLY_CORRECT，那么就是512）。

显示的单位可能是：KB，1000；K，1024；MB，100*100；M，1024*1024。

## 举例
查看home目录总大小
``` bash
[sogrey@bogon ~]$ sudo du /home -s
131412	/home
[sogrey@bogon ~]$ 
```
使用“--time”选项，显示最后的修改时间
``` bash
[sogrey@bogon ~]$ sudo du /home --time
16	2020-12-17 01:44	/home/lost+found
4	2020-12-17 01:56	/home/sogrey/模板
4	2020-12-17 01:56	/home/sogrey/公共
4	2021-01-12 00:16	/home/sogrey/桌面
4	2021-03-28 23:43	/home/sogrey/DirTest/Dir1
8	2021-03-28 23:54	/home/sogrey/DirTest/Dir2
16	2021-03-28 23:54	/home/sogrey/DirTest
4	2020-12-17 01:56	/home/sogrey/图片
48	2021-06-10 23:10	/home/sogrey/文档
4	2020-12-17 01:56	/home/sogrey/视频
70196	2021-01-12 00:02	/home/sogrey/下载
4	2020-12-17 01:56	/home/sogrey/音乐
131336	2021-06-16 22:56	/home/sogrey
28	2021-03-21 23:03	/home/other
28	2021-03-21 23:00	/home/userTmp
131412	2021-06-16 22:56	/home
[sogrey@bogon ~]$ 
```
使用“-m”选项，以Mb为单位显示
``` bash
[sogrey@bogon ~]$ sudo du /home -m
1	/home/lost+found
1	/home/sogrey/模板
1	/home/sogrey/公共
1	/home/sogrey/桌面
1	/home/sogrey/DirTest/Dir1
1	/home/sogrey/DirTest/Dir2
1	/home/sogrey/DirTest
1	/home/sogrey/图片
1	/home/sogrey/文档
1	/home/sogrey/视频
69	/home/sogrey/下载
1	/home/sogrey/音乐
129	/home/sogrey
1	/home/other
1	/home/userTmp
129	/home
[sogrey@bogon ~]$ 
```

指定“--time“的显示
``` bash
[sogrey@bogon DirTest]$ ll
总用量 8
drwx------. 2 sogrey sogrey 4096 3月  28 23:43 Dir1
drwx------. 2 sogrey sogrey 4096 3月  28 23:54 Dir2
[sogrey@bogon DirTest]$ du ./Dir1/ --time=use
4	2021-06-16 22:48	./Dir1/
[sogrey@bogon DirTest]$ du ./Dir1/ --time=status
4	2021-03-28 23:54	./Dir1/
[sogrey@bogon DirTest]$ 
```