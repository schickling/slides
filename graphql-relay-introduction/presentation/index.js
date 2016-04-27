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


import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'


const images = {
  demo: require('../assets/demo.gif'),
  architecture: require('../assets/architecture.png'),
  graphcool: require('../assets/graphcool-logo.svg'),
  graphql: require('../assets/graphql-logo.svg'),
  relay: require('../assets/relay-logo.svg'),
}

preloader(images)

const colors = {
  primary: '#27AE60',
  dark: '#148042',
  grey: '#2d2d2d',
}

const theme = createTheme(colors)

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={[]}>
          <Slide bgColor='primary'>
            <Heading size={1} fit caps textColor='dark' lineHeight={1}>
              An introduction to
            </Heading>
            <Heading size={1} fit>
              GraphQL & Relay
            </Heading>
          </Slide>
          <Slide bgColor='white'>
            <Layout>
              <Fill>
                <Image src={images.graphql} style={{padding: 20}} height='300px'/>
                <Heading size={4} textColor='secondary'>GraphQL</Heading>
              </Fill>
              <Fill>
                <Image src={images.relay} style={{padding: 20}} height='300px'/>
                <Heading size={4} textColor='secondary'>Relay</Heading>
              </Fill>
              <Fill>
                <Image src={images.graphcool} style={{padding: 20}} height='300px'/>
                <Heading size={4} textColor='secondary'>Demo</Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgColor='primary'>
            <Heading size={1} fit>
              <Heading caps size={5} textColor='dark'>
                Status Quo?
              </Heading>
              <Appear>
                <Heading size={1} textColor='white'>
                  RESTful APIs
                </Heading>
              </Appear>
            </Heading>
          </Slide>
          <Slide>
            <Heading size={1} fit>
              Characteristics
            </Heading>
            <List textColor='white'>
              <ListItem>Static CRUD endpoints + RPC</ListItem>
              <ListItem>Fixed response structure</ListItem>
              <ListItem>API versioning</ListItem>
            </List>
            <CodePane
              lang='js'
              source={require('raw!../assets/rest-simple.json')}
              margin='40px auto'
            />
          </Slide>
          <Slide notes="Ask what's wrong with that">
            <Heading size={1} fit>
              What if?!
            </Heading>
            <Appear>
              <CodePane
                lang='js'
                source={require('raw!../assets/rest-comments.json')}
                margin='40px auto'
              />
            </Appear>
          </Slide>
          <Slide>
            <Heading size={1} fit>
              What's wrong with that?
            </Heading>
            <List textColor='white'>
              <Appear><ListItem>Update endpoint / new API version</ListItem></Appear>
              <Appear><ListItem>N+1 requests problem</ListItem></Appear>
              <Appear><ListItem>Data overfetching</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image src={images.graphql} style={{padding: 20, margin: 0}} height='180px'/> GraphQL
            </Heading>
            <Layout>
              <Fill style={{margin: '40px 0', background: colors.dark, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/query-simple.gql')}
                  bgColor='dark'
                />
              </Fill>
              <Fit>&nbsp;</Fit>
              <Fill style={{margin: '40px 0', background: colors.dark, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/query-simple.json')}
                  bgColor='dark'
                />
              </Fill>
            </Layout>
          </Slide>
          <Slide bgColor='white'>
            <Heading textColor='grey' size={4}>
              Architecture
            </Heading>
            <Image src={images.architecture} width='100%' />
          </Slide>
          <Slide>
            <Heading textColor='white' size={4}>
              What is GraphQL?
            </Heading>
            <BlockQuote bgColor='dark' padding='50px'>
              <Quote textSize='40' textColor='white'>
                GraphQL is a query language designed to build client applications by providing an intuitive and flexible syntax and system for describing their data requirements and interactions
              </Quote>
              <Cite>GraphQL Spec</Cite>
            </BlockQuote>
            <List textColor='white'>
              <ListItem>Solves problems of REST</ListItem>
              <ListItem>Lets you define + expose your data model through a typesystem</ListItem>
              <ListItem>Network agnostic</ListItem>
            </List>
          </Slide>
          <Slide notes='Misconceptions, unopinionated'>
            <Heading size={1} fit>
              What it's not
            </Heading>
            <List textColor='white'>
              <ListItem>Not a (graph) database</ListItem>
              <ListItem>Not a specific library/framework - It's an open specification</ListItem>
              <ListItem>Implements no logic (e.g. auth)</ListItem>
            </List>
          </Slide>
          <Slide notes='Advantage for client'>
            <Heading size={1} margin='0 0 60px'>
              Queries
            </Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/query-advanced.gql')}
                  margin='40px auto'
                />
              </Fill>
              <Fit>&nbsp;</Fit>
              <Fill>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/query-advanced.json')}
                  margin='40px auto'
                />
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={1} margin='0 0 60px'>
              Fragments
            </Heading>
            <Layout>
              <Fill style={{margin: '40px 0', background: colors.grey, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/query-fragment.gql')}
                />
              </Fill>
              <Fit>&nbsp;</Fit>
              <Fill style={{margin: '40px 0', background: colors.grey, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/query-advanced.json')}
                />
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={1} margin='0 0 60px'>
              Mutations
            </Heading>
            <Layout>
              <Fill style={{margin: '40px 0', background: colors.grey, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/mutation.gql')}
                />
              </Fill>
              <Fit>&nbsp;</Fit>
              <Fill style={{margin: '40px 0', background: colors.grey, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/mutation.json')}
                />
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image src={images.relay} style={{padding: 20, margin: 0}} height='240px'/> Relay
            </Heading>
            <Layout>
              <Fill style={{margin: '40px 0', background: colors.dark, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/relay-component.example')}
                  bgColor='dark'
                />
              </Fill>
              <Fit>&nbsp;</Fit>
              <Fill style={{margin: '40px 0', background: colors.dark, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/relay-container.example')}
                  bgColor='dark'
                />
              </Fill>
            </Layout>
          </Slide>
          <Slide notes='JS framework connecting React apps with GraphQL backends'>
            <Heading textColor='white' size={4}>
              What is Relay?
            </Heading>
            <BlockQuote bgColor='dark' margin='40px' padding='50px'>
              <Quote textSize='40' textColor='white'>
                Relay is to data what React is to the DOM
              </Quote>
              <Cite>@sorenbs</Cite>
            </BlockQuote>
            <List textColor='white'>
              <ListItem>GraphQL client for React</ListItem>
              <ListItem>Co-locates data dependencies with components</ListItem>
              <ListItem>Includes powerful mutation system</ListItem>
            </List>
          </Slide>
          <Slide bgColor='white'>
            <Heading textColor='grey' size={4}>
              Architecture
            </Heading>
            <Image src={images.architecture} width='100%' />
          </Slide>
          <Slide bgImage={images.demo} bgDarken={0.55}>
            <Heading size={1} fit>
              Demo
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
