const CONTRACT_ADDRESS = "n1QVFUAEEE8Nz3TsCe2TtcW53ZVrR5Qb9af";

class SmartContractAPI {
    constructor(contractAddress) {
        let NebPay = require("nebpay");
        this.nebPay = new NebPay();
        this._contractAddress = contractAddress || CONTRACT_ADDRESS;
    }

    getContractAddress() {
        return this.contractAddress;
    }

    _simulateCall({ value = "0", callArgs = "[]", callFunction , callback }) {
        this.nebPay.simulateCall(this._contractAddress, value, callFunction, callArgs, {
            callback: function(resp){
                if(callback){
                    callback(resp);
                }
            }
        });
    }

    _call({ value = "0", callArgs = "[]", callFunction , callback }) {
        this.nebPay.call(this._contractAddress, value, callFunction, callArgs, {
            callback: function(resp){
                if(callback){
                    callback(resp);
                }
            }
        });
    }
}

class TaskContractAPI extends SmartContractAPI {
    addTask(taskName, taskInfo, deadline, totalMoney, numOfPeople, cb) {
        this._call({
            callArgs: `[${taskName}, "${taskInfo}", "${deadline}",${totalMoney}, "${numOfPeople}"]`,
            callFunction: "addTask",
            callback: cb
        });
    }

    getTaskByID(taskID, cb) {
        this._simulateCall({
            callArgs: `[${taskID}]`,
            callFunction: "getTaskByID",
            callback: cb
        });
    }

    getTaskByUser( cb) {
        this._simulateCall({
            callArgs: '',
            callFunction: "getTaskByUser",
            callback: cb
        });
    }

    getUserParticipantTask(cb) {
        this._simulateCall({
            callArgs: '',
            callFunction: "getUserParticipantTask",
            callback: cb
        });
    }

    get(limit, offset, cb) {
        this._simulateCall({
            callArgs: `[${limit}, ${offset}]`,
            callFunction: "get",
            callback: cb
        });
    }

}
