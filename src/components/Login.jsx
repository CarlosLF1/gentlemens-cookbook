import React, { useState } from 'react';
import { loginFields } from '../constants/formFields';
import Input from './Input';
import FormExtra from './FormExtra';
import FormAction from './FormAction';

const fields = loginFields;
const fieldsState = {};
// eslint-disable-next-line no-return-assign
fields.forEach((field) => fieldsState[field.id] = '');

const Login = () => {
  const [loginState, setLoginState] = useState(fieldsState);
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  // Handle Login API Integration here
  const authenticateUser = () => {

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  return (
    <form className="mt-8 space-y-6 max-w-md w-full">
      <div className="-space-y-px">
        {
          fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))
        }
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
};

export default Login;
