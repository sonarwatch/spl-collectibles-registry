var expect = require('chai').expect;
var _a = require('../dist/collectiblelist.esm'), collectibles = _a.collectibles, platforms = _a.platforms, CollectibleListContainer = _a.CollectibleListContainer, CollectibleInfo = _a.CollectibleInfo;
describe('Collectibles test', function () {
    it('should be an array', function () {
        expect(Array.isArray(collectibles)).to.be.equals(true);
    });
});
describe('Platforms test', function () {
    it('should be an array', function () {
        expect(Array.isArray(platforms)).to.be.equals(true);
    });
});
describe('CollectibleListContainer test', function () {
    it('should filter', function () {
        var filterdCollectibles = new CollectibleListContainer(collectibles).filterByDecimals(0);
        filterdCollectibles.forEach(function (collectible) {
            expect(collectible.decimals).to.be.equals(0);
        });
    });
});
