import React, {Component} from "react"
import Toggler from "./Toggler"

function Favorite(props) {
    return (
        <Toggler defaultOnValue={false}  render={
            function({on, toggle}) {
                return (
                    <div>
                        <h3>Click heart to favorite</h3>
                        <h1>
                            <span style={{cursor: 'pointer'}}
                                onClick={toggle}
                            >
                                {on ? "❤️" : "♡"}
                            </span>
                        </h1>
                    </div>
                )
            }
        }/>
    ) 
}

export default Favorite
