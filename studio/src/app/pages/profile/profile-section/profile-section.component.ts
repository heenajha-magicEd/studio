import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile-section',
  imports: [AvatarModule, ButtonModule],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.scss',
})
export class ProfileSectionComponent {
  currentUser: any = null; //Setup porperly

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.currentUser = this.auth.getCurrentUser();
    console.log(this.currentUser);
  }
}
