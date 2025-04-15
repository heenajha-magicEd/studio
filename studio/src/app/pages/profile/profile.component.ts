import { Component } from '@angular/core';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { SettingsComponent } from './settings/settings.component';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-profile',
  imports: [
    ProfileSectionComponent,
    SettingsComponent,
    CommonModule,
    TabsModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
