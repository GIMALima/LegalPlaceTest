//amine.azizi@legalplace.fr
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button} from 'reactstrap';
import classnames from 'classnames';
import {FaPlus} from 'react-icons/fa'
import AddForm from '../layout/AddForm'
import TaskCard from '../layout/TaskCard'
import PersonalTask from '../data/PersonalTask'
import ProfessionalTasks from '../data/ProfessionalTasks'
export default class Tab extends React.Component {
  
    state = {
      activeTab: '1',
      personlTasks: [],
      professionalTasks: []
    }
    componentDidMount(){
        this.setState({personlTasks: PersonalTask, professionalTasks: ProfessionalTasks})
    }
    toggle= tab => {
        if (this.state.activeTab !== tab) {
        this.setState({
            activeTab: tab,
            showAddForm: false,
        });
        }
    }
    handleClick = () => {
        this.setState({showAddForm: true})
    }
    handleAdd = (event) => {
        event.preventDefault()
        console.log(event)
    }
    
    render() {
        return (
        <div className="container tab-container">
                <Nav tabs >
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}
                        >
                        Personal tasks
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('2'); }}
                        >
                        Professional tasks
                        </NavLink>
                    </NavItem>
                </Nav>
                <Card style={{borderTop:'none'}}>
                    <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Button color="link" onClick={this.handleClick} name='personal' ><FaPlus color='#b24966'/> Add task</Button>
                        {this.state.showAddForm ? <AddForm handleSubmit={this.handleAdd} type='personal'/>: ''}
                        {this.state.personlTasks.map((task, index) => {
                            return <TaskCard key={index} title={task.title} description={task.description} dueDate={task.dueDate} tasks={this.state.personlTasks}/>
                        })}
                    </TabPane>
                    <TabPane tabId="2">
                        <Button color="link" onClick={this.handleClick} name='professional'><FaPlus color='#b24966'/>Add task</Button>
                        {this.state.showAddForm ? <AddForm handleSubmit={this.handleAdd} type="professional"/>: ''}
                        {this.state.professionalTasks.map((task, index) => {
                            return <TaskCard key={index} title={task.title} description={task.description} date={task.dueDate} handleClick={this.handleClick}/>
                        })}
                    </TabPane>
                    </TabContent>
                </Card>
        </div>
        );
    }
}