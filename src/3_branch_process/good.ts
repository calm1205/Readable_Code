/**
 * good
 *
 * 判断や処理のロジックをメソッドに抽出
 *
 */
{
  const isChild = () => true;

  const baseFee = 3_000;
  let fee;

  /** if文の分岐ロジックをメソッドに抽出 */
  if (isChild()) {
    fee = baseFee * 0.5;
  }

  console.log(fee);
}
