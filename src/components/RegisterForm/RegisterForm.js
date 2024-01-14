import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import Button from 'styled/Button';
import Input from 'styled/Input';
import LabelContainer from 'styled/LabelContainer';
import Form from 'styled/Form';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelContainer>
        <label>Username</label>
        <Input type="text" name="name" placeholder="Enter username" required />
      </LabelContainer>
      <LabelContainer>
        <label>Email</label>
        <Input type="email" name="email" placeholder="Enter email" required />
      </LabelContainer>
      <LabelContainer>
        <label>Password</label>
        <Input
          type="password"
          name="password"
          placeholder="Enter password"
          pattern=".{7,}"
          title="Your password must contain at least 7 characters."
          required
        />
      </LabelContainer>
      <Button type="submit">Register</Button>
    </Form>
  );
};
