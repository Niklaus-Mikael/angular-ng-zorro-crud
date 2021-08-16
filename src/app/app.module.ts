import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './Components/list/list.component';
import { HeaderComponent } from './Components/header/header.component';
import { FormComponent } from './Components/form/form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AddCommentComponent } from './Components/add-comment/add-comment.component';
import { ShowComponent } from './Components/show/show.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import {ZorroControlsModule} from  './zorro-controls/zorro-controls.module';



registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    FormComponent,
    AddCommentComponent,
    ShowComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzModalModule,
    NzCardModule,
    NzFormModule,
    NzCommentModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzPaginationModule,
    ZorroControlsModule

  

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
