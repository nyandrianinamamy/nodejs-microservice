export const buildSearch = (search: string) =>
    search
        ? {
              $text: {
                  $search: search,
                  $caseSensitive: false
              }
          }
        : {};

/* Params
{
    name: "Buster,Bulma",
    description: "Great"
}
*/
/* Return
{
    name: { $in: ['Buster', 'Bulma'] },
    description: { $in: ['Great'] },
}
*/
// tslint:disable-next-line: no-any
export const buildFilter = (criteria: Record<string, any>) => {
    Object.keys(criteria).forEach((key) => {
        criteria[key] = { $in: criteria[key].split(',') };
    });
    return criteria;
};
