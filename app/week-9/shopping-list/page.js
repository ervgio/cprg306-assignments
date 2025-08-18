"use client";

import { useUserAuth } from "../_utils/auth-context";

export default function ShoppingListPage() {
  const { user } = useUserAuth();

  return (
    <div className="p-4 text-white bg-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Shopping List</h1>
      
    </div>
  );
}
