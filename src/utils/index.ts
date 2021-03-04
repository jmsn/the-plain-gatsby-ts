// group items array based on the

import { MarkdownRemarkEdge } from "../../types/graphql-types";

// value returned by calling fn with the current iterated item
export function groupBy(items: any, fn: any): any {
  return Object.entries(
    items.reduce(
      (result: any, item: any) => ({
        ...result,
        [fn(item)]: [...(result[fn(item)] || []), item],
      }),
      {}
    )
  ).reduce((acc: any, curr) => {
    return [...acc, { year: curr[0], posts: curr[1] }]
  }, [])
}

// get the Year of a specified date

export function getDateYear({ node }: MarkdownRemarkEdge): number {
  return new Date(node?.frontmatter?.date).getFullYear();
}
