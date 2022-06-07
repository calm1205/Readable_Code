import { GoodPrice } from './good';

/**
 * 他の場所で活用する時もvalue objectを活用する
 */
{
  /** 消費税込みの価格をreturn */
  const taxRate = (price: GoodPrice) => {
    const _taxRate = 1.1;

    return price.value * _taxRate;
  };

  const basePrice = new GoodPrice(1_000);
  const itemPrice = taxRate(basePrice);

  console.log('消費税込みの価格', itemPrice);
}
