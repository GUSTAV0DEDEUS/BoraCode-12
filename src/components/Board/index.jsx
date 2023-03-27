import React from "react";
import List from "../List"
import { Container } from "./styles";
import { loadLists } from "../../api";

const list = loadLists();
export default function Board() {
  return (
    <Container>
      {list.map(list => <List key={list.title} data={list}/>)}
    </Container>
  );
}