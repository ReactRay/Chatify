import { Album } from '../models/album.model.js'

export async function getAllAlbums(req, res, next) {
  try {
    const albums = await Album.find({})
    res.status(200).json(albums)
  } catch (error) {
    next(error)
  }
}

export async function getAlbumById(req, res, next) {
  try {
    const { albumId } = req.params()

    const album = Album.find(albumId).populate('songs')

    if (!album) {
      res.status(404).json({ message: 'album not found' })
    }

    res.status(200).json(album)
  } catch (error) {
    next(error)
  }
}
