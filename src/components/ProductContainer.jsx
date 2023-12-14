import React,{useState,useEffect} from "react"
import { useSelector,useDispatch } from "react-redux";
import Card from "./Card";
import "./card.css"
import AddIcon from '@mui/icons-material/Add';

import { useNavigate } from "react-router-dom";
import getRandomData from "../helper/getRandom";
import { Slider } from "antd";
import { setFilteredData, setPriceRange } from "../redux/action/actionTypes";



 const  ProductContainer = () => {
  console.log('run: show component container')

   const [isProducts, setProducts] = useState(null)
   const dispatch = useDispatch();
   const navigate = useNavigate();
   
   const {productData, singleProduct,productData2,priceRange } = useSelector((state) => state?.productReducer); // Assuming you have a productData reducer in your state
   console.log("🚀 ~ file: ProductContainer.jsx:21 ~ ProductContainer ~ productData:", productData)


    function onChange(value) {
      console.log('onChange: ', value);
      // setProducts(datas)
    }
  
    function onAfterChange(value) {
      dispatch(setPriceRange(value[0], value[1]))
      // setProducts(datas)
  
  
    // console.log('isProducts1', isProducts)
      // const filteredData = isProducts?.filter((item) => value[0] <= item?.price && item?.price <= value[1])
      dispatch(setFilteredData(value));
    }

    // useEffect(()=>{
    //  setProducts(datas)
    // },[])
      
    const handleAdd=()=>{

   
   
  //  const data =   {
  //        id:"2",
  //        "title": "krox galxy five serice 2025",
  //        "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
  //        "price": 1500,
  //        "discountPercentage": 4.15,
  //        "rating": 4.25,
  //        "stock": 50,
  //        "brand": "iphone",
  //        "category": "laptops",
  //        "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
  //        "images": [
  //        "https://i.dummyjson.com/data/products/7/1.jpg",
  //        "https://i.dummyjson.com/data/products/7/2.jpg",
  //        "https://i.dummyjson.com/data/products/7/3.jpg",
  //        "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
  //        ]
  //        }



  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  function getRandomRating() {
    return getRandomNumber(1, 5).toFixed(2);
  }
  
  function getRandomStock() {
    return Math.floor(getRandomNumber(1, 100));
  }
  
  

    function getRandomArraySubset(array, count) {
      const shuffledArray = array.sort(() => Math.random() - 0.5);
      return shuffledArray.slice(0, count);
    }


    // get reandom data from function when user clikc on add button

    const allImagesArray =  [

        // objects
        "http://www.freeimageslive.com/galleries/home/playroom/pics/objects00016g.jpg",
        "http://www.bootleg-objects.com/download/re_sl_totale.jpg",
        "http://blogs.ukoln.ac.uk/cultural-heritage/files/2010/03/NIM_1983-99_23.jpg",
        "http://www.wallsave.com/wallpapers/1920x1080/newera/262606/newera-black-cap-new-york-city-monochrome-objects-ny-262606.jpg",
        "http://www.freeimageslive.com/galleries/objects/watch/pics/objects00242.jpg",
        "http://www.imageafter.com/dbase/images/objects_household/b13objects_household036.jpg",
        "http://www.freeimageslive.com/galleries/wallpaper/work/objects00018g_dt1024.jpg",
        "http://www.hdwallpaperstop.com/wp-content/uploads/2013/06/3D-Object-Dice-HD-Wallpaper.jpg",
        "http://www.imageafter.com/dbase/images/objects/b10objects019.jpg",
        "http://www.imageafter.com/dbase/images/objects_circuits/b16objects_circuits006.jpg",
        "http://www.sharperliving.co.uk/wp-content/uploads/2013/05/Aston-Martin-V12-Vantage-S-Objects-of-Desire-Marron-Black.jpg",
        "http://blog.gessato.com/wp-content/uploads/2011/11/manoteca-repurposed-objects-design-gessato-gblog-4.jpg",
        "http://www.imageafter.com/dbase/images/objects/b12objects024.jpg",
        "http://www.imageafter.com/dbase/images/objects/b4objects023.jpg",
        "http://www.imageafter.com/dbase/images/objects/b19objects166.jpg",
        "http://i.imgur.com/eeCjIGO.jpg",
        "http://farm2.staticflickr.com/1074/1105249028_762c6da62b_o.jpg",
        "http://www.imageafter.com/dbase/images/objects_household/b11objects_household005.jpg",
        "http://fc09.deviantart.net/fs22/f/2007/330/5/6/Antique_Cup_and_Saucer_5_by_inspyretash_stock.jpg",
        "http://fc02.deviantart.net/fs71/f/2013/087/f/6/knife_by_moonglowlilly-d5zlh11.png",
        "http://www.vectorfree.com/media/vectors/light-bulb-silhouette.jpg",
        "http://www.imageafter.com/dbase/images/objects_household/b7objects_household011.jpg",
        "http://www.grocotts.co.za/files/story_photos/PLACED%20_29%20June_p17_.website.JPG",
        "http://www.designboom.com/cms/images/jenny/livressesuccion/succion01.jpg",
        "http://www.luluguinness.com/world/wp-content/uploads/2013/10/IMG_1189-1.jpg",
        "http://fc08.deviantart.net/fs71/i/2012/329/0/0/street_lamp_by_paradise234-d5m4wbw.png",
        "http://www.lakesidearts.org.uk/SiteData/Root/Image/APR%20-%20AUG/Jennifer%20Collier.jpg",
        "http://fc03.deviantart.net/fs71/i/2013/082/6/c/png_candle_by_moonglowlilly-d5z1n6w.png",
        
        
        // animals
        "http://wallike.com/wp-content/uploads/2013/10/Cute-Animals-1280x720.jpg",
        "http://www.fooddialogues.com/sites/default/files/qa/Animal%20Welfare%20Sow%20Housing%20003.jpg",
        "http://images5.fanpop.com/image/photos/27900000/Awesomw-Animals-animals-27943051-1920-1200.jpg",
        "http://hdlatestwallpapers.com/wp-content/uploads/2013/06/Fish-Cute-Animals-wallpapers.jpg",
        "http://static.hothdwallpaper.net/5194c2137a83e13997.jpg",
        "http://img.wallbeam.com/91processed/animals%20southern%20rhinoceros%20hd%20wallpapers.jpg",
        "http://upload.wikimedia.org/wikipedia/commons/0/00/Frog_vivisection.jpg",
        "http://www.desktopas.com/files/2013/06/Nature-Animals-Cute-Little-Baby-Elephant.jpg",
        "http://www.wallsave.com/wallpapers/1280x1024/beauty/161727/beauty-high-resolution-animal-animals-161727.jpg",
        "http://images5.fanpop.com/image/photos/31400000/Animals-animals-31476797-1366-768.jpg",
        "http://www.wallsave.com/wallpapers/2560x1600/wild-animals/669585/wild-animals-horse-on-grassland-scenery-horses-669585.jpg",
        "http://wallpapers.funmunch.com/wallpaper_sea_animal_wallpaper_003-1600x1200.jpeg?w=1600&h=1200&f=sea_animal_wallpaper_003.jpg",
        "http://wallpoper.com/images/00/42/92/59/sea-star-wallpaper-other-animals_00429259.jpg",
        "http://upload.wikimedia.org/wikipedia/commons/4/47/Octopus_shell.jpg",
        
        // actors
        
        "http://i.imgur.com/TzPUFUB.jpg",
        "http://wall.kopimik.com/ccv34tM/famous-actresses-hugh-jackman-wallpaper-actors.jpg",
        "http://4.bp.blogspot.com/-FWmOyN2wFTI/TlRKQ2luZeI/AAAAAAAABgE/W3cKvcwmdoo/s1600/80_tif.jpg",
        "http://img1.rnkr-static.com/node_img/96/1918857/full/robert-de-niro-recording-artists-and-groups-photo-1.jpg",
        "http://www.empireonline.com/images/uploaded/men-vin-diesel-bald-1711592293(1).jpg",
        "http://img1.gtsstatic.com/wallpapers/6381bbc236fb373d5969920f7bb38262_large.jpeg",
        "http://jeetkunedo17.e-monsite.com/medias/images/bruce-lee-4.jpg",
        "http://www.freewebs.com/tombraidersector/Angelina-Jolie.jpg",
        "http://images2.fanpop.com/image/photos/10300000/pitt-brad-pitt-10357723-1200-944.jpg",
        "http://www.odysseeducinema.fr/galerie/Hanks%20Tom/TomHanks16.jpg",
        "http://www.starok.com/html/photos/more/clara-morgane-7875.jpg",
        "http://www.hdwpapers.com/walls/jean_reno_wallpaper_7-wide.jpg",
        "http://www.tophostgames.com/wp-content/uploads/2013/09/the-rock-as-kratosfodecasting--the-rock-as-kratos-pp1pf6fh.jpg"
        
        ]
   
    
    const randomImageSubset = getRandomArraySubset(allImagesArray, 1); // Change 5 to the desired number of random images
    
    console.log(randomImageSubset);

  function getRandomData() {
    return  {
      id: Math.floor(getRandomNumber(1, 1000)).toString(),
      title: "krox galxy five serice " + Math.floor(getRandomNumber(2020, 2030)),
      description: "Random Description " + Math.floor(getRandomNumber(1, 100)),
      price: Math.floor(getRandomNumber(500, 2000)),
      discountPercentage: getRandomNumber(0, 10).toFixed(2),
      rating: getRandomRating(),
      stock: getRandomStock(),
      brand: "Random Brand " + Math.floor(getRandomNumber(1, 10)),
      category: "Random Category " + Math.floor(getRandomNumber(1, 5)),
      thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      images:randomImageSubset,
    };
  }

      
    const addData = [...isProducts, getRandomData()]
    setProducts(addData)
  
    }
   
      // we delete product locally 
      // const handleDelete = (id) => { 
      //   const updatedProducts = isProducts.filter((product) => product.id !== id);
      //   setProducts(updatedProducts)
      // };
       


    useEffect(()=>{
      // setProducts(datas)
      console.log('run: productContainer useEefect')

    },[])
    
      
    
        return(
          <div className="productcontainer">
          <div className="slider" style={{
            margin:"2rem",
          }}>

          <Slider style={{ display: "none" }} defaultValue={30} onChange={onChange} onChangeComplete={onAfterChange} />
          <Slider range step={10} defaultValue={[20,1000]} onChange={onChange} onChangeComplete={onAfterChange}
            min={0}
            max={2000}
      


          />
          </div>
          
       
          <div className="parent">
            {
              productData?.map((product)=> {
                {/* console.log("map",product.price) */}
                return(
      
                  <Card isProducts={isProducts}   id={product?.id} title={product?.title} description = {product?.description} price={product?.price} rating={product?.rating} image={product?.images?.[0]}  />
                ) 
              })
      
            }
              </div>
              <div className="addbtn">
   
              <AddIcon onClick={handleAdd} fontSize="large"/>
              </div>
          </div>
        )
  }
  
  export default ProductContainer