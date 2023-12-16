import { TimeLineModel } from "../strategies/time-line.model";

export class BookingPageStatusModel {
  timeLineModel!: TimeLineModel[];
  showAlertSection!: boolean;
  alert?: { type: 'success' | 'warn' | 'error' | 'default', description: string };
  showChatWithHost!: boolean;
  showPassengerTab!: boolean;
  showAcceptOtaghakTerms!: boolean;
  showDiscountSection!: boolean;
  showPaymentSection!: boolean;
  showDownloadVoucherButton!: boolean;
  showSubmitComment!: boolean;
  submitButtonLabel!: string;
  submitButtonCallBackFn!: Function;
  secondActionLabel!: string;
  secondActionCallBackFn!: Function;
  showFullWidthButton!: boolean;
  fullWidthButtonLabel!: string;
  fullWidthButtonCallBackFn!: Function
}
