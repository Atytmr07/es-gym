declare module "iyzipay" {
  interface IyzipayOptions {
    apiKey: string;
    secretKey: string;
    uri: string;
  }

  interface Buyer {
    id: string;
    name: string;
    surname: string;
    email: string;
    identityNumber: string;
    registrationAddress: string;
    ip: string;
    city: string;
    country: string;
    zipCode?: string;
    gsmNumber?: string;
  }

  interface Address {
    contactName: string;
    city: string;
    country: string;
    address: string;
    zipCode?: string;
  }

  interface BasketItem {
    id: string;
    name: string;
    category1: string;
    category2?: string;
    itemType: string;
    price: string;
  }

  interface CheckoutFormInitializeRequest {
    locale?: string;
    conversationId?: string;
    price: string;
    paidPrice: string;
    currency?: string;
    basketId?: string;
    paymentGroup?: string;
    callbackUrl: string;
    enabledInstallments?: number[];
    buyer: Buyer;
    shippingAddress: Address;
    billingAddress: Address;
    basketItems: BasketItem[];
  }

  interface CheckoutFormResult {
    status: string;
    locale?: string;
    systemTime?: number;
    conversationId?: string;
    token?: string;
    checkoutFormContent?: string;
    tokenExpireTime?: number;
    paymentPageUrl?: string;
    errorCode?: string;
    errorMessage?: string;
    errorGroup?: string;
  }

  interface CheckoutFormRetrieveRequest {
    locale?: string;
    conversationId?: string;
    token: string;
  }

  interface PaymentItem {
    itemId: string;
    paymentTransactionId: string;
    price: string;
    paidPrice: string;
  }

  interface CheckoutFormPaymentResult {
    status: string;
    locale?: string;
    systemTime?: number;
    conversationId?: string;
    token?: string;
    paymentId?: string;
    price?: string;
    paidPrice?: string;
    currency?: string;
    installment?: number;
    basketId?: string;
    paymentStatus?: string;
    fraudStatus?: number;
    merchantCommissionRate?: number;
    merchantCommissionRateAmount?: number;
    iyziCommissionRateAmount?: number;
    iyziCommissionFee?: number;
    cardType?: string;
    cardAssociation?: string;
    cardFamily?: string;
    cardToken?: string;
    cardUserKey?: string;
    binNumber?: string;
    lastFourDigits?: string;
    paymentItems?: PaymentItem[];
    errorCode?: string;
    errorMessage?: string;
    errorGroup?: string;
  }

  interface CheckoutFormInitialize {
    create(
      request: CheckoutFormInitializeRequest,
      callback: (err: Error | null, result: CheckoutFormResult) => void
    ): void;
  }

  interface CheckoutFormResult2 {
    retrieve(
      request: CheckoutFormRetrieveRequest,
      callback: (err: Error | null, result: CheckoutFormPaymentResult) => void
    ): void;
  }

  class Iyzipay {
    static LOCALE: { TR: string; EN: string };
    static CURRENCY: { TRY: string; EUR: string; USD: string; GBP: string };
    static PAYMENT_GROUP: { PRODUCT: string; LISTING: string; SUBSCRIPTION: string };
    static BASKET_ITEM_TYPE: { PHYSICAL: string; VIRTUAL: string };

    checkoutFormInitialize: CheckoutFormInitialize;
    checkoutFormResult: CheckoutFormResult2;

    constructor(options: IyzipayOptions);
  }

  export = Iyzipay;
}
