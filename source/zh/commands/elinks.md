# elinks - 纯文本界面的WWW浏览器

elinks指令是一个纯文本格式的浏览器，支持颜色、表格、鼠标、菜单操作。

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
elinks  [OPTION]
```

## 选项

``` bash
-anonymous    # 匿名使用
-auto-submit  # 对于遇到的第一个表格，是否自动提交
-config-dump  # 将配置文件打印到标准输出
-config-file  # 指定配置文件
-h            # 显示帮助信息
```
## 举例
以文本方式访问网站
``` bash
[sogrey@bogon 文档]$ elinks www.baidu.com
```
访问本地目录
``` bash
[sogrey@bogon 文档]$ elinks ./demo/
```


