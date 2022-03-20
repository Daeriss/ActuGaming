import React from "react";
import {
    Link,
    useMatch,
    useResolvedPath
} from 'react-router-dom';

function ALink({ children, to, styles, bClass, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname });

    return (

            <Link className={bClass} style={styles} to={to} {...props}>
                {children}
            </Link>

    );

}

export default ALink;