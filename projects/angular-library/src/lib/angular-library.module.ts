import { NgModule } from '@angular/core';
import { AngularLibraryComponent } from './angular-library.component';
import { AngularLibraryComponentComponent } from './angular-library-component/angular-library-component.component';

@NgModule({
  declarations: [AngularLibraryComponent, AngularLibraryComponentComponent],
  imports: [
  ],
  exports: [AngularLibraryComponent, AngularLibraryComponentComponent]
})
export class AngularLibraryModule { }
