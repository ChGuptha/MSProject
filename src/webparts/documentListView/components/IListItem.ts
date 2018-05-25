import { InnerListItem } from "./InnerListItem";

export interface IListItem{
    Id: number;
    Title: string;
    Audience: InnerListItem;
    Filter1: InnerListItem;
    Header: string;
    EncodedAbsUrl:URL;
}