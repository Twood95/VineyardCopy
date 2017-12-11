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



        <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "heading"])}</h2>



      <div className="">
        {(entry.getIn(["data","intro", "blurbs"]) || []).map((blurb, index) => <div className="" key={index}>
        <h3 className="f3">{blurb.get("header")}</h3>
          <p>{blurb.get("text")}</p>
        </div>)}
      </div>



      <div className="mb4">
        <h4 className="f3 b lh-title mb3 tc">Drop us a line below</h4>

        <form action="">
          <div className="flex-l mhn1-l">

            <div className="ph1-l w-50-l">
              <fieldset>
                <input type="text" id="name" placeholder="Name" className="w-100 mb2"/>
                <label for="name">Name</label>
              </fieldset>
            </div>

            <div className="ph1-l w-50-l">
              <fieldset>
                <input type="email" id="email" placeholder="Email" className="w-100 mb2"/>
                <label for="email">Email</label>
              </fieldset>
            </div>
          </div>


          <fieldset>
            <textarea name="name" placeholder="Your message" rows="8" cols="80" id="message" className="w-100"></textarea>
            <label for="message">Your message</label>
          </fieldset>

          <div className="tc">
            <button type="submit" className="btn w-100 w-auto-ns raise">Submit</button>
          </div>
        </form>
      </div>




    </div>;
  }
}
