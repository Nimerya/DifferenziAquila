import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {AlertController, IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {Geolocation} from '@ionic-native/geolocation';
import {CloudSettings, CloudModule} from '@ionic/cloud-angular';

import {MyApp} from './app.component';
import {DictionaryModule} from '../providers/dictionary-service/dictionary-module';
import {HttpModule} from '@angular/http';
import {IonicStorageModule} from '@ionic/storage';
import { MessageProvider } from '../providers/message.provider';
import { AccountProvider } from '../providers/account.provider';
import { UserPersistanceProvider } from '../providers/user-persistance.provider';
import {RecyclingSackProvider} from "../providers/rs.provider";
import {RecyclingSackRequestProvider} from "../providers/rsr.provider";
import {CalendarProvider} from "../providers/calendar.provider";
import {CalendarPersistanceProvider} from "../providers/calendar-persistance.provider";
import {DatePipe} from "@angular/common";
import {WasteCategoryProvider} from "../providers/wastecategory.provider";
import {SpecialWasteCollectionRequestProvider} from "../providers/swcr.provider";
import {SpecialWasteProvider} from "../providers/sw.provider";
import {CollectionPointProvider} from "../providers/collectionpoint.provider";
import {CollectionPointPersistanceProvider} from "../providers/collectionpoint-persistance.provider";
import {NotificationProvider} from "../providers/notification.provider";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {NewsProvider} from "../providers/news.provider";
import {NewsPersistanceProvider} from "../providers/news-persistance.provider";
import {NotificationPersistanceProvider} from "../providers/notification-persistance.provider";
import {Diagnostic} from "@ionic-native/diagnostic";

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '678110e5'
  }
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    DictionaryModule,
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__differenziaquila'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlertController,
    MessageProvider,
    AccountProvider,
    UserPersistanceProvider,
    RecyclingSackProvider,
    RecyclingSackRequestProvider,
    CalendarProvider,
    CalendarPersistanceProvider,
    DatePipe,
    WasteCategoryProvider,
    SpecialWasteProvider,
    SpecialWasteCollectionRequestProvider,
    CollectionPointProvider,
    CollectionPointPersistanceProvider,
    NotificationProvider,
    LocalNotifications,
    NewsProvider,
    NewsPersistanceProvider,
    NotificationPersistanceProvider,
    Diagnostic

  ]
})
export class AppModule {
}
