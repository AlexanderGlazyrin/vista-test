import React from 'react';
import {Col, Row} from 'antd';
import {useDispatch} from 'react-redux';
import {addInfoAC} from '../../redux/action-creators';

export const Patient = ({historyNumber, name, thirdParam, patient}) => {
  const dispatch = useDispatch();

  const showInfo = () => {
    dispatch(addInfoAC(patient))
  }

  return (
    <a href='#' onClick={showInfo}>
      <Row>
        <Col span={8}>
          {historyNumber}
        </Col>
        <Col span={8}>
          {name}
        </Col>
        <Col span={8}>
          {thirdParam}
        </Col>
      </Row>
    </a>
  );
};
