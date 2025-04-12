
import { Outlet } from "react-router-dom"
import { ResizablePanelGroup ,ResizablePanel, ResizableHandle} from "@/components/ui/resizable"

export function MainLayout() {
    
    const isMobile = false;
    
    
    
  return (
    <div className="h-screen bg-black text-white flex flex-col">
			<ResizablePanelGroup direction='horizontal' className='flex-1 flex h-full overflow-hidden p-2'>
                  {/* Left side*/}
            <ResizablePanel defaultSize={20} minSize={isMobile ? 0:10} maxSize={30}>
                lleft side bad
            </ResizablePanel>
            
            <ResizableHandle className="w-2 bg-black rounded-lg transition-colors"/>
            {/* main */}
			<ResizablePanel defaultSize={isMobile ? 80 : 60}>
                <Outlet/>
            </ResizablePanel>
                        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors"/>

        <ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0}>
            friends/activity
            
        </ResizablePanel>
            
        </ResizablePanelGroup>
        

        
    </div>
  )
}