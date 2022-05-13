import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserAuth } from './actions';

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route exact path="/home" element={<Header/> } /> */}
          <Route exact path="/home" element={<><Header/><Home/></>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
