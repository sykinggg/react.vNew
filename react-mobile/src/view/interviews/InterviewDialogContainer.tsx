import React, { Fragment, useState, ChangeEvent } from 'react';
import { Button } from '@material-ui/core'

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { reactInterviewContainerData } from './components';

export interface DialogContainerProps {
    messageHandle: (value?: string) => void;
    defaultMessage: any;
}

export default function InterviewDialogContainer(props: DialogContainerProps) {
    const { messageHandle, defaultMessage, ...other } = props;
    const radioGroupRef = React.useRef<HTMLElement>(null);

    const [messageValue, setValue] = useState('0');

    React.useEffect(() => {
        if (defaultMessage) {
            setValue(defaultMessage);
        }
        console.log('初始化 defaultMessage', defaultMessage);
    }, [defaultMessage, messageValue]);

    function messageChange(event: React.ChangeEvent<{}>, newValue: string) {
        if(messageValue !== newValue) {
            setValue(newValue);
        }
        messageHandle(newValue);
    }

    return(
        <Fragment>
            <RadioGroup
                ref={radioGroupRef}
                aria-label="ringtone"
                name="ringtone"
                value={messageValue}
                onChange={messageChange}
            >
                {reactInterviewContainerData.map(option => (
                    <FormControlLabel value={option.name} key={option.name} control={<Radio />} label={option.name} />
                ))}
            </RadioGroup>
        </Fragment>
    )
}