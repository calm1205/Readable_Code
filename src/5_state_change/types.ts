export type Status =
  | 'Examination' // 審査中
  | 'Approval' // 承認済
  | 'Remand' // 差戻中
  | 'InProgress' // 実施中
  | 'Suspended' // 中断中
  | 'Finish'; // 終了

export type StatusObject = { [key in Status]: Status };
