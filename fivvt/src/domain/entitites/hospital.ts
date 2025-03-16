interface PhotoBit {
  id: number;
  image: string;
}

interface PhoneBit {
  comment: string;
  phone: string;
}

export interface IHospital {
  id: number;
  photos: PhotoBit[];
  name: string;
  address: string;
  phones: PhoneBit[];
  url: string;
  url_on_map: string;
}
