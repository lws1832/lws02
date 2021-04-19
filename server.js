const express = require('express');//생성한다 리콰이어
const app = express();
const port = 3000;

/*
    app = express 에대한 객체
    app.get() 이벤트입니다.? url 변동에대한 이벤트입니다.
    app.get() 어떻게 실행되는가?
    2가지 매개변수가 있습니다.
    1. 경로입니다. '/'=> localhost:3000
    2. 콜백함수 (요청,응답)=>{두가지의 인자값이 존재합니다 요청과 응답
        ex) filter((value,key)=>{})
        응답이란
        서버는 요청을 받은내용을 토대로 응답을 해주는 기계
        요리사는 고객에게 요청을 받아서 요리를 만들어 내주는 사람
        응답해줌.보냄('뚝배기');
        응답.send('응답하라 뚝배기');
    }
*/

app.get('/',(요청,응답)=>{//메인 페이지 즉 naver.com 
    응답.send('hello world');
})

app.get('/hello',(요청,응답)=>{//메인 페이지 즉 naver.com/hello 
    응답.send('응답하라 응답하라 빨리빨리');//send 보낸다 ('응답하라')
})

app.listen(port,()=>{
    console.log(`아무거나 적어도 되나요? ${port}`);
}); //서버 만드는 코드블럭

function sum(a, b) {
    return a + b;
}

console.log('sum = ' + sum(1, 2));

/*
express를 생성한다.

app = express(); app에다가 익스프레스 객체를 담는다.

app.listen(); app객체에서 listen() 매서드를 호출했고 listen 매서드에는 2가지 매개변수가 인자값이 들어간다.

1 port 들어간다. 컴퓨터는 5만개정의 구멍있습니다 5만번까지 포트가 존재한다.
    만약에 zoom 인터넷을 사용한다 port 3000이라고 가정하고
    저희 코드도 3000이라고 하면 한번에 두개가 동시에 들어갈 수 없다.

2 실행되었을때 콜백함수가 들어간다.
*/ 

//라이브러리 ??도서관
//코드많은 공간입니다.
//npm express
//npm install express
//터미널
//1순위 npm 활성화 (npm init)
//2순위 npm 통해 express

//컨트롤+c 끄기
//이전에 했던거 가져오기 방향키 위에꺼 누른다. 가져와서 실행
//nodejs를 껏다가 실행 시켜야 스크립트 수정한게 적용된다.

/*
get 읽기 url주소가 직관적으로 보인다. 눈에 보이는 데이터
post 쓰기 로그인/회원가입 할때 사용한다. 눈에 안 보이는 데이터
put 수정
delete 삭제
*/ 