
// eslint-disable-next-line react/prop-types
function Product({image, className, alt, title, text}){
    return(
        <article className={className}>
            <img src={image} alt={alt}/>
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
    )
}

export default Product;