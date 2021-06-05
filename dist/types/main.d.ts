export declare const collectibles: {
    platformId: string;
    address: string;
    contentURI: string;
    name: string;
    decimals: number;
    supply: any;
    market: any;
}[], platforms: {
    id: string;
    name: string;
    logoURI: string;
    website: string;
    description: string;
}[];
export interface PlatformInfo {
    readonly id: string;
    readonly name: string;
    readonly logoURI: string;
    readonly website?: string;
    readonly description?: string;
}
export interface CollectibleInfo {
    readonly platformId: string;
    readonly address: string;
    readonly name: string;
    readonly decimals: number;
    readonly contentURI: string;
    readonly smallContentURI?: string;
    readonly serumV3Usdc?: string;
    readonly supply?: Number;
}
export interface CollectibleList {
    readonly platforms: PlatformInfo[];
    readonly collectibles: CollectibleInfo[];
}
export declare class CollectibleListContainer {
    private collectibles;
    constructor(collectibles: CollectibleInfo[]);
    filterByDecimals: (decimals: number) => CollectibleListContainer;
    filterByPlaformId: (platformId: string) => CollectibleListContainer;
    excludeByPlatformId: (platformId: string) => CollectibleListContainer;
    getList: () => CollectibleInfo[];
}
