import React from "react";

export function About() {

    return (

         <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <h4 class="text-white mb-4"><i class="fas fa-car me-2"></i>Red Taxi</h4>
                            <p>Reliable, safe, and affordable taxi services for all your transportation needs. Available 24/7
                                throughout the city.</p>
                        </div>
                        <div class="col-md-4 col-lg-2 mb-4 mb-md-0">
                            <h5 class="text-white mb-4">Quick Links</h5>
                            <a href="#" class="footer-link">Home</a>
                            <a href="#services" class="footer-link">Services</a>
                            <a href="#fleet" class="footer-link">Our Fleet</a>
                            <a href="#about" class="footer-link">About Us</a>
                            <a href="#contact" class="footer-link">Contact</a>
                        </div>
                        <div class="col-md-4 col-lg-3 mb-4 mb-md-0">
                            <h5 class="text-white mb-4">Services</h5>
                            <a href="#" class="footer-link">Airport Transfers</a>
                            <a href="#" class="footer-link">City Rides</a>
                            <a href="#" class="footer-link">Corporate Travel</a>
                            <a href="#" class="footer-link">Special Events</a>
                            <a href="#" class="footer-link">Hourly Rental</a>
                        </div>
                        <div class="col-md-4 col-lg-3">
                            <h5 class="text-white mb-4">Newsletter</h5>
                            <p>Subscribe to get updates on offers and promotions</p>
                            <div class="d-flex">
                                <input type="email" class="form-control" placeholder="Your Email" />
                                <button class="btn btn-taxi ms-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <hr class="my-1" />
                    <div class="text-center">
                        <p class="mb-0">&copy; 2023 Red Taxi. All rights reserved.</p>
                    </div>
                </div>
            </footer>

    );
}