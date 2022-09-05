import {GifItem} from "./GifItem"
import useFetchGifs from "../hooks/useFetchGifs"


export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category )

      console.log({isLoading})

  return (
    <>
        <h3>{category}</h3>

        {
          isLoading && (
                <div className="sk-chase">
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                </div>
              ) 
        }

        <div className="card-grid">

          {
          images.map( ( image ) =>(
            <GifItem 
              key={image.id}
              title={image.title}
              url={image.url}
            />
          ))}   
        </div>
 
    </>
  )
}

