const ADot = artifacts.require("ADot");
const DexLab = artifacts.require("DexLab");
const { LinkToken } = require("@chainlink/contracts/truffle/v0.4/LinkToken");

require("chai")
  .use(require("chai-as-promised"))
  .should();

function tokens(n) {
  return web3.utils.toWei(n, "ether");
}

contract("TokenFarm", ([owner, investor]) => {
  let ADot, DExLab, linkToken;

  before(async () => {
    // Load Contracts
    ADot = await ADot.new();
    DexLab = await DexLab.new(ADot.address);
    // linkToken = await LinkToken.new()

    // Transfer all Dapp tokens to farm (1 million)
    await ADot.transfer(DexLab.address, tokens("9000000"));
  });

  describe("Dapp Token deployment", async () => {
    it("has a name", async () => {
      const name = await ADot.name();
      assert.equal(name, "Antidote");
    });
  });

  describe("Token Farm deployment", async () => {
    it("has a name", async () => {
      const name = await DexLab.name();
      assert.equal(name, "DexLab");
    });

    it("contract has tokens", async () => {
      let balance = await ADot.balanceOf(DexLab.address);
      assert.equal(balance.toString(), tokens("1000000"));
    });
  });

  // Broken
  describe("Farming tokens", async () => {
    it("rewards investors for staking mDai tokens", async () => {
      let result, starting_balance, ending_balance;

      // // Check investor balance before staking
      // startingBalanceDappToken = await dappToken.balanceOf(investor);
      // startingBalanceLinkToken = await linkToken.balanceOf(investor);
      // assert.equal(
      //   startingBalanceDappToken.toString(),
      //   tokens("0"),
      //   "investor Dapp wallet starts at 0"
      // );

      // await linkToken.approve(DexLab.address, tokens("3"), {
      //   from: investor,
      // });
      // await tokenFarm.stakeTokens(tokens("100"), { from: investor });

      // Please write tests
    });
  });
});
