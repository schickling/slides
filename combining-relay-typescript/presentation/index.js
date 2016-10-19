import React from 'react'
import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'
import GraphiQL from 'graphiql'
import Tweet from '../tweet'

import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'
import 'graphiql/graphiql.css'

function graphQLFetcher(graphQLParams) {
  return fetch('https://api.graph.cool/simple/v1/cisa544401x8701839k202tqk', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

const images = {
  demo: require('../assets/demo.gif'),
  graphiql: require('../assets/graphiql.gif'),
  scope: require('../assets/scope.png'),
  graphcool: require('../assets/graphcool-logo.svg'),
  relay: require('../assets/relay-logo.svg'),
  twitter: require('../assets/twitter-logo.svg'),
  github: require('../assets/github.png'),
  typescript: require('../assets/typescript-logo.png'),
  technologies: require('../assets/technologies.svg'),
  technologiesFocus: require('../assets/technologies-focus.svg'),
}

preloader(images)

const colors = {
  primary: '#fff',
  relay: '#f26b00',
  typescript: '#007acc',
  graphcool: '#00b861',
  graphql: '#e10098',
  lightgrey: '#d0d0d0',
  grey: '#2d2d2d',
}

const prepareNote = (notes) => notes.join('<br />')
const notes = {
  about: [
    'today show you combine',
    'when we started - problems when changing',
    'introduced typescript - share experience',
  ],
  goal: [
    'hard decision - worth it - how painful',
    'we learned a lot - encourage',
  ],
  why: [
    'why good idea - two major points',
    '1) conf: compiler - changes w/o breaking - afraid to touch',
    '2) DX: auto completion - refactoring - docs',
    '3) graphql typesystem',
  ],
  technologies: [
    'even though',
    'typed language + graphql',
    'no right/wrong',
  ],
  cover: [
    'ambitious',
    'how many graphql prod',
    'pokedex example app',
  ],
  graphql: [
    'replacement of rest',
    'query data',
    'first graphql query',
  ],
  relay: [
    'declarative gql client - react dom/relay data',
    'colocating component / graphql query',
  ],
  typescript: [
    'typed + compiled to JS - last month t2',
    'type definitions - libraries',
  ],
  drawbacks: [
    'even though',
    'typed language + graphql',
    'no right/wrong',
  ],
}

const theme = createTheme(colors)

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={[]}>
          <Slide bgColor='white'>
            <Heading size={1} fit caps lineHeight={1} textColor='lightgrey'>
              <span style={{color: colors.relay}}>Relay</span> & <span style={{color: colors.typescript}}>Typescript</span>
            </Heading>
            <Heading size={1} textColor='lightgrey' fit>
              A typed love story
            </Heading>
          </Slide>
          <Slide notes={prepareNote(notes.about)}>
            <Code textColor='grey'>$ whoami</Code>
            <div>
              <List textColor='grey' style={{display: 'inline-block', lineHeight: 1.5}} margin='60px 0 0'>
                <ListItem>Johannes Schickling &lt;js@graph.cool&gt;</ListItem>
                <ListItem>Co-founder of Graphcool</ListItem>
              </List>
            </div>
            <div style={{ marginTop: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image src={images.twitter} style={{padding: '0 20px', margin: 0}} height='50px'/> @_schickling <Image src={images.github} style={{padding: '0 20px 0 50px', margin: 0}} height='50px'/> schickling
            </div>
          </Slide>
          <Slide notes={prepareNote(notes.goal)}>
            <Heading textColor='grey' fit size={1}>
              Try a typed language 🙏
            </Heading>
          </Slide>
          <Slide notes={prepareNote(notes.why)}>
            <Heading textColor='grey' size={1}>
              Why a typed language in the frontend?
            </Heading>
            <List textColor='grey' style={{display: 'inline-block', lineHeight: 1.5}} margin='60px 0 0'>
              <ListItem>Confidence to make changes</ListItem>
              <ListItem>Better developer experience (DX)</ListItem>
              <ListItem>Perfect fit with GraphQL</ListItem>
            </List>
          </Slide>
          <Slide bgColor='white' notes={prepareNote(notes.technologies)}>
            <Image height={400} src={images.technologiesFocus} />
          </Slide>
          <Slide bgColor='white'>
            <Image height={400} src={images.technologies} />
          </Slide>
          <Slide bgColor='white' notes={prepareNote(notes.cover)}>
            <Heading textColor='grey' size={1}>
              We'll cover...
            </Heading>
            <Image margin='90px 0 0' width='100%' src={images.scope} />
          </Slide>
          <Slide bgColor='graphql' notes={prepareNote(notes.graphql)}>
            <BlockQuote bgColor='dark' padding='50px'>
              <Quote textSize='40' textColor='white'>
                GraphQL is a query language designed to build client applications by providing an intuitive and flexible syntax and system for describing their data requirements and interactions
              </Quote>
              <Cite>GraphQL Spec</Cite>
            </BlockQuote>
            <List textColor='white' style={{lineHeight: 1.5}}>
              <ListItem>Solves problems of REST</ListItem>
              <ListItem>Lets you define + expose your data model via a typesystem</ListItem>
              <ListItem>Network agnostic</ListItem>
            </List>
          </Slide>
          <Slide bgColor='graphql'>
            <div style={{height: '500px', textAlign: 'left'}}>
              <GraphiQL variables={''} fetcher={graphQLFetcher} />
            </div>
          </Slide>
          <Slide bgColor='relay' notes={prepareNote(notes.relay)}>
            <Heading size={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image src={images.relay} style={{padding: 20, margin: 0}} height='240px'/> Relay
            </Heading>
            <List textColor='white' margin='60px 0 0' style={{lineHeight: 1.5}}>
              <ListItem>Developed and used by Facebook since 2011</ListItem>
              <ListItem>First released GraphQL client</ListItem>
              <ListItem>Opinionated framework vs productivity</ListItem>
            </List>
            <Text italic textColor='white' margin='70px 0 0'>github.com/facebook/relay</Text>
          </Slide>
          <Slide bgColor='relay'>
            <Heading size={1}>
              Usage
            </Heading>
            <Layout>
              <Fill style={{margin: '80px 0', background: colors.dark, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/relay-component.example')}
                  bgColor='dark'
                />
              </Fill>
              <Fit>&nbsp;</Fit>
              <Fill style={{margin: '80px 0', background: colors.dark, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/relay-container.example')}
                  bgColor='dark'
                />
              </Fill>
            </Layout>
          </Slide>
          <Slide bgColor='relay'>
            <Heading textColor='white' size={1}>
              Tooling
            </Heading>
            <List textColor='white' style={{display: 'inline-block', lineHeight: 1.5}} margin='60px 0 0'>
              <ListItem><Code textColor='white'>babel-plugin-react-relay</Code></ListItem>
              <ListItem>GraphQL IntelliJ Plugin (optional)</ListItem>
            </List>
          </Slide>
          <Slide bgColor='typescript' notes={prepareNote(notes.typescript)}>
            <Heading size={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image src={images.typescript} style={{padding: '20px 45px 20px 0', margin: 0}}/> Typescript
            </Heading>
            <List textColor='white' margin='60px 0 0' style={{lineHeight: 1.5}}>
              <ListItem>Typed superset of Javascript (needs to be compiled)</ListItem>
              <ListItem>Typescript 2 is really easy to use</ListItem>
              <ListItem>Type defintions can be installed via <strike>npm</strike> <Code textColor='white'>yarn</Code></ListItem>
            </List>
            <Text italic textColor='white' margin='70px 0 0'>github.com/Microsoft/TypeScript</Text>
          </Slide>
          <Slide bgColor='typescript'>
            <Heading size={1}>
              Usage
            </Heading>
            <Layout>
              <Fill style={{margin: '80px 0', background: colors.dark, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/typescript.example')}
                  bgColor='dark'
                />
              </Fill>
            </Layout>
          </Slide>
          <Slide bgColor='typescript'>
            <Heading textColor='white' size={1}>
              Tooling
            </Heading>
            <List textColor='white' style={{display: 'inline-block', lineHeight: 1.5}} margin='60px 0 0'>
              <ListItem>Great IDE support in Webstorm & Visual Code</ListItem>
              <ListItem>Webpack: <Code textColor='white'>awesome-typescript-loader</Code></ListItem>
              <ListItem>TSLint</ListItem>
            </List>
          </Slide>
          <Slide bgImage={images.demo} bgDarken={0.55}>
            <Heading size={1} fit>
              Demo
            </Heading>
          </Slide>
          <Slide>
            <Heading textColor='grey' size={1}>
              Drawbacks
            </Heading>
            <List textColor='grey' style={{display: 'inline-block', lineHeight: 1.5}} margin='60px 0 0'>
              <ListItem>Manual sync between GraphQL & Typescript</ListItem>
              <ListItem>Restart your build/dev tools when schema changes</ListItem>
              <ListItem>Buildtime overhead using Typescript + Babel</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading textColor='grey' size={1}>
              Future 🚀
            </Heading>
            <List textColor='grey' style={{display: 'inline-block', lineHeight: 1.5}} margin='60px 0 0'>
              <ListItem><Code>graphql-config</Code></ListItem>
              <ListItem><Code>graphql-hot-reload</Code></ListItem>
              <ListItem>Automated code generation</ListItem>
              <ListItem>create-react-app adds support for Relay (#462)</ListItem>
            </List>
          </Slide>
          <Slide>
            <Tweet id='786639860744482816' />
          </Slide>
          <Slide>
            <Heading size={1} textColor='grey' margin='0 0 80px'>
              Thank you 🙌
            </Heading>
            <Heading textColor='lightgrey' size={4} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              Follow us on <Image src={images.twitter} style={{padding: '0 20px', margin: 0}} height='50px'/> @graphcool
            </Heading>
            <Heading size={4} bgColor='graphcool' margin='120px 0 40px' textColor='white' style={{padding: 20}}>Invite code: ReactLondon</Heading>
            <Heading size={5} textColor='grey'>
              Get early access on <i>www.graph.cool</i>
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
