import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  email:any;
  constructor(private router:Router){}
  ngOnInit(): void {
    this.email= localStorage.getItem('email');
  }
  main(){
    this.router.navigate(['/']);
  }

}
