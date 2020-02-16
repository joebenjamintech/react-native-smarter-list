import faker from 'faker';
import { getFormattedItems } from '../utils/';

const getItemsWithSections = (sectionName: string = null) =>
  new Array(10).fill(1).map(() => ({
    id: faker.random.uuid().substring(0, 20),
    section: sectionName,
  }));

test('should have 10 sections', () => {
  const items = [];
  const expectedSectionsCount = 10;

  [...Array(expectedSectionsCount).keys()].forEach(i =>
    items.push(...getItemsWithSections(i.toString())),
  );

  const { groupedItems } = getFormattedItems({ items });
  const actualSectionsCount = groupedItems.length;

  expect(actualSectionsCount).toBe(expectedSectionsCount);
});

test('should have one section', () => {
  const items = [];

  const expectedSectionsCount = 1;

  [...Array(20).keys()].forEach(() => items.push(...getItemsWithSections()));

  const { groupedItems } = getFormattedItems({ items });
  const actualSectionsCount = groupedItems.length;

  expect(actualSectionsCount).toBe(expectedSectionsCount);
});
