const do_paginate = async (client, sql, page = 1, limit = 10) => {
  try {
    const totalResult = await client.query("SELECT COUNT(*) FROM (" + sql + ")")
    const totalData = totalResult.rows[0].count

    // Calculate offset for pagination
    const offset = (page - 1) * limit
    console.log ("offset "+offset);
    // Fetch the paginated data (with LIMIT and OFFSET)
    const filteredData = await client.query(`${sql} LIMIT $1 OFFSET $2`, [
      limit,
      offset,
    ])
    const totalPages = Math.ceil(totalData / limit)
    return {
      data: filteredData.rows, // Paginated data
      meta: {
        totalData, // Total number of records
        totalPages, // Total number of pages
        currentPage: page, // Current page number
        limit, // Records per page
      },
    }
  } catch (err) {
    console.error("Error in pagination function:", err)
    throw new Error("Error fetching paginated data")
  }
}
module.exports = do_paginate
