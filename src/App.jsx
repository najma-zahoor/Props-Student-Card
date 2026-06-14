import Student from "./Student";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Student name="Najma" age={23} course="React JS" />
    </div>
  );
}