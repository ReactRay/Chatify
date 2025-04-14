

import { axiosInstance } from '@/lib/axios'
import { Album, Song, Stats } from '@/types';
import { create } from 'zustand'


interface MusicStore {
	songs: Song[],
	albums: Album[],
	isLoading: boolean,
	error: null | string,
	currentAlbum: Album | null,
	madeForYouSongs: Song[],
	trendingSongs: Song[],
	featuredSongs: Song[],
	stats: Stats,

	fetchFeaturedSongs: () => Promise<void>;
	fetchMadeForYouSongs: () => Promise<void>;
	fetchTrendingSongs: () => Promise<void>;

	fetchAlbums: () => Promise<void>,
	fetchAlbumById: (id: string) => Promise<void>,

	fetchStats: () => Promise<void>,
	fetchSongs: () => Promise<void>,
}


export const useMusicStore = create<MusicStore>((set) => ({
	albums: [],
	songs: [],
	isLoading: false,
	error: null,
	currentAlbum: null,
	madeForYouSongs: [],
	trendingSongs: [],
	featuredSongs: [],
	stats: {
		totalSongs: 0,
		totalAlbums: 0,
		totalUsers: 0,
		totalArtists: 0,
	},

	fetchAlbums: async () => {
		set({ isLoading: true, error: null });

		try {
			const response = await axiosInstance.get("/albums");
			set({ albums: response.data });
		} catch (error: any) {
			set({ error: error.response.data.message });
		} finally {
			set({ isLoading: false });
		}
	},

	fetchAlbumById: async (id) => {
		set({ isLoading: true, error: null })

		try {
			const response = await axiosInstance.get(`/albums/${id}`)
			set({ currentAlbum: response.data })


		} catch (error: any) {
			set({ error: error.response.data.message })

		} finally {
			set({ isLoading: false })
		}
	},

	fetchFeaturedSongs: async () => {
		set({ isLoading: true, error: null });
		try {
			const response = await axiosInstance.get("/songs/featured");
			set({ featuredSongs: response.data });
		} catch (error: any) {
			set({ error: error.response.data.message });
		} finally {
			set({ isLoading: false });
		}
	},

	fetchMadeForYouSongs: async () => {
		set({ isLoading: true, error: null });
		try {
			const response = await axiosInstance.get("/songs/made-for-you");
			set({ madeForYouSongs: response.data });
		} catch (error: any) {
			set({ error: error.response.data.message });
		} finally {
			set({ isLoading: false });
		}
	},

	fetchTrendingSongs: async () => {
		set({ isLoading: true, error: null });
		try {
			const response = await axiosInstance.get("/songs/trending");
			set({ trendingSongs: response.data });
		} catch (error: any) {
			set({ error: error.response.data.message });
		} finally {
			set({ isLoading: false });
		}
	},

	fetchSongs: async () => {

		set({ isLoading: true, error: null })

		try {
			const response = await axiosInstance('/songs')
			set({ songs: response.data })
		} catch (error: any) {
			set({ error: error.message })

		} finally {
			set({ isLoading: false })
		}

	},

	fetchStats: async () => {
		set({ isLoading: true, error: null })

		try {
			const response = await axiosInstance('/stats')
			set({ stats: response.data })
		} catch (error: any) {
			set({ error: error.message })

		} finally {
			set({ isLoading: false })
		}

	},


}),)