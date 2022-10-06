import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "assignment1";
  isClicked: boolean = false;
  count: number = 0;
  id: number = 0;
  texts: string[] = [];
  onclick() {
    this.count++;
    this.isClicked = !this.isClicked;
  }
  OnSubmit(data) {
    if (data == "") {
      alert("Please enter data");
    }else{
      this.id++;
      this.texts.push(data);
    }
    
    
  }
}
