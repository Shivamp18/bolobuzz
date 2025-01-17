import { Button } from "@/components/ui/button"
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useworkspaceId } from "@/hooks/use-workspace-id";
import { Info, Search } from "lucide-react"

export const Toolbar = ()=>{

    const workspaceId = useworkspaceId();
    const{data} = useGetWorkspace({id:workspaceId});
return(
    <nav className="bg-rose-700 flex items-center justify-between h-10 p-1.5">
    <div className="flex-1"/>
<div className="min-w-[280px] max-[642] grow-[2] shrink">
    <Button className="bg-accent/25 hover:bg-accent-25  w-full justify-start" size="sm">
    <Search className="size-4 text-white mr-2 "/>
    <span className="text-white text-xs">Search {data?.name}</span>
    </Button>
</div>
<div className="ml-auto flex-1 flex items-center justify-end">
    <Button variant="transparent" size="iconSm">
        <Info className="size-5 text-white"/>
    </Button>
</div>
    
    </nav>
    
)



}
