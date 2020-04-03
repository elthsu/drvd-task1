import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    input: "",
    dim: []
  }

  updateInput = (e) => {
    this.setState({
      dim: [],
      input: parseInt(e.target.value, 10)
    })

  }

  submitDim = () => {
    let dim = []
    let row = 0
    for (let index = 0; index < (this.state.input * this.state.input); index++) {
      if(Number.isInteger(index / this.state.input)){
        row++
      }
      // console.log(row % 2)
      if(row % 2 !== 0){
        if(index % 2 === 0) {
          dim.push("white")
        }
        else if(index % 2 !== 0){
          dim.push("black")
        }
      }
      else {
        console.log(row, index)
        if(this.state.input % 2 === 0){
          if(index % 2 === 0) {
            dim.push("black")
          }
          else if (index % 2 !== 0) {
            dim.push("white")
          }
        }
        else {
          if(index % 2 !== 0) {
            dim.push("black")
          }
          else if (index % 2 === 0) {
            dim.push("white")
          }
        }

      }

    }
    this.setState({
      dim: dim
    })
  }

  clearInput = () => {
    this.setState({
      input: '',
      dim: []
    })
  }

  render(){
    let gridRows = "";
    for (let index = 0; index < this.state.input; index++) {
      gridRows = gridRows + "1fr "
    }
    return (
      <div className="App">
        <header className="App-header">
          <div style={{display: "flex", flexDirection:"row", justifyContent:"center", alignItems: "center", height: "50px"}}>
            <p>What do you want the dimension to be for the board?</p>
            <input style={{width: '30px', height: "30px", marginLeft: "20px"}} onClick={this.clearInput}  type="text" value={this.state.input} onChange={this.updateInput} />
            <button style={{height: "30px", marginLeft: "20px"}} onClick={this.submitDim}>Submit</button>
          </div>
          <div style={{display:"grid", gridTemplateColumns: gridRows}} >
            {
              this.state.dim.map((item, index)=>{
                return (
                  <div className="row">
                    {(item === "black") 
                      ? <div style={{backgroundColor: "black", width: '50px', height: '50px'}}></div>
                      : <div style={{backgroundColor: "white", width: '50px', height: '50px'}}></div>
                    }
                  </div>
                )
              })
            }
          </div>

        </header>
      </div>
    );
  }
}

export default App;
