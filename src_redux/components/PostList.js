import React from 'react';
import {connect} from 'react-redux';

import fetchPosts from 'actions';
import UserHeader from './UserHeader';
class PostList extends React.Component{
    componentDidMount(){
   this.props.fetchPosts();
    }
    render(){
        console.log('something',this.props.posts);
        return(<div>{this.props.posts.map(post=>{
            return(<div key={post.id}>
                <div>{post.title}</div>
                <div>{post.body}</div>
                <div><UserHeader userId={post.userId}/></div>
            </div>)
        })}</div>)
    }
}
const mapStateToProps=(state)=>{
    return({posts:state.posts});
}
export default connect(mapStateToProps,{fetchPosts})(PostList);