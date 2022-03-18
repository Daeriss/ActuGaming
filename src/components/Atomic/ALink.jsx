import React from "react";
import {
    Link,
    useMatch,
    useResolvedPath
} from 'react-router-dom';

function ALink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname });
    console.log(match);

    return (
        <div>
            <Link to={to} {...props}>
                {children}
            </Link>
            {match && " (active)"}
        </div>
    );

}

export default ALink;