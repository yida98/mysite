import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Article.css';
import bg from "./assets/blender-general.png"
import githubIcon from "./assets/github.png"

function Article2() {

  return (
    <div 
      className="article" >
      <h1>Blender Scripts</h1>
      <section>
        <h2>Functions included in the <a href="https://github.com/yida98/CharAnimBPY" target="_blank" >add-on</a></h2>
        <section>
            <h3>General tools</h3>
            <img src={bg} alt="Image" className="small" />
            <ol>
                <li>Batch renaming of all selectable objects including armatures, meshes, edit bones, and pose bones.
                    <br />This function retains the input name for dynamic reuse.</li>
            </ol>
        </section>
        
        <h3>Bone Operations</h3>
      </section>
      </div>
  );
}

export default Article2;
