import React from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';
import markerIcon from '../../assets/icons/marker-icon.png';
import L from 'leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';

const MapDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Map = () => {
    const address = useSelector((state: any) => state.address.value);
    function MyComponent() {
        const map = useMap()
        map.flyTo([address.latitude, address.longitude], map.getZoom())
        return null
    }

    return (
        <MapDiv>
            <MapContainer
                center={[address.latitude, address.longitude]}
                scrollWheelZoom={false}
                zoom={13}
                style={{ height: '65vh', position: 'relative' }}
            >
                <MyComponent/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={[address.latitude, address.longitude]}
                    icon={L.icon({
                        iconUrl: markerIcon,
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        tooltipAnchor: [16, -28],
                    })}
                />
            </MapContainer>
        </MapDiv>
    );
};

export default Map;
