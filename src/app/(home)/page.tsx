import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";

export default async function Home() {

  const response = await fetch(`${process.env.BACKEND_URL}/books`);
    if(!response.ok){
      throw new Error('An error occoured while fetching books')
    }
    const booksList = await response.json()
    console.log(booksList);

  return (
    <>
      <Banner />
      <BookList books={booksList}/>
    </>
  );
}
