import React from 'react';
import { addressType } from '../types/addressType'
import { Block, ItemOfBlock, TextOfItem, TitleOfItem } from '../styles/InformationBlock'

interface InformationBlockProps {
    address: addressType;
}

const InformationBlock: React.FC<InformationBlockProps> = ({ address }) => {
    return (
        <Block>
            <ItemOfBlock margin={2}>
                <TitleOfItem>IP ADDRESS</TitleOfItem>
                <TextOfItem>{address.ip}</TextOfItem>
            </ItemOfBlock>
            <ItemOfBlock margin={2}>
                <TitleOfItem>LOCATION</TitleOfItem>
                <TextOfItem>{address.country}, {address.city}</TextOfItem>
                <TextOfItem>{address.postal}</TextOfItem>
            </ItemOfBlock>
            <ItemOfBlock margin={0}>
                <TitleOfItem>ISP</TitleOfItem>
                <TextOfItem>{address.connection.isp}</TextOfItem>
            </ItemOfBlock>
        </Block>
    );
};

export default InformationBlock;
