import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.scss',
})
export class ArtistsComponent {
  @ViewChild('mfeContainer', { read: ViewContainerRef, static: true })
  mfeContainer!: ViewContainerRef;
  randomImg: any = 'null';

  constructor(private api: MainService) {}

  ngOnInit() {
    this.getRandomImage();
  }

  async ngAfterViewInit() {
    const module = await loadRemoteModule({
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      type: 'module',
      exposedModule: './Artists',
    });

    const remoteComp = module.ArtistsComponent;
    this.mfeContainer.createComponent(remoteComp);
  }

  getRandomImage() {
    this.api.getRandomImage().subscribe((res: any) => {
      this.randomImg = res;
      console.log(this.randomImg);
    });
  }
}
