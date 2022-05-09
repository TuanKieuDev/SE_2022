import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import EmptyFile from '../../../../Common/Empty/EmptyFile'
import HeadTitle from '../../../../Common/HeadTitle/HeadTitle'
import PopularData from '../PopData'


const PopularSingle = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = PopularData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
        <HeadTitle/>
        {item ? (
        <section className='single-page top'>
          {/* <img src={item.image} alt='' /> */}
          <div className='container'>
            <Link to='/' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>
            
            <article className='content flex'>
              <div className='main-content'>
                <img src={`../${item.image}`} alt=''/>
              </div>
              {/* --------- side-content--------- */}
              <div className='side-content'>
                <div className='box'>
                  <h2>How can we help you?</h2>
                  <p>{item.sidepara}</p>
                  <button className='outline-btn'>
                    <i className='fa fa-phone-alt'></i> Contact Us
                  </button>
                </div>
              </div>
              {/* --------- side-content--------- */}
            </article>


          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default PopularSingle