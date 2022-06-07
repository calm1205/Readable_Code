/**
 * good
 *
 * chargeメソッドは受け取ったドメインがどの種類か違いを意識する必要がない。
 *
 */
abstract class GoodFee {
  abstract fee(): number;
}

export class GoodChild extends GoodFee {
  public fee() {
    return 3_000;
  }
}
export class GoodAdult extends GoodFee {
  public fee() {
    return 3_000;
  }
}
export class GoodSenior extends GoodFee {
  public fee() {
    return 3_000;
  }
}

{
  const fee = new GoodChild();

  const charge = (fee: GoodFee) => {
    return fee.fee;
  };

  charge(fee);
}
