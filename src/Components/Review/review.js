import React, { useEffect, useRef } from "react";

const reviews = [
    {
        name: "Sarah Johnson",
        role: "Regular Customer",
        photo: "https://randomuser.me/api/portraits/women/43.jpg",
        text: "Red Taxi has never let me down. The drivers are always on time and the cars are clean. I use their service every week for my commute.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Business Traveler",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "As someone who travels frequently for work, I appreciate Red Taxi's reliability. The app makes booking so easy, and I can track my ride in real-time.",
        rating: 4.5
    },
    {
        name: "Emily Rodriguez",
        role: "First-time User",
        photo: "https://randomuser.me/api/portraits/women/65.jpg",
        text: "I was hesitant to try a new taxi service, but Red Taxi exceeded my expectations. The driver was courteous and got me to my destination quickly.",
        rating: 4.1
    },
    {
        name: "David Miller",
        role: "Frequent Rider",
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "Red Taxi is my go-to transport in the city. Always reliable and professional.",
        rating: 5
    },
    {
        name: "Linda Wang",
        role: "Student",
        photo: "https://randomuser.me/api/portraits/women/50.jpg",
        text: "Safe rides, friendly drivers. The app is easy to use too.",
        rating: 4.5
    },
    {
        name: "Robert Singh",
        role: "Tourist",
        photo: "https://randomuser.me/api/portraits/men/22.jpg",
        text: "Great experience using Red Taxi while visiting. Felt secure and timely.",
        rating: 4.2
    },
    {
        name: "Olivia Garcia",
        role: "Working Mom",
        photo: "https://randomuser.me/api/portraits/women/33.jpg",
        text: "Love how clean and well-maintained the cars are. Highly recommend it!",
        rating: 5
    },
    {
        name: "James Brown",
        role: "Daily Commuter",
        photo: "https://randomuser.me/api/portraits/men/28.jpg",
        text: "Affordable and punctual. My daily commute has become stress-free.",
        rating: 4.7
    },
    {
        name: "Ayesha Ali",
        role: "College Student",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
        text: "Fast booking and safe rides, exactly what I need for late classes.",
        rating: 3.6
    },
    {
        name: "Mark Thompson",
        role: "Occasional Rider",
        photo: "https://randomuser.me/api/portraits/men/16.jpg",
        text: "Good service and helpful drivers. Will use again.",
        rating: 4
    }
];

export function Review() {
    const scrollRef = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({
                    left: 220, 
                    behavior: "smooth"
                });

                if (
                    scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
                    scrollRef.current.scrollWidth
                ) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }
            }
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-5" id="about">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">What Our Customers Say</h2>
                    <p className="text-muted">Hear from people who have used our services</p>
                </div>

                <div
                    className="d-flex overflow-auto gap-4"
                    ref={scrollRef}
                    style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
                >
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="testimonial-card flex-shrink-0"
                            style={{ width: "300px", padding: "1rem", background: "#f8f9fa", borderRadius: "8px" }}
                        >
                            <div className="d-flex align-items-center mb-3">
                                <img
                                    src={review.photo}
                                    alt={review.name}
                                    className="testimonial-img me-3"
                                    style={{ width: "70px", borderRadius: "50%" }}
                                />
                                <div>
                                    <h5 className="mb-0">{review.name}</h5>
                                    <span className="text-muted">{review.role}</span>
                                </div>
                            </div>
                            <p className="mb-3">"{review.text}"</p>
                            <div className="rating text-warning">
                                {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                                {review.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                                {Array.from({ length: 5 - Math.ceil(review.rating) }).map((_, i) => (
                                    <i key={i} className="far fa-star"></i>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
