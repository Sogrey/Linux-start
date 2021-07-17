# cd - 切换用户当前工作目录

切换目录，在切换之前确保有权利进入该目录。将当前目录更改为dir。变量HOME是默认的dir，变量CDPATH定义包含dir在内的目录的搜索路径。CDPATH中的替代目录名由冒号(：)分隔。CDPATH中的空目录名与当前目录相同，即“.”。如果dir以斜杠(/)开头，则不使用CDPATH。

主要用途:

- 切换工作目录至dir。其中dir的表示法可以是绝对路径或相对路径。
- 若参数dir省略，则默认为使用者的shell变量HOME。
- 如果dir指定为~时表示为使用者的shell变量HOME，.表示当前目录，..表示当前目录的上一级目录。
- 环境变量CDPATH是由冒号分割的一到多个目录，你可以将常去的目录的上一级加入到CDPATH以便方便访问它们；如果dir以/开头那么CDPATH不会被使用。
- 当shopt选项cdable_vars打开时，如果dir在CDPATH及当前目录下均不存在，那么会把它当作变量，读取它的值作为要进入的目录。

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
cd  [-L|-P]  [dir]
```

参数‘-’相当于$OLDPWD。如果使用来自CDPATH的非空目录名，或者如果‘-‘是第一个参数，并且目录更改成功，则将新工作目录的绝对路径名写入标准输出。如果成功更改目录，则返回值为true；否则为false。

## 选项

``` bash
-L     # 强制遵循符号链接
-P     # 使用物理目录结构，而不是下面的符号链接
-      # 当前工作目录将被切换到环境变量OLDPWD所表示的目录，也就是前一个工作目录。
```
## 举例

``` bash
cd        # 进入用户主目录；
cd /      # 进入根目录
cd ~      # 进入用户主目录；
cd ..     # 返回上级目录（若当前目录为“/“，则执行完后还在“/"；".."为上级目录的意思）；
cd ../..  # 返回上两级目录；
cd !$     # 把上个命令的参数作为cd参数使用。
```