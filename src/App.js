import React from 'react'
import Main from './components/Main';
function App() {
  return (
    <>
    
      <div>
        <Main 
        imglink = "https://brignews.com/wp-content/uploads/2021/04/credit-brittle-paper.png" alt="foodPic" className="card__img"
        cardcat = "Amazon original series"
        cardtitle = "The Mauritanian"
        link = "https://app.primevideo.com/detail?gti=amzn1.dv.gti.8de299e1-a2b5-4c4e-a362-780bc2655e15&ref_=atv_dp_share_mv&r=web " />

        <Main 
        imglink = "https://images-na.ssl-images-amazon.com/images/I/A1GTXB1szFL._RI_.jpg" alt="foodPic" className="card__img"
        cardcat = "Amazon original series"
        cardtitle = "The Underground Railroad"
        link = "https://www.primevideo.com/detail/0TIXZLS0H0KQUMI0XB3R8JLXK0/ref=atv_hm_hom_c_bV3MWc_UKoqMT_1_6 " />
        <Main 
        imglink = "https://m.media-amazon.com/images/M/MV5BN2M5YmJmMTYtOGI3Yy00Mjk3LWI2MzYtMzFkMjg4ODMzMzg1XkEyXkFqcGdeQXVyMTEwNTQwNzU1._V1_.jpg" alt="foodPic" className="card__img"
        cardcat = "Amazon original series"
        cardtitle = "The Family Man"
        link = "https://www.primevideo.com/detail/0S3QYI59BAEI5KVLHCKSR91YGD/ref=atv_hm_hom_c_ipeGab_brws_3_2 " />
        <Main 
        imglink = "https://images-na.ssl-images-amazon.com/images/I/91XXikrTZuL._SL1500_.jpg" alt="foodPic" className="card__img"
        cardcat = "Amazon original series"
        cardtitle = "Snow White & the Huntsman"
        link = "https://www.primevideo.com/detail/0PHY9Y9MGFZT6U4TFQCCDJ5MZR/ref=atv_hm_hom_c_r1Fy1u_5_3 " />
        
      </div>
    </>
  )
}

export default App
