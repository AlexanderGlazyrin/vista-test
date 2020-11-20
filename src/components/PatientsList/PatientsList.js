import React from 'react';
import {Col, Row, Tabs} from 'antd';
import styles from './PatientList.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {Patient} from '../Patient/Patient';
import {addInfoAC} from '../../redux/action-creators';

const { TabPane } = Tabs;

export const PatientsList = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch()

  return (
    <div className={styles.card}>
      <Tabs defaultActiveKey="1" onChange={() => dispatch(addInfoAC(null))}>
        <TabPane tab={`Присутствуют(${state ? state.presentList.length : 0})`} key="1">
          <Row>
            <Col span={8}>
              № ИБ
            </Col>
            <Col span={8}>
              ФИО
            </Col>
            <Col span={8}>
              Палата
            </Col>
          </Row>
          {state ? state.presentList.map((patient) => {
            return <Patient
              key={patient.historyNumber}
              historyNumber={patient.historyNumber}
              name={`${patient.firstName} ${patient.lastName}`}
              thirdParam={patient.bedNumber}
              patient={patient}
            />
          }) : null}
        </TabPane>
        <TabPane tab={`Выбывшие(${state ? state.quittingList.length : 0})`} key="2">
          <Row>
            <Col span={8}>
              № ИБ
            </Col>
            <Col span={8}>
              ФИО
            </Col>
            <Col span={8}>
              Причина выбытия
            </Col>
          </Row>
          {state ? state.quittingList.map((patient) => {
            return <Patient
              key={patient.historyNumber}
              historyNumber={patient.historyNumber}
              name={`${patient.firstName} ${patient.lastName}`}
              thirdParam={patient.cause}
              patient={patient}
            />
          }) : null}
        </TabPane>
      </Tabs>
    </div>
  );
};
