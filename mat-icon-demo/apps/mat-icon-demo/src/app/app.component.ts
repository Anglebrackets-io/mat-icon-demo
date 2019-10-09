import { Component, ViewEncapsulation } from '@angular/core';
// First example
// import { MatIconRegistry } from '@angular/material/icon';
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'mat-icon-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'mat-icon-demo';

  // First example
  // constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  //   this.matIconRegistry.addSvgIcon('home', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/home.svg'));
  //   this.matIconRegistry.addSvgIcon('add', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/file-plus.svg'));

  // or we could do this, and chain the addsvgIcon
  // this.matIconRegistry
  //   .addSvgIcon('home', '../assets/images/home.svg')
  //   .addSvgIcon('add', '../assets/images/file-plus.svg');
  // }
}
