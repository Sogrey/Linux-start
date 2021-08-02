# ab - Apache服务器的性能测试工具

ab命令 是一个测试你 Apache http 服务器的工具，你可以通过这个工具，指定一个单位时间内向 apache 发出的请求数量来看看你的 Apache 和机器配合的性能如何。

ab指令是apache的性能测试工具，它可以测试当前apache服务器的运行性能，显示每秒中可以处理多少个http请求。

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
ab [OPTION]
ab [ -A auth-username:password ] [ -c concurrency ] [ -C cookie-name=value
] [ -d ] [ -e csv-file ] [ -g gnuplot-file ] [ -h ] [ -H custom-header ] [
-i  ]  [  -k  ]  [  -n  requests  ] [ -p POST-file ] [ -P proxy-auth-user‐
name:password ] [ -q ] [ -s ] [ -S ] [ -t timelimit ] [ -T content-type  ]
[  -v verbosity] [ -V ] [ -w ] [ -x <table>-attributes ] [ -X proxy[:port]
]  [  -y  <tr>-attributes  ]  [  -z   <td>-attributes   ]   [http://]host‐
name[:port]/path
```

## 选项

``` bash
-A name：pass         # 向服务器提供用户名和密码
-b                    # tcp连接的缓冲区大小
-c                    # 并发请求数目，默认1个
-C cookie-name=value  # 添加cookie
-e csv-file           # 指定产生的csv文件
-g                    # 把测试结果写入到指定的gnuplot文件
-h                    # 显示帮助信息
-H                    # 为请求附加额外的头信息
-i                    # 执行http中的HEAD请求而不是GET
-k                    # 启动keepalive功能
-n                    # 指定测试会话中的请求次数
-p                    # 指定包含post数据的文件
-q                    # 如果请求数大于150，ab指令在处理10%或者100个请求后显示进度
-r                    # 当有socket接收错误的时候，不退出
-t                    # 指定测试的最大描述
-T                    # 指定Content-type信息
-v                    # 设置显示信息的级别
-V                    # 显示版本信息
-x                    # 设置table标记属性的字符串
-X                    # 设置代理服务器
-y                    # 设置tr标签
-z                    # 设置td标签
```
## 举例

测试性能
``` bash
[root@localhost ~]# ab -n 10 -c 10 http://www.qq.com/     #10个请求，并发10个
This is ApacheBench, Version 2.3 <$Revision: 655654 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/
Benchmarking www.qq.com (be patient)...apr_poll: The timeout specified has expired (70007)
Total of 6 requests completed
```
