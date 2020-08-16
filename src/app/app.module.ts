import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '@app/app.component';
import { UserModule } from '@app/user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportBasicModule } from '@shared/material-import-basic.module';

import { UserService } from '@app/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    UserModule,
    BrowserAnimationsModule,
    MaterialImportBasicModule
  ],
  providers: [
    UserService,
    { provide: LOCALE_ID, useValue: "pt-BR" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
