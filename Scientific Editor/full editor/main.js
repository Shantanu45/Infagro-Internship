

function addQuill(count) {
  var quill = new Quill(`.editor-container${count}`, {
    modules: {
      syntax: true,
      toolbar: `.toolbar-container${count}`
    },
    placeholder: 'Write Here... ',
    theme: 'snow'
  });


  // console.log(fields)
  // var form = document.querySelector('form');
  // form.onsubmit = function () {
  //   // Populate hidden form on submit
  //   var content = document.querySelector('input[name=content]');
  //   content.value = JSON.stringify(quill.getContents());
  //   // var DeltaContent = quill.getContents();
  //   console.log(content.value)
  //   console.log("Submitted", $(form).serialize(), $(form).serializeArray());
  //   alert('Open the console to see the submit data!')

  //   return false;
  // };

  const toolbar = document.querySelector(`.toolbar-container${count}`);
  const Editor = document.querySelector(`.editor-container${count}`)

  document.addEventListener("click", function (evt) {
    targetElement = evt.target;  // clicked element

    do {
      if (targetElement == Editor || targetElement == toolbar) {
        // This is a click inside.
        toolbar.style.display = 'block'
        return;
      }
      targetElement = targetElement.parentNode;
    } while (targetElement);

    // This is a click outside.
    toolbar.style.display = 'none'
  });
  return quill

}

// quill.setContents([
//   { insert: 'Hello ' },
//   { insert: 'World!', attributes: { bold: true } },
//   { insert: '\n' }
// ]);

// setTimeout(function(){ quill.setContents(DeltaContent); }, 3000)

// console.log("Submitted", $(form).serialize(), $(form).serializeArray()); 
// quill.setContents(quill.getContents()));
// No back end to actually submit to!

// toolbar.style.display = 'none'
// Editor.addEventListener('click', ()=> {
//   toolbar.style.display = 'block'
// })

// Editor.addEventListener('mouseleave', ()=> {
//   toolbar.style.display = 'none'
// })



