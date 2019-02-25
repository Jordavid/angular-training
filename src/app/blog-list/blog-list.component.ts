import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogTileComponent } from '../blog-tile/blog-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPost: BlogPost[][];
  currentPage: number;
  @ViewChildren('tile') blogTileComponents: QueryList<BlogTileComponent>;

  constructor(private dataService: BlogDataService) { }

  ngOnInit() {
    this.currentPage = 0;
    this.blogPost = this.dataService.getPosts();
  }

  updatePage(newPage:number){
    this.currentPage = newPage;
  }

  expandAll(){
    this.blogTileComponents.forEach( component => {
      component.expandSummary()
    });
  }

}
