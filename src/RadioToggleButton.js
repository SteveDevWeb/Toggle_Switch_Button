import React, { useState } from 'react';

export default function RadioToggleButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div class="button r" id="button-1">
          <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleToggle}/>
          <div class="knobs"></div>
          <div class="layer"></div>
      </div>
        {isChecked ? <div>ON</div> : <div>OFF</div>}

    </div>
  );
}