import React from "react";
import {
    Link,
    useMatch,
    useResolvedPath
} from 'react-router-dom';

function ALink({ children, to, styles, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname });
    console.log(match);

    return (
        <div>
            <Link style={styles} to={to} {...props}>
                {children}
            </Link>
        </div>
    );

}

export default ALink;