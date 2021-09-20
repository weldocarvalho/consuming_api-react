import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:3535/students");
      const { students } = response.data
      setStudents(students);
    }

    getData();
  }, []);

  return (
    <div className="App">
      {students.map(student => (
        <li>{student.name}</li>
      ))}
    </div>
  );
}

export default App;
