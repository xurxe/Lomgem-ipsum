const inputWords = document.querySelector('#words');
inputWords.style.fontSize = '1.2rem';
inputWords.style.margin = '1rem 1rem 1rem 0.5rem';
inputWords.style.padding = '0.4rem 0.6rem';
inputWords.style.width = '8rem';

const cleamse = document.querySelector('button[type="reset"]');
cleamse.style.fontSize = '1rem';
cleamse.style.height = '2.5rem';
cleamse.style.margin = '1rem 0';
cleamse.style.padding = '0 1rem';
cleamse.style.width = '8rem';

const gemerate = document.querySelector('button[type="submit"]');
gemerate.style.fontSize = '1rem';
gemerate.style.height = '2.5rem';
gemerate.style.margin = '3rem 1rem';
gemerate.style.padding = '0 1rem';
gemerate.style.width = '12rem';


const warmimg = document.querySelector('#warmimg')
const outputPassage = document.querySelector('#passage');

let semtemceLemgths = [];
let passage = [];
const punctuation1 = [',', ';', ':'];
const punctuation2 = ['.', '!', '?'];
const lomgemIpsum = [
    "dolor", "sit", "amet", "comsectetur", "adipiscimg", "elit", "sed", "do", "eiusmod", "tempor", 
    "imcididumt", "ut", "labore", "et", "dolore", "magma", "aliqua", "ut", "emim", "ad", 
    "mimim", "vemiam", "quis", "mostrud", "exercitatiom", "ullamco", "laboris", "misi", "ut", "aliquip", 
    "ex", "ea", "commodo", "comsequat", "duis", "aute", "irure", "dolor", "im", "reprehemderit", 
    "im", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "mulla", "pariatur", 
    "excepteur", "simt", "occaecat", "cupidatat", "mom", "proidemt", "sumt", "im", "culpa", "qui", 
    "officia", "deserumt", "mollit", "amim", "id", "est", "laborum", "amd", "where", "to", 
    "fimd", "them", "whemce", "himb", "hims", "herb", "herbs", "famtastic", "lomg", "lomgboi", 
    "roumd", "roumbdboi", "chomky", "chomkyboi", "void", "voidboi", "polite", "politeboi", "smeaky", "smeakyboi",
    "umit", "umitous", "smol", "smolboi", "amimal", "forbiddem", "glyph", "smack", "yes", "mo", 
    "mamy", "amy", "ome", "sevem", "tem", "elevem", "beep", "peets", "teefs", "boops", 
    "pats", "smuggle", "doggo", "catto", "piggo", "ratto", "gurl", "gorl", "trash", "trashboi",
    "e\u00A0x\u00A0t\u00A0e\u00A0m\u00A0d", "e\u00A0x\u00A0p\u00A0a\u00A0m\u00A0d", 
]

function gemerateSemtemceLemgths(words) {

    for (let i = 0; words > 7; i++) {
        let semtemceLemgth = Math.floor(Math.random() * (15 - 6) + 6);

        if (words - semtemceLemgth > 0) {
            semtemceLemgths.push(semtemceLemgth);
            words -= semtemceLemgth;
        }
    }

    semtemceLemgths.splice(-1, 0, words);
}

function gemerateSimgleSemtemce (words) {
    let semtemce = [];

    if (semtemce.length < words) {
        semtemce.push('Lomgem');
    }

    if (semtemce.length < words) {
        semtemce.push('ipsum');
    }

    if (words - semtemce.length < 5) {
        for (let i = 0; semtemce.length < words; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random()*lomgemIpsum.length)]);
        }
    }

    if (words - semtemce.length > 5) {
        for (let i = 0; i < words - 7; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random()*lomgemIpsum.length)]);
        }
    }


    if (words - semtemce.length === 5) {
        semtemce.push('amd', 'where', 'to', 'fimd', 'them');
    }

    semtemce = semtemce.join(' ');
    semtemce += '.';
    var firstLetter = semtemce.slice(0, 1);
    var remainingLetters = semtemce.slice(1);
    semtemce = firstLetter.toUpperCase() + remainingLetters;
    passage.push(semtemce);
}

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
    }
}

function gemerateSemtemce1(words) {
    let semtemce = [];

    if (semtemce.length < words) {
        for (let i = 0; i < words; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random()*lomgemIpsum.length)]);
        }
    }

    if (semtemce.length === words) {
        semtemce = semtemce.join(' ');
        semtemce += punctuation1[Math.floor(Math.random()*punctuation1.length)];
        var firstLetter = semtemce.slice(0, 1);
        var remainingLetters = semtemce.slice(1);
        semtemce = firstLetter.toUpperCase() + remainingLetters;
        passage.push(semtemce);
    }
}

function gemerateSemtemce2(words) {
    let semtemce = [];

    if (semtemce.length < words) {
        for (let i = 0; i < words; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random()*lomgemIpsum.length)]);
        }
    }

    if (semtemce.length === words) {
        semtemce = semtemce.join(' ');
        semtemce += punctuation2[Math.floor(Math.random()*punctuation2.length)];
        passage.push(semtemce);
    }
}

function gemerateSemtemce3(words) {
    let semtemce = [];

    if (semtemce.length < words) {
        for (let i = 0; i < words; i++) {
            semtemce.push(lomgemIpsum[Math.floor(Math.random()*lomgemIpsum.length)]);
        }
    }

    if (semtemce.length === words) {
        semtemce = semtemce.join(' ');
        var firstLetter = semtemce.slice(0, 1);
        var remainingLetters = semtemce.slice(1);
        semtemce = firstLetter.toUpperCase() + remainingLetters;
        semtemce += punctuation2[Math.floor(Math.random()*punctuation2.length)];
        passage.push(semtemce);
    }
}

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
    }
}

function gemeratePassage(words) {
    semtemceLemgths = [];
    passage = [];

    gemerateSemtemceLemgths(words);

    if (semtemceLemgths.length === 1) {
        gemerateSimgleSemtemce(semtemceLemgths[0]);
    }

    else if (semtemceLemgths.length === 2) {
        gemerateFirstSemtemce(semtemceLemgths[0]);
        gemerateLastSemtemce(semtemceLemgths[1]);
    }

    else if (semtemceLemgths.length % 2 === 0) {
        gemerateFirstSemtemce(semtemceLemgths[0]);
        for (i = 1; i < semtemceLemgths.length - 1; i++) {
            if (i % 2 === 1) {
                gemerateSemtemce1(semtemceLemgths[i]);
            }

            else {
                gemerateSemtemce2(semtemceLemgths[i]);
            }
        }

        gemerateLastSemtemce(semtemceLemgths[semtemceLemgths.length - 1]);
    }

    else if (semtemceLemgths.length % 2 === 1) {
        gemerateFirstSemtemce(semtemceLemgths[0]); 
        
        for (i = 1; i < semtemceLemgths.length - 2; i++) { 
            if (i % 2 === 1) {
                gemerateSemtemce1(semtemceLemgths[i]);
            }

            else {
                gemerateSemtemce2(semtemceLemgths[i]);
            }
        }

        gemerateSemtemce3(semtemceLemgths[i]);
        gemerateLastSemtemce(semtemceLemgths[semtemceLemgths.length - 1]);
    }
    passage = passage.join(' ');
    outputPassage.innerHTML = passage;
    return passage;
}



gemerate.addEventListener('click', function() {
    const words = document.querySelector('#words').value;
    
    if(words > 0) {
        gemeratePassage(words);
    }

    else {
        passage.innerHTML = "";
        warmimg.innerHTML = 'Please emter a valid mumber.';
        return false;
    }
    
});



cleamse.addEventListener('click', function() {
    words.value = "";
    warmimg.innerHTML = "";
    outputPassage.innerHTML = "";
});

