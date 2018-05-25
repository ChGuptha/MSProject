/// <reference types="react" />
import * as React from 'react';
import { ICustomTilesViewWpProps } from './ICustomTilesViewWpProps';
import { IListItem } from './IListItem';
import { ITilesviewState } from './ITilesViewState';
export default class CustomTilesViewWp extends React.Component<ICustomTilesViewWpProps, ITilesviewState> {
    topItems: Array<IListItem>;
    domainString: string;
    constructor(props: ICustomTilesViewWpProps, state: ITilesviewState);
    componentWillMount(): void;
    componentDidMount(): void;
    getListItems(): Promise<{}>;
    render(): JSX.Element;
}
