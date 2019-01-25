import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div style="margin: 40px">
      <button (click)="throwError()">Error</button>
      <button (click)="throwHttpError()">HTTP</button>
    </div>
  `
})
export class AppComponent {

  constructor(private http: HttpClient) {
  }
  
  throwError(){
    throw new Error('My Pretty Error');
  }

  throwHttpError(){
    this.http.get('urlhere').subscribe();
  }
}
