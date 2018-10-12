import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {FirstComponent} from './first/first.component';
import {FirstserveService} from "./first/firstserve.service";
import {SecondComponent} from './second/second.component';
import {SecondserveService} from "./second/secondserve.service";
import {BlockinformationComponent} from './blockinformation/blockinformation.component';
import {BlockinformationserveService} from "./blockinformation/blockinformationserve.service";
import {PersonalaccountnComponent} from './personalaccountn/personalaccountn.component';
import {PersonalaccountserveService} from "./personalaccountn/personalaccountserve.service";

registerLocaleData(zh);
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: FirstComponent},
  {path: 'piece', component: SecondComponent},
  {path: 'blockInformation', component: BlockinformationComponent},
  {path: 'personalAccount', component: PersonalaccountnComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    BlockinformationComponent,
    PersonalaccountnComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [FirstserveService, SecondComponent, SecondserveService, BlockinformationserveService, PersonalaccountserveService, {
    provide: NZ_I18N,
    useValue: zh_CN
  }, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {

}
