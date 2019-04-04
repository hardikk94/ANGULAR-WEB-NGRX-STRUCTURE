import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-placement-request",
  templateUrl: "./placement-request.component.html",
  styleUrls: ["./placement-request.component.scss"]
})
export class PlacementRequestComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("hello");
  }
}
