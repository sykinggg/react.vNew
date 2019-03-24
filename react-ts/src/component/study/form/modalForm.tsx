import { Form } from 'antd';
import * as React from 'react';

class FormModalForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return(
            <div>
                <p>弹出层Form</p>
            </div>
        )
    }
}

const FormModalFormInstantiation = Form.create({name: 'FormModalForm'})(FormModalForm);

export default FormModalFormInstantiation;