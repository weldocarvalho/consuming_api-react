import { useState } from 'react';

import { Wrapper } from '../../styles/GlobalStyle';
import { Form } from './styled';

export default function Register() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Wrapper>
      crie aqui a sua conta
      <Form>
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
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="digite o seu email"
          />
        </label>

        <label htmlFor="senha">
          senha:
          <input
            type="text"
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
