export default function SVGContainer({collection}) {
    return (
        <>
            <h3>{collection.name}</h3>
            <p>{collection.description}</p>
            <div className="svgicons_wrapper">
                <div>
                {
                    collection.list.map(icon => {
                        return (
                            <div className="svgicons" key={icon.filepath} >
                                <img loading="lazy" src={icon.filepath} alt={icon.name} />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}