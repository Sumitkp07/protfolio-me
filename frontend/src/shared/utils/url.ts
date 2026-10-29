export const displayHost = (url: string) => new URL(url).hostname.replace(/^www\./, '')
