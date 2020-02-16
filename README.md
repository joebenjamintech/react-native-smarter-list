# react-native-smarter-list

Most Common Usage:

The SmarterList is a small amount of code which uses Currying to pass in some initial arguments to the SmarterList function which returns a Component that takes an Item Component and an array of items to be used in the list.

As of now, the SmarterList will either show a FlatList or a SectionList which is determined from the array of items. 

Below shows some sample code which will create the List component from the SmarterList function.
The optional object params passed into the SmarterList will have to be created by you.

```javascript
import SmarterList from 'react-native-smarter-list';
import { ItemSeparatorComponent } from '../List/ItemSeparatorComponent';
import { ListEmptyComponent } from '../List/ListEmptyComponent';
import { SectionHeader } from '../List/SectionHeader';

export const List = SmarterList({
  ItemSeparatorComponent,
  ListEmptyComponent,
  SectionHeader,
});
```

Once the List Component is created, you can use it like below but keep in mind you will need to design your Item Component (the design of the record to show in the list).
This is a work in progress with plans on adding options to have multiple Item Components to have a complex list where not all records have the same design.

```javascript
<List ItemComponent={Item} items={items} />;
```
Each object in the items array requires an id property. The id is used in the [keyExtractor](https://facebook.github.io/react-native/docs/sectionlist#keyextractor) for both the Flatlist and SectionList.

To get the SmarterList to show a SectionList, you will need to include a section property for your items in your items array.
Below shows some sample code which creates an array of items that will force a SectionList.

```javascript
const items = [
    {
      id: 1,
      section: 'section1'
    },
    {
      id: 2,
      section: 'section1'
    },
    {
      id: 3,
      section: 'section2'
    }
];
```
