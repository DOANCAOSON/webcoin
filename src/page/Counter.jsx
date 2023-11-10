import { useCountState, useCountDispatch } from '../Context/Context'; // Import custom hooks từ tệp context.js
import { INCREASE_COUNT, DECREASE_COUNT } from '../reducer/Reducer'; // Import action types từ tệp reducer.js

function Counter() {
  const { count } = useCountState();
  const dispatch = useCountDispatch();

  const increaseCount = () => {
    dispatch({ type: INCREASE_COUNT });
  };

  const decreaseCount = () => {
    dispatch({ type: DECREASE_COUNT });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default Counter;
