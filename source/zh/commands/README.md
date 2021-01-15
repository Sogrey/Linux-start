# Linux 命令手册查询


<div class="search">
    <ul class="search-list" id="result" style="display: none;"><li>请尝试输入一些字符，进行搜索！</li></ul>
    <input type="text" class="query" id="query" autocomplete="off" autofocus="autofocus" placeholder="命令检索">
    <div class="enter-input">
        <button id="search_btn">搜索</button>
    </div>
</div>

<div id="type-list">
<a href="index.html">所有命令</a>
</div>

<div id='linux-commands'>
<ul id='linux-commands-list'>
<!-- <li><a style="color: black;" href="?type=DirectoryManagement">[目录管理]</a> <a href="pwd.html"><span>pwd</span> - 显示目录内容列表</a></li> -->
</ul>
<div id="no-result">查无结果</div>
</div>

<script>
function getCommandsBySord(parentDir, cmdType, keyword) {
    var LinuxCommands = getCommands();
    var commands = {};
    for (let i = 0; i < LinuxCommands.length; i++) {
        const linuxCommand = LinuxCommands[i];
        var parent = '';
        if (parentDir) {
            parent = parentDir;
            if (!parent.endsWith('/')) parent += '/';
        }

        if (!cmdType && !keyword) {
            linuxCommand.command = parent + linuxCommand.command;
            if (!Object.hasOwnProperty.call(commands, linuxCommand.command)) {
                commands[linuxCommand.command] = linuxCommand;
            }
        } else {
            var isRight = false;
            if (cmdType && !keyword) {
                if (linuxCommand.tags.indexOf(cmdType) > -1) {
                    isRight = true;
                }
            } else if (!cmdType && keyword) {
                if (linuxCommand.command.indexOf(keyword) > -1 || linuxCommand.desc.indexOf(keyword) > -1) {
                    isRight = true;
                }
            } else if (linuxCommand.tags.indexOf(cmdType) > -1 && (linuxCommand.command.indexOf(keyword) > -1 || linuxCommand.desc.indexOf(keyword) > -1)) {
                isRight = true;
            }

            if (isRight) {
                linuxCommand.command = parent + linuxCommand.command;
                if (!Object.hasOwnProperty.call(commands, linuxCommand.command)) {
                    commands[linuxCommand.command] = linuxCommand;
                }
            }
        }
    }

    console.log(commands);
    return commands;
}

function addTypeList(div) {
    var html = '<a href="index.html">所有命令</a>';
    for (const key in CommandTypes) {
        if (Object.hasOwnProperty.call(CommandTypes, key)) {
            const typeName = CommandTypes[key];

            html += ' | <a href="index.html?type=' + key + '">' + typeName + '</a>'

        }
    }

    div.innerHTML = html
}

function addLi(uldiv, type, command, desc, keyword) {
    var li_1 = window.document.createElement("li");

    var commandText = command;

    if (keyword) {
        keyword = keyword.replace(/^\s+|\s+$/g, '');
        if (keyword && keyword.length > 0) {
            var index1 = commandText.indexOf(keyword);
            var index2 = desc.indexOf(keyword);
            if (index1 > -1) {
                commandText = identifyTheKeyword(commandText, keyword);
            }
            if (index2 > -1) {
                desc = identifyTheKeyword(desc, keyword);
            }
        }
    }

    li_1.innerHTML = '<li><a style="color: black;" href="?type=' + type + '">[' + CommandTypes[type] + ']</a> <a href="' + command + '.html">' + commandText + ' - ' + desc + '</a></li>';
    uldiv.appendChild(li_1);
}

function identifyTheKeyword(text, keyword) {
    var oReg = new RegExp(keyword, "g");

    return text.replace(oReg, '<span>' + keyword + '</span>');
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
    if (r != null) return decodeURI(r[2]);
    return null;
}

/**
 * 关键字+类型查询
 * @param {*} keyword 
 */
function doSearch(keyword) {
    var searchParamType = GetQueryString('type');

    var searchParamKeyword = keyword;
    if (!searchParamKeyword) {
        searchParamKeyword = GetQueryString('keyword');
    }

    divLinuxCommandsList.innerHTML = '';
    if (searchParamKeyword && searchParamKeyword.length > 0 && searchParamKeyword != 'null') {
        var commands = getCommandsBySord('', searchParamType, searchParamKeyword);

        if (commands && JSON.stringify(commands) != "{}") {
            divLinuxCommandsNoResult.style.display = 'none';
            for (const key in commands) {
                if (Object.hasOwnProperty.call(commands, key)) {
                    const command = commands[key];
                    addLi(divLinuxCommandsList, command.tags[0], command.command, command.desc, searchParamKeyword);
                }
            }
        } else {
            divLinuxCommandsNoResult.style.display = 'block';
        }
    } else {
        searchParamKeyword = '';
    }
    //?type=DirectoryManagement&keyword=chmod
    // console.log('查询参数', searchParamKeyword);

    // window.location = 'index.html?keyword=' + searchParamKeyword;
}

var divTypeList;
var divLinuxCommands;
var divLinuxCommandsList;
var divLinuxCommandsNoResult;
var inputQuery;
var btnSearch;

var onload = function () {
    console.log('window.onload');
    divTypeList = window.document.getElementById('type-list');
    divLinuxCommands = window.document.getElementById('linux-commands');
    divLinuxCommandsList = window.document.getElementById('linux-commands-list');
    divLinuxCommandsNoResult = window.document.getElementById('no-result');
    inputQuery = window.document.getElementById('query');
    btnSearch = window.document.getElementById('search_btn');
    if (!btnSearch) return;
    btnSearch.onclick = function () {
        doSearch(inputQuery.value);
    }

    var searchParamType = GetQueryString('type');

    var searchParamKeyword = GetQueryString('keyword');

    //?type=DirectoryManagement&keyword=chmod
    console.log('查询参数', searchParamType, searchParamKeyword);

    addTypeList(divTypeList);

    if (searchParamKeyword && searchParamKeyword.length > 0 && searchParamKeyword != 'null') {
        inputQuery.value = searchParamKeyword;
    } else {
        searchParamKeyword = '';
    }

    var commands = getCommandsBySord('', searchParamType, searchParamKeyword);

    if (commands && JSON.stringify(commands) != "{}") {
        divLinuxCommandsNoResult.style.display = 'none';
        for (const key in commands) {
            if (Object.hasOwnProperty.call(commands, key)) {
                const command = commands[key];
                addLi(divLinuxCommandsList, command.tags[0], command.command, command.desc, searchParamKeyword);
            }
        }
    } else {
        divLinuxCommandsList.innerHTML = '';
        divLinuxCommandsNoResult.style.display = 'block';
    }


}
var CommandTypes = {
    FileSystem: '文件系统',
    DirectoryManagement: '目录管理',
    Permissions: '权限管理'
};

function getCommands() {
    return [{
        command: 'ls',
        desc: '显示目录内容列表',
        tags: ['FileSystem']
    }, {
        command: 'pwd',
        desc: '显示目录内容列表',
        tags: ['DirectoryManagement']
    }, {
        command: 'chmod',
        desc: '用来变更文件或目录的权限',
        tags: ['Permissions', 'FileSystem', 'DirectoryManagement']
    }, {
        command: 'cp',
        desc: '复制文件',
        tags: ['FileSystem']
    }, {
        command: 'cat',
        desc: '连接多个文件并打印到标准输出',
        tags: ['FileSystem']
    }, {
        command: 'rm',
        desc: '删除文件和目录',
        tags: ['FileSystem']
    }, {
        command: 'tmpwatch',
        desc: '删除最近一段时间没有访问的文件',
        tags: ['FileSystem']
    }, {
        command: 'sort',
        desc: '对文本文件中所有行进行排序',
        tags: ['FileSystem']
    }, {
        command: 'whereis',
        desc: '查找二进制程序、代码等相关文件路径',
        tags: ['FileSystem']
    }, {
        command: 'which',
        desc: '查找并显示给定命令的绝对路径',
        tags: ['FileSystem']
    }, {
        command: 'lsattr',
        desc: '显示指定文件或者目录的属性',
        tags: ['FileSystem']
    }, {
        command: 'chattr',
        desc: '改变文件的属性',
        tags: ['FileSystem']
    }, {
        command: 'cksum',
        desc: '检查文件的crc是否正确',
        tags: ['FileSystem']
    }, {
        command: 'stat',
        desc: '显示文件或者文件系统的状态信息',
        tags: ['FileSystem']
    }, {
        command: 'sum',
        desc: '计算文件的校验码和块数',
        tags: ['FileSystem']
    }, {
        command: 'mkdir',
        desc: '创建目录',
        tags: ['FileSystem']
    }];
}

// window.onload = onload;
setTimeout(function () {
    onload()
}, 1000);
</script>