import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface ICustomTilesWebPartProps {
    description: string;
    siteurl: string;
}
export default class CustomTilesWebPart extends BaseClientSideWebPart<ICustomTilesWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
