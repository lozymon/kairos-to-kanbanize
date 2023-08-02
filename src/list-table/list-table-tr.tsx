interface ListTableTrProps {
    disabled?: boolean;
    children?: React.ReactNode;
}

export function ListTableTr({ disabled, children }: ListTableTrProps) {
    const className = [];

    if (disabled) {
        className.push('table-inactive');
    }

    return <tr className={className.join(' ')}>{children}</tr>;
}
