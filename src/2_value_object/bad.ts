/**
 * bad
 *
 * 料金(price)をnumberで扱う
 * 純粋なnumberだと +- 21億程度の値が代入できてしまう。
 * 業務上そこまで大きな値は入らない。
 *
 * 業務の関心事とかけ離れた異常な値を扱えてしまうことがバグに繋がる。
 *
 */
{
  const price = 9_000;
  const shippingCost = 1_000;

  const itemPrice = price + shippingCost;

  console.log(itemPrice);
}
