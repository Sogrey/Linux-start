# diffstat - 显示diff命令输出信息的柱状图

读取diff的输出，并显示每个文件的插入、删除和修改的直方图。Diffstat是一个用于检查大型复杂修补程序文件的程序。它从包含diff输出的一个或多个输入文件中读取，生成针对引用的每个文件更改的总行的直方图。如果输入文件名以.bz 2、.gz、.lzma、.z或.z结尾，Diffstat将通过管道从相应的程序读取未压缩数据。它还可以根据标准输入的管道文件推断压缩类型。

Diffstat识别来自diff的最流行的输出类型：

- unified，修补程序首选。
- context，最好的可读性，但不太紧凑。
- default，不是很好，但很容易产生。

Diffstat检测由diff输出的行，以判断比较了哪些文件，然后在第一列中计数表示更改类型(插入、删除或修改)的标记。这些在直方图中显示为“、”-“和”！“字符。如果命令行上没有指定文件名，Diffstat将读取标准输入中的差异。

diffstat命令 用来显示diff命令输出信息的柱状图，用以显示diff命令比较两个文件的不同统计信息。用户也可以直接使用|将diff命令所输出的结果直接送给diffstat命令进行统计结果的显示。使用该命令时，若所比较的文件或者子目录不在当前目录下，则应该使用其完整路径。


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
diffstat  [options]  [file-specifications]
```

## 选项

``` bash
-b                 # 忽略diff中的“二进制文件XXX和YYY不同”匹配的行
-c                 # 在每一行输出前加上“#”，使其成为shell脚本的注释行。
-D destination     # 指定一个目录，其中包含可作为应用差异的结果而引用的文件。
                   # Diffstat将计算相应文件中的行数(在通过-p选项调整名称之后)，
                   # 以获得每个文件中的总行数。
-e file            # 将标准错误重定向到文件
-f format          # 指定直方图的格式：
                   #    0，为了简洁，它只显示值和一个直方图代码insert (+)，
                   #    delete (-)或modify (!)。
                   #    1，正常格式。
                   #    2，用点填充直方图。
                   #    4，使用直方图打印每个值。
                   #    任何非零值都会给出直方图。
                   #    点和个别值可以结合在一起，例如-f6给出两者。
-h                 # 显示帮助信息并且退出
-k                 # 禁止合并报表中的文件名
-l                 # 只列出文件名。不生成直方图。
-m                 # 从修补程序文件的每个“块”中合并插入/删除计数，
                   # 以接近修改行的计数
-n number          # 指定用于文件名的最小宽度。如果不指定这一点，
                   # Diffstat在去掉常见前缀后使用最长文件名的长度。
-N number          # 指定用于文件名的最大宽度。超过此限制的名称在左侧被截断。
                   # 如果您没有指定此选项，下面将检查-n选项。
-o file            # 将标准输出重定向到文件
-p number          # 重写删除公共路径名的逻辑，模拟修补程序“-p”选项。
-q                 # 抑制空差异的“0文件更改”消息
-r code            # 提供直方图中显示的数据的可选舍入，而不是通过错误调整截断数据：
                   #     0，是默认的。不执行舍入操作，但累积错误将添加到下列中。
                   #     1，舍入数据。
                   #     2，对数据进行舍入并调整直方图，以确保在有任何差异的情况下显示
                   #        某些内容，即使这些差异通常被四舍五入为零。
-S source          # 这类似于-D选项，但指定了一个可以找到原始文件(在应用差异之前)的位置。
-t                 #重写直方图，生成逗号分隔值的输出。
-u                 #禁止对报表中的文件名进行排序。
-v                 #显示进度，例如，如果输出重定向到文件，则将进度消息写入标准错误
-V                 #显示版本号，并且退出
-w number          #指定直方图的最大宽度。直方图将永远不会小于10列，以防文件名过大。
```
## 环境变量
Diffstat运行在可移植的UNIX环境中。您可以通过设置与输入文件名称相对应的环境变量来覆盖用于解压缩输入文件的程序的编译路径。然而，Diffstat假设生成的程序使用相同的命令行选项，例如“-c”来解压缩到标准输出。

- DIFFSTAT_BZCAT_PATH
- DIFFSTAT_BZIP2_PATH
- DIFFSTAT_COMPRESS_PATH
- DIFFSTAT_GZIP_PATH
- DIFFSTAT_LZCAT_PATH
- DIFFSTAT_PCAT_PATH
- DIFFSTAT_UNCOMPRESS_PATH
- DIFFSTAT_ZCAT_PATH

## 举例

``` bash
[sogrey@bogon demos]$ diff test.txt test2.txt
1,2d0
< 石家庄今日新增16例确诊病例
< 中国留美博士遇害 美驻华使馆慰问
4,6c2,3
< 理塘文旅公司回应丁真抽烟
< 北京一确诊者隐瞒行程不配合流调
< 山西晋中新增2例无症状感染者
---
> 
> 1月11日，美国第一夫人梅拉尼娅·特朗普通过白宫发表声明，谴责上周发生在美国国会的暴乱。
[sogrey@bogon demos]$ diff test.txt test2.txt | diffstat -f 2
 unknown |    7 ++-----.........................................................
 1 file changed, 2 insertions(+), 5 deletions(-)
[sogrey@bogon demos]$ diff test.txt test2.txt | diffstat -f 1
 unknown |    7 ++-----
 1 file changed, 2 insertions(+), 5 deletions(-)
[sogrey@bogon demos]$ diff test.txt test2.txt | diffstat -f 0
 unknown |    7 	2 +	5 -	0 !
 1 file changed, 2 insertions(+), 5 deletions(-)
[sogrey@bogon demos]$ 
```
