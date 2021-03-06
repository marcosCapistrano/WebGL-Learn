const gl = document.getElementById("c").getContext("webgl");
const programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);
 
  var arrays1 = {
    a_pos: [0.3988316401754795, 0.559687400441556, 0, 0.39375145110219734, 0.5443679363691829, 0, 0.38045134343906867, 0.5351045433045364, 0, 0.36401150625937584, 0.5351045433045364, 0, 0.3507113985962471, 0.5443679363691829, 0, 0.34563120952296494, 0.559687400441556, 0, 0.3507113985962471, 0.5755546588018943, 0, 0.36401150625937573, 0.5857139956872809, 0, 0.38045134343906867, 0.5857139956872809, 0, 0.39375145110219734, 0.5755546588018943, 0],
  };

  var arrays2 = {
    a_pos: [0.4788382660889715, 0.639682869162226, 0.08, 0.4737581323151331, 0.6243635406288381, 0.08, 0.4604581694278279, 0.615100209683584, 0.08, 0.44401851120089436, 0.615100209683584, 0.08, 0.4307185483135892, 0.6243635406288381, 0.08, 0.4256384145397508, 0.639682869162226, 0.08, 0.4307185483135892, 0.6555499428228848, 0.08, 0.44401851120089436, 0.6657091369513232, 0.08, 0.4604581694278279, 0.6657091369513232, 0.08, 0.4737581323151331, 0.6555499428228848, 0.08],
  };

  var arrays3 = {
    a_pos: [-0.5588597462819646, 0.719666352762389, 0.16, -0.5537798140354853, 0.7043475181648384, 0.16, -0.5404803787536557, 0.6950844135860934, 0.16, -0.5240413726829554, 0.6950844135860934, 0.16, -0.510741937401126, 0.7043475181648384, 0.16, -0.5056620051546465, 0.719666352762389, 0.16, -0.510741937401126, 0.7355327533128643, 0.16, -0.5240413726829554, 0.7456914271782387, 0.16, -0.5404803787536557, 0.7456914271782388, 0.16, -0.5537798140354853, 0.7355327533128643, 0.16],
  };

  var buffers = [
    twgl.createBufferInfoFromArrays(gl, arrays1),
    twgl.createBufferInfoFromArrays(gl, arrays2),
    twgl.createBufferInfoFromArrays(gl, arrays3),
  ]
 
  function render(time) {
    twgl.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
 
    gl.useProgram(programInfo.program);

    for(buffer of buffers) {
    twgl.setBuffersAndAttributes(gl, programInfo, buffer);
    twgl.drawBufferInfo(gl, buffer, gl.LINE_LOOP);
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