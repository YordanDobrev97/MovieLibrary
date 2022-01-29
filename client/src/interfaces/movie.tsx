export default interface Movie {
    _id: string;
    name: string;
    image: {medium: string};
    description: string;
    isAdded: boolean;
}