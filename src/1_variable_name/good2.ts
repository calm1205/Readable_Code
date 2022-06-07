/**
 *
 * Good2
 *
 * ロジックが関数で切り出されている。
 *
 */
{
  const quantity = 3_000;
  const unitPrice = 5_000;
  const taxRate = 1.1;

  const basePrice = quantity * unitPrice;

  const shippingCost = _shippingCost(basePrice);

  const itemPrice = (basePrice + shippingCost) * taxRate;
  console.log(itemPrice);
}

/** 送料の算出 */
function _shippingCost(basePrice: number) {
  if (basePrice < 3_000) return 500;
  return 0;
}
