const monthYear = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })

const format = (value: string) => monthYear.format(new Date(value))

export const formatPeriod = (startedOn: string, endedOn: string | null) =>
  `${format(startedOn)} - ${endedOn ? format(endedOn) : 'Present'}`
