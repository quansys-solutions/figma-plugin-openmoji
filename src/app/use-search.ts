import Fuse from 'fuse.js'
import { useState, useEffect, useMemo } from 'react'
// import { awsTable } from './data.aws';
// import { azureTable } from './data.azure';
// import { gcpTable } from './data.gcp';
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
import { useStore } from './store';

export interface IconProps {
    id: string;
    name: string;
    icon: any;

    abbreviation?: string;
}

const options = {
    threshold: 0.2,
    keys: ['name', 'abbreviation'],
}

const hashtableToArray = (table: Map<string, Omit<IconProps, 'id'>>): IconProps[] => {
    const result = [];
    for (const [id, element] of table) {
        result.push({
            id,
            name: element.name,
            icon: element.icon,
            ...(element.abbreviation) && { abbreviation: element.abbreviation }
        })
    }
    return result;
}
const useSearch = (query: string) => {
    const provider = useStore(s => s.provider);
    // const aws = useMemo(() => hashtableToArray(awsTable), [])
    // const gcp = useMemo(() => hashtableToArray(gcpTable), [])
    // const azure = useMemo(() => hashtableToArray(azureTable), [])
    const activities = useMemo(() => hashtableToArray(openActivitiesTable), [])
    const animal = useMemo(() => hashtableToArray(openAnimalNatureTable), [])
    const component = useMemo(() => hashtableToArray(openComponentsTable), [])
    const flag = useMemo(() => hashtableToArray(openFlagsTable), [])
    const food = useMemo(() => hashtableToArray(openFoodDrinkTable), [])
    const object = useMemo(() => hashtableToArray(openObjectsTable), [])
    const people = useMemo(() => hashtableToArray(openPeopleBodyTable), [])
    const smiley = useMemo(() => hashtableToArray(openSmileysEmotionTable), [])
    const symbol = useMemo(() => hashtableToArray(openSymbolsTable), [])
    const travel = useMemo(() => hashtableToArray(openTravelPlacesTable), [])

    const icons = {
    //     aws,
    //     gcp,
    //     azure
        activities,
        animal,
        component,
        flag,
        food,
        object,
        people,
        smiley,
        symbol,
        travel
    }

    const indexedCollection = Fuse.createIndex(options.keys, icons[provider])
    const [results, setResults] = useState(icons[provider])

    const fuse = new Fuse(icons[provider], options, indexedCollection)

    useEffect(() => {
        if (query.trim()) {
            const fuzzySearchResult = fuse.search(query.trim()).flat().map(r => r.item)
            setResults(fuzzySearchResult);
        } else {
            setResults(icons[provider])
        }
    }, [query, provider])

    return results
}

export default useSearch