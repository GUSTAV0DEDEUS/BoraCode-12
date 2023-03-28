import {useState} from 'react'
import { FaPen } from "react-icons/fa";
import Menu from "./Menu";
import { NavBar, Filter, Switch } from "./styles";
import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import List from '../List';

export default function Header({data}) {
  const OpenFilter = () => {
    document.querySelector(".filter ").classList.toggle("open");
  };
  return (
    <>
      <NavBar>
        <h1>
          Meu Kanban <FaPen />
        </h1>
        <Menu />
      </NavBar>
      <Filter>
        <button type="button" onClick={OpenFilter} id="btn">
          <BsFilter />
          <p>Filtrar</p>
        </button>
        <div className="input">
          <label htmlFor="search">
            <BiSearch />
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Busque por cards, assuntos ou responsáveis..."
          />
        </div>
        <div className="filter">
          <div className="line">
            <input type="checkbox" name="Fazer" id="Fazer" />
            <h3>Fazer</h3>
            <Switch htmlFor="Fazer">
              <span></span>
            </Switch>
          </div>
          <div className="line">
            <input type="checkbox" name="Fazendo" id="Fazendo" />
            <h3>Fazendo</h3>
            <Switch htmlFor="Fazendo">
              <span></span>
            </Switch>
          </div>
          <div className="line">
            <input type="checkbox" name="Feita" id="Feita" />
            <h3>Feita</h3>
            <Switch htmlFor="Feita">
              <span></span>
            </Switch>
          </div>
        </div>
      </Filter>
    </>
  );
}
