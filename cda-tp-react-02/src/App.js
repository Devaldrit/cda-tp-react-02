import './App.css';
import { useState } from "react";
function App() {
  //fonction click
  const [click, setClick] = useState(0)
  
  function incrementClickHandler(){
    setClick(click + 1)
  }
  
  function decrementClickHandler(){
    setClick(click - 1)
  }

  //function like
  const [like, setLike] = useState(0);
  function likeIncrement(){
    setLike(like +1)
  }

  //function dislike
  const [dislike, setDislike] = useState(0);
  function dislikeIncrement(){
    setDislike(dislike + 1)
  }

  //Diaporama
  //tableau contenant les images
  const images = 
  [
    "https://cdn.pixabay.com/photo/2019/06/24/19/15/sea-4296705_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/09/27/15/28/usa-2792396_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/02/28/17/51/winter-4026451_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/20/11/39/sunset-2661413_1280.jpg"
  ];

  const [image, setImgae] = useState(0)

  //next image
  function nextImage() {
    console.log("next")
    if (image === (images.length - 1)) {
      setImgae(0);
    } else if (image >= 0) {
      setImgae(image + 1)
    }
  }
  
  //prev image
  function prevImage() {
    console.log("prev")
    if (image === 0) {
      setImgae(images.length - 1)
    } else if(image <= images.length - 1){
      setImgae(image - 1)
    }
  }

  return (
    <div className="App">
      <h1>TP REACT</h1>
      {/* compteur de clique */}
      <section>
            <h2>Compteur de clic</h2>
            <div className={"containerClick"}>
                <div className={"nbClick"}>
                    {click}
                </div>
                <div className={"btnClicker"}>
                    <button onClick={decrementClickHandler} className={"decrement"}>-</button>
                    <button onClick={incrementClickHandler} className={"increment"}>+</button>
                </div>
            </div>
        </section>

        <section>
          <h2>Diaporama</h2>
          <div>
            <img src={images[image]} />
          </div>
          <div>
            <button onClick={prevImage}>prev</button>
            <button onClick={nextImage}>next</button>
          </div>
        </section>
        
        {/* Compteur de like et dislike */}
        <section>
          <h2>Compteur de like et de dislike</h2>
          <div className='containerLike'>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dolorum sunt tempora explicabo corrupti, nobis excepturi doloremque cumque delectus laborum repellendus laboriosam suscipit natus incidunt nam blanditiis velit fugiat consequuntur!
            </p>
          </div>
          <div className='btnClikerLike'>
            <div className='like'>
              <div>
                {like}
              </div>
              <button onClick={likeIncrement} className='like'>Like</button>
            </div>
            <div className='btnClikerDislike'>
              <div>
                {dislike}
              </div>
              <button onClick={dislikeIncrement} className='Dislike'>Disike</button>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
