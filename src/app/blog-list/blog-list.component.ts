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
  fovoriteText: string;

  @ViewChildren('tile') blogTileComponents: QueryList<BlogTileComponent>;

  constructor(private dataService: BlogDataService) { }

  ngOnInit() {
    this.fovoriteText = "Favorite All";
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

  toggleFavorite(){
    this.blogPost[this.currentPage].forEach(post => {
      if(this.fovoriteText === "Favorite All"){
        post.isFavorite = true;
      } else {
        post.isFavorite = false;
      }
    });

    if(this.fovoriteText === "Favorite All"){
      this.fovoriteText = "Remove All";
    } else {
      this.fovoriteText = "Favorite All";
    }
  
  }

}
