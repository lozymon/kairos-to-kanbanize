import { ListFooter } from '../interface/list-footer.interface';
import { ListHeader } from '../interface/list-header.interface';
import { List } from '../interface/list.interface';
import { ListTableFooter } from './list-table-footer';
import { ListTableHeader } from './list-table-header';
import { ListTableRows } from './list-table-rows';

interface ListTableProps {
    header: ListHeader[];
    footer: ListFooter[];
    list: List[];
}

export function ListTable({ header, footer, list }: ListTableProps) {
    return (
        <table className="table table-striped table-hover table-sm">
            <ListTableHeader header={header} />
            <ListTableRows header={header} list={list} />
            <ListTableFooter footer={footer} list={list} />
        </table>
    );
}
