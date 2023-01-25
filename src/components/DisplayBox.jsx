import React from "react";

const DisplayBox = (props) => {
    const {boxGenList} = props

    return (
        <div>
            {
                boxGenList.map((boxGen) => (
                    <div key={boxGen.id} style={{
                        display: "inline-block",
                        margin: '10px',
                        height: boxGen.height + 'px',
                        width: boxGen.width + 'px',
                        backgroundColor: boxGen.color
                        }}>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayBox;
