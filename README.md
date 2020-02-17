# react-native-smarter-list

The SmarterList is a small amount of code that wraps the Flatlist and Sectionlist.  It takes the same params you would normally pass into the Flatlist and Sectionlist except your data (Flatlist) and sections (SectionList) will be passed in later along with an Item Component (the component which deteremines the look for each record in your list).

Let me explain.

Below, shows some sample code which can be used to create the List component from the SmarterList function. All object params passed into the SmarterList function are optional. As you can see below, there are four object params being passed in.  A component is returned from the SmarterList function which holds all of the optional object params passed in.


```javascript
import SmarterList from 'react-native-smarter-list';
import { ItemSeparatorComponent } from '../List/ItemSeparatorComponent';
import { ListEmptyComponent } from '../List/ListEmptyComponent';
import { SectionHeader as renderSectionHeader } from '../List/SectionHeader';
 
export const List = SmarterList({
  ItemSeparatorComponent,
  ListEmptyComponent,
  renderSectionHeader,
  widowSize: 151
});
```

The List above is the component which was returned from the SmarterList.  Whenever you want to use it in your app, you can do it like below.  The new List Component determines if it should use a Flatlist or Sectionlist from looking at the props passed down.  If both data and sections are null, it will use the ListEmptyComponent if initially passed into the SmarterList function else it will return null.  If sections are passed down, it will choose the SectionList else choose the Flatlist.

```javascript
<List ItemComponent={ItemComponent} data={data} />
```
OR
```javascript
<List ItemComponent={ItemComponent} sections={sections} />
```

So whats the point of it all?
This allows you to build a reusable List component for your app that will have all of the same optional params passed in and you don't have to worry about recreating it and it works for both Flatlist and Sectionlist.  Once created, the only thing you would have to do is create the Item Component and make sure you are passing the correct data/sections.  The data/sections that is passed in is passed directly to your ItemComponent, nothing more and nothing less.
