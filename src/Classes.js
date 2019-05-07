import React, { Component } from 'react';
import AuthedBase from './AuthedBase';

class Classes extends Component {
  render() {
    return (
      <AuthedBase>
        <h1>My Classes</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Class Name</th>
              <th scope="col">Teacher</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Programming</td>
              <td>Professor Sterpe</td>
              <td><a href="/class/1">View</a></td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Programming</td>
              <td>Professor Sterpe</td>
              <td><a href="/class/1">View</a></td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Programming</td>
              <td>Professor Sterpe</td>
              <td><a href="/class/1">View</a></td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Programming</td>
              <td>Professor Sterpe</td>
              <td><a href="/class/1">View</a></td>
            </tr>
          </tbody>
        </table>
      </AuthedBase>
    );
  }
}

export default Classes;