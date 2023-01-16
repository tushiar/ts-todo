export type TItem = {
    title: string;
    body?: string;
    f: (...args: string[]) => void;
}