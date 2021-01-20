# uniq - 显示或忽略重复的行

将文件中重复出现的行删除，结果送到标准输出或者指定文件。在使用uniq指令之前，必须使用sort对内容进行排序，否则没有效果。如果没有选项，则将匹配的行合并到第一个匹配项。

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
uniq  [选项]  [input]  [output]
```

将输入文件（或标准输入）中邻近的重复行写入到输出文件（或标准输出）中。

当没有选项时，邻近的重复行将合并为一个。

- INPUT（可选）：输入文件，不提供时为标准输入。
- OUTPUT（可选）：输出文件，不提供时为标准输出。

## 选项

``` bash
-c,--count                           # 显示行重复出现的次数
-d, --repeated                       # 仅显示重复出现的行
-D, --all-repeated[=delimit-method]  # 打印所有重复行
-f, --skip-fields=N                  # 忽略前n个字段
-i, --ignore-case                    # 比较时忽略大小写
-s, --skip-chars=N                   # 忽略前n个字符
-u, --unique                         # 只显示不重复的行
-z, --zero-terminated                # 以0字节为结束符，而不是换行
-w, --check-chars=N                  # 比较不超过指定次数

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

## 举例

``` bash
[sogrey@bogon demos]$ cat test5.txt
石家庄今日新增16例确诊病例
北京一确诊者隐瞒行程不配合流调
中国留美博士遇害 美驻华使馆慰问
特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟
北京一确诊者隐瞒行程不配合流调
特朗普夫人发文谴责国会暴乱
山西晋中新增2例无症状感染者
特朗普夫人发文谴责国会暴乱
[sogrey@bogon demos]$ sort test5.txt | uniq -c # 先排序，然后再删除重复行，显示重复行出现的次数
      2 北京一确诊者隐瞒行程不配合流调
      1 理塘文旅公司回应丁真抽烟
      1 山西晋中新增2例无症状感染者
      1 石家庄今日新增16例确诊病例
      3 特朗普夫人发文谴责国会暴乱
      1 中国留美博士遇害 美驻华使馆慰问
[sogrey@bogon demos]$ sort test5.txt | uniq -c -u # 只显示不重复的行
      1 理塘文旅公司回应丁真抽烟
      1 山西晋中新增2例无症状感染者
      1 石家庄今日新增16例确诊病例
      1 中国留美博士遇害 美驻华使馆慰问
[sogrey@bogon demos]$ 
```
