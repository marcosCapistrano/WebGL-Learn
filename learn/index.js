const gl = document.getElementById("c").getContext("webgl");
const programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);

  var arrays = {
    a_pos: [0, 0, 0, 0.5, 0.5, 0, -0.5, 0.5, 0],
  };

  const buffer = twgl.createBufferInfoFromArrays(gl, arrays)
 
  function render(time) {
    twgl.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    const uniforms = {
      time: time * 0.001,
      u_res: [gl.canvas.width, gl.canvas.height],
    };
 
    gl.useProgram(programInfo.program);

    twgl.setBuffersAndAttributes(gl, programInfo, buffer);
    twgl.setUniforms(programInfo, uniforms);
    twgl.drawBufferInfo(gl, buffer, gl.POINTS);
 
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);