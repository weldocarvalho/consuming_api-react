import { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import axios from '../../services/axios';

import { Wrapper } from '../../styles/GlobalStyle';
import { Form } from './styled';

export default function Register() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (name.length < 2 || name.length > 50) {
      formErrors = true;
      toast.error('o nome deve ter entre 2 e 50 caracteres');
    }

    if (lastname.length < 2 || lastname.length > 50) {
      formErrors = true;
      toast.error('o sobrenome deve ter entre 2 e 50 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('email inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('a senha precisa conter entre 6 e 50 caracteres');
    }

    // ID NÃO INCREMENTAL, VERIFICAR API REST
    const id = 7;

    if (!formErrors) {
      try {
        const { data } = await axios.post('/users', {
          id,
          name,
          lastname,
          email,
          password,
        });
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Wrapper>
      crie aqui a sua conta
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="digite o seu nome"
          />
        </label>

        <label htmlFor="sobrenome">
          sobrenome:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="digite o seu sobrenome"
          />
        </label>

        <label htmlFor="email">
          email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="digite o seu email"
          />
        </label>

        <label htmlFor="senha">
          senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="digite a sua senha"
          />
        </label>

        <button type="submit">criar conta</button>
      </Form>
    </Wrapper>
  );
}
