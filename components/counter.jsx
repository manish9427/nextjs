"use client";

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/slices/counter-slice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button> &nbsp;
      <button onClick={() => dispatch(decrement())}>-</button> &nbsp;
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
