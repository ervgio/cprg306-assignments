"use client"
import { useState } from "react";

export default function NewItem(){

const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  let incButtonStyle = "bg-blue-500 text-white rounded px-3 py-1";
  let decButtonStyle = "bg-blue-500 text-white rounded px-3 py-1";

  if (quantity === 20) {
    incButtonStyle = "bg-gray-500 text-white rounded px-3 py-1 cursor-not-allowed";
  }

  if (quantity === 1) {
    decButtonStyle = "bg-gray-500 text-white rounded px-3 py-1 cursor-not-allowed";
  }

  return (
   <main className="p-4 bg-amber-50 rounded-2xl w-38 mt-3">
      <h1 className="text-lg font-bold mb-4"></h1>
      <p className="text-black">{quantity}</p>
      <button className ={decButtonStyle} onClick={decrement} disabled={quantity == 1}> - </button>
      <button className ={incButtonStyle} onClick={increment} disabled={quantity == 20}> + </button>
    </main>
  );
    
}
