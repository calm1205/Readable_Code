/**
 * bad
 *
 * 判断や処理のロジックを直接if文に書き込む
 *
 */
{
  /** コンパイルエラーを回避するためのオブジェクト */
  const customerType = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    equals: (_: string) => {
      return true;
    },
  };

  const baseFee = 3_000;
  let fee;

  /** if文の中に直接ロジックを書いている。 */
  if (customerType.equals('child')) {
    fee = baseFee * 0.5;
  }

  console.log(fee);
}
