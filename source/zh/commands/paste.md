# paste - 将多个文件按列队列合并

paste命令 用于将多个文件按照列队列进行合并。

将指定的文件按照列的方式合并，将结果显示到标准输出设备上，相当于两个并列的cat命令。

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
paste  [选项]  files
```

## 选项

``` bash
-d list, --delimiters=list       # 以指定的分隔符区取代tab
-s                               # 合并同一个文件的多行

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

## 举例

``` bash
[sogrey@bogon newDir]$ ls
new000  new001  test.txt  xx00  xx01
[sogrey@bogon newDir]$ cat new000
石家庄今日新增16例确诊病例
中国留美博士遇害 美驻华使馆慰问
[sogrey@bogon newDir]$ cat new001
特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟
北京一确诊者隐瞒行程不配合流调
山西晋中新增2例无症状感染者
[sogrey@bogon newDir]$ paste new000 new001  # 将文件合并
石家庄今日新增16例确诊病例	特朗普夫人发文谴责国会暴乱
中国留美博士遇害 美驻华使馆慰问	理塘文旅公司回应丁真抽烟
	北京一确诊者隐瞒行程不配合流调
	山西晋中新增2例无症状感染者
[sogrey@bogon newDir]$ cat test.txt
石家庄今日新增16例确诊病例
中国留美博士遇害 美驻华使馆慰问
特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟
北京一确诊者隐瞒行程不配合流调
山西晋中新增2例无症状感染者
[sogrey@bogon newDir]$ paste -s test.txt # 将同一个文件的多行合并成多列
石家庄今日新增16例确诊病例	中国留美博士遇害 美驻华使馆慰问	特朗普夫人发文谴责国会暴乱	理塘文旅公司回应丁真抽烟	北京一确诊者隐瞒行程不配合流调	山西晋中新增2例无症状感染者
[sogrey@bogon newDir]$ 
```
