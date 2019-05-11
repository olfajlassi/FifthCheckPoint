import React, {Component} from 'react';
import './App.css';
import Box from './components/box';
import Location from './components/location';
import Chiffre from './components/chiffre';

class App extends Component {
  
  render() {
    return (
      <div>

        <h1 class="App">Nos programmes</h1>

        <div class="center-screen" > 
            <Box title="FULL TIME PROGRAM" 
              desc="Un programme intensif de 3 mois pour devenir développeur fullstack js ou java. 
              Un coaching technique et professionnel régulier et des liens très fort avec le monde de l'entreprise." 
              color="#b0eaac"/>
            <Box title="PART TIME PROGRAM" 
              desc="Tu peux développer ton produit technologique pendant l'année scolaire si tu es étudiant
            ou en parallèle de ton travail si tu es un professionnel? ça se passe tous les weekends (demi journée Samedi ou Dimanche) 
            dans notre Hackerspace" 
              color="#fa7d5e"/>
            <Box title="KIDS CODING PROGRAM" 
              desc= "Ce programme vise à initier les plus jeunes (8-12 ans) à l'informatique et à la programmation sur 4 niveaux. Un niveau dure 2 mois. A la fin du programme, l'enfant doit présenter son projet au PDG d'une entreprise technologique" 
              color="#85ccf1"/>
            <Box title="SUMMER ACADEMY" 
              desc="Développe ton produit technologique pendant 3 semaines pendant l'été. Une expérience très riche d'apprentissage et de rencontres 
              avec des passionnés de la technologie." 
              color="#7781fb"/>
        </div>
            
        <br></br>
        <div class="bg-img">
          <div class="center-screen2" > 
          <br></br>
              <h1 class="App-h1"> Quelques chiffres</h1>
              <Chiffre num="+20,000" detail="PASSIONNÉE DU DIGITAL"/>
              <Chiffre num="+500" detail="ETUDIANT DEPUIS LE DEMARRAGE EN AOUT 2016"/>
              <Chiffre num="+300" detail="PRODUIT DÉVELOPPÉS"/>
              <Chiffre num="+30" detail="INSTRUCTEUR GAME, WEB ET MOBILE"/>
              <Chiffre num="+50" detail="SPEAKERS"/>
              <Chiffre num="400m²" detail="DE HACKERSPACE AU COEUR DU LAC1"/>
          </div>
        </div>

        <center>
          <h1>Ou se passe les sessions ?</h1>
          <p>Les sessions se passent dans les Hackerspaces de GoMyCode dans les villes suivantes:
            L'hebergement est possible dans la limite des places disponibles.
          </p>
        </center>

        <div class="center-screen" > 
            <Location image='./tunis.jpg' title="Tunis"/>
            <Location image='./sousse.jpg' title="Sousse"/>
            <Location image='./sfax.jpg' title="Sfax"/>
        </div>
        
      </div>  
      );  }
}

export default App;
