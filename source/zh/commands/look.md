# look - 显示文件中以指定字符串开头的任意行

look命令 用于显示文件中以指定字符串开头的任意行。

显示文件中以特定字符串开始的行。在look执行二进制搜索时，必须对文件中的行进行排序。如果未指定文件，则使用文件“/usr/share/dict/words“，只比较字母数字字符，忽略字母字符的大小写。

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
look  [选项]  string  files
```

## 选项

``` bash
-d               # 只对比数字和英文字母，其他忽略
-f               # 忽略字符的大小写
-a               # 使用字典文件/usr/dict/web2
-t               # 指定字符串结束符

--help           # 显示帮助文档
--version        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon newDir3]$ cat 1.txt
hello world,
i love linux,
love code.
[sogrey@bogon newDir3]$ look love 1.txt # 显示以hello开头的行
love code.
[sogrey@bogon newDir3]$ 
```
