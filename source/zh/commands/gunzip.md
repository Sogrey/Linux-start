# gunzip - 用来解压缩文件

gunzip命令 用来解压缩文件。gunzip是个使用广泛的解压缩程序，它用于解开被gzip压缩过的文件，这些压缩文件预设最后的扩展名为.gz。事实上gunzip就是gzip的硬连接，因此不论是压缩或解压缩，都可通过gzip指令单独完成。

解压缩被gzip压缩过的文件。


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
gunzip  [-acfhlLnNrtvV]  [-S suffix]  文件
```

## 选项

``` bash
-f, --force                     # 强制执行
-a, --ascii                     # 文本模式。此选项仅在某些非Unix系统上支持。
-c, --stdout, --to-stdout       # 将解压的文件写到标准输出，源文件不变。如果有多个输入文件，则输出由一系列独立压缩的成员组成。为了获得更好的压缩，在压缩所有输入文件之前先将它们连接起来。
-l, --list                      # 列出压缩文件的信息
-L, --licence                   # 列出gzip的许可证并且退出
-n, --no-name                   # 解压缩时，如果存在，不要还原原始文件名(仅从压缩文件名中删除gzip后缀)，如果存在则不要恢复原始时间戳(从压缩文件中复制它)。此选项是解压缩时的默认选项。
-N, --name                      # 解压缩时，如果存在，请还原原始文件名和时间戳。此选项对于限制文件名长度的系统或在文件传输后丢失时间戳的系统非常有用。
-r, --recursive                 # 递归遍历目录结构。如果命令行中指定的任何文件名都是目录，则gzip将下降到目录中，并压缩它在目录中找到的所有文件(或者解压它们，如果是gunzip的话)。
-t, --test                      # 测试压缩文件完整性
-v, --verbose                   # 显示详细执行过程
-S                              # 解压缩时，在从输入文件名派生输出文件名时，将.suf添加到后缀列表的开头以尝试。

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例
解压
``` bash
[sogrey@bogon 文档]$  gunzip -v 1.gz  #解压，显示详细执行过程
1.gz:    9.4% -- replaced with 1
```
指定文件后缀
``` bash
[sogrey@bogon 文档]$ gunzip -v 1.mygz   # 解压，后缀不是gz，报错
gzip: 1.mygz: unknown suffix -- ignored
[sogrey@bogon 文档]$ gunzip -v -S "mygz" 1.mygz  # 指定后缀名，不报错
1.mygz:      9.4% -- replaced with 1.
```
