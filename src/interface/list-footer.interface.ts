import React from 'react';
import { ListField } from './list-field.type';
import { List } from './list.interface';

export interface ListFooterCell {
    list: List[];
    foot: ListFooter;
}

export interface ListFooter {
    field: ListField;
    text?: '';
    cell?: (props: ListFooterCell) => React.ReactNode;
}
