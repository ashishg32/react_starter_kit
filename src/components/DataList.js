import React from 'react';
import {
  ListGroup,
  ListGroupItem 
} from 'react-bootstrap';

const DataList = (props) => {
  const {
    list,
    onItemClick
  } = props;

  return (
    <ListGroup>
      {
        list.map((obj, index) => {
          return(
            <ListGroupItem key={index} onClick={(e) => onItemClick(e, obj)}>
              {obj.name}
            </ListGroupItem>
          )
        })
      }
    </ListGroup>
  );
}

export default DataList;
