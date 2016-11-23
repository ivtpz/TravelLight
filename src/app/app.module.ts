import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/components/modal';
import { TypeaheadModule } from 'ng2-bootstrap/components/typeahead';
import { DatepickerModule } from 'ng2-bootstrap/components/datepicker';
import { ChartsModule } from '../../node_modules/ng2-charts/ng2-charts';
import { AgmCoreModule } from 'angular2-google-maps/core'
import { MdSliderModule } from '@angular2-material/slider'

//App Root
import { AppComponent } from './app.component';

//Home page
import { HomeComponent } from './firstPage/home.component';
import { HeaderComponent } from './firstPage/header/header.component';
import { OptionsComponent } from './firstPage/options/options.component';
import { DriveLocInputComponent } from './firstPage/options/drive-loc-input/drive-loc-input.component'
import { LocInputComponent } from './firstPage/options/loc-input/loc-input.component';
import { DateInputComponent } from './firstPage/options/date-input/date-input.component';
import { TravelersComponent } from './firstPage/options/travelers/travelers.component';
import { SloganComponent } from './firstPage/slogan/slogan.component';

//Results page
import { ResultsComponent } from './secondPage/second.page.component';
import { BannerComponent } from './secondPage/banner.component';
import { CarCardComponent } from './secondPage/cards/car/car-card.component';
import { AirplaneCardComponent } from './secondPage/cards/plane/airplane-card.component';
import { SearchBarComponent} from './secondPage/search-bar.component';
import { CarStatsComponent } from './secondPage/cards/car/car-stats.component';
import { TrainStatsComponent } from './secondPage/cards/train/train-stats.component';
import { WalkStatsComponent } from './secondPage/cards/walk/walk-stats.component';
import { PlaneStatsComponent } from './secondPage/cards/plane/plane-stats.component';
import { TrainCardComponent } from './secondPage/cards/train/train-card.component';
import { WalkCardComponent } from './secondPage/cards/walk/walk-card.component';
import { RadarChartComponent } from './secondPage/radar-chart.component'
import { PreferenceSliderComponent } from './secondPage/preference-slider.component'
import { PreferenceSliderContainerComponent } from './secondPage/preference-slider-container.component'
import { CardsComponent } from './secondPage/cards/cards.component'
import { TravelpathComponent } from './secondPage/travelpath.component';
import { ComparisonCardComponent } from './secondPage/comparison-card.component';

//Services
import { CostInfoService } from './secondPage/cost-info.service';
import { AirportLocationService } from './firstPage/airport-location.service';
import { SendCostDataService } from './send-cost-data.service'
import { AppRoutingModule } from './app-routing.module';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PassDataService } from './pass-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SloganComponent,
    OptionsComponent,
    ResultsComponent,
    BannerComponent,
    CarCardComponent,
    AirplaneCardComponent,
    SearchBarComponent,
    CarStatsComponent,
    TrainStatsComponent,
    PlaneStatsComponent,
    WalkStatsComponent,
    TrainCardComponent,
    WalkCardComponent,
    LocInputComponent,
    DateInputComponent,
    TravelersComponent,
    RadarChartComponent,
    PreferenceSliderComponent,
    PreferenceSliderContainerComponent,
    CardsComponent,
    TravelpathComponent,
    ComparisonCardComponent,
    DriveLocInputComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    TypeaheadModule,
    DatepickerModule,
    AppRoutingModule,
    ChartsModule,
    MdSliderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDeVMNxaPKG4Z9pzCGVf0FVOUmSGYXhTEs',
      libraries: ['places']
    })
  ],
  providers: [
    CostInfoService,
    AirportLocationService,
    PassDataService,
    SendCostDataService,
    {provide:LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }