import React from 'react';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';

import MySnackbarContentWrapper from './MySnackbarContentWrapper';

export interface IPositionedSnackbarProps {
    messageConf: {
        vertical: 'top' | 'bottom';
        horizontal: 'center' | 'left' | 'right';
        message: string;
        variant: 'success' | 'warning' | 'error' | 'info';
    };
    openValue?: boolean;
}



export default function PositionedSnackbar(props: IPositionedSnackbarProps) {
    const { messageConf, openValue } = props;

    const [state, setState] = React.useState(messageConf || {
        vertical: 'top',
        horizontal: 'center',
        variant: 'success',
        message: ''
    });
    const [open, setOpen] = React.useState(openValue || false);
    React.useEffect(() => {
        if (messageConf.message && !state.message) {
            setState(messageConf);
            setOpen(true);
        }
        if (typeof openValue === 'boolean') {
            setOpen(openValue);
        }
    }, [messageConf, state]);

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: state.vertical, horizontal: state.horizontal }}
                key={`${state.vertical},${state.horizontal}`}
                open={open}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
            // message={<span id="message-id">{state.message}</span>}
            >
                <MySnackbarContentWrapper
                    onClose={handleClose}
                    variant={state.variant}
                    message={state.message}
                />
            </Snackbar>
        </div>
    );
}
