import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';

const PageOne=()=>{
    return(<div>PageOne
        <Link to='/pagetwo'>Navigation to Page Two </Link>
    </div>)
}
const PageTwo=()=>{
    return(<div>PageTwo</div>)
}
class App2 extends React.Component{
    render(){
        return(<div>
            <BrowserRouter>
            {/* <div> */}
            
            <Route path='/' exact component={PageOne}/>
            <Route path='/pagetwo'  component={PageTwo}/>
            {/* </div> */}
            </BrowserRouter>
        </div>)
    }
}

export default App2;