import { ListFooter } from '../interface/list-footer.interface';
import { List } from '../interface/list.interface';
import { ListTableTd } from './list-table-td';

interface ListTableFooterProps {
    footer: ListFooter[];
    list: List[];
}

export function ListTableFooter({ list, footer }: ListTableFooterProps) {
    return (
        <tfoot>
            <tr className="table-primary">
                {footer.map((foot) => {
                    if (foot.cell) return <foot.cell list={list} foot={foot} key={foot.field} />;

                    return <ListTableTd key={foot.field}>{foot.text}</ListTableTd>;
                })}
            </tr>
        </tfoot>
    );
}
