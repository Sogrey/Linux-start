# tee - 从标准输入读取数据并重定向到标准输出和文件

将标准输入的内容复制到指定的文件中，同时在标准输出中显示。

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
tee  [选项]  [files]
```

## 选项

``` bash
-a, --append                   # 追加模式，并不覆盖
-i, --ignore-interrupts        # 忽略终端信号

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
[sogrey@bogon demos]$ sort test5.txt | tee test50.txt # 排序之后保存到test50.c，并且送到标准输出
北京一确诊者隐瞒行程不配合流调
北京一确诊者隐瞒行程不配合流调
理塘文旅公司回应丁真抽烟
山西晋中新增2例无症状感染者
石家庄今日新增16例确诊病例
特朗普夫人发文谴责国会暴乱
特朗普夫人发文谴责国会暴乱
特朗普夫人发文谴责国会暴乱
中国留美博士遇害 美驻华使馆慰问
[sogrey@bogon demos]$ cat test50.txt # 查看内容
北京一确诊者隐瞒行程不配合流调
北京一确诊者隐瞒行程不配合流调
理塘文旅公司回应丁真抽烟
山西晋中新增2例无症状感染者
石家庄今日新增16例确诊病例
特朗普夫人发文谴责国会暴乱
特朗普夫人发文谴责国会暴乱
特朗普夫人发文谴责国会暴乱
中国留美博士遇害 美驻华使馆慰问
[sogrey@bogon demos]$ 
```
