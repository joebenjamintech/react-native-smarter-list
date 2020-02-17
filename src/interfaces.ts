import { SectionListProps, FlatListProps, SectionListData } from 'react-native';

export type BaseListProps =
  | Partial<SectionListProps<any>>
  | Partial<FlatListProps<any>>
  | any;

export interface MainProps {
  data?: ReadonlyArray<any>;
  sections?: ReadonlyArray<SectionListData<any>>;
  ItemComponent: any;
}

export type ListProps = BaseListProps | MainProps;
