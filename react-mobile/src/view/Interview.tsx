import React, { Fragment, lazy, Suspense } from 'react';
import ConfirmationDialogRaw from '../components/Dialog';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import InterviewDialogContainer from './interviews/InterviewDialogContainer';

import { reactInterviewContainerData, Iinterview } from './interviews/components';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        paper: {
            width: '80%',
            maxHeight: 435,
        },
    }),
);
export const asyncComponent = (loadComponent: any) => (

    class AsyncComponent extends React.Component {
        state: any;
        constructor(props: any) {
            super(props);

            this.state = {
                Component: null,
            };

            this.hasLoadedComponent = this.hasLoadedComponent.bind(this);
        }
        componentWillMount() {
            console.log('componentWillMount');
            console.log(this.hasLoadedComponent());
            if (this.hasLoadedComponent()) {
                return;
            }

            loadComponent()
                .then((module: any) => module.default ? module.default : module)
                .then((Component: any) => {
                    this.setState({
                        Component
                    });
                })
                .catch((error: any) => {
                    /*eslint-disable*/
                    console.error('cannot load Component in <AsyncComponent>');
                    /*eslint-enable*/
                    throw error;
                })
        }
        hasLoadedComponent() {
            return this.state.Component !== null;
        }
        render() {
            const {
                Component
            } = this.state;

            return (Component) ? <Component {...this.props} /> : null;
        }
    }
);
export default function interview(props?: any) {
    const classes = useStyles(props);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    
    function handleClickListItem() {
        setOpen(true);
    }

    function handleClose(newValue?: string) {
        setOpen(false);
        console.log('关闭弹框的回掉函数 获取数据');
        console.log(newValue);
        if (newValue) {
            setValue(newValue);
        }
    }

    return (
        <Fragment>
            <p>dialog 的状态{JSON.stringify(open)}</p>
            <div className={classes.root}>
                <List component="div" role="list">
                    {/* <ListItem button divider disabled role="listitem">
                        <ListItemText primary="Interruptions" />
                    </ListItem> */}
                    <ListItem
                        button
                        divider
                        aria-haspopup="true"
                        aria-controls="ringtone-menu"
                        aria-label="phone ringtone"
                        onClick={handleClickListItem}
                        role="listitem"
                    >
                        <ListItemText primary="Phone ringtone" secondary={value} />
                    </ListItem>
                    {/* <ListItem button divider disabled role="listitem">
                        <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                    </ListItem> */}
                    {
                        reactInterviewContainerData.map((item: Iinterview, index: number) => {
                            if (item.name === value && item.path) {
                                const OtherComponent = item.path;
                                return (
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <OtherComponent />
                                    </Suspense>
                                )
                            };
                        })
                    }
                </List>
                <ConfirmationDialogRaw
                    classes={{
                        paper: classes.paper,
                    }}
                    id="ringtone-menu"
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    value={value}
                    Component={InterviewDialogContainer}
                    title="选择动态组件"
                />
            </div>
        </Fragment>
    )
}