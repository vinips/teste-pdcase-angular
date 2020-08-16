import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialImportBasicModule } from '@shared/material-import-basic.module';
import { UserSearchComponent } from '@app/user/user-search/user-search.component';


@NgModule({
  declarations: [
    UserSearchComponent
  ],
  imports: [
    CommonModule,
    MaterialImportBasicModule,
    FormsModule
  ],
  exports: [
    UserSearchComponent
  ]
})
export class UserModule { }
