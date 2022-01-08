export default interface Movie {
  _id: number;
  title: string;
  images: { posterArt: { url: string } };
  description: string;
}
