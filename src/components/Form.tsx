import React, { useState } from 'react';

type IFormProps = {
  placeholder?: string;
  defaultText?: string;
  onSubmit: (text: string) => void;
};

const Form = ({ placeholder, defaultText, onSubmit }: IFormProps) => {
  const [text, setText] = useState(defaultText || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form className="w-full">
      <div className="flex items-center border-b border-blue-500 py-2 space-x-4">
        <input
          className="appearance-none bg-transparent border w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder={placeholder || ''}
          aria-label="Location"
        />
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-lg border-4 text-white py-1 px-4 rounded"
          type="button"
          onClick={() => onSubmit(text)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
