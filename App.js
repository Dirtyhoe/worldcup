import React, { Component } from 'react';
import logo from './logo.svg';
import wc from './wc.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import './App.css';
import News from './News';

class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">
                <img src={wc} class="upleft" />
                Welcome to the World Cup</h1>
            </header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div class="topnav" id="myTopnav">
                <a href="#home" class="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Teams</a>
                <a href="#about">Groups</a>
                <a href="#scores">Scores</a>
                <a href="#tree">Tree</a>
                <a href="#admin">Admin</a>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i></a>
            </div>
            <p></p>
            <p></p>
            <div class="row">
                <div class="col-4 bord">
                    <News
                        image="https://assets2.sportsnet.ca/wp-content/uploads/2018/07/frances-samuel-umtiti-celebrates-scoring-against-belgium-1040x572.jpg"
                        displayName="France Qualifies for the World Cup Final"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra consectetur odio a ultricies. Mauris bibendum sapien vel hendrerit imperdiet. Nullam eget ipsum porttitor, tempor ex sit amet, interdum arcu. Quisque id felis mollis, ullamcorper erat eu, dignissim tellus. In ultrices ultrices orci sit amet viverra."
                    />
                </div>

                <div class="col-4 bord">
                    <News
                        image="https://www.advocate.com/sites/advocate.com/files/2018/06/20/mexico-soccer750x422.jpg"
                        displayName="Mexico Out of the World Cup"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra consectetur odio a ultricies. Mauris bibendum sapien vel hendrerit imperdiet. Nullam eget ipsum porttitor, tempor ex sit amet, interdum arcu. Quisque id felis mollis, ullamcorper erat eu, dignissim tellus. In ultrices ultrices orci sit amet viverra."
                    />
                </div>
                <div class="col-4 bord">
                    <News
                        image="https://img.rasset.ie/000f3e0d-800.jpg"
                        displayName="Korea Beats Germany 2-0"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra consectetur odio a ultricies. Mauris bibendum sapien vel hendrerit imperdiet. Nullam eget ipsum porttitor, tempor ex sit amet, interdum arcu. Quisque id felis mollis, ullamcorper erat eu, dignissim tellus. In ultrices ultrices orci sit amet viverra."
                    />
                </div>
            </div>


        </div>
    );
  }
}

export default App;
