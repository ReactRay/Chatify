

import { Topbar } from "@/components/ui/Topbar";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";

export function HomePage() {

  const { fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs, isLoading, featuredSongs, madeForYouSongs, trendingSongs } = useMusicStore()


  useEffect(() => {
    fetchFeaturedSongs()
    fetchMadeForYouSongs()
    fetchTrendingSongs()
  }, [fetchFeaturedSongs, fetchTrendingSongs, fetchMadeForYouSongs])

  console.log({ madeForYouSongs, trendingSongs, featuredSongs })

  return (
    <div className="rounded-md overflow-hidden">
      <Topbar />
    </div>)
}
