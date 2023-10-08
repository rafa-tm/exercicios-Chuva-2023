import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';
import { ResumeComponent } from './shared/components/resume/resume.component';
import { DiscussionsComponent } from './shared/components/discussions/discussions.component';
import { CardTopicComponent } from './shared/components/card-topic/card-topic.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    ResumeComponent,
    DiscussionsComponent,
    CardTopicComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
