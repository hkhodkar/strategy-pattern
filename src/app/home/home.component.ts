import { Component, Injector, Input, OnInit } from '@angular/core';
import { BookingPageStatusModel } from '../booking/models/booking-status.model';
import { TimeLineStrategy, StrategyMap } from '../booking/strategies/time-line-strategy';
import { TimeLineModel } from '../booking/strategies/time-line.model';
import { OpenBookingStatusResult, NewBookingStatusResult, RejectBookingByGuestStatusResult, RejectBookingByHostStatusResult, RejectBookingByOtaghakStatusResult, AcceptBookingByHostStatusResult, ConfirmBookingStatusResult, CancelBookingByGuestStatusResult, CancelBookingByHostStatusResult, CancelBookingByOtaghakStatusResult, FinishedBookingStatusResult, UnpaidBookingStatusResult } from '../booking/test-tools/time-line-status-list';
import { bookingStatusType } from '../booking/types/booking-status-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private injector: Injector,
  ) { }

  ngOnInit(): void {
    this.changeState();
  }

  title = 'strategy-pattern';

  timeLineStatus!: TimeLineModel[];
  strategy!: TimeLineStrategy;
  bookingStatus!: bookingStatusType;
  public bookingPageStatus!: BookingPageStatusModel;
  index = -1;

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

  changeState() {
    if (this.index >= 11) this.index = 0;
    this.index++;
    let bookingStatus = this.mockDemo[this.index];
    this.bookingStatus = bookingStatus.key;
    this.strategy = this.injector.get<TimeLineStrategy>(StrategyMap.get(this.bookingStatus));
    this.bookingPageStatus = this.strategy.setStatus();
    this.timeLineStatus = this.bookingPageStatus.timeLineModel;
  }

}
