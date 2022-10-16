import * as React from "react";

const SingleStat = ({ number, text }) => {
    return (
        <div className="dashboard-statistics__single">
            <p>
                <span className="number">{number}</span>
                <span className="text">{text}</span>
            </p>
        </div>
    )
}

export default SingleStat;