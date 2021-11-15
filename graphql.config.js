module.exports = {
  projects: {
    app: {
      schema: ["./server/schema.graphql.js"],
      documents: ["**/*.{graphql,js,ts,jsx,tsx}"],
    },
  },
};
