import { useState } from 'react';
import useSearch from '../use-search';
import SearchInput from './search-input';
import theme from '../styles/theme'
import IconButton from './icon-button';
import { ReactSVG } from 'react-svg'
import '../styles/ui.css';
import RadioToggleButton from './radio-toggle-button';



const App = () => {
    const [query, setQuery] = useState('')
    const results = useSearch(query);
    const [serviceName, setServiceName] = useState('');

    return (
        <div onMouseLeave={() => setServiceName('')}>
            <RadioToggleButton />
            <SearchInput value={query}
                onChange={event => setQuery(event.target.value)}
            />
            <p>{serviceName}</p>
            <div style={{ padding: theme.space[2] }}>
                <div
                    style={{
                        display: 'grid',
                        placeItems: 'center',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gridGap: 6,
                    }}
                >
                    {results.map(({ name, icon, id }, index) => <div className="svg__icon" key={id + index} onMouseEnter={() => setServiceName(name)}>
                        <IconButton id={id} >
                            <ReactSVG src={icon} />
                        </IconButton>
                    </div>)}
                </div>
                <div
                    style={{
                        marginTop: theme.space[2],
                        padding: theme.space[2],
                        fontSize: theme.fontSizes[0],
                        color: 'rgba(0, 0, 0, 0.5)',
                    }}
                >
                    Cloud Icons v1.1.0
                </div>
            </div>
        </div >
    );
};

export default App;
