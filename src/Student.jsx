export default function Student(props) {
  return (
    <div className="p-4 bg-white shadow-lg rounded-xl w-64 text-center">
      <h2 className="text-xl font-bold">{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}