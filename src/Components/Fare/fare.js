import React from "react";


export function Fare() {
    return (
        <>

        <section class="py-5 bg-light" id="fleet">
                <div class="container">
                    <div class="text-center mb-5">
                        <h2 class="fw-bold">Our Taxi Fleet</h2>
                        <p class="text-muted">Choose from our variety of vehicles for every need</p>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="taxi-card">
                                <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    className="taxi-img w-100" alt="Standard Taxi" />
                                <div class="p-4">
                                    <h4>Standard Taxi</h4>
                                    <p class="text-muted">Comfortable 4-seater for everyday travel</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star-half-alt"></i>
                                        </span>
                                        <span class="fw-bold text-red-taxi">$2.50/mile</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="taxi-card">
                                <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    class="taxi-img w-100" alt="Premium Taxi" />
                                <div class="p-4">
                                    <h4>Premium Taxi</h4>
                                    <p class="text-muted">Luxury vehicles for special occasions</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </span>
                                        <span class="fw-bold text-red-taxi">$4.00/mile</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="taxi-card">
                                <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    class="taxi-img w-100" alt="SUV Taxi" />
                                <div class="p-4">
                                    <h4>SUV Taxi</h4>
                                    <p class="text-muted">Spacious 6-seater for groups and families</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </span>
                                        <span class="fw-bold text-red-taxi">$3.50/mile</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}