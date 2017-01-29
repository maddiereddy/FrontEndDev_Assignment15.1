import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UniversityComponent } from './university/university.component';
import { CompanyComponent } from './company/company.component';
import { ConfigService } from './config.service';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './not-found.component';
import { APP_CONFIG, AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    UniversityComponent,
    CompanyComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],                    //we need to tell Angular how to provide an instance of our ApiEndpoint
                        // when we ask for it in our app (think of it as registering a dependency)
  providers: [ConfigService, { provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
