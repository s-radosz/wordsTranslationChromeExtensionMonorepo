interface MainProps {
}

interface MainState {
    showLoader: boolean;
    alertMessage: string;
    alertStatus: string;
    allowedPaths: string[],
    allowRedirect: boolean;
    redirectedPath: string;
}

export { MainProps, MainState };