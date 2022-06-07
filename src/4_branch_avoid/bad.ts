/**
 * bad
 *
 * ドメイン毎に処理を変えるための分岐処理が発生してしまっている。
 * chargeメソッドは引数がどのドメインなのか違いを意識する必要がある。
 *
 */
class BadChild {
  static fee = 3_000;
}
class BadAdult {
  static fee = 3_000;
}
class BadSenior {
  static fee = 3_000;
}

{
  type Human = 'child' | 'adult' | 'senior';
  const isChild = (_: Human) => true;
  const isAdult = (_: Human) => true;
  const isSenior = (_: Human) => true;

  const charge = (human: Human) => {
    if (isChild(human)) return BadChild.fee;
    if (isAdult(human)) return BadAdult.fee;
    if (isSenior(human)) return BadSenior.fee;
    return 0;
  };

  charge('child');
}
