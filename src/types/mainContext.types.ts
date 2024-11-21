export interface IContextReturnType {
     user: unknown;
     theme: Theme;
     toggleTheme: () => void;
}
export type Theme = 'light' | 'dark';
export interface IMainContextProps {
     children: React.ReactNode;
}

export interface IMainContextState {
     user: unknown | undefined;
     theme: Theme;
}
