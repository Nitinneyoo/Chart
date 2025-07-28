import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { Header } from "@/Components/Utility/Header";
import { Navbar } from "@/Components/Utility/Navbar";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<div className="flex h-screen w-full overflow-hidden">
			{/* Fixed Sidebar - Full Height */}
			<Navbar />

			{/* Content Area with Scrollable Content */}
			<main className="flex-1 overflow-auto">
				<Outlet />
			</main>
		</div>
	);
}
