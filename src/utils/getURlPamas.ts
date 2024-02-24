import {NewsArticle} from 'src/types/article.type';

export const getURlParams = (url: string) => {
  const params: {[key: string]: any} = {};
  const urlParts = url.split('?');
  if (urlParts.length > 1) {
    const queryString = urlParts[1];
    const pair = queryString.split('=');
    const key = pair[0];
    const value = pair[1];
    params[key] = value;
  }
  return params;
};

export function extractObject(deepLinkURL: string): Record<string, string> {
  const queryString = deepLinkURL.split('?')[1];

  const queryParams = queryString.split('&');

  const obj: Record<string, string> = {};

  queryParams.forEach(param => {
    const [key, value] = param.split('=');
    obj[decodeURIComponent(key)] = decodeURIComponent(value);
  });

  return obj;
}
