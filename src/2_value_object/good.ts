/**
 * good
 *
 * value object
 *
 * そもそも不正な値が入らないようにする。
 *
 */

export class GoodPrice {
  static MIN = 1;
  static MAX = 1_000_000_000;

  private _value = 0;

  constructor(input: number) {
    if (this._valid(input)) this._value = input;
  }

  get value() {
    return this._value;
  }

  public minus(input: number) {
    return new GoodPrice(this._value - input);
  }

  private _valid(value: number) {
    this._min_valid(value);
    this._max_valid(value);
    return true;
  }

  private _min_valid(value: number) {
    if (value < GoodPrice.MIN)
      throw new Error('金額は1円以上である必要があります。');
  }

  private _max_valid(value: number) {
    if (value > GoodPrice.MAX)
      throw new Error('金額は10億円以下である必要があります。');
  }
}

// {
//   const price = new GoodPrice(9_000);
//   console.log('最初のprice', price.value);

//   const updatedPrice = price.minus(1_000);
//   console.log('値変更後のprice', updatedPrice.value);
//   console.log('最初のprice', price.value);

//   const errorPrice = new GoodPrice(0); // Error
//   console.log(errorPrice.value);
// }
