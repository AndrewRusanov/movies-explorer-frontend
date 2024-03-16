import { useState } from 'react';
import { emailRegex } from '../utils/constants';

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = e => {
    const target = e.target;
    const { value, name } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });

    setIsValid(target.closest('form').checkValidity());

    if (name === 'email') {
      const isValidRegex = emailRegex.test(value);
      if (isValidRegex) {
        errors.email = '';
        setErrors(errors);
        setIsValid(target.closest('form').checkValidity());
      } else {
        setIsValid(false);
        setErrors({ ...errors, email: 'Введите корректный email' });
      }
    } else {
      setIsValid(target.closest('form').checkValidity());
    }
  };

  return { values, handleChange, errors, isValid };
}
