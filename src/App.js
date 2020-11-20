import React, {useEffect} from 'react';
import {Col, Row} from 'antd';
import {useDispatch} from 'react-redux';
import {InfoCard} from './components/InfoCard/InfoCard';
import {PatientsList} from './components/PatientsList/PatientsList';
import {loadPresentList, loadQuittingList} from './redux/action-creators';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPresentList())
    dispatch(loadQuittingList())
  }, [])

  return (
    <>
      <div style={{backgroundColor: '#f0f0f0', minHeight: '100vh', padding: 25}}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <InfoCard/>
          </Col>
          <Col span={12}>
            <PatientsList/>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
