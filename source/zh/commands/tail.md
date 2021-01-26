# tail - 在屏幕上显示指定文件的末尾若干行

显示文本文件尾部的部分内容，默认显示最后10行。

tail命令 用于输入文件中的尾部内容。

- 默认在屏幕上显示指定文件的末尾10行。
- 处理多个文件时会在各个文件之前附加含有文件名的行。
- 如果没有指定文件或者文件名为-，则读取标准输入。
- 如果表示字节或行数的NUM值之前有一个+号，则从文件开头的第NUM项开始显示，而不是显示文件的最后NUM项。
- NUM值后面可以有后缀：
  - b : 512
  - kB : 1000
  - k : 1024
  - MB : 1000 * 1000
  - M : 1024 * 1024
  - GB : 1000 * 1000 * 1000
  - G : 1024 * 1024 * 1024
  - T、P、E、Z、Y等以此类推。

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
tail  [选项]  file
```

## 选项

``` bash
-c, --bytes=NUM                 # 输出文件尾部的NUM（NUM为整数）个字节内容。
-f, --follow[={name|descript}]  # 显示文件最新追加的内容。“name”表示以文件名的方式监视文件的变化。
-F                             #  与 “--follow=name --retry” 功能相同。
-n, --line=NUM                 #  输出文件的尾部NUM（NUM位数字）行内容。
--pid=<进程号>                  # 与“-f”选项连用，当指定的进程号的进程终止后，自动退出tail命令。
-q, --quiet, --silent           # 当有多个文件参数时，不输出各个文件名。
--retry                        #  即是在tail命令启动时，文件不可访问或者文件稍后变得不可访问，都始终尝试打开文件。使用此选项时需要与选项“--follow=name”连用。
-s, --sleep-interal=<秒数>     # 与“-f”选项连用，指定监视文件变化时间隔的秒数。
-v, --verbose                  #  当有多个文件参数时，总是输出各个文件名。

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon newDir3]$ ls
1.txt  students.txt  test2.txt  test.txt
[sogrey@bogon newDir3]$ cat test2.txt
123
23
212
[sogrey@bogon newDir3]$ tail -n 1 test2.txt # 显示最后一行
212
[sogrey@bogon newDir3]$ tail -c 6 test2.txt # 显示最后6个字符
3
212
[sogrey@bogon newDir3]$ 
```
