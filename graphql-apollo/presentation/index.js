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
              Apollo
            </Heading>
            <Heading size={1} fit>
              A practical introduction to GraphQL
            </Heading>
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
          <Slide bgColor='white'>
            <Image src={images.graphcool} height='240px'/>
            <Heading fit size={1} margin='40px 0' textColor='primary'>GraphQL Backend as a Service</Heading>
            <Heading size={4} textColor='#CCC' margin='120px 0 0'>www.graph.cool</Heading>
          </Slide>
          <Slide bgImage={images.demo} bgDarken={0.35}>
            <Heading size={1} fit>
              Demo
            </Heading>
          </Slide>
          <Slide>
            <Heading size={1} textColor='dark' margin='0 0 80px'>
              Thank you
            </Heading>
            <Heading textColor='white' size={4} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              Follow us on <Image src={images.twitter} style={{padding: '0 20px', margin: 0}} height='50px'/> @graphcool
            </Heading>
            <Heading size={4} bgColor='white' margin='120px 0 40px' textColor='dark' style={{padding: 20}}>Invite code: reactberlin</Heading>
            <Heading size={5} textColor='white'>
              Get early access on <i>www.graph.cool</i>
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
