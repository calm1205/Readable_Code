/**
 * bad
 *
 * value object
 *
 * オブジェクトの変更メソッド（setter）が存在する。
 * 値（内部の状態）を変更できるオブジェクトは、変更と参照のタイミングによって思わぬ副作用を生む。
 * 別の値が必要になったら新しいオブジェクトを生成するのが望ましい。
 *
 * １つの値を使い回す方が効率的に見えるが、
 * 値が変わることを前提にするといつどのタイミングでどんな値が入っているか不安定になる。
 * 値ごとに別々にオブジェクトを生成することでそのような心配ごとから開放される。
 *
 */

class BadPrice {
  static MIN = 1;
  static MAX = 1_000_000_000;

  private _value = 0;

  constructor(input: number) {
    if (this._valid(input)) this._value = input;
  }

  get value() {
    return this._value;
  }

  set value(input: number) {
    this._value = input;
  }

  private _valid(value: number) {
    this._min_valid(value);
    this._max_valid(value);
    return true;
  }

  private _min_valid(value: number) {
    if (value < BadPrice.MIN)
      throw new Error('金額は1円以上である必要があります。');
  }

  private _max_valid(value: number) {
    if (value > BadPrice.MAX)
      throw new Error('金額は10億円以下である必要があります。');
  }
}

{
  const price = new BadPrice(9_000);
  price.value = 10_000; // 値の書き換えが発生している。
  console.log(price.value);
}
