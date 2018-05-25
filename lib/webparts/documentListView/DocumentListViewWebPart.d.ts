import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IDocumentListViewWebPartProps {
    siturl: string;
    filterlist: string;
    datalist: string;
}
export default class DocumentListViewWebPart extends BaseClientSideWebPart<IDocumentListViewWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
