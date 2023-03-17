console.log("Message to developer")
function Alertmessage(){
    const Hi=()=>alert("Message from Javascript Alert!")
    return <div><button onClick= {Hi} >click me</button></div>
}
ReactDOM.render(<Alertmessage/>,document.getElementById('mydiv'))