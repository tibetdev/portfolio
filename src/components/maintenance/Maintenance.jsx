import React from 'react';
import './maintenance.css';
import { BsCupStraw } from 'react-icons/bs';

function Maintenance() {
  return (
    <div className='tenzin__maintenance'>
      <div className='tenzin__maintenance-container'>
        <BsCupStraw className='tenzin__maintenance-icon' />
        <h1 className='tracking-in-expand'>Welcome to Tenzin's Portfolio</h1>
        <p>
          Site is{' '}
          <i>
            <b>Under Maintenance</b>
          </i>
          . Please Come after some time. 😄{' '}
        </p>
      </div>
    </div>
  );
}

export default Maintenance;
