import styled from 'styled-components';

export const Row = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr auto auto;
    gap: 16px;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #eee;
`;

export const Image = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
`;

export const Title = styled.span`
    font-size: 14px;
`;

export const Info = styled.div`
    text-align: right;
    white-space: nowrap;
`;

export const Price = styled.div`
    font-weight: bold;
    font-size: 16px;
`;

export const Rating = styled.div`
    font-size: 12px;
    color: #666;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
`