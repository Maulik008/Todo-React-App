import React from 'react';
import AddTodo from '../home/AddTodo/AddTodo';
import List from '../home/List/List';
import MoreList from '../home/MoreList/MoreList';
import Search from '../home/Search/Search';
import '../home/Home.css'




const Home = (props) => {


    return (
        <div>
            <Search />
            <br />
            <AddTodo />
            <List />
            <MoreList />
        </div>)

}
export default Home;