function showMyDeliveryTask(task) {

    var innerHTML = '<tr>\n' +
        '                        <td>${task.taskName}</td>\n' +
        '                        <td>${task.totalMoney} NAS</td>\n' +
        '                        <td>${task.numOfPeople}</td>\n' +
        '                        <td>${task.participant}</td>\n' +
        '                        <td>${task.deadline}</td>\n' +
        '                        <td>${task.state}</td>\n' +
        '                        <td>\n' +
        '                            <div class="btn-toolbar" role="toolbar">\n' +
        '                                <div class="btn-group">\n' +
        '                                    <button type="button" class="btn btn-success">确认</button>\n' +
        '                                    <button type="button" class="btn btn-danger">拒绝</button>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </td>\n' +
        '                    </tr>'

    $("#myDeliveryTaskBody").append(innerHTML);
}

function showMyParticipantTask(task) {
    var innerHTML = '<tr>\n' +
        '                        <td>${task.taskName}</td>\n' +
        '                        <td>${task.totalMoney}/${task.numOfParticipant} NAS</td>\n' +
        '                        <td>${task.participant}</td>\n' +
        '                        <td>${task.deadline}</td>\n' +
        '                        <td>${task.state}</td>\n' +
        '                    </tr>'

    $("#myParticipantBody").append(innerHTML);
}

