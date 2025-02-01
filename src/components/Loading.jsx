import React from 'react'

const Loading = () => {
    return (
        <div className="bg-white fixed w-screen h-screen flex-col gap-4 z-[100] m-auto items-center flex overflow-hidden justify-center">
            <div className='three-body'>
                <div className="three-body__dot" />
                <div className="three-body__dot" />
                <div className="three-body__dot" />
            </div>
            <div>
                <p className="font-general">Loading...</p>
            </div>
        </div>
      );
}

export default Loading