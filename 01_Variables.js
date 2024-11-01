const accountId = 12566;
let accountEmail = "sharonts1@info.in";
var accountPassword = "abcd@#$";
accountCity = "Jaipur";
let accountState;

// accountId = 2; // not allowed
accountEmail = "heyche@info.in"; //   allowed and modify the accountEmail
accountPassword = "abdc2@oook"; // allowed
accountCity = "Bengaluru"; //allowed



/*
prefer not to use var because of issue in block scope and functional scope
use const and let
*/



console.table([accountEmail, accountPassword, accountCity, accountState]);
