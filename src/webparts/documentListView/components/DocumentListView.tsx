import * as React from 'react';
import styles from './DocumentListView.module.scss';
import { IDocumentListViewProps } from './IDocumentListViewProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {SPHttpClient, HttpClient, SPHttpClientResponse, HttpClientResponse} from '@microsoft/sp-http'
import { Web, ListEnsureResult, Item } from "sp-pnp-js";
import { IListItem } from "./IListItem";
import { InnerListItem } from "./InnerListItem";
import { IDocumentListViewState } from '../../../../lib/webparts/documentListView/components/IDocumentListViewState';
import importableModuleLoader from '@microsoft/sp-module-loader';
import { SPComponentLoader } from "@microsoft/sp-loader";

export default class DocumentListView extends React.Component<IDocumentListViewProps, IDocumentListViewState> 
{
  items = [];
  constructor(props:IDocumentListViewProps, state:IDocumentListViewState)
  {    
    super(props);
    SPComponentLoader.loadCss('https://wallerotemp.sharepoint.com/SPFxAssets/bootstrap.min.css');    
    SPComponentLoader.loadCss('https://wallerotemp.sharepoint.com/SPFxAssets/DocListView.css');    
    
    this.state = {
        FilterVal: "",
        FilterValItems: [],
        DocumentViewItems: []
    }
  }
  
  public render(): React.ReactElement<IDocumentListViewProps> {
    let that = this;
    return (<div className="container">
    <h2>Lorem Ipsum</h2>
    <p>Data platform play resources across the Partner development lifecycle</p>
    <ul className="nav nav-tabs">     
      {this.state.FilterValItems.map((headerItems)=>
          <li><a onClick={(e)=> this.rerender(this,e)}>{headerItems.Title.toUpperCase()}</a></li>
      )}
    </ul>
    <div className="table-responsive">          
    <table className="table" >
      <thead>
        <tr>
          <th>RESOURCE</th>
          <th>AUDIANCE</th>
        </tr>
      </thead>
      {this.items.map((listItem, index)=>   
            <tbody>
              {((index ===0) || (index>0 && (listItem.Header.toUpperCase() != that.items[index-1].Header.toUpperCase()))) &&
              <tr className="active">
                <td><b>{listItem.Header.toUpperCase()}</b></td>
                <td></td>
              </tr>       
              }
              <tr>
                <td><a href={listItem.EncodedAbsUrl}>{listItem.Title}</a></td>
                <td>{listItem.Audience.Title}</td>
              </tr>
              </tbody>
            )}         
    </table>
    </div>
  </div>
    );
  }
  componentWillMount()
  {
    if(this.state.DocumentViewItems == undefined || this.state.DocumentViewItems.length<=0)
    {
      let filterlistitems = [];
      let fieldsArr = ["ID","Title"];
      this._fetchFromSPList(this.props.filterlist, fieldsArr)
      .then((items:IListItem[]) => {
      filterlistitems = items;
      this._getListItems(this.props.datalist)
      .then((items:IListItem[]) =>
      {         
          this.items = items.sort((b, a)=> { if ((a.Header) > (b.Header)) { return -1; } else { return 1; } });
          this.setState({
            FilterValItems :filterlistitems,
            DocumentViewItems: this.items
          })
        }
      )
      });
    }
  } 
  private _fetchFromSPList(listtitle, fieldsArr): Promise<IListItem[]> {
    return new Promise<IListItem[]>((resolve, reject) => {
        let web: Web = new Web(this.props.siteurl);                
        web.lists.getByTitle(listtitle).items
            .select(fieldsArr)
            .get()
            .then((items: IListItem[]) => {
              
              console.log("success", items);
                resolve(items);
            })
            .catch(error => {
              
                console.log("Error", new Error(error));
                reject(error);
            });               
    });
  }
  private _getListItems(listtitle)
  { 
    try{return new Promise((resolve, reject) =>{  this.props.spHttpClient.get(`${this.props.siteurl}/_api/web/lists/getbytitle('Resources')/Items?$select=ID,Title,Audience/Id,Audience/Title,Filter1/Id,Filter1/Title,Header,FileRef&$orderby=Modified&$expand=Audience/Id,Audience/Title,Filter1/Id,Filter1/Title`,       SPHttpClient.configurations.v1,{headers: {'Accept': 'application/json;odata=nometadata','odata-version': ''}}).then((response: SPHttpClientResponse): Promise<{ value: IListItem[] }> => {return response.json();}).then((response: { value: IListItem[] }): void => {resolve(response.value);})});}
    catch(error){console.log(error);}
  }
  public rerender(ctr, e)
  {     
    debugger;
   this.items =  this.state.DocumentViewItems.filter(function (el) { return el.Filter1.Title == e.currentTarget.textContent    ; });
   this.setState({
    FilterVal: e.target.value
   });
  }
 
}
