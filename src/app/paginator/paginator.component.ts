import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() numberOfPags: number;
  @Output() pageNumberClick = new EventEmitter<number>();
  pages: number[];
  pageNum: number;

  constructor() { }

  ngOnInit() {
    this.pages = new Array(this.numberOfPags);
    this.pageNum = 0;
  }

  pageNumberClicked(pageNumber){
    this.pageNumberClick.emit(pageNumber);
    this.pageNum = pageNumber;
  }
 
}
