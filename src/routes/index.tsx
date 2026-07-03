import { createFileRoute } from '@tanstack/react-router'
import z from "zod/v4"

const validateSearchSchema = z.object({
  open: z.enum(["true", "false"]).catch("true").optional()
})

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: validateSearchSchema,
  loaderDeps: ({ search }) => ({ open: search.open }),
  loader: ({ deps }) => console.log("OPEN", deps.open)
})

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
    </div>
  )
}
