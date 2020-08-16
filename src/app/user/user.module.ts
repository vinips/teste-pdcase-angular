import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialImportBasicModule } from '@shared/material-import-basic.module';
import { UserComponent } from '@app/user/user.component';
import { UserSearchComponent } from '@app/user/user-search/user-search.component';


@NgModule({
  declarations: [
    UserComponent,
    UserSearchComponent
  ],
  imports: [
    CommonModule,
    MaterialImportBasicModule,
    FormsModule    
  ],
  exports: [
    UserComponent,
    UserSearchComponent
  ]
})
export class UserModule { }
