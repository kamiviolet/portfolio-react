import SVGContainer from "../components/SVGContainer";
import svgCollection from "../constants/svgCollection";

export default function SVGCollection () {
    return (
            <section className="section svg_collection">
            <h2>SVG Collections</h2>
            <p>A github repo would be ready soon for download :)</p>
            {
                svgCollection.map(collection => {
                    return (
                        <div className="svg_collection_container" key={collection.name}>
                            <SVGContainer collection={collection} />
                        </div>
                    )
                })
            }
            </section>
    );
}