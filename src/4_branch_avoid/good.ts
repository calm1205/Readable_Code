/**
 * good
 *
 * chargeメソッドは受け取ったドメインがどの種類か違いを意識する必要がない。
 * 何ならどんな種類（GoodChild,GoodAdult,GoodSenior）が存在するのかさえ知らなくていい。
 *
 */
export abstract class GoodFee {
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
  const fee = new GoodChild(); // どのオブジェクトを生成するかで if文(分岐)は発生しそう。
  // const fee = new GoodAdult();
  // const fee = new GoodSenior();

  const charge = (fee: GoodFee) => fee.fee;

  charge(fee);
}
