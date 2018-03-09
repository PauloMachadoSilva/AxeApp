import { EmpresaPage } from './../pages/cadastro/empresas/empresa';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { PaisesProvider } from './../providers/provider';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ContextMenu } from '../components/context-menu/context-menu';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { Geolocation } from '@ionic-native/geolocation';


import { androidConfig } from './../config/android.config';
import { iosConfig } from './../config/ios.config';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ContextMenu,
    DashboardPage,
    EmpresaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
          //Configurações de plataformas
          android: androidConfig,
          ios: iosConfig
      }
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ContextMenu,
    DashboardPage,
    EmpresaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    PaisesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
