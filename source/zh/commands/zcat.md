# zcat - 显示压缩包中文件的内容

zcat命令 用于不真正解压缩文件，就能显示压缩包中文件的内容的场合。

解压有gzip压缩的文件，将解压结果送到标准输出。

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
zcat  [-fhVL]  文件
```

## 选项

``` bash
-S                               # 指定gzip格式的压缩包的后缀。当后缀不是标准压缩包后缀时使用此选项；
-c                               # 将文件内容写到标注输出；
-d                               # 执行解压缩操作；
-l                               # 显示压缩包中文件的列表；
-L                               # 显示软件许可信息；
-q                               # 禁用警告信息；
-r                               # 在目录上执行递归操作；
-t                               # 测试压缩文件的完整性；
-V                               # 显示指令的版本信息；
-l                               # 更快的压缩速度；
-9                               # 更高的压缩比。

-f, --force                      # 强制执行
-L, --licence                    # 显示gzip的版本并且退出

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon 文档]$ zcat -l 1.c.gz # 查看压缩包信息
         compressed        uncompressed  ratio uncompressed_name
                 70                  53   9.4% 1.c
```

``` bash
[sogrey@bogon 文档]$ zcat 1.c.gz  # 解压文件到标准输出
hello world,
i love linux,
love code.
```
