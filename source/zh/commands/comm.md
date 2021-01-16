# comm - 逐行比较两个已经排序过的文件

逐行比较两个已经排序过的文件。结果以3列显示：第1列显示只在file1出现的内容，第2列显示只在file2出现的内容，第3列显示同时出现的内容。

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
comm [OPTION]... FILE1 FILE2
```

## 选项

``` bash
-1                               # 不显示第一个文件中出现的内容
-2                               # 不显示第二个文件出现的内容
-3                               # 不显示同时出现的内容         
--check-order                    # 检查输入是否正确排序，即使所有输入行都已经配对
--nocheck-order                  # 不检查输入是否正确排序
--output-delimiter=STR           # 使用STR将列分割

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

## 举例

``` bash
[sogrey@bogon backup]$ diff -y test.txt test2.txt
石家庄今日新增16例确诊病例				      <
中国留美博士遇害 美驻华使馆慰问				      <
特朗普夫人发文谴责国会暴乱					特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟				      |
123							      |	1月11日，美国第一夫人梅拉尼娅·特朗普通过白宫发表声明，谴责上
北京一确诊者隐瞒行程不配合流调				      <
山西晋中新增2例无症状感染者				      <
[sogrey@bogon backup]$ comm test.txt test2.txt
石家庄今日新增16例确诊病例
	特朗普夫人发文谴责国会暴乱
comm: 文件2 没有被正确排序
	
	1月11日，美国第一夫人梅拉尼娅·特朗普通过白宫发表声明，谴责上周发生在美国国会的暴乱。
中国留美博士遇害 美驻华使馆慰问
comm: 文件1 没有被正确排序
特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟
123
北京一确诊者隐瞒行程不配合流调
山西晋中新增2例无症状感染者
[sogrey@bogon backup]$ 
```
