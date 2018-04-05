import { DataApi } from './data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'data',
  templateUrl: './data.components.html',
  styleUrls: ['./data.components.css'],
  providers: [DataApi]
})
export class  DataComponent implements OnInit {
  query: string = '';
  title = 'Data';
  public json;
  public myClass: string = 'fa fa fa-angle-down';
  public titleToggle: string = 'fa fa-angle-down';
  public target = false;
  public allData: Object;
  constructor(private dataApi: DataApi) {

  }

  private showDetail = (list): any => {
    this.json = list.json;
  }

  public filter = (): any => {
    this.target = !this.target;
    if (this.titleToggle == 'fa fa-angle-down') {
      this.titleToggle = 'fa fa-angle-up';
    } else{
      this.titleToggle = 'fa fa-angle-down';
    }
  }
  

  private getData(): any {
    this.dataApi.allData().then(data => {
      for (let i = 0; i < data.length; i++) {
        data[i].json = JSON.stringify(data[i]);
      }
      this.allData = data;
    });
  }

  ngOnInit() {

    this.getData();
    Observable.interval(10000).subscribe(x => {
      this.getData();
    });

  }

}
