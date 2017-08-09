import {  Injectable  } from "@angular/core";
import {  Http, Response  } from "@angular/http";
import {  Observable  } from "rxjs/Observable";

@Injectable()

export class FileUploadService {
  constructor(private http: Http) { }

  public uploadImage(formData: any){
    const url = 'http://localhost:3000/portofoliu/upload/evo';
     return this.http.post(url,formData).catch(this.errorHandler);
  }

  private errorHandler(error: Response) {
    console.error('Error occoured ' + error);
    return Observable.throw(error || 'Some error on server occoured');
  }
}
