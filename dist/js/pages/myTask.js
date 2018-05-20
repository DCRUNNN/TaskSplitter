function showMyDeliveryTask(task) {

    var innerHTML = `<tr>
                                <td>${task.taskName}</td>
                               <td>${task.totalMoney} NAS</td>
                                <td>${task.numOfPeople}</td>
                                <td>${task.participant}</td>
                            <td>${task.deadline}</td>
                                <td>${task.state}</td>
                                <td>
                                    <div class="btn-toolbar" role="toolbar">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-success" onclick="acceptTask(${task.taskID})">确认</button>
                                            <button type="button" class="btn btn-warning" onclick="rejectTask(${task.taskID})">拒绝</button>
                                            <button type="button" class="btn btn-danger" onclick="deleteTask(${task.taskID})">删除</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>`

    $("#myDeliveryTaskBody").append(innerHTML);
}

function showMyParticipantTask(task) {
    var innerHTML = `<tr>
                                <td>${task.taskName}</td>
                                <td>${task.totalMoney}/${task.numOfParticipant} NAS</td>
                                <td>${task.participant}</td>
                                <td>${task.deadline}</td>
                                <td>${task.state}</td>
                            </tr>`

    $("#myParticipantBody").append(innerHTML);
}

