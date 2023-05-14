import theme from '../styles/theme'
import SearchIcon from './icons/search-icon';
import { OPEN_ACTIVITY_ICON_SIZE } from '../data.openactivities';
import { OPEN_ANIMAL_NATURE_ICON_SIZE } from '../data.openanimalnature';
import { OPEN_COMPONENT_ICON_SIZE } from '../data.opencomponent';
import { OPEN_FLAG_ICON_SIZE } from '../data.openflags';
import { OPEN_FOOD_DRINK_ICON_SIZE } from '../data.openfooddrink';
import { OPEN_OBJECT_ICON_SIZE } from '../data.openobjects';
import { OPEN_PEOPLE_BODY_ICON_SIZE } from '../data.openpeoplebody';
import { OPEN_SMILEY_EMOTION_ICON_SIZE } from '../data.opensmileysemotion';
import { OPEN_SYMBOL_ICON_SIZE } from '../data.opensymbols';
import { OPEN_TRAVEL_PLACES_ICON_SIZE } from '../data.opentravelplaces';
import { useStore } from '../store';

interface SearchInputProps extends React.HTMLProps<HTMLDivElement> {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ value, onChange, ...props }: SearchInputProps) => {
    const provider = useStore(s => s.provider);
    const datasetSizes = {
        activities: OPEN_ACTIVITY_ICON_SIZE,
        animal: OPEN_ANIMAL_NATURE_ICON_SIZE,
        component: OPEN_COMPONENT_ICON_SIZE,
        flag: OPEN_FLAG_ICON_SIZE,
        food: OPEN_FOOD_DRINK_ICON_SIZE,
        object: OPEN_OBJECT_ICON_SIZE,
        people: OPEN_PEOPLE_BODY_ICON_SIZE,
        smiley: OPEN_SMILEY_EMOTION_ICON_SIZE,
        symbol: OPEN_SYMBOL_ICON_SIZE,
        travel: OPEN_TRAVEL_PLACES_ICON_SIZE
    }

    return (
        <div style={{
            position: 'sticky',
            top: 0,
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        }} {...props}>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    padding: theme.space[1],
                }}
            >
                <SearchIcon />
            </div>
            <input
                autoFocus
                type="search"
                value={value}
                onChange={onChange}
                placeholder={`Search ${datasetSizes[provider]} icons`}
                style={{
                    width: '100%',
                    height: 40,
                    padding: `0 ${theme.space[4]} 0 36px`,
                    fontFamily: 'inherit',
                    fontSize: theme.fontSizes[0],
                    border: 0,
                    outline: 0,
                }}
            />
        </div>
    )
};

export default SearchInput