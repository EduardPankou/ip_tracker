import React, {useEffect, useState} from 'react';
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import InformationBlock from '../components/InformationBlock'
import { useSelector, useDispatch } from 'react-redux';
import { getAddressByIP } from '../store/slices/address';
import styled from 'styled-components';

const HeaderComponent = styled.header`
  width: 100%;
  height: 20rem;
  background: #7b8ce3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-weight: 500;
  width: max-content;
  color: white;
`
const Search = styled.div`
  display: flex;
`

const Header = () => {
    const [ipAddress, setIPAddress] = useState('');
    const address = useSelector((state: any) => state.address.value);
    const dispatch = useDispatch();
    const handleSubmit = () => {
        // @ts-ignore
        dispatch(getAddressByIP(ipAddress));
    };

    useEffect(() => {
        // @ts-ignore
        dispatch(getAddressByIP(ipAddress));
    }, [dispatch]);

    return (
        <HeaderComponent>
            <Title>IP ADDRESS TRACKER</Title>
            <Search>
                <Input value={ipAddress} placeholder={'Введите IP адрес'} onChange={setIPAddress}/>
                <Button name={'НАЙТИ'} type={'button'} onSubmit={handleSubmit}/>
            </Search>
            {address.success && <InformationBlock address={address} />}
        </HeaderComponent>
    );
}

export default Header;
