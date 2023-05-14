import create from "zustand"

export type Provider = 'activities' | 'animal' | 'component' | 'flag' | 'food' | 'object' | 'people' | 'smiley' | 'symbol' | 'travel'
type State = {
    provider: Provider
    setProvider: (newProvider: Provider) => void
}

export const useStore = create<State>((set) => ({
    provider: 'activities',
    setProvider: (provider: Provider) => set(() => ({ provider }))
}))