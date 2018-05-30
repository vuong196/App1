import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon, Text } from 'native-base';
import Main from '../Main/0_Main'
export default class Login extends Component {
    render() {
        return (

                    <Form>
                        <Item floatingLabel>
                            <Label>Tài Khoản</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Mật Khẩu</Label>
                            <Input />
                        </Item>
                    <Button full iconLeft last >
                        <Icon name='home' />
                        <Text>Đăng Nhập</Text>
                    </Button>  
                    </Form>
        );
              
    }
}
