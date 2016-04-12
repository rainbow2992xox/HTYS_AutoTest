/**
 * Created by linmengbo on 16/4/12.
 */

var Page = {};


Page.Handle = function (driver, testsetp, mode, sleeptime) {
    try {
        return this
            .sleep (sleeptime)

            .then (function () {
                console.log (mode)

                switch (mode) {
                    case "Save":
                        driver
                            .sleep (100)
                            .then (function () {

                                console.log (testcase.flow_testcae.log[testsetp])


                            })
                            .source (function (err, source) {
                                if (err) throw err;
                                var actual = reg (source);
                                fs.writeFile ("./testfile/Expect/" + testcase.flow_testcae.log[testsetp], actual, 'Utf-8')

                            })
                            .saveScreenshot ("./testfile/Expect/" + testcase.flow_testcae.log[testsetp], function (err) {
                                if (err) throw err;

                            })

                        break;

                    case "Compare":

                        driver
                            .sleep (100)
                            .then (function () {

                                console.log (testcase.flow_testcae.log[testsetp])


                            })
                            .source (function (err, source) {
                                if (err) throw err;

                                CompareXml (source, testcase.flow_testcae.log[testsetp])

                            })
                            .saveScreenshot ("./testfile/Actual/" + testcase.flow_testcae.log[testsetp], function (err) {
                                if (err) throw err;

                            })


                        break;


                }


            })
            .sleep (2 * sleeptime)
    } catch (e) {
        console.log (e.stack);
    }
}


module.exports = Page;