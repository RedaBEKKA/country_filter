import React, { Component } from 'react'
import axios from "axios"
import Titre from "../components/Titres/Titre"
import Pays from "./Pays/Pays"

export default class Unpays extends Component {
    state={
        data:null,
        loading:false
    }

    componentDidMount = () =>  {
        this.setState({loading:true});
        axios.get(`https://restcountries.eu/rest/v2/name/${this.props.nomP}?fullText=true`)
            .then(response =>{
                console.log(response.data);
                this.setState({
                    data:response.data[0],
                    loading:false});
            })
            .catch(err=>{
                console.log(err);
                this.setState({loading:false});
            })
    }
    render() {
        return (
            <div className="container">
               <Titre>Page du pays : { this.props.nomP}</Titre>
              {this.state.data && 
                <Pays
                drapeau={this.state.data.flag}
                nom={this.state.data.name}
                capitale={this.state.data.capital}
                region={this.state.data.region}
                nomFrancais={this.state.data.translations.fr}
                {...this.props}
                solo={true}
                monnaie = {this.state.data.currencies[0].name}
               />

              }
            </div>
        )
    }
}
