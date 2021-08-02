// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// NO REGEX
// function maskify(str) {
//   let masked = str;
//   if (str.length == 4) {
//     return str;
//   } else {
//     masked = new Array(str.length - 3).join("#");
//     masked += str.substring(str.length - 4);
//     return masked;
//   }
// }

// REG EX

function maskify(str) {
  if (str.length == 4) {
    return str;
  } else {
    let duzina = str.length - 4;
    let last4 = str.substring(str.length - 4);
    let mask = str.substring(0, duzina).replace(/\d/g, "#");
    return mask + last4;
  }
}

console.log(maskify("12345678"));
