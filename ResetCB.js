/**
 * Created by linmengbo on 16/3/10.
 */
var Promise = require ('bluebird');
var request = Promise.promisifyAll (require ("request"));
Rainbow_sesssion = "";
var Query = require ("./Query");
var InitialConfig = require ('./Config_Initial');


function promise_request(option) {
    return new Promise (function (resolve, reject) {

        request (option, function (err, body, response) {
            if (err) {
                reject (err);
            } else {
                resolve ({

                    body: body,
                    response: response


                })
            }


        })


    })

}


function initialization(cb) {
    var config = require ("./Config_Url.js");
    var request = require ("request");


//清空couchbase数据库
    var exec = require ('child_process').exec;
    console.log ("");
    console.log ("正在清空APP数据库...")
    var cmdStr = 'curl -X POST -u Administrator:1@3456  http://121.196.244.129:8091/pools/default/buckets/test/controller/doFlush';


    exec (cmdStr, function (err, stdout, stderr) {
        console.log ("APP数据清空完完成!");

        setTimeout (function () {
            console.log ("插入初始化数据...")

            var options_hospital = {
                method: 'POST',
                url: config.url.SyncUrl,
                body:InitialConfig.City,
                json: true
            };

            var options_department = {
                method: 'POST',
                url: config.url.SyncUrl,
                body: {
                    _id: 'department_list',
                    channels: '!',
                    data: [{
                        first_department: '外科',
                        second_department: ['泌尿科',
                            '胸外科',
                            '普通外科',
                            '乳腺外科',
                            '血管外科',
                            '神经外科',
                            '烧伤外科',
                            '整形外科',
                            '移植外科',
                            '显微外科',
                            '胰腺外科',
                            '心外科',
                            '肝外科',
                            '肛肠外科',
                            '胃肠外科',
                            '泌尿外科',
                            '胸心外科',
                            '甲乳外科',
                            '肝胆外科',
                            '大肠外科',
                            '其他']
                    },
                        {
                            first_department: '内科',
                            second_department: ['呼吸内科',
                                '消化内科',
                                '肾脏内科',
                                '血液内科',
                                '感染科',
                                '风湿免疫科',
                                '神经内科',
                                '变态反应病科',
                                '老年病科',
                                '普通内科',
                                '心内科',
                                '内分泌科',
                                '肝内科',
                                '风湿病科',
                                '风湿科',
                                '消化科',
                                '心血管内科',
                                '血液科',
                                '高血压科',
                                '内分泌科',
                                '内分泌代谢病科',
                                '神内科',
                                '肾内科',
                                '中医内科',
                                '其他']
                        },
                        {
                            first_department: '儿科',
                            second_department: ['儿内科', '儿外科', '新生儿科', '儿童内分泌科', '小儿内科', '小儿眼科', '其他']
                        },
                        {
                            first_department: '妇产科',
                            second_department: ['妇科', '产科', '妇产内分泌科', '其他']
                        },
                        {
                            first_department: '皮肤性病科',
                            second_department: ['皮肤性病科', '皮肤科', '其他']
                        },
                        {
                            first_department: '肿瘤科',
                            second_department: ['肿瘤科', '口腔颌面头颈肿瘤科', '胃及软组织科', '其他']
                        },
                        {
                            first_department: '中医科',
                            second_department: ['针灸科', '推拿科', '中医科', '其他']
                        },
                        {first_department: '营养科', second_department: ['营养科']},
                        {
                            first_department: '骨科',
                            second_department: ['骨科', '脊柱外科', '其他']
                        },
                        {
                            first_department: '精神及心理科',
                            second_department: ['精神及心理科', '心理治疗科', '其他']
                        },
                        {
                            first_department: '重症医学科',
                            second_department: ['重症医学科', '其他']
                        },
                        {first_department: '眼科', second_department: ['眼科', '其他']},
                        {
                            first_department: '耳鼻咽喉及头颈科',
                            second_department: ['耳鼻咽喉及头颈科', '耳鼻喉科', '其他']
                        },
                        {first_department: '口腔科', second_department: ['口腔科', '其他']},
                        {
                            first_department: '麻醉科及疼痛医学',
                            second_department: ['麻醉科及疼痛医学', '其他']
                        },
                        {
                            first_department: '医学影像科',
                            second_department: ['核医学科', '超声诊断科', '心超诊断', '放射诊断科', '超声诊疗科', '其他']
                        },
                        {
                            first_department: '体检中心',
                            second_department: ['体检中心', '其他']
                        },
                        {first_department: '介入科', second_department: ['介入科', '其他']},
                        {first_department: '病理科', second_department: ['病理科', '其他']},
                        {first_department: '老年科', second_department: ['老年科', '其他']}]
                },
                json: true
            };

            var options_company_service = {
                method: 'POST',
                url: config.url.SyncUrl,
                body: {
                    url: 'http://www.baidu.com',
                    icon: 'http://img01.okgj.cn/images/products/12030100258/1_200X200.jpg?20150313212401',
                    price: 1,
                    title: '代挂号（公司服务）',
                    providerType: 1,
                    resourceType: 'WebService',
                    type: 'WebLink'
                },
                json: true
            };


            var options_doctor_service = {
                method: 'POST',
                url: config.url.SyncUrl,
                body: {
                    "url": "http://www.baidu.com",
                    "icon": "http://img01.okgj.cn/images/products/12030100258/1_200X200.jpg?20150313212401",
                    "price": 1,
                    "title": "专家加号（医生服务）",
                    "providerType": 2,
                    "resourceType": "WebService",
                    "type": "WebLink"
                },
                json: true
            };

            var options_InvitationCode = {
                method: 'POST',
                url: config.url.SyncUrl,
                body: {code: '1234', type: 'InvitationCode'},
                json: true
            };

            var options_DiscountCode_xyz2 = {
                method: 'POST',
                url: config.url.SyncUrl,
                body: {
                    code: 'xyz2',
                    codeCategory: 1,
                    type: 'DiscountCode',
                    validDate: '2020-01-01',
                    value: 0.01
                },
                json: true
            };

            var options_DiscountCode_1m34 = {
                method: 'POST',
                url: config.url.SyncUrl,
                body: {
                    code: '1m34',
                    codeCategory: 2,
                    type: 'DiscountCode',
                    validDate: '2020-01-01',
                    value: 364
                },
                json: true
            };

            var Rainbow_admin = {
                method: 'POST',
                url: config.url.SyncUrl + '_user/',//_session or _user

                body: {

                    "name": "Rainbow_admin"

                },
                json: true
            };


            var Rainbow_admin = {
                method: 'POST',
                url: config.url.SyncUrl + '_user/',//_session or _user

                body: {

                    "name": "Rainbow_admin"

                },
                json: true
            };


            //准备通用的admin session

            var Rainbow_admin = {
                method: 'POST',
                url: config.url.SyncUrl + '_user/',//_session or _user

                body: {

                    "name": "Rainbow_admin"

                },
                json: true
            };


            var Rainbow_SecurityCode_Option0 = {
                method: 'POST',
                url: config.url.home + '/users/send_security_code',
                body: {
                    "phone_number": "15000000000",
                    "role_type": 0,
                    "sms_category": 2
                },
                json: true
            };

            var Rainbow_SecurityCode_Option1 = {
                method: 'POST',
                url: config.url.home + '/users/send_security_code',
                body: {
                    "phone_number": "15000000001",
                    "role_type": 0,
                    "sms_category": 2
                },
                json: true
            };


            //准备验证码

            promise_request (Rainbow_SecurityCode_Option0)


                .then (function (result) {

                    promise_request (Rainbow_SecurityCode_Option1)

                    console.log (result.response);

                })

                .then (function () {

                    promise_request (options_hospital)


                })

                .then (function () {
                    console.log ("医院列表插入完成");
                    promise_request (options_department)
                })

                .then (function () {
                    console.log ("科室列表插入完成");
                    promise_request (options_company_service)

                })

                .then (function () {
                    console.log ("公司服务插入完成");
                    promise_request (options_doctor_service)

                })

                .then (function () {
                    console.log ("医生服务插入完成");
                    promise_request (options_InvitationCode)

                })

                .then (function () {
                    console.log ("邀请码:1234 插入完成");
                    promise_request (options_DiscountCode_xyz2)

                })

                .then (function () {
                    console.log ("定额优惠码:xyz2 插入完成");
                    promise_request (options_DiscountCode_1m34)

                })

                .then (function () {
                    console.log ("定额优惠码:1m34 插入完成");


                    var Option = {
                        method: 'POST',
                        url: config.url.assistant + '/users/register',
                        body: {
                            "phone_number": "13636694202",
                            "password": "1234",
                            "role_type": 2,
                            "name": "assistant_13636694202"
                        }
                        ,
                        json: true
                    }


                    return promise_request (Option)


                })



                .then (function () {
                    console.log ("助理13636694202插入完成");

                    Query ("security_code_doctor_15000000000_2", 'get', 'test', config.url.couchbase8091, function (result) {

                        var Doctor_Option = {
                            method: 'POST',
                            url: config.url.doctor + '/users/register',
                            body: {
                                "phone_number": "15000000000",
                                "password": "1234",
                                "role_type": 0,
                                "security_code": result.value.code,
                                "invitation_code": "1234"
                            },
                            json: true
                        };

                        var Doctor_profile ={
                            method: 'POST',
                            url: config.url.doctor + '/users/set_profile',
                            body: {
                                "setting": {
                                    "isSetProfile": true
                                },
                                "user": "doctor_15000000000"
                            }
                            ,
                            json: true



                        }


                        request (Doctor_Option, function (err, res, body) {

                            console.log ("医生15000000000注册完成");

                        })


                        request (Doctor_profile, function (err, res, body) {

                            console.log ("医生15000000000个人信息添加完成");

                        })




                    });


                })

                .then (function () {


                    for (var i = 1; i < 9; i++) {


                        var doctor_ShareMessage_options = {
                            method: 'PUT',
                            url: config.url.garySync + "test" + i,
                            body: {
                                "contentDetail": "<p>测试内容</p>",
                                "date": Date.now (),
                                "imageUrl": "http://hitales-test.oss-cn-hangzhou.aliyuncs.com/1455346706047_B2062035-C6BF-4360-9395-F98318F73715.jpg",
                                "isInformation": false,
                                "title": "测试内容",
                                "type": "ShareMessage",
                                "userId": "doctor_15000000000"
                            }
                            ,
                            json: true
                        };
                        var num = 1;
                        request (doctor_ShareMessage_options, function (err, res, body) {

                            console.log ("医生15000000000第" + num + "动态插入完成");
                            num++;

                        })


                    }


                })

                .then (function () {


                    for (var i = 1; i < 9; i++) {


                        var doctor_ShareMessage_options = {
                            method: 'PUT',
                            url: config.url.garySync + "test" + i,
                            body: {
                                "contentDetail": "<p>测试内容</p>\r\n",
                                "date": Date.now(),
                                "imageUrl": "http://hitales-test.oss-cn-hangzhou.aliyuncs.com/1457853287362_IMG_3602.jpg",
                                "isInformation": true,
                                "title": "测试内容",
                                "type": "ShareMessage",
                                "userId": ""
                            }
                            ,
                            json: true
                        };
                        var num = 1;
                        request (doctor_ShareMessage_options, function (err, res, body) {

                            console.log ("第" + num + "资讯插入完成");
                            num++;

                        })


                    }


                })


                .then (function () {


                    Query ("security_code_doctor_15000000001_2", 'get', 'test',config.url.couchbase8091, function (result) {

                        var Doctor_Option = {
                            method: 'POST',
                            url: config.url.doctor + '/users/register',
                            body: {
                                "phone_number": "15000000001",
                                "password": "1234",
                                "role_type": 0,
                                "security_code": result.value.code,
                                "invitation_code": "1234"
                            },
                            json: true
                        };

                        var Doctor_profile ={
                            method: 'POST',
                            url: config.url.doctor + '/users/set_profile',
                            body: {
                                "setting": {
                                    "isSetProfile": true
                                },
                                "user": "doctor_15000000001"
                            }
                            ,
                            json: true



                        }


                        request (Doctor_Option, function (err, res, body) {

                            console.log ("医生15000000001注册完成");



                        })

                        request (Doctor_profile, function (err, res, body) {

                            console.log ("医生15000000001个人信息添加完成");

                        })


                    });


                })

                .then (function () {


                    var Option = {
                        method: 'POST',
                        url: config.url.assistant + '/users/register',
                        body: {
                            "phone_number": "18221286097",
                            "password": "1234",
                            "role_type": 2,
                            "name": "assistant_18221286097"
                        }
                        ,
                        json: true
                    }


                    return promise_request (Option)


                })
                .then(function(){

                    console.log("助理18221286097注册完成")
                    cb ()

                })





        }, 1000);


//初始化数据库


    })
};

module.exports = initialization;

