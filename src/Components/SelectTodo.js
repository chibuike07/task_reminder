import React from "react";
import { Link } from "react-router-dom";
const Categories = props => {
  console.log(props);
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>TodoCategories</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          flexBasis: "60%"
        }}
      >
        <Link to="">work</Link>
        <Link to="">home</Link>
        <Link to={{ pathname: props.match.params }}>leisure</Link>
      </div>
    </div>
  );
};
export default Categories;
//   render() {
//     const project = () => {
//       switch(this.projectName) {

//         case "one":   return <ComponentA />;
//         case "two":   return <ComponentB />;
//         case "three": return <ComponentC />;
//         case "four":  return <ComponentD />;

//         default:      return <h1>No project match</h1>
//       }
//     }

//     return (
//       <div>{ project() }</div>
//     )
//   }
