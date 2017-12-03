import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { AuthenticationService } from '../user/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public imageSources: string[] = [
    '../../assets/images/slide-image-1-crop.jpg',
    '../../assets/images/slide-image-1-crop.jpg',
    '../../assets/images/slide-image-1-crop.jpg'
 ];

 public config: ICarouselConfig = {
   verifyBeforeLoad: true,
   log: false,
   animation: true,
   animationType: AnimationConfig.SLIDE,
   autoplay: true,
   autoplayDelay: 5000,
   stopAutoplayMinWidth: 768
 };

  constructor(private _authService: AuthenticationService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

}
