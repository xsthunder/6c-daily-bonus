'use strict'
const user = require("./configure.js");
console.log(user);
if(user.host==='example.com'){
	console.error("please complete configure.js")
	process.exit(1)
}


var request = require("request");
var options = { method: 'POST',
	url: 'https://'+user.host+'/auth/login',
	headers:
	{ 'postman-token': 'c96107ac-bb07-0d07-7562-99f7fc0a5bd2',
		'cache-control': 'no-cache',
		'content-type': 'application/x-www-form-urlencoded' },
	form:
	{ email: user.email,
		passwd: user.passwd,
		code: user.code } };
var checkin = function(cookie){
	var options = { method: 'POST',
		url: 'https://'+user.host+'/user/checkin',
		headers:
		{ 'postman-token': '579bddac-1fab-8d85-cce2-65de127232a5',
			'cache-control': 'no-cache',
			cookie:cookie,
			'content-type': 'application/x-www-form-urlencoded' } };
	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		let obj = JSON.parse(body);
		console.log(unescape(obj.msg));
	});
}
var main=()=>{request(options, function (error, response, body) {
	console.log(new Date());
	if (error) throw new Error(error);
	let obj = JSON.parse(body);
	let msg=unescape(obj.msg);
	console.log(msg);
	if(msg!='登录成功'){
		console.error("login error ", msg);
        return
	}
	let arr = (response.headers['set-cookie']);
	let str = '';
	for(let i =0;i<arr.length;i++){
		if(i!==0)str+=(';');
		str+=(arr[i].split(';')[0]);
	}
	checkin(str);
});
}
main();
