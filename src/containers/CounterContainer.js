import React from 'react';
import {useSelector, useActions} from 'react-redux';
import Counter from '../components/Counter';
import {increment, decrement} from '../modules/counter';

//The use of useSelector method and useActions.
const CounterContainer = () => {
  //카운터 겂을 스테이트 안의 state.counter값 안 어레이로 지정한다.
    const counter = useSelector(state => state.counter, []);

    const [onIncrease, onDecrease] = useActions([increment, decrement], []);
  return (
   <Counter number={counter} onIncrease={onIncrease} onDecrease={onDecrease} />
  )
}

export default CounterContainer
