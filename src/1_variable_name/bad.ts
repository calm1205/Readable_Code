/**
 *
 * bad
 *
 * 名前が省略されている。
 * 切れ目がはっきりしない。
 *
 */
{
  const qty = 3000;
  const up = 5000;
  let price = qty * up;
  if (price < 3000) price += 500; //送料
  price = price * 1.1; // 消費税
}
