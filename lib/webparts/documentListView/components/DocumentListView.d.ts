/// <reference types="react" />
import * as React from 'react';
import { IDocumentListViewProps } from './IDocumentListViewProps';
import { IDocumentListViewState } from '../../../../lib/webparts/documentListView/components/IDocumentListViewState';
export default class DocumentListView extends React.Component<IDocumentListViewProps, IDocumentListViewState> {
    items: any[];
    constructor(props: IDocumentListViewProps, state: IDocumentListViewState);
    render(): React.ReactElement<IDocumentListViewProps>;
    componentWillMount(): void;
    private _fetchFromSPList(listtitle, fieldsArr);
    private _getListItems(listtitle);
    rerender(ctr: any, e: any): void;
}
