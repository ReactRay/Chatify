
import { useMusicStore } from "@/stores/useMusicStore";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function AlbumPage() {

    const { albumId } = useParams()

    const { fetchAlbumById, currentAlbum, isLoading } = useMusicStore()

    useEffect(() => {
        if (albumId) fetchAlbumById(albumId)
    }, [fetchAlbumById, albumId])


    console.log(currentAlbum, 'currentAlbum')

    if (isLoading) return null

    return <div className="h-full">
        <ScrollArea className="h-full">
            <div className="relative min-h-full ">
                <div
                    className='absolute inset-0 bg-gradient-to-b from-[#5038a0]/80 via-zinc-900/80
					 to-zinc-900 pointer-events-none'
                    aria-hidden='true'
                />

                {/* Content */}
                <div className='relative z-10'>
                    <div className='flex p-6 gap-6 pb-8'>
                        <img
                            src={currentAlbum?.imageUrl}
                            alt={currentAlbum?.title}
                            className='w-[240px] h-[240px] shadow-xl rounded'
                        />
                        <div className='flex flex-col justify-end'>
                            <p className='text-sm font-medium'>Album</p>
                            <h1 className='text-7xl font-bold my-4'>{currentAlbum?.title}</h1>
                            <div className='flex items-center gap-2 text-sm text-zinc-100'>
                                <span className='font-medium text-white'>{currentAlbum?.artist}</span>
                                <span>• {currentAlbum?.songs.length} songs</span>
                                <span>• {currentAlbum?.releaseYear}</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </ScrollArea>

    </div>;
}