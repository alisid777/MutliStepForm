import { useState, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [rusername, setRUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [rphone, setRPhone] = useState('');
  const [email, setEmail] = useState('');
  const [remail, setREmail] = useState('');

  return (
    <FormContext.Provider
      value={{
        username,
        rusername,
        phone,
        rphone,
        email,
        remail,

        setUsername,
        setRUsername,
        setPhone,
        setRPhone,
        setEmail,
        setREmail,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
