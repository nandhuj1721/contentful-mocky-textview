import { Component,OnInit } from '@angular/core';
import { GetDataService } from './services/get-data.service';
import{Document} from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: any;
  public imageurl: any;
  public content!: Document[];
  categorySection: any;
  public get!: any;
  constructor(private data: GetDataService){}
  ngOnInit(){
  this.data.fetchTitle().subscribe(res=>{
    let titleField= res['data'].map((res: { data: { articleTitle: { iv: any; }; }; }) => res.data.articleTitle.iv);
    let contentField= res['data'].map((res: { data: { articleText: { iv: any; }; }; }) => res.data.articleText.iv);
    let category= res['data'].map((res: { data: { category: { iv: any; }; }; }) => res.data.category.iv);
    let imagedata = res['data'].map((res: { data: { showPageImageLink: { iv: any; }; }; }) => res.data.showPageImageLink.iv);
   // let imagedata2 = res['data'].map((res: { data: { holdingPageImageLink: { iv: any; }; }; }) => res.data.holdingPageImageLink.iv);
    this.title = titleField  ;
    this.categorySection= category;
    this.content = contentField;
    this.imageurl = imagedata;
  });
  }

  fetchHtmlRichText(richText:Document){
    return documentToHtmlString(richText);
  }
  enter(index: number) {
    this.get = index;
  }
  
}
