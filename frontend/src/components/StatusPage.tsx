import React from 'react';
import '../styles/statuspage.css';

function StatusPage() {

    // TODO: Pull these fields from Firebase
    const status = "Under Review";
    const dateSubmitted = "01/01/2025";
    const applicationUrl = "/";

    function openApplication() {
        window.open(applicationUrl, "_blank")
    }

    return (
        <div className="status-page">
            <div className="header">
                <h1>
                    Your Application
                </h1>
            </div>

            <div className="application-table">
                <div className="row">
                    <div className="item">
                        <h3>
                            Status
                        </h3>
                    </div>
                    <div className="item">
                        <h3>
                            Date Received
                        </h3>
                    </div>
                    <div className="item">
                        <h3>
                            View Application
                        </h3>
                    </div>
                </div>

                <div className="row">
                    <div className="item">
                        <p>
                            { status }
                        </p>
                        {/* TODO: Add a '(?)' symbol next to the status that displays a
                            description of the status when hovered over */}
                    </div>
                    <div className="item">
                        <p>
                            { dateSubmitted }
                        </p>
                    </div>
                    <div className="item" onClick={ () => openApplication() }>
                        <p className="application-link">
                            View
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusPage;