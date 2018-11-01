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
import { AboutComponent } from 'src/app/components/about/about.component';
import { HelpComponent } from 'src/app/components/help/help.component';

@NgModule({
  declarations: [
    HomeComponent,
    SymptomsComponent,
    DiagnosisComponent,
    AboutComponent,
    HelpComponent,
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
