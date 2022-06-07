/**
 * bad
 *
 * else句の乱立
 * ローカル変数を定義して変更を繰り返している
 *
 */
{
  const isChild = () => true;
  const isAdult = () => true;
  const isSenior = () => true;

  const childFee = 3_000;
  const adultFee = 3_000;
  const seniorFee = 3_000;

  const fee = () => {
    let result = 0;

    if (isChild()) {
      result = childFee;
    } else if (isAdult()) {
      result = adultFee;
    } else if (isSenior()) {
      result = seniorFee;
    } else {
      return result;
    }
  };

  fee();
}
