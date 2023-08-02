import React from 'react';

interface ListTableThProps {
    right?: boolean;
    children?: React.ReactNode;
}

export function ListTableTh({ right, children }: ListTableThProps) {
    const className = [];

    if (right) {
        className.push('text-right');
    }

    return <td className={className.join(' ')}>{children}</td>;
}
