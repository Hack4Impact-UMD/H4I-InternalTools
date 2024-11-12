import { useState, useEffect } from 'react';
import { ApplicationStatus, getApplicationStatus } from '../../../h4i-internal/src/applicationStatus';
import '../styles/statuspage.css';

function StatusPage() {
    const [status, setStatus] = useState("");
    const [dateSubmitted, setDateSubmitted] = useState("");
    const [applicationUrl, setApplicationUrl] = useState("/");

    async function fetchApplicationFields() {
        // TODO: Get the user's ID to use as the parameter for getApplicationStatus()
        const applicationStatus: ApplicationStatus = await getApplicationStatus("0000");
        
        setStatus(applicationStatus.status);
        setDateSubmitted(applicationStatus.dateReceived);
        setApplicationUrl(applicationStatus.applicationUrl);
    }

    useEffect(() => {
        fetchApplicationFields();
    }, [])

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