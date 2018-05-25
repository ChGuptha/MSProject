import {
    SPHttpClient,
    SPHttpClientBatch,
    SPHttpClientResponse,
    SPHttpClientConfiguration
  } from '@microsoft/sp-http';
import { IWebPartContext } from '@microsoft/sp-webpart-base'
import { PartnerPlayDetail } from '../models/PartnerPlayDetail';

export class SharePointDataProvider{
    private _webPartContext: IWebPartContext;

    public set webPartContext(value: IWebPartContext) {
        this._webPartContext = value;
    }

    public get webPartContext(): IWebPartContext {
    return this._webPartContext;
    }

    public getPartnerPlayDetails(ID:number) : Promise<Array<PartnerPlayDetail>>{
        return this._webPartContext.spHttpClient.get(this._webPartContext.pageContext.web.absoluteUrl + `/_api/web/lists/getbytitle('Partner Plays')/items?$select=ID,Title,PlayDescription,PlayImage,PlayLink,SalesConversationsDescription,SalesConversationsIcon,SalesConversationsLink,MarketOpportunitiesDescription,MarketOpportunitiesIcon,MarketOpportunitiesLink,SolutionArea/Title&$expand=SolutionArea/Title&$filter=SolutionArea/Id%20eq%20`+ID, SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) => {
            return response.json()
        })
        .then((json: { value: PartnerPlayDetail[] }) => {
            return json.value;
        })
    }
}