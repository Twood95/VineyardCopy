import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
      <div className="pv5 pv6-l ph3 bg-center cover" style={{
        backgroundImage: image && `url(${image})`
      }}>
        <div className="mw7 center ph3">
          <div className="db mb3">
            <div className="mw7 relative bg-fix-primary mb3">
              <h1 className="f2 f1-l b di lh-title mb3 white mw6 bg-primary">
                { entry.getIn(["data", "title"]) }
              </h1>
            </div>
            <div className="mw7 relative bg-fix-primary">
            </div>
          </div>
        </div>
      </div>

      <div className="bg-off-white pv4">
        <div className="ph3 mw7 center">
          <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "heading"])}</h2>
          <p className="mb4 mw6">{entry.getIn(["data", "description"])}</p>
      </div>
      </div>

      <div className="bg-off-white pv4">
        <div className="ph3 mw7 center">
          <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "intro", "heading"])}</h2>
          <p className="mb4 mw6">{entry.getIn(["data", "intro", "description"])}</p>

          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {(entry.getIn(["data","intro", "blurbs"]) || []).map((blurb, index) => <div className="ph2-ns w-50-ns mb4" key={index}>
            <h3>{blurb.get("name")}</h3>
            <h4>{blurb.get("title")}</h4>
              <img src={blurb.get("image") && getAsset(blurb.get("image"))} alt="" className="center db mb3" style={{width: "240px"}}/>
              <p>{blurb.get("text")}</p>
            </div>)}
          </div>
        </div>
      </div>



      <div className="mw7 center ph3 pv4">

        <div className="flex flex-wrap mhn1">
          <div className="w-100 w-50-ns ph1-ns">
            <img src={getAsset(entry.getIn(["data", "main", "image1", "image"]))}/>
          </div>

          <div className="w-100 w-50-ns ph1-ns">
            <img src={getAsset(entry.getIn(["data", "main", "image2", "image"]))}/>
          </div>

          <div className="w-100 ph1-ns">
            <img src={getAsset(entry.getIn(["data", "main", "image3", "image"]))}/>
          </div>
        </div>
      </div>

      <div className="pb4">
        {(entry.getIn(['data', 'testimonials']) || []).map((testimonial, index) => <div className="center mb3 ph3" key={index}>
        	<blockquote className="bg-grey-1 primary pa3 mb3 br1 b mw6 center">
        		<p className="f4 mb0">“{testimonial.get('quote')}”</p>
        		<cite className="tr db grey-3">{testimonial.get('author')}</cite>
        	</blockquote>
        </div>)}
      </div>


    </div>;
  }
}
