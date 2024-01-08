import './App.css';
import data from './Data';


function App(props) {
  // code here
 
  let data = props.props;
  let galleyStyle = {
    textAlign: "center",
    
  }
  let styleMydiv = {
    display: "grid",
    gridTemplateColumns:"repeat(2,1fr)",
    margin:"20px",
    gap:"50px",
    placeItems: "center"

  }
  return(
    <>
    <h1 style ={galleyStyle}>Kalvium Gallery</h1>

    <div style={styleMydiv}> 
      <img src = {data[0].img} width={"600px"}/>
      <img src = {data[1].img} width={"600px"}/>
      <img src = {data[2].img} width={"600px"}/>
      <img src = {data[3].img} width={"600px"}/>
    </div>

    {/* <div style = {styleMydiv}>
      {data.map((el)=>(
      <div>
        <img src = {el.img} width={"300px"}/>
      </div>
      ))}
    </div> */}



    </>

  )
}

export default App;
