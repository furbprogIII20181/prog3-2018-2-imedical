import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
  ]
})
export class MaterialModule {}
