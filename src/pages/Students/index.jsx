import { useEffect, useState } from 'react';

import axios from '../../services/axios';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/students');
      const { students: studentsData } = response.data;
      setStudents(studentsData);
    }

    getData();
  }, []);

  return (
    <>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </>
  );
}
