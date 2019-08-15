import { Component, OnInit } from '@angular/core';
import { Population, CorrelationDescription, Service } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
   
  }
  title = 'ChartPoint';
  dataSource: Population[];
  correlationSource: CorrelationDescription[];

  constructor(service: Service) {
      this.dataSource = service.getPopulationData();
      this.correlationSource = service.getCorrelationSource();
  }

  customizeTooltip(arg: any) {
      return {
          text: arg.point.tag + '<br/>Total Population: ' + arg.argumentText 
      };
  }

  argumentCustomizeText(args: any) {
      return args.value + 'M';
  }

  valueCustomizeText(args: any) {
      return args.value + 'M';
  }

  onSeriesClick(e: any) {
      var series = e.target;
      if (series.isVisible()) {
          series.hide();
      } else {
          series.show();
      }
  }
}
