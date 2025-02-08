export function titleCaseToId(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}
