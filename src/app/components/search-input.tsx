import theme from '../styles/theme'
import SearchIcon from './icons/search-icon';
import { AWS_ICON_SIZE } from '../data.aws';
import { GCP_ICON_SIZE } from '../data.gcp';
import { useStore } from '../store';
import { AZURE_ICON_SIZE } from '../data.azure';

interface SearchInputProps extends React.HTMLProps<HTMLDivElement> {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ value, onChange, ...props }: SearchInputProps) => {
    const provider = useStore(s => s.provider);
    const datasetSizes = {
        aws: AWS_ICON_SIZE,
        gcp: GCP_ICON_SIZE,
        azure: AZURE_ICON_SIZE
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