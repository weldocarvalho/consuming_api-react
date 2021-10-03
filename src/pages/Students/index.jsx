import { useEffect, useState } from 'react';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import axios from '../../services/axios';

import { Wrapper } from '../../styles/GlobalStyle';
import { ProfilePicture, StudentWrapper } from './styled';

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

  const renderImg = (studentPicture) => (
    <img src={studentPicture.picture_url} alt="fotos dos estudantes" />
  );

  return (
    <Wrapper>
      <StudentWrapper>
        <h1>ALUNOS</h1>
        {students.map((student) => (
          <div key={student.id}>
            <ProfilePicture>
              {student.picture ? (
                renderImg(student)
              ) : (
                <FaUserCircle size={72} />
              )}
            </ProfilePicture>

            <span>{student.name}</span>
            <span>{student.email}</span>

            <span>
              <FaEdit />
            </span>
            <span>
              <FaWindowClose />
            </span>
          </div>
        ))}
      </StudentWrapper>
    </Wrapper>
  );
}
