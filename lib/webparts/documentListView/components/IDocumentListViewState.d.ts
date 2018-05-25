import { IListItem } from "./IListItem";
export interface IDocumentListViewState {
    FilterVal: string;
    FilterValItems: IListItem[];
    DocumentViewItems: IListItem[];
}
