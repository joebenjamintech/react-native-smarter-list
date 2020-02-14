import * as React from 'react';
import { FlatList, SectionList } from 'react-native';
import { ListProps, MainProps, BaseListProps } from './interfaces';

const { useCallback } = React;

const groupBySection = (arry: any[], key = 'section') =>
  arry
    .reduce((accum: any[], curr: any) => {
      (accum[curr[key]] = accum[curr[key]] || []).push(curr);
      return accum;
    }, [])
    .reduce((accum: any[], curr: any[]) => {
      accum.push({
        data: curr,
        title: curr[0][key].toString(),
      });
      return accum;
    }, []);

const getFormattedItems = ({ items }: any) => {
  const groupedItems = groupBySection(items);
  return {
    groupedItems,
    nonGroupeditems: items,
  };
};

const List: React.SFC<ListProps> = props => {
  const {
    items,
    ItemComponent,
    ItemSeparatorComponent,
    SectionHeader,
    ListEmptyComponent,
  } = props;
  const { groupedItems, nonGroupeditems } = getFormattedItems({ items });

  const Item = useCallback(
    ({ item }: any) => <ItemComponent key={item.id} {...item} />,
    [],
  );

  return groupedItems.length > 1 ? (
    <SectionList
      ItemSeparatorComponent={ItemSeparatorComponent || null}
      sections={groupedItems}
      windowSize={151}
      keyExtractor={(item: any) => item.id}
      renderItem={Item}
      ListEmptyComponent={ListEmptyComponent}
      renderSectionHeader={({ section: { title } }) =>
        SectionHeader ? <SectionHeader title={title} /> : null
      }
    />
  ) : (
    <FlatList
      data={nonGroupeditems}
      windowSize={151}
      keyExtractor={(item: any) => item.id}
      renderItem={Item}
      ListEmptyComponent={ListEmptyComponent || null}
      ItemSeparatorComponent={ItemSeparatorComponent || null}
    />
  );
};

const BaseList = (baseProps: BaseListProps) => (mainProps: MainProps) => {
  return <List {...baseProps} {...mainProps} />;
};

export default BaseList;
