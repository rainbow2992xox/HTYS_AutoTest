/**
 * Created by linmengbo on 16/4/11.
 */
//初始化数据
"use strict";

var RecsetCB = require ("./ResetCB.js");
var config = require ("./Config_Url.js");
var Query = require ("./Query");
var assert = require ("assert");


var wd;
try {
    wd = require ('wd');
} catch (err) {
    wd = require ('./node_modules/wd/lib/main');
}

var chai = require ("chai");
var chaiAsPromised = require ("chai-as-promised");


chai.use (chaiAsPromised);
chai.should ();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;


//测试设备
var desired_doctor = {
    "appium-version": "1.0",
    platformName: "iOS",
    platformVersion: "9.2.1",
    deviceName: "iPhone 6",
    app: 'com.yiyihealth.hitales.doctor',
    udid: config.udid

};


//var browser = wd.promiseChainRemote ("127.0.0.1", 4723);

//GitHUB上没有noduel里的appium中test包
var setup = require ("./node_modules/appium/test/functional/common/setup-base.js")


describe ("<<<<<<<<<<<<<<<<<<<<<<<<<<海苔健康(医生版)自动化测试>>>>>>>>>>>>>>>>>>>>>>>>>>>", function () {

    var driver;
    setup (this, desired_doctor).then (function (d) {
        driver = d;
    });

    before (function (done) {
        RecsetCB (function () {

            setTimeout (function () {

                console.log ("数据库初始化完成");
                console.log ("");
                console.log ("   ###########################################################################");
                console.log ("");
                done ()
            }, 2000);


        });

    })


    before (function (done) {

        var exec = require ('child_process').exec;

        console.log ("正在重启sync_gateway...")
        var cmdStr = 'open ./sync_gateway.app';
        exec (cmdStr, function (err, stdout, stderr) {

            setTimeout (function () {
                console.log ("sync_gateway重启完成!")

                done ();
            }, 14000);


        })

    })

    it("Xxx",function(){


        driver.waitForElement("XPath","",8000,100)

    })



})