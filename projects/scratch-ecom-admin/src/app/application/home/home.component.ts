import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'lick-data/lick-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logo = "assets/images/logo.png";
  logoName = "16AHEAD";
  companyLink = "/";
  menuItems: any[] = [
    {
      "link" : "/login",
      "name" : "Login",
    },
    {
      "link" : "/sign-up",
      "name" : "Sign Up"
    }
  ];
  isThankYouHidden: boolean = true;
  team : User[] = [
    {
      "status": "Active",
      "account" : "null",
      "email": "vikki.owens@taliferro.com",
      "name": "Vikki Owens",
      "helpNeeded": false,
      "openView": false,
      "lastUpdated": new Date(),
      "lastUpdatedBy": "System",
      "draft": false,
      "deleted": false,
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "url": "https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fteam-slider1.jpg?alt=media&token=27ae2753-beff-40f3-a47e-cb5bab47bd44",
      "shared": false,
      "publishedAt": new Date(),
      "timeStamp": new Date(),
      "userName": "System",
      "userImage": "https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fteam-slider1.jpg?alt=media&token=27ae2753-beff-40f3-a47e-cb5bab47bd44",
      "contact": { "name": "Vikki Owens", "profession": "<span>Co-founder and CEO</span><br><img src='https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2FCertScrumMasterSeal.png?alt=media&token=6937e504-3e3e-4c2c-bcf2-6d7ed361c07c'>", "shared": true, "firstName": "Vikki", "lastName": "Owens" }

    },
    {
      "status": "Active",
      "account" : "null",
      "email": "ty.showers@taliferro.com",
      "name": "Tyrone Showers",
      "helpNeeded": false,
      "openView": false,
      "lastUpdated": new Date(),
      "lastUpdatedBy": "System",
      "draft": false,
      "deleted": false,
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "url": "https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fteam-slider2.jpg?alt=media&token=8487f9ca-ab68-4812-a9d2-bbea95399ca4",
      "shared": false,
      "publishedAt": new Date(),
      "timeStamp": new Date(),
      "userName": "System",
      "userImage": "https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fteam-slider2.jpg?alt=media&token=8487f9ca-ab68-4812-a9d2-bbea95399ca4",
      "contact": { "name": "Tyrone Showers", "profession": "<span>Engineer</span>", "shared": true, "firstName": "Tyrone", "lastName": "Showers" }
    }
  ]

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onEmailAddress(emailAddress) : void {
    console.log(JSON.stringify(emailAddress))
  }

  onContactUs(contact) : void {
    console.log(JSON.stringify(contact))
  }

  onTryIt(link) : void {
    this.router.navigate([link])
  }
}
