import SideBar from "./component/sidebar"
import Header from "./component/header"
import Dashboard from "./pages/dashboard"

export default function Home() {
  return (
    <div className="px-3x flex w-full">
      <SideBar />
      <div className="flex flex-auto flex-col min-w-0">
        <Header />
        <Dashboard />
      </div>
    </div>
  )
}
