import React, { useRef, useContext} from "react";
import { useDrag, useDrop } from "react-dnd";
import { Box, Tags } from "./styles";
import BoardContext from '../Board/context'

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const {move} = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item:{index, listIndex} ,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if(draggedIndex === targetIndex  && draggedListIndex === targetListIndex){
        //outra lista
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top)/2
      
      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if(draggedIndex < targetIndex && draggedTop < targetCenter){
        return;
      }
      if(draggedIndex > targetIndex && draggedTop > targetCenter){
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex)

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  })

  dragRef(dropRef(ref));

  return (
    <Box ref={ref} isDragging={isDragging}>
      <h3>{data.title}</h3>
      <p>{data.content}</p>
      <Tags>
      {data.labels.map((label) => (
          <span key={label.id}>{label.tag}</span>
        ))}
      </Tags>
    </Box>
  );
}
