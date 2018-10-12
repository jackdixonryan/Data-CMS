import React, { Component } from 'react';
import './create.css'

class Create extends Component{
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12" id="main"> 
            <h5><strong>Create a New Dataset</strong></h5>
            <p className="grey-text">A dataset includes a title, a table, and any notes you want the publisher wants to make about the data.</p>
            <hr></hr>
            <div className="input-field s8">
              <input className="validate" type="text" name="data-name" id="data-name"/>
              <label htmlFor="data-name">Dataset Name:</label>
            </div>
            <div className="file-field input-field">
              <div className="btn">
                <span>File</span>
                <input type="file"/>
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
              </div>
            </div>
            <div className="input-field">
              <p>Comments</p>
              <button className="btn waves-effect col s1">+</button>
              <textarea className="grey-text col s10">Eventually this will only display when the add comment button is clicked but for now it appears automatically. I'm not going to use the materialize template for it as it feels like it'll look better to have a box for big comments, and I'd also like to have tools build in that could bold text, indent, choose fonts, add equations, pictures, etc. A proper content manager.</textarea>
            </div>
            <div className="switch col s8">
              <p className="grey-text">Dataset pages are best when available to the public, but we get it if you'd rather keep it a secret.</p>
              <label>
                Public
                <input type="checkbox"/>
                <span class="lever"></span>
                Private
              </label>
            </div>
            <div className="input-field col s4">
              <button className="btn waves-effect">Add Data</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Create;