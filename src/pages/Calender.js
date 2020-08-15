import React from 'react';
import {Collapse} from 'react-collapse';

class Calender extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {isOpened: true};
  }

  render() {
    const {isOpened} = this.state;
    const height = 100;

    return (
      <div>
        <div className="config">
          <label className="label">
            <button
              className="input"
              type="checkbox"
              checked={isOpened}
              onClick={() => {
                if(this.state.isOpened) {
                  this.setState({isOpened: false})
                } else {
                  this.setState({isOpened: true})
                }
              }}>
                Add Customer
            </button>
          </label>
        </div>
        <Collapse isOpened={isOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
          <div style={{height}} className="blob">
            yoyo
          </div>
        </Collapse>
      </div>
    );
  }
}

// import React from 'react';

// function Calender() {
//   return (
//     <div className="calender">
//       <h1>Calender</h1>
//     </div>
//   );
// }

export default Calender;