import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAddressByIP } from '../store/slices/address';
import { addressType } from '../types/addressType'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import InformationBlock from '../components/InformationBlock'
import { Container, Title, Search } from '../styles/Header'



const Header = () => {
    const [ipAddress, setIPAddress] = useState('');
    const address = useSelector((state: {
        address: {
            value: addressType
        }
    }) => state.address.value);
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
        <Container>
            <Title>IP ADDRESS TRACKER</Title>
            <Search>
                <Input
                    value={ipAddress}
                    placeholder={'ENTER IP ADDRESS'}
                    onChange={setIPAddress}
                />
                <Button
                    name={'SEARCH'}
                    type={'button'}
                    onSubmit={handleSubmit}
                />
            </Search>
            {address.success && <InformationBlock address={address} />}
        </Container>
    );
}

export default Header;
