# csplit - 将一个大文件分割成小的碎片文件

csplit命令 用于将一个大文件分割成小的碎片，并且将分割后的每个碎片保存成一个文件。碎片文件的命名类似“xx00”，“xx01”。csplit命令是split的一个变体，split只能够根据文件大小或行数来分割，但csplit能够根据文件本身特点来分割文件。

将文件按照指定的模式分割，默认的输出文件名是xx00、xx01、xx02等，指令会显示每个输出文件的大小。


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
csplit  [选项]  file  格式
```

## 选项

``` bash
-b, --suffix-format=FORMAT       # 使用sprintf格式而不是%02d
-f name,  --prefix=PREFIX        # 指定输出文件的前缀名字，而不是使用“xx”
-k, --keep-files                 # 不要删除错误的输出文件
-n num                           # 指定输出文件名的字符数，这里指文件名中的序号长度
-z, --elide-empty-files          # 删除空文件
-s, --quiet, --silent            # 不显示输出文件的大小

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

## 格式

- 整数             ： 不包括指定的行，并以其为文件分块边界
- /表达式/[偏移量]  ：  不包括匹配到的行，并以其为文件分块边界
- %表达式%[偏移量]  ：  预先跳过匹配的行数，以其为文件分块边界
- {整数}           ：  将之前指定的模式重复指定的次数
- {*}              ：  将之前指定的模式重复尽可能多的次数

## 举例

``` bash
[sogrey@bogon newDir]$ ls
test.txt
[sogrey@bogon newDir]$ cat test.txt # 查看文件内容
石家庄今日新增16例确诊病例
中国留美博士遇害 美驻华使馆慰问
特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟
北京一确诊者隐瞒行程不配合流调
山西晋中新增2例无症状感染者
[sogrey@bogon newDir]$ csplit test.txt 3 # 从第3行开始分割，输出分割后的文件大小
86
164
[sogrey@bogon newDir]$ ls
test.txt  xx00  xx01
[sogrey@bogon newDir]$ cat xx00  # 分别查看每个片段文件输出文件内容
石家庄今日新增16例确诊病例
中国留美博士遇害 美驻华使馆慰问
[sogrey@bogon newDir]$ cat xx01
特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟
北京一确诊者隐瞒行程不配合流调
山西晋中新增2例无症状感染者
[sogrey@bogon newDir]$ csplit -n 3 -f new test.txt 3  # 指定输出文案前缀te，名字长度3个。这里指文件名中的序号是3个长度
86
164
[sogrey@bogon newDir]$ ls
new000  new001  test.txt  xx00  xx01
[sogrey@bogon newDir]$ 
```
