# cal - 显示当前日历或指定日期的日历

cal命令 用于显示当前日历，或者指定日期的日历，如果没有指定参数，则显示当前月份。

一个单一的参数指定要显示的年份 (1 - 9999) ; 注意年份必须被完全地指定: cal 89 不会 显示1989年的日历. 两个参数表示月份 (1 - 12) 和年份. 如果没有指定参数, 则显示当前月份的日历.

一年从Jan 1 (1 月 1 日) 开始.

格里高利历法改革(Gregorian Reformation)被认为发生于 1752 年 9 月 3 日. 在此之前, 多数国家已经认可这项改革(尽管有一些直到 20 世纪初才认可它). 那天之后的 10 天在这项改革被略去了, 所以那个月的日历有点不太寻常.

cal指令可以显示一个日历信息，如果没有指定选项和参数，那么就会显示当前的月份。
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
cal  [-smjy13]  [[[day] month] year]  
```

## 选项

``` bash
-V      # 显示命令版本信息
-1      # 显示一个月的日历信息，这是默认值
-3      # 显示上个月、这个月、下个月的日历信息
-s      # 将星期日作为第一天来显示
-m      # 将星期一作为一周的第一天，默认星期日是第一天
-j      # 显示儒略历（显示的是从1月1日起，到当前的天数）
-y      # 显示当年的日历信息
```
一个参数指定要显示的年份(1-9999)；请注意，必须指定完整的年份：“cal 89”将不显示1989年的日历。两个参数表示月份(1-12)和年份。三个参数表示日期(1-31)、月份和年份，如果在终端上显示日历，则会突出显示日期。如果没有参数，则显示当前月份的日历。一年从1月1日开始。一周的第一天由地区决定。
## 举例
显示儒略历日历
``` bash
[sogrey@bogon ~]$ cal -j # 这里显示的不是“日”，而是一年的第几天
         六月 2021         
 日  一  二  三  四  五  六
        152 153 154 155 156
157 158 159 160 161 162 163
164 165 166 167 168 169 170
171 172 173 174 175 176 177
178 179 180 181

[sogrey@bogon ~]$ 
```
将“星期日”作为第一天显示，显示最近3个月
``` bash
[sogrey@bogon ~]$ cal -3 -s
      五月 2021             六月 2021             七月 2021     
日 一 二 三 四 五 六  日 一 二 三 四 五 六  日 一 二 三 四 五 六
                   1         1  2  3  4  5               1  2  3
 2  3  4  5  6  7  8   6  7  8  9 10 11 12   4  5  6  7  8  9 10
 9 10 11 12 13 14 15  13 14 15 16 17 18 19  11 12 13 14 15 16 17
16 17 18 19 20 21 22  20 21 22 23 24 25 26  18 19 20 21 22 23 24
23 24 25 26 27 28 29  27 28 29 30           25 26 27 28 29 30 31
30 31                                                           
[sogrey@bogon ~]$ 
```
将星期一作为一个星期的第一天
``` bash
[sogrey@bogon ~]$ cal -m
      六月 2021     
一 二 三 四 五 六 日
    1  2  3  4  5  6
 7  8  9 10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30

[sogrey@bogon ~]$ 
```

