interface ProgressBarProps {
    fillLevel: number;
}

function ProgressBar({ fillLevel }: ProgressBarProps) {
    const fillPercentage = fillLevel / 4 * 100;

    return (
        <div className="progress-bar-container">
            <div className="progress-bar">
                { fillPercentage > 0 &&
                    <div className="progress-bar-fill" style={{ width: `${ fillPercentage }%` }} /> }
            </div>

            <div className="progress-bar-labels">
                <p className={fillPercentage >= 25 ? "passed" : ""}>
                    Submitted
                </p>
                <p className={fillPercentage >= 50 ? "passed" : ""}>
                    Under Review
                </p>
                <p className={fillPercentage >= 75 ? "passed" : ""}>
                    Interview (If Applicable)
                </p>
                <p className={fillPercentage == 100 ? "passed" : ""}>
                    Decision
                </p>
            </div>
        </div>
    )
}

export default ProgressBar;