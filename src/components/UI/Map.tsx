import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const MapDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Map = () => {
    const address = useSelector((state: any) => state.address.value);
    const loading = useSelector((state: any) => state.address.loading);
    const [markerPosition, setMarkerPosition] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        console.log(address)
        if (address.success) {
            setMarkerPosition([address.latitude, address.longitude]);
            console.log(markerPosition)
        }
    }, [address]);

    return (
        <MapDiv>
            <MapContainer
                center={markerPosition}
                scrollWheelZoom={false}
                zoom={13}
                style={{ height: '60vh' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {loading && <Marker position={markerPosition}/>}
            </MapContainer>
        </MapDiv>
    );
};

export default Map;
