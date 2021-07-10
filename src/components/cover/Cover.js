import React from 'react';
import GRAPES from '../../media/GRAPES.mp4';



const Cover = () => {
    return ( 
        <>
             <div 
            //  style={{
            //  display: "block",
            //  position: "absolute",
            //  backgroundPosition: "center center",
            //  backgroundRepeat: "no-repeat",
            //  backgroundSize: "cover",
            //  top: 0,
            //  left: 0,
            //  right: 0,
            //  bottom: 0,
            //  width: "100%",
            //  height: "100%"
            // }}
             > 
                <video style={{ display: 'none' }}
alt="increase priority" autoPlay loop muted 
                // style={{position: "absolute",
                // top: 0,
                // bottom: 0,
                // right: 0,
                // left: 0,
                // margin: "auto",
                // minHeight: "80%",
                // minWidth: "80%",
                // }}
                >
                
                    <source src={GRAPES} type='video/mp4' />
                </video>
            </div>
        </>
    )
}

export default Cover