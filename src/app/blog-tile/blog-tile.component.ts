import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-tile',
  templateUrl: './blog-tile.component.html',
  styleUrls: ['./blog-tile.component.css']
})
export class BlogTileComponent implements OnInit {

  @Input() post: BlogPost;
  fullSummary: string;
  constructor(private truncatePipe: TruncatePipe){

  }

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 50);
  }

  expandSummary(){
    this.post.summary = this.fullSummary;
  }

  toggleFavorite(){
    this.post.isFavorite = !this.post.isFavorite;
  }


}
