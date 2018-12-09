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

class Git extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Git</h1>
            </header>
          
          Source Code: <a href="https://bitbucket.org/rubyonracetracks/rails-legacy-docu">rubyonracetracks/rails-legacy-docu</a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Git;
