import React from 'react';

export type ValidationType = keyof typeof validation;

const validation = {
  day: {
    validate: (value: string) => {
      const day = parseInt(value, 10);
      return day > 0 && day < 32;
    },
    message: 'Must be a valid day',
  },
  month: {
    validate: (value: string) => {
      const month = parseInt(value, 10);
      return month > 0 && month < 13;
    },
    message: 'Must be a valid month',
  },
  year: {
    validate: (value: string) => {
      const year = parseInt(value, 10);
      return year < new Date().getFullYear();
    },
    message: 'Must be in the past',
  },
};

const useInput = (type: ValidationType) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  const validate = (value: string) => {
    if (!value) {
      setError('This field is required');
      return false;
    }

    if (validation[type] && !validation[type].validate(value)) {
      setError(validation[type].message);
      return false;
    }

    setError(null);
    return true;
  };

  const onChange = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    if (error) validate(currentTarget.value);
    setValue(currentTarget.value);
  };

  return {
    value,
    setValue,
    error,
    setError,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useInput;
