console.log("server starts in a bit..");
var gulp = require('gulp');
var sass = require('gulp-sass');
var express = require('express');
var fs = require('fs');
var bodyParser = require("body-parser");

gulp.task('express', function() {
    console.log("express starting..");
    var app = express();
    app.use(bodyParser.json());

    app.use('/', express.static('public'));


    app.get('/getUserDetails', function(request, response) {

        var Uname = request.query.username;
        var psswd = request.query.password;
        console.log("Unmae=" + Uname);
        console.log("psswd=" + psswd);


        fs.readFile(__dirname + "/data/logindata.json", 'utf-8', function(err, data) {


            console.log('file data' + data);
            var fileJsonData = JSON.parse(data);
            var foundContact = {};

            for (var i = 0; i < fileJsonData.data.length; i++) {
                if (fileJsonData.data[i].username == Uname && fileJsonData.data[i].password == psswd) {
                    foundContact = fileJsonData.data[i].username;
                }
            }


            var stringFile = JSON.stringify(foundContact);
            response.send(stringFile);


        });

        return "success";

    });



    var server = app.listen(3000, function() {
        console.log("server started at port 3000");
    });
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') //'app/scss/styles.scss'
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
    });



//default task
gulp.task('watch', ['express'],function(){
    gulp.watch('app/scss/**/*.scss' , ['sass']);
});
