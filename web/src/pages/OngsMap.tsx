import React from 'react';
import locationIcon from '../images/location.svg';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import '../styles/pages/ong-map.css';


function OngsMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={locationIcon} alt="Location"/>

          <h2>Escolha uma ONG no mapa</h2>
          <p>Você pode salvar milhares de vidas com apenas pequeno gesto</p>
        </header>

        <footer>
          <strong>Curitiba</strong>
          <span>Paraná</span>
        </footer>
      </aside>

      <div></div>

      <Link to="" className="create-ong">
        <FiPlus size={32} color="#FFF"/>
      </Link>
  
    </div>
  );
}

export default OngsMap;