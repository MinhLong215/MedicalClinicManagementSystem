import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { useEffect, useState } from "react/cjs/react.production.min";
import Home from "./components/Admin/Home/Home";
import UserManagement from "./components/Admin/UserManagement/UserManagement";
import Login from "./components/User/Login";
import API, { endpoints } from "./configs/API";
import React, { useReducer } from 'react'
import Lesson from "./components/Lesson/Lesson";
import LessonDetails from "./components/Lesson/LessonDetails";
import MyContext from "./configs/MyContext";
import MyUserReducer from "./reducers/MyUserReducer";
import Logout from "./components/User/Logout";
import Register from "./components/User/Register";

const Drawer = createDrawerNavigator();

const App = () => {
  const [user, dispatch] = useReducer(MyUserReducer, null);

  return (
    <MyContext.Provider value={[user, dispatch]}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={MyDrawerItem} screenOptions={{headerRight: Logout}}>
          {/* <Drawer.Screen name="Lesson" component={Lesson} options={{title: "Bài học", drawerItemStyle: {display: "none"}}} />
          <Drawer.Screen name="LessonDetails" component={LessonDetails} options={{title: "Chi tiết bài học", drawerItemStyle: {display: "none"}}} />
           */}
          {user===null?<>
            <Drawer.Screen name="Loin" options={{title: 'Đăng nhập'}} component={Login} />
            <Drawer.Screen name="Register" options={{title: 'Đăng ký'}} component={Register} />
          </>:<>
            <Drawer.Screen name="Home" component={Home} options={{title: 'Thuốc'}} />
            <Drawer.Screen name="UserManagement" component={UserManagement} options={{title: 'Quản lý tài khoản'}} />

            {/* <Drawer.Screen name={user.username} component={Home} /> */}
          </>}
          
        </Drawer.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  )
}

const MyDrawerItem = (props) => {
  const [categories, setCategories] = React.useState(null);

  React.useEffect(() => {
    const loadCategories = async () => {
      try {
        let res = await API.get(endpoints['categories']);
        setCategories(res.data);
      } catch (ex) {
        setCategories([])
        console.error(ex);
      }
    }

    loadCategories();

  }, []);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {categories===null?<ActivityIndicator />:<>
        {categories.map(c => <DrawerItem key={c.id} label={c.name} onPress={() => props.navigation.navigate("Home", {"cateId": c.id})} />)}
      </>}
    </DrawerContentScrollView>
  );
}

export default App;