# sort - 对文本文件中所有行进行排序

以行为单位，对文本文件进行排，并输出排序结果。默认情况下，以每一行为一个单位，从首字符开始按照ASCII码向后逐个比较。

主要用途：

- 将所有输入文件的内容排序后并输出。
- 当没有文件或文件为-时，读取标准输入。

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
sort  [选项]  file
sort  [OPTION]... --files0-from=F
```

## 选项

``` bash
# 排序
-b, --ignore-leading-blanks    # 忽略开头的空白。
-d, --dictionary-order         # 仅考虑空白、字母、数字。
-f, --ignore-case              # 将小写字母作为大写字母考虑。
-g, --general-numeric-sort     # 根据数字排序。
-i, --ignore-nonprinting       # 排除不可打印字符。
-M, --month-sort               # 按照非月份、一月、十二月的顺序排序。
-h, --human-numeric-sort       # 根据存储容量排序(注意使用大写字母，例如：2K 1G)。
-n, --numeric-sort             # 根据数字排序。
-R, --random-sort              # 随机排序，但分组相同的行。
    --random-source=FILE       # 从FILE中获取随机长度的字节。
-r, --reverse                  # 将结果倒序排列。
    --sort=WORD                # 根据WORD排序，其中: general-numeric 等价于 -g，
                               # human-numeric 等价于 -h，month 等价于 -M，numeric
                               # 等价于 -n，random 等价于 -R，version 等价于 -V。
-V, --version-sort             # 文本中(版本)数字的自然排序。

# 其他 

    --batch-size=NMERGE                 # 一次合并最多NMERGE个输入；
                                        # 超过部分使用临时文件。
-c, --check, --check=diagnose-first     # 检查输入是否已排序，该操作不会执行排序。
-C, --check=quiet, --check=silent       # 类似于 -c 选项，但不输出第一个未排序的行。
    --compress-program=PROG             # 使用PROG压缩临时文件；使用PROG -d解压缩。
    --debug                             # 注释用于排序的行，发送可疑用法的警报到stderr。
    --files0-from=F                     # 从文件F中读取以NUL结尾的所有文件名称；
                                        # 如果F是 - ，那么从标准输入中读取名字。
-k, --key=KEYDEF                        # 通过一个key排序；KEYDEF给出位置和类型。
-m, --merge                             # 合并已排序文件，之后不再排序。
-o, --output=FILE                       # 将结果写入FILE而不是标准输出。
-s, --stable                            # 通过禁用最后的比较来稳定排序。
-S, --buffer-size=SIZE                  # 使用SIZE作为内存缓存大小。
-t, --field-separator=SEP               # 使用SEP作为列的分隔符。
-T, --temporary-directory=DIR           # 使用DIR作为临时目录，而不是 $TMPDIR 
                                        # 或 /tmp；多次使用该选项指定多个临时目录。
    --parallel=N                        # 将并发运行的排序数更改为N。
-u, --unique                            # 同时使用-c，严格检查排序；不同时使用-c，
                                        # 输出排序后去重的结果。
-z, --zero-terminated                   # 设置行终止符为NUL（空），而不是换行符。

    --help                              # 显示帮助信息并退出。
    --version                           # 显示版本信息并退出。
```

> KEYDEF的格式为：F[.C][OPTS][,F[.C][OPTS]] ，表示开始到结束的位置。
>
> F表示列的编号
>
> C表示
>
> OPTS为[bdfgiMhnRrV]中的一到多个字符，用于覆盖当前排序选项。
>
> 使用--debug选项可诊断出错误的用法。

## 返回值

返回0表示成功，返回非0值表示失败。

## 举例

``` bash
[sogrey@bogon 文档]$ ls
backup  demos
[sogrey@bogon 文档]$ cd demos
[sogrey@bogon demos]$ ls
test2.txt  test3.txt  test4.txt  test.txt
[sogrey@bogon demos]$ cat test.txt
石家庄今日新增16例确诊病例
中国留美博士遇害 美驻华使馆慰问
特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟
北京一确诊者隐瞒行程不配合流调
山西晋中新增2例无症状感染者
[sogrey@bogon demos]$ sort test.txt
北京一确诊者隐瞒行程不配合流调
理塘文旅公司回应丁真抽烟
山西晋中新增2例无症状感染者
石家庄今日新增16例确诊病例
特朗普夫人发文谴责国会暴乱
中国留美博士遇害 美驻华使馆慰问
[sogrey@bogon demos]$ 

```
