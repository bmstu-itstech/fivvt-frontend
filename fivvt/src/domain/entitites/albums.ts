interface PhotoBit {
  image: string;
  id: number;
}

export interface IAlbum {
  id: number;
  title: string;
  photos: PhotoBit[];
  main_photo: {
    photo: PhotoBit;
  };
}
