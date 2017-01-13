var express = require('express');
var app=express();

var fs = require('fs');
var path = require('path');
var bodyParse = require('body-parser');
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '221096',
    database: 'Social'
});

// connection.query('select * from Users',function (err, rows, fields) {
//     console.log(rows);
// });

app.use(bodyParse.json());

app.use(express.static(path.join(__dirname+"/")));


app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

//get and check all users on db;

app.get('/get',function (req,res) {
    connection.query('select id, user_name, user_sname, user_photo from Users',function (err, rows, fields) {
        // console.log(rows);
        res.send(rows);
    });
})


//registration new user;
app.post('/registration', function (req, res) {

    var user = req.body;
    connection.query("insert into Users(user_name,user_sname,user_login, pass, user_photo) values('" + user.name + "','" + user.sname + "','" + user.login + "','" + user.password + "','" + user.photo + "');", function (err, rows, fields) {
        if(err){
            // console.log(err);
            res.send(false);
        }else{
            res.send(true);
        }
    });
    // console.log(user);

});


//sing in;
app.post('/login',function (req,res) {
    var user=req.body;
    var resUser;
    var tr=false;
    connection.query('select * from Users',function (err, rows, fields) {
        var userCh=rows;
        if(!err){
        for(var x in rows){
            if(user.login==userCh[x].user_login && user.password==userCh[x].pass){
                tr=true;
                resUser=userCh[x];
                res.send(resUser);
            }
        }if(!tr){
            res.send(resUser)
            }
        }else{
            console.log('cant find user')
        }
    });
})


//send friend application;
app.post('/addFr',function (req,res) {
    var user=req.body;
    connection.query("insert into Applic(id_user_app, id_user_acc) values('" + user.user_id1 + "','" + user.user_id2 + "');",function (err, rows, fields) {
    if(err){
        res.send(false)
    }else{
        res.send(true);
    }

});
    // console.log(user);
})

//get a friend applic
app.post('/accFriend',function (req, res) {
    var id=req.body;
    var frs;
        connection.query('select id, user_name, user_sname, user_photo from Users where id in(select id_user_app from Applic where id_user_acc = '+id.id+')',function (err, rows, fields) {
                frs=rows;
                res.send(frs);
                // console.log(frs)
        });
    // console.log(id.id);
})


// accept new  friend
app.post('/acceptFriend',function (req,res) {
    var id=req.body;
    connection.query("insert into Friends(id_user, id_friend) values(" + id.isUser + "," + id.isFriend + ");",function (err, rows, fields) {
        // if(!err){
        //     console.log(true);
        // }else{
        //     console.log(err);
        // }
        // console.log(id);

    });
    connection.query("delete from Applic where id_user_app="+id.isFriend+" and id_user_acc="+id.isUser+";",function (err,rows, fields) {
    })
})


//get user friend

app.post('/friends',function (req,res) {
   var user=req.body;
   console.log(user);
    connection.query("select id, user_name, user_sname from Users where id in(select id_friend from Friends where id_user = "+user.id+")",function (err, rows, fields){
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err)
        }
    })
})







app.listen(8080,function () {
    console.log("listen on port")
})
