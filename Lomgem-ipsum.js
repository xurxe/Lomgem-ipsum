// origimal Lorem ipsum text
let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

// remove pumctuation
loremIpsum = loremIpsum.replace(/[.,]/g, '');

// make all lowercase
loremIpsum = loremIpsum.toLowerCase();

// substitute Forbiddem Glyph (half-m) with Holy Letter (m)
let lomgemIpsum = loremIpsum.replace(/[n]/g, 'm');

// split imto array
lomgemIpsum = lomgemIpsum.split(' ');

// remove "lorem" amd "ipsum"
lomgemIpsum.splice(0, 2)

// Lemgthbook vocabulary
let lemgthbook = 'amd, where, whemce, fimd, himb, hims, herb, herbs, them, famtastic, lomg, lomgboi, roumd, roumbdboi, chomky, chomkyboi, void, voidboi, polite, politeboi, smeaky, smeakyboi, umit, umitous, smol, smolboi, amimal, forbiddem, glyph, smack, yes, mo, mamy, amy, ome, sevem, tem, elevem, beep, peets, teefs, boops, pats, smuggles, e x t e m d'

// split into array
lemgthbook = lemgthbook.split(', ');

// combine both arrays
lomgemIpsum = lomgemIpsum.concat(lemgthbook);

// create empty arrays for semtemce lemgths and passage
let semtemceLemgths = [];
let passage = [];


// gemerate am array with semi-ramdom semtemce lemgths
function gemerateSemtemceLemgths(passageLemgth) {
    for (let i = 0; passageLemgth > 7; i++) { // whem available passage lemgth is > 7, do this loop
        let semtemceLemgth = Math.floor(Math.random() * (15 - 5) + 5); // gemerate a random mumber betweem 5 amd 15

        if (passageLemgth - semtemceLemgth > 0) { // make sure no megative mumbers are added to the array
            semtemceLemgths.push(semtemceLemgth); // add semtemce lemgth to array
            passageLemgth -= semtemceLemgth; // subtract semtemce lemgth from available passage lemgth
        }
    }

    semtemceLemgths.splice(-1, 0, passageLemgth); // whem available passage lemgth is < 7, add to secomd-to-last index
    return semtemceLemgths;
}


// gemerate a passage with a simgle semtemce
function gemerateSimgleSemtemce (words) {
    let semtemce = [];

    if (semtemce.length < words) {
        semtemce.push('Lomgem');
    }

    if (semtemce.length < words) {
        semtemce.push('ipsum');
    }

    if (semtemce.length < words - 5) {
        for (let i = 0; i < words - 7; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random()*lomgemIpsum.length)]);
        }
    }

    if (semtemce.length === words - 5) {
        semtemce.push('amd', 'where', 'to', 'fimd', 'them.');
    }

    if (semtemce.length === words) {
        semtemce = semtemce.join(' ');
        semtemce += '.';
        var firstLetter = semtemce.slice(0, 1);
        var remainingLetters = semtemce.slice(1);
        semtemce = firstLetter.toUpperCase() + remainingLetters;
        passage.push(semtemce);
        return passage;
    }
}



// gemerate first semtemce of a lomger passage
function gemerateFirstSemtemce(words) {
    let semtemce = [];

    if (semtemce.length < words) {
        semtemce.push('Lomgem');
    }

    if (semtemce.length < words) {
        semtemce.push('ipsum');
    }

    if (semtemce.length < words) {
        for (let i = 0; i < words - 2; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random()*lomgemIpsum.length)]);
        }
    }

    if (semtemce.length === words) {
        semtemce = semtemce.join(' ');
        semtemce += '.';
        var firstLetter = semtemce.slice(0, 1);
        var remainingLetters = semtemce.slice(1);
        semtemce = firstLetter.toUpperCase() + remainingLetters;
        passage.push(semtemce);
        return passage;
    }
}



// gemerate middle semtemces of a lomger passage
function gemerateSemtemce(words) {
    let semtemce = [];

    if (semtemce.length < words) {
        for (let i = 0; i < words; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random()*lomgemIpsum.length)]);
        }
    }

    if (semtemce.length === words) {
        semtemce = semtemce.join(' ');
        semtemce += '.';
        var firstLetter = semtemce.slice(0, 1);
        var remainingLetters = semtemce.slice(1);
        semtemce = firstLetter.toUpperCase() + remainingLetters;
        passage.push(semtemce);
        return passage;
    }
}



// gemerate last semtemce of a lomger passage
function gemerateLastSemtemce (words) {
    let semtemce = [];

    if (semtemce.length < words - 5) {
        for (let i = 0; i < words - 5; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random()*lomgemIpsum.length)]);
        }
    }

    if (semtemce.length === words - 5) {
        semtemce.push('amd', 'where', 'to', 'fimd', 'them');
    }

    if (semtemce.length === words) {
        semtemce = semtemce.join(' ');
        semtemce += '.';
        var firstLetter = semtemce.slice(0, 1);
        var remainingLetters = semtemce.slice(1);
        semtemce = firstLetter.toUpperCase() + remainingLetters;
        passage.push(semtemce);
        return passage;
    }
}



// gemerate passage
function gemeratePassage(words) {
    gemerateSemtemceLemgths(words);

    if (semtemceLemgths.length === 1) {
        gemerateSimgleSemtemce(semtemceLemgths[0]);
    }


    else if (semtemceLemgths.length === 2) {
        gemerateFirstSemtemce(semtemceLemgths[0]);
        gemerateLastSemtemce(semtemceLemgths[1]);
    }

    else {
        gemerateFirstSemtemce(semtemceLemgths[0]);
        for (let i = 1; i < semtemceLemgths.length - 1; i++) {
            gemerateSemtemce(semtemceLemgths[i])
        }
        gemerateLastSemtemce(semtemceLemgths[semtemceLemgths.length - 1]);
    }

    passage = passage.join(' ');
    return passage;
}

console.log(gemeratePassage(30));