import React from "react";

export function Download() {
    return (
        <section className="py-5 bg-red-taxi text-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="fw-bold mb-4">Download Our Mobile App</h2>
                        <p className="mb-4">
                            Book rides, track your taxi, and make payments all from your smartphone. Available
                            for both iOS and Android devices.
                        </p>
                        <div className="d-flex">
                            <a
                                href="https://play.google.com/store/search?q=red+taxi&c=apps"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                                    alt="Get it on Google Play"
                                    className="app-badge"
                                    style={{ maxWidth: "150px", marginRight: "10px" }}
                                />
                            </a>

                            <a
                                href="https://apps.apple.com/in/app/red-taxi/id1128644624"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                                    alt="Download on the App Store"
                                    className="app-badge"
                                    style={{ maxWidth: "150px" }}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img
                            // src="https://cdn.dribbble.com/users/1787323/screenshots/11307350/media/3c2c8e3b0e8a6f052cc9c9e3d3a9b9e2.png"
                            src="data:image/png;base64,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"
                            className="img-fluid"
                            style={{ maxHeight: "300px" }}
                            alt="App Screens"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
