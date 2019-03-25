import { Button, Form, Input, Modal, Radio } from 'antd';
import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IModalProps { }
// tslint:disable-next-line:no-empty-interface
export interface IModalState { }

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    class extends React.Component<any, any> {
        constructor(props: any) {
            super(props);
        }
        public render() {
            const { form, visible, onCancel, onCreate } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="Create a new collection"
                    okText="create"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="Title">
                            {getFieldDecorator('title', {
                                rules: [
                                    {
                                        message: 'Please input the title of collection!',
                                        required: true,
                                    },
                                ],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="Description">
                            {getFieldDecorator('modifier', {
                                initialValue: 'public',
                            })(
                                <Radio.Group>
                                    <Radio value="public">Public</Radio>
                                    <Radio value="private">Private</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            )
        }
    }
)

// tslint:disable-next-line:no-empty-interface
export interface IProps {}
// tslint:disable-next-line:no-empty-interface
export interface IState {}

// tslint:disable-next-line:max-classes-per-file
class FormModalForm extends React.Component<any, any> {
    public formRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            visible: false,
        }

        this.showModal = this.showModal.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.saveFormRef = this.saveFormRef.bind(this);
    }

    public showModal() {
        this.setState({
            visible: true
        })
    }

    public handleCancel() {
        this.setState({
            visible: false
        })
    }

    public saveFormRef(formRef: any) {
        this.formRef = formRef;
    }

    public handleCreate() {
        const form = this.formRef.props.form;
        form.validateFields((err: any, value: any) => {
            if(err) {
                return;
            }

            // tslint:disable-next-line:no-console
            console.log('Received values of form: ', value);

            form.resetFields();
            this.setState({
                visible: false,
            })
        })
    }

    public render() {
        return (
            <div>
                <p>弹出层Form</p>
                <Button type="primary" onClick={this.showModal}>New Collection</Button>
                <CollectionCreateForm 
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        )
    }
}

export default FormModalForm;