# fold - 按照指定的宽度显示文件
fold命令 用于控制文件内容输出时所占用的屏幕宽度。fold命令会从指定的文件里读取内容，将超过限定列宽的列加入增列字符后，输出到标准输出设备。若不指定任何文件名称，或是所给予的文件名为“-”，则fold指令会从标准输入设备读取数据。

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
fold  [选项]  file
```

## 选项

``` bash
-b, --bytes               # 以字节为单位，指定宽度
-c, --characters          # 以字符为单位，指定宽度
-s, --space               # 以空格分割
-w, --width               # 指定列宽，默认30

--help                    # 显示帮助文档
--version                 # 显示命令版本信息
```

## 举例

``` bash
[sogrey@bogon newDir]$ cat test.txt
石家庄今日新增16例确诊病例
中国留美博士遇害 美驻华使馆慰问
特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟
北京一确诊者隐瞒行程不配合流调
山西晋中新增2例无症状感染者
[sogrey@bogon newDir]$ fold -b16 test.txt # 每16个字节一行输出
石家庄今日
新增16例确
诊病例
中国留美博
士遇害 美驻
华使馆慰问
特朗普夫人
发文谴责国
会暴乱
理塘文旅公
司回应丁真
抽烟
北京一确诊
者隐瞒行程
不配合流调
山西晋中新
增2例无症状
感染者
[sogrey@bogon newDir]$ 
```
