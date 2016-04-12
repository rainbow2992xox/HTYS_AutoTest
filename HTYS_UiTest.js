/**
 * Created by linmengbo on 16/4/11.
 */
//初始化数据
"use strict";

var RecsetCB = require ("./ResetCB.js");
var config = require ("./Config_Url.js");
var Query = require ("./Query");
var assert = require ("assert");
var testcase = require ("./Testcase");
var fs = require ("fs");
var page = require ('./wdFunction')

require ('colors');
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


function reg(data) {

    var regdata = data
        .replace (/<(\w+)[^>]+visible="false"[^>]+>[\W\w]*?<\/\1>/g, "")
        .replace (/<UIAStatusBar[\W\w]*UIAStatusBar>/, "")
        .replace ("获取", "")
        .replace (/\w+s/, "")
        .replace (/\r\n/, "")


    return regdata;


}


function CompareXml(source, testsetp) {

    fs.readFile ("./testfile/Expect/" + testcase.flow_testcase.log[testsetp], function (err, data) {

        var expect = Reg (data)

        assert.deepEqual (source, expect);

    })


}


wd.addPromiseChainMethod (
    'PageHandle',
    page.Handle
);

wd.addPromiseChainMethod (
    'FindElement',
    page.findElement
);


//wd.addPromiseChainMethod (
//    'ElementXpathHandle',
//    function (driver, testcase, testsetp, mode, sleeptime, method) {
//
//        return this
//            .FindElement (testcase, testsetp)
//            .PageHandle (driver, testcase, testsetp, mode, sleeptime)
//
//
//    }
//);


//测试设备
var desired_doctor = {
    "appium-version": "1.0",
    platformName: "iOS",
    platformVersion: "9.3.1",
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

    //before (function (done) {
    //    RecsetCB (function () {
    //
    //        setTimeout (function () {
    //
    //            console.log ("数据库初始化完成");
    //            console.log ("   ###########################################################################");
    //            done ()
    //        }, 2000);
    //
    //
    //    });
    //
    //})
    //
    //
    //before (function (done) {
    //
    //    var exec = require ('child_process').exec;
    //
    //    console.log ("正在重启sync_gateway...")
    //    var cmdStr = 'open ./sync_gateway.app';
    //    exec (cmdStr, function (err, stdout, stderr) {
    //
    //        setTimeout (function () {
    //            console.log ("sync_gateway重启完成!")
    //
    //            done ();
    //        }, 14000);
    //
    //
    //    })
    //
    //})

    //before(function(done){
    //
    //    driver
    //    //.elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAElement[1]").click()
    //    //    .FindElement (testcase, 0).click ()
    //    //    .PageHandle (driver, testcase, 0, "Compare", 1000)
    //    //    .FindElement (testcase, 1).click ()
    //        .PageHandle (driver, testcase, 1, "Actual", 1000)
    //
    //
    //        //.ElementXpathHandle (driver, testcase, 0, "Save", 1000).click ()
    //        //.waitForElement ("xpath", "//UIAApplication[1]/UIAWindow[1]/UIAElement[1]", 8000, 100).click ()
    //        //.PageHandle (driver, testcaseLength, "Save", 1000)
    //        //.then (function () {
    //        //
    //        //    console.log ("xxx");
    //        //    driver.PageHandle (driver, 0, "Save", 1000)
    //        //
    //        //})
    //
    //
    //        .sleep (8000)
    //        .nodeify (done)
    //
    //
    //})


    it ("测试", function (done) {


        var Actual = fs.readdirSync ('./testfile/Actual')
        var Actualarr = [];
        Actual.forEach (function (file) {
            if (file.endsWith ('.txt')) {
                var data = fs.readFileSync ('./testfile/Actual/' + file, "Utf-8")

                Actualarr.push (data)
                console.log (Actualarr)
            }


        })

        var Expect = fs.readdirSync ('./testfile/Expect')
        var Expectarr = [];
        Expect.forEach (function (file) {
            if (file.endsWith ('.txt')) {
                var data = fs.readFileSync ('./testfile/Expect/' + file, "Utf-8")

                Expectarr.push (data)
                console.log (Expectarr)
            }


        })


        for (var i = 0; i < Expectarr.length; i++) {


            assert.equal (Actualarr[i], Expectarr[i]);

        }


        done ()


    })


})