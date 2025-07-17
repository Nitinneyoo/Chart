import { useLocation } from "@tanstack/react-router";
import { DateRangeFilter } from "../Dashboard/DashboardComponent/DateRangeFilter";
import { ExportButton } from "./ExportButton";

const getPageTitle = (pathname: string) => {
	switch (pathname) {
		case "/":
			return "Dashboard";
		case "/analytics":
			return "Analytics";
		case "/robot":
			return "Robot";
		default:
			return "Dashboard";
	}
};

export function Header() {
	const location = useLocation();
	const pageTitle = getPageTitle(location.pathname);

	return (
		<header className="flex items-center justify-between bg-[#ffffff] shadow-sm border-b-2 w-full p-4 overflow-y-auto">
			<div className="flex items-center gap-3">
				<h1 className="text-xl font-semibold text-gray-800">{pageTitle}</h1>
			</div>
			<div className="flex items-end">
				<DateRangeFilter onDateRangeChange={() => {}} />
			</div>
			<ExportButton />
		</header>
	);
}
