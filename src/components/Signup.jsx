import { useState } from 'react';
import { signupFields } from '../constants/formFields';
import FormAction from './FormAction';
import Input from './Input';
import { createUser } from '../utils/userFunc';
import { useNavigate } from 'react-router-dom';

const fields = signupFields;
const fieldsState = {};

fields.forEach((field) => fieldsState[field.id] = '');

const Signup = () => {
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate();
  console.log('signup State', signupState);

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  // handle Signup API Integration here
  const createAccount = async () => {
    await createUser(signupState.username, signupState.password, signupState.email, signupState.userID);
    navigate("/")
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  return (
    <form className="mt-8 space-y-6 max-w-md w-full" onSubmit={handleSubmit}>
      <div className="">
        {
          fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
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
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>

    </form>
  );
};

export default Signup;
