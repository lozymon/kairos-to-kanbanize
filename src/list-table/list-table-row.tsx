import { ListHeader } from '../interface/list-header.interface';
import { List } from '../interface/list.interface';
import { ListTableTd } from './list-table-td';
import { ListTableTr } from './list-table-tr';

interface ListTableRowProps {
    header: ListHeader[];
    item: List;
    index: number;
}

export function ListTableRow({ header, item, index }: ListTableRowProps) {
    return (
        <ListTableTr disabled={item.disabled}>
            {header.map((head) => {
                if (head.cell) return <head.cell item={item} head={head} index={index} key={head.field} />;

                return (
                    <ListTableTd key={head.field} right={head.right}>
                        {item[head.field]}
                    </ListTableTd>
                );
            })}
        </ListTableTr>
    );
}
