# cmp - 比较两个文件是否有差异

用字节的方式，比较两个文件是否存在差异，但是不保存运算结果。Cmp指令只会根据结果设置相关的标志位，这个指令之后往往会跟着一个条件跳转指令。

逐行比较两个已经排序过的文件。结果以3列显示：第1列显示只在file1出现的内容，第2列显示只在file2出现的内容，第3列显示同时出现的内容。


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
cmp  [OPTION]... FILE1  [FILE2  [SKIP1  [SKIP2]]]
```

## 选项

``` bash
-b, --print-bytes                  # 输出不同的字节
-i num, --ignore-initial=num       # 跳过开始的num个字节
-i num1 num2, --ignore-initial=num1：num2  #第一个文件跳过num1个字节，第二个文件跳过num2个字节
-l, --verbose                       # 输出不同之处的字节序号，以及这个字节的值        
-n LIMIT, --bytes=LIMIT             # 最多比较LIMIT字节
-s, --quiet, --silent               # 不输出；只输出退出状态

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

## 举例

``` bash
[sogrey@bogon backup]$ diff -y test.txt test2.txt
石家庄今日新增16例确诊病例				      <
中国留美博士遇害 美驻华使馆慰问				      <
特朗普夫人发文谴责国会暴乱					特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟				      |
123							      |	1月11日，美国第一夫人梅拉尼娅·特朗普通过白宫发表声明，谴责上
北京一确诊者隐瞒行程不配合流调				      <
山西晋中新增2例无症状感染者				      <
[sogrey@bogon backup]$ cmp test.txt test2.txt
test.txt test2.txt 不同：第 2 字节，第 1 行
[sogrey@bogon backup]$ cmp -b test.txt test2.txt
test.txt test2.txt 不同：第 1 行，第 2 字节为 237 M-^_ 211 M-^I
[sogrey@bogon backup]$ cmp -lb test.txt test2.txt
  2 237 M-^_ 211 M-^I
  3 263 M-3  271 M-9
  4 345 M-e  346 M-f
  5 256 M-.  234 M-^\
  6 266 M-6  227 M-^W
  7 345 M-e  346 M-f
  8 272 M-:  231 M-^Y
  9 204 M-^D 256 M-.
 10 344 M-d  345 M-e
 11 273 M-;  244 M-$
 12 212 M-^J 253 M-+
 13 346 M-f  344 M-d
 14 227 M-^W 272 M-:
 15 245 M-%  272 M-:
 16 346 M-f  345 M-e
 17 226 M-^V 217 M-^O
 18 260 M-0  221 M-^Q
 19 345 M-e  346 M-f
 20 242 M-"  226 M-^V
 21 236 M-^^ 207 M-^G
 22  61 1    350 M-h
 23  66 6    260 M-0
 24 344 M-d  264 M-4
 25 276 M->  350 M-h
 26 213 M-^K 264 M-4
 27 347 M-g  243 M-#
 28 241 M-!  345 M-e
 29 256 M-.  233 M-^[
 30 350 M-h  275 M-=
 31 257 M-/  344 M-d
 32 212 M-^J 274 M-<
 33 347 M-g  232 M-^Z
 34 227 M-^W 346 M-f
 35 205 M-^E 232 M-^Z
 36 344 M-d  264 M-4
 37 276 M->  344 M-d
 38 213 M-^K 271 M-9
 39  12 ^J   261 M-1
 40 344 M-d   12 ^J
 41 270 M-8   12 ^J
 42 255 M--   61 1
 43 345 M-e  346 M-f
 44 233 M-^[ 234 M-^\
 45 275 M-=  210 M-^H
 46 347 M-g   61 1
 47 225 M-^U  61 1
 48 231 M-^Y 346 M-f
 49 347 M-g  227 M-^W
 50 276 M->  245 M-%
 51 216 M-^N 357 M-o
 52 345 M-e  274 M-<
 53 215 M-^M 214 M-^L
 54 232 M-^Z 347 M-g
 55 345 M-e  276 M->
 56 243 M-#  216 M-^N
 57 253 M-+  345 M-e
 58 351 M-i  233 M-^[
 59 201 M-^A 275 M-=
 60 207 M-^G 347 M-g
 61 345 M-e  254 M-,
 62 256 M-.  254 M-,
 63 263 M-3  344 M-d
 64  40      270 M-8
 65 347 M-g  200 M-^@
 66 276 M->  345 M-e
 67 216 M-^N 244 M-$
 68 351 M-i  253 M-+
 69 251 M-)  344 M-d
 70 273 M-;  272 M-:
 71 345 M-e  272 M-:
 72 215 M-^M 346 M-f
 73 216 M-^N 242 M-"
 74 344 M-d  205 M-^E
 75 275 M-=  346 M-f
 76 277 M-?  213 M-^K
 77 351 M-i  211 M-^I
 78 246 M-&  345 M-e
 79 206 M-^F 260 M-0
 80 346 M-f  274 M-<
 81 205 M-^E 345 M-e
 82 260 M-0  250 M-(
 83 351 M-i  205 M-^E
 84 227 M-^W 302 M-B
 85 256 M-.  267 M-7
 86  12 ^J   347 M-g
 87 347 M-g  211 M-^I
 88 211 M-^I 271 M-9
 89 271 M-9  346 M-f
 90 346 M-f  234 M-^\
 91 234 M-^\ 227 M-^W
 92 227 M-^W 346 M-f
 93 346 M-f  231 M-^Y
 94 231 M-^Y 256 M-.
 95 256 M-.  351 M-i
 96 345 M-e  200 M-^@
 97 244 M-$  232 M-^Z
 98 253 M-+  350 M-h
 99 344 M-d  277 M-?
100 272 M-:  207 M-^G
101 272 M-:  347 M-g
102 345 M-e  231 M-^Y
103 217 M-^O 275 M-=
104 221 M-^Q 345 M-e
105 346 M-f  256 M-.
106 226 M-^V 253 M-+
107 207 M-^G 345 M-e
108 350 M-h  217 M-^O
109 260 M-0  221 M-^Q
110 264 M-4  350 M-h
111 350 M-h  241 M-!
112 264 M-4  250 M-(
113 243 M-#  345 M-e
114 345 M-e  243 M-#
115 233 M-^[ 260 M-0
116 275 M-=  346 M-f
117 344 M-d  230 M-^X
118 274 M-<  216 M-^N
119 232 M-^Z 357 M-o
120 346 M-f  274 M-<
121 232 M-^Z 214 M-^L
122 264 M-4  350 M-h
123 344 M-d  260 M-0
124 271 M-9  264 M-4
125 261 M-1  350 M-h
126  12 ^J   264 M-4
127 347 M-g  243 M-#
128 220 M-^P 344 M-d
129 206 M-^F 270 M-8
130 345 M-e  212 M-^J
131 241 M-!  345 M-e
132 230 M-^X 221 M-^Q
133 346 M-f  250 M-(
134 226 M-^V 345 M-e
135 207 M-^G 217 M-^O
136 346 M-f  221 M-^Q
137 227 M-^W 347 M-g
138 205 M-^E 224 M-^T
139 345 M-e  237 M-^_
140 205 M-^E 345 M-e
141 254 M-,  234 M-^\
142 345 M-e  250 M-(
143 217 M-^O 347 M-g
144 270 M-8  276 M->
145 345 M-e  216 M-^N
146 233 M-^[ 345 M-e
147 236 M-^^ 233 M-^[
148 345 M-e  275 M-=
149 272 M-:  345 M-e
150 224 M-^T 233 M-^[
151 344 M-d  275 M-=
152 270 M-8  344 M-d
153 201 M-^A 274 M-<
154 347 M-g  232 M-^Z
155 234 M-^\ 347 M-g
156 237 M-^_ 232 M-^Z
157 346 M-f  204 M-^D
158 212 M-^J 346 M-f
159 275 M-=  232 M-^Z
160 347 M-g  264 M-4
161 203 M-^C 344 M-d
162 237 M-^_ 271 M-9
163  12 ^J   261 M-1
164  61 1    343 M-c
165  62 2    200 M-^@
166  63 3    202 M-^B
cmp：test2.txt 已结束
[sogrey@bogon backup]$ 
```
