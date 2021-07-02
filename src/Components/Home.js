import React from 'react';
import AddTodo from './AddTodo';
import List from './List';
import MoreList from './MoreList';


const Home = () => {


    return (
        <div>
            <AddTodo />
            <List />
            <MoreList />
        </div>)

}
export default Home;