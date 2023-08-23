// javascript 에서 변수 설정 : var(변수),  >>> let(변수) , const(상수)
//변수선언 :  ES6 이후 , 이를 보완하기ㅣ 위해 추가된 변수 선언 방식이 let과 const이다.
// - let : 일반적인 변수
// - const : 상수

import { useState } from "react";
// 속성을 받아준다.

export default function Hello(props){
    // props는 강제로 변경 불가
    // props.age = 150 ; 불가


    
    const[name, setName] = useState('hong');

    //useState를 이용해서 
    const[age,setAge] = useState(props.age);

    const msg = props.age >19 ? "성년" : "미성년";

    function changeName(){
        const newname = name === 'hong' ?'kim':'hong';
        setName(newname);
        setAge(age+5);
    }
    return(

        <div>
           
            <h1>{name}({age}) : {msg}</h1>
            <button onClick={changeName}>changeName</button>
        </div>
    )

}