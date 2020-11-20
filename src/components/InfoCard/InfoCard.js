import React, {useEffect, useState} from 'react';
import {Card} from 'antd';
import {useSelector} from 'react-redux';

export const InfoCard = () => {
  const {patientInfo} = useSelector(state => state);
  const [patientAge, setPatientAge] = useState('')

  useEffect(() => {
    if (patientInfo) {
      const age = ((Date.now() - new Date(patientInfo.birthDate)) / (1000 * 60 * 60 * 24 * 365.25)).toFixed()
      setPatientAge(age);
    } else {
      setPatientAge('');
    }
  }, [patientInfo])

  return (
    <>
      <Card title="Информация о пациенте" style={{ width: '100%', minHeight: '90vh' }}>
        <p>{`ФИО: ${patientInfo?.firstName || ''} ${patientInfo?.lastName || ''}`}</p>
        <p>{`Возраст: ${patientAge || ''}`}</p>
        <p>{`Диагноз: ${patientInfo?.diagnosis || ''}`}</p>
      </Card>
    </>
  );
};
