/**
 *
 * Good
 *
 * 名前が省略されていない。
 * 切れ目がはっきり。
 * 目的ごとに変数が定義されている。
 *
 */
{
  const quantity = 3000;
  const unitPrice = 5000;
  const taxRate = 1.1;

  const basePrice = quantity * unitPrice;

  let shippingCost = 0;
  if (basePrice < 3000) shippingCost = 500;

  const itemPrice = (basePrice + shippingCost) * taxRate;

  console.log(itemPrice);
}
