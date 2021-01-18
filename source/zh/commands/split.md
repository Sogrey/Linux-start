# split - 分割任意大小的文件

将一个大文件切割成较小的文件，默认情况下每1000行就会切割一次。分割后的文件，默认以xaa、xab、xac等命名。用户亦可以指定名字的前缀，例如指定前缀test，那么分割后的文件是testaa、testab、testac等。

split命令 可以将一个大文件分割成很多个小文件，有时需要将文件分割成更小的片段，比如为提高可读性，生成日志等。

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
split  [OPTION]… [INPUT [PREFIX]
```

## 选项

``` bash
-a, --suffix-length=N      # 使用长度为N的后缀(默认为2)
-b, --bytes=SIZE           # 设置多少个字节分割一次
-C size, --line-size=size  # 设置每行最多size个字节
-d, --numeric-suffixes     # 用数字后缀代替字母
-l num, --line=num, -num   # 设置每多少行切割一次
--verbose                  # 在打开每个输出文件之前打印一个诊断文件

--help                     # 显示帮助文档
--version                  # 显示命令版本信息
```

## 举例

``` bash
[sogrey@bogon demos]$ ls
test2.txt  test3.txt  test4.txt  test.c  test.txt
[sogrey@bogon demos]$ cat test.txt
石家庄今日新增16例确诊病例
中国留美博士遇害 美驻华使馆慰问
特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟
北京一确诊者隐瞒行程不配合流调
山西晋中新增2例无症状感染者
[sogrey@bogon demos]$ split -2 test.txt # 每2行分割一次
[sogrey@bogon demos]$ ls
test2.txt  test3.txt  test4.txt  test.c  test.txt  xaa  xab  xac
[sogrey@bogon demos]$ cat xaa
石家庄今日新增16例确诊病例
中国留美博士遇害 美驻华使馆慰问
[sogrey@bogon demos]$ cat xab
特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟
[sogrey@bogon demos]$ cat xac
北京一确诊者隐瞒行程不配合流调
山西晋中新增2例无症状感染者
[sogrey@bogon demos]$ cat test2.txt
特朗普夫人发文谴责国会暴乱

1月11日，美国第一夫人梅拉尼娅·特朗普通过白宫发表声明，谴责上周发生在美国国会的暴乱。
[sogrey@bogon demos]$ split -b 10 test2.txt SPLIT # 10个字节分割，前缀名Tsplit
[sogrey@bogon demos]$ ls
SPLITaa  SPLITad  SPLITag  SPLITaj  SPLITam  SPLITap    test3.txt  test.txt  xac
SPLITab  SPLITae  SPLITah  SPLITak  SPLITan  SPLITaq    test4.txt  xaa
SPLITac  SPLITaf  SPLITai  SPLITal  SPLITao  test2.txt  test.c     xab
[sogrey@bogon demos]$ cat SPLITaa
特朗普�[sogrey@bogon demos]$ 
```
