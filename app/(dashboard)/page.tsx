import { Plus, Workflow } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function Page() {
  return (
    <section className="flex min-h-svh bg-[#1b1b1b] text-[#fafafa]">
      <Empty
        aria-describedby="empty-workflow-description"
        aria-labelledby="empty-workflow-title"
        className="min-h-svh gap-0 rounded-none px-6 pt-7 pb-5"
      >
        <EmptyHeader className="max-w-none gap-0">
          <EmptyMedia
            variant="icon"
            className="mb-[54px] size-24 rounded-[20px] bg-[#262626] text-[#fafafa] [&_svg]:size-10"
          >
            <Workflow aria-hidden="true" strokeWidth={2.5} />
          </EmptyMedia>
          <EmptyTitle
            id="empty-workflow-title"
            role="heading"
            aria-level={1}
            className="text-2xl leading-8 font-medium sm:text-[40px] sm:leading-12"
          >
            No workflow selected
          </EmptyTitle>
          <EmptyDescription
            id="empty-workflow-description"
            className="mt-8 max-w-[680px] text-xl leading-9 text-[#a1a1a1] sm:text-[40px] sm:leading-[1.7]"
          >
            Select a workflow from the sidebar
            <br />
            or create a new one to get started.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="mt-[48px] max-w-none">
          <Button
            type="button"
            className="h-[90px] w-full max-w-[408px] gap-6 rounded-[18px] bg-[#e5e5e5] px-9 text-2xl leading-none font-medium text-[#171717] hover:bg-[#e5e5e5] sm:text-[40px]"
          >
            <Plus aria-hidden="true" className="size-10" strokeWidth={2} />
            New workflow
          </Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
