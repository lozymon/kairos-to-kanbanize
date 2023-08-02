import React from 'react';
import { List } from './list.interface';
import { ListField } from './list-field.type';

export interface ListHeaderCell {
    item: List;
    head: ListHeader;
    index: number;
}
export interface ListHeader {
    name: string;
    field: ListField;
    right?: boolean;
    cell?: (props: ListHeaderCell) => React.ReactNode;
}
