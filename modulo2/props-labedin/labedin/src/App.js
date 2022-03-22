import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Competencias from './components/Competencias/Competencias';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem='https://ca.slack-edge.com/TLAVDH7C2-U031TM43NUU-590cc36bd2ec-512'
          nome="Lourenço De Souza" 
          descricao="Olá mundo, eu me chamo Lourenço. Estou estudando programação web e este é um dos meus primeiros trabalhos usando React."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">

        <h2>Contatos</h2>
        <CardPequeno 
          imagem='http://cdn.onlinewebfonts.com/svg/img_237869.png'
          negrito= 'Email:'
          texto= "lourenco.h.colares@fakemail.com"
        />

        <CardPequeno
          imagem='https://cdn-icons-png.flaticon.com/512/1384/1384007.png'
          negrito='Whatsapp:'
          texto="+55 (44)98888-9999"
        />

        <CardPequeno
          imagem='https://cdn-icons.flaticon.com/png/512/4296/premium/4296521.png?token=exp=1647975143~hmac=5708e3cb8b047ee3067481013f9d4cb8'
          negrito= 'Endereço:'
          texto="Rua 123, Fake. Brasil."
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png" 
          nome="Labenu" 
          descricao="Aprendendo desenvolvimento Web para o mercado de trabalho!" 
        />
        
        <CardGrande
          imagem="https://cdn.dribbble.com/users/610788/screenshots/5157282/spacex.png"
          nome="SpaceX"
          descricao="Fazendo foguetes, carros elétricos e vendendo bitcoins. To the Mars! 🚀"
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-4.png" 
          nome="NASA" 
          descricao="Estudando sobre OVINIs 🛸. To the Moon! 🚀" 
        />
      </div>

      <div className="page-section-container">
        <h2>Competências</h2>

        <Competencias 
          items={['Javascript', 'CSS', 'HTML5', 'Java', 'React']}
          
        />
      </div>


      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />  

        <ImagemButton
          imagem="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          texto="Github"
        />  

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          texto="Linkedin"
        />     
      </div>
    </div>
  );
}

export default App;
