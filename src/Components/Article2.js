import React from 'react';
import './Article.css';
import bg from "./assets/blender-general.png"
import be from "./assets/blender-edit.png"
import bp from "./assets/blender-pose.png"

function Article2() {

  return (
    <div 
      className="article" >
      <h1>Blender Scripts</h1>
        <h2>Why <i>these</i> <a href="https://github.com/yida98/CharAnimBPY" target="_blank" >tools</a></h2>
        <p>This script covers a lot of methods that will be helpful when working on a 3D rig in Blender. 
            A lot of steps in 3D rigging are repetitive in nature yet Blender doesn't provide the appropriate batch operations to complete these tasks due to heavy ambiguity between the objects' attributes, especially while exiting in a 3D environment. 
            While I was working on my 3D animation project, I found myself in need of a lot of batch operations so I went ahead and created them and as I worked on my project, I added more and more methods into the script.</p>
        <section>
            <h2>General tools</h2>
            <div className="grid ">
                <img src={bg} alt="Image" className="gleft" />
                <ol className="gright">
                    <li>Batch renaming of all selectable objects including armatures, meshes, edit bones, and pose bones.
                        <br />This function retains the input name for dynamic reuse.</li>
                </ol>
            </div>
        </section>
        <section>
            <h2>Bone Operations</h2>
            <h3>edit mode</h3>
            <div className="grid ">
                <img src={be} alt="Image" className="gleft" />
                <ol className="gright">
                    <li>Add bones method
                        <br/>Given an armature (selected) and an array of selected vertices, primitively add edit bones to the selected vertices.
                        <br/>Customization includes bendy bone (which will extend the customization of segments), bone direction (positive or negative), and bone display size. 
                    </li>
                    <li>Add control bones
                        <br/>Batch add control bones to selected bones with the 'CTRL_' prefix.
                        <br/>Customization includes choosing a pose bone display object.

                    </li>
                    <li>Batch toggle bone deform

                    </li>
                    <li>Batch bone segmentation
                        <br/>Apply segmentation to an array of edit bones.
                    </li>
                    <li>Batch straighten bones
                        <br/>Straighen the selected edit bones along the selected axis.
                        <br/>Default pivot point is the bone tail but this can be toggled.
                    </li>
                </ol>
            </div>
            <h3>pose mode</h3>
            <div className="grid">
                <img src={bp} alt="Image" className="gleft" />
                <ol className="gright" >
                    <li>Batch modify bone constraints
                        <br/>This method can delete all of the bone constraints of the selected pose bones.
                        <br/>Given an array of pose bones, let every bone in the array copy all the bone constraints of the active bone.

                    </li>
                    <li>Batch change display
                        <br/>From the dropdown, select an existing object in the project to set as the display of all selected pose bones.
                    </li>
                </ol>
            </div>

        </section>
        <section>
            <h2>Some thoughts</h2>
            <p>Learning the BPY module wasn't difficult but a lot of the challenge of this project comes from learning how to work in the 3D environment. 
                I never thought I would ever apply linear algebra in real life but that knowledge turned out to be tremendeously helpful when I was working on this project.</p>
        </section>
      </div>
  );
}

export default Article2;
