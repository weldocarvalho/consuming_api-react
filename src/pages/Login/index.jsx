import { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import axios from '../../services/axios';
import { Wrapper } from '../../styles/GlobalStyle';
import { Form } from './styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('email inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('a senha precisa conter entre 6 e 50 caracteres');
    }

    if (!formErrors) {
      try {
        await axios.post('/auth', {
          email,
          password,
        });
        toast.success('seja bem-vindx');
        // history.push('/dashboard');
      } catch (err) {
        const { response } = err;
        const { errors } = response.data;

        errors.map((error) => toast.error(error));
      }
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
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

        <button type="submit">entrar</button>
      </Form>
    </Wrapper>
  );
}
