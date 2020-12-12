import React, { Component } from 'react'
import Titre from './../../components/Titres/Titre'
import Button from "../../components/Button/Button"
import axios from 'axios';
import Pays from '../Pays/Pays'
export default class PaysManager extends Component {
    state={
        listePays:[],
        loading:false,
        regionSelect:null,
        numeroPageActuel:1
    }

    componentDidMount = () =>{
        this.handlePaysRegion("all")
    }

    handlePaysRegion = (region) =>{
        let param = ''
        if (region === "all") {
            param = region
        }else{
            param= `region/${region}`
        }
        this.setState({loading:true});
        axios.get(`https://restcountries.eu/rest/v2/${param}`)
            .then(res=>{
               const listePays= res.data.map(pays=>{
                    return{
                        nom:pays.name,
                        nomFrancais:pays.translations.fr,
                        capitale:pays.capital,
                        region:pays.region,
                        drapeau:pays.flag
                    }
                })
                this.setState({
                    listePays,
                    loading:false,
                    regionSelect:region,
                    numeroPageActuel: 1
                });
                
            })
            .catch(err=>{
                console.log(err);
                this.setState({loading:false});
            })
    }
    render() {
        let pagination=[];
        let listePays=''
        if (this.state.listePays) {
            let fin = this.state.listePays.length/10;
            if(this.state.listePays.length % 10 !== 0) fin++;
            for (let index = 1; index <= fin; index++) {
                
                pagination.push(
                <Button
                 key={index} 
                 typeBtn="btn-primary"  
                 select={this.state.numeroPageActuel===index} 
                 clic={() => this.setState({numeroPageActuel:index})}>
                    {index}
                </Button>
                );
            }

            const debut = (this.state.numeroPageActuel-1)*10;//0*10 = 0 / 1 * 10 = 10 / 2 * 10 = 20
            const finListe = (this.state.numeroPageActuel-1)*10 + 10; // 0 * 10 + 10 = 10 / 1* 10 + 10 = 20 / 2 * 10 + 10 = 30
            const listeReduite = this.state.listePays.slice(debut,finListe);

             listePays =  listeReduite.map(pays=>{
                return(
                    <div className="col-12 col-md-6" key={pays.nom}>
                        <Pays  {...pays}/>
                    </div>
                   
                )
           })
        }
        return (
            <div className="container">
                <Titre>Liste des pays du monde</Titre>
                <Button typeBtn="btn-danger" clic={() => this.handlePaysRegion("all")} select={this.state.regionSelect==="all"}>Tous</Button>
                <Button typeBtn="btn-danger" clic={() => this.handlePaysRegion("Africa")} select={this.state.regionSelect==="Africa"}>Afrique</Button>
                <Button typeBtn="btn-danger" clic={() => this.handlePaysRegion("Europe")} select={this.state.regionSelect==="Europe"}>Europe</Button>
                <Button typeBtn="btn-danger" clic={() => this.handlePaysRegion("Asia")} select={this.state.regionSelect==="Asia"}>Asie</Button>
                <Button typeBtn="btn-danger" clic={() => this.handlePaysRegion("Americas")} select={this.state.regionSelect==="Americas"}>Amérique</Button>
                <Button typeBtn="btn-danger" clic={() => this.handlePaysRegion("Oceania")} select={this.state.regionSelect==="Oceania"}>Océanie</Button>

                Nombres de pays :<span className="badge badge-success">{this.state.listePays.length}</span>

                {
                    this.state.loading ? <div className="alert alert-info">Chargement ...</div>:<div className="row no-gutters">
                      {listePays}
                        
                    </div>
                }
                <div>{pagination}</div>
            </div>
        )
    }
}
