import React from 'react';
import { Tab, Tabs } from '@material-ui/core';

import { Routes } from '../types/routes.enum';

import { MenuState } from './menu-state.interface';
import { MenuProps } from './menu-props.interface';

import './menu.css';

function a11yProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

export class Menu extends React.Component<MenuProps, MenuState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: Routes.home,
    };
  }

  handleChange(_: any, value: Routes) {
    this.setState({ value });
    this.props.history.push(value);
  }

  componentDidUpdate(preProps: MenuProps) {
    if (this.props.match.path !== preProps.match.path) {
      if ([Routes.home, Routes.games].includes(this.props.match.path as Routes)) {
        this.setState({ value: this.props.match.path });
      } else {
        this.setState({ value: '' });
      }
    }
  }

  render(): React.ReactNode {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        aria-label="wrapped label tabs example"
        className="bg-blue text-light ph3"
      >
        <Tab
          value={Routes.home}
          label={this.props.t('dashboard')}
          {...a11yProps('dashboard')}
          classes={{ selected: 'bg-menu' }}
        />
        <Tab
          value={Routes.games}
          label={this.props.t('games')}
          {...a11yProps('two')}
          classes={{ selected: 'bg-menu' }}
        />
        <Tab value="" disabled />
      </Tabs>
    );
  }
}
