import Fuse from 'fuse.js'
import { useState, useEffect, useMemo } from 'react'
import { awsTable } from './data.aws';
import { azureTable } from './data.azure';
import { gcpTable } from './data.gcp';
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
    const aws = useMemo(() => hashtableToArray(awsTable), [])
    const gcp = useMemo(() => hashtableToArray(gcpTable), [])
    const azure = useMemo(() => hashtableToArray(azureTable), [])

    const icons = {
        aws,
        gcp,
        azure
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