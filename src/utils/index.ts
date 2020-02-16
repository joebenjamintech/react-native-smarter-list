export const getFormattedItems = ({ items }: any) => {
  const groupedItems = groupBySection(items);
  return {
    groupedItems,
    nonGroupeditems: items,
  };
};

export const groupBySection = (arry: any[], key = 'section') =>
  //@ts-ignore
  Object.entries(
    arry.reduce((accum: any[], curr: any) => {
      const section = curr[key];
      (accum[section] = accum[section] || []).push(curr);
      return accum;
    }, {}),
  ).reduce((accum: any[], [key, value]: any) => {
    accum.push({
      title: key,
      data: value,
    });
    return accum;
  }, []);
