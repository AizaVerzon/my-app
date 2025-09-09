"use client";
import { useState } from "react";
import Calculator from "./calculator/page";

export default function Home() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<string | number | null>(null);

  const calculate = (operation: "add" | "subtract" | "multiply" | "divide") => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case "add":
        setResult(a + b);
        break;
      case "subtract":
        setResult(a - b);
        break;
      case "multiply":
        setResult(a * b);
        break;
      case "divide":
        setResult(b !== 0 ? a / b : "Cannot divide by 0");
        break;
      default:
        setResult("Invalid operation");
    }
  };

  return (
    <div
    className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-black"> Simple Calculator <br></br>
         <Calculator/>
      </h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="border p-2 rounded mb-2 w-64 text-black"
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="border p-2 rounded mb-4 w-64 text-black"
      />

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => calculate("add")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
        <button
          onClick={() => calculate("subtract")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
        <button
          onClick={() => calculate("multiply")}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          ×
        </button>
        <button
          onClick={() => calculate("divide")}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          ÷
        </button>
      </div>

      {result !== null && (
        <div className="text-lg font-semibold text-black">
          Result: <span>{result}</span>
        </div>
      )}
    </div>
  );
}
