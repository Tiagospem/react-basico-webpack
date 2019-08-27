import React, { Component } from 'react'

import TechItem from './TechItem'

class TechList extends Component {

  /*
  static proptypes = {

  }*/
  //Executado assim que aparecer na tela
  componentDidMount(){
      const techs = localStorage.getItem('techs');
      if(techs) {
        this.setState({
          techs: JSON.parse(techs)
        })
      }
  }

  //executado sempre que houver alterações nas props ou estado
  componentDidUpdate(prevProps, prevState) {
    if(prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  //executado quando o componente deixa de existir
  componentWillUnmount() {
    
  }
  
  
  state = {
    newTech: '',
    techs: []
  }

  //this.props.tech

  /**
   * precisa ser arrow function para acessar
   * a variavel de estado
   */
  handleInputChange = e => {
    console.log(e.target.value);
    this.setState({
      newTech: e.target.value
    })
  }
  /**
   * para manipular array no state, não utilizar
   * push e sim o spread operator
   */
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  handleDelete = (tech) => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)} 
            />
          ))}
        </ul>
        <input 
          type="text" 
          value={this.state.newTech} 
          onChange={this.handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;