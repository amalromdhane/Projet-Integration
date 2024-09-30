import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-passager-layout',
  templateUrl: './passager-layout.component.html',
  styleUrls: ['./passager-layout.component.css']
})
export class PassagerLayoutComponent implements OnInit {
  username:any;

  constructor(private ds: DataService) {
    if (typeof localStorage !== 'undefined') {
      this.username = localStorage.getItem('username');
     
    } else {
      // Handle the case where localStorage is not available
      this.username = 'Username'; // Replace with an appropriate fallback value
    }
   }

  

  ngOnInit(): void {
  }

}
