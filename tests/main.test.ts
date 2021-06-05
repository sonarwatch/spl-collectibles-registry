const { expect } = require('chai');
const {
  collectibles, platforms, CollectibleListContainer, CollectibleInfo,
} = require('../dist/collectiblelist.esm');

describe('Collectibles test',
  () => {
    it('should be an array', () => {
      expect(Array.isArray(collectibles)).to.be.equals(true);
    });
  });

describe('Platforms test',
  () => {
    it('should be an array', () => {
      expect(Array.isArray(platforms)).to.be.equals(true);
    });
  });

describe('CollectibleListContainer test',
  () => {
    it('should filter', () => {
      const filterdCollectibles = new CollectibleListContainer(collectibles).filterByDecimals(0);
      filterdCollectibles.forEach((collectible) => {
        expect(collectible.decimals).to.be.equals(0);
      });
    });
  });
