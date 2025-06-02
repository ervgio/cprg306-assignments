export default function Item(props) {
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm" >
      <p className="text-xl font-bold">{props.name}</p>
      <p className="text-sm">Buy {props.quantity} in {props.category}</p>
    </li>
  );
}
