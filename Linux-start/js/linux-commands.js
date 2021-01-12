var CommandTypes = {
    FileSystem: '文件系统',
    DirectoryManagement: '目录管理'
};

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
                if (cmdType == linuxCommand.type) {
                    isRight = true;
                }
            } else if (!cmdType && keyword) {
                if (linuxCommand.command.indexOf(keyword) > -1 || linuxCommand.desc.indexOf(keyword) > -1) {
                    isRight = true;
                }
            } else if (cmdType == linuxCommand.type && (linuxCommand.command.indexOf(keyword) > -1 || linuxCommand.desc.indexOf(keyword) > -1)) {
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

function getCommands() {
    return [{
        command: 'ls',
        desc: '显示目录内容列表',
        type: 'FileSystem'
    }, {
        command: 'pwd',
        desc: '显示目录内容列表',
        type: 'DirectoryManagement'
    }];
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
    var li_1 = document.createElement("li");

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
    // var searchParamType = GetQueryString('type');

    var searchParamKeyword = keyword;
    if (!searchParamKeyword) {
        searchParamKeyword = GetQueryString('keyword');
    }

    //?type=DirectoryManagement&keyword=chmod
    console.log('查询参数', searchParamKeyword);

    window.location = 'index.html?keyword=' + searchParamKeyword;
}

var divTypeList;
var divLinuxCommands;
var divLinuxCommandsList;
var divLinuxCommandsNoResult;
var inputQuery;
var btnSearch;

var onload = function () {
    console.log('window.onload');
    divTypeList = document.getElementById('type-list');
    divLinuxCommands = document.getElementById('linux-commands');
    divLinuxCommandsList = document.getElementById('linux-commands-list');
    divLinuxCommandsNoResult = document.getElementById('no-result');
    inputQuery = document.getElementById('query');
    btnSearch = document.getElementById('search_btn');

    btnSearch.onclick = function () {
        doSearch(inputQuery.value);
    }

    var searchParamType = GetQueryString('type');

    var searchParamKeyword = GetQueryString('keyword');

    //?type=DirectoryManagement&keyword=chmod
    console.log('查询参数', searchParamType, searchParamKeyword);

    addTypeList(divTypeList);

    if (searchParamKeyword) {
        inputQuery.value = searchParamKeyword;
    }

    var commands = getCommandsBySord('', searchParamType, searchParamKeyword);

    if (commands && JSON.stringify(commands) != "{}") {
        divLinuxCommandsNoResult.style.display = 'none';
        for (const key in commands) {
            if (Object.hasOwnProperty.call(commands, key)) {
                const command = commands[key];
                addLi(divLinuxCommandsList, command.type, command.command, command.desc, searchParamKeyword);
            }
        }
    } else {
        divLinuxCommandsList.innerHTML = '';
        divLinuxCommandsNoResult.style.display = 'block';
    }


}

// window.onload = onload;
setTimeout(function(){onload()}, 1000);