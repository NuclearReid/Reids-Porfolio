function Waves(){

    return (
        <div className="header">
            <div className="waves-container position-fixed bottom-0 start-0 w-100">
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 24" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(211,211,211,0.7)" />  {/* Light gray */}
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(169,169,169,0.5)" />  {/* Medium gray */}
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(128,128,128,0.3)" />  {/* Dark gray */}
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#000000" />  {/* Black */}
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default Waves;