import { Song } from '../models/song.model.js'
import { Album } from '../models/album.model.js'
import cloudinary from '../lib/cloudinary.js'

//helper function

const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: 'auto',
    })

    return result.secure_url
  } catch (error) {
    console.log('error in uploadToCloudinary', error)
    throw new Error('Error uploading to cloudinary')
  }
}

export const createSong = async (req, res, next) => {
  try {
    if (!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res.status(400).json({ message: 'please upload all files' })
    }

    const { title, artist, albumId, duration } = req.body

    const audioFile = req.files.audioFile
    const imageFile = req.files.imageFile

    const audioUrl = await uploadToCloudinary(audioFile)
    const imageUrl = await uploadToCloudinary(imageFile)

    const song = new Song({
      title,
      artist,
      audioUrl,
      imageUrl,
      duration,
      albumId: albumId || null,
    })

    await song.save()

    if (albumId) {
      await Album.findByIdAndUpdate(albumId, {
        $push: { songs: song._id },
      })
    }

    res.status(201).json(song)
  } catch (error) {
    console.log('error in createSong', error)
    next(error)
  }
}

export async function deleteSong(req, res, next) {
  try {
    const { id } = req.params

    const song = await Song.findById(id)

    //if song is in album , update

    if (song.albumId) {
      await Album.findByIdAndUpdate(song.albumId, {
        $pull: { songs: song._id },
      })
    }

    await song.findByIdAndDelete(id)

    res.status(200).json({ message: 'song deleted' })
  } catch (error) {
    console.log('error in deleteSong ', error)
    next(error)
  }
}

export async function createAlbum(req, res, next) {
  try {
    const { title, artist, releaseYear } = req.body
    const { imageFile } = req.files

    const { imageUrl } = await uploadToCloudinary(imageFile)

    const album = new Album({
      title,
      artist,
      imageUrl,
      releaseYear,
    })

    await album.save()

    res.status(201).json(album)
  } catch (error) {
    console.log('error in create a album', err)
    next(error)
  }
}

export async function deleteAlbum(req, res, next) {
  try {
    const { id } = req.params

    await Song.deleteMany({ albumId: id })
    await Album.findByIdAndDelete(id)
    res.status(200).json({message: 'album deleted successfully'})
  } catch (error) 
  console.log('error in deleteAlbum' , erro){
    next(error)
  }
}
