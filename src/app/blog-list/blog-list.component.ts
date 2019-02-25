import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogTileComponent } from '../blog-tile/blog-tile.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPost: BlogPost[][];
  currentPage: number;
  @ViewChildren('tile') blogTileComponents: QueryList<BlogTileComponent>;

  constructor() { }

  ngOnInit() {
    
    this.currentPage = 0;

    this.blogPost = 
    [
      [
        {
          title: "Post 1",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati quae minima sit, sint dolores placeat atque alias possimus pariatur, suscipit amet perspiciatis numquam, voluptate odit tempora nisi libero veniam!"
        },
        {
          title: "Post 2",
          summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis ducimus, porro ipsa tempore, exercitationem accusamus corrupti delectus ab veritatis adipisci voluptatibus voluptatum mollitia excepturi repellendus nihil doloremque id assumenda!"
        },
        {
          title: "Post 3",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati quae minima sit, sint dolores placeat atque alias possimus pariatur, suscipit amet perspiciatis numquam, voluptate odit tempora nisi libero veniam!"
        },
        {
          title: "Post 4",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati quae minima sit, sint dolores placeat atque alias possimus pariatur, suscipit amet perspiciatis numquam, voluptate odit tempora nisi libero veniam!"
        },
      ],
      [
        {
          title: "Post 5",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati quae minima sit, sint dolores placeat atque alias possimus pariatur, suscipit amet perspiciatis numquam, voluptate odit tempora nisi libero veniam!"
        },
        {
          title: "Post 6",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati quae minima sit, sint dolores placeat atque alias possimus pariatur, suscipit amet perspiciatis numquam, voluptate odit tempora nisi libero veniam!"
        },
        {
          title: "Post 7",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati quae minima sit, sint dolores placeat atque alias possimus pariatur, suscipit amet perspiciatis numquam, voluptate odit tempora nisi libero veniam!"
        },
        {
          title: "Post 8",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati quae minima sit, sint dolores placeat atque alias possimus pariatur, suscipit amet perspiciatis numquam, voluptate odit tempora nisi libero veniam!"
        }
      ],
      [
        {
          title: "Post 9",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati quae minima sit, sint dolores placeat atque alias possimus pariatur, suscipit amet perspiciatis numquam, voluptate odit tempora nisi libero veniam!"
        },
        {
          title: "Post 10",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati quae minima sit, sint dolores placeat atque alias possimus pariatur, suscipit amet perspiciatis numquam, voluptate odit tempora nisi libero veniam!"
        },
        {
          title: "Post 11",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati quae minima sit, sint dolores placeat atque alias possimus pariatur, suscipit amet perspiciatis numquam, voluptate odit tempora nisi libero veniam!"
        },
        {
          title: "Post 12",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati quae minima sit, sint dolores placeat atque alias possimus pariatur, suscipit amet perspiciatis numquam, voluptate odit tempora nisi libero veniam!"
        }
      ]
    ]

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
