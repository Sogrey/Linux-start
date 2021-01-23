# grep - 强大的文本搜索工具

grep （global search regular expression(RE) and print out the line，全面搜索正则表达式并把行打印出来）是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。用于过滤/搜索的特定字符。可使用正则表达式能配合多种命令使用，使用上十分灵活。

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
grep  [选项]  PATTERN  files
grep  [OPTIONS]  [-e PATTERN | -f FILE]  [FILE...]
```

## 选项

``` bash
-a --text  # 不要忽略二进制数据。
-A <显示行数>   --after-context=<显示行数>   # 除了显示符合范本样式的那一行之外，并显示该行之后的内容。
-b --byte-offset                           # 在显示符合范本样式的那一行之外，并显示该行之前的内容。
-B<显示行数>   --before-context=<显示行数>   # 除了显示符合样式的那一行之外，并显示该行之前的内容。
-c --count    # 计算符合范本样式的列数。
-C<显示行数> --context=<显示行数>或-<显示行数> # 除了显示符合范本样式的那一列之外，并显示该列之前后的内容。
-d<进行动作> --directories=<动作>  # 当指定要查找的是目录而非文件时，必须使用这项参数，否则grep命令将回报信息并停止动作。
-e<范本样式> --regexp=<范本样式>   # 指定字符串作为查找文件内容的范本样式。
-E --extended-regexp             # 将范本样式为延伸的普通表示法来使用，意味着使用能使用扩展正则表达式。
-f<范本文件> --file=<规则文件>     # 指定范本文件，其内容有一个或多个范本样式，让grep查找符合范本条件的文件内容，格式为每一列的范本样式。
-F --fixed-regexp   # 将范本样式视为固定字符串的列表。
-G --basic-regexp   # 将范本样式视为普通的表示法来使用。
-h --no-filename    # 在显示符合范本样式的那一列之前，不标示该列所属的文件名称。
-H --with-filename  # 在显示符合范本样式的那一列之前，标示该列的文件名称。
-i --ignore-case    # 忽略字符大小写的差别。
-l --file-with-matches   # 列出文件内容符合指定的范本样式的文件名称。
-L --files-without-match # 列出文件内容不符合指定的范本样式的文件名称。
-n --line-number         # 在显示符合范本样式的那一列之前，标示出该列的编号。
-P --perl-regexp         # PATTERN 是一个 Perl 正则表达式
-q --quiet或--silent     # 不显示任何信息。
-R/-r  --recursive       # 此参数的效果和指定“-d recurse”参数相同。
-s --no-messages  # 不显示错误信息。
-v --revert-match # 反转查找。
-V --version      # 显示版本信息。   
-w --word-regexp  # 只显示全字符合的列。
-x --line-regexp  # 只显示全列符合的列。
-y # 此参数效果跟“-i”相同。
-o # 只输出文件中匹配到的部分。
-m <num> --max-count=<num> # 找到num行结果后停止查找，用来限制匹配行数
```
**规则表达式**
```
^    # 锚定行的开始 如：'^grep'匹配所有以grep开头的行。    
$    # 锚定行的结束 如：'grep$' 匹配所有以grep结尾的行。
.    # 匹配一个非换行符的字符 如：'gr.p'匹配gr后接一个任意字符，然后是p。    
*    # 匹配零个或多个先前字符 如：'*grep'匹配所有一个或多个空格后紧跟grep的行。    
.*   # 一起用代表任意字符。   
[]   # 匹配一个指定范围内的字符，如'[Gg]rep'匹配Grep和grep。    
[^]  # 匹配一个不在指定范围内的字符，如：'[^A-FH-Z]rep'匹配不包含A-R和T-Z的一个字母开头，紧跟rep的行。    
\(..\)  # 标记匹配字符，如'\(love\)'，love被标记为1。    
\<      # 锚定单词的开始，如:'\<grep'匹配包含以grep开头的单词的行。    
\>      # 锚定单词的结束，如'grep\>'匹配包含以grep结尾的单词的行。    
x\{m\}  # 重复字符x，m次，如：'0\{5\}'匹配包含5个o的行。    
x\{m,\}   # 重复字符x,至少m次，如：'o\{5,\}'匹配至少有5个o的行。    
x\{m,n\}  # 重复字符x，至少m次，不多于n次，如：'o\{5,10\}'匹配5--10个o的行。   
\w    # 匹配文字和数字字符，也就是[A-Za-z0-9]，如：'G\w*p'匹配以G后跟零个或多个文字或数字字符，然后是p。   
\W    # \w的反置形式，匹配一个或多个非单词字符，如点号句号等。   
\b    # 单词锁定符，如: '\bgrep\b'只匹配grep。  
```
## 常见用法
在文件中搜索一个单词，命令会返回一个包含 “match_pattern” 的文本行：
``` bash
grep match_pattern file_name
grep "match_pattern" file_name
```
在多个文件中查找：
``` bash
grep "match_pattern" file_1 file_2 file_3 ...
```
输出除之外的所有行 `-v` 选项：
``` bash
grep -v "match_pattern" file_name
```
标记匹配颜色 `--color=auto` 选项：
``` bash
grep "match_pattern" file_name --color=auto
```
使用正则表达式 `-E` 选项：
``` bash
grep -E "[1-9]+"
# 或
egrep "[1-9]+"
```
使用正则表达式 `-P` 选项：
``` bash
grep -P "(\d{3}\-){2}\d{4}" file_name
```
只输出文件中匹配到的部分 `-o` 选项：
``` bash
echo this is a test line. | grep -o -E "[a-z]+\."
line.

echo this is a test line. | egrep -o "[a-z]+\."
line.
```
统计文件或者文本中包含匹配字符串的行数 `-c` 选项：
``` bash
grep -c "text" file_name
```
输出包含匹配字符串的行数 `-n` 选项：
``` bash
grep "text" -n file_name
# 或
cat file_name | grep "text" -n
```
**多个文件**
``` bash
grep "text" -n file_1 file_2
```
打印样式匹配所位于的字符或字节偏移：
``` bash
echo gun is not unix | grep -b -o "not"
7:not
# 一行中字符串的字符便宜是从该行的第一个字符开始计算，起始值为0。选项  **-b -o**  一般总是配合使用。
```
搜索多个文件并查找匹配文本在哪些文件中：
``` bash
grep -l "text" file1 file2 file3...
```
grep递归搜索文件
在多级目录中对文本进行递归搜索：
``` bash
grep "text" . -r -n
```
> .表示当前目录

忽略匹配样式中的字符大小写：
``` bash
echo "hello world" | grep -i "HELLO"
# hello
```
选项 `-e` 制动多个匹配样式：
``` bash
echo this is a text line | grep -e "is" -e "line" -o
is
line

#也可以使用 **-f** 选项来匹配多个样式，在样式文件中逐行写出需要匹配的字符。
cat patfile
aaa
bbb
```
``` bash
echo aaa bbb ccc ddd eee | grep -f patfile -o
```
在grep搜索结果中包括或者排除指定文件：

**只在目录中所有的.php和.html文件中递归搜索字符"main()"**
``` bash
grep "main()" . -r --include *.{php,html}
```
**在搜索结果中排除所有README文件**
``` bash
grep "main()" . -r --exclude "README"
```
**在搜索结果中排除filelist文件列表里的文件**
``` bash
grep "main()" . -r --exclude-from filelist
```
使用0值字节后缀的grep与xargs：

**测试文件**
``` bash
echo "aaa" > file1
echo "bbb" > file2
echo "aaa" > file3

grep "aaa" file* -lZ | xargs -0 rm

# 执行后会删除file1和file3，grep输出用-Z选项来指定以0值字节作为终结符文件名（\0），xargs -0 读取输入并用0值字节终结符分隔文件名，然后删除匹配文件，-Z通常和-l结合使用。
```
**grep静默输出**
``` bash
grep -q "test" filename
# 不会输出任何信息，如果命令运行成功返回0，失败则返回非0值。一般用于条件测试。
```
打印出匹配文本之前或者之后的行：

**显示匹配某个结果之后的3行，使用 `-A` 选项**
``` bash
seq 10 | grep "5" -A 3
5
6
7
8
```
**显示匹配某个结果之前的3行，使用 -B 选项**
``` bash
seq 10 | grep "5" -B 3
2
3
4
5
```
**显示匹配某个结果的前三行和后三行，使用 -C 选项**
``` bash
seq 10 | grep "5" -C 3
2
3
4
5
6
7
8
```
**如果匹配结果有多个，会用“--”作为各匹配结果之间的分隔符**
``` bash
echo -e "a\nb\nc\na\nb\nc" | grep a -A 1
```
## 环境变量
grep的行为受到以下环境变量的影响。

GREP_OPTIONS，此变量指定放置在任何显式选项前面的默认选项。选项规范由空格分隔。反斜杠转义下一个字符，因此它可以指定包含空格或反斜杠的选项。例如，如果GREP_OPTIONS是’--binary-files=without-match --directories=skip’，那么grep执行的时候就假设已经有了这两个选项。

GREP_COLOR，此变量指定用于突出显示匹配(非空)文本的颜色。

GREP_COLORS，指定用于突出显示输出的各个部分的颜色和其他属性。它的值是一个以冒号分隔的功能列表，默认为ms=01；31:mc=01；31:sl=：cx=：fn=35:ln=32:bn=32:se=36，省略了rv和ne布尔功能(即false)。支持的功能如下所示。

sl=，用于整个选定行的SGR子字符串(即-v命令行选项省略时的匹配行，或指定-v时不匹配的行)。但是，如果指定了布尔rv功能和-v命令行选项，则它将应用于上下文匹配行。默认值为空(即终端的默认颜色对)。

cx=，用于整个上下文行的SGR子字符串(即省略-v命令行选项时的非匹配行，或指定-v时的匹配行)。但是，如果指定了布尔RV功能和-v命令行选项，则它将适用于选定的非匹配行。默认值为空(即终端的默认颜色对)。

rv，当指定-v命令行选项时，逆转(掉期)“sl=”和“cx=”功能的布尔值。缺省值为false(即省略了功能)。

mt=01；31，用于匹配任何行中的非空文本的sgr子字符串。(这仅在省略-v命令行选项时使用。)当启动时，sl=(或cx=)能力的效果保持活跃。默认值是当前行背景上的粗体红色文本前景。

ms=01；31，用于匹配选定行中的非空文本的sgr子字符串。(这仅在省略-v命令行选项时使用。)当启动时，sl=(或cx=)能力的效果保持活跃。默认值是当前行背景上的粗体红色文本前景。

mc=01；31，用于匹配上下文行中的非空文本的sgr子字符串。(这仅在省略-v命令行选项时使用。)当启动时，sl=(或cx=)能力的效果保持活跃。默认值是当前行背景上的粗体红色文本前景。

fn=35，用于任何内容行前缀的文件名的SGR子字符串。默认值是终端默认背景上的洋红色文本前景。

ln=32，任何内容行前缀的行号的SGR子字符串。默认值是终端默认背景上的绿色文本前景。

bn=32，用于任何内容行前缀的字节偏移的SGR子字符串。默认值是终端默认背景上的绿色文本前景。

se=36，当指定了非零上下文（--），SGR子字符串用于在选定的行字段(：)、上下文行字段之间(-)和相邻行组之间插入分隔符。默认值是终端默认背景上的青色文本前景。

ne，布尔值，该值防止在每次彩色项结束时使用擦除入行(EL)对右(\33[K]清除到行尾的值。这是在不支持EL的终端上需要的。对于没有应用Back_COLOR_ERASE(BCE)布尔终止功能的终端、所选择的高亮颜色不影响背景、或者当EL太慢或导致过多闪烁时，它在其他情况下是有用的。默认值为false(即省略功能)

LC_ALL, LC_COLLATE, LANG，这些变量指定LC_COLLATE类别的区域设置，该类别确定用于解释范围表达式(如[a-z])的排序序列。

LC_ALL, LC_CTYPE, LANG，这些变量指定LC_CTYPE类别的区域设置，它决定字符的类型，例如，哪些字符是空格。

LC_ALL, LC_MESSAGES, LANG，这些变量指定LC_MESSAGES类别的区域设置，它确定grep用于消息的语言。默认的C语言环境使用美式英语消息。

POSIXLY_CORRECT，如果设置，grep的行为与POSIX.2所要求的一样；否则，grep的行为更像其他GNU程序。POSIX.2要求必须将文件名后面的选项视为文件名；默认情况下，这些选项被排到操作数列表的前面，并被视为选项。此外，POSIX.2还要求将未被承认的选项诊断为“非法”，但由于它们并不真正违反法律，默认情况是将它们诊断为“无效”。POSIXLY_RIDER还禁用_N_GNU_NOOPTION_ARGV_LANGS_，如下所述。

_N_GNU_nonoption_argv_flags_，(这里N是grep的数字进程ID。)如果此环境变量值的ith字符为1，则不要将grep的ith操作数视为选项，即使它似乎是选项之一。shell可以为其运行的每个命令在环境中放置此变量，指定哪些操作数是文件名通配符展开的结果，因此不应被视为选项。此行为仅在GNU C库中可用，且仅在未设置POSIXLY_RIDER时才可用。
## 退出码
通常，如果找到选定的行，则退出状态为0，否则为1。但是，如果发生错误，退出状态为2，除非使用-q、--quite、--slient选项，并找到选定的行。但是，请注意，对于grep、CMP和diff等程序，POSIX只要求在出现错误时的退出状态大于1；因此，出于可移植性的考虑，建议使用对此一般条件进行测试的逻辑，而不是与2严格相等的逻辑。
## 举例

``` bash
[sogrey@bogon newDir3]$ cat test2.txt
123
23
212
[sogrey@bogon newDir3]$ grep ^2 test2.txt # 显示以2开头的行
23
212
[sogrey@bogon newDir3]$ grep -v 23 test2.txt # 显示不包含23的行
212
[sogrey@bogon newDir3]$ grep -w 23 test2.txt # 显示整个字都匹配的行
23
[sogrey@bogon newDir3]$ 
```
