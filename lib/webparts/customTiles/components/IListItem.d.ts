import { IUrlInfo } from "./IUrlInfo";
export interface IListItem {
    Id: number;
    Title: string;
    Play: IUrlInfo;
    Sales_Conversation: IUrlInfo;
    Market_Opportunities: IUrlInfo;
}
