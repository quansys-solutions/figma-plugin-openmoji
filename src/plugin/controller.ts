import { awsTable } from '../app/data.aws';
import { gcpTable } from '../app/data.gcp';
import { decode } from 'js-base64';
import { azureTable } from '../app/data.azure';

figma.showUI(__html__, { width: 360, height: 500 })

figma.ui.onmessage = message => {
    const icons = {
        aws: awsTable,
        gcp: gcpTable,
        azure: azureTable
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
