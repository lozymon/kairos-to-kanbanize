import { List } from '../interface/list.interface';

interface ListTableCheckboxProps {
    disabled?: boolean;
    item: List;
    index: number;
    setSelected: (index: number, checked: boolean) => void;
}

export function ListTableCheckbox({ disabled, item, index, setSelected }: ListTableCheckboxProps) {
    return (
        <td>
            <input
                type="checkbox"
                disabled={disabled}
                checked={item.selected}
                onChange={(e) => setSelected(index, e.target.checked)}
            />
        </td>
    );
}
