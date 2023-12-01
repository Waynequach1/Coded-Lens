export interface NavigationItem {
    name: string;
    // One of route or similarItems will be defined.
    route?: string;
    routeItems?: NavigationItem[];
    // The following properties etheir all exist or don't exist altogether
    locked?: boolean;
    lockedMessage?: string;
    unlockedMessage?: string;
}