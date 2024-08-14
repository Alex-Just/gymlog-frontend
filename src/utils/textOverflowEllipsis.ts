export function textOverflowEllipsis(
  message: string,
  maxLen: number = 90,
): string {
  if (message && message.length > maxLen) {
    return `${message.substring(0, maxLen - 3)}...`;
  }
  return message;
}
