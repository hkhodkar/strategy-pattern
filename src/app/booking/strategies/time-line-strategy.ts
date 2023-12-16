import { Injectable } from '@angular/core';
import * as colors from './time-line-color'
import { TimelineStatus } from './time-line-status.enum';
import { BookingPageStatusModel } from '../models/booking-status.model';
import { BookingDataService } from '../services/booking-data-service.service';
import { bookingStatusType } from '../types/booking-status-types';

export abstract class TimeLineStrategy {
  constructor() {
  }

  state: BookingPageStatusModel = {
    timeLineModel: [
      {
        index: 1,
        class: "stroke-number-gray",
        titleColor: colors.$otaghakGrayDark,
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
    ],
    alert: undefined,
    showAcceptOtaghakTerms: false,
    showAlertSection: false,
    showChatWithHost: false,
    showDiscountSection: false,
    showDownloadVoucherButton: false,
    showPaymentSection: false,
    showSubmitComment: false,
    submitButtonLabel: '',
    submitButtonCallBackFn: () => {
    },
    secondActionLabel: '',
    secondActionCallBackFn: () => {
    },
    showFullWidthButton: false,
    fullWidthButtonLabel: '',
    fullWidthButtonCallBackFn: () => {
    },
    showPassengerTab: false,
  };

  abstract setStatus(): BookingPageStatusModel;
}

@Injectable({
  providedIn: 'any',
})
export class OpenBookingStrategy extends TimeLineStrategy {
  constructor() {
    super();
  }

  setStatus(): BookingPageStatusModel {

    let state: BookingPageStatusModel = { ...this.state };
    state.timeLineModel[0].class = 'stroke-number-green';
    state.timeLineModel[0].titleColor = colors.$customTitleGreen;
    state.showFullWidthButton = false;
    state.showPassengerTab = true;
    state.submitButtonLabel = 'درخواست رزرو (رایگان)';
    state.submitButtonCallBackFn = () => {
    };
    state.secondActionLabel = 'حذف رزرو';
    state.secondActionCallBackFn = () => {
    };
    return state;
  }
}

@Injectable({
  providedIn: 'any',
})
export class NewBookingStrategy extends TimeLineStrategy {
  constructor(private bookingDataService: BookingDataService,
  ) {
    super();
  }

  setStatus(): BookingPageStatusModel {

    let state: BookingPageStatusModel = { ...this.state };
    state.timeLineModel[0] = {
      ...state.timeLineModel[0],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    };
    state.timeLineModel[1] = {
      ...state.timeLineModel[1],
      class: "stroke-number-green",
      titleColor: colors.$customTitleGreen,
      title: "در انتظار تایید میزبان",
    };
    state.alert = {
      type: 'success',
      description: 'رزرو شما با موفقیت ثبت شد و در انتظار پذیرش میزبان است. نتیجه از طریق پیامک به اطلاع شما می رسد.'
    };
    state.showAlertSection = true;
    state.showChatWithHost = true;
    state.submitButtonLabel = 'تماس با پشتیبانی';
    state.submitButtonCallBackFn = () => {
      window.open(`tel:02128111045`, '_self');
    };

    state.secondActionLabel = 'رد رزرو';
    state.secondActionCallBackFn = () => {
      this.bookingDataService.confirmCancelBooking();
    };
    return state;
  }
}

@Injectable({
  providedIn: 'any',
})
export class RejectBookingByGuestStrategy extends TimeLineStrategy {
  constructor(private bookingDataService: BookingDataService) {
    super();
  }

  setStatus(): BookingPageStatusModel {
    let state = { ...this.state };
    state.timeLineModel[0] = {
      ...state.timeLineModel[0],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    };
    state.timeLineModel[1] = {
      ...state.timeLineModel[1],
      class: "full-red",
      title: 'رد رزرو توسط مهمان',
      titleColor: colors.$customTitleRed,
      status: TimelineStatus.Reject
    };
    state.showFullWidthButton = true;
    state.fullWidthButtonLabel = 'مشاهده اقامتگاه های مشابه';
    state.fullWidthButtonCallBackFn = () => {
      this.bookingDataService.navigateToSimilarRoom();
    };
    state.showAlertSection = true;
    state.alert = {type:'error', description:'متاسفانه رزرو شما توسط میهمان رد شد با کلیک بر روی گزینه اقامتگاه های مشابه لطفا اقامتگاه دیگری انتخاب کنید'}
    return state;
  }
}

@Injectable({
  providedIn: 'any',
})
export class RejectBookingByHostStrategy extends TimeLineStrategy {
  constructor(private bookingDataService: BookingDataService) {
    super();
  }

  setStatus(): BookingPageStatusModel {
    let state = { ...this.state };
    state.timeLineModel[0] = {
      ...state.timeLineModel[0],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    };
    state.timeLineModel[1] = {
      ...state.timeLineModel[1],
      class: "full-red",
      title: "رد توسط میزبان",
      titleColor: colors.$customTitleRed,
      status: TimelineStatus.Reject
    };
    state.showFullWidthButton = true;
    state.fullWidthButtonLabel = 'مشاهده اقامتگاه های مشابه';
    state.fullWidthButtonCallBackFn = () => {
      this.bookingDataService.navigateToSimilarRoom();
    };
    state.showAlertSection = true;
    state.alert = {type:'error', description:'متاسفانه رزرو شما توسط میزبان رد شد با کلیک بر روی گزینه اقامتگاه های مشابه لطفا اقامتگاه دیگری انتخاب کنید'}
    return state;
  }
}

@Injectable({
  providedIn: 'any',
})
export class RejectBookingByOtaghakStrategy extends TimeLineStrategy {
  constructor(private bookingDataService: BookingDataService) {
    super();
  }

  setStatus(): BookingPageStatusModel {
    let state = { ...this.state };
    state.timeLineModel[0] = {
      ...state.timeLineModel[0],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    };
    state.timeLineModel[1] = {
      ...state.timeLineModel[1],
      class: "full-red",
      titleColor: colors.$customTitleRed,
      title: "رد رزرو توسط اتاقک",
      status: TimelineStatus.Reject
    };
    state.timeLineModel[2] = {
      ...state.timeLineModel[2],
      class: "full-gray",
      titleColor: colors.$otaghakGray,
    };
    state.timeLineModel[3] = {
      ...state.timeLineModel[3],
      class: "full-gray",
      titleColor: colors.$otaghakGray,
      title: "تحویل کلید",
    };
    state.showFullWidthButton = true;
    state.fullWidthButtonLabel = 'مشاهده اقامتگاه های مشابه';
    state.fullWidthButtonCallBackFn = () => {
      this.bookingDataService.navigateToSimilarRoom();
    };
    state.showAlertSection = true;
    state.alert = {type:'error', description:'متاسفانه رزرو شما توسط اتاقک رد شد با کلیک بر روی گزینه اقامتگاه های مشابه لطفا اقامتگاه دیگری انتخاب کنید'}
    return state;
  }
}

@Injectable({
  providedIn: 'any',
})
export class AcceptBookingByHostStrategy extends TimeLineStrategy {
  constructor(private bookingDataService: BookingDataService,
  ) {
    super();
  }

  setStatus(): BookingPageStatusModel {
    let state = { ...this.state };
    state.timeLineModel[0] = {
      ...state.timeLineModel[0],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    };
    state.timeLineModel[1] = {
      ...state.timeLineModel[1],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    };
    state.timeLineModel[2] = {
      ...state.timeLineModel[2],
      class: "stroke-number-green",
      titleColor: colors.$customTitleGreen,
      title: "پرداخت",
    };
    state.alert = {
      type: 'warn',
      description: 'رزرو شما توسط میزبان پذیرفته شد و در انتظار پرداخت است. قبل از منقضی شدن رزرو، به پرداخت آن اقدام کنید.'
    };
    state.showAlertSection = true;
    state.showChatWithHost = true;
    state.showPaymentSection = true;
    state.showAcceptOtaghakTerms = true;
    state.submitButtonLabel = 'پرداخت';
    //when the user registers referenceCode(tracking code) this button will be show
    state.fullWidthButtonCallBackFn = () => {
      window.open(`tel:02128111045`, '_self');
    };

    state.submitButtonCallBackFn = () => {
      this.bookingDataService.pay();
    };
    state.secondActionLabel = 'رد رزرو';
    state.secondActionCallBackFn = () => {
      this.bookingDataService.confirmCancelBooking();
    };
    return state;
  }
}

@Injectable({
  providedIn: 'any',
})
export class ConfirmBookingStrategy extends TimeLineStrategy {
  constructor(private bookingDataService: BookingDataService) {
    super();
  }

  setStatus(): BookingPageStatusModel {
    let state = { ...this.state };
    state.timeLineModel[0] = {
      ...state.timeLineModel[0],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    };
    state.timeLineModel[1] = {
      ...state.timeLineModel[1],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    };
    state.timeLineModel[2] = {
      ...state.timeLineModel[2],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    };
    state.timeLineModel[3] = {
      ...state.timeLineModel[3],
      class: "stroke-number-green",
      titleColor: colors.$customTitleGreen,
    };
    state.alert = {
      type: 'success',
      description: 'رزرو شما با موفقیت انجام شد.'
    };
    state.showAlertSection = true;
    state.showChatWithHost = true;
    state.showDownloadVoucherButton = true;
    state.submitButtonLabel = 'تماس با میزبان';
    state.submitButtonCallBackFn = () => {
      window.open(`tel:${this.bookingDataService.hostPhoneNumber}`, '_self');
    };
    state.secondActionLabel = 'مسیریابی';
    state.secondActionCallBackFn = () => {
      this.bookingDataService.showLocation();
    };

    return state;
  }
}

@Injectable({
  providedIn: 'any',
})
export class CancelBookingByGuestStrategy extends TimeLineStrategy {
  constructor(private bookingDataService: BookingDataService) {
    super();
  }

  setStatus(): BookingPageStatusModel {
    let state = this.state;
    state.timeLineModel[0] = {
      ...state.timeLineModel[0],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    };
    state.timeLineModel[1] = {
      ...state.timeLineModel[1],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    };
    state.timeLineModel[2] = {
      ...state.timeLineModel[2],
      class: "full-red",
      titleColor: colors.$customTitleRed,
      title: "لغو رزرو توسط مهمان",
      status: TimelineStatus.Reject
    };
    state.showFullWidthButton = true;
    state.fullWidthButtonLabel = 'مشاهده اقامتگاه های مشابه';
    state.fullWidthButtonCallBackFn = () => {
      this.bookingDataService.navigateToSimilarRoom()
    }
    return state;
  }
}

@Injectable({
  providedIn: 'any',
})
export class CancelBookingByHostStrategy extends TimeLineStrategy {
  constructor(private bookingDataService: BookingDataService) {
    super();
  }

  setStatus(): BookingPageStatusModel {
    let state = { ...this.state };
    state.timeLineModel[0] = {
      ...state.timeLineModel[0],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    };
    state.timeLineModel[1] = {
      ...state.timeLineModel[1],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    };
    state.timeLineModel[2] = {
      ...state.timeLineModel[2],
      class: "full-red",
      titleColor: colors.$customTitleRed,
      title: "لغو رزرو توسط میزبان",
      status: TimelineStatus.Reject
    };
    state.showFullWidthButton = true;
    state.fullWidthButtonLabel = 'مشاهده اقامتگاه های مشابه';
    state.fullWidthButtonCallBackFn = () => {
      this.bookingDataService.navigateToSimilarRoom();
    };
    return state;
  }
}

@Injectable({
  providedIn: 'any',
})
export class CancelBookingByOtaghakStrategy extends TimeLineStrategy {
  constructor(private bookingDataService: BookingDataService) {
    super();
  }

  setStatus(): BookingPageStatusModel {
    let state = this.state;
    state.timeLineModel[0] = {
      ...state.timeLineModel[0],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    }
    state.timeLineModel[1] = {
      ...state.timeLineModel[1],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    }
    state.timeLineModel[2] = {
      ...state.timeLineModel[2],
      class: "full-red",
      titleColor: colors.$customTitleRed,
      title: "لغو رزرو توسط اتاقک",
      status: TimelineStatus.Reject
    };
    state.showFullWidthButton = true;
    state.fullWidthButtonLabel = 'مشاهده اقامتگاه های مشابه';
    state.fullWidthButtonCallBackFn = () => {
      this.bookingDataService.navigateToSimilarRoom();
    }
    return state;
  }
}

@Injectable({
  providedIn: 'any',
})
export class FinishedBookingStrategy extends TimeLineStrategy {
  constructor(private bookingDataService: BookingDataService) {
    super();
  }

  setStatus(): BookingPageStatusModel {
    let state = this.state;
    state.timeLineModel[0] = {
      ...state.timeLineModel[0],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    }
    state.timeLineModel[1] = {
      ...state.timeLineModel[1],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    }
    state.timeLineModel[2] = {
      ...state.timeLineModel[2],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    }
    state.timeLineModel[3] = {
      ...state.timeLineModel[3],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      title: "تحویل کلید",
      status: TimelineStatus.Done
    }

    state.showDownloadVoucherButton = true;
    state.showFullWidthButton = true;
    state.fullWidthButtonLabel = 'ثبت نظر';
    state.fullWidthButtonCallBackFn = () => {
      this.bookingDataService.commentRegistration();
    }

    return state;
  }
}

@Injectable({
  providedIn: 'any',
})
export class UnpaidBookingStrategy extends TimeLineStrategy {
  constructor(private bookingDataService: BookingDataService) {
    super();
  }

  setStatus(): BookingPageStatusModel {
    let state = this.state;
    state.timeLineModel[0] = {
      ...state.timeLineModel[0],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    }
    state.timeLineModel[1] = {
      ...state.timeLineModel[1],
      class: "full-green",
      titleColor: colors.$customTitleGreen,
      status: TimelineStatus.Done
    }
    state.timeLineModel[2] = {
      ...state.timeLineModel[2],
      class: "full-red",
      titleColor: colors.$customTitleRed,
      title: "عدم پرداخت",
      status: TimelineStatus.Reject
    }
    state.timeLineModel[3] = {
      ...state.timeLineModel[3],
      class: "full-gray",
      titleColor: colors.$otaghakGray,
      title: "تحویل کلید",
      status: TimelineStatus.Number
    }
    state.showFullWidthButton = true;
    state.fullWidthButtonLabel = 'مشاهده اقامتگاه های مشابه';
    state.fullWidthButtonCallBackFn = () => {
      this.bookingDataService.navigateToSimilarRoom();
    }
    return state;
  }
}

export const StrategyMap = new Map<bookingStatusType, any>([
  [bookingStatusType.OpenBooking, OpenBookingStrategy],
  [bookingStatusType.NewBooking, NewBookingStrategy],
  [bookingStatusType.AcceptBookingByHost, AcceptBookingByHostStrategy],
  [bookingStatusType.CancelBookingByGuest, CancelBookingByGuestStrategy],
  [bookingStatusType.CancelBookingByHost, CancelBookingByHostStrategy],
  [bookingStatusType.CancelBookingByOtaghak, CancelBookingByOtaghakStrategy],
  [bookingStatusType.ConfirmBooking, ConfirmBookingStrategy],
  [bookingStatusType.FinishedBooking, FinishedBookingStrategy],
  [bookingStatusType.RejectBookingByGuest, RejectBookingByGuestStrategy],
  [bookingStatusType.RejectBookingByHost, RejectBookingByHostStrategy],
  [bookingStatusType.RejectBookingByOtaghak, RejectBookingByOtaghakStrategy],
  [bookingStatusType.UnpaidBooking, UnpaidBookingStrategy],
]);


