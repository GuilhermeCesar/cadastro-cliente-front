import React from 'react';
import {
    Button,
    Col,
    Input,
    InputGroup,
    InputGroupAddon,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from 'reactstrap';
import CurrencyInput from 'react-currency-input';
import Router from 'next/router'
import CustomerService from '../services/CustumerService';
import FormDataHelper from '../utils/FormDataHelper';

import '../css/newCustumer.css';


class NewCustomer extends React.Component {
    constructor(props) {
        super(props);

        this._validModal = {
            gener:false,
            fullName:false,
            socialId:false,
            age:false,
            dependents:false,
            image:false,
            email:false,
            telephone:false,
        };

        this._customer = {
            gener:'M',
            civilStatus:'SINGLE',
            fullName:null,
            socialId:null,
            age:null,
            dependents:null,
            state:null,
            image:null,
            email: null,
            telephone:null
        };

        this.state = {
            modal: false,
            validModal: this._validModal
        };

        this.toggle = this.toggle.bind(this);
        this._saveCustomer = this._saveCustomer.bind(this);
        this._propostaService = new CustomerService();
        this._validForm = this._validForm.bind(this);
        this._onChangeFile = this._onChangeFile.bind(this);
        this._objectHasProperty = this._objectHasProperty.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

     _objectHasProperty(custumer, validModal,property){
        return custumer.hasOwnProperty(property) && !custumer[property] && validModal.hasOwnProperty(property)
    }

    _validForm(){
        let flagEmptyData = false;

        for(let propCustomer in this._customer){
            if(this._objectHasProperty(this._customer,this._validModal,propCustomer)){
                this._validModal[propCustomer] = true;
                flagEmptyData = true;
            }
        }
        this.setState({validModal:this._validModal});
        return flagEmptyData;
    }

    async _saveCustomer(){
        try{
            const emptyData =  this._validForm();
            if(!emptyData){
                await this._propostaService.saveCostumer(FormDataHelper(this._customer));
                this.toggle();
                Router.push(`/customers`)
            }
        }catch (e) {
            console.error(e);
        }
    }

    _onBlur({target}){
        if(this._customer[target.name]){
            this._validModal[target.name] = false;
            this.setState({validModel:this._validModal});
        }
        return false;
    }

    _changeEventInput({target}){
        const isNumeric = target.type === "number";
        this._customer[target.name] = isNumeric?
            parseInt(target.value):target.value;
        this._validModal[target.name] = false;

        return false;
    }

    _onChangeFile({target}){
        this._customer.image = target.files[0];
    }

    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Cadastro de Clientes</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col md={12}>
                                <Input type="file" name="image" onBlur={event => this._onBlur(event)}
                                       invalid={this.state.validModal.image}
                                       onChange={event=>this._onChangeFile(event)}
                                       placeholder="Imagem do usuário"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Input type="text" name="fullName" placeholder="Nome"
                                       onChange={event => this._changeEventInput(event)}
                                       invalid={this.state.validModal.fullName}
                                       onBlur={event => this._onBlur(event)}/>
                            </Col>
                            <Col md={6}>
                                <Input type="text" invalid={this.state.validModal.socialId}
                                       name="socialId" placeholder="CPF"
                                       onChange={event=>this._changeEventInput(event)}
                                       onBlur={event => this._onBlur(event)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Input type="email" invalid={this.state.validModal.email}
                                       name="email" placeholder="email"
                                       onChange={event=>this._changeEventInput(event)}
                                       onBlur={event => this._onBlur(event)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Input type="tel" invalid={this.state.validModal.telephone}
                                       name="telephone" placeholder="Telefone"
                                       onChange={event=>this._changeEventInput(event)}
                                       onBlur={event => this._onBlur(event)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Input type="text" name="state" placeholder="UF"
                                       onChange={event=>this._changeEventInput(event)}
                                       invalid={this.state.validModal.state}
                                       onBlur={event => this._onBlur(event)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} lg={6} xl={6}>
                                <Input type="number" name="age" placeholder="Idade"
                                       invalid={this.state.validModal.age}
                                       onChange={event=>this._changeEventInput(event)}
                                       onBlur={event => this._onBlur(event)}/>
                            </Col>
                            <Col md={6} lg={6}  xl={6}>
                                <Input type="number" name="dependents"
                                       invalid={this.state.validModal.dependents}
                                       placeholder="Dependentes" onChange={event=>this._changeEventInput(event)}
                                       onBlur={event => this._onBlur(event)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Input type="select"  name="gener"
                                       placeholder="Sexo" onChange={event=>this._changeEventInput(event)}>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                </Input>
                            </Col>
                            <Col md={6}>
                                <Input type="select" name="civilStatus" placeholder="Estado Civil"
                                       onChange={event=>this._changeEventInput(event)}>
                                    <option value="SINGLE">Solteiro(a)</option>
                                    <option value="MARRIED">Casado(a)</option>
                                    <option value="DIVORCED">Divorciado(a)</option>
                                    <option value="WIDOWER">Viuvo(a)</option>
                                </Input>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this._saveCustomer}>Salvar</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default NewCustomer;