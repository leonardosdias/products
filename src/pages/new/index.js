import React, { useState } from 'react';
import api from "../../services/api";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Button,
  Input,
  Col,
  Container
}
  from 'reactstrap';

function New({ history }) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setURL] = useState('');

  async function add(event) {
    event.preventDefault();

    await api.post('/products', { title, description, url });

    history.push('/');
  }

  return (
    <Container>
      <br></br>
      <Form>
        <FormGroup column="true">
          <Col sm="12" md={{ size: 6, offset: 3 }} >
            <Input type="text" id="title" placeholder="Título" onChange={event => setTitle(event.target.value)} />
          </Col>
        </FormGroup>
        <FormGroup column="true">
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Input type="text" id="description" placeholder="Descrição" onChange={event => setDescription(event.target.value)} />
          </Col>
        </FormGroup>
        <FormGroup column="true">
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Input type="text" id="url" placeholder="URL" onChange={event => setURL(event.target.value)} />
          </Col>
        </FormGroup>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Button color="success" size="md" onClick={add}>Cadastrar</Button>{' '}
          <Link to={'/'}>
            <Button color="danger" size="md">Voltar</Button>{' '}
          </Link>
        </Col>
      </Form >
    </Container>
  );
}

export default New;
