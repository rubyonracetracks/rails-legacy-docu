/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('01-01.html', language)}>Get started now!</Button>
            <Button href={docUrl('A-00.html', language)}>Examples</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        
        <Container padding={['bottom', 'top']} background="dark">
          <h2>Welcome to Legacy Rails Apps!</h2>

          While plenty has been written about how to start new Rails apps, much less has been written about how to work on legacy Rails apps.  This <a href="http://www.rubyonracetracks.com/">Ruby on Racetracks</a> site applies the Ruby on Racetracks principles to legacy apps.
          <br /><br />
          While the Generic App and Rails Neutrino app creation tools are designed to give you the same output every time you use them, every legacy app must be different, and the specific actions needed to build, test, and improve them will be different.  This Legacy Rails Apps site describes the general actions you need to take.
          <br /><br />
          Please note that compromises are needed to work on legacy Rails apps.  For example, adding RuboCop and Rails Best Practices is NOT recommended.  A legacy app that does not already have these tools in place likely has thousands of offenses to correct.  This would require an industrial scale cleanup at a time when you have more pressing issues to address.
        </Container>
      </div>
    );
  }
}

module.exports = Index;
