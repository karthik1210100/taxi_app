import React from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const taxiIcon = L.icon({
    iconUrl: 'src\taxi-icon.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
});

export function Service() {
    return (
        <>

            <section class="py-5" id="services">
                <div class="container">
                    <div class="text-center mb-5">
                        <h2 class="fw-bold">Why Choose Red Taxi</h2>
                        <p class="text-muted">We provide the best taxi services with these amazing features</p>
                    </div>
                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <h4>24/7 Availability</h4>
                                <p class="text-muted">Our services are available round the clock to serve you anytime, anywhere.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fas fa-bolt"></i>
                                </div>
                                <h4>Quick Response</h4>
                                <p class="text-muted">Get your taxi within minutes with our fast and efficient booking system.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                                <h4>Safe & Secure</h4>
                                <p class="text-muted">All our drivers are verified and vehicles are regularly inspected for
                                    safety.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fas fa-money-bill-wave"></i>
                                </div>
                                <h4>Affordable Rates</h4>
                                <p class="text-muted">Competitive pricing with no hidden charges. Pay what you see.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <h4>Live Tracking</h4>
                                <p class="text-muted">Track your ride in real-time and know exactly when your taxi will arrive.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fas fa-headset"></i>
                                </div>
                                <h4>Customer Support</h4>
                                <p class="text-muted">24/7 customer support to assist you with any queries or issues.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <section class="py-5 bg-light" id="fleet">
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div style={{ height: '80vh', borderRadius: '10px', overflow: 'hidden' }}>
                            <MapContainer
                                center={[11.0168, 76.95583``]}
                                zoom={14}
                                style={{ height: '100%', width: '100%' }}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[11.0168, 76.9558]} icon={taxiIcon} />
                            </MapContainer>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="p-4" style={{ height: '80vh', overflowY: 'auto' }}>
                            <h2>Live Map</h2>
                            <p>Access the live tracking of the vehicle.</p>
                        </div>
                    </div>
                </div>
            </div>

</section>
        </>
    );
}