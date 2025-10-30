class ValidatorBooking {
  validateBooking(startDate: Date, endDate: Date) {
    if (startDate >= endDate) {
      throw new Error("Data de check-out deve ser após a data de check-in");
    }
  }
}

class CalculateBookingPrice {
  calculatePrice(startDate: Date, endDate: Date, dailyRate: number) {
    const tripDuration = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const tripPrice = dailyRate * tripDuration;

    return console.log(`Preço total calculado: R$${tripPrice}`);
  }
}

class BookingSendingEmail {
  sendEmail(email: string) {
    console.log(`Enviando e-mail de confirmação para ${email}`);
  }
}

class serviceBooking {
  constructor(
    private validator: ValidatorBooking,
    private calculator: CalculateBookingPrice,
    private emailConfirm: BookingSendingEmail
  ) {}

  processBooking(bookingDetails: any) {
    this.validator.validateBooking(
      bookingDetails.startDate,
      bookingDetails.endDate
    );

    const totalPrice = this.calculator.calculatePrice(
      bookingDetails.startDate,
      bookingDetails.endDat,
      bookingDetails.dailyRate
    );
    console.log(`Preço total calculado: R$${totalPrice}`);

    this.emailConfirm.sendEmail(bookingDetails.email);
  }
}
