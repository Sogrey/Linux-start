# tr - 将字符进行替换压缩和删除

删除或者更改文件中的字符串，这个指令一般需要两个字符集。


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
tr  [选项]  set1  set2
```

## 选项

``` bash
-c, -C, --complement     # 使用SET1的补码
-d, --delete             # 删除字符集1中指定的内容
-s, --squeeze-repeats    # 将set1中重复出现的内容，替换成单次出现的内容
-t, --truncate-set1      # 首先将SET1按照SET2的长度截断

--help                   # 显示帮助文档
--version                # 显示命令版本信息
```
``` bash
\NNN           # 具有八进制值nnn的字符(1到3位八进制数字)
\\             # 反斜线符号
\a             # 可听BEL
\b             # （键盘的）退格键
\f             # 换页
\n             # 换行
\r             # 返回
\t             # 水平tab
\v             # 垂直tab
CHAR1-CHAR2    # 从CHAR 1到CHAR 2的所有字符按升序排列
[CHAR*]        # 拷贝set2中的字符，长度为set1的长度
[CHAR*REPEAT]  # 重复拷贝
[:alnum:]      # 所有字母和数字
[:alpha:]      # 所有字母
[:blank:]      # 所有的水平空白
[:cntrl:]      # 所有的控制字符
[:digit:]      # 所有的数字
[:graph:]      # 所有的可打印的字符，不包括空格
[:lower:]      # 所有的小写字母
[:print:]      # 所有的可打印字符，包括空格
[:punct:]      # 所有标点符号
[:space:]      # 所有的水平和垂直空格
[:upper:]      # 所有的大写字母
[:xdigit:]     # 所有的十六进制数字
[=CHAR=]       # 所有等价于CHAR的字符
```
如果没有给出‘-d’，同时出现SET1和SET2，则会发生翻译。‘-t’只能在翻译时使用。通过在必要时重复SET1的最后一个字符，Set2被扩展到SET1的长度。Set2的多余字符将被忽略。只有[：lower：]和[：upper：]保证按升序展开；在set2翻译时使用，它们只能成对使用以指定大小写转换。‘-s’在不翻译或删除时使用SET1；压缩使用SET2，并在翻译或删除后发生。

## 举例

``` bash
[sogrey@bogon newDir2]$ cat test.c
You no longer send out energy of desperation or the need to be filled from the outside.
[sogrey@bogon newDir2]$ tr -s a-z A-Z < test.c  # 将文件中的小写字母替换成大写
YOU NO LONGER SEND OUT ENERGY OF DESPERATION OR THE NED TO BE FILED FROM THE OUTSIDE.
[sogrey@bogon newDir2]$ tr -d send < test.c # 内容输出，然后删除出现的字符
You o logr  out rgy of pratio or th  to b fill from th outi.
[sogrey@bogon newDir2]$ 
```
