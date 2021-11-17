import _ from 'lodash';

import jsonPlaceholder from "apis/jsonPlaceholder";

const fetchPosts=()=> async dispatch=>{
    const response=await jsonPlaceholder.get('/posts');
    return({
        type:'FETCH_POSTS',
        payload:response.data
    })
    }

export default fetchPosts;

export const fetchUser=userId=>  dispatch=>{
    
    _fetchUser(userId,dispatch);
}

const _fetchUser=_.memoize(async(userId,dispatch)=>{
    const response=await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({
        type:'FETCH_USER',
        payload:response.data
    })
})
