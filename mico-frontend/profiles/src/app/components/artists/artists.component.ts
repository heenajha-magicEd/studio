import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../service/artists.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  users: any[] = [];

  constructor(private api: ArtistsService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.api.getAllUsers().subscribe((data: any) => {
      this.users = data.users;
    });
  }
}
