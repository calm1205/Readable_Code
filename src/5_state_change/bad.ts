import { Status } from './types';
/**
 *
 * bad
 *
 * 状態遷移の定義
 */
{
  /**
   * 状態遷移のロジック
   */
  const canTransition = (from: Status, to: Status) => {
    if (from === 'Examination' && ['Approval', 'Remand'].includes(to))
      return true;
    if (from === 'Approval' && ['InProgress', 'Finish'].includes(to))
      return true;
    if (from === 'Remand' && ['Examination', 'Finish'].includes(to))
      return true;
    if (from === 'InProgress' && ['Suspended', 'Finish'].includes(to))
      return true;
    if (from === 'Suspended' && ['InProgress', 'Finish'].includes(to))
      return true;

    return false;
  };

  console.log(canTransition('Examination', 'Approval'));
  console.log(canTransition('Examination', 'Finish'));
}
