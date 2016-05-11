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

import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'


const images = {
  demo: require('../assets/demo.gif'),
  architecture: require('../assets/architecture.png'),
  graphcool: require('../assets/graphcool-logo.svg'),
  graphql: require('../assets/graphql-logo.svg'),
  kadira: require('../assets/kadira-logo.png'),
  apollo: require('../assets/apollo-logo.png'),
  relay: require('../assets/relay-logo.svg'),
  twitter: require('../assets/twitter-logo.svg'),
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
          <Slide bgColor='grey'>
            <Image src={images.graphql} height='240px'/>
            <Heading size={1} margin='40px 0'>graphqlweekly.com</Heading>
            <Heading size={4} textColor='white' margin='120px 0 0'>@graphqlweekly</Heading>
          </Slide>
          <Slide bgColor='primary'>
            <Heading size={1} fit caps textColor='dark' lineHeight={1}>
              How to use
            </Heading>
            <Heading size={1} fit>
              GraphQL in the frontend
            </Heading>
          </Slide>
          <Slide>
            <Heading size={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image src={images.relay} style={{padding: 20, margin: 0}} height='240px'/> Relay
            </Heading>
            <List textColor='white' margin='60px 0 0'>
              <ListItem>Developed and used by Facebook since 2011</ListItem>
              <ListItem>First released GraphQL client</ListItem>
              <ListItem>React only (as of now)</ListItem>
              <ListItem>Needs babel plugin to transform <Code textColor='white'>Relay.QL`...`</Code></ListItem>
            </List>
            <Text italic textColor='white' margin='70px 0 0'>github.com/facebook/relay</Text>
          </Slide>
          <Slide>
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
          <Slide>
            <Heading size={1}>
              Pros&nbsp;&nbsp;&&nbsp;&nbsp;Cons
            </Heading>
            <Layout>
              <Fill style={{padding: '80px 40px'}}>
                <List textColor='white' className='pros' style={{listStyleType: 'none'}}>
                  <ListItem>Data colocation</ListItem>
                  <ListItem>Smart caching system</ListItem>
                  <ListItem>Optimistic UI updates</ListItem>
                  <ListItem>Pagination built-in</ListItem>
                </List>
              </Fill>
              <Fill style={{padding: '80px 40px'}}>
                <List textColor='grey' className='cons' style={{listStyleType: 'none'}}>
                  <ListItem>Difficult to get started</ListItem>
                  <ListItem>Mutations are complex</ListItem>
                  <ListItem>"Custom" requirements</ListItem>
                  <ListItem>Not Redux compatible</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image src={images.kadira} style={{padding: 20, margin: '0 40px 0 0'}} height='200px' width='200px'/> Lokka
            </Heading>
            <List textColor='white' margin='80px 0 0'>
              <ListItem>Minimalistic GraphQL client based on <Code textColor='white'>Promise</Code>s</ListItem>
              <ListItem>Works in Browser and Node</ListItem>
            </List>
            <Text italic textColor='white' margin='70px 0 0'>github.com/kadirahq/lokka</Text>
          </Slide>
          <Slide>
            <Heading size={1}>
              Usage
            </Heading>
            <Layout>
              <Fill style={{margin: '80px 0', background: colors.dark, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/lokka-setup.example')}
                  bgColor='dark'
                />
              </Fill>
              <Fit>&nbsp;</Fit>
              <Fill style={{margin: '80px 0', background: colors.dark, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/lokka-query.example')}
                  bgColor='dark'
                />
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={1}>
              Pros&nbsp;&nbsp;&&nbsp;&nbsp;Cons
            </Heading>
            <Layout>
              <Fill style={{padding: '80px 40px'}}>
                <List textColor='white' className='pros' style={{listStyleType: 'none'}}>
                  <ListItem>Lightweight</ListItem>
                  <ListItem>Easy to get started</ListItem>
                  <ListItem>Works with Redux</ListItem>
                </List>
              </Fill>
              <Fill style={{padding: '80px 40px'}}>
                <List textColor='grey' className='cons' style={{listStyleType: 'none'}}>
                  <ListItem>No built-in cache</ListItem>
                  <ListItem>Manual state handling</ListItem>
                  <ListItem>Not heavily developed</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image src={images.apollo} style={{padding: 20, margin: '0 40px 0 0'}} height='200px' width='200px'/> Apollo
            </Heading>
            <List textColor='white' margin='80px 0 0'>
              <ListItem>Aims to be most straightforward way to use GraphQL</ListItem>
              <ListItem>Developed by Meteor</ListItem>
              <ListItem>Based on Redux incl. timetravel swag ✨</ListItem>
              <ListItem>Ambitious roadmap</ListItem>
            </List>
            <Text italic textColor='white' margin='70px 0 0'>github.com/apollostack</Text>
          </Slide>
          <Slide>
            <Heading size={1}>
              Usage
            </Heading>
            <Layout>
              <Fill style={{margin: '80px 0', background: colors.dark, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/apollo-setup.example')}
                  bgColor='dark'
                />
              </Fill>
              <Fit>&nbsp;</Fit>
              <Fill style={{margin: '80px 0', background: colors.dark, display: 'flex'}}>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/apollo-query.example')}
                  bgColor='dark'
                />
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={1}>
              Pros&nbsp;&nbsp;&&nbsp;&nbsp;Cons
            </Heading>
            <Layout>
              <Fill style={{padding: '80px 40px'}}>
                <List textColor='white' className='pros' style={{listStyleType: 'none'}}>
                  <ListItem>Easy to get started</ListItem>
                  <ListItem>Combines best of other</ListItem>
                  <ListItem>Many client frameworks</ListItem>
                </List>
              </Fill>
              <Fill style={{padding: '80px 40px'}}>
                <List textColor='grey' className='cons' style={{listStyleType: 'none'}}>
                  <ListItem>Early stage</ListItem>
                  <ListItem><i>Smart features</i> still WIP</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.demo} bgDarken={0.55}>
            <Heading size={1} fit>
              Demo
            </Heading>
          </Slide>
          <Slide bgColor='white'>
            <Image src={images.graphcool} height='240px'/>
            <Heading fit size={1} margin='40px 0' textColor='primary'>GraphQL Backend as a Service</Heading>
            <Heading size={4} textColor='#CCC' margin='120px 0 0'>www.graph.cool</Heading>
          </Slide>
          <Slide>
            <Heading size={1} textColor='dark' margin='0 0 80px'>
              Thank you
            </Heading>
            <Heading textColor='white' size={4} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              Follow us on <Image src={images.twitter} style={{padding: '0 20px', margin: 0}} height='50px'/> @graphcool
            </Heading>
            <Heading size={4} bgColor='white' margin='120px 0 40px' textColor='dark' style={{padding: 20}}>Invite code: Honeypot</Heading>
            <Heading size={5} textColor='white'>
              Get early access on <i>www.graph.cool</i>
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
