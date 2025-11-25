import { createContext, useContext, useState, ReactNode } from 'react';

interface StoryContextType {
    isAutoPlaying: boolean;
    setIsAutoPlaying: (playing: boolean) => void;
    goToNextPage: () => void;
}

const StoryContext = createContext<StoryContextType | undefined>(undefined);

export function StoryProvider({ children, goToNextPage }: { children: ReactNode, goToNextPage: () => void }) {
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);

    return (
        <StoryContext.Provider value={{ isAutoPlaying, setIsAutoPlaying, goToNextPage }}>
            {children}
        </StoryContext.Provider>
    );
}

export function useStory() {
    const context = useContext(StoryContext);
    if (!context) {
        // Return a dummy context if not provided, to avoid crashing if used outside provider
        // or we can throw error. For safety in dev, let's throw.
        throw new Error('useStory must be used within a StoryProvider');
    }
    return context;
}
