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
      do {
        basePositionToChange = Math.floor(Math.random() * 15)
        baseToChange = bases[basePositionToChange];
        randomSingleBase = returnRandBase();
      } while (baseToChange === randomSingleBase);       
      bases[basePositionToChange] = randomSingleBase;
      return bases;
    } 
  };
};

let testObject = pAequorFactory(2, mockUpStrand());
console.table(testObject);

console.table(testObject.mutate());
  
  
  
  