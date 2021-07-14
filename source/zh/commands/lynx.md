# lynx - 纯文本模式的网页浏览器

lynx命令 是纯文本模式的网页浏览器，不支持图形、音视频等多媒体信息。

lynx是一个字符界面的全功能www浏览器，它没有图形界面，因此占用的资源较少。

## 适用范围

<!-- <div class="svg linux">Linux</div> -->
<div class="svg redhat">RedHat</div>
<div class="svg rhel">RHEL</div>
<div class="svg ubuntu">Ubuntu</div>
<!-- <div class="svg centos">CentOS</div> -->
<!-- <div class="svg debian">Debian</div> -->
<!-- <div class="svg deepin">Deepin</div> -->
<!-- <div class="svg suse">SUSE</div> -->
<!-- <div class="svg opensuse">openSUSE</div> -->
<div class="svg fedora">Fedora</div>
<!-- <div class="svg linuxmint">Linux Mint</div> -->
<!-- <div class="svg mxlinux">MX Linux</div> -->
<!-- <div class="svg alpinelinux">Alpine Linux</div> -->
<!-- <div class="svg archlinux">Arch Linux</div> -->

## 语法

``` bash
lynx [OPTION] [参数]
```
参数:

URL：指定要访问的网站的URL地址。
## 选项

``` bash
-case        # 在搜索字符串时，区分大小写；
-ftp         # 关闭ftp功能；
-nobrowse    # 关闭目录浏览功能；
-noclor      # 关闭色彩显示模式；
-reload      # 更新代理服务器的缓存，只对首页有效；
--color      # 如果系统支持彩色模式，则激活彩色模式；
--help       # 显示指令的帮助信息；
--versiom    # 显示指令的版本信息。
```
## 内部命令
### 移动命令
```
下方向键：页面上的下一个链接(用高亮度显示)。
上方向键：页面上的前一个链接(用高亮度显示)。
回车和右方向键：跳转到链接指向的地址。
左方向键：回到上一个页面。
```
### 滚动命令
```
+、Page-Down、Space、Ctrl+f：向下翻页。
-、Page-Up、b、Ctrl+b：向上翻页。
Ctrl+a：移动到当前页的最前面。
Ctrl+e：移动到当前页的最后面。
Ctrl+n：向下翻两行。
Ctrl+p：往回翻两行。
)：向下翻半页。
(：往回翻半页。
#：回到当前页的 Toolbar 或 Banner。
```
###文件操作命令
```
c：建立一个新文件。
d：下载选中的文件。
E：编辑选中的文件。
f：为当前文件显示一个选项菜单。
m：修改选中文件的名字或位置。
r：删除选中的文件。
t：Tag highlighted file。
u：上载一个文件到当前目录。
```
### 其他命令
```
?、h：帮助。
a：把当前链接加入到一个书签文件里。
c：向页面的拥有者发送意见或建议。
d：下载当前链接。
e：编辑当前文件。
g：跳转到一个用户 指定的URL或文件。
G：编辑当前页的URL，并跳转到这个URL。
i：显示文档索引。
j：执行预先定义的“短”命令。
k：显示键盘命令列表。
l：列出当前页上所有链接的地址。
m：回到首页 。
o：设置选项。
p：把当前页输出到文件，e-mail，打印机或其他地方。
q：退出。
/：在当前页内查找字符串。
s：在外部搜索输入的字符串。
n：搜索下一个。
v：查看一个书签文件。
V：跳转到访问过的地址。
x：不使用缓存。
z：停止当前传输。
[backspace]：跳转到历史页(同 V 命令)。
=：显示当前页的信息。
：查看当前页的源代码。
!：回到shell提示符下。
```
## 举例
以文本方式访问网站
``` bash
[sogrey@bogon 文档]$ lynx www.baidu.com
```



