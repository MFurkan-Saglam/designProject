import React, { Component } from 'react'
import { Button, Dropdown, Menu,Container,Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './Navi.css'
import UploadForm from '../pages/UploadForm';
import logo from '../pictures/logo4.png';
export default class MenuExampleSizeLarge extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='large' fixed="top" secondary className="colorNavi">
        <Container>
        <Menu.Item>
      <Image size='tiny' src={logo}/>
        
        </Menu.Item>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right' style={{marginLeft:'10em'}}>
          <Dropdown item text='Hesabım'>
            <Dropdown.Menu>
              <Dropdown.Item>Bilgilerim</Dropdown.Item>
              <Dropdown.Item>Şifre Değiştir</Dropdown.Item>
              <Dropdown.Item>Çıkış Yap</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <Menu.Item >
                 
            <UploadForm />   
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

//<Button color='grey'>Upload Photo</Button>
