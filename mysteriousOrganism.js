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
      },

      willLikelySurvive() {
       let cAndgCounter = 0;
        for (i = 0; i < bases.length-1; i++) {
          
          if (bases[i] == 'C' || bases[i] == 'G') {
            cAndgCounter++;
          };
        };
        cAndgCounter = (cAndgCounter/bases.length) *100;
        survivorPercentage = cAndgCounter;
        if (cAndgCounter >= 60) {
          //console.log(cAndgCounter);
          //console.log(bases);
          return true
        } else {
          return false
        }
      }
    };
  };


/*
let pAequor1 = pAequorFactory(1, mockUpStrand());
console.table(pAequor1);
let pAequor2 = pAequorFactory(2, mockUpStrand());
console.table(pAequor2);
pAequor1.compareDNA(pAequor2);
console.log(pAequor1.willLikelySurvive());  
  */

  survivorPercentage = 0; //https://web.dev/articles/global-and-local-scope.
  let survivorArray = [];
  let loopCount = 0;
  for (let i = 0; i < 30; i++) {
   while (!getThirtyViableBases(loopCount = i));
    }

  function getThirtyViableBases (_loopCount) {
    let pAequor = null;
    pAequor = pAequorFactory(1, mockUpStrand());
    if (pAequor.willLikelySurvive()) {
      survivorArray.push(pAequor.bases);
      console.log(_loopCount + ': ' + pAequor.bases + ' with ' + survivorPercentage + '% c or g bases in common');
      return true;
    } else {
      console.log('False at i = ' + _loopCount + ': ' + pAequor.bases + ' with ' + survivorPercentage + '% c or g bases in common');
      return false;
    };
  };
  
   /* pAequor = pAequorFactory(1, mockUpStrand());    
    } while(!pAequor.willLikelySurvive());
    survivorArray.push(pAequor.bases);
    console.log(pAequor.bases);*/
  