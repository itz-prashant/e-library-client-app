import { Book } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookCard = ({book}:{book:Book}) => {
  return (
    <div className='flex gap-5 border p-2 shadow-md'>
        <Image src={book.coverImage} alt={book.title} width={0} height={0} sizes='100vw' style={{width:'auto', height:'12rem'}}/>
        <div>
            <h2 className='line-clamp-2 mb-4 font-bold text-primary-600 mt-4'>{book.title}</h2>
            <p>{book.author.name}</p>
            <Link href={`/book/${book._id}`} className='border text-primary-500 font-medium hover:border-primary-100 hover:bg-primary-100 border-primary-500 py-2 px-3 rounded'>Read more</Link>
        </div>
    </div>
  )
}

export default BookCard