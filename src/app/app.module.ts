import { ErrorHandler, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule } from './modules/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core.module';
import { ErrorGlobalHandler } from './errors/global';
import { ManageHttpInterceptor } from './interceptors/manage-http.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeCreateComponent } from '@components/pages/resume/create.component';

export function tokenGetter() {
  // console.log('__tokenGetter', localStorage.getItem('jwt_token'));
  return localStorage.getItem('jwt_token');
}

@NgModule({
  declarations: [AppComponent, ResumeCreateComponent,],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LazyLoadImageModule,
  ],

  /**
   * ? HTTP_INTERCEPTORS is using onion model
   * * Request A
   * * Request B
   * * Request C
   *  ...
   * * Respond C
   * * Respond B
   * * Respond A
   **/
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorGlobalHandler
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
