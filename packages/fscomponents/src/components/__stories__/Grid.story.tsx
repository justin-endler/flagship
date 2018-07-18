import React from 'react';
import { Text, ListRenderItem } from 'react-native';
import { storiesOf } from '@storybook/react'; // tslint:disable-line:no-implicit-dependencies
import { Grid } from '../Grid';

interface ListItem {
  id: string;
  title: string;
}

const list = [
  {
    id: '0',
    title: 'First'
  },
  {
    id: '1',
    title: 'Second'
  },
  {
    id: '2',
    title: 'Third'
  },
  {
    id: '3',
    title: 'Fourth'
  },
  {
    id: '4',
    title: 'Fifth'
  },
  {
    id: '5',
    title: 'Sixth'
  },
  {
    id: '6',
    title: 'Seventh'
  }
];

const renderItem = (item: ListRenderItem<{}>): JSX.Element => {
  return (
    <Text>Item {item.id}: {item.title}</Text>
  );
};

storiesOf('Grid', module)
  .add('basic usage', () => (
    <Grid
      renderItem={renderItem}
      data={list}
    />
  ));
