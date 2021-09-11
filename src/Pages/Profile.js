//Method 1 for login .1 
// <Route path='/profile'> {login ? <Profile /> : <Redirect to='/' /> </Route>} 
//const Profile = () => {
  //  return (
    //    <div>
      //      <h2>Profile</h2>
        //</div>
    //)
//}
//export default Profile

//Method 2 for login .2 

import { useEffect, useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom"
import { Link } from "react-router-dom";
import EditProfile from './EditProfile';
import ViewProfile from "./ViewProfile";



const Profile = ({login}) => {
    const history= useHistory();
    useEffect( ()=>{
        if(!login){
            history.push("/");
        }
    },[login,history])

    const {path, url}=useRouteMatch();
    return (
        <>
        <div>
            <h2>Profile</h2>
        </div>
        <ul>
        <li>
            <Link to={`${url}/viewprofile`}>View Profile</Link>
         
        </li>
        <li>
            <Link to={`${url}/editprofile`}>Edit Profile</Link>
        </li>
        </ul>
        <Switch>
            <Route path={`${path}/viewprofile`} component={ViewProfile} />
            <Route path={`${path}/editprofile`} component={EditProfile}/>
        </Switch>
        </>
    )
}

export default Profile

