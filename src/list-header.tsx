import { ListHeader } from './interface/list-header.interface';
import { ListTableCheckbox } from './list-table/list-table-checkbox';

export const listHeader: ListHeader[] = [
    {
        name: '#',
        field: 'selected',
        cell: ({ item, index }) => (
            <ListTableCheckbox item={item} index={index} setSelected={setSelected} disabled={item.disabled} />
        ),
    },
    { name: 'Nome', field: 'dayName' },
    { name: 'Dia', field: 'day' },
    { name: 'Mês', field: 'month' },
    { name: 'Ano', field: 'year' },
    {
        name: 'Hora',
        field: 'hore',
        right: true,
        cell: ({ item, head }) => (
            <ListTableTd key={head.field} right={head.right}>
                {`${item.hore}:${item.minutes}`}
            </ListTableTd>
        ),
    },
    { name: 'Hora em decimal', field: 'calc', right: true },
];
