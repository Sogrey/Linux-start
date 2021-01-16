# diff3 - 比较3个文件不同的地方

diff3命令 用于比较3个文件，将3个文件的不同的地方显示到标准输出。

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
diff3  [选项]  MYFILE  OLDFILE  YOURFILE
```

## 选项

``` bash
-e, --ed                    # 输出从OLDFILE到YOURFILE到MYFILE的未合并更改
-E, --show-overlap          # 输出未合并的更改，将冲突括起来
-A, --show-all              # 输出所有更改，将冲突括起来
-x, --overlap-only          # 输出重叠变化
-X,                         # 输出重叠变化，将冲突括起来
-3, --easy-only             # 输出未合并的不重叠更改
-m, --merge                 # 输出合并文件而不是ed脚本(默认-A)。
-L LABEL, --label=LABEL     # 使用文件LABEL
-i                          # 将‘w’和‘q’命令附加到ed脚本中
-a, --text                  # 将所有文件当做文本
-T  --initial-tab           # 通过预置选项卡使制表符对齐
--diff-program=PROGRAM      # 使用PROGRAM来比较文件

--help                      # 显示帮助文档
--version                   # 显示命令版本信息
```

## 举例

``` bash
[sogrey@bogon backup]$ diff3 test.txt test2.txt test3.txt
====
1:1,7c
  石家庄今日新增16例确诊病例
  中国留美博士遇害 美驻华使馆慰问
  特朗普夫人发文谴责国会暴乱
  理塘文旅公司回应丁真抽烟
  123
  北京一确诊者隐瞒行程不配合流调
  山西晋中新增2例无症状感染者
2:1,3c
  特朗普夫人发文谴责国会暴乱
  
  1月11日，美国第一夫人梅拉尼娅·特朗普通过白宫发表声明，谴责上周发生在美国国会的暴乱。
3:1,9c
  石家庄今日新增16例确诊病例
  中国留美博士遇害 美驻华使馆慰问
  特朗普夫人发文谴责国会暴乱
  理塘文旅公司回应丁真抽烟
  北京一确诊者隐瞒行程不配合流调
  山西晋中新增2例无症状感染者
  特朗普夫人发文谴责国会暴乱
  
  1月11日，美国第一夫人梅拉尼娅·特朗普通过白宫发表声明，谴责上周发生在美国国会的暴乱。
[sogrey@bogon backup]$ 
```
