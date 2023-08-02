import React from 'react';

interface ListTableTdProps {
    right?: boolean;
    children?: React.ReactNode;
}

export function ListTableTd({ right, children }: ListTableTdProps) {
    const className = [];

    if (right) {
        className.push('text-right');
    }

    return <td className={className.join(' ')}>{children}</td>;
}
