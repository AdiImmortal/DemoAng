import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  constructor() {

  }
  name = 'Dynamic Add Fields';
  options = {Headers, responseType: 'json' as 'blob'};
  public values:any = [];

  title = 'DemoAngPro';


  removevalue(i: any) {
    this.values.splice(i, 1);
  }

  addvalue() {
    this.values.push({ value: "" });
  }


  public  exportData()
  {
   let jdata = JSON.stringify(this.values);
   console.table(jdata);

  }

}
