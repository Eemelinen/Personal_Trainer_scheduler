import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Collapse } from 'react-collapse';
import AddTraining from './AddTraining';

function AddTrainingToggler(props) {
  const { saveTraining } = props;
  const [ isOpened, setOpened ] = useState(false);

    return (
      <div>
        <Button
          className="input"
          onClick={() => {
            if(isOpened) {
              setOpened(false)
            } else {
              setOpened(true)
            }
          }}>
          Add Training
        </Button>
        <Collapse isOpened={isOpened}>
          <AddTraining saveTraining={saveTraining} setOpened={setOpened} />
        </Collapse>
      </div>
    );
}

export default AddTrainingToggler;