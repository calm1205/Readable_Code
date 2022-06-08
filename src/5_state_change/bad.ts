/**
 *
 * bad
 *
 * 状態遷移の定義
 *
 * 以下の状態遷移の仕様があったとする。
 * 全ての状態（審査中、承認済、差戻中、実施中、中断中、終了）
 *
 * - 今の状態(遷移できる状態)
 *
 * - 審査中(承認済、差戻中)
 * - 承認済(実施中、終了)
 * - 差戻中(審査中、終了)
 * - 実施中(中断中、終了)
 * - 中断中(実施中、終了)
 * - 終了 (なし)
 *
 */
{
  type Status =
    | 'Examination' // 審査中
    | 'Approval' // 承認済
    | 'Remand' // 差戻中
    | 'InProgress' // 実施中
    | 'Suspended' // 中断中
    | 'Finish'; // 終了

  const examination = {};

  const statusChange = {
    Examination: { Approval: 'Approval', Remand: 'Remand' },
    Approval: examination,
    Remand: examination,
    InProgress: examination,
    Suspended: examination,
    Finish: examination,
  } as const;

  const nowStatus: Status = 'Examination';
  const nextStatus: Status = statusChange[nowStatus].Approval;

  console.log(nextStatus);
}
