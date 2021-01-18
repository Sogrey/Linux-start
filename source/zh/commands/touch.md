# touch - 创建新的空文件

touch命令 有两个功能：一是用于把已存在文件的时间标签更新为系统当前的时间（默认方式），它们的数据将原封不动地保留下来；二是用来创建新的空文件。

将文件的访问时间和修改时间修改为当前时间。如果指定的文件不存在，那么将会创造空文件，除非指定-c或-h选项。文件参数字符串‘-‘被专门处理，并导致touch更改与标准输出相关联的文件的时间。

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
touch  [选项]  file
```

## 选项

``` bash
-a                    # 只改变访问时间
-c, --no-create       # 不创建文件
-d, --date=time       # 设置为指定的时间，而不是当前的时间
-f                    # 忽略 
-h                    # 只改变符号链接
-m                    # 只改变修改时间
-r, --reference=file  # 使用指定文件的时间
-t                    # 使用CCYYMMDDhhmmss时间
--time=WORD           # 改指定的时间：Word为access、atime或use

--help                # 显示帮助文档
--version             # 显示命令版本信息
```

“--date=STRING”是一种主要自由格式的人类可读的日期字符串，例如“Sun，2月29日16：21：42-0800”或“2004-02-29 16：21：21：42”，甚至“下星期四”。日期字符串可能包含指示日历日期、日时间、时区、周中日、相对时间、相对日期和数字的项。空字符串表示一天的开始。


## 举例

``` bash
[sogrey@bogon newDir2]$ ls
demo  test  test.c
[sogrey@bogon newDir2]$ touch -c 1.txt # 使用选项-c，不创建文件
[sogrey@bogon newDir2]$ ls
demo  test  test.c
[sogrey@bogon newDir2]$ touch 1.txt # 不使用任何选项，创建文件
[sogrey@bogon newDir2]$ ls
1.txt  demo  test  test.c
[sogrey@bogon newDir2]$ ll 1.txt
-rw-------. 1 sogrey sogrey 0 1月  18 23:23 1.txt
[sogrey@bogon newDir2]$ touch -r 1.txt test.c # 将test.c的时间修改和1.txt一样
[sogrey@bogon newDir2]$ ll 1.txt test.c
-rw-------. 1 sogrey sogrey  0 1月  18 23:23 1.txt
-rw-------. 1 sogrey sogrey 88 1月  18 23:23 test.c
[sogrey@bogon newDir2]$ 
```
