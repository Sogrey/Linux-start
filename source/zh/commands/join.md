# join - 两个文件中指定栏位内容相同的行连接起来

找出两个文件中相同的字段，根据相同字段合并两个文件，将合并结果显示到标准输出。

join命令 用来将两个文件中，制定栏位内容相同的行连接起来。找出两个文件中，指定栏位内容相同的行，并加以合并，再输出到标准输出设备。

# pwd - 显示当前工作目录

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
join  [选项]  file1  file2
```

## 选项

``` bash
-a 1或2                    # 将文件中没有相同字段的行显示出来
-e string                  # 如果在文件中找不到指定的字符串，在输出中填入选项中的字符串
-I, --ignore-case          # 忽略大小写
-j FIELD                   # 等价于“-1  FIELD  -2  FIELD”
-o format                  # 用指定的格式显示结果
-t CHAR                    # 指定分隔符
-v 1或2                    # 和-a一样，但是只显示没有相同字段的行
-1 FIELD                   # 连接文件1指定的字段
-2 FIELD                   # 连接文件2指定的字段
--check-order              # 检查输入是否正确排序，即使所有输入行都是可修的。
--nocheck-order            # 不检查输入是否正确排序

--help                     # 显示帮助文档
--version                  # 显示命令版本信息
```

## 举例

``` bash
sogrey@bogon demo4]$ ls
hello.txt  test2.txt
[sogrey@bogon demo4]$ cat hello.txt test2.txt
Hello world!
I love linux
[sogrey@bogon demo4]$ join hello.txt test2.txt
[sogrey@bogon demo4]$ cat hello.txt test2.txt
Hello world!
Ok,fine.
I love linux
Hello world
HaHa
[sogrey@bogon demo4]$ join hello.txt test2.txt # 合并相同行
join: test2.txt:2: is not sorted: Hello world
[sogrey@bogon demo4]$ join hello.txt test2.txt -v 1 # 显示文件1中不没有相同字段的行
Hello world!
join: test2.txt:2: is not sorted: Hello world
Ok,fine.
[sogrey@bogon demo4]$ join hello.txt test2.txt -v 2 # 显示文件2中没有相同字段的行
I love linux
join: test2.txt:2: is not sorted: Hello world
Hello world
HaHa
[sogrey@bogon demo4]$ 
```
