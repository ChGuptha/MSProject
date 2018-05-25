import { SPHttpClient } from "@microsoft/sp-http";
export interface IDocumentListViewProps {
    siteurl: string;
    filterlist: string;
    datalist: string;
    spHttpClient: SPHttpClient;
}
