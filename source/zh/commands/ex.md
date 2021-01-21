# ex - 启动vim编辑器的ex编辑模式

在 ex 模式下启动vim文本编辑器。ex执行效果如同vi -E，适用于法及参数可参照vi指令，如要从Ex模式回到普通模式，则在vim中输入:vi或:visual即可。


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
ex  [选项]  file
```

## 选项

``` bash
+num                 # 从文本的指定行开始显示
-b                   # 进入二进制模式
-c                   # 第一个文件编辑完成偶执行指定的指令
-d                   # 进入diff模式，编辑多个文件时，显示差异部分
-m                   # 不允许修改文件
-n                   # 不使用缓存
-o                   # 同时打开n个文件
-p                   # 以tab形式显示每个文件
-r                   # 列出缓存，并显示恢复的信息
-R                   # 以只读模式打开
-s                   # 静默模式，不显示任何错误信息

--help               # 显示帮助文档
--version            # 显示命令版本信息
```

## 举例

``` bash
[sogrey@bogon demo4]$ ls
col.txt  hello.txt  test2.txt
[sogrey@bogon demo4]$ ex test.txt  # 进入ex模式编辑
"test.txt" [New File]
Entering Ex mode.  Type "visual" to go to Normal mode.
:visual  # visual

```
