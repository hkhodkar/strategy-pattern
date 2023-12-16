import { Component, Input } from '@angular/core';
import { TimeLineStrategy } from './strategies/time-line-strategy';
import { TimeLineModel } from './strategies/time-line.model';
import { bookingStatusType } from './types/booking-status-types';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  strategy!: TimeLineStrategy;

  convertedStatus!: bookingStatusType;

  @Input("timeLineStatus") timeLineStatus!: TimeLineModel[];


}
