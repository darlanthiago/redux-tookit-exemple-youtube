import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  counterDecrement,
  counterIncreaseByAmount,
  counterIncrement,
  counterIncrementAsync,
  countIncreaseIfOdd,
  countReset,
} from "../../store/counter/slice";

export function Home() {
  const counter = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{counter.counter}</h1>

      <div>
        <button onClick={() => dispatch(counterIncrement())}>+1</button>
        <button onClick={() => dispatch(counterDecrement())}>-1</button>
      </div>
      <div>
        <button onClick={() => dispatch(counterIncreaseByAmount(5))}>+5</button>
        <button onClick={() => dispatch(countIncreaseIfOdd())}>
          +1 if odd
        </button>
        <button onClick={() => dispatch(counterIncrementAsync(6))}>
          {counter.loading ? "loading ..." : "+6 async"}
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(countReset())}>clear</button>
      </div>
    </div>
  );
}
