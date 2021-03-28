# mv - 用来对文件或目录重新命名
将文件或者目录移动到另一个地方，或者重命名。



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
mv  [选项]  [-T]  src  dst
mv  [选项]  src  directory
mv  [选项]  -t  directory  src
```

## 选项

``` bash
--backup=[control]           # 为每一个存在的文件创建备份
-b                           # 和“--backup”一样，但是没有参数
-f,  --force                 # 强制移动
-i,  --interactive           # 使用交互的方式移动
-n,  --no-clobber            # 不覆盖已经存在的文件。如果同时制定了“-i，-n，-f”中的多个选项，那么只有最后一个选项有效。
--strip-trailing-slashes     # 从每个源参数中移除任何尾随斜线。
-S,  --suffix=SUFFIX         # 重写通常的备份后缀
-t,  --target-directory      # 将所有源文件移动到目标文件夹
-T,   --no-target-directory  # 将目标视为正常文件
-u,  --update                # 当目的文件不存在，或者源文件比目的文件新的时候才移动
-v,  --verbose               # 显示详细执行过程

--help            # 显示帮助文档
--version         # 显示命令版本信息
```

备份后缀为‘~’，除非设置为“--”后缀或者SSIMPLE_BACKUP_SUFFIX。版本控制方法可以通过“--backup”的选项或通过VERSION_CONTROL环境变量来选择。以下是这些值：

- none，off：从不备份，即使给出了“--backup”选项。
- numbered，t：创建编号备份。
- existing，nil：如果有编号备份，则为编号，否则为简单。
- simple，over：总是创建简单备份。


## 举例

将目录/usr/men中的所有文件移到当前目录（用.表示）中：
``` bash
mv /usr/men/* .
```
移动文件
``` bash
mv file_1.txt /home/office/
```
移动多个文件
``` bash
mv file_2.txt file_3.txt file_4.txt /home/office/
mv *.txt /home/office/
```
移动目录
``` bash
mv directory_1/ /home/office/
```
重命名文件或目录
``` bash
mv file_1.txt file_2.txt # 将文件file_1.txt改名为file_2.txt
```
重命名目录
``` bash
mv directory_1/ directory_2/
```
打印移动信息
``` bash
mv -v *.txt /home/office
```
提示是否覆盖文件
``` bash
mv -i file_1.txt /home/office
```
源文件比目标文件新时才执行更新
``` bash
mv -uv *.txt /home/office
```
不要覆盖任何已存在的文件
``` bash
mv -vn *.txt /home/office
```
复制时创建备份
``` bash
mv -bv *.txt /home/office
```
无条件覆盖已经存在的文件
``` bash
mv -f *.txt /home/office
```

在同一个目录下移动，即重命名。
``` bash
[sogrey@bogon DirTest]$ ls
Dir1  Dir2
[sogrey@bogon DirTest]$ mv Dir1 DirTmp
[sogrey@bogon DirTest]$ ls
Dir2  DirTmp
[sogrey@bogon DirTest]$ 
```
移动到其他地方
``` bash
[sogrey@bogon DirTest]$ ls
Dir2  DirTmp
[sogrey@bogon DirTest]$ mv DirTmp Dir2/Dir1 #DirTmp移动到Dir2目录下并重命名为Dir1
[sogrey@bogon DirTest]$ ls
Dir2
[sogrey@bogon DirTest]$ cd Dir2
[sogrey@bogon Dir2]$ ls
Dir1  run.sh
```