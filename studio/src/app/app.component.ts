import {
  Component,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    NavbarComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  title = 'studio';
  isLoggedIn: boolean = true;

  constructor(private auth: AuthService, private injector: Injector) {}

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
    // this.loadProfile();
  }

  // Optimise this as this is running on each cycle:
  ngDoCheck() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  // async loadProfile() {
  //   // Dynamically import the exposed ProfileComponent from the 'profiles' remote
  //   const module = await import('profiles/ProfileComponent');
  //   const component = module.ProfileComponent;
  //   const ref = this.container.createComponent(component, {
  //     injector: this.injector,
  //   });
  // }
}
