/// <reference types="react" />
import * as React from 'react';
import { IPartnerPlayProps } from './IPartnerPlayProps';
import { IPartnerPlayState } from './IPartnerPlayState';
export default class PartnerPlay extends React.Component<IPartnerPlayProps, IPartnerPlayState> {
    constructor(props: IPartnerPlayProps);
    componentDidMount(): void;
    render(): React.ReactElement<IPartnerPlayProps>;
}
