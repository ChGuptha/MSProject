import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { PartnerPlayDetail } from '../models/PartnerPlayDetail';
export declare class SharePointDataProvider {
    private _webPartContext;
    webPartContext: IWebPartContext;
    getPartnerPlayDetails(ID: number): Promise<Array<PartnerPlayDetail>>;
}
