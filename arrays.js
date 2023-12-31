/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];


//   Q1.
//   The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
 
// stations.push("London Kings Cross")
// console.log(stations);




//  * Q2.
//  * It doesn't go as far as Dundee either, so remove it from the start of the array.
//  */
// stations.shift();
// console.log(stations);



/**
 * Q3.
 * How many stations are on the line?
 */

// stationCount = 0
// for(station of stations ){
//     stationCount ++ ;  
// }
//  console.log("There are " + stationCount + " stations.");



/**
 * Q4.
 * Which station is the third stop?
 */

// thirdStation = null;
// thirdStation = stations[2];


//  console.log("The third station is " + thirdStation);



/**
 * Q5.
 * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
 */
// let updateStation = stations.indexOf("North Berwick");
// stations[updateStation] = "Berwick-upon-Tweed";
// console.log(stations);



/**
 * Q6.
 * How did Leeds get on there? Better remove it.
 */

// let stationToRemove = 2;
// stations.splice(stationToRemove, 2);

// console.log(stations);



/**
 * Q7.
 * We forgot about Darlington! Add it to the route between Newcastle and York.
 */


// let insertIndex = stations.indexOf("Newcastle");
// stations.splice(insertIndex + 1, 0, "Darlington");
// console.log(stations);


/**
 * Q8.
 * Is Durham one of the stops?
 */

// let stoppingAtDurham = stations.indexOf("Durham") !== -1;
//  console.log(stoppingAtDurham);


// **
//  * Q9.
//  * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
  let stoppingAtDurham = stations.indexOf("Durham") !== -1;
if (stoppingAtDurham) {
  console.log("Yay Durham!");
} else {
  console.log("Aww...");
}