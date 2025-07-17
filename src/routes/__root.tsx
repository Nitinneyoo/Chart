import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/Components/Utility/Header";
import { Navbar } from "@/Components/Utility/Navbar";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<div className="flex h-screen w-full">
			{/* Fixed Sidebar - Full Height */}
			<Navbar />

			{/* Content Area */}
			<div className="flex flex-col flex-1">
				{/* Header */}
				<Header />

				{/* Scrollable Content */}
				<main className="flex-1 overflow-y-auto">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
