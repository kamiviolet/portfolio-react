import '../css/background.css'

export default function Background() {
    return (
        <div className='sky dark'>
            {[...Array(200)].map((star, i) => {
                let style = {
                    left: Math.floor(Math.random() * 100) + '%', 
                    top: Math.floor(Math.random() * 100) + '%',
                    width: Math.floor(Math.random() * 3 + 0.25) + 'px',
                    height: Math.floor(Math.random() * 3 + 0.25) + 'px',
                    animationDuration: Math.floor(Math.random() * 7500 + 3000) + 'ms'
                }
                return <span key={"star_"+i} className='star' style={style}></span>
            })}
        </div>
    )
  } 