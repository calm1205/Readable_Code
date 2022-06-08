import { GoodFee, GoodChild, GoodAdult, GoodSenior } from './good';

/**
 * more good
 *
 * chargeメソッドは受け取ったドメインがどの種類か違いを意識する必要がない。
 * 何ならどんな種類（GoodChild,GoodAdult,GoodSenior）が存在するのかさえ知らなくていい。
 *
 */

{
  type Human = 'child' | 'adult' | 'senior';

  /** オブジェクトの一覧、keyで生成オブジェクトを選択することでif文を回避 */
  const HumanType: { [key in Human]: GoodFee } = {
    child: new GoodChild(),
    adult: new GoodAdult(),
    senior: new GoodSenior(),
  };

  const input = 'child'; // UI上のプルダウンとかから取得した値が入る。（ユーザのinput）

  const fee = HumanType[input];

  const charge = (fee: GoodFee) => fee.fee;

  charge(fee);
}
