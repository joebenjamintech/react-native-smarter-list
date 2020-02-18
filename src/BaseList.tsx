import * as React from 'react';
import { FlatList, SectionList } from 'react-native';
import {
  ListProps as SmarterListProps,
  MainProps,
  BaseListProps,
} from './interfaces';

const { useCallback } = React;

const SmarterList: React.SFC<SmarterListProps> = props => {
  const { data = [], sections = [], ItemComponent, ListEmptyComponent } = props;

  const Item = useCallback(({ item }: any) => <ItemComponent {...item} />, []);

  if (!!!data.length && !!!sections.length) {
    return ListEmptyComponent ? <ListEmptyComponent /> : null;
  }

  return !!sections.length ? (
    <SectionList sections={sections} renderItem={Item} {...props} />
  ) : (
    <FlatList data={data} renderItem={Item} {...props} />
  );
};

const BaseList = (baseProps: BaseListProps) => (mainProps: MainProps) => {
  return <SmarterList {...baseProps} {...mainProps} />;
};

export default BaseList;
