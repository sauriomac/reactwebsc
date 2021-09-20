import React from 'react';

import 
{
    ProductContainer,
    ProductHeading,
    ProductBox,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductBtn

} from './ProductsEle'

const Products = ({data,heading}) => {
    return (
        <div>
            <ProductContainer>
                <ProductHeading>{heading}</ProductHeading>
                    <ProductBox>
                    {data.map((product, index)=>{
                        return(
                            <ProductCard key={index}>
                                <ProductImg src={product.imgURL}/>
                                <ProductInfo>
                                <ProductTitle>{product.nombre}</ProductTitle>
                                <ProductDesc>{product.description}</ProductDesc>
                                <ProductPrice>{product.precio}</ProductPrice>
                                <ProductBtn>Order here</ProductBtn>
                                </ProductInfo>
                            </ProductCard>
                        )
                    })}
                    </ProductBox>
            </ProductContainer>
        </div>
    )
}

export default Products 