// Returns a random DNA base
// Most header documents generatied by Mintlify.
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
  
  
  
 /**
  * The `pAequorFactory` function creates objects representing specimens of a fictional organism,
  * allowing for mutation, DNA comparison, and survival probability calculation.
  * @param specimenNum - The specimenNum parameter is the number assigned to a specific specimen of
  * pAequor. It is used to identify and differentiate between different specimens.
  * @param bases - The `bases` parameter represents an array of DNA bases. Each base can be one of four
  * options: 'A', 'T', 'C', or 'G'.
  * @returns The `pAequorFactory` function returns an object with properties and methods related to a
  * specimen of pAequor.
  */
  let pAequorFactory = function (specimenNum, bases) {
    return {

      specimenNum : specimenNum,
      bases : bases,


     /* The `mutate()` function is a method of the `pAequorFactory` object. It is used to randomly
     change one base in the DNA sequence of the pAequor specimen. */
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
      
     /* The `compareDNA` method is used to compare the DNA of two pAequor specimens. It takes another
     pAequor object as a parameter (`_pAequor`) and calculates the percentage of DNA bases that are
     the same between the two specimens. */
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

      
       /* The function "willLikelySurvive" checks if the percentage of 'C' and 'G' bases in a given
       * sequence is at least 60%.
       * @returns The function will return a boolean value. If the percentage of 'C' and 'G' bases in
       * the given array is greater than or equal to 60%, it will return true. Otherwise, it will
       * return false.
       */
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


  /**
   * The function `getThirtyViableBases` generates and checks 30 DNA strands for viability, and logs
   * the results.
   * @param _loopCount - The _loopCount parameter is used to keep track of the number of times the
   * function has been called or the current iteration of the loop. It is passed as an argument to the
   * function.
   * @returns a boolean value. If the condition `pAequor.willLikelySurvive()` is true, it returns
   * `true`. Otherwise, it returns `false`.
   */
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
  