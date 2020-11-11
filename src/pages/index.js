import React, { useEffect, useRef } from "react"
import { TimelineLite, TweenMax, Power3 } from "gsap"
import diya from "../images/diya.jpg"
import light from "../images/light.jpg"

const IndexPage = () => {
  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: 0.8 })

  useEffect(() => {
    // Images Vars
    const diyaImage = images.firstElementChild // or children[0]
    const lightImage = images.lastElementChild

    //content vars
    const headlineFirst = content.children[0].children[0]
    const headlineSecond = headlineFirst.nextSibling
    const contentP = content.children[1]
    const contentButton = content.children[2]

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } })

    //Images Animation
    tl.from(diyaImage, 1.2, { x: 400, y: 1280, ease: Power3.easeOut }, "Start")
      .from(
        diyaImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(lightImage, 1.4, { x: 400, y: 1280, ease: Power3.easeOut }, 0.4)
      .from(
        lightImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.4
      )

    //Content Animation
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 1.0,
      },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.9)
  }, [tl])

  return (
    <div className="hero" ref={el => (app = el)}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Happy</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Diwali</div>
                </div>
              </h1>
              <p>
                Deepawali is the Indian festival of lights, usually lasting five
                days and celebrated during the Hindu Lunisolar month Kartika.
                One of the most popular festivals of Hinduism
              </p>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => (images = el)}>
              <div className="hero-image girl">
                <img src={diya} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={light} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animation">
        <img
          className="paper-plane"
          src="https://www.searchpng.com/wp-content/uploads/2019/04/Crackers-Clipart-PNG-715x715.png"
        />
      </div>
    </div>
  )
}

export default IndexPage
