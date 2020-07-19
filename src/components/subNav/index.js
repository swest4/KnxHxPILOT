import React, { createRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './styled';

export default ({
    links = []
}) => {
    const [indicatorStyles, setIndicatorStyles] = useState({ width: 0, left: '50%'});
    const listRef = createRef(null);

    useEffect(() => {
        const activeChild = listRef.current.querySelector('.active');
        const { offsetWidth: width = 0, offsetLeft: left = 0 } = activeChild || {};

        if (indicatorStyles.width !== width || indicatorStyles.left !== left) {
            setIndicatorStyles({
                width,
                left,
            });
        }
    });

    return (
        <Styles>
            <ul ref={listRef}>
                {
                    links.map(
                        ({ to, title }) => (
                            <li key={to}>
                                <NavLink to={to}>{title}</NavLink>
                            </li>
                        )
                    )
                }
            </ul>
            <div className="indicator" style={{ width: indicatorStyles.width, left: indicatorStyles.left }} />
        </Styles>
    );
};