import { TestBed } from '@angular/core/testing';
import { AcceptBookingByHostStatusResult, CancelBookingByGuestStatusResult, CancelBookingByHostStatusResult, CancelBookingByOtaghakStatusResult, ConfirmBookingStatusResult, FinishedBookingStatusResult, NewBookingStatusResult, OpenBookingStatusResult, RejectBookingByGuestStatusResult, RejectBookingByHostStatusResult, RejectBookingByOtaghakStatusResult, UnpaidBookingStatusResult } from './test-tools/time-line-status-list';
import { StrategyMap, TimeLineStrategy } from './strategies/time-line-strategy';
import { bookingStatusType } from './types/booking-status-types';


describe('BookingComponent', () => {
  describe('unit tests', () => {
    [
      { parameter: bookingStatusType.OpenBooking, result: OpenBookingStatusResult },
      { parameter: bookingStatusType.CancelBookingByGuest, result: CancelBookingByGuestStatusResult },
      { parameter: bookingStatusType.CancelBookingByHost, result: CancelBookingByHostStatusResult },
      { parameter: bookingStatusType.CancelBookingByOtaghak, result: CancelBookingByOtaghakStatusResult },
      { parameter: bookingStatusType.ConfirmBooking, result: ConfirmBookingStatusResult },
      { parameter: bookingStatusType.FinishedBooking, result: FinishedBookingStatusResult },
      { parameter: bookingStatusType.AcceptBookingByHost, result: AcceptBookingByHostStatusResult },
      { parameter: bookingStatusType.NewBooking, result: NewBookingStatusResult },
      { parameter: bookingStatusType.RejectBookingByGuest, result: RejectBookingByGuestStatusResult },
      { parameter: bookingStatusType.RejectBookingByHost, result: RejectBookingByHostStatusResult },
      { parameter: bookingStatusType.RejectBookingByOtaghak, result: RejectBookingByOtaghakStatusResult },
      { parameter: bookingStatusType.UnpaidBooking, result: UnpaidBookingStatusResult },
    ].forEach((dataSet) => {
      it(`set time line status should return ${dataSet.parameter} result when booking status is ${dataSet.parameter}`, () => {
        {
          let strategyClass = TestBed.inject(StrategyMap.get(bookingStatusType[dataSet.parameter])) as TimeLineStrategy;
          strategyClass.setStatus();
          expect(strategyClass.state).toEqual(dataSet.result as any);
        }
      })
    });


    [
      { parameter: bookingStatusType.CancelBookingByGuest },
      { parameter: bookingStatusType.CancelBookingByHost },
      { parameter: bookingStatusType.CancelBookingByOtaghak },
      { parameter: bookingStatusType.ConfirmBooking },
      { parameter: bookingStatusType.FinishedBooking },
      { parameter: bookingStatusType.AcceptBookingByHost },
      { parameter: bookingStatusType.NewBooking },
      { parameter: bookingStatusType.RejectBookingByGuest },
      { parameter: bookingStatusType.RejectBookingByHost },
      { parameter: bookingStatusType.RejectBookingByOtaghak },
      { parameter: bookingStatusType.UnpaidBooking },
    ].forEach((dataSet) => {
      it(`set timeline should not equal ${dataSet.parameter} when status is not equal OpenBooking`, () => {
        let strategyClass = TestBed.inject(StrategyMap.get(bookingStatusType[dataSet.parameter])) as TimeLineStrategy;
        strategyClass.setStatus();
        expect(strategyClass.state).not.toEqual(OpenBookingStatusResult as any);
      })

    })
  })
})
