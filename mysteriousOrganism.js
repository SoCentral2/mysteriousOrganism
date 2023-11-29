// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  
  
  let pAequorFactory = function (specimenNum, bases) {
  return {

    specimenNum : specimenNum,
    bases : bases,


    mutate() {
      let basePositionToChange = 0;
      let baseToChange = '';
      let randomSingleBase = '';
      let returnBases = bases;
      do {
        basePositionToChange = Math.floor(Math.random() * 15)
        baseToChange = bases[basePositionToChange];
        randomSingleBase = returnRandBase();
      } while (baseToChange === randomSingleBase);       
      returnBases[basePositionToChange] = randomSingleBase;
      return returnBases;
    },
    
    compareDNA(_pAequor) {
      let basesInCommon = 0;
      console.log("_pAequor.bases.length = " + _pAequor.bases.length);
      for (i = 0; i < _pAequor.bases.length-1; i++) {
        if (bases[i] === _pAequor.bases[i]) {
          basesInCommon++;
        };
      };
      
      basesInCommon = (basesInCommon/_pAequor.bases.length)*100;
      console.log(`Specimin #1 and specimin #2 have ${basesInCommon}% DNA in common.`);
    }
  };
};

let pAequor1 = pAequorFactory(1, mockUpStrand());
console.table(pAequor1);
let pAequor2 = pAequorFactory(2, mockUpStrand());
console.table(pAequor2);
pAequor1.compareDNA(pAequor2);
  
  
  