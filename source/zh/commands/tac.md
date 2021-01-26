# tac - 连接多个文件并以行为单位反向打印到标准输出

将指定文件中的行，按照反序方式显示。

主要用途

- 按行为单位反向显示文件内容，如果没有文件或文件为-则读取标准输入。
- 处理多个文件时，依次将每个文件反向显示，而不是将所有文件连在一起再反向显示。

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
tac  [选项]  file
```

## 选项

``` bash
-b, --before              # 在之前而不是之后连接分隔符。
-r, --regex               # 将分隔符作为基础正则表达式（BRE）处理。
-s, --separator=STRING    # 使用STRING作为分隔符代替默认的换行符。

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon newDir3]$ cat test2.txt
123
23
212
[sogrey@bogon newDir3]$ tac test2.txt  # 反序显示
212
23
123
[sogrey@bogon newDir3]$ tac -b test2.txt  # 将分隔符“回车”放在文件最前面，导致最前面是两个空行，最后一行不能换行，


212
23123[sogrey@bogon newDir3]$ 
```

## 注意

1. 该命令是GNU coreutils包中的命令，相关的帮助信息请查看man -s 1 tac或info coreutils 'tac invocation'。
2. 关于基础正则表达式（BRE）的内容，详见man -s 1 grep的REGULAR EXPRESSIONS段落。
