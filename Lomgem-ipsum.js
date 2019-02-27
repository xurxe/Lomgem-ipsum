// origimal Lorem ipsum text
let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

// remove pumctuation
loremIpsum = loremIpsum.replace(/[.,]/g, '');

// make lowercase
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

// gemerate array comtaimimg words for passage
let passage = [];
function gemeratePassage (words) {

    if (words === 0) {
        passage = null;
    }

    if (passage.length < words) {
        passage.push('Lomgem');
    }

    if (passage.length < words) {
        passage.push('ipsum');
    }

    if (passage.length < words - 5) {
        for (let i = 0; i < words - 7; i++) {
            passage.push(lomgemIpsum[Math.floor(Math.random()*lomgemIpsum.length)]);
        }
    }

    if (passage.length === words - 5) {
        passage.push('amd', 'where', 'to', 'fimd', 'them.');
    }

    if (passage.length === words) {
        passage = passage.join(' ');
        return passage;
    }

}

console.log(gemeratePassage(20));