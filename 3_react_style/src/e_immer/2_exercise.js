import { useState } from "react"
import produce from "immer"

const App = () => {
  const [studentMng, setStudentMng] = useState([
    { dept: "컴공", title: "자바", score: 3 },
    { dept: "소웨", title: "파이썬", score: 1 },
    { dept: "전전", title: "리액트", score: 2 },
    { dept: "화공", title: "스프링", score: 5 },
  ])

  const [list, setList] = useState(null)

  // 화면출력
  const handleList = () => {

    const result = studentMng.map(({ dept, title, score }, idx) => (
      <li key={idx}>
        [{dept}] {title} - 점수 : ({score})
      </li>
    ))
    setList(result)
  }

  //전개연산자 방식으로 '리액트' => '도커'
  const handleSpread = () => {
    const temp = studentMng.map((data, idx) =>
      idx === 2 ? { ...data, title: "도커" } : data
    )
    setStudentMng(temp)
  }

// immer 방식으로 '파이썬 => 'ES6' 
  const handleImmer = () => {
    const temp = produce(studentMng, (draft) => {
      draft[1].title = "ES6"
    })
    setStudentMng(temp)
  }

  return (
    <div>
      <button onClick={handleSpread}>전개연산자</button>
      <button onClick={handleImmer}>immer</button>
      <hr />
      <button onClick={handleList}>확인</button>
      <ul>{list}</ul>
    </div>
  )
}

export default App
