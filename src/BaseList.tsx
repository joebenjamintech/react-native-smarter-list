import * as React from 'react';
import { FlatList, SectionList } from 'react-native';
import { ListProps, MainProps, BaseListProps } from './interfaces';
import { getFormattedItems } from './utils';

const { useCallback } = React;

const List: React.SFC<ListProps> = props => {
  const {
    items,
    ItemComponent,
    ItemSeparatorComponent = null,
    SectionHeader = null,
    ListEmptyComponent = null,
  } = props;

  const { groupedItems, nonGroupeditems } = getFormattedItems({ items });

  const Item = useCallback(
    ({ item }: any) => <ItemComponent key={item.id} {...item} />,
    [],
  );

  const Section = useCallback(
    ({ section: { title } }) =>
      SectionHeader ? <SectionHeader title={title} /> : null,
    [],
  );

  return groupedItems.length > 1 ? (
    <SectionList
      ItemSeparatorComponent={ItemSeparatorComponent}
      sections={groupedItems}
      windowSize={151}
      keyExtractor={(item: any) => item.id}
      renderItem={Item}
      ListEmptyComponent={ListEmptyComponent}
      renderSectionHeader={Section}
    />
  ) : (
    <FlatList
      data={nonGroupeditems}
      windowSize={151}
      keyExtractor={(item: any) => item.id}
      renderItem={Item}
      ListEmptyComponent={ListEmptyComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};

const BaseList = (baseProps: BaseListProps) => (mainProps: MainProps) => {
  return <List {...baseProps} {...mainProps} />;
};

export default BaseList;
