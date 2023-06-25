import styled from "styled-components";

interface ItemOfBlockProps {
    margin: number | undefined;
}

export const Block = styled.div`
  width: max-content;
  height: max-content;
  padding: 1rem;
  margin-top: 1rem;
  background: white;
  border-radius: 4px;
  display: flex;
`;

export const ItemOfBlock = styled.div<ItemOfBlockProps>`
  max-width: 10rem;
  color: #ccc;
  margin-right: ${({ margin = 0 }) => margin}rem;
`;

export const TitleOfItem = styled.p`
  color: #737373;
  font-size: 16px;
`;

export const TextOfItem = styled.p`
  color: black;
  font-size: 14px;
`;
