/* eslint-disable no-shadow */
import collectibleList from './collectibleList.json';

export const { collectibles, platforms } = collectibleList;

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

export class CollectibleListContainer {
  constructor(private collectibles: CollectibleInfo[]) {
    this.collectibles = collectibles;
  }

    filterByDecimals = (decimals: number) => new CollectibleListContainer(
      this.collectibles.filter((item) => item.decimals === decimals),
    );

    filterByPlaformId = (platformId: string) => new CollectibleListContainer(
      this.collectibles.filter((item) => item.platformId === platformId),
    );

    excludeByPlatformId = (platformId: string) => new CollectibleListContainer(
      this.collectibles.filter((item) => item.platformId !== platformId),
    );

    getList = () => this.collectibles;
}
