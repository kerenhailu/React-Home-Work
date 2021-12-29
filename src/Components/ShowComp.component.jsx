import { Routes,Route, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage.component";
import Child from "./Child.component";
import KindergartenTeacher from "./KindergartenTeacher.component";
import Parent from "./Parent.component";

// function ShowComp() {
const Routing = () => {
//   switch (props.number) {
//     case 1:
//       return <Child />;
//     case 2:
//       return <KindergartenTeacher />;
//     case 3:
//       return <Parent />;
//     default:
//       return <div>not work</div>;
//   }
// }
return(
    // <BrowserRouter>
    <div>
      <h1>Show the Component</h1> 
      {/* <Link to="/Child">page Child</Link>
      <Link to="/Parent">page Parent</Link>
      <Link to="/KindergartenTeacher ">page KindergartenTeacher </Link> */}
         <hr />
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route  path="/Child" element={<Child/>}/>
        <Route path='/KindergartenTeacher' element={<KindergartenTeacher/>}/>
        <Route path='/Parent' element={<Parent/>}/>
    </Routes>
    </div>
    // </BrowserRouter>
    
)
};

export default Routing;
