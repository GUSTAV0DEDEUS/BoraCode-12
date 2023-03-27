import React, {useRef} from "react";
import { useDrag, useDrop } from "react-dnd";
import { Box, Tags } from "./styles";


export default function Card({texto, title, tags, data}) {
 const ref = useRef();
 
  const [{ isDragging }, dragRef] = useDrag({
    type:'CARD',
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor){
      console.log(item.id);
    }
  })
  dragRef(dropRef(ref));
  return (
    <Box ref={ref} isDragging={isDragging}>
      <h3>{title}</h3>
      <p>{texto}</p>
      <Tags>
       {tags}
      </Tags>
    </Box>
  )
}