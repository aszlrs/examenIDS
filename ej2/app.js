function countDiffs(cadena1, text2) {
    let diffs = 0;

    for (let i=0; i<cadena1.length; i++) {
        if (cadena1[i] !== text2[i]) {diffs++; }
    }
    return diffs;
}

let text1 = "abcdefghijk";
let text2 = "asdfdfssddd";

console.log(countDiffs(text1,text2));

