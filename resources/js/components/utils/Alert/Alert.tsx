import * as React from "react";

type alertType = {
    message: string,
    status: string
}

const Alert = ({ message, status }: alertType) => {
    return (
        <div className={`alert alert-${status} alert-dismissible`} role="alert">
            <strong>{message}</strong>
        </div>
    );
};

export default Alert;
