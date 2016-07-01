/**
* In this file, we create a React component
* which incorporates components providedby material-ui.
*/
import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {deepOrange500} from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import CommunicationCall from 'material-ui/svg-icons/communication/call'
import Message from 'material-ui/svg-icons/communication/message'
import Github from './Github'

import ReactMaterialUiNotifications from './ReactMaterialUiNotifications'
import moment from 'moment'

import {ComponentData, NotificationData} from './Data'

const styles = {
  appbar: {
    background: deepOrange500,
    marginBottom: 15,
    textAlign: 'left'
  },
  container: {
    textAlign: 'center',
    paddingBottom: 15
  },
  table: {
    marginTop: 15
  },
  headerStyle: {
    tableLayout: 'auto'
  },
  table1Col1: {
    width: 137
  },
  table1Col2: {
    width: 72
  },
  table1Col3: {
    width: 128
  },
  table1Col2C: {
    width: 72,
    color: deepOrange500
  },
  table2Col3: {
    width: 36
  },
  rightIcon: {
    width: 36,
    height: 36,
    fill: '#fff'
  }
},
muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})

export default class Main extends Component {
  state = {
    Notifications: [],
    count: 0
  }

  showNotification = () => {
    let tempNotifications = this.state.Notifications
    tempNotifications.push(
      {
        title: 'Title',
        additionalText: `Some message to be displayed ${this.state.count}`,
        icon: <Message />,
        iconBadgeColor: deepOrange500,
        overflowText: <div>joe</div>,
        timestamp: moment().format('h:mm A')
      }
    )
    this.setState({
      Notifications: tempNotifications,
      count: ++this.state.count
    })
  }

  showPriorityNotification = () => {
    let tempNotifications = this.state.Notifications
    tempNotifications.push(
      {
        title: 'Title',
        additionalText: `Some message to be displayed ${this.state.count}`,
        icon: <CommunicationCall />,
        iconBadgeColor: deepOrange500,
        overflowText: <div>joe</div>,
        timestamp: moment().format('h:mm A'),
        priority: true,
        zDepth: 4
      }
    )
    this.setState({
      Notifications: tempNotifications,
      count: ++this.state.count
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <AppBar
            title="React Material Ui Notifications"
            style={styles.appbar}
            iconElementLeft={<span></span>}
            iconElementRight={
              <a href="https://github.com/puranjayjain/react-materialui-notifications" target="_blank">
                <IconButton iconStyle={styles.rightIcon}>
                  <Github />
                </IconButton>
              </a>
            }
          />
          <RaisedButton
            label="Show Notification"
            onTouchTap={this.showNotification}
          />
          <RaisedButton
            label="Show Priority Notification"
            secondary={true}
            onTouchTap={this.showPriorityNotification}
          />
          <div style={styles.table}>
            <Table
              style={styles.headerStyle}
              selectable={false}
            >
              <TableHeader
                adjustForCheckbox={false}
                displaySelectAll={false}
                enableSelectAll={false}
              >
                <TableRow>
                  <TableHeaderColumn colSpan="4">
                    ReactMaterialUiNotifications Component Props
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn style={styles.table1Col1}>Prop</TableHeaderColumn>
                  <TableHeaderColumn style={styles.table1Col2}>Types</TableHeaderColumn>
                  <TableHeaderColumn style={styles.table1Col3}>Default</TableHeaderColumn>
                  <TableHeaderColumn>Description</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {ComponentData.map((row, index) => (
                  <TableRow key={index}>
                    <TableRowColumn style={styles.table1Col1}>{row.prop}</TableRowColumn>
                    <TableRowColumn style={styles.table1Col2C}>{row.types}</TableRowColumn>
                    <TableRowColumn style={styles.table1Col3}>{row.default}</TableRowColumn>
                    <TableRowColumn>{row.description}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div style={styles.table}>
            <Table
              style={styles.headerStyle}
              selectable={false}
            >
              <TableHeader
                adjustForCheckbox={false}
                displaySelectAll={false}
                enableSelectAll={false}
              >
                <TableRow>
                  <TableHeaderColumn colSpan="4">
                    Children options for each Notification
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn style={styles.table1Col1}>Prop</TableHeaderColumn>
                  <TableHeaderColumn style={styles.table1Col2}>Types</TableHeaderColumn>
                  <TableHeaderColumn style={styles.table2Col3}>Default</TableHeaderColumn>
                  <TableHeaderColumn>Description</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {NotificationData.map((row, index) => (
                  <TableRow key={index}>
                    <TableRowColumn style={styles.table1Col1}>{row.prop}</TableRowColumn>
                    <TableRowColumn style={styles.table1Col2C}>{row.types}</TableRowColumn>
                    <TableRowColumn style={styles.table2Col3}>{row.default}</TableRowColumn>
                    <TableRowColumn>{row.description}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <ReactMaterialUiNotifications
            desktop={true}
            children={this.state.Notifications}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}
