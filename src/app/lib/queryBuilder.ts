export class QueryBuilder {
  query: string;

  constructor(query: string) {
    this.query = query;
  }

  limit(limit: string) {
    this.query = [this.query, `LIMIT ${limit}`].join(" ");
    return this.query;
  }

  offset(offset: string) {
    this.query = [this.query, `OFFSET ${offset}`].join(" ");
    return this.query;
  }

  search(column: string | string[], value: string) {
    if (Array.isArray(column)) {
      let s: string[] = [];
      column.forEach((c) => {
        s.push(`${c} LIKE '%${value}%'`);
      });

      const result = s.join(" OR ");
      this.query = [this.query, `WHERE`, result].join(" ");
    } else {
      this.query = [this.query, `WHERE ${column} LIKE '%${value}%'`].join(" ");
    }

    return this.query;
  }
}
