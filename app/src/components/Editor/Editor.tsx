import React from 'react';

import { ColorPicker } from './components/ColorPicker';
import { RangePicker } from './components/RangePicker';
import { Header } from './styles';

export const Editor: React.FC = () => (
  <div>
    <Header className="title is-3">Customize your dream rectangle:</Header>
    <div className="level">
      <div className="level-item">
        <ColorPicker />
      </div>
      <div className="level-item">
        <div>
          <Header className="title is-4">Border radius:</Header>
          <RangePicker />
        </div>
      </div>
      <div className="level-item">
        <div>
          <Header className="title is-4">Font size:</Header>
          <RangePicker min={8} max={48} defaultValue={14} />
        </div>
      </div>
    </div>
  </div>
);
