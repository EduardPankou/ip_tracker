import React from 'react';
import styled from 'styled-components';

const InputComponent = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
`;


interface InputProps {
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ value, placeholder, onChange }) => {
    return (
        <InputComponent
            type="text"
            value={value}
            onChange={(e: { target: { value: string; }; }) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    );
};

export default Input;
