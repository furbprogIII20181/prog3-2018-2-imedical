import { DiagnosisComponent } from './../../components/diagnosis/diagnosis.component';
import { SymptomsComponent } from './../../components/symptoms/symptoms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeService } from './home.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { SymptomFilterPipe } from '../../components/pipe/filter.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    SymptomsComponent,
    DiagnosisComponent,
    SymptomFilterPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [HomeComponent],
  providers: [HomeService, SymptomFilterPipe]
})
export class HomeModule {}
