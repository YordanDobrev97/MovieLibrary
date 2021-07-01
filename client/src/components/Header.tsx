import React from 'react';

type Props = {
    children: React.ReactNode
}

const Header: React.FunctionComponent<Props> = props =>
    <header>
        {props.children}
    </header>

export default Header;