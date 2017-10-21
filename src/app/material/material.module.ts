import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatProgressBarModule, MatTabsModule, MatListModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialImports = [
  MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule,
  MatProgressBarModule, BrowserAnimationsModule, MatTabsModule, MatListModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    ...materialImports
  ],
  exports: [...materialImports],
  declarations: []
})
export class MaterialModule { }
