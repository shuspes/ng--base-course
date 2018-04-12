import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
import { HeaderComponent } from './shared/header/header.component';
import { FilterComponent } from './shared/header/filter/filter.component';
import { MainMenuComponent } from './shared/header/menu/menu.component';
import { MenuComponent } from './mail/menu/menu.component';
import { ListComponent } from './mail/list/list.component';
import { DetailComponent } from './mail/detail/detail.component';

import { AppService } from "./services/app.service";
import { FilterEmailPipe } from './pipes/filter-email.pipe';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    HeaderComponent,
    FilterComponent,
    MainMenuComponent,
    MenuComponent,
    ListComponent,
    DetailComponent,
    FilterEmailPipe,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
