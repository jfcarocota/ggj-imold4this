//import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react';
import { Header, Icon, Image, Container, Divider, Button, List } from 'semantic-ui-react'

export default class Home extends Component {
  
  render = ()=> (
    <Container style={{backgroundColor: '#322f4d', color: 'white'}}>
      <Divider hidden/>
      <Header as='h1' icon textAlign='center' style={{color: 'white'}}>
        <Header.Content>Im Old 4 This</Header.Content>
      </Header>
      <Container textAlign='justified' style={{width: '80%'}}>
        <Divider hidden/>
        <Image src='/img1.png' fluid />
        <Divider hidden/>
        <p>
        You are a retired old man. You work your whole life in the world of video game development. 
        You live alone in a small apartment. Your own imagination makes you have crazy adventures.
        You must examine your room to collect clues and not return to reality.
        </p>
        <Divider hidden/>
        <Button
          color='red'
          content='Download'
          icon='download'
          label={{ basic: true, color: 'red', pointing: 'left', content: 'Version 0.0.4' }}
          onClick={()=> window.open('https://github.com/jfcarocota/im-old-4-this/releases/tag/0.0.4')}
        />
        
        <Button
          color='purple'
          content='GGJ Page'
          icon='linkify'
          label={{ basic: true, color: 'purple', pointing: 'left', content: 'Version 0.0.4' }}
          onClick={()=> window.open('https://globalgamejam.org/2021/games/im-old-4-not-meme-please-help-6')}
        />
        <Header as='h3' icon textAlign='center' style={{color: 'white'}}>
          <Header.Content>Game screens</Header.Content>
        </Header>
        <Image src='/img2.png' fluid />
        <Divider hidden/>
        <Image src='/img3.png' fluid />
        <Header as='h3' icon textAlign='center' style={{color: 'white'}}>
          <Header.Content>The game engine</Header.Content>
        </Header>
        <Divider hidden/>
          <p>
          For this project I wanted to take the opportunity and create my own game engine.
          The idea was to generate a useful tool for creating 2D games and basic collision physics topdown.
          A small sub engine for cutting sprite sheets and animation was designed for each frame of the sheet.
          Everything was written using c ++.
          </p>
          <Header as='h3' icon textAlign='center' style={{color: 'white'}}>
            <Header.Content>Technologies</Header.Content>
          </Header>
          <List bulleted>
            <List.Item>To render and load tests in sprite format, the <b>SFML</b> multimeda library was implemented</List.Item>
            <List.Item>The library in charge of supporting collision physics is the <b>Box2D</b> physics API.</List.Item>
            <List.Item> <b>MinGW</b> was used to compile the project and <b>Visual Studio Code</b> was used to write the engine code.</List.Item>
          </List>
        <Divider hidden/>
        <Divider hidden/>
    </Container>
    </Container>
  );
}
