import styled from 'styled-components';

export const Row = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr auto auto auto;
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

export const Quantity = styled.span`
    font-size: 14px;
    color: #666;
`;

export const Total = styled.span`
    font-weight: bold;
    font-size: 16px;
`;
