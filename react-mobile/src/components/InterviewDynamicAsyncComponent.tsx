import React, { Fragment, lazy, Suspense } from 'react';
import ConfirmationDialogRaw from './Dialog';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import InterviewDialogContainer from './dialog/InterviewDialogContainer';

import AsyncComponent from './common/AsyncComponent';

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

export default function InterviewDynamicAsyncComponent(props: any) {
    const { reactInterviewContainerData } = props;
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
                        aria-label="Choice Component"
                        onClick={handleClickListItem}
                        role="listitem"
                    >
                        <ListItemText primary="Choice Component" secondary={value} />
                    </ListItem>
                    {/* <ListItem button divider disabled role="listitem">
                        <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                    </ListItem> */}
                    {
                        reactInterviewContainerData.map((item: any, index: number) => {
                            if (item.name === value && item.path) {
                                const OtherComponent = item.path;
                                return (
                                    <AsyncComponent key={item.path} LoadAsyncComponent={OtherComponent} />
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
                    reactInterviewContainerData={reactInterviewContainerData}
                    Component={InterviewDialogContainer}
                    title="选择动态组件"
                />
            </div>
        </Fragment>
    )
}