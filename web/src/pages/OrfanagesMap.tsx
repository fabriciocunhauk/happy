import React from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/pages/orfanage-map.css';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

function OrfanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy" />

                    <h2>Escolha um orfanato</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Neropolis</strong>
                    <span>Goias</span>
                </footer>
            </aside>

            <Map
                center={[-16.4023774, -49.2413679]}
                zoom={14}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/* <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                /> */}

                <Marker
                    icon={mapIcon}
                    position={[-16.4023774, -49.2413679]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#FFF" />
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orfanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrfanagesMap;