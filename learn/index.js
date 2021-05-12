const gl = document.getElementById("c").getContext("webgl");
const programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);
 
  var arrays1 = {
    a_pos: [ 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 1.0, 0.0, -1.0 ],
  };


  var buffers = [
    twgl.createBufferInfoFromArrays(gl, arrays1),
  ]
 
  function render(time) {
    twgl.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport( 0, 0, gl.canvas.width, gl.canvas.height );
    gl.enable( gl.DEPTH_TEST );
   // gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    //gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
    const uniforms = {
      u_res: [gl.canvas.width, gl.canvas.height],
      aRadius: 500,
      aColor: [1.0, 1.0, 0.0, 1.0] 
    }
 
    gl.useProgram(programInfo.program);

    for(buffer of buffers) {
    twgl.setBuffersAndAttributes(gl, programInfo, buffer);
    twgl.setUniforms(programInfo, uniforms);
    twgl.drawBufferInfo(gl, buffer, gl.POINTS);
    }
 
    requestAnimationFrame(render);
  }

  function update() {
      const text = document.querySelector("#array");
      let array = text.value.split(", ");
      array = {
          a_pos: array
      }


      console.log(array)
      bufferInfo = twgl.createBufferInfoFromArrays(gl, array);
      console.log(bufferInfo)
  }
  requestAnimationFrame(render);