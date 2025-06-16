export default function Item(props) {
  return (
    <li className="p-3 m-6 bg-red-500 max-w-sm ">
      <p className="text-xl font-bold text">{props.name}</p>
      <p className="text-sm">Buy {props.quantity} in {props.category}</p>
    </li>
  );
}
