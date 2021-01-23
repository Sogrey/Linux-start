# cut - 连接文件并打印到标准输出设备上

cut 命令 用来显示行中的指定部分，删除文件中指定字段。cut 经常用来显示文件的内容，类似于 type 命令。

说明：该命令有两项功能，其一是用来显示文件的内容，它依次读取由参数 file 所指 明的文件，将它们的内容输出到标准输出上；其二是连接两个或多个文件，如cut fl f2 > f3将把文件 fl 和 f2 的内容合并起来，然后通过输出重定向符“>”的作用，将它们放入文件 f3 中。

当文件较大时，文本在屏幕上迅速闪过（滚屏），用户往往看不清所显示的内容。因此，一般用 more 等命令分屏显示。为了控制滚屏，可以按 Ctrl+S 键，停止滚屏；按 Ctrl+Q 键可以恢复滚屏。按 Ctrl+C（中断）键可以终止该命令的执行，并且返回 Shell 提示符状态。

# pwd - 显示当前工作目录

查看用户当前的工作目录，输出完整路径。

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
pwd  [OPTION] [参数]
```

## 选项

``` bash
-b,--bytes=LIST             # 仅显示行中指定直接范围的内容；
-c,--characters=LIST        # 仅显示行中指定范围的字符；
-d,--delimiter=DELIM        # 指定字段的分隔符，默认的字段分隔符为“TAB”；
-f,--fields=LIST            # 显示指定字段的内容；
-n                          # 与“-b”选项连用，不分割多字节字符；
--complement                # 补足被选择的字节、字符或字段；
--out-delimiter= 字段分隔符  # 指定输出内容是的字段分割符；
-s, --only-delimited        # 如果该行没有分隔字符，那么不显示这行

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon newDir3]$ cat students.txt 
No,Name,Mark,Percent
01,tom,69,91
02,jack,71,87
03,alex,68,98
[sogrey@bogon newDir3]$ cut -f2 -d"," students.txt  # 使用 -d 选项指定字段分隔符
Name
tom
jack
alex
[sogrey@bogon newDir3]$ 
```

**指定字段的字符或者字节范围**

cut 命令可以将一串字符作为列来显示，字符字段的记法：

- N- ：从第 N 个字节、字符、字段到结尾；
- N-M ：从第 N 个字节、字符、字段到第 M 个（包括 M 在内）字节、字符、字段；
- -M ：从第 1 个字节、字符、字段到第 M 个（包括 M 在内）字节、字符、字段。

上面是记法，结合下面选项将摸个范围的字节、字符指定为字段：

- -b 表示字节；
- -c 表示字符；
- -f 表示定义字段。

``` bash
[sogrey@bogon newDir3]$ cat test.txt
abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz
[sogrey@bogon newDir3]$ cut -c1-3 test.txt # 打印第 1 个到第 3 个字符
abc
abc
abc
abc
abc
[sogrey@bogon newDir3]$ cut -c-2 test.txt # 打印前 2 个字符
ab
ab
ab
ab
ab
[sogrey@bogon newDir3]$ cut -c5- test.txt # 打印从第 5 个字符开始到结尾
efghijklmnopqrstuvwxyz
efghijklmnopqrstuvwxyz
efghijklmnopqrstuvwxyz
efghijklmnopqrstuvwxyz
efghijklmnopqrstuvwxyz
[sogrey@bogon newDir3]$ 
```