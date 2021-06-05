var platforms$1 = [
	{
		id: "community",
		name: "Community",
		logoURI: "https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/solana/info/logo.png",
		website: "https://solana.com/",
		description: "Solana is a fast, secure, and censorship resistant blockchain providing the open infrastructure required for global adoption."
	},
	{
		id: "orca",
		name: "Orca",
		logoURI: "https://learn.orca.so/static/media/logomark.1ef55f8f.svg",
		website: "https://www.orca.so/",
		description: "Orca is the easiest place to exchange cryptocurrency on Solana."
	},
	{
		id: "solPunks",
		name: "SolPunks",
		logoURI: "https://solpunks.com/wp-content/uploads/2021/05/unknown_2.png",
		website: "https://solpunks.com/",
		description: "SolPunks are NFTs on the Solana blockchain. Each of these 10,000 SolPunks has attributes that make them unique according to a defined rarity system."
	}
];
var collectibles$1 = [
	{
		platformId: "orca",
		address: "guppyrZyEX9iTPSu92pi8T71Zka7xd6PrsTJrXRW6u1",
		contentURI: "/logos/collectibles/orca/GUPPY.gif",
		name: "Guppy",
		decimals: 0,
		supply: null,
		market: null
	},
	{
		platformId: "orca",
		address: "whaLeHav12EhGK19u6kKbLRwC9E1EATGnm6MWbBCcUW",
		contentURI: "/logos/collectibles/orca/WHALE.gif",
		name: "Whale",
		decimals: 0,
		supply: null,
		market: null
	},
	{
		platformId: "orca",
		address: "kLwhLkZRt6CadPHRBsgfhRCKXX426WMBnhoGozTduvk",
		contentURI: "/logos/collectibles/orca/KILLER_WHALE.gif",
		name: "Killer whale",
		decimals: 0,
		supply: null,
		market: null
	},
	{
		platformId: "orca",
		address: "star2pH7rVWscs743JGdCAL8Lc9nyJeqx7YQXkGUnWf",
		contentURI: "/logos/collectibles/orca/STARFISH.gif",
		name: "Starfish",
		decimals: 6,
		supply: null,
		market: null
	},
	{
		platformId: "orca",
		address: "cLownTTaiiQMoyMmFjfmSGowi8HyNhCtTLFcrNKnqX6",
		contentURI: "/logos/collectibles/orca/CLOWNFISH.gif",
		name: "Clownfish",
		decimals: 0,
		supply: null,
		market: null
	}
];
var collectibleList = {
	platforms: platforms$1,
	collectibles: collectibles$1
};

/* eslint-disable no-shadow */
var collectibles = collectibleList.collectibles, platforms = collectibleList.platforms;
var CollectibleListContainer = /** @class */ (function () {
    function CollectibleListContainer(collectibles) {
        var _this = this;
        this.collectibles = collectibles;
        this.filterByDecimals = function (decimals) { return new CollectibleListContainer(_this.collectibles.filter(function (item) { return item.decimals === decimals; })); };
        this.filterByPlaformId = function (platformId) { return new CollectibleListContainer(_this.collectibles.filter(function (item) { return item.platformId === platformId; })); };
        this.excludeByPlatformId = function (platformId) { return new CollectibleListContainer(_this.collectibles.filter(function (item) { return item.platformId !== platformId; })); };
        this.getList = function () { return _this.collectibles; };
        this.collectibles = collectibles;
    }
    return CollectibleListContainer;
}());

export { CollectibleListContainer, collectibles, platforms };
