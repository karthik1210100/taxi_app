import React from "react";


export function Title() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
                <div className="container">
                    <a className="navbar-brand text-red-taxi" href="#">
                        <i className="fas fa-car me-2"></i>Red Taxi
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#fleet">Our Fleet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item ms-lg-3">
                                <a className="btn btn-taxi mt-2 mt-lg-0" href="#book">Book Now</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            
        </>
    );
}