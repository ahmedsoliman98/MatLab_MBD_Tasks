function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "TempSensor"};
	this.sidHashMap["TempSensor"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "TempSensor:9"};
	this.sidHashMap["TempSensor:9"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "TempSensor:10"};
	this.sidHashMap["TempSensor:10"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "TempSensor:12"};
	this.sidHashMap["TempSensor:12"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<Root>/Analog Input"] = {sid: "TempSensor:1"};
	this.sidHashMap["TempSensor:1"] = {rtwname: "<Root>/Analog Input"};
	this.rtwnameHashMap["<Root>/Compare To Constant"] = {sid: "TempSensor:9"};
	this.sidHashMap["TempSensor:9"] = {rtwname: "<Root>/Compare To Constant"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "TempSensor:3"};
	this.sidHashMap["TempSensor:3"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "TempSensor:5"};
	this.sidHashMap["TempSensor:5"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/Constant2"] = {sid: "TempSensor:7"};
	this.sidHashMap["TempSensor:7"] = {rtwname: "<Root>/Constant2"};
	this.rtwnameHashMap["<Root>/Digital Output"] = {sid: "TempSensor:10"};
	this.sidHashMap["TempSensor:10"] = {rtwname: "<Root>/Digital Output"};
	this.rtwnameHashMap["<Root>/Digital Output1"] = {sid: "TempSensor:12"};
	this.sidHashMap["TempSensor:12"] = {rtwname: "<Root>/Digital Output1"};
	this.rtwnameHashMap["<Root>/Divide"] = {sid: "TempSensor:4"};
	this.sidHashMap["TempSensor:4"] = {rtwname: "<Root>/Divide"};
	this.rtwnameHashMap["<Root>/Multiply"] = {sid: "TempSensor:2"};
	this.sidHashMap["TempSensor:2"] = {rtwname: "<Root>/Multiply"};
	this.rtwnameHashMap["<Root>/Multiply1"] = {sid: "TempSensor:6"};
	this.sidHashMap["TempSensor:6"] = {rtwname: "<Root>/Multiply1"};
	this.rtwnameHashMap["<Root>/NOT"] = {sid: "TempSensor:11"};
	this.sidHashMap["TempSensor:11"] = {rtwname: "<Root>/NOT"};
	this.rtwnameHashMap["<S1>/u"] = {sid: "TempSensor:9:1"};
	this.sidHashMap["TempSensor:9:1"] = {rtwname: "<S1>/u"};
	this.rtwnameHashMap["<S1>/Compare"] = {sid: "TempSensor:9:2"};
	this.sidHashMap["TempSensor:9:2"] = {rtwname: "<S1>/Compare"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "TempSensor:9:3"};
	this.sidHashMap["TempSensor:9:3"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/y"] = {sid: "TempSensor:9:4"};
	this.sidHashMap["TempSensor:9:4"] = {rtwname: "<S1>/y"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "TempSensor:10:7"};
	this.sidHashMap["TempSensor:10:7"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/Data Type Conversion"] = {sid: "TempSensor:10:11"};
	this.sidHashMap["TempSensor:10:11"] = {rtwname: "<S2>/Data Type Conversion"};
	this.rtwnameHashMap["<S2>/Digital Output"] = {sid: "TempSensor:10:12"};
	this.sidHashMap["TempSensor:10:12"] = {rtwname: "<S2>/Digital Output"};
	this.rtwnameHashMap["<S3>/In1"] = {sid: "TempSensor:12:7"};
	this.sidHashMap["TempSensor:12:7"] = {rtwname: "<S3>/In1"};
	this.rtwnameHashMap["<S3>/Data Type Conversion"] = {sid: "TempSensor:12:11"};
	this.sidHashMap["TempSensor:12:11"] = {rtwname: "<S3>/Data Type Conversion"};
	this.rtwnameHashMap["<S3>/Digital Output"] = {sid: "TempSensor:12:12"};
	this.sidHashMap["TempSensor:12:12"] = {rtwname: "<S3>/Digital Output"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
