// Grabbing Form Data From a html button Submit Event   
const form = document.querySelector('#racerDataForm')
console.log(form)


// Add Event Listener for submit event(s)   
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    var query_season = document.querySelector('#season').value
    var query_round = document.querySelector('#round').value
    // console.log(event)
    loadData(query_season, query_round)
    
})


const getData = async ( query_season, query_round ) => {   
    let response = await axios.get(`https://ergast.com/api/f1/${query_season}/${query_round}/driverStandings.json`) 
    console.log(response.data)
    return response.data
}


// Creat Constand to hold DOM Elements //T: good example, best practice
const DOM_Elements = {
    drivers: '.driver-list' 

}


// Create Driver List HTML 
const create_driver = ( id, permanentNumber, givenName ) => {
    const html = `<a href='#' class= 'list-group-item list-group-item-action 
    list-group-item-light' id="${id}"> Number: ${permanentNumber} <br> Number: ${permanentNumber} <br> Name: ${givenName}`

    // "Paste" new list item on document
    document.querySelector(DOM_Elements.drivers).insertAdjacentHTML("beforeend", html)
}


// Function to Load Each Driver  
const loadData = async (query_season, query_round) => {
    const driverList = await getData(query_season, query_round);
    let path = driverList.MRData.StandingsTable.StandingsLists[0].DriverStandings

    console.log(path)
    for(i = 0; i < path.length; i++)
    // driverList.forEach(driver => create_driver(driver.driverId, driver.permanentNumber, driver.givenName));  //T: this is our get data function
    // console.log(driverList)
    // id = path[i]--dict path here--

}


// function to Clear data 
const clearData = () => {
    document.querySelector(DOM_Elements.drivers).innerHTML = '';  //T: setting to empty string clears everything out of it
}



