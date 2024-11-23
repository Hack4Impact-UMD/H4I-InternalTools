import { ReactNode } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

interface Props {
    id: string;
    to: string;
    children: ReactNode
}

function Navbar() {
    function handleSignout() {
        window.open("/", "_self");
    }

    return (
        <div className="navbar">
            <div className="sign-out-button">
                <p onClick={() => handleSignout()}>Sign Out</p>
            </div>

            <img className="site-logo" src="/h4i_umd_logo.png" alt="hack4impact-UMD" />

            <div className="tab-container">
                <NavLink id="dashboard-link" to="/application">Application</NavLink>
                <NavLink id="dashboard-link" to="/status">Status</NavLink>
            </div>
        </div>
    )
}

function NavLink({ id, to, children, ...props }: Props) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true});
    return (
        <Link className={isActive ? "active" : ""} to={ to } { ...props }>{ children }</Link>
    )
}

export default Navbar;