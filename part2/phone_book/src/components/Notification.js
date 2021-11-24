import React from 'react';
import './index.css';

const Notification = ({ notification }) => {
  if (notification === null) {
    return null;
  }

  return <div className={notification.type}>{notification.message}</div>;
};

export { Notification };
