/******************************************************************************
 *  Execution       : default node          : cmd> npm test
 * 
 *  Purpose         : Mocha Testing 
 * 
 *  @description    
 * 
 *  @file           : test.js
 *  @overview       : create APIs are proper working or not checking
 *  @author         : Nandhakumar<nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          :
 *
 ******************************************************************************/
//import the controller and express
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.should();
var server = require('../server')
var fs = require('fs');


function readFile() {
    /**
     * @description:read file from json
     */
    var data = fs.readFileSync('/home/admin238/Desktop/Home/Google/BackendFundooApp/test/test1.json');
    var data1 = JSON.parse(data);
    return data1;
}
/**
 * @description:test script for registration 
 */
describe('Status and content', function () {
    describe('Registration page', function () {
        var data1 = readFile();
        it('status ', function (done) {
            chai.request(server).post('/register').send(data1.registration).end((err, res) => {
                if (err) {
                    console.log("expect ==>", err);
                    err.should.have.status(500);
                } else {
                    console.log("expect ==>", res.body);
                    res.should.have.status(200);
                    /**
                     * @description:test script for login
                     */
                    describe('Login page', function () {
                        it('status ', function (done) {
                            chai.request(server).post('/login').send(data1.login).end((err, res) => {
                                if (err) {
                                    console.log("expect ==>", err);
                                } else {
                                    console.log("expect ==>", res.body);
                                    res.should.have.status(200);
                                    /************************************************************************************
                                    * @description:test script for forgot password
                                    ***************************************************************************************/
                                    describe('Forgot Password page', function () {
                                        it('status ', function (done) {
                                            chai.request(server).post('/forgot').send(data1.forgotPassword).end((err, res) => {
                                                if (err) {
                                                    console.log("expect ==>", err);
                                                    err.should.have.status(400); //The request had bad syntax or was inherently impossible to be satisfied.
                                                } else {
                                                    console.log("expect ==>", res.body);
                                                    res.should.have.status(200);
                                                    /******************************************************************************************
                                                    * @description:test script for reset password
                                                    *****************************************************************************************/
                                                    describe('Reset Password page', function () {
                                                        it('status ', function (done) {
                                                            chai.request(server).post('/reset').send(data1.resetPassword).end((err, res) => {
                                                                if (err) {
                                                                    console.log("expect ==>", err);
                                                                    err.should.have.status(400); //The request had bad syntax or was inherently impossible to be satisfied.
                                                                } else {
                                                                    console.log("expect ==>", res.body);
                                                                    res.should.have.status(200); //The request was fulfilled.
                                                                    describe('CreateNote page', function () {
                                                                        it('status ', function (done) {
                                                                            chai.request(server).post('/createNote').send(data1.createNote).end((err, res) => {
                                                                                if (err) {
                                                                                    console.log("expect ==>", err);
                                                                                    err.should.have.status(400); //The request had bad syntax or was inherently impossible to be satisfied.
                                                                                } else {
                                                                                    console.log("expect ==>", res.body);
                                                                                    res.should.have.status(200); //The request was fulfilled.
                                                                                    describe('retrievenoteNote page', function () {
                                                                                        it('status ', function (done) {
                                                                                            chai.request(server).get('/getNotes').send(data1.getNotes).end((err, res) => {
                                                                                                if (err) {
                                                                                                    console.log("expect ==>", err);
                                                                                                    err.should.have.status(400); //The request had bad syntax or was inherently impossible to be satisfied.
                                                                                                } else {
                                                                                                    console.log("expect ==>", res.body);
                                                                                                    res.should.have.status(200); //The request was fulfilled.
                                                                                                    describe('update color page', function () {
                                                                                                        it('status ', function (done) {
                                                                                                            chai.request(server).post('/updateColor').send(data1.updateColor).end((err, res) => {
                                                                                                                if (err) {
                                                                                                                    console.log("expect ==>", err);
                                                                                                                    err.should.have.status(400); //The request had bad syntax or was inherently impossible to be satisfied.
                                                                                                                } else {
                                                                                                                    console.log("expect ==>", res.body);
                                                                                                                    res.should.have.status(200); //The request was fulfilled.
                                                                                                                    describe('update note page', function () {
                                                                                                                        it('status ', function (done) {
                                                                                                                            chai.request(server).post('/updatenote').send(data1.updatenote).end((err, res) => {
                                                                                                                                if (err) {
                                                                                                                                    console.log("expect ==>", err);
                                                                                                                                    err.should.have.status(400); //The request had bad syntax or was inherently impossible to be satisfied.
                                                                                                                                } else {
                                                                                                                                    console.log("expect ==>", res.body);
                                                                                                                                    res.should.have.status(200); //The request was fulfilled.
                                                                                                                                    describe('archive page', function () {
                                                                                                                                        it('status ', function (done) {
                                                                                                                                            chai.request(server).post('/archive').send(data1.archive).end((err, res) => {
                                                                                                                                                if (err) {
                                                                                                                                                    console.log("expect ==>", err);
                                                                                                                                                    err.should.have.status(400); //The request had bad syntax or was inherently impossible to be satisfied.
                                                                                                                                                } else {
                                                                                                                                                    console.log("expect ==>", res.body);
                                                                                                                                                    res.should.have.status(200); //The request was fulfilled.
                                                                                                                                                    describe('delete page', function () {
                                                                                                                                                        it('status ', function (done) {
                                                                                                                                                            chai.request(server).post('/delete').send(data1.deletenote).end((err, res) => {
                                                                                                                                                                if (err) {
                                                                                                                                                                    console.log("expect ==>", err);
                                                                                                                                                                    err.should.have.status(400); //The request had bad syntax or was inherently impossible to be satisfied.
                                                                                                                                                                } else {
                                                                                                                                                                    console.log("expect ==>", res.body);
                                                                                                                                                                    res.should.have.status(200); //The request was fulfilled.
                                                                                                                                                                    describe('reminder page', function () {
                                                                                                                                                                        it('status ', function (done) {
                                                                                                                                                                            chai.request(server).post('/reminder').send(data1.reminder).end((err, res) => {
                                                                                                                                                                                if (err) {
                                                                                                                                                                                    console.log("expect ==>", err);
                                                                                                                                                                                    err.should.have.status(400); //The request had bad syntax or was inherently impossible to be satisfied.
                                                                                                                                                                                } else {
                                                                                                                                                                                    console.log("expect ==>", res.body);
                                                                                                                                                                                    res.should.have.status(200); //The request was fulfilled.
                                                                                                                                                                                    describe('Trash page', function () {
                                                                                                                                                                                        it('status ', function (done) {
                                                                                                                                                                                            chai.request(server).post('/isTrashed').send(data1.isTrashed).end((err, res) => {
                                                                                                                                                                                                if (err) {
                                                                                                                                                                                                    console.log("expect ==>", err);
                                                                                                                                                                                                    err.should.have.status(400); //The request had bad syntax or was inherently impossible to be satisfied.
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    console.log("expect ==>", res.body);
                                                                                                                                                                                                    res.should.have.status(200); //The request was fulfilled.
                                                                                                                                                                                                    describe('CreateLabel page', function () {
                                                                                                                                                                                                        it('status ', function (done) {
                                                                                                                                                                                                            chai.request(server).post('/addLabel').send(data1.addLabel).end((err, res) => {
                                                                                                                                                                                                                if (err) {
                                                                                                                                                                                                                    console.log("expect ==>", err);
                                                                                                                                                                                                                    err.should.have.status(400); //The request had bad syntax or was inherently impossible to be satisfied.
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    console.log("expect ==>", res.body);
                                                                                                                                                                                                                    res.should.have.status(200); //The request was fulfilled.
                                                                                                                                                                                                                    describe('RetrieveLabel page', function () {
                                                                                                                                                                                                                        it('status ', function (done) {
                                                                                                                                                                                                                            chai.request(server).get('/getLabels').send(data1.getLabels).end((err, res) => {
                                                                                                                                                                                                                                if (err) {
                                                                                                                                                                                                                                    console.log("expect ==>", err);
                                                                                                                                                                                                                                    err.should.have.status(400); //The request had bad syntax or was inherently impossible to be satisfied.
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    console.log("expect ==>", res.body);
                                                                                                                                                                                                                                    res.should.have.status(200); //The request was fulfilled.
                                                                                                                                                                                                                                    describe('update Label page', function () {
                                                                                                                                                                                                                                        it('status ', function (done) {
                                                                                                                                                                                                                                            chai.request(server).post('/updateLabel').send(data1.updateLabel).end((err, res) => {
                                                                                                                                                                                                                                                if (err) {
                                                                                                                                                                                                                                                    console.log("expect ==>", err);
                                                                                                                                                                                                                                                    err.should.have.status(400); //The request had bad syntax or was inherently impossible to be satisfied.
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    console.log("expect ==>", res.body);
                                                                                                                                                                                                                                                    res.should.have.status(200); //The request was fulfilled.
                                                                                                                                                                                                                                                    describe('delete Label page', function () {
                                                                                                                                                                                                                                                        it('status ', function (done) {
                                                                                                                                                                                                                                                            chai.request(server).post('/deleteLabel').send(data1.deleteLabel).end((err, res) => {
                                                                                                                                                                                                                                                                if (err) {
                                                                                                                                                                                                                                                                    console.log("expect ==>", err);
                                                                                                                                                                                                                                                                    err.should.have.status(400); //The request had bad syntax or was inherently impossible to be satisfied.
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    console.log("expect ==>", res.body);
                                                                                                                                                                                                                                                                    res.should.have.status(200); //The request was fulfilled.
                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                done()
                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                    })                    
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                done()
                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                    })                       
                                                                                                                                                                                                                                }
                                                                                                                                                                                                   
                                                                                                                                                                                                                                done()
                                                                                                                                                                                                                            })
                                                                                                                                                                                                                        })
                                                                                                                                                                                                                    })                     
                                                                                                                                                                                                                }
                                                                                                                                                                                   
                                                                                                                                                                                                                done()
                                                                                                                                                                                                            })
                                                                                                                                                                                                        })
                                                                                                                                                                                                    })            
                                                                                                                                                                                                }
                                                                                                                                                                   
                                                                                                                                                                                                done()
                                                                                                                                                                                            })
                                                                                                                                                                                        })
                                                                                                                                                                                    })                    
                                                                                                                                                                                }
                                                                                                                                                   
                                                                                                                                                                                done()
                                                                                                                                                                            })
                                                                                                                                                                        })
                                                                                                                                                                    })              
                                                                                                                                                                }
                                                                                                                                   
                                                                                                                                                                done()
                                                                                                                                                            })
                                                                                                                                                        })
                                                                                                                                                    })                   
                                                                                                                                                }
                                                                                                                   
                                                                                                                                                done()
                                                                                                                                            })
                                                                                                                                        })
                                                                                                                                    })                                
                                                                                                                                }
                                                                                                   
                                                                                                                                done()
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })                        
                                                                                                                }
                                                                                   
                                                                                                                done()
                                                                                                            })
                                                                                                        })
                                                                                                    })                
                                                                                                }
                                                                   
                                                                                                done()
                                                                                            })
                                                                                        })
                                                                                    })        
                                                                                }
                                                   
                                                                                done()
                                                                            })
                                                                        })
                                                                    })   
                                                                }
                                   
                                                                done()
                                                            })
                                                        })
                                                    })
                                                }
                                                done()
                                            })
                                        })
                                    })
                                }

                                done()
                            })
                        })
                    })
                }
                done()
            })
        })
    })
})