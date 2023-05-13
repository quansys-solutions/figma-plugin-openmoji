import bald from './icons/component/hair-style/bald.svg';
import baldColor from './icons/component/hair-style/bald_color.svg';
import curlyHair from './icons/component/hair-style/curly-hair.svg';
import curlyHairColor from './icons/component/hair-style/curly-hair_color.svg';
import redHair from './icons/component/hair-style/red-hair.svg';
import redHairColor from './icons/component/hair-style/red-hair_color.svg';
import whiteHair from './icons/component/hair-style/white-hair.svg';
import whiteHairColor from './icons/component/hair-style/white-hair_color.svg';
import darkSkinTone from './icons/component/skin-tone/dark-skin-tone.svg';
import darkSkinToneColor from './icons/component/skin-tone/dark-skin-tone_color.svg';
import lightSkinTone from './icons/component/skin-tone/light-skin-tone.svg';
import lightSkinToneColor from './icons/component/skin-tone/light-skin-tone_color.svg';
import mediumDarkSkinTone from './icons/component/skin-tone/medium-dark-skin-tone.svg';
import mediumDarkSkinToneColor from './icons/component/skin-tone/medium-dark-skin-tone_color.svg';
import mediumLightSkinTone from './icons/component/skin-tone/medium-light-skin-tone.svg';
import mediumLightSkinToneColor from './icons/component/skin-tone/medium-light-skin-tone_color.svg';
import mediumSkinTone from './icons/component/skin-tone/medium-skin-tone.svg';
import mediumSkinToneColor from './icons/component/skin-tone/medium-skin-tone_color.svg';

import {IconProps} from './use-search';

export const openComponentsTable = new Map<string, Omit<IconProps, 'id'>>();

openComponentsTable.set('bald', {name: 'Bald', icon: bald});
openComponentsTable.set('baldColor', {name: 'Bald Color', icon: baldColor});
openComponentsTable.set('curlyHair', {name: 'Curly Hair', icon: curlyHair});
openComponentsTable.set('curlyHairColor', {name: 'Curly Hair Color', icon: curlyHairColor});
openComponentsTable.set('redHair', {name: 'Red Hard', icon: redHair});
openComponentsTable.set('redHairColor', {name: 'Red Hard Colo', icon: redHairColor});
openComponentsTable.set('whiteHair', {name: 'White Hair', icon: whiteHair});
openComponentsTable.set('whiteHairColor', {name: 'White Hair Color', icon: whiteHairColor});
openComponentsTable.set('darkSkinTone', {name: 'Dark Skin Tone', icon: darkSkinTone});
openComponentsTable.set('darkSkinToneColor', {name: 'Dark Skin Tone Color', icon: darkSkinToneColor});
openComponentsTable.set('lightSkinTone', {name: 'Light Skin Tone', icon: lightSkinTone});
openComponentsTable.set('lightSkinToneColor', {name: 'Light Skin Tone Color', icon: lightSkinToneColor});
openComponentsTable.set('mediumDarkSkinTone', {name: 'Medium Dark Skin Tone', icon: mediumDarkSkinTone});
openComponentsTable.set('mediumDarkSkinToneColor', {
    name: 'Medium Dark Skin Tone Color',
    icon: mediumDarkSkinToneColor,
});
openComponentsTable.set('mediumLightSkinTone', {name: 'Medium Light Skin Tone', icon: mediumLightSkinTone});
openComponentsTable.set('mediumLightSkinToneColor', {
    name: 'Medium Light Skin Tone Color',
    icon: mediumLightSkinToneColor,
});
openComponentsTable.set('mediumSkinTone', {name: 'Medium Skin Tone', icon: mediumSkinTone});
openComponentsTable.set('mediumSkinToneColor', {name: 'Medium Skin Tone Color', icon: mediumSkinToneColor});

export const OA_ICON_SIZE = openComponentsTable.size;
