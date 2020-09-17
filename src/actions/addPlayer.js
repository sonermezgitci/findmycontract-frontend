export const addPlayer = (data) => {             
    
    return (dispatch) => {     
        fetch('http://localhost:3000/players', {   //post request to save to new player  it to our backend
                                                   // second argument will be object 
        headers: {                                  //<--- key that points to anothe object
        'Content-Type': 'application/json',         // <--- we are saying we are sending down to our backend going to be JSON
        'Accept':'application/json'                 // what kind of content will accepted on return on data
        },
        method : 'POST',                             // we have to tell it type of request           
        body: JSON.stringify(data)                   // body is the data we are actually sending down in this case is that Player object we are passing as data as a argument in addPlayer = (data) => { 
                                                    // we have to send server that just it accept it as a string 
                                                     // where is now its an object })
    })     
                                                    // without .then we can see immidelty changing without refresh the page 
                                                    // and we dont see it in our store when we refresh the page we re-render player container which is re-fetching players from the backend
   // we need to pull Json on the response that string going to be sent over into object notation 
    .then(response => response.json())         //<--------- so the reason we add this .then to our addPlayer is that 
                                               // we just dont want the see only this update when we update when we refresh 
                                               //we want that immidetly updated.
    .then(player => dispatch({type: 'ADD_PLAYER',payload: player}))             // we are getting the data what ever we send it to backend player controller create method        
  }                                              // and we want to dispatch this new account we just created 
}                                               // what we have to pass into the dispatch ?
                                               // ANSWER action type which we define in oir reducer 