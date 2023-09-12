import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  form!:FormGroup;
  email = false;

  constructor(private router: Router){
    localStorage.clear();
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      "email": new FormControl(null,[Validators.required,Validators.email]),
    });
    console.log(this.form.get("email")?.valid);
  }

  desk(){
    if(this.form.valid){
      this.router.navigate(['/success']);
      localStorage.setItem('email', this.form.get('email')?.value);
    }
  }

}
