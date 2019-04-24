import React from 'react'

//Counter function componenet
const Counter = ({ onIncrease, onDecrease, number }) => {
  return (
    <div>
    // 현재 스테이트 안의 넘버라는 상수 값. 
      <h1>{number}</h1>
        <div>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    </div>
  )
}

export default Counter
