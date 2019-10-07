import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'mat-icon-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mat-icon-demo';

  constructor(private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon('home', '../assets/images/home.svg');
    this.matIconRegistry.addSvgIcon('add', '../assets/images/file-plus.svg');

    // or we could do this, and chain the addsvgIcon
    // this.matIconRegistry
    //   .addSvgIcon('home', '../assets/images/home.svg')
    //   .addSvgIcon('add', '../assets/images/file-plus.svg');
  }
}
