export default function Item({ iName, iQuantity, iCategory, onSelect }) {
  return (
    <div
      onClick={() => onSelect(iName)}
      className="cursor-pointer grid bg-violet-400 m-5 p-2 w-150 rounded-4xl font-bold shadow-lg border-blue-400 border-4"
    >
      <li className="list-none grid place-items-center">
        <ul className="text-3xl">{iName}</ul>
        <ul>Quantity: {iQuantity}</ul>
        <ul>Category: {iCategory}</ul>
      </li>
    </div>
  );
}