import { Navbar } from '@/Components/Utility/Navbar';
import { Header } from '@/Components/Utility/Header';
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* Fixed Header */}
      <Header />
      
      {/* Content Area with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar */}
        <Navbar />
        
        {/* Scrollable Content Only */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
