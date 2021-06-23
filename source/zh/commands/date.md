# date - 显示或设置系统时间与日期

以给定的格式显示当前的日期，或者设置系统时间。

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
date  [选项]
date  [+格式]
date  -u  [参数]
```
参数格式[MMDDhhmm[[CC]YY][.ss]]，分别对应（月、日、时、分、年前两位、年后两位、秒）
## 选项

``` bash
-f, --file=DATEFILE          # 和“--date”一样，文件的每一行都设置一次
-d, --date=STRING            # 显示字符串代表的时间，注意不是当前时间
-r, --reference=FILE         # 显示文件的最后修改时间
-R, --frc-2822               # 以rfc-2822的方式输出日期和时间，
--rfc-3339=TIMESPEC          # 以rfc-3339的方式输出日期和时间，精度可以是date、seconds、ns，日期和时间用一个空格隔开
-s,  --set=STRING            # 用指定字符串设置时间
-u,  --utc, --universal      # 输出或者设置通用时间

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
format可用的转义序列如下：
``` bash
%%      百分号
%a      当地缩写的工作日名称（例如，Sun）
%A      当地完整的工作日名称（例如，Sunday）
%b      当地缩写的月份名称（例如，Jan）
%B      当地完整的月份名称（例如，January）
%c      当地的日期和时间（例如，Thu Mar  3 23:05:25 2005）
%C      世纪，和%Y类似，但是省略后两位（例如，20）
%d      一月中的一天（例如，01）
%D      日期，等价于%m/%d/%y
%e      一月中的一天，格式使用空格填充，等价于%_d
%F      完整的日期；等价于%+4Y-%m-%d
%g      ISO标准计数周的年份的最后两位数字
%G      ISO标准计数周的年份，通常只对%V有用
%h      等价于%b
%H      小时，范围（00..23）
%I      小时，范围（00..23）
%j      一年中的一天，范围（001..366）
%k      小时，使用空格填充，范围（0..23），等价于%_H
%l      小时，使用空格填充，范围（1..12），等价于%_I
%m      月，范围（01..12）
%M      分钟，范围（00..59）
%n      换行符
%N      纳秒，范围（000000000..000000000）
%p      用于表示当地的AM或PM，如果未知则为空白
%P      类似于%p，但用小写表示
%q      季度，范围（1..4）
%r      当地以12小时表示的时钟时间（例如，11:11:04 PM）
%R      24小时每分钟；等价于%H:%M
%s      自协调世界时1970年01月01日00时00分以来的秒数
%S      秒数，范围（00..60）
%t      水平制表符
%T      时间；等价于%H:%M:%S
%u      一周中的一天（1..7），1代表星期一
%U      一年中的第几周，周日作为一周的起始（00..53）
%V      ISO标准计数周，该方法将周一作为一周的起始（01..53）
%w      一周中的一天（0..6），0代表星期天
%W      一年中的第几周，周一作为一周的起始（00..53）
%x      当地的日期表示（例如，12/31/99）
%X      当地的时间表示（例如，23:13:48）
%y      年份后两位数字，范围（00..99）
%Y      年份
%z      +hhmm格式的数值化时区格式（例如，-0400）
%:z     +hh:mm格式的数值化时区格式（例如，-04:00）
%::z    +hh:mm:ss格式的数值化时区格式（例如，-04:00:00）
%:::z   数值化时区格式，相比上一个格式增加':'以显示必要的精度（例如，-04，+05:30）
%Z      时区缩写（如EDT）
```
## 说明
 默认情况下，使用数字0来填补数字时间中的空缺。当然也可以指定其他方式：“%-“，不填补；”%_“，使用空格填补；”%0“，使用0；”%^“使用大写字母；”%#“，使用相反的字母

“--date=String“是一种自由格式，是一种方便读取的日期字符串，例如“Sun，2月29日16：21：42-0800”或“2004-02-29 16：21：42：42”，甚至是“下星期四”。日期字符串可能包含指示日历日期、时间、时区、周中日、相对时间、相对日期和数字的项。空字符串表示一天的开始。日期字符串可以包含指示日历日期、时间、时区、星期数、相对时间、相对日期和数字的项。日期字符串格式比这里容易记录的要复杂，但是在info文档中有完整的描述。
## 举例
不适用任何参数，直接显示日期和时间
``` bash
[sogrey@bogon ~]$ date
2021年 06月 23日 星期三 23:24:34 CST # 注意，这里显示的是CST时间
[sogrey@bogon ~]$ 
```
显示UTC时间
``` bash
[sogrey@bogon ~]$ date -u
2021年 06月 23日 星期三 15:24:57 UTC
[sogrey@bogon ~]$ 
```
设置CST日期时间
``` bash
[sogrey@bogon ~]$ sudo date -s 2018-9-4 # 这里可以看到支持的日期格式。如果没有设置时间，那么默认就是0点0分
2018年 09月 04日 星期二 00:00:00 CST
[sogrey@bogon ~]$ sudo date -s 20180905
2018年 09月 05日 星期三 00:00:00 CST
[sogrey@bogon ~]$ date -s 2018/9/6
date: 无法设置日期: 不允许的操作
2018年 09月 06日 星期四 00:00:00 CST
[sogrey@bogon ~]$ date -s 11:56   # 修改时间
date: 无法设置日期: 不允许的操作
2021年 06月 23日 星期三 11:56:00 CST
[sogrey@bogon ~]$ date -s 11:54:40
date: 无法设置日期: 不允许的操作
2021年 06月 23日 星期三 11:54:40 CST
[sogrey@bogon ~]$ 
```
显示当前是一年中的第几周，第几天
``` bash
[sogrey@bogon ~]$ date +第%U周第%j天
第25周第174天
[sogrey@bogon ~]$ 
```
显示12小时制度下的时间
``` bash
[sogrey@bogon ~]$ date +%r
下午 11时28分49秒
[sogrey@bogon ~]$ date +%p%H:%M:%S
下午23:28:57
[sogrey@bogon ~]$ 
```
显示当前日期
``` bash
[sogrey@bogon ~]$  date +%x
2021年06月23日
[sogrey@bogon ~]$  date +%F
2021-06-23
[sogrey@bogon ~]$ date +%Y-%m-%d # 多格式拼接
2021-06-23
[sogrey@bogon ~]$ 
```