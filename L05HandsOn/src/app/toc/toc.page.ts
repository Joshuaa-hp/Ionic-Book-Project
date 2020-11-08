import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})


export class TocPage implements OnInit {
  //Each object is a chapter
  public chapters = [
    {
      title: "Chapter 1 | The Book of Rubies",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | Saints",
      url: "/chapter2"
    },
    {
      title: "Chapter 3 | RedBull",
      url: "/chapter3"
    },
    {
      title: "Chapter 4 | Detox",
      url: "/chapter4"
    },
    {
      title: "Chapter 5 | The End",
      url: "/chapter5"
    },
  ]; 
  constructor() { }

  ngOnInit() {
  }

}
