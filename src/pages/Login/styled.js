import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 1.5rem;
  width: 50rem;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  input {
    height: 4rem;
    padding: 0 1rem;
    font-size: 1.7rem;
    border: 0.1rem solid #ddd;
    border-radius: 0.5rem;
  }

  button {
    cursor: pointer;
    transition: all 300ms;
    height: 4rem;
    padding: 0 1rem;
    text-transform: uppercase;
    border: none;
    border-radius: 0.5rem;
    background-color: #14248a;
    color: white;
    font-size: 1.7rem;
    font-weight: bold;
  }

  button:hover {
    background-color: #0c1a70;
  }
`;
