import React, {useEffect, useState} from "react";
import {List} from "@material-ui/core";
import SinglePost from "./SinglePost";
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../../redux/actions";



export default function PostsList() {

    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(getPost(json)));
    }, []);

    const posts = useSelector(state => state.posts);
    console.log(posts);

    return (
        <List>
            {posts.map((post, index) => <SinglePost post={post} key={index}/>)}
        </List>
    );
}