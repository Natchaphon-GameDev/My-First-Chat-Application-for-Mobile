import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FriendList from "./FriendList";
import EnterApp_3ofghost from "./EnterApp_3ofghost";
import Profiletar from "./Profile-Tar";
import LobbySetting from "./LobbySetting";
import LoadingBar from "./LoadingBar";
import Phai from './ProfilePhai';
import Lobby from "./Lobby";



function Router(){
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/App">
                  <ChatBox/>
                </Route>
                <Route path="/Profile_Tar">
                  <Profiletar />
                </Route>
                <Route path="/ProfilePhai">
                    <Phai/>
                </Route>
                <Route path="/Eye_Scene">
                    <LoadingBar/>
                </Route>
                <Route path="/Profile_Taro">
                  <Profiletaro />
                </Route>
                <Route path="/App">
                    <Lobby/>
                </Route>
                <Route path="/LobbySetting">
                    <LobbySetting />
                </Route>
                <Route path="/Loding_Scene">
                    <EnterApp_3ofghost />
                </Route>
                <Route path="/EndTrue">
                    <EndTrue />
                </Route>
                <Route path="/EndFalse">
                    <EndFalse />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

//Plz give me A senpai

export default Router;

