import { AvailableTasks } from "./_components/AvailableTasks"
import { ContributionChart } from "./_components/ContributionChart"
import Stats from "./_components/Stats"

const Page = () => {
  return (
    <div className="flex flex-col gap-8 p-8">
      <Stats />
      <ContributionChart />
      <AvailableTasks />
    </div>
  )
}

export default Page