import React, { useEffect } from 'react';
import SweetAlert from 'react-native-sweet-alert';

interface SweetAlertProps {
    title: string;
    subTitle: string;
    onConfirm: () => void; 
}

export const SweetAlertComponent: React.FC<SweetAlertProps> = ({ title, subTitle, onConfirm }) => {
  useEffect(() => {
    SweetAlert.showAlertWithOptions({
      title,
      subTitle,
      confirmButtonTitle: 'OK',
      confirmButtonColor: '#000',
      otherButtonTitle: 'Cancel',
      otherButtonColor: '#dedede',
      style: 'success',
      cancellable: true
    }, onConfirm);
  }, [title, subTitle, onConfirm]);

  return null;
};
