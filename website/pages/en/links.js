/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Links extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Links</h1>
            </header>
          
          <h2>Affiliated Sites</h2>
          <ul>
            <li><a href="http://www.rubyonracetracks.com/">Ruby on Racetracks</a></li>
          </ul>
          
          <h2>Other Links</h2>
          <ul>
            <li><a href="https://blog.planetargon.com/entries/7-steps-to-take-over-an-existing-rails-app-before-you-write-a-line-of-code">Planet Argon: 7 Steps to Take Over an Existing Rails App (Before You Write A Line Of Code)</a></li>
            <li><a href="https://www.justinweiss.com/articles/finding-your-way-around-a-new-rails-project/">Justin Weiss: Finding Your Way Around a New Rails Project</a></li>
          </ul>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Links;
