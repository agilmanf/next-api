export function addLimit(query: string, limit: number | string) {
  return [query, `LIMIT ${limit}`].join(" ");
}

export function addOffset(query: string, offset: number | string) {
  return [query, `OFFSET ${offset}`].join(" ");
}
