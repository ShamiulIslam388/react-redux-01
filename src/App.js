import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";
import rotateAction from "./actions/rotateAction";

class App extends React.Component {
  render() {
    return (
      <img
        src={`https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png`}
        className={"App-logo" + (this.props.rotating ? "" : " App-logo-paused")}
        alt="logo"
        onClick={() => {
          this.props.rotateAction(!this.props.rotating);
        }}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction),
  rotateAction: (payload) => dispatch(rotateAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
