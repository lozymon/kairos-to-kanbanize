import { ListHeader } from '../interface/list-header.interface';
import { ListTableTh } from './list-table-th';

interface ListTableHeaderProps {
    header: ListHeader[];
}

export function ListTableHeader({ header }: ListTableHeaderProps) {
    return (
        <thead>
            <tr>
                {header.map((item) => (
                    <ListTableTh key={item.name} right={item.right}>
                        {item.name}
                    </ListTableTh>
                ))}
            </tr>
        </thead>
    );
}
