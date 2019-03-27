import { Card } from 'antd';
import * as React from 'react';
import FormAdvancedSearchInstantiation from './form/advancedSearch';
import FormCustomCheck from './form/customCheck';
import FormCustomInstantiation from './form/customForm';
import FormDataStorage from './form/dataStorage';
import FormDatePickInstantiation from './form/datePick';
import FormLayout from './form/formLayout';
import FormLinkAgeInstantiation from './form/formLinkage';
import FormHorizontalLoginBarInstantiation from './form/horizontalLoginBar';
import FormLoginBoxInstantiation from './form/loginBox';
import FormModalForm from './form/modalForm';
import FormRegisterNewUserInstantiation from './form/registerNewUser';
import FormSelfProcessingFormData from './form/selfProcessingFormData';
import VerifyOtherComponentInstantiation from './form/verifyOtherComponent';

// tslint:disable-next-line:no-empty-interface
export interface IProps {}
// tslint:disable-next-line:no-empty-interface
export interface IState {}

export default class StudyForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            form: {
                inputValue: '',
                textAreaValue: ''
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleInputChange(event: any) {
        this.setState({
            from: {
                inputValue: event.target.value
            }
        })
    }

    public handleTextareaChange(event: any) {
        this.setState({
            form: {
                textAreaValue: event.target.value
            }
        })
    }

    public handleSubmit(event: any) {
        alert('A name was submitted: ' + this.state);
        event.preventDefault();
    }

    public render() {
        return(
            <Card title="表单" className="mar-b-16">
                <p>默认太丑了过一遍ant的form</p>
                <FormHorizontalLoginBarInstantiation />
                <FormLoginBoxInstantiation />
                <FormRegisterNewUserInstantiation />
                <FormAdvancedSearchInstantiation />
                <FormModalForm />
                <FormDatePickInstantiation />
                <FormCustomInstantiation />
                <FormDataStorage />
                <FormSelfProcessingFormData />
                <FormCustomCheck />
                <FormLinkAgeInstantiation />
                <FormLayout />
                <VerifyOtherComponentInstantiation />
            </Card>
        )
    }
}