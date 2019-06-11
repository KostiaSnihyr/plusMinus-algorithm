function plusMinus(num) {
    var numsSt = '' + num;
    var numsStshort = numsSt.slice(1, numsSt.length);
    var nums = numsSt.split('').map(Number);
    var allVariantsArray = []
    var allNumsArray = [];
    var allSignsArray = [];
    var allNumsArrayShort = [];
    var allConcated = [];
    var arrOfArrShort = [];
    for(var a = 0; a <= 2 ** (nums.length - 1)-1; a++) {
      var allVar = a.toString(2);
      while (allVar.length < nums.length - 1) {
        allVar = '0' + allVar;
        if(allVar.length === nums.length - 1) {
        }
      }
      allSighns = allVar.replace(/0/g, "-").replace(/1/g, "+");
      allSignsArray.push(allSighns);
      allVariantsArray.push(allVar);
    }
    for(var b = 0; b <= 2 ** (nums.length - 1)-1; b++) {
      allNumsArray.push(String(nums).replace(/,/g, ''));
    }
    for(var c = 0; c <= 2 ** (nums.length - 1)-1; c++) {
      allNumsArrayShort.push(allNumsArray[c].slice(1, numsSt.length));
    }
    for(var d = 0; d <= 2 ** (nums.length - 1)-1; d++) {
      for(var e = 0; e < allSignsArray[d].length; e++) {
        var concated = allSignsArray[d][e].concat(allNumsArrayShort[d][e]);
        allConcated.push(Number(concated));
      }
    }
    for(var f = 0; f < 2 ** (nums.length - 1); f++) {
      var aaa = allConcated.slice(0, nums.length - 1);
      arrOfArrShort.push(aaa);
      allConcated.splice(0, nums.length - 1);
    }
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    var finalResWithNumbers; //////////// <----- VAR
    for(var g = 0; g < 2 ** (nums.length - 1); g++) {
      arrOfArrShort[g].unshift(nums[0]);
      if(arrOfArrShort[g].reduce(reducer) === 0) {
        var finalResWithNumbers1 = arrOfArrShort[g].join(',')
        finalResWithNumbers = finalResWithNumbers1;
      }
    }
    if (finalResWithNumbers === undefined) {
      return 'not possible';
    }
    // console.log(nums);
    // console.log(allNumsArray);
    // console.log(allVariantsArray);
    // console.log(allSignsArray);
    // console.log(allNumsArrayShort);
    // console.log(arrOfArrShort);
    // console.log(finalResWithNumbers);
    return finalResWithNumbers.replace(/,-1/g, "-").
                               replace(/,-2/g, "-").
                               replace(/,-3/g, "-").
                               replace(/,-4/g, "-").
                               replace(/,-5/g, "-").
                               replace(/,-6/g, "-").
                               replace(/,-7/g, "-").
                               replace(/,-8/g, "-").
                               replace(/,-9/g, "-").
                               replace(/,1/g, "+").
                               replace(/,2/g, "+").
                               replace(/,3/g, "+").
                               replace(/,4/g, "+").
                               replace(/,5/g, "+").
                               replace(/,6/g, "+").
                               replace(/,7/g, "+").
                               replace(/,8/g, "+").
                               replace(/,9/g, "+").
                               replace(/,0/g, "").
                               substr(1, finalResWithNumbers.length);
}
  
// console.log(plusMinus(1122));
var testButton = document.getElementById('test');
var inputVal = document.getElementById('inputVal');
var showResult = document.getElementById('result');

testButton.addEventListener('click', function() {

    showResult.innerText = plusMinus(inputVal.value);
    // console.log(inputVal.value);
});

