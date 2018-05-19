function showLastestTask(task) {
    var innerHTML = '<div class="col-md-3">\n' +
        '                        <div class="panel">\n' +
        '                            <div class="panel-body" style="border-style:solid;text-align: center">\n' +
        '                                <p>任务名称：${task.taskName}</p>\n' +
        '                                <p>发布人：${task.announcer}</p>\n' +
        '                                <p>任务赏金：${task.totalMoney} NAS</p>\n' +
        '                                <p>所需人数：${task.numOfPeople}</p>\n' +
        '                                <p>截止日期：${task.deadline}</p>\n' +
        '                                <button class="btn btn-primary">查看详情</button>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>'
    $("#latestTaskRow").append(innerHTML);
}

function showAllTask(task) {

    var innerHTMl='<li>\n' +
        '                    <div class="row">\n' +
        '                        <a href="#" class="col-md-2 col-sm-2" style="font-size:16px"><i class="fa fa-file">&nbsp;&nbsp;</i>${task.taskName}</a>\n' +
        '                        <p class="col-md-2 col-sm-2" style="font-size:14px">赏金：${task.totalMoney} NAS</p>\n' +
        '                        <p href="#" class="col-md-2 col-sm-2">截止日期：${task.deadline}</p>\n' +
        '                        <p href="#" class="col-md-2 col-sm-2">所需人数：${task.numOfPeople}</p>\n' +
        '                        <div class="col-md-1 col-sm-1">进度：</div>\n' +
        '                        <div class="progress">\n' +
        '                            <div class="progress-bar" role="progressbar" aria-valuenow="60"\n' +
        '                                 aria-valuemin="0" aria-valuemax="100" style="width: ${task.numOfParticipant}/${task.numOfPeople};">\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </li>\n' +
        '                <br>'
    $("#allTaskUL").append(innerHTML);

}