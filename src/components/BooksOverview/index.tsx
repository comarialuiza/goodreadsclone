import React, { useEffect, useState } from 'react';
import api from './../../services/api';

// import { Container } from './styles';

interface Books {
    id: string;
    title: string;
    description: string;
    image_url: string;
}

const BooksOverview: React.FC = () => {
    const [ loading, setLoading ] = useState(false);
    const [ books, setBooks ] = useState<Books[]>([]);

    async function handleGetData () {
        setLoading(true);
        try {
            const res = await api.get('myBooks?uid=75098237');
            const books = res.data.books;
            setBooks(books);
            console.log(res.data.books);
        } catch(err) {
            console.log(err);
        }
        setLoading(false);
    }
    
    useEffect(() => {
        handleGetData();
    }, []);
    return (
        <>
            { loading && <p>Loading...</p> }
            <ul>
                { books && books.map(book => (
                    <div key={ book.id } >
                        <h2>{ book.title }</h2>
                        <p>{ book.description }</p>
                        <img src={ book.image_url } alt={ book.title } />
                    </div>
                )) }
            </ul>
        </>
    );
}

export default BooksOverview;