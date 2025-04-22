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
  }

  ngDoCheck() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }
}
