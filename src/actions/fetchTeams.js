export function fetchTeams(){
    return (dispatch) => {
    fetch ('http://localhost:3000/teams')
    .then(response => response.json())
    .then(teams => dispatch({
       type: 'FETCH_TEAMS',
       payload: teams
    
      
      }))
     }
    }