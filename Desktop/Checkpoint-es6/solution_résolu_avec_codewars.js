function add(num1, num2) {
    let result = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        const sum = digit1 + digit2 + carry;
        result = (sum % 10).toString() + result;
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }

    return result;
}

// Test cases
console.log(add("123", "321")); // Output: "444"
console.log(add("11", "99"));   // Output: "110"
39 minutes agoRefactoriser
4 kyu
Somme des chaînes sous forme de nombres
Javascript :
function sumStrings(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    
    while (i >= 0 || j >= 0 || carry > 0) {
        const num1 = i >= 0 ? parseInt(a[i]) : 0;
        const num2 = j >= 0 ? parseInt(b[j]) : 0;
        const sum = num1 + num2 + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }
    
    return result.replace(/^0+/, '') || '0';
}

// Test cases
console.log(sumStrings('1', '2'));  // Output: '3'
console.log(sumStrings('123', '456'));  // Output: '579'
43 minutes agoRefactoriser
5 kyu
Pourriture13
Javascript :
function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function(char) {
        const charCode = char.charCodeAt(0);
        let offset = 13;
        if ((char >= 'A' && char <= 'Z' && charCode + offset > 90) ||
            (char >= 'a' && char <= 'z' && charCode + offset > 122)) {
            offset -= 26;
        }
        return String.fromCharCode(charCode + offset);
    });
}

// Test cases
console.log(rot13("Hello"));  // Output: "Uryyb"
console.log(rot13("abcXYZ")); // Output: "nopKLM"
1 hour agoRefactoriser
4 kyu
Somme des intervalles
Javascript :
function sumIntervals(intervals) {
    // Sort intervals based on the starting value
    intervals.sort((a, b) => a[0] - b[0]);
    
    let totalLength = 0;
    let currentStart = intervals[0][0];
    let currentEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        
        if (start <= currentEnd) {
            currentEnd = Math.max(currentEnd, end);
        } else {
            totalLength += currentEnd - currentStart;
            currentStart = start;
            currentEnd = end;
        }
    }

    // Add the length of the last interval
    totalLength += currentEnd - currentStart;
    
    return totalLength;
}

// Test cases
console.log(sumIntervals([[1, 2], [6, 10], [11, 15]]));  // Output: 9
console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]));    // Output: 7
console.log(sumIntervals([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]]));  // Output: 19
console.log(sumIntervals([[0, 20], [-100000000, 10], [30, 40]]));  // Output: 100000030
1 hour agoRefactoriser
4 kyu
Format de durée lisible par l'homme
Javascript :
function formatDuration(seconds) {
    if (seconds === 0) return "now";

    const intervals = [['year', 365 * 24 * 60 * 60],
                       ['day', 24 * 60 * 60],
                       ['hour', 60 * 60],
                       ['minute', 60],
                       ['second', 1]];
    const result = [];

    for (const [name, count] of intervals) {
        const value = Math.floor(seconds / count);
        if (value) {
            result.push(`${value} ${name}${value > 1 ? 's' : ''}`);
            seconds -= value * count;
        }
    }

    return result.length > 1 ? result.slice(0, -1).join(', ') + " and " + result.slice(-1) : result[0];
}

// Test cases
console.log(formatDuration(62));      // Output: "1 minute and 2 seconds"
console.log(formatDuration(3662));    // Output: "1 hour, 1 minute and 2 seconds"
1 hour agoRefactoriser
5 kyu
Extraire le nom de domaine d'une URL
Javascript :
function domainName(url) {
    // Remove the protocol part
    let domain = url.replace(/(http[s]?:\/\/)?(www\.)?/, '');

    // Remove everything after the first forward slash
    domain = domain.split('/')[0];

    // Remove any subdomains
    domain = domain.split('.')[0];

    return domain;
}
1 hour agoRefactoriser
6 kilos
Remplacer par la position alphabétique
Javascript :
function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return text.toLowerCase()
        .split('')
        .filter(char => /[a-z]/.test(char))
        .map(char => alphabet.indexOf(char) + 1)
        .join(' ');
}
1 hour agoRefactoriser
6 kilos
Encodeur de chiffres romains
Javascript :
function solution(number) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

    romanNumerals.forEach(roman => {
        while (number >= roman.value) {
            result += roman.symbol;
            number -= roman.value;
        }
    });

    return result;
}
1 hour agoRefactoriser
6 kilos
Diviser les chaînes
Javascript :
function solution(str) {
    const pairs = [];
    for (let i = 0; i < str.length; i += 2) {
        pairs.push(str.slice(i, i + 2));
    }
    if (str.length % 2 !== 0) {
        pairs[pairs.length - 1] += '_';
    }
    return pairs;
}
1 hour agoRefactoriser
6 kilos
Jouer avec les chiffres
Javascript :
function digPow(n, p) {
    const digits = String(n).split('');
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(Number(digits[i]), p + i);
    }

    const k = sum / n;

    return Number.isInteger(k) ? k : -1;
}
1 hour agoRefactoriser
6 kilos
Unique dans l'ordre
Javascript :
function uniqueInOrder(sequence) {
  if (!sequence || sequence.length === 0) {
    return [];
  }

  let result = [sequence[0]];
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] !== sequence[i - 1]) {
      result.push(sequence[i]);
    }
  }

  return result;
}
1 hour agoRefactoriser
6 kilos
Compter les doublons
Javascript :
function duplicateCount(input) {
  const charCount = {};

  // Convert input to lowercase to handle case-insensitivity
  input = input.toLowerCase();

  // Count occurrences of each character
  for (let char of input) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Count characters that occur more than once
  let duplicatesCount = 0;
  for (let char in charCount) {
    if (charCount[char] > 1) {
      duplicatesCount++;
    }
  }

  return duplicatesCount;
}

1 hour agoRefactoriser
6 kilos
Deux somme
Javascript :
function twoSum(numbers, target) {
  const indices = {};

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (indices.hasOwnProperty(complement)) {
      return [indices[complement], i];
    }
    indices[numbers[i]] = i;
  }
}
2 hours agoRefactoriser
7 kilos
Impair ou pair?
Javascript :
function oddOrEven(array) {
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  return sum % 2 === 0 ? 'even' : 'odd';
}
2 hours agoRefactoriserDiscuter
7 kilos
Mettre au carré chaque chiffre
Javascript :
function squareDigits(num) {
  const squaredDigits = String(num).split('').map(digit => Math.pow(parseInt(digit), 2)).join('');
  return parseInt(squaredDigits);
}
2 hours agoRefactoriser
7 kyu
Descending Order
JavaScript:
function descendingOrder(n) {
  return parseInt(String(n).split('').sort((a, b) => b - a).join(''));
}
2 hours agoRefactor
6 kyu
Detect Pangram
JavaScript:
function isPangram(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const seen = new Set();

  for (let char of sentence.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      seen.add(char);
    }
  }

  return alphabet.split('').every(letter => seen.has(letter));
}
2 hours agoRefactor
7 kyu
Jaden Casing Strings
JavaScript:
String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
2 hours agoRefactor
8 kyu
Square(n) Sum
JavaScript:
function squareSum(numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}
2 hours agoRefactor
7 kyu
Leap Years
JavaScript:

  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
2 hours agoRefactor
8 kyu
Even or Odd
JavaScript:
function evenOrOdd(number) {
   if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
  