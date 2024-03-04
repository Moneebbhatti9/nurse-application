import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllNursesComponent } from './components/all-nurses/all-nurses.component';
import { NurseDetailsComponent } from './components/nurse-details/nurse-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/Material.module';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleVisitComponent } from './components/schedule-vist/schedule-vist.component';

@NgModule({
  declarations: [
    AppComponent,
    AllNursesComponent,
    NurseDetailsComponent,
    ScheduleVisitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
