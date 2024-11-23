import { useState, useEffect } from 'react';
import { Status, ApplicationStatus, getApplicationStatus } from '../../../../h4i-internal/src/applicationStatus';
import '../../styles/statuspage.css';

import Navbar from './Navbar';
import ProgressBar from './ProgressBar';
import StatusBox from './StatusBox';
import DecisionPage from './DecisionPage';
import AcceptanceBox from './AcceptanceBox';

function StatusPage() {
    const [status, setStatus] = useState(Status.SUBMITTED);
    const [dateSubmitted, setDateSubmitted] = useState("");
    const [applicationUrl, setApplicationUrl] = useState("/");

    async function fetchApplicationFields() {
        // TODO: Get the user's ID to use as the parameter for getApplicationStatus()
        /*
        const applicationStatus: ApplicationStatus = await getApplicationStatus("");
        
        setStatus(applicationStatus.status);
        setDateSubmitted(applicationStatus.dateReceived);
        setApplicationUrl(applicationStatus.applicationUrl);
        */
    }

    useEffect(() => {
        fetchApplicationFields();
    }, [])

    return (
        <>
            <Navbar />
            <div className="status-page">
                <div className="header">
                    <h1>
                        Current Application Status
                    </h1>
                </div>
            </div>
        </>
    )
}

export default StatusPage;