import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const apiUrl = process.env.VITE_API_URL ?? 'http://localhost:8000/api/v1'
const target = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../src/features/portfolio/data/portfolioSnapshot.json',
)

const response = await fetch(`${apiUrl}/portfolio`, { headers: { Accept: 'application/json' } })

if (!response.ok) {
  console.error(`Snapshot failed: ${response.status} ${response.statusText}`)
  process.exit(1)
}

const { data } = await response.json()

await mkdir(dirname(target), { recursive: true })
await writeFile(target, `${JSON.stringify(data, null, 2)}\n`)

console.log(`Snapshot written to ${target}`)
