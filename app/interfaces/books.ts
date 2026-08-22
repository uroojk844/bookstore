export interface ISearchResult {
  totalItems: number;
  items: IBook[]
}

export interface IBook {
  id: string;
  volumeInfo: VolumeInfo;
}

interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: number;
  categories: string[];
  imageLinks: ImageLinks;
}

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface IBookCard {
  id: string;
  volumeInfo: Pick<VolumeInfo, 'title' | 'authors' | 'categories' |'imageLinks' |'publishedDate'>
}

export interface IDetailsResult {

}