cube(`orders`, {
  sql: `
  SELECT 1 AS id, 100 AS amount, 'new' status
  UNION ALL
  SELECT 2 AS id, 200 AS amount, 'new' status
  UNION ALL
  SELECT 3 AS id, 300 AS amount, 'processed' status
  UNION ALL
  SELECT 4 AS id, 500 AS amount, 'processed' status
  UNION ALL
  SELECT 5 AS id, 600 AS amount, 'shipped' status
  `,

  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  measures: {
    count: {
      type: `count`
    },

    total_amount: {
      sql: `amount`,
      type: `sum`
    }
  },

  dimensions: {
    status: {
      sql: `status`,
      type: `string`
    }
  }
});
