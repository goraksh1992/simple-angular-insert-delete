import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud1';

  storedData = [
    {
      name: "Gaurav Sanas",
      email: "gauravsanas5@gmail.com"
    },
    {
      name: "Goraksh Sanas",
      email: "goraksh@gmail.com"
    }
  ]

  submitForm(data: any){
    // console.log(data)
    this.storedData.push({
      name: data.name,
      email: data.email
    })
  }

  deleteUser(id: number){
    this.storedData.splice(id)
  }
}
