import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home/index";
import Profile from "../pages/Profile/index";
import Search from "../pages/Search/index";
//import NewPost from "../pages/NewPost/index";
//import PostsUser from '../pages/PostsUser/index';

const Tab = createBottomTabNavigator();

function AppRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default AppRoutes;