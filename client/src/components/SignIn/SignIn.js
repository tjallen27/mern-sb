import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

// Redux
import { authSignIn } from '../../actions/auth';

// Firebase Auth
import { auth } from '../../firebase';

const SignIn = (props) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    auth
      .signInWithEmailAndPassword(form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(authSignIn(user));
        props.history.push('/profile');
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form>
      <h2>SIGN IN</h2>
      <Input type="text" name="email" placeholder="Email" onChange={(e) => handleChange(e)} value={form.email} />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => handleChange(e)}
        value={form.password}
      />
      <Button type="primary" size="fluid" shadow onClick={() => handleSubmit()}>
        Submit
      </Button>
    </Form>
  );
};

export default withRouter(SignIn);
