import create from "zustand"

export type Provider = 'aws' | 'gcp' | 'azure' | 'arts'
type State = {
    provider: Provider
    setProvider: (newProvider: Provider) => void
}

export const useStore = create<State>((set) => ({
    provider: 'aws',
    setProvider: (provider: Provider) => set(() => ({ provider }))
}))