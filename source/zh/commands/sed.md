# sed - 功能强大的流式文本编辑器

sed是一种流编辑器，用来从输入流中读取内容并完成转换，输入流可以来自一个文件，也可以来自一个管道。

sed 是一种流编辑器，它是文本处理中非常重要的工具，能够完美的配合正则表达式使用，功能不同凡响。处理时，把当前处理的行存储在临时缓冲区中，称为“模式空间”（pattern space），接着用sed命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕。接着处理下一行，这样不断重复，直到文件末尾。文件内容并没有 改变，除非你使用重定向存储输出。Sed主要用来自动编辑一个或多个文件；简化对文件的反复操作；编写转换程序等。

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
sed [options] 'command' file(s)
sed [options] -f scriptfile file(s)
```

## 选项

``` bash
-n, --quite, --slient                  # 静默模式
-e, --expression=script                # 给指令添加脚本
-f, --file=script-file                 # 将文件内容作为脚本，追加给指令
--follow-symlinks                      # 处理到位时遵循符号链接；硬链接仍将被破坏。
-i[SUFFIX],  --in-place[=SUFFIX]       # 编辑文件到位(如果提供了扩展名，则进行备份)
                                       # 认的操作模式是中断符号链接和硬链接。
                                       # 这可以通过跟随符号链接和复制来改变。
-c,  --copy                            # 当在-i模式下对文件进行洗牌时，请使用复制而不是重命名。
                                       # 虽然这将避免断开链接(符号或硬链接)，但结果的编辑操作并不是原子操作。
                                       # 这很少是想要的模式；-遵循符号链接通常就足够了，而且它更快、更安全。
-l, --line-length=N                    # 指定每一行最大字符数，超过就自动换行
--posix                                # 禁用所有的GNU表达式
-r, --regexp-extended                  # 在脚本中使用扩展正则表达式。
-s                                     # 将文件看作是分离的，而不是单独连续的长字符串
-u, --unbuffered                       # 从输入文件中加载最少数量的数据，并更频繁地刷新输出缓冲区。

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

如果没有给出-e、--expression,、-f或-file选项，那么第一个非选项参数将作为sed脚本进行解释。其余的参数都是输入文件的名称；如果没有指定输入文件，则读取标准输入。

**没有地址的命令**
``` bash
:label         b和t命令的标签
#comment       注释将扩展到下一行(或-e脚本片段的末尾)。
}             {}块的结束括号
```
**没有地址或者一个地址的命令**
``` bash
=            打印当前的行号

a \
text          追加文本，在换行符之前有一个嵌入的反斜杠

i \
text           插入文本，在换行符之前有一个嵌入的反斜杠

q [exit-code]  立即退出sed脚本，而不处理任何更多的输入，除非自动打印没有被禁用，当前的模式空间将被打印出来。退出代码参数是一个GNU扩展。

Q [exit-code]  立即退出sed脚本，而不处理任何更多的输入。这是一个GNU扩展

r filename  附加从文件中读取的文本。

R filename  附加从文件读取的一行。命令的每次调用都从文件中读取一行。
```
**接受地址范围的命令**
``` bash
{           开始一个命令块(以)结尾)

b label     分支到标签；如果省略标签，则分支到脚本的末尾。

t label     如果“s///”自读取上一个输入行以来以及从最后一个t或T命令开始已成功地进行了替换，则从“分支到标签”；如果省略“标签”，则将其分支到脚本的末尾。

T label     如果自读取上一个输入行以来，以及自最后一个t或T命令以来，没有“s///”已成功地进行了替换，则从“分支到标签”；如果省略“标签”，则从“分支到脚本的末尾”。这是一个GNU扩展。

c\ 
text         用文本替换徐那种的行，在换行符之前有一个嵌入的反斜杠

d            删除模式空间。开始下一个周期。

D           删除模式空间中的第一个嵌入换行符。开始下一个周期，但如果模式空格中仍然有数据，则跳过从输入中读取。

h H         复制/追加模式空间到保持空间

g G         复制/追加保持空间到模式空间

x           交换持有空格和模式空格的内容

l           以“视觉清晰”的形式列出当前行。

l width     以“视觉清晰”的形式列出当前行，在宽度width处将其拆分。这是一个GNU扩展。

n N        在模式空间中读取/追加下一行输入

p          打印到当前模式空间

P          打印到当前模式空间的第一个嵌入换行符

s/regexp/replacement/      尝试将regexp与模式空间匹配。如果成功，则将该部分替换为替换部分。替换可以包含特殊字符&引用匹配的模式空间的那一部分，特殊转义\1到\9引用regexp中相应的匹配子表达式。

w filename     将当前模式空间写入文件名

W filename     将当前模式空间的第一行写入文件名。这是一个GNU扩展。

y/source/dest/    将在源中出现的模式空间中的字符音译为dst中相应的字符。
```
## 地址
SED命令可以在没有地址的情况下给出，在这种情况下，命令将对所有输入行执行；使用一个地址，则只对与该地址匹配的输入行执行该命令；或者使用两个地址，在这种情况下，将对所有与从第一个地址开始并继续到第二个地址的包含行范围匹配的输入行执行命令。关于地址范围，需要注意三件事：语法是addr 1，addr 2(即地址用逗号分隔)；addr 1匹配的行将始终被接受，即使addr 2选择了前面的行；如果addr 2是regexp，则不会根据addr 1匹配的行对其进行测试。

在地址(或地址范围)之后，在命令之前，可以插入一个“！”，这指定只有当地址(或地址范围)不匹配时才执行命令。支持以下的地址类型

- number，只匹配指定的行号。
- first~step，从指定的行first开始，每step行匹配一次。
- $，匹配最后一行。
- /regexp/，匹配正则表达式regexp的行。
- \cregexpc，匹配正则表达式regexp的行。c可以是任何字符
- 0,addr2，从“匹配的第一个地址”状态开始，直到找到addr 2为止。这类似于1，addr 2，但如果addr 2匹配输入的第一行0，addr 2表单将位于其范围的末尾，而1，addr 2窗体仍将位于其范围的开头。这只在addr 2是正则表达式时才起作用。
- addr1,+N，将匹配addr 1和addr 1后面的N行。
- addr1,~N，将匹配addr 1和addr 1后面的行，直到输入行号为N的倍数的下一行为止。



## 举例

``` bash
[sogrey@bogon demo4]$ cat test.txt
eeeiee eeiee
hello world!
[sogrey@bogon demo4]$ sed r test.txt >> test22.txt  # 将test.txt读取，写入到test22.txt
[sogrey@bogon demo4]$ cat test22.txt
eeeiee eeiee
hello world!
[sogrey@bogon demo4]$ 
```
