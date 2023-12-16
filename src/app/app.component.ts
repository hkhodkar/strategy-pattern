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
export class AppComponent implements OnInit {

  constructor(
    private injector: Injector,
  ) { }

  title = 'strategy-pattern';

  timeLineStatus!: TimeLineModel[];
  strategy!: TimeLineStrategy;
  bookingStatus!: bookingStatusType;
  public bookingPageStatus!: BookingPageStatusModel;

  mockDemo = [
    OpenBookingStatusResult,
    NewBookingStatusResult,
    RejectBookingByGuestStatusResult,
    RejectBookingByHostStatusResult,
    RejectBookingByOtaghakStatusResult,
    AcceptBookingByHostStatusResult,
    ConfirmBookingStatusResult,
    CancelBookingByGuestStatusResult,
    CancelBookingByHostStatusResult,
    CancelBookingByOtaghakStatusResult,
    FinishedBookingStatusResult,
    UnpaidBookingStatusResult
  ]

  ngOnInit(): void {
    let random = Math.floor(Math.random() * 11);
    let bookingStatus = this.mockDemo[random];
    this.bookingStatus = bookingStatus.key;
    this.strategy = this.injector.get<TimeLineStrategy>(StrategyMap.get(this.bookingStatus));
    this.bookingPageStatus = this.strategy.setStatus();
    this.timeLineStatus = this.bookingPageStatus.timeLineModel;
    console.log(this.bookingPageStatus);

  }
}
