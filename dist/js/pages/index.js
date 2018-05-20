function showLastestTask(task) {
    var innerHTML = `<div class="col-md-4">
                                <div class="panel">
                                    <div class="panel-body" style="border-style:solid;text-align: center">
                                        <p>任务名称：<span id="name_${task.taskID}">${task.taskName}</span></p>
                                        <p>发布人：<span id="announcer_${task.taskID}">${task.announcer}</span></p>
                                        <p>任务赏金：<span id="money_${task.taskID}">${task.totalMoney} NAS</span></p>
                                        <p>所需人数：<span id="people_${task.taskID}">${task.numOfPeople}</span></p>
                                        <p>截止日期：<span id="deadline_${task.taskID}">${task.deadline}</span></p>
                                        <p style="display: none" id="info_${task.taskID}">${task.taskInfo}</p>
                                        <button class="btn btn-primary"  onclick="showDetailBT(${task.taskID})">查看详情</button>
                                    </div>
                                </div>
                            </div>`

    $("#latestTaskRow").append(innerHTML);
}

function showAllTask(task) {

    var innerHTML=`<li>
                    <div class="row">
                        <a href="#" class="col-md-2 col-sm-2" style="font-size:16px"><i class="fa fa-file">&nbsp;&nbsp;</i>${task.taskName}</a>
                        <p class="col-md-2 col-sm-2" style="font-size:14px">赏金：${task.totalMoney} NAS</p>
                        <p href="#" class="col-md-2 col-sm-2">截止日期：${task.deadline}</p>
                        <p href="#" class="col-md-2 col-sm-2">所需人数：${task.numOfPeople}</p>
                        <div class="col-md-1 col-sm-1">进度：</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="60"
                                 aria-valuemin="0" aria-valuemax="100" style="width: ${task.numOfParticipant}/${task.numOfPeople};">
                            </div>
                        </div>
                    </div>
                </li>
                <br>`;
    $("#allTaskUL").append(innerHTML);

}

