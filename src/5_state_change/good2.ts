import { Status, StatusObject } from './types';
/**
 * good2
 * 状態遷移の定義
 */
{
  const _: StatusObject = {
    Examination: 'Examination',
    Approval: 'Approval',
    Remand: 'Remand',
    InProgress: 'InProgress',
    Suspended: 'Suspended',
    Finish: 'Finish',
  };

  const statusTransition = new Map<Status, Set<Status>>();

  statusTransition.set('Examination', new Set([_.Approval, _.Remand]));
  statusTransition.set('Approval', new Set([_.InProgress, _.Finish]));
  statusTransition.set('Remand', new Set([_.Examination, _.Finish]));
  statusTransition.set('InProgress', new Set([_.Suspended, _.Finish]));
  statusTransition.set('Suspended', new Set([_.InProgress, _.Finish]));
  statusTransition.set('Finish', new Set());

  const canTransition = (from: Status, to: Status) => {
    const allowdStatus = statusTransition.get(from);
    return allowdStatus?.has(to);
  };

  console.log(canTransition('Examination', 'Approval'));
  console.log(canTransition('Examination', 'Finish'));
}
