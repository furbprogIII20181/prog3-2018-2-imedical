import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserModule } from './containers/user/user.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
