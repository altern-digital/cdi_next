export function getS3Url(key: string) {
  return `${process.env.NEXT_PUBLIC_CDN_URL}/${key}`;
}
