/**
 * bad
 *
 * else句の乱立
 * 即リターン
 *
 */
{
  const isChild = () => true;
  const isAdult = () => true;
  // const isSenior = () => true;

  const childFee = 3_000;
  const adultFee = 3_000;
  const seniorFee = 3_000;

  const fee = () => {
    if (isChild()) {
      return childFee;
    } else if (isAdult()) {
      return adultFee;
    } else {
      return seniorFee;
    }
  };

  fee();
}
