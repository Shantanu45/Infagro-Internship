let count = 0

let editor = ""

let allEditor = ""

let form1 = document.querySelector('form')
let AddBtn = document.getElementById('add')
var content = document.querySelector('input[name=content]');
let fields = []
let contentObj = {}


function createEditor(count) {
  editor = `<div class="row">

<div class="row form-group">
  <div class="standalone-container">
    <label for="content">Editor</label>
    <input name="content${count}" type="hidden">
    <div class="toolbar-container${count}" 
    style="
    display: none;
    ">
      <span class="ql-formats">
        <select class="ql-font" title="Select Font"></select>
        <select class="ql-size" title="Font Size"></select>
      </span>
      <span class="ql-formats">
        <button class="ql-bold" title="Bold"></button>
        <button class="ql-italic" title="Italic"></button>
        <button class="ql-underline" title="Underline"></button>
        <button class="ql-strike" title="Strike"></button>
      </span>
      <span class="ql-formats">
        <select class="ql-color" title="Font Color"></select>
        <select class="ql-background" title="Highlight Text"></select>
      </span>
      <span class="ql-formats">
        <button class="ql-script" value="sub" title="Subscript"></button>
        <button class="ql-script" value="super" title="Superscript"></button>
      </span>
      <span class="ql-formats">
        <button class="ql-header" value="1" title="Heading 1"></button>
        <button class="ql-header" value="2" title="Heading 2"></button>
        <button class="ql-blockquote" title="Blockquote"></button>
        <button class="ql-code-block" title="Code Block"></button>
      </span>
      <span class="ql-formats">
        <button class="ql-list" value="ordered" title="Ordered List"></button>
        <button class="ql-list" value="bullet" title="Bullet List"></button>
        <button class="ql-indent" value="-1" title="Indent Left"></button>
        <button class="ql-indent" value="+1" title="Indent Right"></button>
      </span>
      <span class="ql-formats">
        <button class="ql-direction" value="rtl"></button>
        <select class="ql-align" title="Align"></select>
      </span>
      <span class="ql-formats">
        <button class="ql-link" title="Insert link"></button>
        <button class="ql-image" title="Insert Image"></button>
        <button class="ql-video" title="Insert Video"></button>
        <button class="ql-formula" title="Insert Formula"></button>
      </span>
      <span class="ql-formats">
        <button class="ql-clean" title="Clear All Formats"></button>
      </span>
    </div>
    <div class="editor-container${count}" 
    style="border: solid 1px grey;
    height: 100px;
    width: 500px;
    "></div>
    
  </div>
  <!-- <div class="row" >
    
  </div> -->
</div>

</div>
`
  allEditor += editor;
}


AddBtn.addEventListener('click', () => {
  createEditor(count)
  editorWButton = allEditor + `<button class="btn btn-primary" type="submit">Save</button>`
  form1.innerHTML = editorWButton
  
  for (let i = 0; i <= count; i++) {
    if(i == 0){
      fields = []
    }
    fields.push(addQuill(i))
  }
  
  count++
}) 


form1.onsubmit = function (e){
  e.preventDefault();
  for(let i = 0; i < count; i++){
    document.querySelector(`input[name=content${i}]`).value += JSON.stringify(fields[i].getContents());
    
  }
  contentObj = {
    Section: 1,
    Question: 1,
    Content: $(form1).serializeArray()
  };
  console.log(contentObj)
}
