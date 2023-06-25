import React from 'react';
import styled from 'styled-components';
import { InputProps } from '../../types/inputType'

const InputComponent = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
`;

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
