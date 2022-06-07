/**
 * good
 *
 * 早期リターン、ガード節
 * ３つのif文は順番を入れ替えても動作する。
 * なぜならif文は疎結合だから。プログラムを変更をする際にもどこを修正すべきか一目瞭然になる。
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
    if (isChild()) return childFee;
    if (isAdult()) return adultFee;
    if (isSenior()) return seniorFee;
    return 0;
  };

  fee();
}
