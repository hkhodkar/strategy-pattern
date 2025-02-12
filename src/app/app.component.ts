import { Component, Injector, OnInit } from '@angular/core';
import { TimeLineModel } from './booking/strategies/time-line.model';
import { AcceptBookingByHostStatusResult, CancelBookingByGuestStatusResult, CancelBookingByHostStatusResult, CancelBookingByOtaghakStatusResult, ConfirmBookingStatusResult, FinishedBookingStatusResult, NewBookingStatusResult, OpenBookingStatusResult, RejectBookingByGuestStatusResult, RejectBookingByHostStatusResult, RejectBookingByOtaghakStatusResult, UnpaidBookingStatusResult } from './booking/test-tools/time-line-status-list';
import { TimeLineStrategy, StrategyMap } from './booking/strategies/time-line-strategy';
import { bookingStatusType } from './booking/types/booking-status-types';
import { BookingPageStatusModel } from './booking/models/booking-status.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


}
