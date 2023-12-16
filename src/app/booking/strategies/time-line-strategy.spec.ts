import { TestBed } from "@angular/core/testing";

import { bookingStatus } from "./booking-status.enum";
import { AcceptBookingByHostStrategy, CancelBookingByGuestStrategy, CancelBookingByHostStrategy, CancelBookingByOtaghakStrategy, ConfirmBookingStrategy, FinishedBookingStrategy, NewBookingStrategy, OpenBookingStrategy, RejectBookingByGuestStrategy, RejectBookingByHostStrategy, RejectBookingByOtaghakStrategy, StrategyMap, UnpaidBookingStrategy } from "./time-line-strategy";

describe('booking', () => {
  describe('unit-tests', () => {
    describe('time-line-strategy-DI-tests', () => {
      [
        { parameter: bookingStatus.OpenBooking, result: OpenBookingStrategy },
        { parameter: bookingStatus.AcceptBookingByHost, result: AcceptBookingByHostStrategy },
        { parameter: bookingStatus.CancelBookingByGuest, result: CancelBookingByGuestStrategy },
        { parameter: bookingStatus.CancelBookingByHost, result: CancelBookingByHostStrategy },
        { parameter: bookingStatus.CancelBookingByOtaghak, result: CancelBookingByOtaghakStrategy },
        { parameter: bookingStatus.ConfirmBooking, result: ConfirmBookingStrategy },
        { parameter: bookingStatus.FinishedBooking, result: FinishedBookingStrategy },
        { parameter: bookingStatus.NewBooking, result: NewBookingStrategy },
        { parameter: bookingStatus.RejectBookingByGuest, result: RejectBookingByGuestStrategy },
        { parameter: bookingStatus.RejectBookingByHost, result: RejectBookingByHostStrategy },
        { parameter: bookingStatus.RejectBookingByOtaghak, result: RejectBookingByOtaghakStrategy },
        { parameter: bookingStatus.UnpaidBooking, result: UnpaidBookingStrategy },
      ].forEach((dataSet) => {
        it('injector should return instance of ' + dataSet.result.name + ' class when booking status is ' + dataSet.parameter, () => {
          let strategyInstance = TestBed.inject(StrategyMap.get(bookingStatus[dataSet.parameter]));
          expect(strategyInstance).toBeInstanceOf(dataSet.result);
        });
      });
    })


  })
})
