import React from 'react';

function StatusPage() {

    function openApplication() {
        // open a page with the application in a new tab
    }

    return (
        <div className="status-page">
            <div className="application-table">
                <div className="application-table-labels">
                    <h3>
                        Status
                    </h3>
                    <h3>
                        Date Received
                    </h3>
                    <h3>
                        View Application
                    </h3>
                </div>

                <div className="application-table-data">
                    <p>
                        Status
                    </p>
                    <p>
                        Date
                    </p>
                    <p className="application-link" onClick={ () => openApplication() }>
                        View
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StatusPage;