module.exports = function getZerosCount(number, base) {
  let innerbase = base;
  let multiplier = 2;
  const simpleMultipliers = new Map();
  
  while (multiplier <= innerbase){
    const remainder = innerbase % multiplier;
    let powCounter = 0;
    if (!remainder){
      while (!(innerbase % multiplier)){
        powCounter++;
        innerbase /= multiplier;
      }
      simpleMultipliers.set(multiplier,powCounter);
    } else multiplier++;
  }

  const dividersCounter = (number, multipliers) => {
    let zeroes = Number.MAX_SAFE_INTEGER;
    for (let [multiplier, pow] of multipliers){
      let counter = 0;
      let i = 1; 
      do {
        denominator = Math.pow(multiplier, i);
        counter += Math.trunc(number / denominator);
        i++;
      } while (number / denominator >= 1);
      zeroes = Math.min(zeroes, Math.trunc(counter / pow));
    }
    return zeroes;
  };
  return dividersCounter(number, simpleMultipliers);
}
