import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {FaDiaspora} from 'react-icons/fa'
export default class AddForm extends React.Component {
    state={
        title: '',
        description:'',
        dueDate: null,
        type: this.props.type

    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    render() {
        return (
        <Form className="add-form" onSubmit={this.props.handleSubmit} method='GET' action={this.props.handleSubmit}>
            <FormGroup>
            <Label for="task_title"><FaDiaspora color='red' size="0.5em"/>Title</Label>
            <Input type="text" name="title" id="task_title" placeholder="Task title" required value={this.state.title}  onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
            <Label for="task_description">Description</Label>
            <Input type="textarea" name="description" id="task_description" placeholder="Task description" value={this.state.description} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
            <Label for="task_duedate">Due date</Label>
            <Input type="date" name="dueDate" id="task_duedate" placeholder="Due date"  value={this.state.dueDate} onChange={this.handleChange}/>
            </FormGroup>
            <Button color='primary'>Submit</Button>
        </Form>
        );
    }
    }