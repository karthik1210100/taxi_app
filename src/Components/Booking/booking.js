import React from "react";

export function Booking() {
    return (
        <>

        <section class="hero-section" id="home">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <h1 class="display-4 fw-bold mb-4">Reliable Taxi Services Whenever You Need</h1>
                            <p class="lead mb-5">24/7 taxi services with professional drivers. Book your ride in seconds and
                                enjoy a comfortable journey.</p>
                            <div class="d-flex">
                                <a href="#" class="btn btn-taxi me-3">
                                    <i class="fas fa-download me-2"></i>Download App
                                </a>
                                <a href="#contact" class="btn btn-outline-light">
                                    <i class="fas fa-phone me-2"></i>Call Us
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="booking-card">
                                <h3 className="mb-4">Book Your Ride</h3>
                                <form>
                                    <div class="mb-3">
                                        <label className="form-label">Pickup Location</label>
                                        <input type="text" class="form-control" placeholder="Enter pickup address" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Drop Location</label>
                                        <input type="text" class="form-control" placeholder="Enter destination" />
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Pickup Date</label>
                                            <input type="date" class="form-control" />
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <label class="form-label">Pickup Time</label>
                                            <input type="time" class="form-control" />
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-taxi w-100">Book Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )

}