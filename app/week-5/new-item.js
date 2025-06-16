"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item added:Name: ${name} Quantity: ${quantity}Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => {
    if (quantity < 99) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-200 p-6 max-w-sm mx-auto rounded-xl shadow-lg space-y-4"
    >
      <input
        type="text"
        placeholder="Item name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 rounded-xl border bg-white text-black placeholder-gray-400"
      />


      <div className="flex justify-between gap-10 text-black " >
    
        <div className=" bg-white rounded-xl px-4 py-2 space-x-2">
          <span className="text-lg font-medium">{quantity}</span>
          <button
            type="button"
            onClick={decrement}
            className="bg-gray-300 text-white px-3 py-1 rounded-full text-lg shadow"
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            className="bg-blue-500 text-white px-3 py-1 rounded-full text-lg shadow"
          >
            +
          </button>
        </div>

   
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 bg-white text-black p-2 rounded-xl border border-gray-300 shadow-md"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

 
      <button
        type="submit"
        className="w-full bg-blue-500 text-white text-xl rounded-xl py-3 hover:bg-blue-600"
      >
        +
      </button>
    </form>
  );
}
