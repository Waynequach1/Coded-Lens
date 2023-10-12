export interface NavigationItem {
    name: string;
    // One of ruote or similarItems will be defined.
    route?: string;
    routeItems?: NavigationItem[];
}