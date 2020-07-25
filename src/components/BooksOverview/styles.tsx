import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
`;

export const Book = styled.li`
    padding: 10px;
    border-radius: 10px;
    background-color: #f7f7f7;
    display: flex;
    align-items: stretch;

    :not(:last-of-type) {
        margin-bottom: 15px;
    }

    .visual {
        margin-right: 10px;

        img {
            width: 80px;
        }
    }

    .content {
        max-height: 110px;
        overflow: hidden;
        
        p {
            line-height: 20px;
        }
    }
`;