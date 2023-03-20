// Изучи тесты `spec/snils.spec.js`
// Чтобы понимать как должны работать твои методы.

// Определи, есть ли во входной строке номер СНИЛС.
function hasSNILS(string) {
    let regExp = /\d{3}-\d{3}-\d{3}\s\d{2}(\D|$)/;
    return regExp.test(string)
}

// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {
    let regExp = /\d{3}-\d{3}-\d{3}\s\d{2}(\D|$)/;
    let newstring = regExp.exec(string).join("");
    let snils = newstring.slice(0, 14);
    return snils;
}

// Найди и верни все номера СНИЛС, что есть в строке.
// function grabAllSNILS(string) {
//     let regExp = /\d{3}-\d{3}-\d{3}\s\d{2}/g;
//     let snils = string.match(regExp);
//     return snils;
// }

function grabAllSNILS(string) {
    let regExp = /\d{3}-\d{3}-\d{3}\s\d{2}(\D|$)/g;
    let arr = string.match(regExp);
        if (arr === null) {return null}
        else { let snils = [];
            arr.forEach(el => {
                let s = el.slice(0, 14);
                snils.push(s);
            });
            return snils;}
    }

//console.log(grabAllSNILS("The numbers are 350-802-074 94, 234-600-142 22, and 013-605-876 94"))

// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {
    let regExp = /(\d{3}-\d{3}-\d{3})\s(\d{2})(\D|$)/g;
    return string.replace(regExp, `XXX-XXX-XXX $2$3`)
}

// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.
function formatSNILS(string) {}

module.exports = {
  hasSNILS,
  grabSNILS,
  grabAllSNILS,
  hideAllSNILS,
  formatSNILS,
};
