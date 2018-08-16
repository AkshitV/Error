pragma solidity 0.4.24;

import './VegaCoin.sol';
import '../node_modules/zeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';
import '../node_modules/zeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol';


contract VegaCoinCrowdsale is TimedCrowdsale, MintedCrowdsale {
    function VegaCoinCrowdsale
        (
            uint256 _openingTime,
            uint256 _closingTime,
            uint256 _rate,
            address _wallet,
            MintableToken _token
        )
        public
        Crowdsale(_rate, _wallet, _token)
        TimedCrowdsale(_openingTime, _closingTime) {

        }
}
