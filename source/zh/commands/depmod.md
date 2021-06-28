# depmod - 分析可载入模块的相依性

depmod命令 可产生模块依赖的映射文件，在构建嵌入式系统时，需要由这个命令来生成相应的文件，由modprobe使用。

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
depmod  [OPTION]
```

## 选项

``` bash
-a, --all                    # 分析所有可用的模块；
-d, debug                    # 执行排错模式；
-e                           # 输出无法参照的符号；
-i                           # 不检查符号表的版本；
-m<文件>, system-map<文件>   # 使用指定的符号表文件；
-s, --system-log             # 在系统记录中记录错误；
-v, --verbose                # 执行时显示详细的信息；
-V, --version                # 显示版本信息；
--help                       # 显示帮助。
```
## 举例

无
