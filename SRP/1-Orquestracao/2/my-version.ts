class StorageValidator {
  validate(cart: any) {
    for (const item of cart.items) {
      if (cart.stock < item.quantity) {
        throw new Error(`Produto ${item.name} sem estoque suficiente.`);
      }
    }
  }
}

class TaxCalculator {
  calculate(cart: any): number {
    let total = 0;
    for (const item of cart.item) {
      total += item.price * item.quantity;
    }

    const tax = total * 0.1;
    return total + tax;
  }
}

class PaymentProcessor {
  process(userId: string, amount: number) {
    console.log(
      `Processando pagamento de R$${amount} para o usuário ${userId}`
    );
  }
}

class ServiceCheckout {
  constructor(
    private validator: StorageValidator,
    private taxCalculator: TaxCalculator,
    private paymentProcesor: PaymentProcessor
  ) {}

  processCheckout(cart: any, userId: string) {
    this.validator.validate(cart);
    const totalWithTaxes = this.taxCalculator.calculate(cart);
    this.paymentProcesor.process(userId, totalWithTaxes);
  }
}
