import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataApi {
  constructor(private http: Http) { }
  allData() {
    var url = environment.mainUrl + environment.dataApi;
    return this.http.get(url).toPromise().then((response) => {
      return response.json().hits;
    }).catch(this.handleError);

  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
