interface PhotoBit {
  image: string;
  id: number;
  uploaded_at: string;
}

export interface IAlbum {
  id: number;
  title: string;
  photos: PhotoBit[];
  main_photo: {
    photo: PhotoBit;
  };
  created_at: string;
}
