require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const mysql = require('mysql');
const bodyParser=require('body-parser');
const app = express();
const port = process.env.SERVER_PORT;


app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
    autoescape:true,
});

let connection = mysql.createConnection({
    /* 데이터 정보를 커넥션 안에다 넣은상태 */
    host:'localhost',
    user:'root',
    password:'1234',
    database:'ingoo',
});
connection.connect();//데이터베이스를 연결을한다?했다?

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{//get은 데이터를 보낼때 길이에 제한이 있고 보안에 취약하다는 단점있음
    //query(볃교)는 SQL문 셀렉트문 업데이트문 인설트문 ? 사용가능하게 해준?
    connection.query("select * from user",(error,results)=>{
        if(error){
            //에러 생기면 여기 실행
            console.log(error);
        }else{
            //에러가 아니면 여기 실행
            console.log(results);
            //결과값 배열형태에요 객체
            //즉 [{userid:'wed7722'},{},{}]
            results.forEach(ele=>{
                console.log(ele.userid,ele.userpw,ele.username);
            })
        }
    })

    res.render('index.html',{
        name:'ingoo',
    })
})

app.post('/join',(req,res)=>{
    console.log(req.body);
    /*
    req.body 있는 내용들을 하나씩 가져와보기
    query문을 작성해보자 (sql문 작성한는데 insert into user...)
    
    실제로 쿼리문을 실행시킨다.
    실행이 완료가 되면 join.html을 실행시켜보자.
    (id,pw,name)보내서 실행시켜보자.
    */
   let id = req.body.userid;
   let pw = req.body.userpw;
   let name = req.body.username;
   let sql = `insert into user(userid,userpw,username) values('${id}','${pw}','${name}')`;
       connection.query(sql,(error,results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results);
            res.render('join.html',{
                id:id,
                pw:pw,
                name:name
                })
            //render join.html 보내보자.
            //겁나 신기하네
            }
       
      
        
    })
})

app.listen(3000,()=>{
    console.log(`터미널에 나오는 콘솔창 신기하쥬?: ${port}`);
})
//앞으로 빠르게 칠 수 있도록 작성을 많이 해보자

/*
!!중요 변수이동
내가 만든 변수가 어디서 

최종목표
회원가입 만들기

오늘목표
HTML POST-> SERVER에서 받아가지고 -> DB에 insert하기

*/