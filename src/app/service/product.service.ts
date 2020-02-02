import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  insertProduct(nameOfTheProduct:string){

    const apiURL = environment.apiBaseUrl+'/insertProduct';

        return this.httpClient.post(apiURL,nameOfTheProduct);
  }

  deleteProduct(nameOfTheProduct:string){

    const apiURL = environment.apiBaseUrl+'/delete';

        return this.httpClient.delete(apiURL);
  }
}
