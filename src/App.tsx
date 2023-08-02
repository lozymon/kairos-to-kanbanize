import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import { List } from './interface/list.interface';
import { convertData } from './utils/convert-data';
import { ListTable } from './list-table';
import { ListTableTd } from './list-table/list-table-td';
import { ListTableCheckbox } from './list-table/list-table-checkbox';
import { ListHeader } from './interface/list-header.interface';
import { ListFooter } from './interface/list-footer.interface';
import { addTimes } from './utils/add-times';

function App() {
    const [inputData, setInputData] = useState('');
    const [list, setList] = useState<List[]>([]);

    const header = useMemo<ListHeader[]>(
        () => [
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
        ],
        []
    );

    const footer = useMemo<ListFooter[]>(
        () => [
            { field: 'selected' },
            { field: 'dayName' },
            { field: 'day' },
            { field: 'month' },
            { field: 'year' },
            {
                field: 'hore',
                cell: ({ list }) => (
                    <ListTableTd right>
                        {addTimes(list.filter((item) => item.selected).map((item) => [item.hore, item.minutes]))}
                    </ListTableTd>
                ),
            },
            {
                field: 'calc',
                cell: ({ list }) => (
                    <ListTableTd right>
                        {list
                            .filter((item) => item.selected)
                            .reduce((sum, item) => sum + item?.calcHore + item?.calcMin, 0)
                            .toFixed(2)}
                    </ListTableTd>
                ),
            },
        ],
        []
    );

    useEffect(() => {
        setList(convertData(inputData));
    }, [inputData]);

    const setSelected = useCallback((index: number, select: boolean) => {
        const d = [...list];
        d[index].selected = select;
        setList(d);
    }, []);

    return (
        <div className="container">
            <div className="mb-5 mt-5">
                <label htmlFor="input-data">Informe os dados da Kairós</label>
                <textarea
                    id="input-data"
                    className="form-control"
                    cols={60}
                    rows={10}
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                ></textarea>
            </div>
            <label>Relatorio</label>
            <ListTable list={list} header={header} footer={footer} />
        </div>
    );
}

export default App;
