import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { DataOneComponent } from './data-one/data-one.component';
import { DataTwoComponent } from './data-two/data-two.component';
import { DataThreeComponent } from './data-three/data-three.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, DataOneComponent, DataTwoComponent, DataThreeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
