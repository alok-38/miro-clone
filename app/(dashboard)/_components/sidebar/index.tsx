import NewButton from "@/app/create-organization/[[...create-organization]]/new-button";

export default function Sidebar() {
    return (
        <aside className="fixed z-[1] left-0 bg-purple-400 h-full text-white/100
        flex p-3 flex-col gap-y-4">
            <NewButton />
        </aside>
    )
}