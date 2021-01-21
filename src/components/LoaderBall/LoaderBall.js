import React from 'react'
import Loader from "react-loader-spinner"

export default function LoaderBall() {
    return (
        <div className="LoaderBall">
            <Loader type="BallTriangle" color="#3F51B5" height={80} width={80} />
        </div>
    )
}
