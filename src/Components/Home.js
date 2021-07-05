import React from 'react';
import AddTodo from './AddTodo';
import List from './List';
import MoreList from './MoreList';
import Search from './Search';


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