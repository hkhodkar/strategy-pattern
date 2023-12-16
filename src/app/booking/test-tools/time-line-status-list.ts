import * as colors from '../strategies/time-line-color'
import { TimelineStatus } from '../strategies/time-line-status.enum'
import { bookingStatusType } from '../types/booking-status-types'

export const OpenBookingStatusResult = {
  key: bookingStatusType.OpenBooking,
  value: [
    {
      index: 1,
      class: "stroke-number-green",
      titleColor: colors.$customTitleGreen,
      title: "ثبت درخواست",
      status: TimelineStatus.Number
    },
    {
      index: 2,
      class: "stroke-number-gray",
      titleColor: colors.$otaghakGrayDark,
      title: "تایید میزبان",
      status: TimelineStatus.Number
    },
    {
      index: 3,
      class: "stroke-number-gray",
      titleColor: colors.$otaghakGrayDark,
      title: "پرداخت",
      status: TimelineStatus.Number
    },
    {
      index: 4,
      class: "stroke-number-gray",
      titleColor: colors.$otaghakGrayDark,
      title: "تحویل کلید",
      status: TimelineStatus.Number
    }
  ]
}


export const NewBookingStatusResult =
{
  key: bookingStatusType.NewBooking,
  value: [
    {
      index: 1,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "ثبت درخواست",
      status: TimelineStatus.Done
    },
    {
      index: 2,
      class: "stroke-number-green",
      titleColor: colors.$customTitleGreen,
      title: "در انتظار تایید میزبان",
      status: TimelineStatus.Number
    },
    {
      index: 3,
      class: "stroke-number-gray",
      titleColor: colors.$otaghakGrayDark,
      title: "پرداخت",
      status: TimelineStatus.Number
    },
    {
      index: 4,
      class: "stroke-number-gray",
      titleColor: colors.$otaghakGrayDark,
      title: "تحویل کلید",
      status: TimelineStatus.Number
    }
  ]
}

export const RejectBookingByGuestStatusResult =
{
  key: bookingStatusType.RejectBookingByGuest,
  value: [
    {
      index: 1,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "ثبت درخواست",
      status: TimelineStatus.Done
    },
    {
      index: 2,
      class: "full-red",
      titleColor: colors.$customTitleRed,
      title: "رد توسط مهمان",
      status: TimelineStatus.Reject
    },
    {
      index: 3,
      class: "full-gray",
      titleColor: colors.$otaghakGray,
      title: "پرداخت",
      status: TimelineStatus.Number
    },
    {
      index: 4,
      class: "full-gray",
      titleColor: colors.$otaghakGray,
      title: "تحویل کلید",
      status: TimelineStatus.Number
    }
  ]
}


export const RejectBookingByHostStatusResult =
{
  key: bookingStatusType.RejectBookingByHost,
  value: [
    {
      index: 1,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "ثبت درخواست",
      status: TimelineStatus.Done
    },
    {
      index: 2,
      class: "full-red",
      titleColor: colors.$customTitleRed,
      title: "رد توسط میزبان",
      status: TimelineStatus.Reject
    },
    {
      index: 3,
      class: "full-gray",
      titleColor: colors.$otaghakGray,
      title: "پرداخت",
      status: TimelineStatus.Number
    },
    {
      index: 4,
      class: "full-gray",
      titleColor: colors.$otaghakGray,
      title: "تحویل کلید",
      status: TimelineStatus.Number
    }
  ]
}


export const RejectBookingByOtaghakStatusResult =
{
  key: bookingStatusType.RejectBookingByOtaghak,
  value: [
    {
      index: 1,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "ثبت درخواست",
      status: TimelineStatus.Done
    },
    {
      index: 2,
      class: "full-red",
      titleColor: colors.$customTitleRed,
      title: "رد توسط اتاقک",
      status: TimelineStatus.Reject
    },
    {
      index: 3,
      class: "full-gray",
      titleColor: colors.$otaghakGray,
      title: "پرداخت",
      status: TimelineStatus.Number
    },
    {
      index: 4,
      class: "full-gray",
      titleColor: colors.$otaghakGray,
      title: "تحویل کلید",
      status: TimelineStatus.Number
    }
  ]
}


export const AcceptBookingByHostStatusResult =
{
  key: bookingStatusType.AcceptBookingByHost,
  value: [
    {
      index: 1,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "ثبت درخواست",
      status: TimelineStatus.Done
    },
    {
      index: 2,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "تایید میزبان",
      status: TimelineStatus.Done
    },
    {
      index: 3,
      class: "stroke-number-green",
      titleColor: colors.$otaghakGrayDark,
      title: "در انتظار پرداخت",
      status: TimelineStatus.Number
    },
    {
      index: 4,
      class: "stroke-number-gray",
      titleColor: colors.$otaghakGrayDark,
      title: "تحویل کلید",
      status: TimelineStatus.Number
    }
  ]
}


export const ConfirmBookingStatusResult = {
  key: bookingStatusType.ConfirmBooking,
  value: [
    {
      index: 1,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "ثبت درخواست",
      status: TimelineStatus.Done
    },
    {
      index: 2,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "تایید میزبان",
      status: TimelineStatus.Done
    },
    {
      index: 3,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "پرداخت",
      status: TimelineStatus.Done
    },
    {
      index: 4,
      class: "stroke-number-green",
      titleColor: colors.$customTitleGreen,
      title: "تحویل کلید",
      status: TimelineStatus.Number
    }
  ]
}


export const CancelBookingByGuestStatusResult = {
  key: bookingStatusType.CancelBookingByGuest,
  value: [
    {
      index: 1,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "ثبت درخواست",
      status: TimelineStatus.Done
    },
    {
      index: 2,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "تایید میزبان",
      status: TimelineStatus.Done
    },
    {
      index: 3,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "پرداخت",
      status: TimelineStatus.Done
    },
    {
      index: 4,
      class: "full-red",
      titleColor: colors.$customTitleRed,
      title: "لغو مهمان",
      status: TimelineStatus.Reject
    }
  ]
}


export const CancelBookingByHostStatusResult = {
  key: bookingStatusType.CancelBookingByHost,
  value: [
    {
      index: 1,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "ثبت درخواست",
      status: TimelineStatus.Done
    },
    {
      index: 2,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "تایید میزبان",
      status: TimelineStatus.Done
    },
    {
      index: 3,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "پرداخت",
      status: TimelineStatus.Done
    },
    {
      index: 4,
      class: "full-red",
      titleColor: colors.$customTitleRed,
      title: "لغو میزبان",
      status: TimelineStatus.Reject
    }
  ]
}


export const CancelBookingByOtaghakStatusResult = {
  key: bookingStatusType.CancelBookingByOtaghak,
  value: [
    {
      index: 1,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "ثبت درخواست",
      status: TimelineStatus.Done
    },
    {
      index: 2,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "تایید میزبان",
      status: TimelineStatus.Done
    },
    {
      index: 3,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "پرداخت",
      status: TimelineStatus.Done
    },
    {
      index: 4,
      class: "full-red",
      titleColor: colors.$customTitleRed,
      title: "لغو اتاقک",
      status: TimelineStatus.Reject
    }
  ]
}


export const FinishedBookingStatusResult = {
  key: bookingStatusType.FinishedBooking,
  value: [
    {
      index: 1,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "ثبت درخواست",
      status: TimelineStatus.Done
    },
    {
      index: 2,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "تایید میزبان",
      status: TimelineStatus.Done
    },
    {
      index: 3,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "پرداخت",
      status: TimelineStatus.Done
    },
    {
      index: 4,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "تحویل کلید",
      status: TimelineStatus.Done
    }
  ]
}


export const UnpaidBookingStatusResult =
{
  key: bookingStatusType.UnpaidBooking,
  value: [
    {
      index: 1,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "ثبت درخواست",
      status: TimelineStatus.Done
    },
    {
      index: 2,
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "تایید میزبان",
      status: TimelineStatus.Done
    },
    {
      index: 3,
      class: "full-red",
      titleColor: colors.$customTitleRed,
      title: "عدم پرداخت",
      status: TimelineStatus.Reject
    },
    {
      index: 4,
      class: "full-gray",
      titleColor: colors.$otaghakGray,
      title: "تحویل کلید",
      status: TimelineStatus.Number
    }
  ]
}


