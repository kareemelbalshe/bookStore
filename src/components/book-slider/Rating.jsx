import React from 'react'

export default function Rating({rating,reviews}) {
  return (
    <>
        <div className="rating">
            <span>{rating}</span>
            <div className="">
            {rating>=1 ? <i className='bi bi-star-fill'></i> 
            : rating>=.5? <i className='bi bi-star-half'></i>
            : <i className="bi bi-star"></i>
            }
            {rating>=2 ? <i className='bi bi-star-fill'></i> 
            : rating>=1.5? <i className='bi bi-star-half'></i>
            : <i className="bi bi-star"></i>
            }
            {rating>=3 ? <i className='bi bi-star-fill'></i> 
            : rating>=2.5? <i className='bi bi-star-half'></i>
            : <i className="bi bi-star"></i>
            }
            {rating>=4 ? <i className='bi bi-star-fill'></i> 
            : rating>=3.5? <i className='bi bi-star-half'></i>
            : <i className="bi bi-star"></i>
            }
            {rating>=5 ? <i className='bi bi-star-fill'></i> 
            : rating>=4.5? <i className='bi bi-star-half'></i>
            : <i className="bi bi-star"></i>
            }
            </div>
            <span>({reviews} reviews)</span>
        </div>
    </>
  )
}
