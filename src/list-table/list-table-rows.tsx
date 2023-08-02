import { ListHeader } from '../interface/list-header.interface';
import { List } from '../interface/list.interface';
import { ListTableRow } from './list-table-row';

interface ListTableRowsProps {
    header: ListHeader[];
    list: List[];
}

export function ListTableRows({ header, list }: ListTableRowsProps) {
    return (
        <tbody>
            {list.map((item, index) => (
                <ListTableRow key={item.str} header={header} item={item} index={index} />
            ))}
        </tbody>
    );
}
