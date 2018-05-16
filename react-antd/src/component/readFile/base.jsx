import React from 'react';

import { Card, Row, Col, Collapse } from 'antd';
const Panel = Collapse.Panel;

class readFileBase extends React.Component {
    constructor(props) {
        super(props);
    }

    callback(key) {
        console.log(key)
    }

    render() {
        return(
            <div>
                <Row>
                    <Col span={22} offset={1}>
                        <Card title="React 基本概念">
                            <Collapse accordion onChange={this.callback} defaultActiveKey={['1']}>
                                <Panel header="JSX中使用表达式" key="1">
                                    <pre>
                                        function formatName(user) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return user.firstName + ' ' + user.lastName;{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        const user = &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;firstName: 'Harper',{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;lastName: 'Perez'{'\n'}
                                        };{'\n'}
                                        {'\n'}
                                        const element = ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#60;h1>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, &#123;formatName(user)}!{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#60;/h1>{'\n'}
                                        );{'\n'}
                                        {'\n'}
                                        ReactDOM.render({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;element,{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('root'){'\n'}
                                        );{'\n'}
                                    </pre>
                                </Panel>
                            </Collapse>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default readFileBase;