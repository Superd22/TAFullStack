import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialImports = [MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, BrowserAnimationsModule];

@NgModule({
  imports: [
    CommonModule,
    ...materialImports
  ],
  exports: [...materialImports],
  declarations: []
})
export class MaterialModule { }
