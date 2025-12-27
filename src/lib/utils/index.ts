export function stringifyResponse(data: any) {
  return new Response(JSON.stringify(data, null, 2));
}
