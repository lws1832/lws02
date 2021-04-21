/*
nunjucks
메모 npm install -g ungit
터미널에서 npm install nunjucks chokidar

body-parser
npm install body-parser
*/

const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const app=express();

nunjucks.configure('views',{
    express:app,//express는 어떤걸 쓸거냐
    autoescape:true,//보안문제인데 무조건 true
});

app.use(bodyParser.urlencoded({extended:false}));//외워야한다 

app.set('view engine','html');//app.get('/',(dycjd,dmdekq)=>{})
//localhost:3000/?name=asdf&id=web7722&pw=1234
//위에 방식이 queryString -> URL에 내용을 담는 변수
// [도메인] > naver.com google.com
//naver.com ->localhost:3000
// [도메인]?변수=값&변수=값&변수=값..
//express -> name=asdf&id=web7722&pw=1234 Objext 만들어준다. json
/*
    name:asdf,
    id=web8822,
    pw=1123
    
    요청에서 query라는 곳에 내용을 담아준다.
    
    query={
        name:asdf,
        id=web8822,
        pw=1123
        }
        queryString
*/
app.get('/',(요청,응답)=>{

    console.log(요청.query.name);
    console.log(요청.query.id);
    console.log(요청.query.pw);
    
    응답.render('index.html',{
        title:요청.query.name,
        user_id:요청.query.user_id,
        user_pw:요청.query.user_pw
       /*
       최초 서버실행->브라우저에 html주고-
       브라우저-> 서버 ->HTML ?
       브라우저 서버 <- HTML ? form을써서 요청할 수 있다?
       html 보인다는것은 서버를 거쳤다는거
       html.링크가 보이면 다시 서버로 갓다가
       다시 html로 보낸다.
       */
    });
    //응답.send('hello')
    //view engine 뷰엔진을 실행해야한다.
});

app.post('/',(요청,응답)=>{
    console.log(요청.body);
    응답.send('POST로 왔니?')
})

app.listen(3000, ()=>{
    console.log('server start port : 3000');
})