import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface ICustomTilesViewWpWebPartProps {
    description: string;
    siteurl: string;
}
export default class CustomTilesViewWpWebPart extends BaseClientSideWebPart<ICustomTilesViewWpWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
