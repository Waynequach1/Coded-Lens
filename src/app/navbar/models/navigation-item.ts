export interface NavigationItem {
    name: string;
    // One of route or similarItems will be defined.
    route?: string;
    routeItems?: NavigationItem[];
}