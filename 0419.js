

arr=[];
for(i=1; i<=10; i++){
    arr.push(i);
}
console.log(arr);

arr=[];
for(i=1; i<=12; i++){
    if(i%3==0){
        arr.push(i);
    }
}
console.log(arr);
/*
배열을 3 6 9 12로 담은거다 어떻게? 만약 3이면 arr.push로(i); 값을 넣었다.
*/ 



arr.forEach(w =>{
    console.log(w);
});
/*
 forEach 우선 "대문자" 신경써야한다 대문자로 출력이 안될 수 있다.
 배열을 forEach로 돌리는데 익명함수 화살표 함수로 밸류값을 임의로 정했고
 console.log(); 안에 스트링으로 `${w}`출력했는데 w 밸류값만 넣으면
 숫자형으로 출력된다.
*/

for(i=0; i<=4; i++){
        console.log(`${arr[i]}`);
    /*arr[]안에 현재 인덱스가 0123 존재하고
    console.log(`${arr[i]}`); 배열안에 존재하는 인덱스값을
    스트링으로 바꿔서 출력을 시켰다. */
}


