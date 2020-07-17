//Caesar Cipher and Caesar Cipher 2
//parameter 1 is the string, parameter 2 is the value to shift, but it must be 26 or less
function cipher(text, shift) {
  var cipher_string = "";
  for (var i = 0; i < text.length; i++) {
    var z = text.charAt(i).charCodeAt(text);
    if (shift > 0) {
      // console.log(z);
      if (z === 32) {
        cipher_string += String.fromCharCode(z);
      } else if (z >= 97 && z <= 122) {
        var zs = text.charAt(i).charCodeAt(text) + shift;
        if (122 - zs < 0) {
          zs = zs - 122 - 1 + 97;
        } else {
        }
        cipher_string += String.fromCharCode(zs);
      } else if (z >= 65 && z <= 90) {
        var zs = text.charAt(i).charCodeAt(text) + shift;
        if (90 - zs < 0) {
          zs = zs - 90 - 1 + 65;
        } else {
        }
        cipher_string += String.fromCharCode(zs);
      }
    } else if (shift < 0) {
      if (z === 32) {
        cipher_string += String.fromCharCode(z);
      } else if (z >= 97 && z <= 122) {
        var zs = text.charAt(i).charCodeAt(text) + shift;
        // console.log(z);
        if (zs - 97 < 0) {
          zs = 122 - (97 - zs - 1);
        } else {
        }
        cipher_string += String.fromCharCode(zs);
      } else if (z >= 65 && z <= 90) {
        var zs = text.charAt(i).charCodeAt(text) + shift;
        // console.log(z);
        if (zs - 65 < 0) {
          zs = 90 - (65 - zs - 1);
        } else {
        }
        cipher_string += String.fromCharCode(zs);
      }
    } else {
    }
  }
  //console.log(cipher_string);
  // Unicode A - Z : 65 - 90
  // Unicode a - z : 97 - 122
  // console.log(String.fromCharCode(92));
}
cipher("Genius without education is like silver in the mine", 13);
cipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", -13);
