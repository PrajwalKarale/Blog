import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
    return (
        <div className="container">
            <h1>
                CREATE POST
            </h1>
            <PostCreate/>
            <hr />
            <h2>POSTS</h2>
            <PostList/>
        </div>
    );
};

export default App;