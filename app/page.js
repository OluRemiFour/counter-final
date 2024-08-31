"use client";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counterSlice";

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterSlice.value);
  const [increaseAmount, setIncreaseAmount] = useState(0);

  const handleSubmit = () => {
    const amount = Number(increaseAmount) || 0;
    dispatch(incrementByAmount(amount));
    setIncreaseAmount(0); // Reset input after submission
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-36">
      <div className="flex flex-col items-center justify-center p-24 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg shadow-lg max-w-sm mx-auto">
        <div className="text-white text-4xl mb-4">Count: {count}</div>

        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
          >
            -
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
          >
            +
          </button>
        </div>

        <div className="flex flex-col items-center mx-auto justify-center">
          <label className="text-white mb-2">
            Increase by:
            <input
              type="number"
              value={increaseAmount}
              onChange={(e) => setIncreaseAmount(e.target.value)}
              className="w-20 mx-2 text-black font-semibold px-3 rounded-full focus:outline-none border-2 border-gray-300"
            />
          </label>

          <button
            onClick={handleSubmit}
            className="text-white bg-green-600 py-2 px-6 mt-4 rounded-full border"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
