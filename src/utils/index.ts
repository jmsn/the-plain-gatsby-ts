// group items array based on the

import { MarkdownRemarkFrontmatter, Maybe } from "../../types/graphql-types"

type PostMap<T> = { year: string; posts: T[] }

// value returned by calling fn with the current iterated item
export function groupBy<T>(items: T[], fn: (item: T) => number): PostMap<T>[] {
  const tmp = items.reduce(
    (result: { [x: number]: T[] }, item: T) => ({
      ...result,
      [fn(item)]: [...(result[fn(item)] || []), item],
    }),
    {}
  )

  return Object.entries(tmp).reduce((acc: PostMap<T>[], curr) => {
    return [...acc, { year: curr[0], posts: curr[1] }]
  }, [])
}

// get the Year of a specified date
export function getDateYear<
  T extends {
    node?: {
      frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, "date">>
    }
  }
>(obj: T): number {
  return new Date(obj.node?.frontmatter?.date).getFullYear()
}
