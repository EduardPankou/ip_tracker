import React from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';
import markerIcon from '../../assets/icons/marker-icon.png';
import { Container } from '../../styles/Map'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    const address = useSelector((state: any) => state.address.value);
    function FlyToComponent() {
        const map = useMap()
        console.log(address)
        if (address.success) {
            map.flyTo([address.latitude, address.longitude], map.getZoom())
        } else {
            alert('Sorry, your IP incorrect')
        }
        return null
    }

    return (
        <Container>
            <MapContainer
                center={[address.latitude, address.longitude]}
                scrollWheelZoom={false}
                zoom={13}
                style={{ height: '65vh' }}
            >
                <FlyToComponent/>
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
        </Container>
    );
};

export default Map;
