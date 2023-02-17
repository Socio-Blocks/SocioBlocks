pragma solidity >=0.5.0 < 0.9.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";

struct reporter_data{

        address wallet;
        uint pothole_id;
        uint geofence_id;
        uint intensity;
        uint date;

    }
    struct reporter_score{
        address reporter_adress;
        uint score;

    }

contract Social is ERC20{
    using SafeMath for uint256;
    reporter_score[] public reporters;
    mapping(address => reporter_data) mapped_reporter;
    mapping(uint => uint) mapped_geofence_date;
    mapping(uint => uint) mapping_date_and_geofence;
    uint default_token_amnt = 2;

    
    uint256 ten_days_seconds = 10 * 24 * 60 * 60;

    constructor() ERC20("SocialCoins", "SC"){
        _mint(address(this),100000*10**18);
    }

    function transferTokens(address recipient, uint256 amount) public returns (bool) {
        uint amnt = amount*10**18;
         _transfer(address(this), recipient, amnt);
        return true;
    }
    function addreporter(address wallet_adress, uint pothole, uint geofence, uint intensity) public returns(string memory){
        reporter_data memory reporter = reporter_data(wallet_adress,pothole,geofence, intensity, block.timestamp);
        string memory updation = "data added tokens transfered..";
        mapped_reporter[wallet_adress]=reporter;
        mapped_geofence_date[geofence]=reporter.date;
        mapping_date_and_geofence[reporter.date] = geofence;
        transferTokens(wallet_adress,default_token_amnt);
        bool reporterExists = false;
    for (uint i = 0; i < reporters.length; i++) {
        if (reporters[i].reporter_adress == wallet_adress) {
            reporters[i].score++;
            reporterExists = true;
            break;
        }
    }
    if (!reporterExists) {
        reporters.push(reporter_score(wallet_adress, 1));
    }
    return updation;
    }
    function get_data(address wallet_id) public view returns(uint){
        return mapped_reporter[wallet_id].date;
    }
    function checker(uint gefnce, address wallet_holder) public  returns(string memory){
        string memory status;
        uint256 recorded_date = mapped_geofence_date[gefnce];
        uint256 diff = block.timestamp - recorded_date;
        if (recorded_date == 0){
            status = "there is no such geofence id present";

        }
        else{
            if(diff>=ten_days_seconds){
            status = "congrats nigga tht pothole is old ull get coins";
            transferTokens(wallet_holder,default_token_amnt);
             bool reporterExists = false;
             for (uint i = 0; i < reporters.length; i++) {
                 if (reporters[i].reporter_adress == wallet_holder) {
                      reporters[i].score++;
                      reporterExists = true;
                       break;
        }
    }
    if (!reporterExists) {
        reporters.push(reporter_score(wallet_holder, 1));
    }
        }
        else if (diff<ten_days_seconds){
            status = "no you wont get the coins bro byee..";
        }
        }
        return status;
    }
    
    function getTopReporters() public view returns (reporter_score[10] memory) {
    reporter_score[] memory sortedReporters = reporters;
    for (uint i = 0; i < sortedReporters.length - 1; i++) {
        for (uint j = 0; j < sortedReporters.length - i - 1; j++) {
            if (sortedReporters[j].score < sortedReporters[j+1].score) {
                reporter_score memory temp = sortedReporters[j];
                sortedReporters[j] = sortedReporters[j+1];
                sortedReporters[j+1] = temp;
            }
        }
    }
    reporter_score[10] memory topReporters;
    for (uint i = 0; i < 10 && i < sortedReporters.length; i++) {
        topReporters[i] = sortedReporters[i];
    }
    return topReporters;
}

    function paying_integer(address from_address,address to_address, uint256 amount) public returns(bool){
        uint256 integer_amount = amount*10**18;
        _transfer(from_address,to_address,integer_amount);
        return true;
    
}
    function paying_one_decimal(address from_address, address to_address, uint amount) public returns(bool){
        uint one_decimal_amount = amount*10**18/10;
        _transfer(from_address,to_address,one_decimal_amount);
        return true;
    }
    function paying_two_decimal(address from_address, address to_address, uint amount) public returns(bool){
        uint two_decimal_amount = amount*10**18/100;
        _transfer(from_address,to_address,two_decimal_amount);
        return true;
    }
    function balance_display(address wallet) public view returns(uint){
        return balanceOf(wallet);
    }

    
}
