import {Link} from 'react-router-dom'
import React, { ReactNode, FC} from 'react';
interface Props {
    children?: ReactNode,
    to:string,
    text:string
}
function link ({to, text}:Props) {
    return <Link to={to} className="link" > {text || <img src="src/common/UI/link" />}  </Link>
}

export default Link;