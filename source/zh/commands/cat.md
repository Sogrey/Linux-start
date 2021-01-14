# cat - 连接多个文件并打印到标准输出

主要用途：

- 显示文件内容，如果没有文件或文件为-则读取标准输入。
- 将多个文件的内容进行连接并打印到标准输出。
- 显示文件内容中的不可见字符（控制字符、换行符、制表符等）。

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
cat  [OPTION]... [FILE]...
cat  [选项]  file
cat  file1  file2  >  file3
```

## 选项

``` bash
-A, --show-all            # 等价于"-vET"组合选项。
-b, --number-nonblank     # 只对非空行编号，从1开始编号，覆盖"-n"选项。
-e                        # 等价于"-vE"组合选项。
-E, --show-ends           # 在每行的结尾显示'$'字符。
-n, --number              # 对所有行编号，从1开始编号。
-s, --squeeze-blank       # 压缩连续的空行到一行。
-t                        # 等价于"-vT"组合选项。
-T, --show-tabs           # 使用"^I"表示TAB（制表符）。
-u                        # POSIX兼容性选项，无意义。
-v, --show-nonprinting    # 使用"^"和"M-"符号显示控制字符，
                          # 除了LFD（line feed，即换行符'\n'）和TAB（制表符）。

--help                    # 显示帮助信息并退出。
--version                 # 显示版本信息并退出。
```

## 返回

返回状态为成功除非给出了非法选项或非法参数。

## 举例

``` bash
# 合并显示多个文件
cat ./1.log ./2.log ./3.log
# 显示文件中的非打印字符、tab、换行符
cat -A test.log
# 压缩文件的空行
cat -s test.log
# 显示文件并在所有行开头附加行号
cat -n test.log
# 显示文件并在所有非空行开头附加行号
cat -b test.log
# 将标准输入的内容和文件内容一并显示
echo '######' |cat - test.log
```
``` bash
[sogrey@bogon 文档]$ ls
test.txt
[sogrey@bogon 文档]$ ls -lh test.txt
-rwxrwxrwx. 1 sogrey sogrey 250 1月  12 00:19 test.txt
[sogrey@bogon 文档]$ cat -b test.txt
     1	石家庄今日新增16例确诊病例
     2	中国留美博士遇害 美驻华使馆慰问
     3	特朗普夫人发文谴责国会暴乱
     4	理塘文旅公司回应丁真抽烟
     5	北京一确诊者隐瞒行程不配合流调
     6	山西晋中新增2例无症状感染者
[sogrey@bogon 文档]$ cat test.txt test2.txt
石家庄今日新增16例确诊病例
中国留美博士遇害 美驻华使馆慰问
特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟
北京一确诊者隐瞒行程不配合流调
山西晋中新增2例无症状感染者
特朗普夫人发文谴责国会暴乱

1月11日，美国第一夫人梅拉尼娅·特朗普通过白宫发表声明，谴责上周发生在美国国会的暴乱。
[sogrey@bogon 文档]$ cat test.txt test2.txt > test3.txt
[sogrey@bogon 文档]$ cat -b test3.txt
     1	石家庄今日新增16例确诊病例
     2	中国留美博士遇害 美驻华使馆慰问
     3	特朗普夫人发文谴责国会暴乱
     4	理塘文旅公司回应丁真抽烟
     5	北京一确诊者隐瞒行程不配合流调
     6	山西晋中新增2例无症状感染者
     7	特朗普夫人发文谴责国会暴乱

     8	1月11日，美国第一夫人梅拉尼娅·特朗普通过白宫发表声明，谴责上周发生在美国国会的暴乱。
[sogrey@bogon 文档]$ 
```
