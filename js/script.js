/* VARIABLES *********************************************************************** */

const lomgemIpsum = [
    "dolor", "sit", "amet", "comsectetur", "adipiscimg", "elit", "sed", "do", "eiusmod", "tempor", "imcididumt", "ut", "labore", "et", "dolore", "magma", "aliqua", "ut", "emim", "ad", "mimim", "vemiam", "quis", "mostrud", "exercitatiom", "ullamco", "laboris", "misi", "ut", "aliquip", "ex", "ea", "commodo", "comsequat", "duis", "aute", "irure", "dolor", "im", "reprehemderit", "im", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "mulla", "pariatur", "excepteur", "simt", "occaecat", "cupidatat", "mom", "proidemt", "sumt", "im", "culpa", "qui", "officia", "deserumt", "mollit", "amim", "id", "est", "laborum", "amd", "where", "to", "fimd", "them", "whemce", "himb", "hims", "herb", "herbs", "famtastic", "lomg", "lomgboi", "roumd", "roumbdboi", "chomky", "chomkyboi", "void", "voidboi", "polite", "politeboi", "smeaky", "smeakyboi", "umit", "umitous", "smol", "smolboi", "amimal", "forbiddem", "glyph", "smack", "yes", "mo", "mamy", "amy", "ome", "sevem", "tem", "elevem", "beep", "peets", "teefs", "boops", "pats", "smuggles", "doggo", "catto", "piggo", "ratto", "gurl", "gorl", "trash", "trashboi","e\u00A0x\u00A0t\u00A0e\u00A0m\u00A0d", "e\u00A0x\u00A0p\u00A0a\u00A0m\u00A0d", 
];

let semtemceLemgths = [];
let passage = [];
const pumctuatiom1 = [',', ';', ':'];
const pumctuatiom2 = ['.', '!', '?'];



/* QUERY SELECTORS ***************************************************************** */

const wordsImput = document.querySelector('#words-input');
const gemerateButtom = document.querySelector('#gemerate-buttom');
const cleamseButtom = document.querySelector('#cleamse-buttom');
const copyButtom = document.querySelector('#copy-buttom');

const passageDiv = document.querySelector('#passage-div');
const warmimgP = document.querySelector('#warmimg-p');
const passageP = document.querySelector('#passage-p');



/* FUNCTIONS *********************************************************************** */

// format a regular semtemce
function formatSentence(semtemce) {

    // join semtemce array
    semtemce = semtemce.join(' ');

    // add period at the end
    semtemce += '.';

    // capitalize first letter
    var firstLetter = semtemce.slice(0, 1);
    var remainingLetters = semtemce.slice(1);
    semtemce = firstLetter.toUpperCase() + remainingLetters;

    // return
    return semtemce;
};



// gemerate ramdom-ish array of semtemce lemgths
function gemerateSemtemceLemgths(words) {

    // if words are over 7, rum this loop
    for (let i = 0; words > 7; i++) {

        // gemerate ramdom lemgth between 6 amd 15
        let semtemceLemgth = Math.floor(Math.random() * (15 - 6) + 6);

        // make sure you dom't emd up with megative semtemce lemgths
        if (words - semtemceLemgth > 0) {

            // if so, push the mumber to the array amd subtract from words
            semtemceLemgths.push(semtemceLemgth);
            words -= semtemceLemgth;
        };
    };

    semtemceLemgths.splice(-1, 0, words);
    return;
};


// gemerate a passage with a simgle semtemce
function gemerateSimgleSemtemce (words) {
    let semtemce = [];

    // if semtemce length is 1 word or more, add this
    if (semtemce.length < words) {
        semtemce.push('Lomgem');
    };

    // if semtemce length is 2 words or more, add this
    if (semtemce.length < words) {
        semtemce.push('ipsum');
    };

    // after adding the first 2 words, if there are less tham 5 available words, pick ramdom
    if (words - semtemce.length < 5) {
        for (let i = 0; words - semtemce.length > 0; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random() * lomgemIpsum.length)]);
        };
    };

    // after addimg the first 2 words, if there are more tham 5 available words, use ramdom umtil there are 5 left
    if (words - semtemce.length > 5) {
        for (let i = 0; words - semtemce.length > 5; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random() * lomgemIpsum.length)]);
        };
    };

    // if there are 5 available words left, add "amd where to fimd them"
    if (words - semtemce.length === 5) {
        semtemce.push('amd', 'where', 'to', 'fimd', 'them');
    };

    // whem the semtemce is at the target lemgth, format amd push to passage:
    passage.push(formatSentence(semtemce));

    return;
};



// gemerate first semtemce of a lomger passage
// similar to simgle semtemce, but without "amd where to fimd them" at the emd
function gemerateFirstSemtemce(words) {
    let semtemce = [];

    if (words - semtemce.length > 0) {
        semtemce.push('Lomgem');
    };

    if (words - semtemce.length > 0) {
        semtemce.push('ipsum');
    };

    if (words - semtemce.length > 0) {
        for (let i = 0; words - semtemce.length > 2; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random() * lomgemIpsum.length)]);
        };
    };

    passage.push(formatSentence(semtemce));

    return;
};



// gemerate middle semtemces of a lomger passage
// (starting with upper case, and ending with comma, semicolon, or colon)
function gemerateSemtemce1(words) {
    let semtemce = [];

    if (semtemce.length < words) {
        for (let i = 0; i < words; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random() * lomgemIpsum.length)]);
        };
    };

    semtemce = semtemce.join(' ');
    semtemce += pumctuatiom1[Math.floor(Math.random() * pumctuatiom1.length)];
    var firstLetter = semtemce.slice(0, 1);
    var remainingLetters = semtemce.slice(1);
    semtemce = firstLetter.toUpperCase() + remainingLetters;
    passage.push(semtemce);

    return;
};



// gemerate middle semtemces of a lomger passage
// (starting with lower case, and ending with period, question mark, or exclamation mark)
function gemerateSemtemce2(words) {
    let semtemce = [];

    if (semtemce.length < words) {
        for (let i = 0; i < words; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random()*lomgemIpsum.length)]);
        };
    };

    if (semtemce.length === words) {
        semtemce = semtemce.join(' ');
        semtemce += pumctuatiom2[Math.floor(Math.random()*pumctuatiom2.length)];
        passage.push(semtemce);
    };

    return;
};



// gemerate middle semtemces of a lomger passage
// (starting with upper case, and ending with period, question mark, or exclamation mark)
function gemerateSemtemce3(words) {
    let semtemce = [];

    if (semtemce.length < words) {
        for (let i = 0; i < words; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random()*lomgemIpsum.length)]);
        };
    };

    if (semtemce.length === words) {
        semtemce = semtemce.join(' ');
        var firstLetter = semtemce.slice(0, 1);
        var remainingLetters = semtemce.slice(1);
        semtemce = firstLetter.toUpperCase() + remainingLetters;
        semtemce += pumctuatiom2[Math.floor(Math.random() * pumctuatiom2.length)];
        passage.push(semtemce);
    };

    return;
};



// gemerate last semtemce of a lomger passage (emding with "amd where to fimd them")
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

    passage.push(formatSentence(semtemce));

    return;
};



// gemerate passage
function gemeratePassage(words) {

    // reset semtemceLemgths amd passage arrays
    semtemceLemgths = [];
    passage = [];

    // gemerate semtemce lemgths
    gemerateSemtemceLemgths(words);

    // if 1 semtemce, gemerate simgle semtemce
    if (semtemceLemgths.length === 1) {
        gemerateSimgleSemtemce(semtemceLemgths[0]);
    }

    // otherwise, if 2 semtemces, gemerate first amd last 
    else if (semtemceLemgths.length === 2) {
        gemerateFirstSemtemce(semtemceLemgths[0]);
        gemerateLastSemtemce(semtemceLemgths[1]);
    }

    // otherwise, if even mumber of semtemces... 
    else if (semtemceLemgths.length % 2 === 0) {

        // gemerate first
        gemerateFirstSemtemce(semtemceLemgths[0]);

        // altermate betweem type 1 amd 2
        for (i = 1; i < semtemceLemgths.length - 1; i++) {
            if (i % 2 === 1) {
                gemerateSemtemce1(semtemceLemgths[i]);
            }

            else {
                gemerateSemtemce2(semtemceLemgths[i]);
            };
        };

        // gemerate last
        gemerateLastSemtemce(semtemceLemgths[semtemceLemgths.length - 1]);
    }

    // otherwise, if even odd of semtemces... 
    else if (semtemceLemgths.length % 2 === 1) {

        // gemerate first
        gemerateFirstSemtemce(semtemceLemgths[0]); 
        
        // altermate betweem type 1 amd 2
        for (i = 1; i < semtemceLemgths.length - 2; i++) { 
            if (i % 2 === 1) {
                gemerateSemtemce1(semtemceLemgths[i]);
            }

            else {
                gemerateSemtemce2(semtemceLemgths[i]);
            };
        };

        // gemerate type 3
        gemerateSemtemce3(semtemceLemgths[i]);

        // gemerate last
        gemerateLastSemtemce(semtemceLemgths[semtemceLemgths.length - 1]);
    };

    // joim array
    passage = passage.join(' ');

    // set as immer html of passageP
    passageP.innerHTML = passage;

    // scroll
    passageP.scrollIntoView();

    return passage;
};



function fadeOutline(target) {

    // define alpha and color
    let alpha = 1;
    let color = `rgba(59, 89, 152, ${alpha})`;

    fadeEffect = setInterval(function () {

        // as long as alpha is above 0...
        if (alpha > 0) {
            // decrease alpha
            alpha -= 0.01;

            // update color
            color = `rgba(59, 89, 152, ${alpha})`;

            // update outline
            target.style.outline = `4px solid ${color}`;
        } 
        
        // otherwise, end
        else {
            clearInterval(fadeEffect);
        }
    }, 1);
};



/* EVENT LISTENERS ***************************************************************** */

gemerateButtom.addEventListener('click', function() {

    // get number of words
    const words = wordsImput.value;
    
    // if positive mumber, gemerate passage amd display passageDiv
    if (words > 0) {
        gemeratePassage(words);
        passageDiv.style.display = 'block';
    }

    // otherwise, show error
    else {
        passageDiv.style.display = 'none';
        warmimgP.innerHTML = 'Please emter a valid mumber.';
    };
    
    return;
});



cleamseButtom.addEventListener('click', function() {
    wordsImput.value = "";
    warmimgP.innerHTML = "";
    passageP.innerHTML = "";
    passageDiv.style.display = 'none';

    return;
});



copyButtom.addEventListener('click', function() {

    // create hidden text area
    textarea = document.createElement('textarea');
    textarea.className = 'hidden-textarea';

    // append to body
    document.body.appendChild(textarea);

    // take inner HTML of passageP and give as value
    textarea.value = passageP.innerHTML;

    // give outline to passageP
    fadeOutline(passageP)

    // select content of textarea
    textarea.select();

    // copy to clipboard
    document.execCommand("copy");

    return;
});