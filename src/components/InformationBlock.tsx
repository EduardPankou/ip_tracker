import React from 'react';
import styled from 'styled-components';

interface ItemOfBlockProps {
    margin: number | undefined
}

interface InformationBlockProps {
    address: {
        success: boolean;
        city: string;
        ip: string;
        connection: {
            isp: string
        }
    }
}

const Block = styled.div`
  width: max-content;
  height: max-content;
  padding: 1rem;
  margin-top: 1rem;
  background: white;
  border-radius: 4px;
  display: flex;
`;

const ItemOfBlock = styled.div<ItemOfBlockProps>`
  max-width: 10rem;
  color: #ccc;
  margin-right: ${({ margin = 0 }) => margin}rem;
`;

const TitleOfItem = styled.p`
  color: #737373;
  font-size: 16px;
`;

const TextOfItem = styled.p`
  color: black;
  font-size: 14px;
`;

const InformationBlock: React.FC<InformationBlockProps> = ({ address }) => {
    return (
        <Block>
            <ItemOfBlock margin={2}>
                <TitleOfItem>IP ADDRESS</TitleOfItem>
                <TextOfItem>{address.ip}</TextOfItem>
            </ItemOfBlock>
            <ItemOfBlock margin={2}>
                <TitleOfItem>LOCATION</TitleOfItem>
                <TextOfItem>{address.city}</TextOfItem>
            </ItemOfBlock>
            <ItemOfBlock margin={0}>
                <TitleOfItem>ISP</TitleOfItem>
                <TextOfItem>{address.connection.isp}</TextOfItem>
            </ItemOfBlock>
        </Block>
    );
};

export default InformationBlock;
