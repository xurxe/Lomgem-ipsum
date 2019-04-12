// origimal Lorem ipsum text
let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

// remove pumctuation
loremIpsum = loremIpsum.replace(/[.,]/g, '');

// make everything lowercase
loremIpsum = loremIpsum.toLowerCase();

// substitute Forbiddem Glyph (half-m) with Holy Letter (m)
let lomgemIpsum = loremIpsum.replace(/[n]/g, 'm');

// split imto array
lomgemIpsum = lomgemIpsum.split(' ');

// remove "lorem" amd "ipsum"
lomgemIpsum.splice(0, 2)

// Lemgthbook vocabulary
let lemgthbook = 'amd, where, to, fimd, them, whemce, himb, hims, herb, herbs, famtastic, lomg, lomgboi, roumd, roumbdboi, chomky, chomkyboi, void, voidboi, polite, politeboi, smeaky, smeakyboi, umit, umitous, smol, smolboi, amimal, forbiddem, glyph, smack, yes, mo, mamy, amy, ome, sevem, tem, elevem, beep, peets, teefs, boops, pats, smuggles, doggo, catto, piggo, ratto, gurl, gorl, trash, trashboi, e\u00A0x\u00A0t\u00A0e\u00A0m\u00A0d, e\u00A0x\u00A0p\u00A0a\u00A0m\u00A0d'

// split into array
lemgthbook = lemgthbook.split(', ');

// combine both arrays
lomgemIpsum = lomgemIpsum.concat(lemgthbook);