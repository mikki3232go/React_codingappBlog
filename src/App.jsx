/*eslint-disable*/ //워닝 메시지 무시
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  let post = "강남 우동 맛집";
  let [글제목, set글제목] = useState([
    "남자코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [cnt, setCnt] = useState(0);
  let [gen, setGen] = useState("남자");
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState("");
  const onhandleChange = (e) => {
    setInput(e.target.value);
  };
  const onAddData = () => {
    // set글제목(글제목.concat(input));
    set글제목([...글제목, input]);
    console.log(글제목);
  };
  const onDeleteData = (idx) => {
    let new글제목 = [...글제목];
    new글제목.splice(idx, 1);
    set글제목(new글제목);
  };
  return (
    <div className="App">
      <div className="gray-nav">
        <h4 id={post}>블로그임</h4>
      </div>
      {글제목.map((item, index) => {
     
        return (
          <div className="list" key={index}>
            
            <h4
              onClick={() => {
                setModal(true);
                setTitle(index);
              }}
            >
              {item}
              <span
                onClick={() => {
                  setCnt(cnt + 1);
                }}
              >
                좋아요👍
              </span>
              {cnt}
            </h4>
            <p>
              <button onClick={() => {setModal(true);setTitle(index);}}>글수정</button>
              <button onClick={()=>onDeleteData(index)}>글삭제</button>
            </p>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <input onChange={onhandleChange} value={input} />
      <button onClick={onAddData}>저장하기</button>
      {modal ? <Modal index={title} /> : null}
    </div>
  );
  function Modal(props) {
    return (
      <div className="modal">
        <h4>{글제목[props.index]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    );
  }
}

export default App;
//[1]jsx 문법 1. clssName사용 2.변수 바인딩 {중괄호} 3.<태그 style = {{스타일명:'값'}}}
//           4. 속성명은 _ 대신 카멜스타일
//[2] Array 문법 : Destructuring문법
//         let [a,c]=[1,2]
//[3] useState사용 1. import {useState}
//         변동시 HTML값이 자동 렌더링 되게 하고 싶을때:,속성값, 클래스네임 등 을 자주 변경해야 할때 사용
//      2. [값, 변경함수] = useState(값)
//      3.state변경함수 : set변경함수(변경값)***###
//[4] 이벤트 함수  onClick ={함수}
//[5] Array ,object 형 state변경시 무조건 복사본으로 저장
//[6] 컴포넌트 만드는 법 1. 함수밖에 function 생성  2. return(<div></div>)  3. App.js등 에서 <함수명></함수명)으로 사용
//[6-1] const modal= ()=>{};로 만드는 것도 가능
//의미없는 <div>대신 <></>가능
//[7]어떤것을 컴포턴트로 만들면 좋은가. 1.반복적인 html 2. 큰 페이지들 3. 자주 변경되는 것들
//컴포넌트의 단점 다른 함수의 state를 사용할때 문제가 생김.
