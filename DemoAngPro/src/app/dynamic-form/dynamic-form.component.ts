import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  name = 'Dynamic Add Fields';
  
  options = {Headers, responseType: 'json' as 'blob'};
  public values:any = [];
  public show?:boolean;
 
  constructor() { }

  ngOnInit(): void {
  }

  removevalue(i: any) {
    this.values.splice(i, 1);
  }

  addvalue() {
    this.values.push({ value: "" });
  }
  public  exportData()
  {
    this.show=true;
   let jdata = JSON.stringify(this.values);
   console.table(jdata);

  }

}
