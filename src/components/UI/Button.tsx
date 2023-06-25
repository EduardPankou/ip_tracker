import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from '../../types/buttonType'

const ButtonComponent = styled.button`
  padding: 10px;
  background: #163bf5;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  transition: .5s all;
  &:hover {
    background: #243dbd;
    transition: .5s all;
  }
`

const Button: React.FC<ButtonProps> = ({ onSubmit, name, type }) => {
    return (
        <ButtonComponent type={type} onClick={onSubmit}>
            {name}
        </ButtonComponent>
    );
};

export default Button;
