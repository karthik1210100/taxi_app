import React from "react";

export function Contact() {

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [successMessage, setSuccessMessage] = React.useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        // alert("Message sent successfully!");

        setSuccessMessage("Message sent successfully!");

        setTimeout(() => {
            setSuccessMessage("");
        }, 4000);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    return (
        <>
            <section className="py-5" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h2 className="fw-bold mb-4">Contact Us</h2>
                            <p className="mb-4">Have questions or need assistance? Reach out to our team anytime.</p>
                            <div className="mb-4">
                                <h5><i className="fas fa-map-marker-alt text-red-taxi me-2"></i> Address</h5>
                                <p>123 Taxi Street, City Center, 10001</p>
                            </div>
                            <div className="mb-4">
                                <h5><i className="fas fa-phone text-red-taxi me-2"></i> Phone</h5>
                                <p>+1 (555) 123-4567</p>
                            </div>
                            <div className="mb-4">
                                <h5><i className="fas fa-envelope text-red-taxi me-2"></i> Email</h5>
                                <p>info@redtaxi.com</p>
                            </div>
                            <div>
                                <h5 className="mb-3">Follow Us</h5>
                                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="booking-card">
                                <h3 className="mb-4">Send Us a Message</h3>
                                <form onSubmit={sendMessage}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            rows="5"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-taxi w-100" id="send_message">
                                        Send Message
                                    </button>
                                    {successMessage && (
                                        <div className="alert alert-success" role="alert">
                                            {successMessage}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}