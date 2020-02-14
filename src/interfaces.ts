interface Item {
  id: string | number;
}

export interface BaseListProps {
  ItemSeparatorComponent?: any;
  ListEmptyComponent?: any;
  SectionHeader?: any;
}

export interface MainProps {
  items: Array<Item>;
  ItemComponent: any;
}

export type ListProps = BaseListProps & MainProps;
