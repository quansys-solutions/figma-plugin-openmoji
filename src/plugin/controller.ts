import { decode } from 'js-base64';
import { openActivitiesTable } from '../app/data.openactivities';
import { openAnimalNatureTable } from '../app/data.openanimalnature';
import { openComponentsTable } from '../app/data.opencomponent';
import { openFlagsTable } from '../app/data.openflags';
import { openFoodDrinkTable } from '../app/data.openfooddrink';
import { openObjectsTable } from '../app/data.openobjects';
import { openPeopleBodyTable } from '../app/data.openpeoplebody';
import { openSmileysEmotionTable } from '../app/data.opensmileysemotion';
import { openSymbolsTable } from '../app/data.opensymbols';
import { openTravelPlacesTable } from '../app/data.opentravelplaces';

figma.showUI(__html__, { width: 750, height: 500 })

figma.ui.onmessage = message => {
    const icons = {
        activities: openActivitiesTable,
        animal: openAnimalNatureTable,
        component: openComponentsTable,
        flag: openFlagsTable,
        food: openFoodDrinkTable,
        object: openObjectsTable,
        people: openPeopleBodyTable,
        smiley: openSmileysEmotionTable,
        symbol: openSymbolsTable,
        travel: openTravelPlacesTable
    }
    const hashTable = icons[message.provider];
    const entry = hashTable.get(message.type);
    const base64svg = entry.icon.replace("data:image/svg+xml;base64,", "");
    const decodedSvg = decode(base64svg);
    const icon = figma.createNodeFromSvg(decodedSvg)
    icon.name = entry.name
    icon.x = figma.viewport.center.x
    icon.y = figma.viewport.center.y
    figma.currentPage.selection = [icon]
}
