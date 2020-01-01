import React from "react";
import Info from "./info";
// emoji={emojipedia.emoji}
//   name ={emojipedia.name}
//   meaning ={emojipedia.meaning}
function emoji(props) {
  return (
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              <Info emojiInfo={props.emoji} />
            </span>
            <span>
              <Info emojiInfo={props.name} />
            </span>
          </dt>
          <dd>
            <Info emojiInfo={props.meaning} />
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default emoji;
