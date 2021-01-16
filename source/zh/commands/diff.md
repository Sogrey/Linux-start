# diff - 比较给定的两个文件的不同

逐行比较两个文本文件，把文件的差异显示到标准输出。如果要指定要比较目录，那么diff命令会比较目录中相同文件名的文件，不会比较子目录。

diff命令 在最简单的情况下，比较给定的两个文件的不同。如果使用“-”代替“文件”参数，则要比较的内容将来自标准输入。diff命令是以逐行的方式，比较文本文件的异同处。如果该命令指定进行目录的比较，则将会比较该目录中具有相同文件名的文件，而不会对其子目录文件进行任何比较操作。

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
diff  [选项]  files
```

## 选项

``` bash
-m, --mode=MODE               # 设置目录的权限
-i, --ignore-case             # 比较的时候，忽略大小写
--ignore-file-name-case       # 在比较文件名的时候，忽略大小写
--no-ignore-file-name-case    # 比较文件名的时候，不能忽略大小写
-E, --ignore-tab-expansion    # 不比较tab
-b, --ingore-space-change     # 不比较空格数
-w, --ignore-all-space        # 忽略所有的空格
-B, --ignore-blank-lines      # 不比较空白行
-I res, --ignore-mathcing-lines=res # 不比较含有指定字符串res的行
--strip-trailing-cr           # 出去输入行尾随的东西
-a, --text                    # 将所有的文件都当做文本文件
-c  -C NUM  --context[=NUM]   # 显示不同之处的前后部分内容，默认是3行
-u  -U NUM  --unified[=NUM]   # 显示相同之处的前后部分内容，默认是3行
--label LABEL                 # 使用文件的标签，而不是名字
-p, --show-c-function         # 比较c语言文件的时候，显示不同之处所在的函数
-F RE,  --show-function-line=RE # 显示匹配RE的最近的行
-q, --brief                   # 只显示是否有差异，不显示详细内容
-e, --ed                      # 输出一个ed脚本
--normal                      # 输出一个正常的diff
-n, --rcs                     # 结果以rcs的方式显示
-y, --side-by-side            # 将两个文件已并列方式显示比较结果
-W num, --width=NUM           # 使用“-y”选项的时候，指定列宽
--left-column                 # 只输出公共行的左列
--suppress-common-lines       # 不要输出公共行
-D NAME, --ifdef=NAME         # 输出合并文件以显示‘#ifdef NAME’的差异
--GTYPE-group-format=GFMT     # 同上，但用GFMT格式化GTYPE输入组
--line-format=LFMT            # 同上，但用LFMT格式化GTYPE输入组
--LTYPE-line-format=LFMT      # 同上，但用LFMT格式化LTYPE输入行
-l, --paginate                # 将输出传递给pr”以分页
-t, --expand-tabs             # 将制表符展开为输出中的空格
-T, --initial-tab             # 通过预置选项卡使制表符对齐
-N, --new-file                # 将缺席文件视为空文件
--unidirectional-new-file     # 将缺席的第一批文件视为空文件
-s, --report-identical-files  # 当两个文件相同时报告
-X FILE, --exclude-from=FILE  # 排除与文件中任何模式匹配的文件
-S FILE, --starting-file=FILE # 从文件开始比较目录时
-r, --recursive               # 用递归的方式比较子目录下的所有文件
-x path                       # 不比较指定的文件
--from-file=FILE1             # 将FILE 1与所有操作数进行比较。FILE 1可以是一个目录
--to-file=FILE2               # 将所有操作数与文件2进行比较。文件2可以是一个目录
--horizon-lines=NUM           # 保持通用前缀和后缀的NUM行
-d  --minimal                 # 努力找出一组较小的变更
--speed-large-files           # 假设文件很大，并且有许多零散的小更改。

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

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
[sogrey@bogon demos]$ diff -y test.txt test2.txt
石家庄今日新增16例确诊病例				      <
中国留美博士遇害 美驻华使馆慰问				      <
特朗普夫人发文谴责国会暴乱					特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟				      |
北京一确诊者隐瞒行程不配合流调				      |	1月11日，美国第一夫人梅拉尼娅·特朗普通过白宫发表声明，谴责上
山西晋中新增2例无症状感染者				      <
[sogrey@bogon demos]$ 
[sogrey@bogon 文档]$ diff backup demos
只在 demos 存在：test.c
[sogrey@bogon 文档]$ diff -q backup/test.txt demos/test.txt
文件 backup/test.txt 和 demos/test.txt 不同
[sogrey@bogon 文档]$ 
```
