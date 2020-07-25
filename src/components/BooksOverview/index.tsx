import React, { useEffect, useState } from 'react';
import api from './../../services/api';

import { Container, Book } from './styles';

interface BookInfo {
    id: string;
    title: string;
    description: string;
    image_url: string;
}
interface Books {
    book: BookInfo;
    read_count: string;
}

const BooksOverview: React.FC = () => {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');
    const [ books, setBooks ] = useState<Books[]>([]);

    async function handleGetData () {
        setLoading(true);
        try {
            const id = localStorage.getItem('@goodreadsID'); 

            if(id) {
                console.log('Id exists', id);
                const res = await api.get(`myBooks?uid=${id}`);
                const books = res.data.books;
            
                setBooks(books);
                console.log(books);

                console.log('Everything ', res.data);
            } else {
                setError('There is no user with this id! Please try again!');
                console.log('Id does not exist', id);
            }
        } catch(err) {
            console.log(err);
        }
        setLoading(false);
    }
    
    useEffect(() => {
        handleGetData();
    }, []);
    return (
        <Container>
            { loading && <p>Loading...</p> }
            { error && <p>{ error }</p>}
            <ul>
                { books && books.map(book => (
                    <Book key={ book.book.id } >
                        <div className="visual">
                            <img src={ book.book.image_url } alt={ book.book.title } />
                        </div>
                        <div className="content">
                            <h2>{ book.book.title }</h2>
                            <p>{ book.book.description }</p>
                        </div>
                    </Book>
                )) }
            </ul>
        </Container>
    );
}

export default BooksOverview;