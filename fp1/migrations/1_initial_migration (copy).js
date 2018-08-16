
const VegaCoinCrowdsale = artifacts.require('./VegaCoinCrowdsale.sol');
const VegaCoin = artifacts.require('./VegaCoin.sol');

module.exports = function(deployer, network, accounts) {
    const openingTime = web3.eth.getBlock('latest').timestamp + 2; // two secs in the future
    const closingTime = openingTime + 86400 * 20; // 20 days
    const rate = new web3.BigNumber(1000);
    const wallet = accounts[1];

    return deployer
        .then(() => {
            return deployer.deploy(VegaCoin);
        })
        .then(() => {
            return deployer.deploy(
                VegaCoinCrowdsale,
                openingTime,
                closingTime,
                rate,
                wallet,
                VegaCoin.address
            );
        });
};

