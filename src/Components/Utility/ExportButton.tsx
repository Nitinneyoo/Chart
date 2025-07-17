import { FileDown, FileSpreadsheet, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export function ExportButton() {
	const [open, setOpen] = useState(false);
	const [fileType, setFileType] = useState("csv");
	const [content, setContent] = useState({
		requestOverview: true,
		peakActivity: true,
		congestion: false,
		estop: false,
		errors: false,
		fleet: false,
	});

	const handleCheckbox = (key: keyof typeof content) => {
		setContent((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	return (
		<>
			<Button
				className="flex items-center gap-2 px-3 py-2 text-[#FAFAFA] hover:text-white hover:bg-black-900 rounded-lg bg-[#18181B]"
				onClick={() => setOpen(true)}
			>
				<LogOut size={16} />
				<span className="text-sm">Export</span>
			</Button>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="max-w-md p-0">
					<DialogHeader className="p-6 pb-2">
						<DialogTitle className="text-lg font-semibold">
							Export Analytics
						</DialogTitle>
						<DialogClose className="absolute right-4 top-4 text-gray-400 hover:text-gray-600" />
					</DialogHeader>
					<div className="px-6 pb-2">
						<p className="text-sm text-gray-600 mb-4">
							Select a file type to export
						</p>
						<div className="flex gap-2 mb-6">
							<Button
								variant={fileType === "csv" ? "default" : "outline"}
								className="flex items-center gap-2 px-4 py-2"
								onClick={() => setFileType("csv")}
							>
								<FileSpreadsheet className="w-5 h-5 text-green-700" /> CSV File
							</Button>
							<Button
								variant={fileType === "pdf" ? "default" : "outline"}
								className="flex items-center gap-2 px-4 py-2"
								onClick={() => setFileType("pdf")}
							>
								<FileDown className="w-5 h-5 text-red-700" /> PDF File
							</Button>
						</div>
						<p className="text-sm font-medium mb-2">Content to Export</p>
						<p className="text-xs text-gray-500 mb-2">
							Mark the checkbox next to items you wish to export
						</p>
						<div className="flex flex-col gap-2 mb-6">
							<Label className="flex items-center gap-2">
								<Checkbox
									checked={content.requestOverview}
									onCheckedChange={() => handleCheckbox("requestOverview")}
								/>
								<span>Request Overview</span>
							</Label>
							<Label className="flex items-center gap-2">
								<Checkbox
									checked={content.peakActivity}
									onCheckedChange={() => handleCheckbox("peakActivity")}
								/>
								<span>Peak activity</span>
							</Label>
							<Label className="flex items-center gap-2">
								<Checkbox
									checked={content.congestion}
									onCheckedChange={() => handleCheckbox("congestion")}
								/>
								<span>Congestion Zone heatmap</span>
							</Label>
							<Label className="flex items-center gap-2">
								<Checkbox
									checked={content.estop}
									onCheckedChange={() => handleCheckbox("estop")}
								/>
								<span>E-Stop heatmap</span>
							</Label>
							<Label className="flex items-center gap-2">
								<Checkbox
									checked={content.errors}
									onCheckedChange={() => handleCheckbox("errors")}
								/>
								<span>Errors heatmap</span>
							</Label>
							<Label className="flex items-center gap-2">
								<Checkbox
									checked={content.fleet}
									onCheckedChange={() => handleCheckbox("fleet")}
								/>
								<span>Fleet utilization</span>
							</Label>
						</div>
						<Button className="w-full mb-4 bg-[#18181B]">Export</Button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}