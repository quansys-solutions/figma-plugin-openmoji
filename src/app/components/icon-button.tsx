import { ReactNode } from 'react'
import { useStore } from '../store'
import theme from '../styles/theme'

interface IconButtonProps {
    id: string
    children: ReactNode
}

const IconButton = ({ id, children }: IconButtonProps) => {
    const provider = useStore(s => s.provider)

    return (
        <div
            key={id}
            aria-label={id}
            onClick={() => parent.postMessage({ pluginMessage: { type: id, provider } }, '*')}
            style={{
                color: '#333',
                background: 'transparent',
                border: 0,
                borderRadius: theme.radii[1],
                appearance: 'none',
                outline: 0,
                width: 64,
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {children}
        </div>
    )
}

export default IconButton