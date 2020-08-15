import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import AddTraining from './AddTraining';

function AddTrainingToggler(props) {
  const { saveTraining } = props;
  const [ isOpened, setOpened ] = useState(false);

    return (
      <div>
        <button
          className="input"
          onClick={() => {
            if(isOpened) {
              setOpened(false)
            } else {
              setOpened(true)
            }
          }}>
          Add Training
        </button>
        <Collapse isOpened={isOpened}>
          <AddTraining saveTraining={saveTraining} setOpened={setOpened} />
        </Collapse>
      </div>
    );
}

export default AddTrainingToggler;