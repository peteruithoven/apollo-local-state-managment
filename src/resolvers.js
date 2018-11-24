import { COMPLETED } from "./queries";

export const defaults = {
  completed: true
};

export const resolvers = {
  Mutation: {
    toggle: (_, variables, { cache, getCacheKey }) => {
      const current = cache.readQuery({ query: COMPLETED });
      const data = { completed: !current.completed };
      cache.writeData({ data });
      return null;
    }
  }
};
