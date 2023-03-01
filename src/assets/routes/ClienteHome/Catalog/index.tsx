import './styles.css'
import computerImg from '../../../assets/pc.jpg'
import HeaderClient from '../../../../components/HeaderClient';
import SearchBar from '../../../../components/SearchBar';
import CatalogCard from '../../../../components/CatalogCard';
import ButtonNextPage from '../../../../components/ButtonNextPage';
import { ProductDTO } from '../../../../model/product';

const product: ProductDTO = {
  id:2,
  name: "Smart tv",
  description:"tv muito bonita",
  imgUrl:"https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price:3500.99,
  categiries:
    [
      {
        id:1,
      name: "Eletrônicos"
    },
  
    {
      id:2,
      name: "Computadores"
    },
  
    {
      id:3,
      name: "SmartTv"
    },
    ]
  }

export default function Catalog(){

    return (
        <>
        <main>
      <section id="catalog-section" className ="dsc-container">
        <SearchBar/>
        <div className ="dsc-catalog-cards dsc-mb20 dsc-mt20">
        
         <CatalogCard product={product}/>
         <CatalogCard product={product}/>
         <CatalogCard product={product}/>
         <CatalogCard product={product}/>
         <CatalogCard product={product}/>
         <CatalogCard product={product}/>
         <CatalogCard product={product}/>
         <CatalogCard product={product}/>
         <CatalogCard product={product}/>
         <CatalogCard product={product}/>
         <CatalogCard product={product}/>

        </div>

        <ButtonNextPage/>
      </section>
    </main>
    </>
    );

}