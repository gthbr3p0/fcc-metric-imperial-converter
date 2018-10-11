/*
*
*
*       Complete the handler logic below
*       
*       
*/
var units = ['miles', 'kilometres', 'pounds', 'kilograms', 'gallons', 'litres'];
var unit = ['mi', 'km', 'lbs', 'kg', 'gal', 'l'];

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input.split(/[a-z]/);
    var decimals = 0;
    var divide = 0;
    
    for (var i in unit) {
      if (input.startsWith(unit[i])) {
        return 1
      }
    }
    
    if (isNaN(result[0][0])) return 'invalid number';
    
    for (var i in result[0]) {
      var num = result[0][i];
      if (isNaN(num)) {
        if (num == '.') decimals++;
        console.log(decimals);
        if (num == '/') divide++;
        console.log(divide);
        if (decimals > 1 || divide > 1) return 'invalid number';
        if (num !== '.' && num !== '/') return 'invalid number';
      }
    }
    
    if (result[0].includes('/')) {
      result = result[0].split('/');
      result = result[0] / result[1];
      return result;
    }
    return result[0];
  };
  
  this.getUnit = function(input) {
    if (input.length < 1) return 'invalid unit';
    input = input.toLowerCase();
    var regex1 = /[a-z]/
    var letter = regex1.exec(input);
    var index = input.indexOf(letter)
    var result = input.slice(index,);
    
    for (var i in unit) {
      if (unit[i] = result) {
        return result
      }
    }
    
    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit) {
      case 'mi': return 'km'; break;
      case 'km': return 'mi'; break;
      case 'lbs': return 'kg'; break;
      case 'kg': return 'lbs'; break;
      case 'gal': return 'l'; break;
      case 'l': return 'gal'; break;
      default:
        return 'unknown';
    }
  };

  this.spellOutUnit = function(unit) {
    switch(unit) {
      case 'mi': return 'miles'; break;
      case 'km': return 'kilometres'; break;
      case 'lbs': return 'pounds'; break;
      case 'kg': return 'kilograms'; break;
      case 'gal': return 'gallons'; break;
      case 'l': return 'litres'; break;
      default:
        return 'unknown';
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const miToKm = 1.60934;
    const lbsToKg = 0.453592;
    const galToL = 3.78541;
    switch(initUnit) {
      case 'mi': return initNum * miToKm; break;
      case 'km': return initNum / miToKm; break;
      case 'lbs': return initNum * lbsToKg; break;
      case 'kg': return initNum / lbsToKg; break;
      case 'gal': return initNum * galToL; break;
      case 'l': return initNum / galToL; break;
      default:
        return 'unknown';
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    /*returnNum = returnNum.toFixed(5);
    if (returnNum.includes('.')) returnNum = parseFloat(returnNum);
    else {returnNum = parseInt(returnNum)};*/
    
    return {initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`};
  };
  
}

module.exports = ConvertHandler;
