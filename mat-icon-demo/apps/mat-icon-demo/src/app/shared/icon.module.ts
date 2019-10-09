// Third Example - icon module
import { NgModule } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MaterialModule } from '../shared/material.module';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [MaterialModule],
  exports: [],
  providers: []
})
export class IconModule {
  private path: string = '../../assets/images';
  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry
      .addSvgIcon('home', this.setIconPath(`${this.path}/home.svg`))
      .addSvgIcon('add', this.setIconPath(`${this.path}/file-plus.svg`));
  }

  private setIconPath(icon: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(icon);
  }
}
