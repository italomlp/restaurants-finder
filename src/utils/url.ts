export function getQueryParameterFromUrlByName(name: string, url: string) {
  const match = RegExp(`[?&]${name}=([^&]*)`).exec(url);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
