# wget - Linux系统下载文件工具

wget是一个免费的文件下载工具，可以从指定的URL下载文件到本地主机。它支持HTTP和FTP协议，经常用来抓取大量的网页文件。

wget命令 用来从指定的URL下载文件。wget非常稳定，它在带宽很窄的情况下和不稳定网络中有很强的适应性，如果是由于网络的原因下载失败，wget会不断的尝试，直到整个文件下载完毕。如果是服务器打断下载过程，它会再次联到服务器上从停止的地方继续下载。这对从那些限定了链接时间的服务器上下载大文件非常有用。

wget支持HTTP，HTTPS和FTP协议，可以使用HTTP代理。所谓的自动下载是指，wget可以在用户退出系统的之后在后台执行。这意味这你可以登录系统，启动一个wget下载任务，然后退出系统，wget将在后台执行直到任务完成，相对于其它大部分浏览器在下载大量数据时需要用户一直的参与，这省去了极大的麻烦。

用于从网络上下载资源，没有指定目录，下载资源回默认为当前目录。wget虽然功能强大，但是使用起来还是比较简单：

1. 支持断点下传功能 这一点，也是网络蚂蚁和FlashGet当年最大的卖点，现在，Wget也可以使用此功能，那些网络不是太好的用户可以放心了；
2. 同时支持FTP和HTTP下载方式 尽管现在大部分软件可以使用HTTP方式下载，但是，有些时候，仍然需要使用FTP方式下载软件；
3. 支持代理服务器 对安全强度很高的系统而言，一般不会将自己的系统直接暴露在互联网上，所以，支持代理是下载软件必须有的功能；
4. 设置方便简单 可能，习惯图形界面的用户已经不是太习惯命令行了，但是，命令行在设置上其实有更多的优点，最少，鼠标可以少点很多次，也不要担心是否错点鼠标；
5. 程序小，完全免费 程序小可以考虑不计，因为现在的硬盘实在太大了；完全免费就不得不考虑了，即使网络上有很多所谓的免费软件，但是，这些软件的广告却不是我们喜欢的。

## 适用范围

<!-- <div class="svg linux">Linux</div> -->
<div class="svg redhat">RedHat</div>
<div class="svg rhel">RHEL</div>
<div class="svg ubuntu">Ubuntu</div>
<div class="svg centos">CentOS</div>
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
wget  [options]  [path or URL]
```
wget有价格返回值：0，正常；1，通用错误；2，参数错误；3，IO错误；4，网络错误；5，SSL错误；6，用户名密码错误；7，协议错误；8，服务器错误。
## 选项

``` bash
-a                # 将指令运行过程记录到指定文件
-A                # 设置要下载问阿金的扩展名，多个扩展名使用，分割
-b                # 将下载任务放到后台运行
-B                # 设置基本参考的链接地址
-c                # 从上次中断的地方继续运行
-C                # 打开或者关闭服务器的数据快取功能，默认on
-d                # 调试模式
-D                # 设置接受的域名，多个域名使用，分开
-e                # 接货wget后就执行的指令
-F                # 将输入的文件作为HTML格式
-h                # 显示帮助信息
-i                # 从指定文件获取URL
-l                # 设置接受的目录
-L                # 下载有关联的连接         
-P                # 指定文件存放目录
-r                # 递归下载指定目录下的所有文件
-R                # 设置排除下载的文件类型
-nc               # 文件存在时，不覆盖
-nd               # 所有文件都下载到当前目录
-nv               # 下载时，只显示更新和出错信息
-q                # 静默模式
-nh               # 不查询主机名称
-v                # 显示详细执行过程
-V                # 显示版本信息
```
## 举例
下载
``` bash
[sogrey@localhost ~]$ wget -v www.baidu.com
--2021-07-15 00:07:11--  http://www.baidu.com/
正在解析主机 www.baidu.com (www.baidu.com)... 14.215.177.38, 14.215.177.39
正在连接 www.baidu.com (www.baidu.com)|14.215.177.38|:80... 已连接。
已发出 HTTP 请求，正在等待回应... 200 OK
长度：2381 (2.3K) [text/html]
正在保存至: “index.html”

100%[======================================>] 2,381       --.-K/s 用时 0s      

2021-07-15 00:07:11 (397 MB/s) - 已保存 “index.html” [2381/2381])

[sogrey@localhost ~]$ 
```
下载，指定存放目录
``` bash
[sogrey@localhost 文档]$ sudo -i
[sudo] sogrey 的密码：
[root@localhost ~]# cd /home/sogrey/文档/
[root@localhost 文档]# wget -P /baidu/ -r -l 2 www.baidu.com
--2021-07-15 00:13:53--  http://www.baidu.com/
正在解析主机 www.baidu.com (www.baidu.com)... 14.215.177.38, 14.215.177.39
正在连接 www.baidu.com (www.baidu.com)|14.215.177.38|:80... 已连接。
已发出 HTTP 请求，正在等待回应... 200 OK
长度：2381 (2.3K) [text/html]
正在保存至: “/baidu/www.baidu.com/index.html”

100%[======================================>] 2,381       --.-K/s 用时 0s      

2021-07-15 00:13:53 (586 MB/s) - 已保存 “/baidu/www.baidu.com/index.html” [2381/2381])

正在载入 robots.txt；请忽略错误消息。
--2021-07-15 00:13:53--  http://www.baidu.com/robots.txt
再次使用存在的到 www.baidu.com:80 的连接。
已发出 HTTP 请求，正在等待回应... 200 OK
长度：2814 (2.7K) [text/plain]
正在保存至: “/baidu/www.baidu.com/robots.txt”

100%[======================================>] 2,814       --.-K/s 用时 0s      

2021-07-15 00:13:54 (461 MB/s) - 已保存 “/baidu/www.baidu.com/robots.txt” [2814/2814])

FINISHED --2021-07-15 00:13:54--
Total wall clock time: 0.1s
Downloaded: 2 files, 5.1K in 0s (511 MB/s)
[root@localhost 文档]# 
```


