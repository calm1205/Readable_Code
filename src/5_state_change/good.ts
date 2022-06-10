import { Status } from './types';
/**
 *
 * good simple
 *
 * 状態遷移の定義
 */
{
  const _statusTransition: { [key in Status]: Status[] } = {
    Examination: ['Approval', 'Remand'],
    Approval: ['InProgress', 'Finish'],
    Remand: ['Examination', 'Finish'],
    InProgress: ['Suspended', 'Finish'],
    Suspended: ['InProgress', 'Finish'],
    Finish: [],
  };

  /**
   * 状態遷移が可能か判断
   */
  const _canTransition = (from: Status, to: Status) => {
    const allowdStatus = _statusTransition[from];
    return allowdStatus.includes(to);
  };

  console.log(_canTransition('Examination', 'Approval'));
  console.log(_canTransition('Examination', 'Finish'));
}
