"use strict";

var TaskPO = function(text) {
    if (text) {
        var obj = JSON.parse(text);
        this.taskID = obj.taskID || 0;
        this.taskName = obj.taskName;
        this.announcer = obj.announcer;
        this.participant = obj.participant;
        this.taskInfo = obj.taskInfo;
        this.deadline = obj.deadline;
        this.totalMoney = obj.totalMoney;
        this.numOfPeople = obj.numOfPeople;
        this.numOfParticipant = obj.numOfParticipant;
        this.state = obj.state;
    } else {
        this.taskID = 0;
        this.taskName = "";
        this.announcer = "";
        this.participant = "";
        this.taskInfo = "";
        this.deadline = "";
        this.totalMoney = 0;
        this.numOfPeople = 0;
        this.numOfParticipant = 0;
        this.state = "";
    }
};

TaskPO.prototype = {
    toString: function () {
        return JSON.stringify(this);
    }
};

var Task = function () {
    LocalContractStorage.defineProperty(this, "count");
    LocalContractStorage.defineProperty(this, "userMap"); //存储用户账户，任务ID
    LocalContractStorage.defineProperty(this, "participantMap"); //存储用户账户，用户参与的任务ID
    LocalContractStorage.defineMapProperty(this, "tasks", { //存储任务ID，任务
        parse: function (text) {
            return new TaskPO(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
};

Task.prototype = {
    init: function () {
        this.count = new BigNumber(1);
    },

    addTask: function (taskName,taskInfo,deadline,totalMoney,numOfPeople) {
        var index = this.count;

        var announcer = Blockchain.transaction.from;
        // var dictItem = this.repo.get(key);
        // if (dictItem){
        //     throw new Error("value has been occupied");
        // }

        var task = new TaskPO();

        task.taskID = index;
        task.taskName = taskName;
        task.announcer = announcer;
        task.participant = "";
        task.taskInfo = taskInfo;
        task.deadline = deadline;
        task.totalMoney = totalMoney;
        task.numOfPeople = numOfPeople;
        task.state = "进行中";

        this.tasks.put(taskID, task);

        var currentTaskID = this.userMap.getTaskByUser(announcer)||[];
        currentTaskID.push(index);

        this.userMap.put(announcer,currentTaskID);
        this.count = new BigNumber(index).plus(1);

    },

    joinTask:function(wallet,taskID){
        taskID = taskID.trim();
        if ( taskID === "" ) {
            throw new Error("taskID为空！");
        }
        var task = this.getTaskByID(taskID);
        if(task.state!="进行中"){
            alert("任务不在进行中！");
            return;
        }
        if(task.numOfPeople == task.numOfParticipant){
            alert("任务参与人数已满!");
            return;
        }else{
            task.numOfParticipant = task.numOfParticipant + 1;

            task.participant = task.participant + wallet+",";

            this.participantMap.put(wallet,task.participant);
            alert("参与成功！");
        }
    },

    getTaskByID: function (taskID) {
        taskID = taskID.trim();
        if ( taskID === "" ) {
            throw new Error("taskID为空！");
        }
        return this.tasks.get(key);
    },

    getTaskByUser: function (wallet) {
        wallet = wallet || Blockchain.transaction.from;
        var taskIDs = this.userMap.get(wallet);
        if(!taskIDs){
            throw new Error("Wallet = ${wallet} 尚未发布任务！");
        }
        var result  = [];
        for (const id of taskIDs) {
            var task = this.tasks.get(id);
            if(task) {
                result.push(task);
            }
        }
        return result
    },
    
    getUserParticipantTask:function (wallet) {
        wallet = wallet || Blockchain.transaction.from;
        var tasksID = this.participantMap.get(wallet);
        var result = [];
        for(const id of tasksID){
            var task = this.tasks.get(id);
            if(task){
                result.push(task);
            }
        }
        return result;
    },

    get(limit, offset) {
        var result = [];
        offset = new BigNumber(offset);
        limit = new BigNumber(limit);

        for (var i = offset; i.lessThan(offset.plus(limit)); i = i.plus(1)) {
            var index = i.toNumber();
            var task = this.tasks.get(index);
            if (task) {
                result.push(task);
            }
        }
        return result;
    }


};
module.exports = Task;