// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Devfolio{
    address public admin;
    uint256 creationAmount;
    uint hackathonCount;
    
    mapping(uint=>Hackathon) hackathons;

    bytes public gitUrl = "https://github.com/";

    event HackthonCreated( address organizer,
        uint participantCount,
        uint participantLimit,
        uint256 _amountpaid,
        uint256 stakeAmount,
        uint256 expiryTime);
    event ParticipateHack( address organizer,
        uint participantCount,
        uint participantLimit,
        uint256 _amountpaid,
        uint256 stakeAmount,
        uint256 expiryTime);
    event SubmittedHack(address organizer,
        uint participantCount,
        uint participantLimit,
        uint256 _amountpaid,
        uint256 stakeAmount,
        uint256 expiryTime);


   

    struct Hackathon{
        address organizer;
        uint participantCount;
        uint participantLimit;
        mapping(address => bool) hasParticipantMadeValidSubmission;
        uint256 stakeAmount;
        uint256 expiryTime;
    }

    constructor()
    {
        admin = msg.sender;
        hackathonCount = 0;
        creationAmount = 1;
    }

    //checks whether hackathon exists and has not expired yet;
      modifier validHackathon(uint hackathonID){
        require(hackathons[hackathonID].organizer != address(0), "Hackathon does not exist");
        require(block.timestamp<hackathons[hackathonID].expiryTime,"Hackathon is already over");
        _;
    }

    modifier onlyAdmin(){
        require(msg.sender == admin,"withdrawing hackathon fees can only be done by admin");
        _;
    }

    function createHackathon(uint _participantLimit, uint256 _stakeAmount, uint256 timeInSeconds) external payable {
        require(msg.value >= creationAmount, "Insufficient amount to create hackathon");

        Hackathon storage newHackathon = hackathons[hackathonCount];
        newHackathon.organizer = msg.sender;
        newHackathon.participantLimit = _participantLimit;
        newHackathon.participantCount = 0;
        newHackathon.stakeAmount = _stakeAmount;
        newHackathon.expiryTime = block.timestamp + timeInSeconds;

        hackathonCount++;
        payable(admin).transfer(msg.value); 
        emit HackthonCreated(newHackathon.organizer,newHackathon.participantCount, msg.value,newHackathon.participantLimit, _stakeAmount ,newHackathon.expiryTime );
    }

    function withdrawHackathonFees() public onlyAdmin{
        require(address(this).balance > 0, "No balance to transfer");
        payable(admin).transfer(address(this).balance);
    }


    function partcipateInHackathon(uint hackathonID) public payable  validHackathon(hackathonID){
        //check if enough stake amount is sent;
        require(msg.value >= hackathons[hackathonID].stakeAmount,"insufficient stake amount");
        Hackathon storage  currentHackathon = hackathons[hackathonID];
        require(currentHackathon.participantCount<=currentHackathon.participantLimit,"participant limit reached, cannot register!!");
       
        hackathons[hackathonID].hasParticipantMadeValidSubmission[msg.sender] = false;
        hackathons[hackathonID].participantCount++;//increment the participant count;
        payable(admin).transfer(msg.value);
        emit ParticipateHack( currentHackathon.organizer,currentHackathon.participantCount, msg.value,currentHackathon.participantLimit, currentHackathon.stakeAmount ,currentHackathon.expiryTime );
    }

    // only hackathon organizer can return the stake;
    function returnStake(uint hackathonID, address participantAddress) external payable 
    {
        // require(msg.sender == hackathons[hackathonID].organizer, "Only the organizer can call this function");
        // require(block.timestamp > hackathons[hackathonID].expiryTime, "Hackathon isn't over yet");
        // require(msg.value > hackathons[hackathonID].stakeAmount, "Insufficient value sent");

        // bool participantFound = false;

        // // Check if the participant is in the list of participants
        // for (uint i = 0; i < hackathons[hackathonID].participants.length; i++) {
        //     if (hackathons[hackathonID].participants[i] == participantAddress) {
        //         participantFound = true;
        //         break;
        //     }
        // }

        // // Refund if the participant is found
        // require(participantFound, "Participant not found");
        // payable(participantAddress).transfer(hackathons[hackathonID].stakeAmount);
        
    }

    function MakeSubmission(bytes memory _githubUrl, uint256 _hackthonId) public payable  {
        bool  b = true;     
        for (uint i = 0; i < 19; i++) {
            if(_githubUrl[i] != gitUrl[i]){
                b = false;
                break;
            }
        }
        require(b == true, "not valid git url");
        Hackathon storage h = hackathons[_hackthonId];
        h.hasParticipantMadeValidSubmission[msg.sender] = true;
        payable(msg.sender).transfer(msg.value); 

    }

}